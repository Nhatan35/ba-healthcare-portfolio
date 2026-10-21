# Portfolio A+B art direction

18 October 2026. **Design exploration only; awaiting owner direction review.**

This proposal combines an Editorial Research Portfolio (A) with a Product & Systems Portfolio (B). It explores the homepage, Projects Library and C2 detail without replacing the current implementation. The intended impression is a thoughtful analyst's research folio: expressive titles, clear reading order and visible relationships between analytical ideas.

Open the [local visual exploration](PORTFOLIO_AB_MOCKUPS.html). It contains three responsive, annotated compositions, including an expandable checklist. These are selective layout studies, not complete application pages or approved replacement copy. All illustrations were created for this exploration and are explicitly not project evidence. The HTML uses local system fonts, inline styles and no scripts, external assets or network requests.

## 1. Design principles

1. **Editorial hierarchy leads.** A title, short introduction and readable narrative establish the subject before metadata or controls. Use a serif display voice for major titles and a restrained sans serif for reading and navigation.
2. **Relationships provide the visual identity.** A recurring analysis plate connects a question, its constraints and a testable definition. Lines convey relationships, not decoration. Its role is conceptual explanation; it never masquerades as an actual project deliverable.
3. **Whitespace has a purpose.** Wide margins distinguish framing from detailed reading. Within a section, group related information closely. Avoid both dense dashboard tiles and oversized empty hero screens.
4. **Evidence is part of the reading hierarchy.** Keep draft, owner-attested, unverified and permission limitations visible in ordinary language. An attractive cover cannot imply completed or verified work.
5. **Vary the composition, keep the grammar.** A split opening, a wide lead project, paired supporting work and an open method sequence share alignment, type and color. They do not all become the same rounded rectangle.
6. **Quiet interaction.** Underlined links, visible keyboard focus and native disclosures do the work. No perpetual animation, parallax, pointer-following visuals or scroll-dependent reading.

### A+B balance

| Editorial Research (A) | Product & Systems (B) | Combined result |
| --- | --- | --- |
| Serif titles, deliberate line lengths, margin notes | Connected structures, explicit boundaries, traceability | A readable analytical folio |
| Curated sequence and asymmetric composition | Repeated metadata and state vocabulary | Distinct projects with comparable information |
| Narrative paragraphs with clear sectional rhythm | Compact summary and evidence records | A quick scan followed by an optional deeper read |

The typography and composition carry most of A. Diagram structure and information organization carry B. Neither requires fake dashboards, metrics, product screenshots or a claim that research interviews occurred.

## 2. Mood and visual keywords

Calm, precise, considered, literate, open, connected, quietly technical. Healthcare-tech comes through the existing subject matter, clarity and restraint. It does not require medical crosses, hospital photography, clinical blue gradients or patient imagery.

The memorable device is the **analysis plate**: a pale sage field holding a few labeled relationships, with a concise explanatory caption. Reserve it for the hero and project covers. Elsewhere, use open typography and alignment. This keeps the direction distinct from both a marketing landing-page template and a dense research journal.

Self-critique of the initial plan: a cream background, ornate serif and many hairline columns would feel like a generic luxury editorial template. The chosen study instead uses cool off-white, a sturdy readable serif, generous narrative columns and subject-specific analytical relationships. A dark card for every project would repeat the current visual weight, so covers are mostly light and project text sits outside the artwork.

## 3. Color direction

These are **proposed exploration values**, not changes to runtime tokens. Navy, teal and slate retain the existing identity. Surface changes establish a cooler paper-like reading environment.

| Role | Proposal | Use |
| --- | --- | --- |
| Paper | `#F5F7F4` | Overall page background; cool off-white |
| Ink | `#102D3C` | Titles, body emphasis, diagram text |
| Teal | `#176B65` | Links, focus and selected analytical relationships |
| Slate | `#52656E` | Supporting prose and metadata labels |
| Sage | `#E7EEE9` | Analysis plate, selected cover fields |
| Mist | `#EFF2F4` | Secondary covers and quiet evidence surfaces |

Supporting values: white `#FFFFFF` for reading insets; line `#C8D3D0` for decorative separators. The pale line is not a sufficient control outline by itself; interactive boundaries and focus use teal or ink. Evidence labels do not use green success checks. Draft provenance and permission are separate text fields, not positions on a progress meter.

Use accent sparingly: a link, a connector or a small active marker. Avoid teal-colored paragraphs, tinted words within the main headline and large gradient washes. Later implementation must measure all foreground/background pairs, including hover, focus and composited states; a proposed palette alone is not an accessibility result.

