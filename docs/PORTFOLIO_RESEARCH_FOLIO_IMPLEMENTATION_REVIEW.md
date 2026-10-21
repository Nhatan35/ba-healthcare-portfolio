# Research Folio — implementation and owner visual review

Final review date: **20 October 2026**. Implementation began on 19 October. Local checkout: `C:\projects\ba-healthcare-portfolio`. The owner selected Variant A for implementation; this report does not record owner acceptance of the resulting application or permission to publish it.

## 1. Implementation summary

Research Folio is implemented in the existing Next.js application. The homepage has a full-width, offset editorial headline, original analytical artwork and asymmetric selected work. The library uses a project index and alternating editorial spreads. All three case-study pages share the oversized title, conceptual cover, metadata strip, evidence notice and comfortable narrative column. C2's personal contribution is prominent; the preparation checklist remains secondary and closed by default.

This continues the existing components and content access. It introduces no dependency, locale, HRM feature, comparison toolbar or preview iframe. The application remains local-only at `http://127.0.0.1:3211` while the local production process is running.

## 2. Changed-file inventory

The baseline captured **332 existing tracked and untracked files**, their SHA-256 hashes, Git status and the pre-existing diff. The inventory below is relative to that task baseline, not to HEAD, which already contained owner changes.

| Existing file changed by this implementation | Purpose |
| --- | --- |
| `src/app/globals.css` | Research Folio typography, color tokens, horizontal navigation styling, hero/artwork, asymmetric work, methodology and profile reflow. Existing shared accessibility rules retained. |
| `src/app/page.tsx` | Move selected work directly after the hero; retain positioning, competencies and other sections. |
| `src/app/projects/[slug]/page.tsx` | Restrict runtime rendering to the existing generated slugs, so unknown slugs receive a prebuilt, server-readable HTTP 404. |
| `src/components/sections/hero.tsx` | Selected headline and open analytical-flow composition. |
| `src/components/sections/featured-projects.tsx` | Selected-work editorial heading; original featured ordering retained. |
| `src/components/sections/approach.tsx` | Editorial methodology heading; step data unchanged. |
| `src/components/sections/about-preview.tsx` | Refined profile heading; owner-input placeholders retained. |
| `src/components/sections/projects-library.tsx` | Project index and alternating articles using existing records. |
| `src/components/sections/projects-library.css` | Library title, index, spacing and responsive composition. |
| `src/components/case-studies/project-card.tsx` | Reusable conceptual cover and editorial copy container. |
| `src/components/case-studies/project-card.css` | Alternating cover/text spreads with readable metadata. |
| `src/components/case-studies/project-preview.tsx` | Distinct covers, explicit candidate/professional labels and visible evidence restrictions. |
| `src/components/case-studies/case-study-detail.tsx` | Shared cover, metadata composition, related-project artwork and fragment helper. Existing narratives and canonical section rendering retained. |
| `src/components/case-studies/case-study-detail.css` | Editorial case opening, reading measure, contribution emphasis, restrained checklist and related projects. |
| `docs/DESIGN_SYSTEM.md` | Append the implemented Research Folio decisions and QA fixes. The preceding design record is preserved byte-for-byte as a prefix. |

New files:

- `src/components/ui/analytical-artwork.tsx` — original reusable server-rendered SVG and conceptual captions/descriptions.
- `src/components/case-studies/fragment-navigation.tsx` — small client effect to reveal native disclosures and focus fragment targets, including history navigation.
- `src/app/not-found.tsx` — reuse the existing recovery screen at the root not-found boundary.
- `docs/PORTFOLIO_RESEARCH_FOLIO_IMPLEMENTATION_REVIEW.md` — this handoff record.

**317 baseline files are unchanged.** This includes all nine files under `src/content`, `src/data`, `src/lib` and `src/types`, all 251 installed skill files, dependencies/configuration/font setup, the owner acceptance/backlog documents and both A+B explorations. `src/components/layout/site-header.tsx` remains dirty relative to Git HEAD but is unchanged by this implementation. Existing untracked owner documents were inspected separately and retained.

## 3. Before/after decisions and visual assessment

