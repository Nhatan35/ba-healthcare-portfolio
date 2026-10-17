# Phase 3.2A — Projects Library & Shared Project Data

Prepared 14 October 2026. Status: implemented for owner review. Scope is the local English-first prototype; publication and Phase 3.2B are not authorized.

## 1. Design decisions

The library at `/projects` extends the approved navy/teal identity, Manrope/Geist typography, spacing scale, responsive gutters and shared framing. A quiet two-column introduction leads to one full-width navy featured candidate and two white supporting cards. At or below 800px these become single-column layouts. The final definition list explains candidate, simulated and verified professional work without presenting missing evidence as experience.

C1, Healthcare Appointment Management, leads provisionally because it is the existing editorial priority. A visible qualification says the position does not indicate proven impact; evidence and permission review determine final selection. Cards expose a question, proposed scope, proposed competency tags, Draft · Unverified status, unknown provenance, missing evidence and uncleared publication permission. Their unavailable detail state is text, not a disabled or broken link. No filters, search, metrics, testimonials or invented workflow diagrams were added.

The initial design comparison rejected identical dashboard tiles in favor of one focused lead and quieter supporting candidates. Existing tokens and the finalized layout rationale are recorded in [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md#phase-32a--projects-library).

## 2. Files changed

Changes below are relative to the working tree at the start of this task, not to Git HEAD, which already contained owner changes.

| File | Purpose |
| --- | --- |
| `src/app/projects/page.tsx` | New thin Server Component route, sorted shared content, draft-specific metadata. |
| `src/types/project.ts` | Shared readonly candidate/content/locale contracts. |
| `src/content/projects/previews.ts` | Extend the existing canonical candidate records; retain IDs, slugs and original English copy. |
| `src/components/case-studies/project-card.tsx` and `project-card.css` | Reusable featured/standard library cards and prefixed styles. |
| `src/components/case-studies/project-status.tsx` | Shared data-driven Draft · Unverified badge. |
| `src/components/case-studies/project-preview.tsx` | Adapt existing homepage presentation to the shared type and localized copy; retain its markup, disclosures and content. |
| `src/components/sections/projects-library.tsx` and `projects-library.css` | Library hero, candidate sections, explanations and actual navigation. |
| `src/components/sections/featured-projects.tsx` | Use shared `featuredOrder` for homepage ordering without mutating records. |
| `src/components/layout/site-header.tsx` | Route-aware links, current Projects state and navigation wrapping. |
| `src/components/layout/site-footer.tsx` | Optional page label; original homepage label remains the default. |
| `docs/DESIGN_SYSTEM.md` | Append library design and integration decisions. |
| `docs/PHASE_3_2A_REVIEW.md` | This implementation and verification record. |
| `src/app/projects/.gitkeep`, `src/types/.gitkeep` | Remove markers now replaced with real files. The detail-route placeholder remains. |

No dependencies or lockfile entries changed. Existing `globals.css`, root layout/font configuration, homepage route, About/competency/contact refinements, Phase 3.1 review, configuration and installed skills were preserved. A temporary baseline captured files and hashes before editing; the homepage's existing preview content was migrated, not replaced.

## 3. Component structure

```text
ProjectsPage (Server Component)
  SiteHeader(currentPage="projects")
  main#main-content
    ProjectsLibrary(projects)
      hero + introduction
      ProjectCard(featured)
      ProjectCard(standard) × 2
      status definitions + homepage approach link
  SiteFooter(pageLabel="Projects library prototype.")

Homepage FeaturedProjects → ProjectPreview
Both card presentations → shared project records and ProjectStatus
```

The homepage keeps its established disclosure presentation; the library uses visible scope/evidence records. This intentional presentation difference preserves the homepage design without duplicating the underlying content. All authored components remain Server Components; standard Next.js Link supplies route navigation. No client state, API route, CMS, i18n package or second CSS pipeline was introduced.

Browser review caught an integration issue in the initial CSS Module attempt: the existing Turbopack wildcard CSS loader produced undefined class exports and a `:global` parse warning. The final implementation uses ordinary colocated CSS with unique `pc-`/`pl-` prefixes. The configured loader and global homepage CSS remain intact. The final build has no CSS warnings, and rendered styles were checked rather than inferred from compilation.

## 4. Shared project data structure

`src/content/projects/previews.ts` remains the single source for C1–C3. Narratives stay under `content/projects`; no parallel project array was added to `data`.

| Field | Current meaning |
| --- | --- |
| `id`, `slug` | Existing C1–C3 identities and stable IA slugs. Slugs identify records/anchors, not live detail routes. |
| `verificationStatus` | `unverified` for every candidate. Drives the shared visible badge. |
| `provenance` | `unknown`; neither real nor simulated is inferred. |
| `evidenceStatus` | `missing`; UI says Not supplied. |
| `publicationPermission` | `unknown`; UI says Unknown · Not cleared. Implementation approval does not grant evidence-disclosure permission. |
| `featuredOrder` | 1, 2, 3; shared provisional display order. |
| `availableLocales` | `["en"]` means English preview copy exists, not a reviewed complete case or publication eligibility. |
| `content.en` | `title`, `category`, `summary`, `competencyTags`, `scope`; existing English copy retained. |
| `content.vi` | Optional future copy slot in the type, absent from all records. No translation or route is activated. |

The contract intentionally represents candidates only. Turning a candidate into a verified case requires a separately reviewed evidence model and publication checks; changing a badge is insufficient. All three records have unique IDs/slugs, consistent locale availability and explicit unknown states. C3 remains workforce operations with industry unverified, not confirmed healthcare work.

## 5. Navigation changes

- Homepage Projects navigation opens `/projects` through Next.js Link.
- On the library, brand/Home return to `/#home`, About to `/#about`, Contact to `/#contact`, and Resume to `/#resume`. Projects exposes `aria-current="page"`.
- Back to homepage opens `/`; Explore the analysis approach opens `/#approach`.
- The library's Explore the candidates and Back to top links target actual local anchors.
- Existing homepage CTAs retain `#projects` and `#approach`. All existing section/project anchors remain usable.
- No `/projects/[slug]`, `/en`, `/vi`, nonexistent About/Contact pages, or missing download links are emitted. Vietnamese remains disabled.

Both pages contain eleven anchor elements, including the hidden-at-narrow-width Resume utility. All 22 emitted link destinations returned HTTP 200 and their fragments matched actual IDs. Pointer-driven homepage → library, library → homepage About, browser Back, and Back to homepage were exercised.

## 6. Verification and confidentiality checks

Reviewed the requested project documents, current application/content files, relevant installed skills and version-matched Next.js documentation before implementation. The current request supersedes earlier phase stops and the earlier prohibition on draft candidate cards for this local prototype only. It does not override the evidence or release gates.

All three records remain unverified with unknown origin and permission. Proposed analysis tags are explicitly distinguished from demonstrated proficiency. The page explains that a simulation is a labeled synthetic exercise, while verified professional work needs evidence of context, contribution and validation limits, plus separate permission to publish. No personal roles, employers, stakeholders interviewed, artifacts, outcomes, metrics, approvals or testimonials were supplied or invented. No clinical, regulatory or compliance claims were introduced.

This phase creates a listing, not a full case narrative. The canonical 19-section template was reviewed; its sections remain deferred with the detail pages rather than populated with fictional content. No patient records, employee details, confidential evidence, private endpoints, credentials or source artifacts were added or transmitted. New screenshots contain only this candidate prototype.

Source review used the [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md), with native link/disclosure behavior and repository constraints taking precedence over inapplicable generic suggestions. No unresolved critical source finding remains in the new library. Specific findings resolved:

- `src/components/layout/site-header.tsx:15` — existing 320px nav overflow; allow the navigation row to wrap.
- `src/components/case-studies/project-card.css:1` — isolate new card rules with unique prefixes; verify computed styling under the installed CSS loader.
- `src/components/sections/projects-library.tsx:1` — use real destinations and semantic headings; unavailable case details remain plain text.

## 7. Responsive and browser findings

Executed locally against the production preview at `http://127.0.0.1:3100` using installed Edge 155.0.4283.45, Windows, headless browser control through the Chrome DevTools Protocol, device scale factor 1. No browser automation dependency was installed. Measurements use CSS pixels and the browser's ordinary vertical scrollbar; content widths are 15px narrower than the configured viewport.

| Viewport | Homepage / library overflow | Library layout and evidence |
| --- | --- | --- |
| 1440 × 900 | None; scroll width 1425px on both | Two-column introduction and featured body; two supporting cards. Loaded Manrope/Geist, styles and screenshots inspected. |
| 768 × 1024 | None; scroll width 753px on both | Single-column introduction, featured body, cards and definitions; visible navigation row. |
| 390 × 844 | None; scroll width 375px on both | Readable stacked content, wrapped tags and metadata; no clipped candidate content found. |
| 320 × 740 | None after nav fix; scroll width 305px on both | Header/nav wrap; all candidate content and status text remain available. |

Initial testing reproduced an existing header overflow at 320px (scroll width 324px; Contact right edge 324.27px). The focused fix adds `flex-wrap` to shared navigation. Baseline comparison of homepage sections, headings, paragraphs, summaries and tag geometry matches exactly at 1440/768/390px. At 320px all visible main content shifts down 60px with header reflow; its widths, heights and text otherwise match. Expanded homepage disclosures also remain within the viewport at all four sizes.

Keyboard tests exercised skip-link activation to main, eleven desktop and ten narrow-library Tab stops, 3px visible focus outlines and in-viewport controls; disabled Vietnamese is skipped. Enter opens and Space closes each existing homepage disclosure. Reduced-motion emulation produces `scroll-behavior: auto` and zero-duration link transitions. Library content and links render with JavaScript disabled; that deliberate mode blocks script loading and is recorded separately from normal-page network checks.

Additional checks measured 78 rendered text elements in the library against their computed opaque ancestor backgrounds: the minimum contrast ratio was **5.66:1**, with no sampled pair below 4.5:1. This is computed-style evidence, not pixel-level or complete conformance certification. Emulated touch at 320px activated Explore the candidates. Navigation and library text links measured at least 44px high; the preserved brand link measured 40.39px high at that width. The browser accessibility tree exposes heading levels 1–4 and the disabled Vietnamese button; this is not a native screen-reader session.

Local evidence and verification scripts are under `%TEMP%\ba-phase-3-2a-lUPFtu`: `qa-results.json`, `qa-console.txt`, `extra-results.json`, `home-geometry.json`, `baseline-home-{width}.png`, `projects-{width}.png`, and `projects-{width}-full.png`. These are local QA artifacts, not committed or deployed content. Baseline files are under its `baseline` subdirectory. Scripts: `cdp.mjs`, `verify.mjs`, `extra-checks.mjs`; they expect the loopback server and isolated headless Edge debugging endpoint on port 9223. Temporary files may be removed by the OS; this report preserves the measured results and limitations.

## 8. Lint/build and technical results

| Check | Actual result |
| --- | --- |
| `npm run lint` | **PASS — exit 0**, no warnings or errors. Existing rules remain enabled. |
| `npm run build` | **PASS — exit 0**, no warnings in the final implementation. Compilation, TypeScript and static generation succeed. Routes: `/`, `/projects`, framework `/_not-found`. |
| Headless Edge `verify.mjs` | **PASS — exit 0**: eight page/viewport combinations, all 22 link/anchor destinations, homepage geometry comparison, keyboard/disclosures, actual route navigation/history, reduced motion and no-JavaScript content. No normal-page console exceptions or resource failures recorded. |
| Headless Edge `extra-checks.mjs` | **PASS — exit 0**: computed text contrast, emulated touch, link heights and accessibility-tree checks, with the preserved brand-height limitation above. |
| `git diff --check` | **PASS — exit 0**. Git emitted LF-to-CRLF normalization notices for the preserved Phase 3.1 review and updated preview data; no whitespace errors. |
| Build environment | Used approved network access for the unchanged Google font setup, as diagnosed in Phase 3.1. Offline font fetching is not fixed or claimed. |
| Candidate contract / preservation check | **PASS — exit 0**: stable IDs/slugs/order, explicit unknown states, English-only preview content, C3 caveat, unchanged package/lock/font/config/skill files and unrelated user refinements. Node's direct TypeScript import emitted a module-type detection warning in this temporary check; no package configuration was changed to suppress it. |
| Optional UI/UX skill search | Python executable unavailable; search exited 1. Used the skill's written guidance and existing design system; no Python installation or unverified generated design system. |

The first build exited 0 with a CSS warning but did not prove rendered styling; that defect was corrected and the browser/build checks repeated. Temporary browser-harness issues (scrollbar accounting, navigation/scroll settling, native keypress text and intentional script blocking) were corrected before relying on their results. Build success is not a claim of complete accessibility conformance.

## 9. Outstanding issues

- Owner confirmation of all project provenance, industry/context, personal contributions, permitted evidence, validation and publication permissions remains missing.
- Detail pages and their 19-section narratives are unimplemented by design. No case is release-ready merely because its library card exists.
- Native screen-reader sessions, physical touch devices, Safari/Firefox and actual browser-menu 200% zoom are **NOT TESTED**. Headless keyboard/layout checks are narrower evidence.
- Owner review of the library design is pending. Previous Phase 3.1 manual acceptance items are not automatically closed by this phase.
- Builds still require the established font network access. No dependencies, local font binaries or deployment were added.

## 10. Acceptance checklist

- [x] `/projects` implemented and connected to the existing homepage.
- [x] C1 is visibly prominent and explicitly provisional.
- [x] Featured/standard cards, competency tags and clear preparation states.
- [x] Single typed source for IDs, slugs, localized copy and independent evidence states.
- [x] All three candidates remain Draft · Unverified; provenance and permission unknown.
- [x] Existing homepage identity, content and anchors preserved; narrow header overflow corrected.
- [x] English-only routes and disabled Vietnamese preserved.
- [x] Production lint/build pass with actual exit codes.
- [x] Requested viewports and core navigation/keyboard behavior exercised in a real headless browser.
- [x] No new dependencies, invented artifacts, detailed cases or deployment.
- [ ] Owner acceptance of Phase 3.2A.

Recommendation: accept the implemented Phase 3.2A scope after owner review, with the stated content and browser-validation limitations. Stop here; Phase 3.2B is not started.
