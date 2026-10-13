<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# BA Healthcare Portfolio

## Scope and incremental development

- Phase 1.3 establishes architecture, project guidance, and the Healthcare BA storytelling skill. Do not implement the final portfolio UI or begin Phase 2 until the project owner approves it.
- Preserve existing files, installed skills, dependencies, and unrelated working-tree changes. Make focused, reviewable changes; do not rewrite scaffolding merely to impose a preference.
- Read `docs/PRODUCT_BRIEF.md`, `docs/DESIGN_SYSTEM.md`, and, for case studies, `docs/CASE_STUDY_TEMPLATE.md` before relevant work.
- Add only the code required by the current phase. Keep unused architecture directories with `.gitkeep`; replace the marker when real files are added. A route directory alone does not expose a page.

## Next.js and TypeScript

- Follow the managed Next.js instructions above and the installed version's local documentation. If a generic skill conflicts with those APIs, use the installed documentation.
- Keep the App Router in `src/app` and retain its root layout, metadata conventions, and file-based routing. Do not introduce the Pages Router.
- Use TypeScript with the existing strict configuration and `@/*` alias. Prefer explicit domain types and `unknown` with narrowing over `any`; do not suppress errors to pass a build.
- Default to Server Components. Add `"use client"` only at the smallest boundary requiring browser APIs, state, or event handlers. Keep private data and secrets out of client props and bundles.
- Preserve the existing Tailwind v4 CSS import and Turbopack integration. Do not add a v3 configuration or a second CSS pipeline without a demonstrated need.
- Avoid unnecessary dependencies, abstractions, API routes, and state libraries. Do not automatically downgrade dependencies or run `npm audit fix --force`.

## Architecture and component reuse

- Keep route modules thin: compose components and obtain content through focused utilities.
- `components/layout` owns shared site framing; `components/sections` owns page sections; `components/ui` owns reusable primitives; `components/case-studies` owns BA artifact presentation.
- Store project narratives in `content/projects`, shared non-narrative data in `data`, framework-independent helpers and content access in `lib`, and genuinely shared contracts in `types`.
- Keep types local until shared. Reuse existing components before creating variants; avoid speculative component libraries and circular imports. Generic UI must not import route modules or project-specific content.

## Accessibility, responsive design, and visual quality

- For approved UI work, use a high-quality minimalist enterprise direction: clear hierarchy, restrained decoration, readable content, and consistent spacing and interaction states.
- Use semantic landmarks and headings, accessible names, descriptive links, visible focus, keyboard operation, and labels and actionable errors for forms.
- Support narrow screens, text zoom, long content, touch input, and reduced motion. Do not rely solely on hover or color to communicate meaning.
- Document design decisions in `docs/DESIGN_SYSTEM.md`. Choose and validate actual visual tokens during the approved UI phase; Phase 1.3 does not select a final visual design.

## Healthcare BA accuracy and evidence

- Apply `ba-portfolio-storytelling` when creating, editing, or evaluating BA case studies. Follow all 19 sections in the case-study template; explicitly explain missing or inapplicable evidence.
- Label each case as real or simulated. Candidate topics are not verified experience. Separate personal contribution from team work, facts from assumptions, goals from results, and proposed artifacts from deployed solutions.
- Never invent employment, stakeholders interviewed, achievements, quotes, approvals, experience, or metrics. Connect claims to permitted evidence and state limitations.
- Explain the problem, options, decision rationale, requirements, validation, and business value. Keep traceability from needs to requirements, business rules, acceptance criteria, and outcomes.
- Treat healthcare workflows as context-dependent. Identify actors, handoffs, exceptions, access needs, and operational constraints. Verify applicable clinical or regulatory claims against authoritative sources; do not claim compliance without evidence or substitute clinical judgment.
- Write clear, professional English and define acronyms on first use.

## Privacy and confidential information

- Do not commit, publish, log, or send patient-identifiable information, protected health information, credentials, proprietary workflows, or confidential employer/client material to external tools.
- Use synthetic examples by default. For real projects, use only material the owner is authorized to disclose and minimize details that could reidentify individuals or organizations.
- Review screenshots, diagrams, metadata, exports, and free text for identifiers. Removing names alone is not sufficient. Keep evidence references sanitized and suitable for a public repository.

## Installed skills

Read the relevant `SKILL.md` before applying it; use only skills relevant to the approved scope. Skill availability is not authorization to start design, install tools, publish, or expand the phase.

| Skill | Apply when |
| --- | --- |
| `frontend-design` | Creating or reshaping the visual direction in an approved UI phase. |
| `ui-ux-pro-max` | Making interface, responsive layout, interaction, or accessibility decisions. |
| `web-design-guidelines` | Reviewing implemented UI against its current referenced guidelines. |
| `vercel-react-best-practices` | Writing or reviewing React/Next.js components, data flows, or performance. |
| `ba-portfolio-storytelling` | Creating, editing, or reviewing evidence-based Healthcare BA narratives and artifacts. |

Other installed skills remain available for relevant future tasks. Preserve their source files; application ESLint excludes installed skill tooling rather than modifying it.

## Testing and quality checks

- Inspect `package.json` before running project scripts. Use the existing `npm run lint` and `npm run build` for this phase; report actual exit results, warnings, and any environment blockers.
- Keep application ESLint rules and TypeScript build checks enabled. Do not hide failures by disabling rules or ignoring application source.
- Add meaningful tests for new behavior when warranted; do not add test infrastructure for empty directories or documentation alone.
- For later UI changes, also verify keyboard navigation, responsive layouts, accessible states, and the affected user journeys. A successful build alone is not an accessibility review.
- Inspect the final diff for scope, privacy, and preservation of existing work. Report remaining issues and phase acceptance; stop for owner approval before Phase 2.
