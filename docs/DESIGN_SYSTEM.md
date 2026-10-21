# Design System — Phase 1.3 Foundation and Phase 3.1 Prototype

## Status

The foundation below records Phase 1.3 governance. The owner's Phase 3.1 request now authorizes the homepage visual prototype and the concrete tokens documented in the Phase 3.1 section. These are prototype decisions for owner review, not approval of the final portfolio, publication, or Phase 3.2. Earlier strategy documents remain preserved; their historical phase restrictions do not override the current request.

## Direction

Aim for a high-quality minimalist enterprise interface suited to professional Healthcare BA work. Prioritize readable analysis, clear hierarchy, restrained decoration, consistent spacing, and understandable interactions. Healthcare credibility should come from accurate content and evidence rather than decorative clinical imagery or unsupported trust badges.

## Future token organization

Keep tokens centralized through the existing Tailwind v4/CSS setup when implementation begins. Avoid scattered repeated visual values in components.

| Layer | Responsibility | Examples of roles, not selected values |
| --- | --- | --- |
| Primitive | Foundational scales | Color values, font sizes, spacing, radii. |
| Semantic | Meaning across the interface | Surface, primary text, muted text, border, action, focus, status. |
| Component | Specific reusable behavior | Button states, input errors, case-study section spacing. |

The current `--background`, `--foreground`, and Geist font variables are starter implementation details, not an approved brand system. Define the final values, typography, breakpoints, and component variants only during approved design work.

## Component responsibilities

- `components/ui`: accessible primitives with consistent states and small, typed APIs.
- `components/layout`: shared framing and navigation.
- `components/sections`: compositions for a page's content hierarchy.
- `components/case-studies`: readable narratives and BA artifacts using shared primitives.

Create components when a real requirement or reuse warrants them. Do not prebuild a speculative library or install an external UI package in this phase.

## Accessibility and responsiveness requirements

- Use semantic landmarks, logical headings, descriptive link text, and appropriate native controls.
- Provide keyboard access, visible focus, accessible names, and clear focus behavior for interactive elements.
- Give forms persistent labels, clear validation feedback, and understandable submission states.
- Make content reflow on narrow screens and remain usable with enlarged text. Give wide process diagrams or tables an accessible reading alternative.
- Use adequate contrast, pair status colors with text or symbols, and provide useful alternative text for meaningful images.
- Respect reduced motion and avoid hover-only content or essential interactions that require animation.
- Validate the implemented design against the applicable accessibility guidelines in the approved UI phase; this foundation document is not a conformance certification.

## BA artifact presentation

Expose project provenance and contribution clearly. Distinguish proposed and validated artifacts, targets and observations, and evidence and assumptions. Keep requirements and acceptance criteria readable with stable identifiers. Diagrams should identify scope, actors, decisions, and exception paths and include a text explanation. Mark simplified flows as process flows rather than claiming formal BPMN conformance.

## Future review gates

Use `frontend-design` for approved visual direction, `ui-ux-pro-max` for relevant interaction and responsive decisions, and `web-design-guidelines` for implemented UI reviews. Apply `vercel-react-best-practices` when implementing React components. Review the actual interface with keyboard input, representative viewport sizes, long content, and meaningful error/empty/loading states. Record actual checks and findings without claiming checks that were not performed.

## Phase 3.1 — Premium Healthcare Enterprise

### Design rationale

The defining element is a navy analysis diagram connecting an operational need to a requirement and a testable decision. This gives the page a Business Analyst identity without portraits, clinical stock imagery, invented results, or a dashboard. Its caption states that it is illustrative, not evidence. The original mark suggests connected workflow lanes and is a portfolio concept, not an employer/client logo or healthcare accreditation symbol.

The design uses left-aligned, spacious typography, a cool light surface, restrained teal accents, and a single dark contact section. A gentle white-to-mist hero gradient provides section depth. There are no glows, moving backgrounds, automatic reveals, carousels, or decorative outcome counters.

Plan considered before implementation:

```text
Option A: centered headline + uniform cards
          simple but too close to a generic SaaS landing page

Chosen:   identity / navigation / language status
          large headline       | connected analysis diagram
          positioning statement across the page
          open competency columns
          three draft case previews with inline scope disclosures
          sequential approach / profile / navy contact panel
```

Review against the brief: keep the diagram as the focal point, use open columns for competencies and method, and reserve enclosed cards for distinct candidate projects and the profile record. No glowing effects or invented trust signals. Seven prior strategy competency groups are condensed for this homepage into four editorial themes: discovery/context (discovery and collaboration), processes/requirements (problem/process and requirements engineering), systems/information (systems/integration), decisions/validation (product/delivery). Healthcare context and communication run across the themes. The full taxonomy and evidence gates are unchanged; these are focus areas, not proof of skill.