| Area | Before | Research Folio result |
| --- | --- | --- |
| Homepage hero | Left headline and contained navy three-step board. | Oversized Geist statement across the page, offset second line and an open strand/lens visual. |
| Selected work | Wide navy C1 above supporting cards. | Unequal C1/C2 articles, staggered C2 start and a broad C3 spread. C1 → C2 → C3 remains the data and reading order. |
| Library | Featured card plus paired cards. | Curated introduction, project index and alternating cover/text spreads. Full scope and status information remains visible. |
| Case opening | Smaller title beside a metadata panel. | Large title, artwork/summary spread and four-part metadata strip. All project titles remain intact. |
| Narrative | Bordered white reading card. | Open, restrained reading column; the unchanged C2 contribution receives a pale surface and larger text. |
| Checklist | Native secondary disclosure. | Same native semantics and full content, with lighter framing and reliable history-fragment reveal. |
| Profile/contact | Framed placeholder card and navy contact section. | Open profile columns and a quiet serif prose accent; navy remains occasional emphasis in the contact section. No career details are invented. |

The approved Variant A mockup was compared with rendered application screenshots. The application preserves its characteristic sans-serif scale, offset hero, original visual vocabulary, asymmetric work and alternating library spreads. It deliberately retains the existing brand, language availability, positioning/competency content and detailed source-driven scope information. Consequently, the application is longer and denser than the exploration. The case summary sits beside the artwork instead of adding the mockup's extra metaphor headline. B's full-page rail is not implemented.

**Visual judgment:** the composition is materially transformed and coherent with Research Folio. Large type establishes priority; thin rules and open surfaces keep the pages calm. The three covers are recognizably related but distinct. The mobile layout stacks cleanly and preserves qualifiers outside the artwork. C2's long title wraps over several lines without ellipsis. The narrative remains readable at native size, and the preparation material does not dominate the opening.

Trade-offs remain: the spacious hero and complete evidence metadata create substantial scroll length; the profile is honestly unfinished pending owner input; some provenance language repeats across summary and detail contexts. These are owner-review considerations, not measured recruiter results. Visual quality was assessed from actual screenshots, not inferred from responsive assertions.

## 4. Screenshots and evidence

Evidence folder: `C:\Users\Admin\AppData\Local\Temp\ba-research-folio-20261019`. The folder name records the start date; final QA continued on 20 October. Evidence is local and may be removed by temporary-file cleanup. Nothing was uploaded or published.

Before captures: [Homepage desktop](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/before-home-desktop.png), [Homepage mobile](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/before-home-mobile.png), [Library desktop](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/before-library-desktop.png), [Library mobile](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/before-library-mobile.png), [C2 desktop](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/before-c2-desktop.png), [C2 mobile](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/before-c2-mobile.png). C1/C3 desktop baseline images are also retained.

| After view | Desktop 1440px | Mobile 390px |
| --- | --- | --- |
| Homepage hero | [Desktop](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/after-home-1440.png) | [Mobile](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/after-home-390.png) |
| Selected work | [Desktop](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/home-selected-1440.png) | [Mobile](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/home-selected-390.png) |
| Profile | [Desktop](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/home-profile-1440.png) | [Mobile](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/home-profile-390.png) |
| Contact | [Desktop](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/home-contact-1440.png) | [Mobile](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/home-contact-390.png) |
| Library opening | [Desktop](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/after-library-1440.png) | [Mobile](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/after-library-390.png) |
| C1 editorial spread | [Desktop](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/library-c1-1440.png) | [Mobile](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/library-c1-390.png) |
| C2 editorial spread | [Desktop](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/library-c2-1440.png) | [Mobile](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/library-c2-390.png) |
| C3 editorial spread | [Desktop](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/library-c3-1440.png) | [Mobile](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/library-c3-390.png) |
| C2 hero | [Desktop](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/after-c2-1440.png) | [Mobile](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/after-c2-390.png) |
| C2 narrative | [Desktop](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/c2-narrative-1440.png) | [Mobile](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/c2-narrative-390.png) |
| Checklist closed | [Desktop](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/c2-checklist-closed-1440.png) | [Mobile](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/c2-checklist-closed-390.png) |
| Checklist expanded | [Desktop](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/c2-checklist-expanded-1440.png) | [Mobile](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/c2-checklist-expanded-390.png) |
| Related projects | [Desktop](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/c2-related-1440.png) | [Mobile](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/c2-related-390.png) |

