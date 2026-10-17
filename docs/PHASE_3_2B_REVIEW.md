# Phase 3.2B — Reusable Case Study Detail Experience

Review date: 2026-10-14. Implemented in `C:\BA\Portfolio\ba-healthcare-portfolio`. Owner acceptance remains pending. This phase creates local preparation pages; it does not establish verified experience or authorize deployment.

## 1. Implementation summary

Implemented one reusable App Router detail template for the three existing project candidates. Each page provides candidate metadata, an explicit evidence notice, quick overview, section navigation, the canonical deep-dive structure, proposed discovery questions, related candidates, and return links. The library now links to the preparation pages.

Existing project records remain the single source for identity, title, slug, category, proposed scope, competency focus, and project-level evidence states. All candidates remain Draft · Unverified, with provenance and publication permission unknown. C1 retains its existing provisional featured position in the library; C3 retains its unverified-industry caveat.

Read the project guidance, product/design/information/content architecture, evidence matrix, verification checklist, canonical template, and previous phase reviews. Applied the installed frontend-design, ui-ux-pro-max, web-design-guidelines, vercel-react-best-practices, and ba-portfolio-storytelling guidance. Next.js APIs follow the installed `node_modules/next/dist/docs/` guides. Reviewed the current [Vercel Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md). The optional UI/UX Python search remains unavailable in this environment; no tooling was installed to work around it.

## 2. Components created and files changed

`src/components/case-studies/case-study-detail.tsx` exports reusable Server Components: `CaseStudyHeader`, `ProjectMetadata`, `EvidenceStatus`, `QuickOverview`, `CaseStudySectionNavigation`, `DeepDiveSections`, `RelatedProjects`, `BackToProjects`, and the composing `CaseStudyDetail`. Small related components share a file; none needs a client boundary.

| File | Purpose |
| --- | --- |
| `src/types/case-study.ts` | Typed section workflow, classified content blocks, evidence references, verification and permission fields. |
| `src/content/projects/case-study-sections.ts` | Canonical ordered section definitions and explicit evidence gaps. |
| `src/content/projects/preparation-questions.ts` | Proposed discovery questions keyed by existing candidate ID. |
| `src/lib/case-studies.ts` | Candidate lookup, typed detail assembly, related-project selection. |
| `src/app/projects/[slug]/page.tsx` | Static params, awaited route params, metadata, notFound, page composition. |
| `src/app/projects/[slug]/not-found.tsx` | Branded unknown-project recovery with Back to Projects. |
| `src/components/case-studies/case-study-detail.tsx` and `.css` | Reusable detail experience and scoped styles. |
| `src/components/case-studies/project-card.tsx` and `.css` | Real preparation-page links with hover and focus states. |
| `src/components/layout/site-header.tsx` | Recognize project detail context; Projects uses `aria-current="location"`. |
| `docs/DESIGN_SYSTEM.md` | Append this phase's layout and interaction decisions. |
| `docs/PHASE_3_2B_REVIEW.md` | This review. |

Removed only `src/lib/.gitkeep` and `src/app/projects/[slug]/.gitkeep` because real implementations now occupy those directories. No dependency or lockfile changes in this phase. The existing project records, homepage implementation, font setup, global CSS, Next/ESLint configuration, and installed skills are preserved. Existing modifications from earlier phases remain uncommitted and are not attributed to this phase.

## 3. Shared content model and information hierarchy

`CaseStudy` carries `projectId`, `slug`, `locale`, the original typed candidate, `sections`, project `verificationStatus`, and project `publicationPermission`. Each `CaseStudySection` carries `sectionId`, `sectionTitle`, `sectionSummary`, `sectionStatus`, `contentBlocks`, `evidenceReferences`, section `verificationStatus`, section `publicationPermission`, and optional nested sections. Project identity is composed from the existing candidate rather than copied into unrelated content files. English is the only assembled locale.

The section workflow union supports **Missing**, **Draft**, **Needs Verification**, **Verified**, and **Approved for Publication**. Evidence verification and disclosure permission are independent fields; a section workflow label does not authorize publication of the project. The existing project-level status contract is unchanged. Content blocks distinguish Proposed Analysis, Unverified assumption, and Confirmed information. No confirmed project narrative is supplied here.

Every candidate has 19 canonical sections: discovery has Draft preparation questions and remains unverified; the other 18 sections are Missing. The five nested requirement/validation topics are also Missing. All evidence-reference arrays are empty and every section's publication permission is unknown. The overview distinguishes the confirmed existence of an editorial candidate from unverified project assumptions and missing business evidence.