### Color and token layers

All values live in `src/app/globals.css`: primitive values → semantic roles → component aliases. Tailwind v4 imports and the existing Turbopack pipeline remain unchanged. Components contain no raw color hex values.

| Palette | Value | Purpose |
| --- | --- | --- |
| Navy | `#102D3C` | Primary text, analysis board, contact section. |
| Teal | `#176B65` | Primary action, meaningful accent, light-surface focus ring. |
| Light teal | `#A8D9CA` | Text/accent on navy and dark-surface focus ring. |
| Slate | `#52656E` | Supporting text on light surfaces. |
| Mist | `#EDF4F2` | Project section, tags and secondary surfaces. |
| White | `#FFFFFF` | Header, cards, process section, text on navy/teal. |

Supporting primitives: background `#F7FAF9`, border `#D6E3DF`, teal hover `#10534F`, analysis-node surface `#234757`. Light theme is deliberate and stable across OS color schemes; a dark-mode switch is outside this prototype.

Semantic tokens include `--background`, `--foreground`, `--surface`, `--surface-muted`, `--text-muted`, `--accent`, `--accent-hover`, `--accent-light`, `--border`, `--focus`. Component tokens include button background/hover/radius and card surface/radius/padding. Decorative separators are not relied on to identify controls or states.

### Typography and spacing

- Manrope variable display face: headlines and section/card headings, weight 550–650, restrained negative tracking. Latin and Vietnamese subsets loaded through `next/font` for headline readiness.
- Existing Geist retained for body/navigation; Arial/sans-serif fallback. Unused Geist Mono removed. Fonts are self-hosted by Next.js; build-time font fetching may still need network. No new font package.
- Display: fluid 36–68px depending on viewport; section headings 30–44px, contact heading up to 52px; card headings 20–24px. Base body 16px, hero 16–17px, explanatory/card copy 15–16px, metadata and status labels 12–14px. Keep smaller sizes for compact decorative/source labels only. No fixed text-height clipping or ellipsis.
- Body line height 1.65; headline 1.12; section heading 1.2; cards 1.4. Narrative measures generally 46–62 characters, not full-width walls of text.
- Spacing primitives: 4, 8, 12, 16, 24, 32, 48, 64 and 96px. Section spacing is fluid 64–104px. Page gutters range from 20–64px. Local layout values interpolate between those anchors.

### Grid, responsive behavior and surfaces

Content caps at 1280px including gutters. The desktop hero uses an asymmetric two-column grid. Competency and approach content use four columns, becoming two at 1100px and one at 480px. Project previews use a two-column grid above 800px and a single column at/below 800px. Appointment Management receives a restrained provisional-lead border and label while retaining its Draft / Unverified badge. Hero, profile and contact stack at 800px. Project content heights become natural on stacked layouts.

The header stays in document flow. At 800px, navigation becomes a permanently visible second row; there is no hidden mobile menu or focus trap. Header content can wrap at text zoom. The resume utility is omitted on smaller headers but its availability record remains in About. All primary navigation destinations are current homepage anchors, not unbuilt page routes.

Radius: 8px actions/nodes, 16px project/profile cards, 24px hero diagram, rounded status labels. Shadow: light `0 16px 40px rgb(16 45 60 / 6%)` on project cards; stronger but bounded `0 24px 60px -24px rgb(16 45 60 / 32%)` for the analysis board. Other sections do not acquire card shadows.

### Component and state specifications

| Component | Default | Hover / activation | Focus / unavailable |
| --- | --- | --- | --- |
| Primary action link | Teal fill, white text, minimum 48px height | Darker teal; inset pressed feedback without layout shift | 3px teal outline with 5px offset. |
| Secondary action link | White with subtle border, navy text | Teal border, mist fill | Same visible focus treatment. |
| Navigation / text links | Descriptive labels; minimum 44px navigation target | Teal and underline, no movement | Native anchor keyboard behavior and focus outline. |
| Project card | Draft/Unverified badge, question and proposed focus; Appointment Management also says provisional primary case study | Card itself is not clickable; native summary expands inline. C1 may list potential future evidence areas only with an explicit statement that artifacts do not exist yet. | Summary has visible focus; unique accessible case name; plus/minus adds a visual cue to native open state. |
| Language control | EN is a current-language indicator | No switching behavior is claimed | VI is a disabled native button; visible “Vietnamese planned” explanation and accessible description. |
| Resume/contact | Honest availability text with no decorative control-like contact symbol | No fake downloads, email links, send actions or form | Resume anchor reaches status; contact section distinguishes unavailable details from its working collection link. |

