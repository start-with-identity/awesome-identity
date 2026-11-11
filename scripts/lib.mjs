import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

export const TAGS = {
  oss: 'OSS',
  free: 'Free',
  freemium: 'Freemium',
  commercial: 'Commercial',
  paid: 'Paid',
  standard: 'Standard',
  gov: 'Gov',
  archived: 'Archived',
};

export function readYaml(path) {
  return YAML.parse(readFileSync(path, 'utf8'));
}

export function entryFile(part, section) {
  const dir = part.output === 'vendors' ? 'vendors' : 'entries';
  return join(ROOT, 'data', dir, `${section.id}.yml`);
}

// Loads sections.yml and attaches entries to every section.
export function loadData() {
  const { parts } = readYaml(join(ROOT, 'data', 'sections.yml'));
  for (const part of parts) {
    for (const section of part.sections) {
      section.file = entryFile(part, section);
      section.entries = existsSync(section.file) ? readYaml(section.file) ?? [] : [];
    }
  }
  return parts;
}

export function byName(a, b) {
  return a.name.localeCompare(b.name, 'en', { sensitivity: 'base', numeric: true });
}

// GitHub-style heading anchor.
export function slug(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s/g, '-');
}

// Used for duplicate detection: ignores scheme, www, trailing slash, and fragment.
export function normalizeUrl(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, '');
    const path = u.pathname.replace(/\/+$/, '');
    return `${host}${path}${u.search}`.toLowerCase();
  } catch {
    return url;
  }
}