Full-page captures are also retained as `after-{home|library|c1|c2|c3}-{1440|390}-full.png`. Native-size openings and section crops were inspected in addition to these scaled overview images. All three case-study routes and the 404 screen have rendered screenshots. Final interaction fixes do not alter the captured visual composition; the final regression checks cover their behavior.

## 5. Responsive, browser and accessibility results

Browser: isolated headless Microsoft Edge, clean local profile, real production Next.js pages. No owner browser profile was modified.

| Check | Actual result |
| --- | --- |
| `npm run lint` | **Exit 0**, no lint warnings or errors in the final run. |
| `npm run build` | **Exit 0**, compilation, TypeScript and all eight static pages completed. No final build warning. |
| `git diff --check` | **Exit 0**. Git emitted LF-to-CRLF working-copy notices, not whitespace errors. |
| `git status --short` | **Exit 0**; pre-existing owner changes and the scoped implementation files remain uncommitted. |
| Main browser suite, `qa.mjs` | **Exit 0; 383 checks passed** on the final production source. |
| Complete anchors/history, `deep-links.mjs` | **Exit 0; 153 checks passed**: all 24 canonical anchors for each of C1/C2/C3 at 1440 and 390px, plus count and Back/Forward checks. Targets inside the closed checklist became visible and focused. |
| Navigation follow-up, `navigation.mjs` | **Exit 0; 165 checks passed**, including internal destinations/fragments (46 distinct href values), keyboard section navigation, focused Back/Forward targets for all three cases, and a readable 404 recovery screen without JavaScript. |
| Actual browser zoom, `zoom.mjs` | **Exit 0; all six routes passed at 200%** with disclosures closed/open and skip-link focus. Browser default zoom was set to 2 in the isolated profile, measured device-pixel ratio was 2 and visual viewport scale was 1. Original zoom was restored. This was browser zoom, not CSS zoom or a narrow-width substitute. |
| Responsive matrix | Homepage, library, C1, C2, C3 and unknown-slug 404 at **1440, 1024, 768, 390 and 320px**. Closed/open disclosure states: no observed horizontal overflow or inspected text clipping. |
| Route responses and server content | Five existing routes return 200; unknown slug returns **404**. All six contain a heading in the server HTML after the 404 fix. C2 narrative and canonical sections remain readable with application JavaScript disabled. |
| Keyboard | Skip link first in tab order and reaches main; visible 3px focus; Enter opens and Space closes tested native disclosures, including nested notes. Client navigation from home to library to C2 passed. |
| Contrast | Sampled visible text color/background pairs have minimum computed contrast **5.23:1**. This is a bounded sample, not exhaustive conformance testing. |
| Reduced motion | Emulated preference disables smooth scrolling and transitions. The fragment helper uses immediate jumps. |
| Console/hydration | No observed application runtime exceptions, hydration errors or unexpected console errors. Expected network 404 messages for the deliberately invalid slug are recorded separately. |
| Preservation helper | **Exit 0**; 317 unchanged baseline files, 15 scoped existing-file changes, no missing files, all nine locked business files unchanged. |

The dedicated anchor and zoom JSON records retain the measured results. The QA assertions are engineering checks, not user research or independent accessibility certification. Zoom screenshots include [Homepage](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/after-home-zoom200.png), [Library](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/after-library-zoom200.png), [C2](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/after-c2-zoom200.png) and [404](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/after-404-zoom200.png).

The bounded interface review also used the current [Vercel Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md) for semantic controls, visible focus, heading hierarchy, reduced motion and hydration safety. Native `details/summary` supplies its own keyboard semantics. Existing owner-attested first-person copy takes precedence over generic editorial recommendations.

## 6. Deep links and functional fixes

The existing canonical anchors remain the 19 top-level `sectionId-heading` targets and five nested targets: functional requirements, non-functional requirements, system interactions, evidence validation and outcomes. Heading wording and section status rendering are preserved. No source section ID or evidence array was renamed.

The expanded test found a real browser-history issue: closing the checklist before Forward could restore `#functional-requirements-heading` while leaving its containing disclosure closed and focus unset. The new fragment helper opens enclosing native `details`, focuses the existing target heading and scrolls it into view on initial load, hash changes and history navigation. It has no React open-state model, introduces no positive tabindex and does not interfere with ordinary Enter/Space toggling. Listeners and scheduled animation frames are cleaned up on unmount.

