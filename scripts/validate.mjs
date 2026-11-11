// Checks every data file against the rules in CONTRIBUTING.md.
// Usage: node scripts/validate.mjs

import { relative } from 'node:path';
import { ROOT, TAGS, loadData, normalizeUrl } from './lib.mjs';

const BANNED = [
  'best', 'leading', 'ultimate', 'revolutionary', 'seamless', 'seamlessly', 'robust',
  'cutting-edge', 'world-class', 'next-gen', 'next-generation', 'industry-leading',
  'premier', 'unparalleled', 'game-changing', 'state-of-the-art', 'powerful', 'awesome',
  'comprehensive', 'leverage', 'leverages', 'empower', 'empowers', 'streamline', 'streamlines',
  'effortless', 'effortlessly', 'innovative', 'trusted', 'unrivaled', 'blazing',
];
const TRACKING = /[?&](utm_[a-z]+|ref|referrer|affiliate|aff|fbclid|gclid|mc_cid|mc_eid)=/i;
const EMOJI = /\p{Extended_Pictographic}/u;
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const FIELDS = new Set(['name', 'url', 'description', 'tags', 'language', 'repo', 'added', 'verified']);

const errors = [];
const seenUrls = new Map();
const seenNames = new Map();

function fail(file, entry, msg) {
  errors.push(`${relative(ROOT, file)}: ${entry?.name ?? '(unnamed)'}: ${msg}`);
}

function checkDescription(file, entry, text) {
  if (typeof text !== 'string') return fail(file, entry, 'description is required');
  if (text.length < 40 || text.length > 160) fail(file, entry, `description must be 40 to 160 characters (has ${text.length})`);
  if (!text.endsWith('.')) fail(file, entry, 'description must end with a period');
  if (!/^[A-Z0-9]/.test(text)) fail(file, entry, 'description must start with a capital letter or digit');
  if (/[–—]/.test(text)) fail(file, entry, 'description must not contain en or em dashes');
  if (text.includes('!')) fail(file, entry, 'description must not contain exclamation marks');
  if (EMOJI.test(text)) fail(file, entry, 'description must not contain emoji');
  if (/^(a|an|the) (tool|library|platform|solution) that\b/i.test(text)) fail(file, entry, 'description should not open with "A tool that"');
  if (entry.name && text.toLowerCase().startsWith(entry.name.toLowerCase() + ' ')) fail(file, entry, 'description should not start with the name');
  // "Best current practice" and "best practices" are document types, not marketing.
  const plain = text.replace(/\bbest (current )?practices?\b/gi, '');
  for (const word of BANNED) {
    if (new RegExp(`\\b${word}\\b`, 'i').test(plain)) fail(file, entry, `description uses marketing language: "${word}"`);
  }
}

function checkUrl(file, entry, url, field = 'url') {
  if (typeof url !== 'string' || !url.startsWith('https://')) return fail(file, entry, `${field} must be an https:// URL`);
  try {
    new URL(url);
  } catch {
    return fail(file, entry, `${field} is not a valid URL`);
  }
  if (TRACKING.test(url)) fail(file, entry, `${field} contains tracking or referral parameters`);
}

function claim(map, key, file, entry, what) {
  const prev = map.get(key);
  if (prev) fail(file, entry, `duplicate ${what}, already listed in ${relative(ROOT, prev)}`);
  else map.set(key, file);
}

function checkEntry(file, entry, { scope }) {
  if (typeof entry !== 'object' || entry === null) return fail(file, null, 'entry must be a mapping');
  for (const key of Object.keys(entry)) if (!FIELDS.has(key)) fail(file, entry, `unknown field "${key}"`);
  if (!entry.name || typeof entry.name !== 'string') fail(file, entry, 'name is required');
  checkUrl(file, entry, entry.url);
  if (entry.repo) checkUrl(file, entry, entry.repo, 'repo');
  checkDescription(file, entry, entry.description);

  if (!Array.isArray(entry.tags) || entry.tags.length === 0) fail(file, entry, 'tags must list at least one tag');
  else for (const t of entry.tags) if (!(t in TAGS)) fail(file, entry, `unknown tag "${t}" (allowed: ${Object.keys(TAGS).join(', ')})`);

  for (const field of ['added', 'verified']) {
    const value = entry[field] instanceof Date ? entry[field].toISOString().slice(0, 10) : entry[field];
    if (!DATE.test(String(value ?? ''))) fail(file, entry, `${field} must be a date in YYYY-MM-DD form`);
  }

  if (entry.url) claim(seenUrls, normalizeUrl(entry.url), file, entry, 'URL');
  // Names must be unique within the README and within the vendor directory.
  // The same project can appear once in each (for example an open-source server and its hosted offering).
  if (entry.name) claim(seenNames, `${scope}:${entry.name.toLowerCase()}`, file, entry, 'name');
}

function checkPath(file, path) {
  if (!path.name || !path.description || !Array.isArray(path.steps) || path.steps.length < 3) {
    return fail(file, path, 'a learning path needs a name, a description, and at least 3 steps');
  }
  for (const step of path.steps) {
    if (!step.name) fail(file, path, 'every step needs a name');
    checkUrl(file, step, step.url);
    checkDescription(file, step, step.description);
  }
}

const parts = loadData();
let count = 0;
for (const part of parts) {
  const scope = part.output === 'vendors' ? 'vendors' : 'readme';
  for (const section of part.sections) {
    if (!Array.isArray(section.entries)) {
      fail(section.file, null, 'file must contain a YAML list');
      continue;
    }
    for (const entry of section.entries) {
      if (section.type === 'paths') checkPath(section.file, entry);
      else checkEntry(section.file, entry, { scope });
      count++;
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`\n${errors.length} problem(s) found.`);
  process.exit(1);
}
console.log(`ok: ${count} entries valid`);
