# Contributing

Thanks for helping. This list only stays useful if people who work in identity keep adding what they actually use and flag what has gone stale.

Inclusion is not endorsement. No entry is paid for. Vendors are listed alphabetically with neutral descriptions, and the rules below apply to everyone, including vendors submitting themselves.

## Two ways to contribute

**Open a pull request.** Entries live in YAML files under `data/`. Add or change one entry, open a PR, and CI checks it.

**Open an issue.** If you would rather not use git, fill in the [add a resource](https://github.com/start-with-identity/awesome-identity/issues/new?template=add-resource.yml) form and a maintainer will turn it into a PR.

Please do not edit `README.md`, `VENDORS.md`, or `LEARNING-PATHS.md`. They are generated from `data/` after a merge, and CI rejects PRs that change them.

## Where things go

- `data/sections.yml` lists every section in order. Each section `id` maps to a file.
- `data/entries/<id>.yml` holds entries for the main list.
- `data/vendors/<id>.yml` holds the vendor directory.

Search the repo for the URL and name before adding something. Each resource appears once in the list. A project can appear once in the main list and once in the vendor directory when both make sense, for example an open-source server and the company selling a hosted version of it.

## Entry format

```yaml
- name: OpenFGA
  url: https://openfga.dev/
  repo: https://github.com/openfga/openfga
  description: Relationship-based authorization server modeled on Google Zanzibar, with SDKs for several languages.
  tags: [oss]
  added: 2026-11-10
  verified: 2026-11-10
```

| Field | Required | Notes |
| --- | --- | --- |
| `name` | yes | Official name of the project, product, document, or person. |
| `url` | yes | Canonical `https://` URL. Official site, repo, or publisher page. No tracking, referral, or affiliate parameters. |
| `description` | yes | One sentence, see the style rules below. |
| `tags` | yes | One or more of `oss`, `free`, `freemium`, `commercial`, `paid`, `standard`, `gov`, `archived`. |
| `language` | libraries | Programming language, for entries in the library sections. |
| `repo` | no | Source repository when `url` is a homepage. Used for maintenance checks. |
| `added` | yes | Date you added the entry, `YYYY-MM-DD`. |
| `verified` | yes | Date someone last confirmed the link and description, `YYYY-MM-DD`. |

Order inside a file does not matter. The build sorts entries alphabetically.

### Tags

- `oss`: released under an [OSI-approved license](https://opensource.org/licenses). In the vendor directory it means an open-source core with commercial offerings.
- `free`: no cost to use or read.
- `freemium`: a published free tier with paid plans.
- `commercial`: a paid product.
- `paid`: a paid book, course, certification, or event.
- `standard`: a published or draft specification.
- `gov`: published by a government body or regulator.
- `archived`: no longer maintained but kept because people still rely on it or refer to it.

## Description style

`npm run validate` enforces the mechanical parts of this.

- One sentence, 40 to 160 characters, starting with a capital letter and ending with a period.
- Say what it is or does. Be specific: which protocols, which framework, which attack.
- No marketing language. Words like best, leading, ultimate, seamless, robust, powerful, comprehensive, cutting-edge, world-class, or next-gen will fail the check.
- No em or en dashes, emoji, or exclamation marks.
- Do not start with the entry's name or with "A tool that".

Good: `Relationship-based authorization server modeled on Google Zanzibar, with SDKs for several languages.`

Not good: `OpenFGA is the best and most powerful authorization solution!`

## What gets in

General

- Specific to identity, authentication, authorization, or identity security.
- Publicly reachable without logging in. Paid books, courses, and reports are fine when the landing page describes them.

Open-source projects

- An OSI-approved license. Source-available licenses such as BSL, SSPL, or Elastic do not count.
- A commit or release in the last 12 months. Older projects can stay with the `archived` tag if they are still widely referenced.
- A README that explains how to use it. Star count does not matter, but very new projects get a closer look.

Vendors

- A real, shipping product with a public product page.
- One category, the one that matches the main product.
- If you work for the vendor or a competitor, say so in the PR. Disclosure does not block a submission, hiding it does.

Learning and community

- Books must be published and focused on identity. Courses need an identity-focused syllabus.
- Podcasts need at least 10 episodes and one in the last 6 months, or they are tagged `archived`.
- People need a public body of identity work such as specs, books, talks, or open source. Self-nominations need that evidence. Anyone listed can ask to be removed and it is done without discussion.

Security tooling

- Only tools published for authorized assessment, with a public repository and documentation.
- No leaked data, credential dumps, phishing kits, or services selling access.

## Removal and corrections

Entries are removed when a link has been dead for two weekly checks in a row, when an open-source project has had no activity for over 24 months and is not tagged `archived`, or when an entry breaks the rules above. Acquired or renamed products are updated rather than removed.

Vendors and authors can [request a correction or removal](https://github.com/start-with-identity/awesome-identity/issues/new?template=remove-or-correct.yml) through an issue.

## Running the checks locally

You need Node.js 20 or newer.

```sh
npm install
npm run validate   # schema, duplicates, and style rules
npm run build      # regenerate the generated pages to preview
```

Please do not commit the regenerated files. CI does that on merge.

## Pull request checklist

- One resource per PR. Small fixes to several existing entries are fine in one PR.
- PR title in the form `Add OpenFGA to Authorization Engines and Policy`.
- You searched for duplicates.
- The description follows the style rules.
- Affiliation disclosed.

Everyone taking part is expected to follow the [code of conduct](CODE_OF_CONDUCT.md). How maintainers make decisions is described in [GOVERNANCE.md](GOVERNANCE.md).
