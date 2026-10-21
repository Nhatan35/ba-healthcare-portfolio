# Research Folio — final UI polish review

Review date: **21 October 2026**. Repository: `C:\projects\ba-healthcare-portfolio`. Local polishing only; owner acceptance and publication permission are separate decisions.

## 1. Starting state and confirmed issues

The continuation inspected Git status, the saved implementation baseline and the final implementation source hashes. All 41 source files matched the prior final checkpoint. The Research Folio implementation was already complete; no polishing source edits or polish report had been saved before the usage-limit interruption. No redesign was restarted.

A fresh baseline recorded SHA-256 hashes for **336 tracked and untracked files**, the existing Git status and binary diff. The four CSS files were also copied to the local evidence folder before editing. Existing dirty files were treated as owner work, not replaced from Git HEAD.

The rendered baseline showed these bounded opportunities:

- The homepage hero CTA had the same quiet text-link treatment as secondary navigation and was easy to overlook beside the large headline and artwork.
- Concept captions and draft badges were 12px. Several project/evidence labels were 13px, making important qualifications relatively small.
- The library accumulated large gaps after its return link, heading, explanation and project index. Its first spread began at approximately 829px on desktop and 934px at 390px width.
- The mobile C2 contribution paragraph was relatively large at 22px, while adjacent narrative sections used 40px margins plus 40px top padding. A modest adjustment could improve reading rhythm without flattening the hierarchy.
- At 320px with the browser scrollbar present, the long C2 title split “Communications” before its final letter, and the horizontal navigation wrapped. This was caught by screenshot inspection despite the absence of overflow.
- The mobile brand link measured about 40px high. Other inspected CTA links already had comfortable target heights.

These are visual and engineering judgments from actual rendered screens, not recruiter research or accessibility certification.

## 2. Changes implemented and areas retained

| Area | Refinement | Visual assessment |
| --- | --- | --- |
| Hero CTA | Existing wording and `#projects` destination retained. Navy surface, white 15px text, modest 18px horizontal padding, 48px minimum height, 4px corners, teal hover and inset pressed feedback. | More apparent next action while leaving the headline and analytical artwork dominant. It remains content-width on mobile. |
| Secondary project links | Symmetric vertical padding and pale hover/focus feedback on homepage project links; slightly firmer library link weight and thicker hover underline. | Link intent is clearer without treating the entire project article as clickable. Existing 3px focus rings remain. |
| Narrow-screen reflow | At or below 360px, shared case titles use 34px and main-navigation links use 4px horizontal padding with a 44px minimum width. | Avoids the isolated final letter in C2 and keeps navigation on one row at 320px without shrinking its text or targets. Larger layouts are unaffected. |
| Brand target | Minimum height raised to 44px. | Improves mobile hit area without changing the header composition. |
| Metadata and captions | Concept captions, draft badges, library evidence labels and selected supporting labels raised to 14px. Case metadata values and section navigation use 15px; canonical section states and related-project qualifiers use 14px. | Qualifications are easier to read. Some tags wrap to an extra line, a deliberate readability trade-off. No text is hidden or shortened. |
| Library opening | Return-link gap 24px; context and index top margins 24px; smaller section transition; first spread top padding 32px. | First spread starts **72px earlier at 1440px** and **56px earlier at 390px**, measured from the rendered document. The large offset heading and alternating spreads retain their original character. |
| Shared case detail | Metadata label/value separation increased slightly. Below 600px, adjacent narrative sections use 32px margin/padding; C2 contribution text uses 20px with 1.6 line height. | Keeps contribution emphasis while easing mobile reading and reducing oversized pauses. Desktop narrative scale is unchanged. |

The full-width asymmetric hero, exact headline, horizontal navigation, font families, palette, art geometry/sizes, project order, alternating library spreads, complete long titles and narrative-first structure remain. The evidence panel already had a balanced readable layout, so its composition and full explanation were retained. The preparation checklist remains closed by default. No new component, JavaScript behavior, dependency, animation library or business copy was introduced.

The existing design-system and owner documents remain unchanged as explicitly requested. This report records the polishing decisions without rewriting their historical records.

## 3. Changed-file inventory