The other proven gap was the unknown-slug response: it returned HTTP 404 but initially lacked readable HTML content. The final fix sets `dynamicParams = false` for the existing build-generated collection and reuses the existing not-found UI at the root boundary. C1/C2/C3 routes and metadata are unchanged. New project records require rebuilding, consistent with the current static content workflow. No experimental framework option or dependency was introduced.

Early validation attempts included overly strict text-height checks, a screen-reader-only heading incorrectly counted as zoom clipping, and premature smooth-scroll sampling. Those helpers were corrected. A concurrent-browser test attempt also lost foreground timing; final browser suites run sequentially. One piped build attempt stopped with environment `spawn EPERM`; subsequent ordinary builds completed successfully. Failed metadata/root-fallback-only experiments did not solve the 404 issue; the retained static-parameter fallback did. These failures are not presented as passing tests.

## 7. Content, evidence and confidentiality preservation

| Contract | Final state |
| --- | --- |
| C1 | `C1`, `healthcare-appointment-management`, candidate, unknown provenance, unverified, evidence missing, permission unknown. |
| C2 | `C2`, `healthcare-omnichannel-integration`, anonymous professional draft, real provenance qualified by owner attestation. Title remains **Communications Integration — Workflow & Requirements Analysis**. |
| C3 | `C3`, `employee-shift-scheduling`, candidate, unknown provenance/industry, unverified, evidence missing, permission unknown. No HRM implementation. |
| Featured ordering | C1 → C2 → C3, unchanged. |
| Business content | All project records, analyses, professional narrative, requirements, outcomes, source references and real artifact evidence arrays unchanged by hash comparison. |
| C2 evidence | Still **unverified**; reported artifacts are not supplied or independently reviewed; publication permission remains **unknown**. No status upgraded. |
| Canonical structure | All 19 top-level and five nested section targets, statuses and original headings preserved. |
| Owner work | Existing acceptance/backlog documents, source changes outside scope, installed skills and untracked exploration files retained. |

All new art is conceptual and visibly labeled **not project evidence**. Appointment arcs, communication strands and scheduling bands contain no actual interfaces, patient data, employee rosters or private operational rules. No employer/vendor names, private API details, fabricated outcomes or professional achievements were added to the application. Owner-attested wording remains a source qualifier, not independent verification. Anonymous wording, noindex metadata and successful UI QA do not grant publication permission.

## 8. Evidence records and limitations

The local evidence directory contains `baseline-hashes.json`, `baseline-status.txt`, `baseline.diff`, `before-browser.json`, `rendered-review.json`, `qa-results.json`, `deep-links-results.json`, `navigation-results.json`, `zoom-results.json`, `preservation-results.json` and `final-source-hashes.json`, plus the screenshots and temporary test helpers. File comparisons use literal paths and SHA-256. Untracked files are checked independently because ordinary Git diff does not include them. The [404 without JavaScript capture](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-20261019/not-found-no-javascript.png) records the corrected server fallback.

Limitations: no native screen-reader session, physical-device session, Safari or Firefox testing was performed. Contrast is sampled; there is no accessibility certification. The design has not been tested with recruiters or measured for conversion. Profile, resume and contact information still require owner-approved content. Professional evidence verification and publication permission are unresolved. Future content changes require renewed wrap, anchor, disclosure and evidence-label checks.

## 9. Owner visual-review checklist

- [ ] Review homepage hero, selected work, methodology, profile and contact at desktop and mobile sizes.
- [ ] Review all three library spreads and the distinction between candidate topics and the professional draft.
- [ ] Review C2 narrative emphasis, metadata, evidence notice, related projects and the closed/expanded checklist.
- [ ] Confirm the typography, whitespace and conceptual illustrations fit the intended professional identity.
- [ ] Review C1/C3 as candidate preparation pages, not verified professional work.
- [ ] Provide any profile/resume/contact content through a separate authorized content task.
- [ ] Record owner acceptance explicitly; this technical handoff does not grant it.

No commit, push, deploy or publication was performed.

## 10. Handoff outcome

Required local implementation QA is complete. No required check remains blocked. The remaining limitations above concern coverage boundaries, owner content and external evidence/publication gates, not an automatic acceptance decision.

**READY FOR OWNER VISUAL REVIEW**