## 4. Typography and spatial direction

**Display proposal:** Georgia regular, with Cambria and a generic serif fallback. Its sturdy forms support an editorial tone without requiring a new font download. Use it for the hero, page titles and major section titles. Avoid italic highlight words and very thin weights. The local study is an actual Georgia rendering where available, not a simulation of an uninstalled premium typeface.

**Reading and UI proposal:** retain the application's Geist for body, metadata and navigation in a later implementation. The independent study uses Arial/sans-serif because it deliberately does not copy application font assets or fetch fonts. Do not retain Manrope as a third simultaneous voice; replacing its display role is a proposed later change only. Font selection remains subject to owner review and full-title/zoom testing.

| Role | Desktop study target | Narrow-screen target |
| --- | --- | --- |
| Homepage title | 64–76px, regular, line height about 1.06 | 38–44px, natural wrapping |
| Long C2 title | 48–60px, line height about 1.1 | 32–40px, no truncation |
| Section title | 32–40px | 28–32px |
| Card title | 26–32px | 24–28px |
| Body | 17–18px, line height 1.6–1.7 | 16–18px |
| Metadata | 14–15px, sentence case | 14–15px, wraps |

Use a 12-column conceptual desktop grid within roughly 1240–1320px of content, with 40–64px outer gutters. Start the hero near a 7:5 split. Main narrative measure is 58–68 characters; side notes stay around 240–280px. Spacing follows 8, 16, 24, 32, 48, 64 and 96px. Surface corners are modest: approximately 4–8px for diagrams/insets and controls, rather than one large radius on every block. Shadows belong only to a floating diagram sheet, at very low opacity; project articles need no resting shadow.

## 5. Homepage concept

### Composition

```text
Identity                          Work / Approach / Profile / Contact

Left-aligned editorial title      Analytical relationship plate
Existing introduction             Need → Requirement → Testability
Two purposeful links              Constraints and evidence caption
Existing development limitation

Selected work                     Draft collection explanation
[ C1 wide cover ]                 C1 title / candidate / question
[ C2 cover and narrative ]        [ C3 cover and narrative ]

How I Analyze                     Understand → Connect → Define → Validate
                                  Questions and explanations below each

Profile in progress               Honest profile and resume availability
Contact                           Approved-channel availability
```

Retain “Clear thinking. Better healthcare systems.” for the study so typography and layout can be judged without a copy rewrite. The left title becomes the first visual anchor. The right plate connects the existing “Understand the need,” “Define the requirement” and “Make it testable” concepts. Its visible caption says “Illustrative analysis framework · Not project evidence.” It is not a screenshot or representation of C2 architecture.

**Selected work:** keep C1 first and provisionally featured, C2 second, C3 third. Lead with a wide light cover beside C1's question. Follow with two open articles whose cover, provenance, title, summary and genuine detail link have consistent ordering. Use “Selected work” only alongside a clear explanation that the collection includes candidate topics and an unverified professional draft. Do not upgrade C1 to a completed case because it occupies more space.

**How I Analyze:** reuse the four existing approach steps and questions. Give each a visible position along a simple sequence, with its existing explanation underneath. Numbering is appropriate only if communicating that sequence; it must not imply completed project phases. Keep the current competency content in an open two-column section in a full later implementation; its omission from this abbreviated study is not deletion authorization.

**Profile/contact:** replace the feel of a placeholder dashboard with an open two-column introduction and definition list. Keep the truthful owner-input and resume availability states. A quiet contact closing can use the same paper surface with a short navy heading, rather than another large dark marketing panel. No invented name, role seniority, portrait, biography, address, download or send action.

**Mobile:** title, description, actions and limitation precede the plate. Then stack project articles in C1/C2/C3 order. The analysis sequence becomes vertical, with all labels readable rather than shrinking a desktop drawing. Profile/contact use normal document flow.

## 6. Projects Library concept

Treat `/projects` as a curated collection. A large “Projects library” title and a short status explanation lead into the work. Omit search, filters, tabs and completion statistics for this three-item collection.

```text
Projects library                  How to interpret this draft collection

C1 / Candidate topic / Unverified
[ Wide appointment concept cover ]   Title + question + scope + detail link

[ C2 integration concept cover ]     [ C3 constraint concept cover ]
Professional project draft            Candidate topic
Owner-attested / Unverified            Industry unverified / Unverified
Exact anonymous title                 Existing workforce title
Existing summary and scope            Existing summary and scope

Project and evidence definitions / publication restriction
```

