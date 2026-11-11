// Generates README.md and VENDORS.md from data/.
// Usage: node scripts/build.mjs [--check]
//   --check  exit 1 if the generated files differ from what is on disk.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, TAGS, loadData, byName, slug } from './lib.mjs';

const check = process.argv.includes('--check');
// README links to the other generated pages with absolute URLs, which awesome-lint requires.
const REPO_URL = 'https://github.com/start-with-identity/awesome-identity/blob/main';
const parts = loadData();

const template = (name) => readFileSync(join(ROOT, 'templates', name), 'utf8').trimEnd();
const filled = (section) => section.entries.length > 0;

function tagCodes(entry) {
  return (entry.tags ?? []).map((t) => `\`${TAGS[t] ?? t}\``).join(' ');
}

function entryLine(entry, showTags) {
  const tags = showTags ? tagCodes(entry) : '';
  return `- [${entry.name}](${entry.url})${tags ? ` ${tags}` : ''} - ${entry.description}`;
}

function renderPaths(section) {
  const out = [
    '<!-- Generated from data/entries/learning-paths.yml by scripts/build.mjs. Edit the YAML file, not this file. -->',
    template('LEARNING-PATHS.header.md'),
    '',
  ];
  for (const path of section.entries) {
    out.push(`## ${path.name}`, '', path.description, '');
    path.steps.forEach((step, i) => {
      out.push(`${i + 1}. [${step.name}](${step.url}) - ${step.description}`);
    });
    out.push('');
  }
  return out;
}

function renderReadme() {
  const toc = [];
  const body = [];
  let total = 0;

  for (const part of parts) {
    const sections = part.sections.filter(filled);
    if (sections.length === 0) continue;

    toc.push(`- [${part.title}](#${slug(part.title)})`);
    body.push(`## ${part.title}`, '');
    if (part.intro) body.push(part.intro, '');

    if (part.output === 'vendors') {
      for (const section of sections) {
        const count = section.entries.length;
        total += count;
        body.push(`- [${section.title}](${REPO_URL}/VENDORS.md#${slug(section.title)}) - ${section.summary} ${count} listed.`);
      }
      body.push('');
      continue;
    }

    for (const section of sections) {
      toc.push(`  - [${section.title}](#${slug(section.title)})`);
      body.push(`### ${section.title}`, '');
      if (section.intro) body.push(section.intro, '');
      if (section.type === 'paths') {
        // Steps reuse links from elsewhere in the list, so paths get their own page.
        for (const path of section.entries) {
          body.push(`- [${path.name}](${REPO_URL}/LEARNING-PATHS.md#${slug(path.name)}) - ${path.description}`);
        }
        body.push('');
        continue;
      }
      const entries = [...section.entries].sort(byName);
      total += entries.length;
      for (const entry of entries) body.push(entryLine(entry, part.tags !== false));
      body.push('');
    }
  }

  const header = template('README.header.md').replace('{{toc}}', toc.join('\n'));
  const footer = template('README.footer.md');
  const notice = '<!-- Generated from data/ by scripts/build.mjs. Edit the YAML files, not this file. -->';
  return { text: [notice, header, '', body.join('\n').trimEnd(), '', footer, ''].join('\n'), total };
}

function renderVendors() {
  const part = parts.find((p) => p.output === 'vendors');
  const sections = part.sections.filter(filled);
  const out = [
    '<!-- Generated from data/vendors/ by scripts/build.mjs. Edit the YAML files, not this file. -->',
    template('VENDORS.header.md'),
    '',
    '## Contents',
    '',
    ...sections.map((s) => `- [${s.title}](#${slug(s.title)}) (${s.entries.length})`),
    '',
  ];
  for (const section of sections) {
    out.push(`## ${section.title}`, '', section.summary, '', '| Vendor | What it does | Pricing |', '| --- | --- | --- |');
    for (const e of [...section.entries].sort(byName)) {
      out.push(`| [${e.name}](${e.url}) | ${e.description} | ${tagCodes(e)} |`);
    }
    out.push('', '[Back to contents](#contents)', '');
  }
  return out.join('\n');
}

const readme = renderReadme();
const outputs = {
  'README.md': readme.text,
  'VENDORS.md': renderVendors(),
  'LEARNING-PATHS.md': renderPaths(parts.flatMap((p) => p.sections).find((s) => s.type === 'paths')).join('\n'),
};

let stale = false;
for (const [file, text] of Object.entries(outputs)) {
  const path = join(ROOT, file);
  let current = '';
  try {
    current = readFileSync(path, 'utf8');
  } catch {}
  if (current === text) continue;
  if (check) {
    console.error(`${file} is out of date. Run: npm run build`);
    stale = true;
  } else {
    writeFileSync(path, text);
    console.log(`wrote ${file}`);
  }
}
if (stale) process.exit(1);
if (!check) console.log(`${readme.total} entries`);
