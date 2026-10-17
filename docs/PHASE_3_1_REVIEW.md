# Phase 3.1 — Homepage Prototype Review

> **Controlled visual refinement update — 14 October 2026:** The approved navy/teal direction and headline remain in place. Source refinements, current verification results, and remaining owner inputs are recorded in the final “Controlled visual refinement update” section. Browser rendering and computed-style checks remain NOT TESTED.

Prepared 13 October 2026; QA audit updated 13 October 2026. **Final acceptance recommendation: HOLD pending browser validation and owner review.** Source, fresh build output and localhost HTTP checks passed within their stated scope. The 1440px, 768px, 390px and 320px rendered views, keyboard interaction, screen-reader behavior, reduced-motion emulation and 200% browser zoom are **NOT TESTED** because no browser automation surface is connected. See the current QA audit below; implementation-stage records are retained for history. No deployment, publication, final case pages, translations, or Phase 3.2 work.

## Visual direction

Premium Healthcare Enterprise: navy, teal, cool light surfaces, generous spacing, Manrope headings and Geist body copy. The distinctive element is an illustrative need-to-requirement-to-validation diagram. Competencies and approach use open columns; project previews use restrained cards with native disclosures. There are no statistics, testimonials, invented credentials, patient data, or fake working controls.

Concrete palette, type/spacing scales, grid, radius/shadow values, component states, animation policy, responsive rules, and accessibility guidelines are in [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md#phase-31--premium-healthcare-enterprise).

## Scope and preserved strategy

- English is the only implemented view. EN indicates the current language; VI is disabled with a visible availability explanation. No language-switch handler or i18n dependency.
- The homepage prototype is at `/`. Future `/en` and `/vi` routing remains a strategy decision to implement in a later authorized phase, not a silently abandoned requirement.
- Home/About/Projects/Contact navigate to real homepage sections. Resume leads to its availability statement. Missing identity, experience, resume and contact facts use neutral text, not invented values or internal `[USER INPUT REQUIRED]` markers.
- C1, C2 and C3 retain their established identities/slugs. Every preview visibly says Draft / Unverified and expands to explain its proposed scope and missing evidence. C3 is explicitly industry-unverified. C1's first position is provisional, not evidence-based final selection.
- All seven canonical competency presentation groups and the detailed taxonomy remain in planning documents. Four concise homepage themes group them for reading; these do not claim proven personal proficiency.
- Draft metadata requests no indexing. This is not an access control or publication approval.

## Files created and modified

Modified:

| File | Change |
| --- | --- |
| `src/app/page.tsx` | Thin composition of homepage sections and framing. |
| `src/app/layout.tsx` | Retained root layout; prototype metadata, noindex/nofollow, Manrope plus existing Geist. |
| `src/app/globals.css` | Three-layer tokens, homepage styling, responsive rules, focus and reduced-motion support; preserved Tailwind v4 import. |
| `docs/DESIGN_SYSTEM.md` | Preserved foundation guidance and added concrete Phase 3.1 design decisions. |

Created:

| Area | Files |
| --- | --- |
| Shared framing | `src/components/layout/site-header.tsx`, `site-footer.tsx` |
| Homepage sections | `src/components/sections/hero.tsx`, `positioning.tsx`, `competencies.tsx`, `featured-projects.tsx`, `approach.tsx`, `about-preview.tsx`, `contact.tsx` |
| Reusable primitives | `src/components/ui/brand-mark.tsx`, `action-link.tsx`, `section-heading.tsx` |
| Case presentation | `src/components/case-studies/project-preview.tsx` |
| Narrative previews | `src/content/projects/previews.ts` |
| Shared homepage data | `src/data/homepage.ts` |
| Review record | `docs/PHASE_3_1_REVIEW.md` |

Removed only the six `.gitkeep` markers replaced by real files in those component/content/data directories. Reserved About/Contact/Projects routes and unused lib/types directories retain their markers. Dependencies, lockfile, next.config.ts, tsconfig.json, installed skills, AGENTS.md, eslint.config.mjs, and all prior strategy/evidence documents remain unchanged except the explicitly updated design-system document.

## Component architecture

`src/app/page.tsx` composes SiteHeader → Hero → Positioning → Competencies → FeaturedProjects → Approach → AboutPreview → Contact → SiteFooter. All are Server Components. Native `details/summary` markup is implemented without a client component or custom event handlers; actual pointer/keyboard operation is NOT TESTED. The app adds no custom client JavaScript, data fetching, state library, UI package, analytics or API endpoint.

Project content lives in `content/projects`; shared non-narrative themes and approach data live in `data`. The preview component consumes a typed project record; generic UI does not import project content or route modules. Shared primitives are limited to actual repeated uses. Metadata and file-based App Router conventions remain in place.

Skills applied: frontend-design, ui-ux-pro-max, design-system, ui-styling, vercel-react-best-practices, and ba-portfolio-storytelling for honest preview content. UI/UX reference guidance was used without installing Python tooling. Installed Next.js documentation for layouts/pages, Server Components, CSS, fonts and metadata informed the implementation; the existing CSS pipeline was preserved.

## Responsive implementation

| Range | Intended layout from source inspection |
| --- | --- |
| Desktop, above 1100px | Asymmetric hero; four competency/process columns; three project columns; inline navigation. |
| Tablet, 801–1100px | Compact header; two competency/process columns; three project columns; two-column hero. |
| Tablet/mobile, at or below 800px | Visible second-row navigation; stacked hero/projects/profile/contact; natural card heights. |
| Narrow mobile, at or below 480px | Single competency/process columns, stacked profile fields, reduced card padding, flexible heading wraps. |

Flexible containers, wrapping tags, breakable prose, rem type sizes and no overflow-hiding hacks are implemented. Live verification of zero horizontal overflow, 200% text zoom, mobile landscape and Vietnamese text expansion is still pending a connected browser.

## Implementation-stage verification results (historical)

| Check | Actual result |
| --- | --- |
| `npm run lint` | Exit 0, no warnings/errors. |
| `npm run build` | Exit 0; compilation, TypeScript and static generation passed, no warnings. Only `/` and `/_not-found` appear in the route output. |
| Local production HTTP check | `/` returned 200; referenced stylesheet returned 200. |
| Rendered HTML structure | One main landmark, one h1, seven content sections plus header/footer; three disclosures and three Draft / Unverified badges. |
| Anchor and label references | All 11 rendered anchor destinations and every `aria-labelledby` reference resolve; no duplicate IDs. |
| Missing routes / language state | `/en`, `/vi`, and `/projects/healthcare-appointment-management` returned 404 as expected; VI has native disabled semantics. No final case page created. |
| Content guardrails | No internal input markers in rendered text. Native disclosures explicitly describe missing provenance, authorship, permission and outcomes. |
| Color calculations | Eight primary text-color pairs passed 4.5:1: navy/white 14.36; slate/white 6.10; slate/mist 5.46; white/teal 6.31; teal/mist 5.66; light teal/navy 9.19; light teal/node 6.37; white/node 9.95. These are token calculations, not a full rendered contrast audit. |
| Source accessibility review | Semantic headings/landmarks, skip link, native disclosure, non-color status labels, focus styles, reduced-motion rules and flexible layout present. No custom focus trap or positive tabindex. |
| Preservation | SHA-256 comparison against 292 pre-existing nonignored files confirmed only the four intended modifications and six marker removals. New files are listed above. Ignored build output is excluded. |
| Diff whitespace check | Passed; Git reports ordinary LF-to-CRLF notices. Pre-existing AGENTS.md/eslint changes were preserved. |
| Browser review | Blocked: tool inventory reports no connected browsers; Edge and the in-app browser both report unavailable. No screenshots, real viewport renders, keyboard interaction, screen-reader, zoom or reduced-motion emulation were performed. |
| Development server | `npm run dev -- --hostname 127.0.0.1` exited 1 with Windows `spawn EPERM` when Next.js attempted a child process. The production server starts successfully, so it is the verified preview method in this environment. No permissions or dependencies were changed to bypass the error. |

The initial HTML-check script failed to match the middle dot in a draft badge because of shell text encoding; replacing the test literal with a Unicode escape made all assertions pass. The rendered badges were present throughout. No application check was disabled or suppressed.

## Localhost preview

Verified preview method from `C:\projects\ba-healthcare-portfolio`:

```powershell
npm run build
npm run start -- --hostname 127.0.0.1
```

Open `http://127.0.0.1:3000`. This binds the preview to loopback. The production preview has been started for handoff. If port 3000 is occupied, choose another port with `--port 3001`. For hot reload in an environment allowing Next.js child processes, stop the production server and run `npm run dev -- --hostname 127.0.0.1`; that command encountered `spawn EPERM` in the agent environment. No deployment is needed.

## Phase 3.1 acceptance checklist

- [x] Nine requested homepage sections implemented.
- [x] Navy/teal design tokens, type, spacing, grid and states documented.
- [x] Existing App Router, strict TypeScript, Tailwind v4 and architecture preserved.
- [x] Responsive layout rules and reduced-motion support implemented.
- [x] Accessible native navigation/disclosure semantics and visible focus implemented.
- [x] English primary; Vietnamese visibly unavailable; no fake language switching.
- [x] All project previews Draft / Unverified; no fabricated achievements or confidential data.
- [x] No new dependencies, final case routes, publication or deployment.
- [x] Lint/build and rendered HTML checks passed.
- [ ] Visually inspect 1440px desktop, 1024px tablet, 768px portrait, 390px and 320px mobile, plus mobile landscape.
- [ ] Confirm no horizontal overflow with all three disclosures expanded and at 200% text zoom.
- [ ] Tab through skip link, navigation, actions, each disclosure and footer; activate disclosures with Enter/Space and verify focus visibility and document order.
- [ ] Check reduced-motion preference, screen-reader names/states, and text expansion in a real browser.
- [ ] Owner approves visual direction and supplies verified identity/contact/CV/project evidence before final content.

Final approval is **on hold pending browser QA and owner review**. The prototype implementation is available to preview; publication readiness and final portfolio content are not established. Stop after Phase 3.1. Do not proceed to Phase 3.2 without approval.

## Current QA audit — 13 October 2026

### Scope, evidence and result vocabulary

Reviewed AGENTS.md, PRODUCT_BRIEF.md, DESIGN_SYSTEM.md, this report, PORTFOLIO_STRATEGY.md and INFORMATION_ARCHITECTURE.md; inspected all homepage TS/TSX files and globals.css. Applied the previously read frontend-design, ui-ux-pro-max and vercel-react-best-practices skills, plus web-design-guidelines. The UI/UX reference guidance was sufficient for this audit; no tools or dependencies were installed.

Fetched the [current Vercel Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md) on 13 October 2026 for the source review. Used native semantics, focus, content handling and reduced-motion guidance. Contextual choices remain: native links/disclosures need no redundant custom key handlers; the approved sentence-case typography, explicit-language strategy and overflow diagnosis take precedence over generic stylistic suggestions. This is not an accessibility certification or a claim of complete guideline conformance.

- **PASS — source/HTML:** the specified source rule, emitted markup or reference was checked; no claim about rendered behavior.
- **PASS — HTTP/build/calculation:** the named command, response or calculation was executed successfully.
- **NOT TESTED — browser:** no viewport image, layout measurement, interaction or assistive-technology observation exists.
- **REVIEW FINDING:** confirmed source characteristic or design concern, with severity and remaining validation identified. A possible symptom is not a reproduced defect.
- **INTENTIONALLY UNAVAILABLE:** resume download, contact channel, translations and final cases are outside the current implemented feature set; they are not working features.

Browser evidence for this audit: `cua.getState()` returned `apps: []`, `browsers: []`. No viewport screenshots or browser recordings were produced. Earlier unavailable Edge/in-app-browser attempts remain historical evidence; they were not treated as current successful tests. HTTP fetching and reading generated HTML are not browser rendering.

### Test case results

| ID | Test / evidence | Result | Limit or follow-up |
| --- | --- | --- | --- |
| QA-01 | Run `npm run lint` from existing package.json. | PASS — exit 0; no warnings/errors. | Does not check visual rendering or all accessibility semantics. |
| QA-02 | Run `npm run build`. | PASS — exit 0; compilation, TypeScript and static generation passed; no warnings. | Route output remains `/` and `/_not-found`. |
| QA-03 | Fetch `http://127.0.0.1:3000/`; compare its body with fresh `.next/server/app/index.html`, excluding scripts. | PASS — HTTP 200; body matched. | Live DOM, hydration and browser console NOT TESTED. |
| QA-04 | Fetch the five Next assets referenced by non-script HTML tags: three preload fonts, one stylesheet, one script preload. | PASS — all five HTTP 200. | This is not an exhaustive browser network/console check or font-rendering test. |
| QA-05 | Extract and resolve all homepage anchor hrefs. | PASS — source/HTML; 11 links, every target present, no duplicate IDs. | Click/scroll landing, focus movement and Back navigation NOT TESTED; M-02. |
| QA-06 | Inspect hero CTAs: draft collection → `#projects`; approach → `#approach`. | PASS — source/HTML. | Visible hierarchy and pointer/keyboard activation NOT TESTED; M-01/M-02. |
| QA-07 | Inspect C1/C2/C3 preview controls. | PASS — three native details/summary pairs, each with a distinct accessible case-name suffix. | Open/close, plus/minus state, text reflow and announcement NOT TESTED; M-03/M-06. These are inline disclosures, not case-page links. |
| QA-08 | Inspect EN/VI availability. | PASS — English current-language text; VI native disabled button with accessible name and description; visible planned-language explanation. | Real inert behavior and announcement NOT TESTED; M-02/M-06. Translation switching INTENTIONALLY UNAVAILABLE. |
| QA-09 | Inspect resume/contact behavior. | PASS — truthful markup; Resume targets availability text; contact section has no email, phone, submit form or download. | Actual recruitment contact/download INTENTIONALLY UNAVAILABLE; do not describe them as functional. |
| QA-10 | Inspect landmarks/headings and ARIA references in built HTML. | PASS — one main, one h1, six h2 and twelve h3 with no level skips; all labelledby/describedby references resolve; English document language. | Screen-reader interpretation NOT TESTED; M-06. |
| QA-11 | Inspect focus structure. | PASS — skip link targets main with tabindex -1; no positive tabindex; focus-visible rule and dark-surface override exist. | Actual tab order, skip-link transfer, visible/unobscured ring and no traps NOT TESTED; M-04. |
| QA-12 | Calculate 11 principal text-color pairs from actual CSS tokens. | PASS — calculations; lowest 5.46:1, highest 14.36:1. | Rendered gradients, antialiasing, focus and non-text contrast NOT TESTED; M-07. |
| QA-13 | Inspect motion and zoom rules. | PASS — reduced-motion disables transitions/animation and smooth scroll; viewport has no maximum-scale or user-scalable restriction. | OS/emulated reduced motion and 200% browser zoom NOT TESTED; M-05/M-08. |
| QA-14 | Inspect draft/evidence presentation. | PASS — three Draft / Unverified badges; no internal input markers in output; C3 industry unknown; illustrative diagram caption; no invented results found. | Does not verify any project experience or replace later evidence review. |
| QA-15 | Fetch `/en`, `/vi`, `/about`, `/contact`, `/resume` and all three `/projects/[candidate-slug]` routes. | PASS — all eight HTTP 404; no homepage links target them. | These pages are INTENTIONALLY UNAVAILABLE, not broken homepage navigation. |
| QA-16 | Review React/Next.js structure. | PASS — source; thin route, Server Components, direct imports, local immutable content, no application client state/effects, fetch waterfalls or new packages. | No runtime performance, Core Web Vitals or hydration claim. |
| QA-17 | Inspect all four requested viewport layouts. | NOT TESTED — browser unavailable. | Exact matrix and M-01 below; no zero-overflow assertion. |
| QA-18 | Exercise keyboard, pointer, zoom and assistive technology. | NOT TESTED — browser unavailable. | M-02 through M-08 below. |
| QA-19 | Run `git diff --check`. | PASS — exit 0; ordinary LF-to-CRLF notices for existing changed files. | No whitespace failure. |
| QA-20 | Compare SHA-256 snapshot from this QA turn. | PASS — only this report changed; no application code, dependency, skill or unrelated file changes. | Ignored build output excluded. |

No failures were hidden through disabled checks. Lint/build results above were rerun for this QA task. The earlier dev-server `spawn EPERM` remains an environment limitation from implementation; it was not rerun as part of this audit. The existing production server responded successfully.

### Visual quality review and issue register

These findings come from source, content and token inspection. Rendered appearance remains NOT TESTED. Severity: **Critical** blocks core access, truthful presentation or safe operation with confirmed evidence; **Medium** is a usability concern to validate; **Low** is visual/editorial polish. **Test blocker** prevents acceptance without proving the application is defective.

| ID / severity | Location and finding | Disposition |
| --- | --- | --- |
| B-01 — Test blocker | No connected browser. All requested widths, actual interaction, zoom and visual QA lack evidence. | Open. Hold final acceptance; run M-01–M-08 when available. |
| V-01 — Medium | `src/app/globals.css:155` — draft badge uses 0.6875rem (11px at default size); caption at line 134 and project tags at line 160 also use 11px. Mobile brand caption at line 240 is 10px. These values are confirmed, and essential draft status deserves particular scrutiny. | No automatic contrast/compliance failure inferred from size alone. Assess legibility at 320/390px and zoom. No critical-only code fix. |
| V-02 — Low | `src/components/sections/competencies.tsx:17`, `src/app/globals.css:142` — all four themes repeat the same decorative square. This adds little subject-specific meaning and can read as a generic card-kit motif. | Preserve approved direction. Later owner-approved polish could omit the marker or differentiate it meaningfully; no new icon dependency. |
| V-03 — Low | `src/components/sections/contact.tsx:11`, `src/app/globals.css:192` — a decorative arrow inside a 48px circle can resemble an action even though it is a noninteractive, aria-hidden span. | Potential affordance ambiguity, not a broken button. Check M-02; change only if confirmed materially misleading and authorized. |
| V-04 — Low | `src/app/globals.css:157`, `:158`, `:212`, `:213` — minimum heights reserve 4.2/5.25rem for card titles and 7/9rem for questions. With varied copy, some cards may have excess whitespace or uneven disclosure alignment. | No clipping confirmed: these are minimum, not fixed maximum heights; stacked layouts reset them. Inspect desktop screenshots before proposing changes. |
| V-05 — Low | `src/components/sections/hero.tsx:15` — “Clear thinking. Better healthcare systems.” is broad positioning; the diagram carries more specific BA identity than the slogan. | Not an achievement claim in context. Preserve it now; future evidence can supply specificity without inventing a biography. |
| R-01 — Unverified layout risk | `src/app/globals.css:97`, `:203`, `:220`, `:221` — narrow navigation retains a single flex row with fixed gaps and link padding. The outer header wraps, but this inner row has no wrap rule. | 320px fit depends on rendered font metrics. Overflow is NOT TESTED and not reported as reproduced. Prioritize M-01 at 320px and M-05. No speculative code change. |
| F-01 — Intended limitation | `src/components/layout/site-header.tsx:19`, `src/components/sections/about-preview.tsx:18` — Resume is an anchor to “Awaiting an approved public version,” not a CV download or complete resume. | Truthful placeholder under current scope. Actual resume availability remains blocked by owner content, not a feature reported as passing. |
| F-02 — Intended limitation | `src/components/sections/contact.tsx:12` — contact details are unavailable. The only actionable link returns to the draft collection. | No functioning contact channel is claimed. Do not invent an email or build a form. |
| D-01 — Documentation evidence precision | Earlier component-architecture prose said the native disclosure “works” without distinguishing implementation from tested interaction. | Fixed in this report: markup implementation recorded separately; pointer/keyboard behavior explicitly NOT TESTED. Historical test results clearly labeled. |

**Confirmed critical application issues found: none within the executed checks. This is not proof that none exists. Application issues fixed: none.** The user's critical-only refinement constraint rules out speculative layout changes and noncritical redesign. Only the report was refined.

Visual review coverage:

| Area | Source-based assessment | Rendered verdict |
| --- | --- | --- |
| Typography hierarchy | Distinct display/section/card scales; one coherent Manrope/Geist pairing. Small supporting copy noted in V-01. | NOT TESTED: actual wrapping, font fallback and legibility. |
| Layout and spacing | Shared container, consistent spacing tokens, restrained borders; minimum-height trade-off noted in V-04. | NOT TESTED: whitespace balance, clipping and overlap. |
| Navigation | Compact four-item primary navigation; native anchor destinations; visible mobile row defined. R-01 requires measurement. | NOT TESTED: fit and practical keyboard/pointer access. |
| Hero and CTAs | Single filled primary action plus outlined secondary; analysis diagram introduces BA reasoning without false evidence. V-05 is a copy-specificity concern. | NOT TESTED: above-fold hierarchy or perceived prominence. |
| Featured cards | Consistent tokens, clear draft labels and useful questions; all three have honest scope disclosures. | NOT TESTED: heights, open-state reflow, click affordance. |
| Competencies | Four concise evidence-organizing themes with explicit unverified status; repeated generic decoration noted. | NOT TESTED: scanability and density. |
| Colors and components | Shared semantic/component tokens, intentional dark contact section and restrained single gradient. | Text-token contrast calculated; rendered consistency NOT TESTED. |
| Healthcare IT identity | Workflow/requirements framing, administrative questions, privacy restraint, no clinical endorsement symbols or invented statistics. | Coherent direction by content inspection; premium visual quality requires screenshots and owner judgment. |

### Responsive findings and required evidence

Viewport widths below are CSS pixels at browser zoom 100%. Heights are fixed QA fixtures, not product requirements. Use an actual browser responsive viewport, not just a scaled image.

| Test ID | Viewport | Expected from current source | Actual rendered result | Evidence |
| --- | --- | --- | --- | --- |
| R-1440 | 1440 × 900 | Two-column hero; four competency/process columns; three project columns; inline navigation and Resume utility. | **NOT TESTED** — overflow, clipping, overlap and navigation access unverified. | No screenshot. Capture `1440-default` and `1440-expanded` when tested. |
| R-768 | 768 × 1024 | Stacked hero/projects/profile/contact; two competency/process columns; navigation second row; Resume utility hidden but status still in About. | **NOT TESTED** — same four outcomes unverified. | No screenshot. Capture `768-default` and `768-expanded`. |
| R-390 | 390 × 844 | Single-column sections, stacked profile fields and compact padding; all four nav links retained. | **NOT TESTED** — same four outcomes unverified. | No screenshot. Capture `390-default` and `390-expanded`. |
| R-320 | 320 × 740 | Narrow single-column layout; highest navigation and long-title wrapping risk. | **NOT TESTED** — same four outcomes unverified. | No screenshot. Capture `320-default` and `320-expanded`. |

No overflow clipping is hidden with `overflow-x: hidden`, which is useful for diagnosis but does not prove overflow absence. No source-based breakpoint result above is a viewport PASS.

### Accessibility findings

Semantic structure, source order, referenced names and native controls are appropriate in emitted markup. The analysis framework is an HTML ordered list with a caption. Brand/decorative shapes are hidden from assistive technology. Sections are named by actual headings, and all three disclosure names include their project titles. There is no form to audit, no drag interaction, and no auto-playing animation.

The page contains fourteen potentially tabbable anchors/summaries in desktop source order: skip link → brand/home → Home → About → Projects → Contact → Resume → primary hero action → secondary hero action → C1 summary → C2 summary → C3 summary → collection link in Contact → Back to top. At widths at/below 1100px, Resume is hidden by CSS, leaving thirteen expected stops. EN is static text; VI is disabled and should not be a Tab stop. Main has tabindex -1 for programmatic/anchor focus, not sequential focus. This is an expected sequence from markup, **not a recorded keyboard session**.

Eleven text-token contrast calculations: navy/white 14.36:1; slate/white 6.10:1; slate/background 5.80:1; slate/mist 5.46:1; white/teal 6.31:1; white/teal-hover 8.85:1; teal/white 6.31:1; teal/mist 5.66:1; light teal/navy 9.19:1; light teal/node 6.37:1; white/node 9.95:1. All exceed the 4.5:1 calculation target for these foreground/background pairs. Focus uses teal on light surfaces and light teal on the navy contact area. These calculations do not validate every rendered pixel, focus boundary, disabled state or browser preference.

No confirmed critical semantic or text-token contrast defect was found. Small status copy is a usability concern; actual focus visibility, native open/closed announcements, touch target geometry, browser zoom/reflow, motion preferences, and assistive-technology reading remain **NOT TESTED**. Do not mark accessibility acceptance or conformance as passed.

### Precise manual tests for outstanding browser behavior

Prerequisite: use the existing loopback production preview at `http://127.0.0.1:3000`, or run the build/start commands above if it is no longer running. Record browser/version, OS, date, viewport in CSS pixels, browser zoom, device pixel ratio and any assistive technology. Wait for fonts to finish loading. Keep the console/network panel available. Do not publish screenshots externally; they are local QA evidence only.

**M-01 — All four viewport renders and overflow.** Set zoom to 100% and test each exact width/height in the matrix. Start at the top; inspect header, hero, every section and footer. Confirm no text overlaps, clipped titles, cut-off focusable controls or inaccessible nav items. Expand all three project scopes and inspect again; scroll to the right as well as down to expose overflow. Capture the default and expanded screenshots named in the matrix. Optional read-only console measurements:

```javascript
({
  viewport: [window.innerWidth, window.innerHeight],
  pageWidth: document.documentElement.clientWidth,
  contentWidth: document.documentElement.scrollWidth,
  noHorizontalOverflow:
    document.documentElement.scrollWidth <= document.documentElement.clientWidth
})
```

Pass only if there is no horizontal overflow and every requested content/navigation element remains readable in both states at each width. If it fails, record width, element, screenshot and measurements; do not mask the failure with overflow hiding. Check the 320px nav row first. Open browser console/network panels and record any application error, hydration message, stylesheet/font failure; asset HTTP checks alone did not validate those.

**M-02 — Navigation, CTAs and unavailable features.** At desktop and 390px, activate Home, About, Projects and Contact; the URL hash and visible landing section must match. Activate the brand link and Back to top to reach the header. Activate both hero links and the contact collection link; they must reach Projects/Approach as labeled. On desktop, Resume must land on its availability record without downloading or navigating to an absent page. Use browser Back after two different anchor selections; verify normal history rather than a forced return. Attempt VI with pointer/touch: no route, content or language change; the unavailable explanation stays visible. Confirm EN is a status indicator. Project titles/cards have no promised page navigation; only their scope summaries are controls. The circular contact arrow must not be presented or announced as an action. Record whether it nevertheless looks misleading; do not claim contact/email or resume download works.

**M-03 — Native disclosure interaction.** For each C1/C2/C3 summary, click/tap to open, confirm only that case's scope and evidence caveat appear, confirm plus becomes minus, then close. Focus each summary with Tab, activate with Enter and Space, and confirm both open/close without jumping focus away. Open all three together and repeat the responsive overflow check. Pass only if there are no lost controls, hidden required text, unexpected navigation or focus jumps. Record actual browser behavior rather than assuming native markup guarantees it.

**M-04 — Keyboard, focus and tab order.** Load the page at the top, focus the document, and press Tab: Skip to content must appear fully visible. Press Enter; main content must become the navigation/focus destination, bypassing the header on the next Tab. Reload and traverse the expected fourteen desktop stops listed above, then repeat at 390px with thirteen stops. Check Shift+Tab in reverse, all focus rings, their clearance from card edges, the dark contact link and footer. VI must be skipped; no invisible element or decorative arrow may receive focus. Scroll as needed to ensure the whole focused control remains visible. Record actual order and any deviation. No keyboard trap or mouse requirement is acceptable.

**M-05 — Actual 200% browser zoom.** At a desktop window whose 100% content viewport is 1440 × 900, use the browser's Zoom menu to set **200%**. Do not substitute DevTools device preview scaling or CSS transform. Record the new `innerWidth`/`innerHeight` (approximately half, browser-dependent). Read the full page, all navigation labels, profile fields, draft badges, both CTAs and all open disclosures. Repeat key Tab/activation steps. Pass only if content and controls remain available with no overlap, clipped text or horizontal page scrolling. Restore 100% afterward. Also repeat a 320px responsive viewport at 100% for the separate narrow-layout requirement; these are different tests.

**M-06 — Accessible names and screen reader.** With a screen reader such as NVDA and a supported browser, inspect landmarks and heading navigation: one main, one h1, correctly ordered sections/card titles. Verify English document language, brand link name, English current-language indication, and Vietnamese unavailable/planned status in reading mode. Each summary should include its unique case title and announce expanded/collapsed status. Read the figure caption and the missing-profile/contact/resume statements; no decorative shapes should be announced as controls. Compare reading order with visual order on desktop and mobile. Record browser/assistive-technology versions and spoken results; a source-name check is not this test.

**M-07 — Rendered typography, contrast, focus and touch.** At each matrix width, inspect loaded Manrope/Geist faces, headline balance, supporting-copy size, hero/button hierarchy, minimum-height whitespace and card alignment. Use browser computed styles and a contrast tool on normal/hover text, draft badges and dark-contact content. Check focus indicators against their actual surrounding backgrounds and control geometry, including at zoom. Verify nav/action/summary targets meet their documented 44/48/56px minimum-height intent where applicable and can be tapped without precision. VI is unavailable, not a working touch target. Distinguish decorative separators from boundaries needed to recognize controls. Log V-01–V-05 as accepted observations or reproduced usability issues; do not infer pixel contrast from token calculations alone.

**M-08 — Reduced motion and progressive behavior.** Enable the OS reduced-motion preference or browser rendering emulation; confirm `matchMedia('(prefers-reduced-motion: reduce)').matches` is true. Activate a long-distance anchor link; scrolling should be immediate rather than smooth. Hover/focus actions should not animate their color transitions; disclosures should remain operable. Inspect computed `scroll-behavior` and transition/animation values. With JavaScript disabled and the page reloaded, repeat one anchor and all three native disclosures; record whether the server-rendered content and controls remain usable. Restore preferences afterward. Neither behavior was executed during this audit.

For each manual case, record PASS/FAIL, exact fixture, observed behavior, screenshot/reference and defect ID. Keep it NOT TESTED until someone actually executes it. No screenshot filenames listed here represent existing evidence.

### Controlled refinement and final recommendation

No application source was changed during this QA task: no confirmed critical defect justified a fix. The report now separates verified markup/calculations from unexecuted browser behavior, records weak visual patterns without redesigning, and provides explicit manual acceptance steps. Existing visual direction, project truthfulness, disabled Vietnamese state and phase boundaries are preserved.

**Recommendation: HOLD final Phase 3.1 approval.** Engineering/source checks passed; rendered visual, responsive and interaction acceptance is incomplete. Complete M-01–M-08, resolve any confirmed critical failures within the same phase, record actual viewport evidence, then obtain owner approval. Noncritical polish remains an owner decision. Missing identity/CV/contact/project evidence still limits product readiness and does not authorize invented content, new pages, translations, deployment, publication or Phase 3.2.

## Controlled visual refinement update — 14 October 2026

### Findings and rationale

Source review found several supporting descriptions at 13–14px and status/metadata copy at 10–12px. The phase request called for more comfortable reading without enlarging every element. Explanatory copy is now generally 15–16px, project and process descriptions are 16px, and metadata/status text is generally 12–14px. These are declared CSS values at the default 16px root size; actual browser-computed sizes, font loading and line wrapping are **NOT TESTED** because no browser is connected.

The original headline and Manrope/Geist pairing remain. The About profile now groups explicit placeholders for name, target BA role, Healthcare IT specialization, professional summary, and resume availability. It states that owner input or verification is required; no identity, experience, credential, or metric was added.

Appointment Management remains first and is identified as the **provisional** primary case study. It retains its Draft / Unverified badge. Its native disclosure names four potential future evidence areas—process diagram, business rules, acceptance criteria, and decision trade-offs—and says no artifacts exist in this preview. All three previews retain their Draft / Unverified labels and evidence caveats.

The contact section still exposes no email, phone, form, download, or fake contact channel. Its decorative arrow was removed because the circle could resemble an action. The remaining collection link has a real homepage destination. Resume still points to the availability statement.

### Files changed for this update

- `src/app/globals.css` — raised supporting-copy and metadata sizes, refined case grid/lead styling, differentiated competency marks, increased mobile analysis copy, and preserved focus/reduced-motion rules.
- `src/components/case-studies/project-preview.tsx` — provisional C1 treatment and clearly labeled future evidence areas within the native disclosure.
- `src/components/sections/about-preview.tsx` — labeled owner-input profile fields and resume availability.
- `src/components/sections/competencies.tsx` — unique decorative mark variants; marks remain hidden from assistive technology.
- `src/components/sections/contact.tsx` — removed the arrow that could imply a contact action.
- `docs/DESIGN_SYSTEM.md` — recorded the refined type guidance, two-column project grid, provisional lead treatment, and contact behavior.
- `docs/PHASE_3_1_REVIEW.md` — this update and current result record.

No dependency, lockfile, route, translation, case evidence, contact channel, or deployment was added. `package.json` and `package-lock.json` were already modified in the working tree before this refinement and were preserved without edits.

### Responsive and accessibility review

Source CSS retains the visible wrapping header row at widths at or below 800px, single-column project cards at those widths, flexible content tracks, 44px text-link targets, 48px primary actions, 56px disclosure summaries, rem-based text, visible focus rules, and reduced-motion overrides. Project cards now use two columns above 800px, with a distinguished C1 treatment. The 320px, 390px, 768px, and 1440px rendered layouts, overflow, nav wrapping, touch geometry, expanded-card reflow, keyboard operation, screen-reader announcements, 200% zoom, and reduced-motion behavior are **NOT TESTED**.

Source checks retain one h1, existing section IDs and native anchor links, semantic list/disclosure structure, visible Draft / Unverified text, and no fake action controls. Contrast ratios previously calculated for the shared CSS color-token pairs remain applicable to unchanged foreground/background tokens; the project lead uses the existing white and teal/slate palette. Rendered text contrast, focus boundaries, and actual font rendering are **NOT TESTED**. No conformance claim is made.

### Quality checks

| Check | Current result |
| --- | --- |
| `npm run lint` | **BLOCKED — exit 1.** ESLint cannot resolve `eslint-config-next/core-web-vitals` imported by the existing `eslint.config.mjs`; Node suggests the `.js` export. No config or dependency changes were made. |
| `npm run build` | **BLOCKED — exit 1.** Next.js 16.4.0/Turbopack could not fetch Geist and Manrope from Google Fonts due unavailable outbound network access. This matches the documented font-fetch limitation; no font or dependency workaround was introduced. |
| `git diff --check` | **PASS — exit 0.** |
| Route and CTA destinations | Source inspection: current homepage anchors remain `#home`, `#about`, `#projects`, `#contact`, `#resume`, and `#approach`; Resume reaches its availability record, contact's collection link reaches Projects, and neither points to an unavailable route. Browser activation and scroll landing are **NOT TESTED**. |
| Browser and computed-style review | **NOT TESTED.** No browser surface is connected. No screenshots or viewport/computed-size claims are recorded. |

### Remaining owner inputs

- Approved display name and preferred target Business Analyst role title.
- Verified Healthcare IT specialization and professional summary/background.
- Approved public resume and permission to publish it.
- Owner-approved contact channel and publication permission.
- For each candidate case: real/simulated provenance, personal contribution, permitted evidence, artifact status, and validation/outcome limits.
- Browser QA at 1440px, 768px, 390px, and 320px, including keyboard, disclosures, zoom, reduced motion, and screen-reader checks.
- A resolvable lint configuration/dependency state and network access or approved local font assets for successful build verification.

### Phase 3.1 status

The controlled source refinement is complete. Final Phase 3.1 acceptance remains **HOLD** because browser validation was unavailable and lint/build did not complete successfully in this environment. Resolve the environment blockers and perform the listed browser checks, then obtain owner review. Stop here; no Phase 3.2 work, new pages, translation, publication, or deployment is included.

## Build and lint recovery — 14 October 2026

This update supersedes the lint/build blockers above. It covers technical recovery only; the outstanding browser and owner-review gates remain.

### Project safety and location

- Both the working directory and Git top level resolve to `C:\BA\Portfolio\ba-healthcare-portfolio`.
- The earlier preview record references `C:\projects\ba-healthcare-portfolio`; that directory no longer exists. This supports a relocation history, but does not prove whether the project was moved or copied. `node_modules` is a regular directory at the current root, not a link to the old location. No old-root or local-file dependency references were found in the inspected package/configuration files.
- Nine files were already modified: this review, `docs/DESIGN_SYSTEM.md`, both dependency files, `src/app/globals.css`, and the project-preview, about-preview, competencies, and contact components. Their existing edits were preserved except for the diagnosed ESLint dependency correction described below.
- The starting dependency files and complete working-tree diff were backed up to the local temporary directory `ba-build-recovery-f8d004276d4c4c1d915feabadc237609`. Tracked-file hashes were captured before recovery to check preservation.

### Root causes and targeted repair

**ESLint:** the manifest, lockfile and installed package consistently specified `eslint-config-next` 14.2.35. This was not a missing install or stale lockfile. That release exposes legacy CommonJS configuration objects, has no subpath export map for the extensionless ESM imports, and declares ESLint 7/8 peer support. The project uses ESLint 9.39.5 and Next.js 16.4.0 with flat-config arrays. Consequently, the existing import failed with `ERR_MODULE_NOT_FOUND`; merely adding `.js` would leave the configuration-format and peer-version mismatch unresolved.

Installed exact `eslint-config-next@16.4.0` using npm against the existing lockfile. Its `core-web-vitals` and `typescript` ESM imports now resolve and both export flat-config arrays. The existing `eslint.config.mjs`, rule sets, skill-tooling exclusion, scripts, and TypeScript checks remain unchanged. Node 24.21.0 satisfies the inspected engine requirements; React/React DOM 19.3.0 match the existing Next.js peer range.

Only one direct dependency changed: `eslint-config-next`, from `^14.2.35` to `16.4.0`. npm reported 51 packages added, 30 removed and 3 changed in the associated lint dependency graph. Those three existing package paths were `eslint-config-next`, `@next/eslint-plugin-next` (both 14.2.35 → 16.4.0), and the transitive `lru-cache` (10.4.3 → 5.1.1, now required by Babel's compilation-target helper through React Hooks linting). Existing `@typescript-eslint/*` 8.71.2 entries were retained. No application dependency changed. `package.json` now matches its committed version because its only prior edit was the incompatible ESLint config version; this was a targeted npm update, not a Git restore or lockfile replacement.

**Fonts:** the initial sandboxed build exited 1 after connection failures fetching both Geist and Manrope stylesheets from `fonts.googleapis.com`. The unchanged build then exited 0 when run with approved network access outside the sandbox. A second build after dependency recovery also exited 0. This isolates the observed font failure to the restricted build environment, rather than invalid font options or missing local assets. The current Google font configuration does not reference local font files.

Manrope and Geist, their variable weights/subsets, CSS variables, and all layout/CSS remain unchanged. `next/font/local` was evaluated as the documented offline alternative, but successful network-enabled builds do not justify adding font binaries or changing font configuration for this recovery. A future offline-build requirement would need verified font assets, their redistribution licenses and notices, and typography validation. Clean builds with the current configuration still require access to Google Fonts; no offline-build claim is made.

The diagnosis followed the installed Next.js 16.4.0 guides under `node_modules/next/dist/docs/` (ESLint, font optimization, font API, and version-16 upgrade) and the official [ESLint documentation](https://nextjs.org/docs/app/api-reference/config/eslint) and [font documentation](https://nextjs.org/docs/app/api-reference/components/font).

### Verification results

| Command / check | Actual result |
| --- | --- |
| Initial `npm run lint` | **FAIL — exit 1.** `ERR_MODULE_NOT_FOUND` for `eslint-config-next/core-web-vitals`. |
| Initial sandboxed `npm run build` | **FAIL — exit 1.** Two font-request warnings and two fetch errors (Geist and Manrope). |
| Unchanged `npm run build`, approved network access | **PASS — exit 0.** Compilation, TypeScript and static generation completed; no warnings reported. |
| Targeted npm install, sandbox | **FAIL — exit 1.** `EACCES` fetching the npm registry; npm also could not write its external cache log. |
| Same targeted npm install, approved access | **PASS — exit 0.** No install warnings reported; no force/audit repair used. |
| Recovered `npm run lint`, sandbox | **PASS — exit 0.** No errors or warnings reported. Configuration loading was slow but completed successfully. |
| Recovered `npm run lint`, approved access | **PASS — exit 0.** Confirmatory run during delay diagnosis; no errors or warnings reported. |
| Recovered `npm run build`, approved network access | **PASS — exit 0.** Compilation, TypeScript and static generation completed; no warnings reported. Routes remain `/` and the framework `/_not-found`. |
| `npm ls --depth=0` and lint dependency inspection | **PASS — exit 0.** Next.js/config 16.4.0 and ESLint 9.39.5; direct dependency tree is valid. |
| `git diff --check` | **PASS — exit 0.** Git prints its existing LF-to-CRLF normalization warning for this review; no whitespace errors. |
| Preservation and lockfile checks | Only the two dependency files and this report changed relative to the captured tracked-file hashes. Manifest/lockfile root dependency declarations match. |

### Scope and acceptance recommendation

Recovery modifies only `package.json`, `package-lock.json`, and this appended review. Homepage layout, visual design, case-study content, font configuration, `next.config.ts`, ESLint configuration and installed Agent Skills are preserved. Generated build output and installed packages are local verification artifacts.

**Recommend accepting the Phase 3.1 build/lint recovery objective.** There is no remaining lint/build blocker when the build has the verified network access. Restricted/offline builds still need font access or a separately implemented local-font solution. Overall Phase 3.1 visual/accessibility acceptance remains **HOLD** pending the previously documented browser checks and owner review. No Phase 3.2 work or deployment was performed.