**Cover vocabulary:** C1 uses three clearly hypothetical appointment-state blocks; C2 uses three abstract activity areas, “Workflow analysis,” “Requirements coordination,” and “Progress reporting”; C3 uses an illustrative relationship between availability, coverage and approval. Keep the captions visible: “Concept illustration · Not project evidence.” Do not add real system names, interface fields, stakeholder roles, screenshots, data, dates, fake specification IDs or outcome charts. C3's artwork does not establish a healthcare setting or map it to HRM.

Make the distinction explicit above each title. C2 says **Professional project draft · Owner-attested · Unverified**. C1 and C3 say **Candidate topic · Unverified**; provenance remains unknown. All retain missing evidence and unknown publication permission. A simple divider or restrained teal marker may reinforce this text but cannot replace it.

Use natural content heights. Align cover ratios and the top metadata baseline rather than padding shorter narratives to an arbitrary card height. For the very long C2 title, allow more lines; do not abbreviate or hide the anonymous title. On mobile, place cover before provenance and full text; the metadata should not become a dense badge cloud. Existing scope disclosures remain native and keyboard operable in the future implementation.

## 7. C2 detail concept

Keep `/projects/healthcare-omnichannel-integration` and the full title **Communications Integration — Workflow & Requirements Analysis**. The study does not rename it to the old candidate topic or introduce a vendor/employer name.

```text
Back to Projects
Professional project draft / Unverified
Large editorial title               Summary record
Existing first-person introduction  C2 / Real, owner-attested
                                    Evidence missing / Permission unknown

Evidence review pending             Exact existing limitation paragraph

Reading column                      On this page
  Project Context & Scope           Short overview links
  Personal Contribution             Static, compact summary
  Workflow Analysis & API Coordination
  Reported Artifacts & Evidence
  Verification & Publication Status

Preparation checklist [closed by default]
  All 19 canonical sections + 5 nested topics retained when expanded

Related projects: C1 and C3 with small concept covers and candidate labels
```

**Hero:** use the long title as the dominant form. A light structured summary sits beside it, with paired labels and values. No large dark artifact cover at the start: the contribution and limitations should arrive before an illustrative visual. The summary moves below the introduction on mobile.

**Narrative:** preserve the five current overview sections in their current order and reuse their exact anonymous copy. Give Personal Contribution a slightly stronger rule and spacing, not a success-colored card. Use paragraph rhythm and semantic subheadings; do not turn every sentence into a tile. The study includes excerpts solely to compare layout.

**Evidence:** keep a readable mist/sage notice close to the hero and a full verification section in the narrative. Reuse the existing limitations paragraph verbatim. Keep contribution source, supporting artifacts, acceptance/production/outcomes and publication permission distinct. “Reported as created” is not “supplied” or “reviewed.” Do not convert drafted-section counts into progress bars or achievement statistics.

**Sidebar:** provide a compact “On this page” index alongside the narrative. Use ordinary flow in the study. In a later implementation, sticky positioning is optional only when viewport height and zoom leave adequate space; it must never obscure focus or compete with the narrative. On narrow screens, put the index before the narrative and let links wrap.

**Checklist:** retain native `details/summary`, initially closed, with an informative visible summary. Keep all 19 canonical sections, their five nested topics, wording, statuses and anchors. The exploration expands to a title-only index to show density; it is not a replacement for the current full content. Existing direct fragment behavior into a closed disclosure must be tested again after implementation.

**Related projects:** two compact horizontal articles use small diagram crops, full C1/C3 titles and explicit candidate labels. They close the narrative without looking like recommended verified engagements. Preserve real destinations and Back to Projects.

### Canonical anchor preservation contract

The future component must retain `overview`, `overview-heading`, `ba-questions-heading`, `analysis-approach-heading`, `required-evidence-heading`, `verification-heading`, `deep-dive`, `deep-dive-heading` and `related-projects`, plus other existing markup IDs. Preserve the 19 source section IDs in order:

```text
business-context, problem-statement, business-goals, stakeholders,
discovery, as-is, root-cause, to-be, user-story-mapping,
business-requirements, requirements, business-rules, process-flow,
wireframes, exceptions, acceptance-criteria, trade-offs,
validation-outcomes, lessons
```

Nested IDs: `functional-requirements`, `non-functional-requirements`, `system-interactions`, `evidence-validation`, `outcomes`. The study uses its own local review anchors; it does not replace any production route or fragment.