The repository requires the canonical 19-section order. The requested 20 conceptual topics are supported without replacing that template:

| Requested topic | Rendered location |
| --- | --- |
| Project overview | Quick overview, before the deep dive. |
| Business context / problem statement | Canonical sections 1 / 2. |
| Stakeholders / discovery | Sections 4 / 5. |
| As-Is / root cause / business goals / To-Be | Sections 6 / 7 / 3 / 8. |
| Business requirements | Section 10. |
| Functional / non-functional requirements / system interactions | Three separately headed subsections within section 11. |
| Business rules / exceptions / acceptance criteria | Sections 12 / 15 / 16. |
| Decisions and trade-offs | Section 17. |
| Evidence and validation / outcomes | Two separately headed subsections within section 18. |
| Lessons learned | Section 19. |

Canonical user story mapping (9), BPMN/process flow (13), and wireframes (14) remain explicit missing states. No diagrams, financial values, metrics, responsibilities, or completed activities have been invented.

## 4. Routes implemented

| Route | Actual HTTP result | Rendering |
| --- | --- | --- |
| `/` | 200 | Existing static homepage preserved. |
| `/projects` | 200 | Existing static library with working detail links. |
| `/projects/healthcare-appointment-management` | 200 | Statically generated candidate page. |
| `/projects/healthcare-omnichannel-integration` | 200 | Statically generated candidate page. |
| `/projects/employee-shift-scheduling` | 200 | Statically generated candidate page. |
| `/projects/unknown-candidate` | **404** | `notFound()` recovery. |

`generateStaticParams` derives slugs from existing records. Both page and metadata functions await `params`; unknown candidates call `notFound()`. Each valid page has its candidate title, a draft description, and noindex/nofollow metadata. No locale routing, external CMS, database, API route, deployment, or Phase 3.2C implementation was added. Noindex is not a privacy control.

## 5. Accessibility findings

Actual browser checks used installed headless Edge 155 on Windows through the Chrome DevTools Protocol, against the production server on loopback port 3100. No browser dependency was installed.

- One h1 per page; detail accessibility tree exposes 31 headings in ordered levels 1–4, including nested topics. Header/main/footer, named navigation, section labels, definitions, and native disclosure semantics are present.
- Skip-link activation focuses main. Enter opens and Space closes both the full section index and discovery disclosure. Focus outlines measure 3px. Section links target visible headings outside collapsed content; a mouse click to discovery reached the visible heading.
- All 30 rendered detail links and summaries sampled on desktop have at least 44px target height. Emulated touch at 320px opens the discovery disclosure. The existing shared brand's smaller target was documented in Phase 3.2A and is unchanged.
- Reduced-motion emulation yields `scroll-behavior: auto` and zero-duration link transitions.
- 122 rendered text samples against computed opaque ancestor backgrounds have a minimum contrast of **5.46:1**. This is a computed-style sample, not exhaustive pixel-level certification.
- Server-rendered content, real links, and native disclosure markup remain present with JavaScript disabled. Normal-page runs recorded no JavaScript console errors or exceptions. Deliberate script blocking is a separate test condition.
- Browser navigation exercised Library → C1 → related C2 → Back to Projects. All collected internal route and fragment destinations resolve.

Native screen-reader sessions, physical touch hardware, Safari, and Firefox remain **NOT TESTED**. Source and browser checks are not a claim of complete accessibility conformance.

## 6. Responsive findings

All five valid pages were exercised at each requested width, with 900px viewport height. The ordinary scrollbar accounts for the difference between viewport and content width.

| Viewport width | Client / scroll width | Detail layout |
| --- | --- | --- |
| 1440px | 1425 / 1425px | Sidebar navigation, prose column, four-column metadata, paired related candidates. |
| 768px | 753 / 753px | Navigation above prose, two-column metadata. |
| 390px | 375 / 375px | Single-column evidence, metadata, and related candidates. |
| 320px | 305 / 305px | Wrapped header, titles and labels; no horizontal overflow. |

All three detail pages also pass overflow checks with every disclosure open at all four widths. Screenshots were captured, with desktop and narrow mobile visually inspected. Existing Manrope and Geist loaded successfully. Measured homepage sections, headings, paragraphs, summaries, and tag geometry match the saved pre-phase baseline exactly at every width.