Relative to the **polishing baseline**, exactly four existing source files changed:

| File | Scope |
| --- | --- |
| `src/app/globals.css` | Hero/project CTA presentation, brand target, shared draft badges, captions and selected project metadata. |
| `src/components/sections/projects-library.css` | Introductory spacing and first-spread transition. |
| `src/components/case-studies/project-card.css` | Library metadata and detail-link emphasis. |
| `src/components/case-studies/case-study-detail.css` | Case metadata, navigation, captions, related-project qualifiers and mobile narrative rhythm. |

One new repository file: `docs/PORTFOLIO_RESEARCH_FOLIO_POLISH_REVIEW.md` (this report). Temporary scripts, browser profile, screenshots and QA records are outside the repository. No existing source file outside the four CSS files changed in this task.

## 4. Before/after visual evidence

Local evidence directory: `C:\Users\Admin\AppData\Local\Temp\ba-research-folio-polish-20261021`.

All comparison captures are fresh production renders from this polishing task, at native 1440×1000 and 390×1000 viewport sizes. Each screenshot is an opening or scrolled section view, not a resized full-page thumbnail. The corresponding before/after pages, project spreads, evidence presentation, narrative and checklist were visually inspected. The result is a restrained polish, with improved small-text readability and CTA hierarchy rather than a new art direction.

| View | Before desktop | After desktop | Before mobile | After mobile |
| --- | --- | --- | --- | --- |
| Homepage hero | [Before 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-home-1440.png) | [After 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-home-1440.png) | [Before 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-home-390.png) | [After 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-home-390.png) |
| Selected work | [Before 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-home-selected-1440.png) | [After 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-home-selected-1440.png) | [Before 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-home-selected-390.png) | [After 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-home-selected-390.png) |
| Library heading/introduction | [Before 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-library-1440.png) | [After 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-library-1440.png) | [Before 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-library-390.png) | [After 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-library-390.png) |
| C1 library spread | [Before 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-library-c1-1440.png) | [After 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-library-c1-1440.png) | [Before 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-library-c1-390.png) | [After 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-library-c1-390.png) |
| C2 library spread | [Before 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-library-c2-1440.png) | [After 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-library-c2-1440.png) | [Before 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-library-c2-390.png) | [After 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-library-c2-390.png) |
| C3 library spread | [Before 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-library-c3-1440.png) | [After 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-library-c3-1440.png) | [Before 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-library-c3-390.png) | [After 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-library-c3-390.png) |
| C2 hero | [Before 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-c2-1440.png) | [After 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-c2-1440.png) | [Before 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-c2-390.png) | [After 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-c2-390.png) |
| C2 metadata/evidence | [Before 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-c2-metadata-1440.png) | [After 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-c2-metadata-1440.png) | [Before 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-c2-metadata-390.png) | [After 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-c2-metadata-390.png) |
| C2 narrative | [Before 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-c2-narrative-1440.png) | [After 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-c2-narrative-1440.png) | [Before 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-c2-narrative-390.png) | [After 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-c2-narrative-390.png) |
| C2 personal contribution | [Before 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-c2-contribution-1440.png) | [After 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-c2-contribution-1440.png) | [Before 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-c2-contribution-390.png) | [After 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-c2-contribution-390.png) |
| C2 checklist closed | [Before 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-c2-checklist-1440.png) | [After 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-c2-checklist-1440.png) | [Before 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-c2-checklist-390.png) | [After 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-c2-checklist-390.png) |
| C2 checklist expanded | [Before 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-c2-expanded-1440.png) | [After 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-c2-expanded-1440.png) | [Before 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-c2-expanded-390.png) | [After 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-c2-expanded-390.png) |
| C2 related projects | [Before 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-c2-related-1440.png) | [After 1440](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-c2-related-1440.png) | [Before 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/before-c2-related-390.png) | [After 390](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-c2-related-390.png) |

C1/C3 opening captures are additionally retained as `before-{c1|c3}-{1440|390}.png` and `after-{c1|c3}-{1440|390}.png`. Their final shared layout was inspected. The [corrected 320px C2 title](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-c2-320.png) and [mobile CTA focus](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-hero-focus-390.png) are also retained. Actual zoom captures: [homepage](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-home-zoom200.png), [library](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-library-zoom200.png), [C2](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-c2-zoom200.png), [404](/C:/Users/Admin/AppData/Local/Temp/ba-research-folio-polish-20261021/after-404-zoom200.png).