## 8. Components to redesign in a later phase

| Existing area | Proposed change | Preserve |
| --- | --- | --- |
| Shared header | Open, compact navigation with a simple current-page indicator | Destinations, labels, wrapping, keyboard access |
| Hero | Serif title and light connected analysis plate | Existing message, honest limitation, two actions |
| Project preview/card | Light concept covers with text outside the cover | Identities, ordering, full titles, status/scope disclosures |
| Library intro | Editorial title and short evidence context | English route and evidence definitions |
| Approach/competencies | Open sequential method and clear prose groups | Existing steps, explanations and competency content |
| Profile/contact | Quiet definition list and closing invitation | Missing-information states and actual destinations |
| Case header/metadata | Editorial title with concise summary record | Anonymous title, project metadata and provenance |
| Evidence notice | Calm readable inset with explicit facts | Exact limitation and separate permission state |
| Narrative/navigation | Prose measure, contribution emphasis, compact index | Section order, copy, anchors and focus behavior |
| Checklist/related work | Subordinate native disclosure; compact related articles | All sections, nested topics, statuses and links |

## 9. Visual do / don't

| Do | Don't |
| --- | --- |
| Give one main title visual authority | Accent a random word or stack many competing badges |
| Use connected shapes to explain analysis concepts | Invent project architecture or fabricated artifact thumbnails |
| Pair editorial titles with readable sans-serif prose | Add a third display family or tiny tracked uppercase metadata |
| Separate articles using whitespace and alignment | Put every section in an identical elevated card |
| Keep restrictions visible at normal reading contrast | Hide evidence limitations in tooltips, tiny footnotes or color |
| Let long titles and labels wrap | Crop C2's title or shrink all mobile text to fit |
| Use genuine links and native disclosures | Add fake contact buttons, filters or downloads |
| Preserve candidate/professional distinctions | Treat polish, owner attestation or local acceptance as verification |

## 10. Implementation guidance for a later phase

This document does not authorize implementation. After a separate owner instruction, use the existing components and content access. No new routes, content format, state library, dependency or architecture layer is justified by this direction.

1. Record the approved subset of this proposal in `docs/DESIGN_SYSTEM.md`; leave its implemented design history intact. This exploration deliberately does not modify that file.
2. Translate the approved palette/type/spacing into the existing primitive → semantic → component token structure. Read the installed Next.js documentation again before changing font or component APIs. Preserve Tailwind v4 and the current CSS pipeline.
3. Start with shared type and the three screen compositions. Prefer Server Components and static HTML/SVG or CSS shapes. Use a small reusable diagram primitive only if repeated requirements justify it; no diagram library is needed for these conceptual covers.
4. Retain the domain records as the source of truth. Render content by `contentKind`; never infer verification or permission from visual style. Do not duplicate project narratives into design components.
5. Validate content/anchor hashes and states, then lint/build and browser behavior. Check 320/390/768/1024/1440px, actual 200% zoom, long text, keyboard order, native disclosures, deep links, reduced motion, contrast and no-JavaScript reading. Recheck accessibility with assistive technology in a separately scoped review; do not inherit the previous implementation's QA as proof for new code.
6. Compare new screenshots to this direction and the current site. Review hierarchy, density, diagram meaning and evidence readability by eye. Passing layout assertions alone cannot establish visual quality or recruiter comprehension.

Accessibility targets: body text at least 4.5:1, large text and meaningful non-text UI at least 3:1; visible focus, meaningful landmarks, logical heading order, touch-friendly controls and no text truncation. Provide text explanations for meaningful diagrams. Purely decorative cover shapes should be hidden from assistive technology when the adjacent caption and text already convey their meaning. Do not rely on connectors or color alone.

## 11. Preservation and review boundaries

| Record | Retained assumption/state |
| --- | --- |
| C1 | `healthcare-appointment-management`; candidate; provenance unknown; first |
| C2 | `healthcare-omnichannel-integration`; exact anonymous title; professional draft; real, owner-attested; second |
| C3 | `employee-shift-scheduling`; candidate; industry/provenance unknown; third; no HRM mapping |
| All projects | Verification `unverified`; evidence `missing`; publication permission `unknown` |
| Evidence | No new project artifacts, results, employment, metrics or approvals asserted |
| Locales | English only; no activation or routing changes |
| Owner records | Existing acceptance and backlog are historical records and remain untouched |