Motion is limited to 160ms color/background/border feedback and native smooth anchor scrolling. No entrances or perpetual animation. `prefers-reduced-motion: reduce` disables transitions, animation and smooth scrolling. There are no motion-dependent interactions.

### Accessibility and bilingual readiness

One h1, ordered h2/h3 structure, named sections, header/main/footer landmarks, skip link, native links and `details/summary`, visible focus, and textual draft/unavailable status. The analysis diagram is readable HTML with an ordered sequence and a caption. The mark and decorative shapes are hidden from assistive technology. Focus colors adapt on the navy contact surface. No positive tabindex, fixed overlays, or custom keyboard handlers.

The layout uses wrapping labels, flexible grids, rem-based text, `minmax(0, …)` hero tracks, and normal document scroll without overflow hiding. This supports text expansion and longer Vietnamese wording, but actual Vietnamese pages, locale switching and assistive-technology behavior still require review. English is the only implemented view. No i18n dependency, translated route, alternate-language metadata, or fake language switch is created.

The prototype stays at `/`; the future `/en` and `/vi` strategy is preserved and its route migration is deferred. Draft metadata is noindex/nofollow, not a privacy control. No deployment is authorized. Candidate preview visibility is expressly authorized for this local prototype and does not override the evidence/publication gates for a final portfolio.

Actual validation results and pending browser checks are recorded in [PHASE_3_1_REVIEW.md](PHASE_3_1_REVIEW.md). Successful lint/build and source inspection alone do not establish responsive, keyboard or accessibility conformance.

## Phase 3.2A — Projects library

The owner authorized an English-only draft library at `/projects`. The homepage stays at `/`; the earlier bilingual URL strategy remains deferred. This approval permits candidate previews, not verified professional claims or public release.

The library extends the existing palette: navy `#102D3C`, teal `#176B65`, slate `#52656E`, mist `#EDF4F2`, white `#FFFFFF`, and light teal `#A8D9CA`. Manrope remains the display face and Geist the body face, with the same font loading, spacing tokens, 1280px container and responsive gutters. There are no new visual tokens or font packages.

The design uses a left-aligned title and short introduction, one wide navy featured candidate, two white supporting cards, and an open definition list explaining evidence labels. The featured card's navy surface establishes editorial priority; its explicit provisional label prevents that emphasis from implying stronger evidence. Identical dashboard tiles, search, filters, charts and fabricated artifact illustrations are unnecessary for three unverified topics.

```text
Shared navigation
Projects library                 Introduction + evidence limits
Featured case study candidate     Provisional priority
[ C1: question and focus          Proposed scope + evidence status ]
Further questions to explore
[ C2: integration candidate ]     [ C3: workforce candidate ]
Candidate / simulated / verified definitions
Analysis approach link + shared footer
```

At or below 800px the introduction, featured-card contents, supporting cards and definitions become a single column. Font sizes and spacing are fluid; tags and status rows wrap without truncation. Cards are informational articles, not clickable surfaces. “Detailed case study in preparation” is plain text. Only genuine destinations receive link styling. Existing global focus and reduced-motion rules apply.

New styles are isolated by `pc-` and `pl-` selector prefixes in colocated CSS files. The existing Turbopack `*.css` loader does not preserve CSS Module class exports in this configuration, so ordinary prefixed CSS uses the established pipeline without changing `next.config.ts` or homepage CSS. Browser rendering verified the resulting styles.

Shared navigation now uses real route links for Projects and cross-page homepage anchors. Its row can wrap: browser testing reproduced an existing 320px overflow, and wrapping fixes it without changing homepage section layout. At 1440, 768 and 390px, measured homepage content geometry is unchanged; at 320px only the header reflow moves content down by 60px. See [PHASE_3_2A_REVIEW.md](PHASE_3_2A_REVIEW.md) for evidence, limitations and acceptance.

## Phase 3.2B — Case study preparation pages

The three existing candidates now have English-only detail routes at `/projects/[slug]`. The library's former preparation notice becomes a real, explicitly named “View preparation page” link. Cards retain their existing hierarchy, styling, and evidence labels. Project navigation identifies the library as the current location on detail pages. The homepage content and layout remain unchanged from the Phase 3.2A baseline.