**Actual 200% browser zoom:** used the isolated Edge profile's browser zoom setting, not CSS scaling or pinch emulation. A 1440px outer window produced `devicePixelRatio: 2`, `innerWidth: 707`, content/scroll width 699px, and visual viewport scale 1. All five pages reflow without horizontal overflow, including opened disclosures. Keyboard toggling also works at this zoom. Zoom was restored afterward.

## 7. Missing business evidence

All three candidates still need owner-supported provenance (real or simulated), context/timeframe, role and personal contribution, permissible source material, requirements and decision traceability, validation evidence, outcomes, and publication permission. C3 additionally needs industry confirmation before being presented as healthcare experience.

C1's proposed questions concern service boundaries, appointment states, capacity ownership, and evidence sources. C2's concern channels, request ownership, handoff information, and failure responsibility. C3's concern industry, policy ownership, scope, authorship, and validation. These are future clarification questions, not claims that discovery occurred. Missing sections explain the precise evidence gap and do not contain fictional artifacts or achieved results.

## 8. Lint/build and verification results

| Command / check | Actual result |
| --- | --- |
| `npm run lint` | **PASS — exit 0**, no warnings or errors in the final run. |
| `npm run build` | **PASS — exit 0**, compilation, TypeScript, static generation complete; no build warnings. Three detail paths appear as SSG routes. |
| Browser `verify.mjs` | **PASS — exit 0**, rerun against the final build: 20 page/viewport combinations, route/404 responses, all internal destinations, homepage geometry, keyboard, mouse, touch, reduced motion, and console checks. |
| Browser `extra-checks.mjs` | **PASS — exit 0**: actual 200% zoom on five pages, accessibility tree, target heights, contrast, route interactions, and server content without JavaScript. |
| `preservation.mjs` | **PASS — exit 0**: existing file hashes change only for the scoped header/card edits, design-system appendix, and the two replaced markers; all 251 installed skill files preserved. |
| `git diff --check` | **PASS — exit 0**; existing LF-to-CRLF normalization notices, no whitespace errors. |

Builds used the approved network access required by the existing Google font setup, as diagnosed in Phase 3.1. This phase does not make offline font fetching reliable. No lint rules or TypeScript checks were disabled. A temporary inline shell probe had a quoting error; it was replaced with a file-based preservation script before relying on results. A read-only process-inspection command was denied by the sandbox and was not needed for validation.

Local QA evidence: `%TEMP%\ba-phase-3-2b-NDgwYF`, including `qa-results.json`, `extra-results.json`, `preservation-results.json`, `qa-console.txt`, baseline file hashes/backups, `detail-{width}.png`, `viewport-{width}.png`, and `detail-200-percent.png`. Scripts `verify.mjs`, `extra-checks.mjs`, `preservation.mjs`, and `cdp.mjs` are temporary local verification artifacts; they are not shipped application code. Browser scripts expect the loopback production server and isolated Edge debugging port 9223. Temporary files may be removed by the OS; the measured findings above remain in this review.

## 9. Remaining issues

- Project evidence, provenance, personal contributions, and publication permissions are unresolved; no candidate is a completed case study.
- Owner review of Phase 3.2B remains pending. This work does not retroactively approve earlier phase reviews.
- Native screen-reader, physical-device, and other-browser coverage remains outstanding.
- The existing network-dependent font build constraint remains. Dependencies and font configuration were deliberately preserved.
- The long preparation structure reflects the canonical template; section navigation provides direct access while each missing state remains explicit.

## 10. Acceptance checklist

- [x] Three existing slugs use one reusable detail experience and shared candidate records.
- [x] Requested content fields and all five section workflow states are typed.
- [x] Section verification and project publication approval remain distinct.
- [x] Requested 20 conceptual topics map into the repository's canonical structure.
- [x] Proposed analysis is labeled; missing evidence and permission are explicit.
- [x] All candidates remain Draft · Unverified, with no fabricated business facts or artifacts.
- [x] Section navigation, native disclosures, related links, Back to Projects, static params, metadata, and unknown-slug 404 work.
- [x] Requested viewports, actual 200% zoom, keyboard, mouse, emulated touch, and reduced motion exercised in a browser.
- [x] Homepage geometry and unrelated edits, dependency files, fonts, and installed skills preserved.
- [x] Final lint/build pass with actual exit code 0.
- [x] English-only scope; no deployment, unnecessary dependencies, or Phase 3.2C work.
- [ ] Owner acceptance of Phase 3.2B.
- [ ] Business evidence and publication clearance for any final portfolio case.

Recommendation: accept the technical Phase 3.2B preparation experience after owner review, with the evidence gaps and validation limitations above. Stop here and await owner approval.
