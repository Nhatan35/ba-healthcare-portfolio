# A+B V2 — owner design comparison

Review completed locally on 19 October 2026. Reference research and the initial V2 exploration began on 18 October. **Design exploration only; implementation is not approved.**

## Recommendation

**Variant A — Research Folio is the stronger direction for this professional Healthcare Business Analyst portfolio.** Its open composition, oversized sans-serif headline, asymmetric project spreads and quiet reading column create a more distinctive personal portfolio. The analysis artwork supports the writing without making the site resemble a software application. This is an art-direction judgment based on rendered screens, not a measured recruiter preference or conversion result.

Variant B — Systems Atlas is a credible alternative when compact navigation and a more explicit product/systems identity matter most. Its rail, navy stage and staggered gallery feel coherent, but the application-like framing competes more strongly with the personal narrative. Neither direction has owner approval.

## Open and compare

Open [the self-contained HTML](PORTFOLIO_AB_MOCKUPS_V2.html) locally in a browser. Use **A — Research Folio**, **B — Systems Atlas**, or **Compare both**, then choose Homepage, Projects Library or C2 Detail. The viewport selector offers 1440px, 390px and Fit.

The fixed-width previews scale to fit the comparison area. That is useful for composition, but scaled desktop text is not a reading-size accessibility demonstration. Select one variant and **Fit** for normal-size reading and keyboard review. At narrow outer widths the comparison panels stack. Controls use native buttons and selects; the selected variant is exposed with `aria-pressed`.

The six concepts live inside isolated preview frames. Project links retain their original route values. Within this exploration, C2 opens the C2 concept; C1 and C3 return to their candidate context in the library. Additional candidate detail pages, a resume download and a working contact service are outside this exploration.

## Reference observations and interpretation

Reference observations informed visual principles; no reference layout, artwork, screenshots or proprietary assets were copied into the deliverable.