Detail pages reuse Manrope, Geist, the existing navy/teal/mist palette, container, gutters, border radii, focus treatment, and reduced-motion rules. A large candidate title leads into compact project metadata and a navy evidence notice. This notice separates the local preparation experience from verified project work and publication permission. No invented artifacts or decorative workflow diagrams are used.

The reading experience has a 240px section-navigation column and a restrained prose column on desktop, stacking below 1000px. Metadata uses four, two, then one column; the evidence notice and related candidates stack below 600px. Nothing is pinned over the reading area. The 19 canonical sections retain their order; overview, requirements/system-interaction subsections, and separate validation/outcomes headings cover the requested conceptual topics. Missing content gets a short, specific explanation. Proposed discovery questions use a native disclosure. All section-link targets remain visible outside disclosures.

Styles use the `cs-` prefix in colocated ordinary CSS, following the existing Turbopack pipeline. Native links, lists, definition lists, landmarks, and `details/summary` support navigation without custom client state. Section headings can receive fragment focus; no positive tabindex or custom keyboard handlers are introduced. Related links and Back to Projects have genuine destinations and visible hover/focus feedback.

Browser checks found no horizontal overflow at 1440, 768, 390, or 320px, including expanded disclosures. Actual browser zoom at 200% also reflows successfully. Homepage content geometry matches the saved baseline at all four widths. See [PHASE_3_2B_REVIEW.md](PHASE_3_2B_REVIEW.md) for measured results and validation limits. These checks do not grant approval to publish candidate claims.

## Phase 3.2B — Owner editorial corrections

The owner accepted the visual direction and requested a more useful reading hierarchy. Each candidate now leads with five sections: Business Problem to Investigate, Key BA Questions, Proposed Analysis Approach, Evidence & Deliverables Required, and Verification & Publication Status. Six concrete questions and a proposed method sequence distinguish appointment workflows, omnichannel integration, and workforce scheduling. Every deliverable is explicitly proposed, with source evidence and personal contribution still unverified.

The canonical 19 sections remain intact inside the native “Full BA Analysis Preparation Checklist” disclosure, collapsed by default. Its visible summary identifies the missing content and lack of verification. The primary section navigation targets the visible overview and checklist heading; the full 19-section index sits inside the disclosure. Existing fragment IDs are retained. Edge testing confirms a direct fragment into a checklist section reveals the disclosure without custom client code.

This supersedes the earlier always-expanded deep-dive presentation, not the underlying template. The homepage, shared header/footer, library cards, typography, colors, responsive breakpoints, routes, and source candidate records are preserved. Scoped prose/list styles support the new overview. Root layout now declares `data-scroll-behavior="smooth"` to align with the existing CSS and Next.js route-scroll handling; this is separate from the unresolved affected-browser hydration report. See [PHASE_3_2B_OWNER_REVIEW.md](PHASE_3_2B_OWNER_REVIEW.md).

## 18 October 2026 — Local premium healthcare-tech redesign

Status: implemented for local visual review, not automatically owner-accepted or publication-approved. The earlier sections remain historical design records. This revision changes presentation across the homepage, library and all three detail pages; it preserves their business copy, identities, evidence states and permissions. See [the redesign review](PORTFOLIO_UI_UX_REDESIGN_REVIEW.md) for the changed-file inventory and actual QA evidence.

The design retains navy `#102D3C`, teal `#176B65`, slate `#52656E`, mist `#EDF4F2`, white `#FFFFFF` and light teal `#A8D9CA`, with existing semantic tokens, Manrope display type and Geist body type. No font configuration, dependency or color primitive is added. The container grows from 1280px to 1360px, retaining fluid gutters. Existing spacing, radius and shadow tokens remain shared.

The visual plan favors a left-aligned editorial composition: a stronger headline beside a simplified analysis sequence; one wide provisional C1 feature above paired C2/C3 cards; and case narratives beside a compact section index. An equal three-card opening was rejected because it would weaken the existing editorial lead. The analysis sequence remains explicitly illustrative, with no new evidence imagery or invented statistics.

