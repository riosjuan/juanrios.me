# AGENTS.md

Guidance for autonomous coding agents working in this repository.

## Project Snapshot

- Stack: SvelteKit (Svelte 5) static site.
- Source: JavaScript, Svelte components, markdown content.
- Build target: static output in `build/` via `@sveltejs/adapter-static`.
- Styling: layered CSS files in `src/stylesheets/` imported by `src/styles.css`.
- Content model: project markdown files in `src/projects/*.md`.

## Cursor/Copilot Rule Sources

- `.cursor/rules/`: not present.
- `.cursorrules`: not present.
- `.github/copilot-instructions.md`: not present.
- Use this file as the effective in-repo agent guidance.

## Tooling Baseline

- Package manager: pnpm (`pnpm-lock.yaml` exists).
- ESM project (`"type": "module"` in `package.json`).
- Engine policy: `engine-strict=true` in `.npmrc`.
- Linting: ESLint (`eslint:recommended`, `plugin:svelte/recommended`, `prettier`).
- Formatting: Prettier + `prettier-plugin-svelte`.
- Static checks: `svelte-check` (strict compiler settings in `jsconfig.json`).

## Core Commands

```bash
pnpm install
pnpm run dev
pnpm run dev:m
pnpm run build
pnpm run preview
pnpm run preview:m
pnpm run check
pnpm run check:watch
pnpm run lint
pnpm run format
```

## Build/Lint/Test Guidance

- Primary quality gate today: `pnpm run check && pnpm run lint`.
- Build validation: `pnpm run build` for production-impacting changes.
- No dedicated test script currently exists in `package.json`.
- No Vitest/Playwright config files are present.
- No `*.test.*` or `*.spec.*` files are present in this repo.

## Single-Test / Single-File Commands

Current single-file checks:

```bash
npx eslint src/routes/+page.svelte
npx prettier --check src/lib/Projects.svelte
npx prettier --write src/lib/Projects.svelte
```

If tests are introduced later, run one test using the runner directly:

```bash
# Vitest (if added)
npx vitest run path/to/file.test.js

# Playwright (if added)
npx playwright test tests/example.spec.ts
```

## Formatting Rules (Enforced)

- Tabs for indentation (`useTabs: true`).
- Single quotes (`singleQuote: true`).
- No trailing commas (`trailingComma: none`).
- Max line width near 100 (`printWidth: 100`).
- Svelte parser via Prettier plugin.
- Keep semicolons (consistent with existing code).

## Import Rules

- Order imports by origin: framework/external first, local second.
- Keep one blank line between import groups.
- Prefer `$lib` alias in route-level components where clear.
- Use relative imports for nearby files in `src/lib` and `src/routes`.
- Keep ESM syntax only (`import`/`export`).

## Svelte Conventions

- Use Svelte 5 runes as existing code does (`$props`, `$derived`, `$state`, `$effect`).
- Keep component filenames in PascalCase.
- Keep route file conventions: `+page.svelte`, `+layout.js`, `+page.server.js`, `+server.js`.
- Keep component sections readable: script first, markup second, style third.
- Scope styles to components unless global styling is explicitly intended.

## Naming Conventions

- Functions/variables: camelCase.
- Components/types/classes: PascalCase.
- Constant maps/enums: UPPER_SNAKE_CASE when truly constant (example: `THEME`).
- Markdown slugs: kebab-case based on filename.
- Prefer descriptive names over abbreviations.

## Types and Data Contracts

- Project source is JS, but strict checks are enabled through `jsconfig.json`.
- Preserve existing metadata shape used by project cards and API payloads.
- Add defensive checks for unknown runtime values before property access.
- Keep API output JSON-safe and predictable.

## Error Handling Guidance

- Use safe defaults and guard clauses in loaders and endpoints.
- When adding fetch flows, handle non-OK responses (`response.ok`) explicitly.
- Keep endpoint responses stable in shape, even on failure paths.
- Avoid leaking raw internal errors to UI when controlled fallback is feasible.
- For date/content parsing, use explicit fallback behavior.

## HTML Safety

- Never pass unsanitized content into `{@html}`.
- Follow existing endpoint pattern using `sanitize-html` before rendering HTML strings.
- Keep any `svelte/no-at-html-tags` disable narrow and justified.

## CSS/Design System Practices

- Reuse token variables from `src/stylesheets/tokens.css`.
- Maintain stylesheet layer architecture defined in `src/styles.css`.
- Prefer logical CSS properties (`margin-block`, `inline-size`, etc.) like existing code.
- Keep animations subtle and tied to clear UX purpose.
- Use media-query-gated hover behavior where appropriate.

## Markdown Content Practices

- Add project markdown entries under `src/projects/`.
- Keep metadata field names consistent with existing files.
- Preserve `published` filtering semantics in API output.
- Preserve date sort direction (newest first).

## Agent Working Agreement

- Make minimal, targeted changes unless broader refactor is requested.
- Prefer root-cause fixes over lint disables.
- Run relevant checks after edits.
- Keep accessibility and semantic HTML intact in Svelte markup.
- Document assumptions in PR/commit notes when behavior is ambiguous.

## Pre-Submission Checklist

- Formatting is clean (`pnpm run format` or targeted Prettier command).
- Lint passes (`pnpm run lint`).
- Static checks pass (`pnpm run check`).
- Build passes when change impacts runtime output (`pnpm run build`).
- Any HTML injection path is sanitized.