Additional final images cover the three main page openings at 1024, 768 and 320px, C1/C3 mobile narrative, keyboard CTA focus, hover states and actual 200% browser zoom. Temporary-file cleanup can remove this evidence; nothing was uploaded or published.

## 5. Responsive and regression results

| Validation | Actual result |
| --- | --- |
| `npm run lint` | Exit **0**, no warnings/errors in final run. |
| `npm run build` | Exit **0**, production compilation, TypeScript and all eight static pages completed. |
| `git diff --check` | Exit **0**; existing LF-to-CRLF notices, no whitespace errors. |
| `git status --short` | Exit **0**; existing work preserved and the new report untracked. |
| `git diff --cached --exit-code` | Exit **0**; no staged changes. |
| Main browser suite, `qa.mjs` | Exit **0**; **383 checks passed**. |
| Full anchor/history suite, `deep-links.mjs` | Exit **0**; **153 checks passed**. |
| Navigation suite, `navigation.mjs` | Exit **0**; **165 checks passed**, 46 distinct href values. |
| Polish targets/interactions, `polish-targets.mjs` | Exit **0**; **67 checks passed**. Visible links/summaries measured at least 44×44 CSS px across all six routes and five widths; inspected priority metadata at least 14px; CTA keyboard activation and non-moving hover feedback passed. |
| Actual browser zoom, `zoom.mjs` | Exit **0**; all six routes passed at **200%**. Browser default zoom set to 2; devicePixelRatio 2, visualViewport.scale 1, inner width 708 CSS px. No overflow with disclosures closed/open; skip-link focus passed. Original zoom restored. No CSS zoom or narrow-viewport substitute used. |
| Rendered-content comparison | Exit **0**; ten desktop/mobile snapshots preserve text, IDs, headings, links, title, robots and language. |
| Final preservation audit | Exit **0**; four scoped CSS changes, one new report, 332 unchanged baseline files, no missing files. |

These are fresh polishing-task checks; prior implementation counts are not substituted for current results. The final correction affects only widths at or below 360px. Lint, build, the five-width main suite, target/interaction checks and actual zoom were rerun after that correction. The 1440/390px canonical-anchor and navigation results from earlier in this polishing pass remain applicable: the final media rules are inactive at those widths and every component, route and fragment helper is unchanged. The 1440/390px before/after captures likewise retain the final appearance; the 320px captures were refreshed after the fix. The local server is bound to `127.0.0.1:3211`. Browser testing used an isolated headless Microsoft Edge profile, with no owner browser profile or extensions.

- All six routes: homepage, library, C1, C2, C3 and unknown-slug 404.
- Five viewport widths: **1440, 1024, 768, 390 and 320px**, including closed and expanded disclosures. No observed horizontal overflow or inspected text clipping; long titles remain complete.
- All 19 top-level and five nested canonical anchors on each case page at 1440/390px. Direct fragments, closed-disclosure reveal, focus and browser Back/Forward passed.
- Native Enter/Space disclosure behavior, skip-link navigation, internal links, client route transitions and reduced-motion handling passed.
- Existing routes returned HTTP 200; the unknown slug returned HTTP 404 with readable server HTML. C2 content and 404 recovery were also checked with application JavaScript disabled.
- No observed application runtime exceptions, hydration errors or unexpected browser console errors. Deliberate unknown-slug network 404 entries are expected and recorded separately.

## 6. Accessibility findings and limitations

Sampled text foreground/background combinations retained a minimum **5.23:1** computed contrast. Text enlargement does not substitute for contrast; the existing palette already performed well in the inspected sample. Primary CTA hover/focus and secondary link feedback were reviewed without layout movement. Links and disclosures retain native semantics; project identity, provenance and evidence restrictions are communicated in text rather than color alone.

The bounded review used the current [Vercel Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md) for focus, semantic controls, reduced motion and hydration safety, alongside the local UI/UX skill. Existing factual copy and native control behavior take precedence over generic copy or event-handler prescriptions.