- **Homepage:** a shorter, white hero replaces the gradient wash. Its headline reaches 76px, while the navy analysis board uses connected rows instead of repeated inner cards. Navigation has a compact shared outline, current-page treatment and 44px links. Capabilities use two broad columns with room for their existing explanations. The featured collection uses a wide navy C1 card and equal-height supporting cards, with native scope disclosures and explicit detail-page links. The profile retains its honest missing-information states. Footer identity, status and return navigation form a clearer grid.
- **Library:** a stronger heading and separated explanatory column introduce the collection. Cards share spacing, heading scale, metadata rows and a dedicated link area. C2 has a restrained teal top border alongside its explicit professional-draft label; color alone never establishes provenance or verification. Four evidence definitions form a balanced two-column layout. C1 remains the provisional lead.
- **Detail:** long titles remain fully visible beside a compact metadata panel on wide screens. A light evidence notice preserves every limitation without dominating the narrative. The overview sits on a white reading surface; C2's existing Personal Contribution section receives restrained emphasis. Section navigation is sticky only above 1000px width and at least 800px height; it stays in document flow otherwise. The complete native checklist remains collapsed by default, with smaller headings and a two-column index on wider screens. All original fragment IDs remain.
- **Interaction:** card feedback uses border/shadow changes without movement or a false whole-card click target. Links and native disclosures retain visible 3px keyboard focus. Open disclosure headers have a distinct surface/border state. No client state, custom disclosure handlers or animation framework is introduced. The existing reduced-motion rule disables transitions and smooth scrolling.
- **Reflow:** at 800px, the header navigation occupies its own row, hero/library cards stack and homepage support columns collapse. Detail metadata and navigation reflow below 1001px, then become single-column at 600px. Small-screen actions fill the available width; long titles and badges wrap without fixed text heights or truncation. The evidence and permission qualifications remain available at every size.

QA is bounded to the reported browser and tests; this design record is not an accessibility-conformance certification. English remains the only runtime language, and public release remains prohibited without separate authorization and the applicable evidence/disclosure gates.

## 20 October 2026 — Research Folio implementation

The owner selected Variant A from the V2 exploration for local implementation. This supersedes the previous hero/card composition, without changing project identities, business content or evidence permissions. Final acceptance is separate; see [the implementation review](PORTFOLIO_RESEARCH_FOLIO_IMPLEMENTATION_REVIEW.md) for actual QA results and remaining limitations.

Geist, already loaded by the application, now carries the main editorial headings as well as body text. The homepage headline reaches 118px with an offset second line; the library uses a 104px maximum and case-study titles a 78px maximum. All scale down and wrap on narrow screens. Georgia appears only as a restrained profile-prose accent. Existing font configuration and dependencies are unchanged.

The retained navy `#102D3C`, teal `#176B65` and slate `#52656E` sit on cool paper `#F5F7F4`, mist `#E9EFED` and rules `#C8D5CF`. Concept covers use sage `#D6E4DB`, integration mist `#DCE7E7` and scheduling neutral `#E9ECE1`. The existing 1360px container and fluid gutters remain. Open surfaces and thin rules replace the former card-heavy hierarchy; the contact area retains occasional navy emphasis. No navigation rail is introduced.

- Homepage: full-width editorial statement and an original strand/lens SVG; selected work moves directly after the hero. C1 and C2 use unequal, staggered columns and C3 a wide alternating spread. Order remains C1 → C2 → C3. Existing positioning and competency content remains further down the page. Methodology becomes an editorial introduction beside a staggered sequence; profile details remain explicitly pending owner input.
- Library: a project index and alternating cover/text spreads replace the wide lead card and paired supporting cards. Summaries, scopes, tags and provenance/evidence/permission facts remain sourced from the existing records.
- Details: shared conceptual covers, oversized titles, a four-part metadata strip, restrained evidence notice and a reading column of at most 740px. C2's unchanged Personal Contribution text receives typographic emphasis. The complete native checklist remains closed by default, with all original section headings and fragment targets.
- Artwork: reusable server-rendered SVG for appointment arcs, communications strands, scheduling bands and the analysis thread. Every figure carries a visible conceptual/not-evidence caption and a text description. These are thematic illustrations, not reconstructions of real project artifacts.
- Reflow: asymmetric home/library structures stack at 800px; case metadata becomes two columns below 1001px and one below 361px. Detail navigation returns to document flow on smaller screens. Existing keyboard focus, reduced-motion rules and native disclosures remain.

The implementation preserves English-only runtime behavior, the content/evidence locks and all existing owner acceptance documents. Visual QA cannot establish professional evidence or publication permission.

Final QA identified two functional presentation gaps. A small client-side fragment helper now opens enclosing native disclosures and focuses the existing heading on initial fragments, hash changes and browser history navigation; it does not control the disclosure's ordinary open/close state. Fragment jumps are immediate, including under reduced motion. Unknown slugs now use the prebuilt 404 through `dynamicParams = false`, with the existing recovery screen reused at the root not-found boundary, so the HTTP 404 response includes readable server-rendered content. The three generated project URLs and data remain unchanged; future additions still require a build.