| Reference reviewed | Specific observation | Interpretation in V2 |
| --- | --- | --- |
| [Siteinspire Portfolio collection](https://www.siteinspire.com/websites/category/portfolio) | The visible David McGillivray thumbnail gives isolated objects substantial negative space and keeps surrounding labels small. This was a gallery-level review, not an audit of that full portfolio. | Treat project covers as deliberate visual subjects, with metadata outside the artwork. |
| [Siteinspire Editorial collection](https://www.siteinspire.com/websites/category/editorial) | Visible Oath Biome and WSM examples use unequal image/text regions and layered image scale. Observations were limited to collection thumbnails. | A uses uneven article widths and alternating library spreads rather than a repeated card grid. |
| [Readymag editorial examples](https://readymag.com/examples/editorial) and [UNLEARNED](https://readymag.com/readymag/unlearned/) | The rendered UNLEARNED opening combines very large contributor names with a thin number rail and a small introductory region. Relative scale establishes importance before decoration does. | A uses a large, offset sans-serif headline; B uses marginal navigation. The reference's names, imagery and arrangement are not reproduced. |
| [Linear](https://linear.app/) | A concise opening argument precedes a large product demonstration, followed by capability storytelling. | Introduce the analytical idea before its visual expression. B integrates the abstract visual and opening statement in one navy stage; no product UI, customer logos or performance claims are borrowed. |
| [Minimal Gallery](https://minimal.gallery/) | Consistent visual fields and secondary titles make a diverse collection easy to scan. | Keep a consistent illustration language while giving C1, C2 and C3 distinct forms and clear metadata. |
| [Adham Dannaway portfolio](https://www.adhamdannaway.com/) | The rendered split designer/coder identity uses one memorable visual metaphor to explain a practice. | Use an original thread-and-lens metaphor for analytical thinking, without inventing a portrait or career identity. |
| [Creating a lean design system](https://www.adhamdannaway.com/portfolio/creating-a-lean-design-system) | Text review only: context, audit, guidelines and implementation discussion form a readable narrative. | Put C2's actual participation and evidence limitations before the preparation structure. None of the author's project claims are adopted. |

Reference screenshots are retained locally as `ref-*.png` in the evidence directory below. An inaccessible reference was excluded from the design rationale rather than treated as reviewed.

## Side-by-side design assessment

| Dimension | A — Research Folio, approximately 70% editorial / 30% systems | B — Systems Atlas, approximately 50% editorial / 50% systems |
| --- | --- | --- |
| Visual identity | Open, calm, authored; resembles a carefully edited research portfolio. | Deliberate, organized, product-oriented; stronger workspace association. |
| Typography | Geist with oversized, relatively light sans-serif headlines; desktop home headline approximately 118px. A small Georgia accent is confined to profile prose. | Manrope with firmer headline weight and a more compact scale; home headline approximately 67px, C2 approximately 57px. |
| Hero composition | Horizontal navigation, full-width two-line headline with an offset second line, then an open asymmetric copy/art composition. | Desktop navigation rail and a contained navy stage combining headline, conceptual visual and opening copy. |
| Signature visual | Flowing strands pass through three abstract lenses in a generous light field. Visual breathing room is part of the composition. | The same original analytical vocabulary is integrated into a dark stage; brighter lines and closer text proximity create a product-storytelling feel. |
| Project gallery | Unequal selected-work columns, a delayed C2 article and a wide C3 spread; library uses an index and three alternating editorial spreads. | Three compact homepage articles; library uses portrait covers with staggered starts, then a two-column intermediate layout and a mobile stack. |
| C2 reading experience | Large title, visual/interpretation spread, four-part summary, left outline and a restrained narrative column. Strong distinction between editorial opening and detailed reading. | Compact title, integration art alongside summary facts, horizontal outline and centered narrative. Less expansive but faster to scan spatially. |
| Mobile experience | Asymmetry resolves into a purposeful vertical sequence. Headlines remain prominent; project text and evidence labels stay outside the artwork. | Rail becomes top navigation; dark hero remains a distinct opening. Staggered gallery becomes a single column with compact metadata. |
| Accessibility | Semantic headings, descriptive links, visible focus, native disclosures, non-color status labels and a readable narrative measure. Large headings make narrow-screen wrapping particularly important. | Same semantic foundations. The rail must retain sensible focus order if implemented later; contrast on the dark stage needs continued attention. |
| Implementation complexity | Moderate: a small number of intentional grid variations, fluid type and reusable project articles. Content expansion must be tested against asymmetric layouts. | Moderate to higher: rail-to-header transition, independent gallery breakpoints and more light/dark surface combinations. No new library is inherently required. |
| Main trade-off | More scroll distance and whitespace; less information visible simultaneously. | Greater density and orientation, but a stronger resemblance to a product application. |

Both use off-white/cool neutral backgrounds, deep navy, restrained teal and pale sage/mist surfaces. Thin rules and spacing carry most of the structure. Shadows and rounded surfaces are subordinate. A's distinction comes primarily from scale and composition; B's comes from spatial framing and the integrated dark stage. They are not recolors of one template.

### Three conceptual covers

| Project | Cover composition | Meaning and evidence boundary |
| --- | --- | --- |
| C1 — Healthcare Appointment Management | Appointment arcs around abstract time-window forms. | Suggests questions about appointments and capacity. Does not depict a real schedule, implemented rules or verified professional work. |
| C2 — Communications Integration — Workflow & Requirements Analysis | Communication strands cross an open central lens. | Suggests coordination across boundaries. Not an architecture diagram, actual interface map or technical deliverable. |
| C3 — Employee Shift Scheduling | Overlapping scheduling bands intersect a shared window. | Suggests availability and coverage questions. Contains no roster, employee information, shift times or policy. |

All are original inline SVG illustrations. Captions identify them as **concept illustrations, not project evidence**; accompanying text provides the conceptual interpretation. The hero's strands and lenses likewise do not encode performance data or completed phases.

### Difference from the implemented portfolio and V1

The saved implemented homepage uses a left headline and a right navy three-step analysis board. The first A+B exploration retains that split structure with serif display typography and a pale diagram panel. Their saved rendered screenshots were compared with V2.

A changes the hierarchy to a full-width oversized sans-serif statement, an open flowing visual, asymmetric selected work and alternating library spreads. B changes the overall page frame to a rail and integrated navy stage, with a staggered portrait gallery and a more compact case composition. C2 in both has a deliberately composed editorial opening before the narrative and de-emphasized checklist. These changes go beyond swapping fonts and colors. The retained project identities, evidence labels and canonical sections are content constraints, not remnants to remove for visual novelty.

## Rendered visual review

All six concepts were inspected as rendered desktop and mobile images, including full-page composition and native-size opening/detail crops. A's type scale, open artwork and article rhythm provide the stronger visual signature. B's framing is cohesive and its gallery works well as a curated collection. At mobile widths, both keep evidence labels readable and project content in a clear sequence. C2's long anonymous title wraps rather than being truncated.

The checklist remains closed by default and sits after the narrative. Expanded views retain the full canonical outline and section content; the long preparation material is intentionally secondary. Related projects keep their candidate classifications visible.

Remaining design considerations for an owner-authorized implementation:

- A's generous whitespace and long opening should be weighed against the owner's preference for immediate project visibility.
- B's rail consumes desktop reading space and should be chosen only if the workspace character is intentional.
- The artwork is intentionally abstract. Keep its explanatory captions so it cannot be mistaken for a supplied BA artifact.
- Profile and contact content still require owner input. Their honest pending-content presentation is not a finished professional biography or contact channel.
- Metadata is dense because provenance, verification and publication are distinct. Refinement must preserve those distinctions rather than hide restrictions.
- Verify longer future content, actual browser zoom, assistive technology and additional browsers before production acceptance.

These are visual judgments and implementation considerations, not defects inferred from responsive checks alone.

## Screenshot inventory

Evidence directory: `C:\Users\Admin\AppData\Local\Temp\ba-portfolio-ab-v2-20261018`.

The following 12 required views were freshly captured during this continuation. Each opening capture has a corresponding full-page capture. Links are local evidence paths; these files are outside the repository and have not been published.

| Variant / screen | Desktop 1440px | Mobile 390px |
| --- | --- | --- |
| A Homepage | [Opening](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/A-home-1440-opening.png) · [Full page](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/A-home-1440-full.png) | [Opening](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/A-home-390-opening.png) · [Full page](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/A-home-390-full.png) |
| A Projects Library | [Opening](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/A-library-1440-opening.png) · [Full page](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/A-library-1440-full.png) | [Opening](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/A-library-390-opening.png) · [Full page](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/A-library-390-full.png) |
| A C2 Detail | [Opening](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/A-c2-1440-opening.png) · [Full page](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/A-c2-1440-full.png) | [Opening](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/A-c2-390-opening.png) · [Full page](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/A-c2-390-full.png) |
| B Homepage | [Opening](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/B-home-1440-opening.png) · [Full page](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/B-home-1440-full.png) | [Opening](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/B-home-390-opening.png) · [Full page](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/B-home-390-full.png) |
| B Projects Library | [Opening](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/B-library-1440-opening.png) · [Full page](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/B-library-1440-full.png) | [Opening](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/B-library-390-opening.png) · [Full page](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/B-library-390-full.png) |
| B C2 Detail | [Opening](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/B-c2-1440-opening.png) · [Full page](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/B-c2-1440-full.png) | [Opening](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/B-c2-390-opening.png) · [Full page](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/B-c2-390-full.png) |

Additional captures: [interactive comparison](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/comparison-desktop.png), [A narrative mobile](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/A-c2-390-narrative.png), [B narrative desktop](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/B-c2-1440-narrative.png), [A expanded checklist desktop](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/A-c2-1440-checklist-expanded.png), [B collapsed checklist mobile](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/B-c2-390-checklist-closed.png), [B expanded checklist mobile](/C:/Users/Admin/AppData/Local/Temp/ba-portfolio-ab-v2-20261018/B-c2-390-checklist-expanded.png).

There are 37 fresh screenshots in total: 24 opening/full-page images, 12 C2 narrative/checklist crops (both variants at both capture widths), and one comparison view. Crop filenames follow `{A|B}-c2-{1440|390}-{narrative|checklist-closed|checklist-expanded}.png`.

## Validation results

Browser: isolated local headless Microsoft Edge `155.0.4283.62`, with no extensions or owner browser session. Validation used actual rendered documents through the browser debugging protocol.

| Validation | Actual result |
| --- | --- |
| `node .../render-review.mjs` | Exit **0**; 40 assertions passed; 24 opening/full-page screenshots generated. |
| `node .../final-qa-20261019.mjs` | Exit **0**; **221 checks passed**; 13 additional screenshots generated. |
| Responsive matrix | Six concepts at **1440, 768, 390 and 320px**, with disclosures closed and open. No observed horizontal overflow, inspected text clipping or incomplete frame height in those states. |
| Comparison and navigation | A/B/both, all three screen choices, fixed widths and Fit passed. Keyboard Enter/Space switched variants and operated the checklist. Resize retained the frame and open disclosure state. |
| Structure | One H1 and main per concept; local fragment targets resolved. Both C2 documents retained all 24 canonical IDs in order. |
| Contrast sampling | Sampled visible text color/background pairs were at least **5.18:1**. This is a computed sample, not an exhaustive contrast or accessibility certification. |
| Focus and motion | Native checklist keyboard behavior and its 3px focus outline passed; reduced-motion media handling passed. |
| Browser errors / network | No observed runtime exceptions or browser error logs; no external HTTP requests from the concepts during the suite. |
| `git diff --check` | Exit **0**. Git emitted existing LF-to-CRLF working-copy warnings for five pre-existing source changes; no whitespace errors. |
| `git diff --cached --exit-code` | Exit **0**; no staged changes. |
| `node .../preservation-final.cjs` | Exit **0**; all 330 baseline hashes matched, exactly two new deliverables, seven embedded scripts parsed, 24 canonical IDs per C2 confirmed and all 30 linked screenshots found. Both untracked deliverables passed separate trailing-whitespace, final-newline and replacement-character checks. |
| `git status --short` | Exit **0**; pre-existing changes retained and the two authorized V2 files untracked. |

The continuation fixed a real preview-wrapper issue: an earlier B library capture could show an incomplete frame. Frame height now follows intrinsic body height, and resizing retains existing frames instead of rebuilding the view. Comparison buttons wrap on narrow widths. Fresh captures and the full suite were run after these exploration-only fixes.

An initial browser launch failed to remain available; the isolated test browser was relaunched. An initial comprehensive test attempt also stopped on a redeclared test-helper variable; the helper was corrected before the successful full run. Neither issue required application source changes. The final successful JSON records are `initial-render-review.json` (fresh capture run, despite its filename) and `final-qa-20261019.json` in the evidence directory.

The final audit helper initially encountered a restricted child-process launch and then a parser delimiter mismatch. Git inventory was supplied directly from PowerShell and the helper delimiter corrected; the final audit passed. These were validation-helper failures, not changes to the mockup. Its final record is `preservation-final.json`.

Application lint/build were **not rerun for this standalone HTML and documentation continuation**. No prior application test count is presented as a V2 test. Actual 200% browser zoom, screen-reader use, real touch devices, Firefox and Safari were not tested here. The accessibility work is a bounded engineering review, not independent certification.

## Content and preservation audit

- C1 and C3 remain **candidate topics**, not verified professional projects. C3's industry and provenance remain unverified.
- C2 retains **Communications Integration — Workflow & Requirements Analysis**, anonymous wording and real, **owner-attested professional draft** classification. Personal contribution paragraphs remain owner-attested; they do not establish independently reviewed deliverables.
- Evidence remains **unverified** and supporting artifacts **missing/not independently reviewed**. Publication permission remains **unknown**. No outcome, statistic, implementation evidence or professional experience was invented.
- Routes remain `/projects/healthcare-appointment-management`, `/projects/healthcare-omnichannel-integration` and `/projects/employee-shift-scheduling`. C2's slug is unchanged.
- Both C2 concepts preserve all **19 canonical section IDs and five nested IDs**, including their order, in the preparation disclosure. The narrative-first presentation does not imply that preparation sections are completed.
- No new locale is activated. No confidential names, private API details, patient or employee records are introduced. Concept art is explicitly separated from evidence.
- SHA-256 comparison against the saved V2 baseline found **all 330 pre-existing tracked/untracked files unchanged**. Comparisons used literal paths. Existing source changes, installed skills, owner acceptance/backlog documents, `docs/DESIGN_SYSTEM.md` and the V1 exploration were preserved.

Only these two repository files are added by this task:

1. `docs/PORTFOLIO_AB_MOCKUPS_V2.html` — continued six-screen exploration and comparison-wrapper fixes.
2. `docs/PORTFOLIO_AB_DESIGN_COMPARISON_V2.md` — this comparison, QA and handoff record.

`build-exploration.cjs` is a temporary generator at `C:\Users\Admin\AppData\Local\Temp\ba-portfolio-ab-v2-20261018\build-exploration.cjs`, outside the repository. It is not an owner repository file and was not removed. The useful output is the self-contained HTML; opening it does not depend on the generator. Test helpers, audit records and screenshots also remain outside the repository. No files were deleted and no destructive Git commands were used.

The existing working-tree inventory remains: modified `docs/DESIGN_SYSTEM.md`, `src/app/globals.css`, the case-study detail CSS/TSX, project-card CSS/TSX, project-preview TSX, site-header TSX, hero TSX and projects-library CSS; untracked owner acceptance, original A+B direction/mockup, redesign review and UX storytelling backlog documents. These are pre-existing work, not V2 modifications.

## Guidance for a later authorized phase

Use the selected composition as a design specification, then adapt existing Next.js components incrementally. Keep project data and evidence contracts unchanged. The preview frames and comparison toolbar are review tooling, not proposed production architecture. Reuse the existing font assets and implement the original artwork as reusable SVG components; no animation or new dependency is necessary. Confirm final tokens and document them only when implementation is authorized.

Retain the closed-by-default preparation disclosure, visible evidence boundaries, narrative contribution copy and canonical anchors. Validate deep links into collapsed sections, focus restoration, longer content, zoom and screen-reader behavior in the actual application. Do not treat the mockup's bounded navigation as a substitute for production route behavior.

## Owner direction review checklist

- [ ] Choose A or B as the primary direction, or identify specific elements to refine.
- [ ] Review all three screens at desktop and mobile sizes in normal-size Fit mode.
- [ ] Confirm the abstract cover language and evidence captions are appropriate.
- [ ] Confirm preferred balance of whitespace, information density and project visibility.
- [ ] Review C2 narrative prominence, summary facts and the secondary checklist.
- [ ] Provide approved profile/contact content separately when available.
- [ ] Authorize a later implementation phase explicitly; this exploration grants no approval.

**READY FOR OWNER DESIGN COMPARISON**