No independent accessibility certification, native screen-reader session, physical touch-device testing, Safari/Firefox testing or recruiter usability study was performed. Contrast testing is sampled. Some noncritical brand/footer notes remain below 14px; this pass enlarged the priority project/evidence information rather than mechanically normalizing every text style. The long mobile case title and complete qualifications still require substantial scrolling, which preserves the editorial identity and honest content boundaries.

## 7. Content, privacy and owner-work preservation

SHA-256 comparisons use literal paths, including the bracketed `[slug]` directory. **332 baseline files remain byte-for-byte unchanged**; only the four listed CSS files differ. No baseline file is missing. The single new report is audited separately from Git diff, which does not include untracked content.

All nine files under `src/content`, `src/data`, `src/lib` and `src/types`, all 251 installed skill files, package dependencies/configuration, existing documents and previous untracked owner work are unchanged. `docs/DESIGN_SYSTEM.md` and the earlier implementation files remain dirty relative to Git HEAD, but their pre-existing state is preserved except for the explicitly listed CSS refinements.

Rendered snapshots at both capture widths match the baseline exactly for main text, every DOM ID, headings, href values, document title, robots metadata and language. CSS contains no generated factual copy or replacement content.

| Locked contract | Result |
| --- | --- |
| C1 | `healthcare-appointment-management`; candidate topic, unknown provenance, unverified evidence and unknown permission retained. |
| C2 | `healthcare-omnichannel-integration`; anonymous **Communications Integration — Workflow & Requirements Analysis** identity and URL retained. Professional draft; owner-attested source retained. |
| C3 | `employee-shift-scheduling`; candidate topic and unverified industry retained. No HRM implementation. |
| Evidence/publication | Verification remains **unverified**; supplied artifact state and actual reference arrays unchanged; publication permission remains **unknown**. |
| Canonical sections | All 19 top-level and five nested IDs, heading text and status records retained; fragment/history helper untouched. |
| Artwork | Original conceptual SVGs untouched. Visible conceptual/not-project-evidence captions retained and enlarged. |
| Owner work | Acceptance/backlog records, A+B explorations, earlier review documents, components and untracked files preserved. |

No professional achievement, outcome, business requirement, system behavior or evidence record was added. No confidential names, private API information, patient data or employee data was introduced. Local technical QA does not establish evidence verification, permission or owner acceptance.

## 8. Remaining UX backlog

- Owner review of the stronger hero CTA, enlarged metadata and slightly tighter library opening.
- Profile, resume and contact content still needs accurate owner-approved information; existing honest missing-content states were retained.
- Repeated evidence wording may merit a separate content-structure review. No repetition was removed in this CSS pass.
- Screen-reader, additional-browser and physical-device review remain useful before any separately authorized release.
- Review future longer content for wrapping and scrolling while preserving all evidence distinctions.
- Independent artifact review and publication permission remain unresolved content gates.

The initial sandboxed Edge launch failed with Windows access errors; an isolated launch through the approved escalation succeeded. This was a QA environment issue, not an application failure. Two production processes were intentionally stopped to rebuild; their termination codes are not build failures. The intermediate 320px screenshots exposed the title/navigation issues above, which were corrected and recaptured.

No additional design refinement is required to complete this bounded polishing scope.

## 9. Owner acceptance checklist

- [ ] Review the desktop/mobile hero CTA and its keyboard focus.
- [ ] Compare selected work and all three alternating library spreads before/after.
- [ ] Confirm project classifications, conceptual captions and evidence labels are comfortably readable.
- [ ] Review C1/C2/C3 titles, metadata and narrative spacing, including narrow mobile and 200% zoom.
- [ ] Review C2 checklist closed/expanded and direct-link/history behavior.
- [ ] Record owner acceptance explicitly; this checklist is not automatically approved.
- [ ] Keep public release separate from visual acceptance and subject to evidence/disclosure permission.

## 10. Handoff

Technical and visual QA for the bounded polishing pass are complete. No required check remains blocked. See the limitations and outstanding content gates above. No commit, push, deployment, publication, HRM work or automatic owner approval was performed.

**READY FOR OWNER FINAL VISUAL REVIEW**