Only this Markdown document and `PORTFOLIO_AB_MOCKUPS.html` are new deliverables. Application source, the implemented design system record, installed skills, dependencies and all pre-existing untracked files must remain byte-for-byte unchanged. Baseline hashes were saved before writing these files under `%TEMP%\ba-portfolio-ab-direction-20261018`.

### Owner direction review

- [ ] Does the serif/sans pairing feel precise and contemporary enough for this portfolio?
- [ ] Is the analysis plate memorable without suggesting undisclosed project evidence?
- [ ] Does the C1 lead plus C2/C3 rhythm work while their different states remain clear?
- [ ] Is the full C2 title readable and its contribution easy to find?
- [ ] Are the evidence notice and checklist appropriately prominent?
- [ ] Does the narrow-screen composition retain the same hierarchy?
- [ ] Identify the direction details to retain or revise before authorizing implementation.

Direction review is separate from owner acceptance of an implementation, project verification and permission to publish. None is automatically recorded by this exploration.

## 12. Validation and outcome

Fresh exploration checks on 18 October 2026:

| Check | Actual result |
| --- | --- |
| Repository identification | `git rev-parse --show-toplevel`, exit 0: `C:/projects/ba-healthcare-portfolio` |
| Baseline preservation | All 328 pre-existing tracked/untracked nonignored files unchanged by SHA-256 comparison; no deletions. Only the two exploration files were added. |
| Local browser inspection | Headless Edge 155; 47 assertions passed, script exit 0. The HTML was opened directly from disk in a new test tab, with no app server changes. |
| Layout | All three concepts in the document checked at 1440, 1024, 768, 390 and 320px; no page overflow or clipped inspected headings, paragraphs, links or summary in closed/open checklist states. |
| Structure and interaction | Unique IDs, all local fragment targets present, one main landmark, 19 checklist titles plus 5 nested titles; Enter opens, Space closes, visible 3px keyboard focus. |
| Proposed text colors | Fifteen ink/teal/slate pairings against the five mockup light surfaces calculated; minimum 5.17:1. This is token-pair checking, not a complete rendered accessibility audit. |
| Browser diagnostics | No observed exceptions, browser error log entries or HTTP(S) requests during the local mockup test. |
| Visual review | Desktop homepage/library/C2 and narrow-screen compositions inspected from screenshots; hierarchy, readable evidence notices and title wrapping reviewed by eye. |
| Git checks | `git diff --check`, `git diff --cached --exit-code` and `git status --short`: exit 0. Existing source LF-to-CRLF notices remain; no whitespace error or staged change. |

The first mockup check found the long C2 title exceeded its text box at 320px. The exploration-only CSS now uses 32px at the narrowest breakpoint with a long-token wrap fallback. The repeat check passed. This did not require an application fix.

Screenshots and local audit outputs are under `%TEMP%\ba-portfolio-ab-direction-20261018` (on this machine, `C:\Users\Admin\AppData\Local\Temp\ba-portfolio-ab-direction-20261018`). Each screen has an opening crop and a full composition:

| Screen | Desktop files | Mobile files |
| --- | --- | --- |
| Homepage | `home-1440-opening.png`, `home-1440-full.png` | `home-390-opening.png`, `home-390-full.png` |
| Library | `library-1440-opening.png`, `library-1440-full.png` | `library-390-opening.png`, `library-390-full.png` |
| C2 | `c2-1440-opening.png`, `c2-1440-full.png` | `c2-390-opening.png`, `c2-390-full.png` |

Evidence files include `baseline-hashes.json`, `preservation-results.json` and `mockup-qa.json`. The self-contained HTML is the durable review artifact; temporary screenshots may be removed by operating-system cleanup.

Limits: no application lint/build rerun for this documentation and standalone study; the previous implementation's QA is not claimed as fresh validation. Actual browser zoom, screen readers, Firefox/Safari, physical devices and recruiter usability were not tested for this exploration. The mockup uses Arial rather than the application's Geist and omits some long-form content explicitly noted in its annotations. Final typography, full content density and production interactions require a separately authorized implementation and validation pass. No accessibility certification or measured readability improvement is claimed.

Visual judgment: the serif titles and lighter analytical surfaces create a more editorial emphasis, while the repeated cover vocabulary connects the three subjects. Remaining direction choices are the warmth/formality of Georgia, the amount of explanatory metadata on mobile and the intentionally sparse C3 article compared with C2. These are owner-review questions, not inferred acceptance.

**READY FOR OWNER DIRECTION REVIEW.** No application source, existing design record, owner state or project content changed. No commit, push, deployment, publication or full redesign implementation was performed.
