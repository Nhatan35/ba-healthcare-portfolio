# Content Architecture — Phase 2.2

Prepared 13 October 2026. Status: documentation complete for owner review; content and publication approvals remain pending. This document records the consistency review, reusable content model, bilingual schema, and reading experience. It defines no application types, routes, components, wireframes, or database implementation.

The current owner request authorizes Phase 2.2 planning and supersedes earlier instructions to stop before this phase. It does not authorize UI, publishing, or Phase 3. Existing documents are preserved as prior-phase records. Where their phase boundaries or state vocabularies differ, use the explicit resolutions below for this planning phase.

## Source review and consistency findings

Reviewed: [AGENTS.md](../AGENTS.md), [Product brief](PRODUCT_BRIEF.md), [Portfolio strategy](PORTFOLIO_STRATEGY.md), [Information architecture](INFORMATION_ARCHITECTURE.md), [Content inventory](CONTENT_INVENTORY.md), [Localization strategy](LOCALIZATION_STRATEGY.md), [Case-study template](CASE_STUDY_TEMPLATE.md), [Design system](DESIGN_SYSTEM.md), and the [BA storytelling skill](../.agents/skills/ba-portfolio-storytelling/SKILL.md). The current Phase 2.2 request supplies the new scope. The existing external source citations were reviewed as bounded source notes; they were not independently revalidated in this phase. No new market, clinical, regulatory, or standards claim depends on them.

The issues below were reported before drafting deliverables. They are distinguished from evidence gaps and decisions that are already consistent.

| ID | Finding and affected sources | Resolution for Phase 2.2 | Outstanding input / impact |
| --- | --- | --- | --- |
| R-01 | AGENTS.md retains a Phase 1.3 stop; the brief and Phase 2.1 documents stop before Phase 2.2. These are historical authorization boundaries, not evidence against the new request. | The owner's current request authorizes this documentation phase only. Preserve prior documents and application files. | Stop after Phase 2.2; no further approval is inferred. |
| R-02 | The request lists 20 content elements, while the template, skill, strategy, and IA require 19 ordered Deep Dive sections. Business Goals and User Story Mapping are not standalone elements in the new list; functional/non-functional requirements are split. | Use 20 reusable content elements mapped to the canonical 19 sections below. Add explicit goal and story-map subrecords. Retain the 19-section sequence for a full narrative. | No analytical content is silently removed; no generic filler. |
| R-03 | The request permits section omission; the template and skill require missing/inapplicable sections to be explained. | Distinguish required authoring records from optional substantive public content. Retain each canonical section with an honest short applicability/evidence note where content is unavailable. Omit empty artifacts or duplicated blocks, not disclosure of material gaps. | Actual applicability requires project context. |
| R-04 | Localization uses Missing, Draft, In review, Approved, Published, Needs review; the inventory also uses Direction confirmed, Unverified, and Draft proposal. New verification states could be mistaken for replacements. | Use independent claim-verification, editorial/translation, permission, and release dimensions; crosswalk them in the checklist. Direction confirmed describes a strategic choice, not personal evidence. | Named review decisions and revisions remain missing. |
| R-05 | Owners are assigned by role in the inventory, but no named author, BA reviewer, bilingual reviewer, or disclosure authority is confirmed. | Preserve role-based accountability and record identity/availability as `[USER INPUT REQUIRED]`; document responsibilities below. | Actual content approval and independent review cannot be claimed. |
| R-06 | The proposed Vietnamese C1 title specifies medical consultation (“khám bệnh”), while English scope could cover broader healthcare appointments. IA already flags this limitation. | Prefer provisional “Quản lý lịch hẹn trong dịch vụ y tế” until scope is confirmed; retain C1 and the existing slug. This is a proposed wording resolution, not a modification to the earlier IA. | `[USER INPUT REQUIRED]`: actual service scope and bilingual approval. |
| R-07 | C1–C3 have no verified provenance, role, artifacts, or outcomes. C3's industry is unknown. This is an acknowledged evidence gap across all Phase 2.1 sources. | Keep all Unverified and all evidence Missing. Do not infer that candidate topics are experience or simulations; do not classify C3 as healthcare. | Blocks public case selection and professional claims. |
| R-08 | Draft first-person summaries and topic examples could become unsupported claims if lifted out of their surrounding caveats. Sources currently label them appropriately. | Treat them as draft positioning patterns only. Every future summary draws from approved facts and retains provenance/outcome limits. | `[USER INPUT REQUIRED]`: identity, career intent, actual contribution, and claims. No fabricated achievement found in the reviewed documents. |
| R-09 | The strategy offers seven competency groups; the current request requires 14 competencies. | Keep seven reader-facing groups and map the 14 evidence categories to them in the framework. | No 14-item skill wall or unsupported proficiency claims. |
| R-10 | Five planning personas, English-default direction, one factual record, shared slugs, evidence-led feature order, and English-first/VI activation gates agree across sources. | Retain these decisions. Personas and reading preferences remain hypotheses, not user research. | Actual recruiter/readability and bilingual testing remain pending. |

No substantive contradiction was found in target-audience coverage, the default language, candidate ordering rules, or the requirement to separate expected value from measured outcomes. Existing documents consistently say personal experience is unverified. The review does not certify their external citations or establish hiring demand.

## Content ownership

| Responsibility | Accountable role | Required record |
| --- | --- | --- |
| Identity, personal contribution, scope, resume/contact facts | Portfolio owner | Named owner, confirmed facts, disclosure choices, date/revision. Identity `[USER INPUT REQUIRED]`. |
| Narrative drafting, inventory, claim/competency links, change propagation | Content author/steward, accountable to owner | Named assignee, changed records, impacted locales, review request. `[USER INPUT REQUIRED]`. |
| Business accuracy, requirements, analytical evidence, traceability | BA reviewer | Named reviewer, competence/context for review, criteria checked, findings and limitations. `[USER INPUT REQUIRED]`. |
| Disclosure authority and confidentiality | Owner plus the appropriate rights holder/authorized reviewer for third-party material | Authority, exact scope, conditions, expiry/revocation if any. `[USER INPUT REQUIRED]`; owner assertion alone does not create employer/client rights. |
| English clarity | English content reviewer | Named reviewer, exact revision, changes and unresolved issues. `[USER INPUT REQUIRED]`. |
| Vietnamese fluency, terminology, factual parity | Bilingual BA-capable reviewer | Source/fact revisions, locale revision, approval and limitations. `[USER INPUT REQUIRED]`. |
| Publication readiness | Portfolio owner with required reviewers | Approved content package and permissions; actual release requires separate authorization. |

One person may hold multiple roles. Record self-review honestly; do not claim independent, native-speaker, stakeholder, or clinical review without evidence. These are proposed responsibilities, not appointments or permission to contact reviewers.

## Reusable case-study content model

The 20 elements below are conceptual content units. They do not replace the ordered 19-section authoring template. **Required** means the unit must contain supported content or an explicit honest evidence/applicability statement. **Conditional** means substantive material depends on scope; maintain its authoring disposition and reason even if no artifact/block is shown. Required metadata cannot be replaced with placeholders in released copy.

| No. / content element | Requirement | Minimum substance and omission rule | Canonical template destination |
| --- | --- | --- | --- |
| 1. Hero and project summary | Required | Title, confirmed Real/Simulated label, domain, role, scope, concise problem, contribution, and validation limit. Derived from canonical facts. Unknown provenance blocks release, not an “Unverified” public case card. | Identity register and Quick Overview preceding section 1. |
| 2. Project overview | Required | Timeframe and boundary if disclosable; role/team distinction; goals, success criteria, and measurement plan. Unknown baseline is explicit. Omit optional organizational identifiers rather than infer them. | Identity register plus **3. Business Goals**. |
| 3. Business context | Required | Setting, actors, operational constraints, administrative/clinical boundary, and evidence basis. | **1. Business Context**. |
| 4. Problem statement | Required | Need, affected actors, supporting evidence, scope and impact limits; distinguish hypothesis from observed problem. | **2. Problem Identification**. |
| 5. Stakeholder analysis | Required | Roles, needs, influence, decisions, conflicting priorities, and actual versus hypothetical participation. | **4. Stakeholder Analysis**. |
| 6. Discovery approach | Required | Methods actually used, findings, ambiguities, sources; unperformed discovery is a plan. Missing interviews cannot become fictional quotes. | **5. Discovery and Clarification**. |
| 7. As-Is workflow | Required | Trigger, actors, steps, handoffs, exceptions, sources, and observed versus simulated status. If no baseline is available, retain that limitation; do not fabricate a current process. | **6. As-Is Process**. |
| 8. Root cause analysis | Required | Evidence-to-cause reasoning, alternatives and validation gaps. A suspected cause remains a hypothesis. | **7. Root Cause Analysis**. |
| 9. Business requirements | Required | Identifiers, goals, rationale, source, priority, scope, status, and links. Separate business needs from design decisions. | **10. Business Requirements**. |
| 10. To-Be workflow | Required | Proposed changes, owners, controls, dependencies, and goal links. Include a distinct **User Story Mapping** subrecord: activities, tasks, role/need/value stories, priority and delivery slice, or reason unavailable/inapplicable. | **8. To-Be Process** and **9. User Story Mapping**, kept separate in the full narrative. |
| 11. Business rules | Required | Conditions, precedence, exceptions, source/authority, applicability and unresolved policy questions. No invented threshold. | **12. Business Rules**. |
| 12. Functional requirements | Required | Observable actor/system behavior, source and scope, linked business requirement and criteria. | Functional part of **11. Functional and Non-functional Requirements**. |
| 13. Non-functional requirements | Required | Applicable quality needs, context and testable measures; unresolved thresholds explicit. Not optional merely because quality evidence is missing. | Quality part of **11. Functional and Non-functional Requirements**. |
| 14. System interactions | Conditional | Boundaries, authoritative sources, exchanges, failures and recovery. If no multi-system scope exists, record reason and omit a separate integration block; do not infer interfaces from “healthcare.” | Cross-references in **11**, **13**, and **15** as applicable. |
| 15. Wireframes and diagrams | Conditional artifacts; required accounting | Distinct process-model and wireframe subrecords with status, rationale, links and text explanation. A prose process model may suffice where no diagram exists. Omit unavailable images/downloads; explain missing/inapplicable artifacts. No actual wireframes are created now. | **13. BPMN / Process Flow** and **14. Wireframes**, kept separate. |
| 16. Edge cases | Required | Relevant conflicts, failures, detection, response, responsible actors, recovery and escalation linked to requirements/rules. | **15. Edge Cases and Exception Flows**. |
| 17. Acceptance criteria | Required | Testable normal/exception/access/quality conditions linked to requirements and rules; execution state separate from criteria authorship. | **16. Acceptance Criteria**. |
| 18. Solution decisions and trade-offs | Required | Alternatives, constraints, expected value, costs, risks, dependencies, decision authority, actual/proposed status and remaining limitations. | **17. Solution Trade-offs**. |
| 19. Validated outcomes | Required account; measured results conditional | Distinguish validation plans, executed checks, feedback and measured outcomes. Give sources/methods and limitations; if no validated result is available, state that. Do not invent a metric or describe unknown measurement history as “not measured.” | **18. Validation and Outcomes**. |
| 20. Lessons learned | Required | Reflections supported by work actually performed, unresolved questions and next checks. Omit generic claims of learning unsupported by analysis. | **19. Lessons Learned**. |

The full Deep Dive retains this sequence: 1 Business Context; 2 Problem Identification; 3 Business Goals; 4 Stakeholder Analysis; 5 Discovery and Clarification; 6 As-Is Process; 7 Root Cause Analysis; 8 To-Be Process; 9 User Story Mapping; 10 Business Requirements; 11 Functional and Non-functional Requirements; 12 Business Rules; 13 BPMN / Process Flow; 14 Wireframes; 15 Edge Cases and Exception Flows; 16 Acceptance Criteria; 17 Solution Trade-offs; 18 Validation and Outcomes; 19 Lessons Learned.

The 20-unit model is a reuse model, not a second competing table of contents. Hero/overview summarize underlying records rather than duplicating facts. Business Goals and User Story Mapping remain explicit and inspectable. System interactions are linked where relevant without inventing a twentieth Deep Dive section.

Use **Unavailable — reason**, **Not applicable — reason**, or **Proposed — status and validation need** in authoring records. Missing evidence is not a reason to claim “not applicable.” Omit empty screenshots, duplicate prose, speculative metrics, optional organizational identifiers and generic filler. In the public full narrative, keep concise limitation notes for canonical sections and material gaps. If the essential problem, contribution, provenance, or evidence chain is absent, hold the case rather than publish 19 empty headings. A supported simulation can have no production results and still provide useful analytical evidence.

## Conceptual bilingual schema

This is a field-and-relationship specification only. No TypeScript, schema library, file format, content loader, or storage service is selected. Maintain one factual source with localized presentations; evidence can originate in either language. Shared facts are not automatically verified merely because they are stored centrally.

| Record | Identity and relationships | Conceptual fields and constraints |
| --- | --- | --- |
| Project | C1, C2, C3; one shared slug; links to facts, claims, sections, artifacts and locale variants | Candidate/confirmed title; project type/domain; provenance Real/Simulated/Unverified; scope; owner; revision. IDs persist across titles and languages; provenance Unverified blocks public release. |
| Shared fact | Stable project-scoped fact ID and revision | Typed value in conceptual terms: date, quantity/unit, role, contribution, scope, or status; source/evidence IDs; verification; limitations; permission reference. Unknown is an explicit missing value, never zero or an empty approved string. |
| Claim | Stable claim ID; links to facts, evidence, competency IDs, sections | Exact assertion; kind (fact, assumption, proposal, target, validated finding); individual/team attribution; reviewer; verification state and scope. Assumptions/targets never aggregate into achieved outcomes. |
| Section record | Stable section ID; project and canonical template number | Required/conditional status; available/missing/inapplicable/proposed disposition; reason; claim/artifact links; shared anchor. Goals and story mapping have separate records. |
| Evidence reference | Stable evidence ID and revision; supports specified claims | Safe source description/type, date, language, authorship and contribution, supported scope, limits, reviewer, confidentiality and permission references. No raw restricted evidence or private locator in this repository. |
| Artifact | Stable artifact ID and revision; links to claims, requirements and evidence | Type, author/contribution, original/reconstruction/synthetic classification, proposed/reviewed/implemented status where supported, language, accessible explanation, safe asset reference if permitted, privacy and permission review. “Synthetic” is not publication approval. |
| Permission | Separate permission ID; explicit objects and revisions in scope | Authority role/identity where permitted, decision, allowed claims/excerpts/assets, locales/derivatives/downloads, conditions, decision date and expiry/revocation if applicable. Unknown denies public eligibility. |
| Locale variant | Content identity + `en` or `vi` + locale revision | Localized title, summary, section prose, captions, text alternatives, labels and metadata; shared-fact revision; English source revision for Vietnamese; original evidence language; translation/editorial state; reviewer and date. English is primary, not a stronger form of evidence. |
| Review decision | Review ID; exact claim/fact/artifact/locale revisions | Review dimension, reviewer role/name, date, checklist results, decision, limits, required fixes. Self-review identified. Never approve an unspecified “latest” revision. |
| Release record | Versioned approved package; links to locale variants and permission/review decisions | Readiness, authorized release decision, publication state, published URL/date when real, withdrawn/replaced revision. Empty now; readiness is not publication. |
| Profile and shared page content | Stable identities for Home/About/Resume/Contact/navigation | Approved facts and localized copy, fact/locale revisions, public-contact consent, CV artifact references, review and permission fields. Reuse the same verified profile facts across pages and exports. |

Reserved project identities/slugs stay exactly as in IA: C1 `healthcare-appointment-management`, C2 `healthcare-omnichannel-integration`, C3 `employee-shift-scheduling`. Localized titles can change without creating a new project. A later approved slug change needs explicit equivalent-page and redirect planning; no routes change here.

### Traceability and evidence records

Use project-prefixed identifiers when real records are authored: `C1-GOAL-01`, `C1-REQ-01`, `C1-BR-01`, `C1-AC-01`, `C1-EVID-01`; optionally `C1-NEED-01`, `C1-CLAIM-01`, `C1-ART-01`, `C1-VAL-01`, `C1-RISK-01`, `C1-DEC-01`, and `C1-ASSUMP-01`. These illustrate syntax only; they are not populated evidence. REQ records identify their business, functional, or non-functional category. Existing shorter IDs may be retained within project scope with an explicit mapping; do not renumber already referenced artifacts casually.

Each traceability row links: need/problem and its source → goal → business requirement → functional/quality requirement as applicable → rule/exception where relevant → acceptance criterion → validation plan or executed validation record and evidence. Record outcome attribution and limitations separately. A criterion can be well written without ever being executed; a passed simulated check does not prove production value.

Each competency link identifies the specific claim and authored artifact/excerpt supporting it. Missing links carry a missing-input reason and owner, not a fabricated evidence ID. An inapplicable rule link needs a reason; not every requirement has a rule. A public link must reach a permitted explanation or excerpt and state unavailable source limitations rather than point to restricted originals. Reviewer conclusions about withheld evidence must state what was actually inspected.

### Versions, translations, and missing content

1. Record a monotonically distinguishable revision for shared facts, each artifact, English content, and each Vietnamese variant. Keep change date, author, reason, affected IDs, and review decisions. Do not overwrite the basis of an earlier approval.
2. English drafting uses supported facts and evidence. Vietnamese adaptation records its English source revision and shared-fact revision. Preserve IDs, contribution, dates, units, modality, scope, provenance and validation state; prose need not be a literal translation.
3. Evidence or fact changes send affected claims to Needs Verification and impacted language variants to Needs review. English wording changes also trigger assessment of Vietnamese translation impact; a reviewer can record “no meaning change” against the new source revision. Approval never silently carries forward.
4. Missing translation means no approved equivalent. Before Vietnamese activation, offer no functional Vietnamese entry. After activation, additional English-only cases may have a reviewed Vietnamese synopsis with the explicit English destination label from localization strategy. That synopsis is not a Vietnamese detail page.
5. Both variants published: preserve project identity and valid section anchor on language change. Missing target section: use the target overview. Missing Vietnamese case: explain availability and offer explicit English/listing destinations. No English body under a Vietnamese URL. These preserve the existing IA plan; no behavior is implemented now.
6. For ordinary updates, a still-accurate previously approved package may remain the baseline. Known materially inaccurate or unauthorized content must be corrected/withdrawn in a separately authorized release process. If a required Vietnamese core item becomes ineligible, suspend Vietnamese entry until the set is restored, following the localization strategy.

English and Vietnamese core-release gates remain those in [Content inventory](CONTENT_INVENTORY.md) and [Localization strategy](LOCALIZATION_STRATEGY.md): complete English core and strongest eligible case first; then reviewed Vietnamese Home, About, Projects, Contact, Resume summary, navigation, labels, metadata and selected featured case's applicable narrative. English artifact originals require reviewed Vietnamese explanations and honest language labels. An English CV PDF can remain an explicitly labeled optional download.

## Portfolio reading experience

This refines content hierarchy only; it selects no visual design or interactive implementation. Reading budgets below are editorial targets to validate, not measured recruiter behavior. Vietnamese prose may need different length while preserving facts and visible caveats.

### Homepage hierarchy

| Order | Content | Concision and evidence rule |
| --- | --- | --- |
| 1 | Identity and positioning | One approved headline and a short two-sentence focus summary; projects, resume and contact destinations remain discoverable. No unverified seniority or years. |
| 2 | Expertise highlights | A few evidence-supported themes from the seven groups; each names the concrete example and real/simulated context. Do not surface all 14 competencies as an unsupported list. |
| 3 | Featured work | Lead with one strongest eligible case. Other cases appear only when ready; no empty candidate cards. Summarize problem, contribution, artifact cues and validation limit. |
| 4 | Analytical approach | A brief need-to-validation explanation tied to actual authored work; avoid repeating the entire methodology. |
| 5 | Profile and credibility | A short supported background statement and About link; omit unsupported logos, endorsements or counters. |
| 6 | Resume and contact | Approved destinations with clear labels; no required download or form before reading evidence. |

### Featured case selection rules

First apply mandatory eligibility gates: confirmed provenance and authorship; truthful personal contribution; permitted public evidence; privacy clearance; coherent problem-to-acceptance chain; honest validation account; and reviewed locale content for the intended release. “No measured operational outcome” does not automatically disqualify an otherwise useful simulation or real analysis sample, but must remain visible.

Among eligible cases, compare relevance to confirmed target roles, analytical depth, inspectable evidence, decision quality, concise comprehensibility, and validation strength/limitations. Do not assign invented scores to unavailable work. Use C1 → C2 → C3 only as a tie-break editorial order after evidence review. A single strong case is sufficient for the planned minimum; none currently qualifies. C1 is the provisional investigation priority, not an approved featured case. A bilingual featured release additionally needs its reviewed Vietnamese narrative, not just a title.

### Quick Overview and recruiter summaries

Target roughly 120–180 English words for the case overview, with essential labels outside or inside that budget as needed; clarity and truthful limitations take precedence. Cover: problem/context; Real/Simulated provenance; role and personal contribution; analysis and key artifacts; one pivotal decision and reason; validation/result status; and a direct evidence/deep-dive destination. These facts must be understandable without opening the Deep Dive or a file.

A listing/home summary can use two or three concise sentences plus provenance, contribution and validation labels. Draft pattern only: `[confirmed context/problem] → [actual personal analysis and artifact] → [supported decision/validation with limit]`. No real summary can be populated yet. Never omit the simulation label or outcome caveat to fit a word target.

### Deep Dive and competency navigation

Use the canonical 19-section sequence with anchored contents, short section summaries, optional artifact depth, and evidence notes beside claims. Reuse stable section identities across languages, including `#business-context`, `#business-rules`, and `#validation-and-outcomes`. Goals and story mapping stay discoverable. Avoid repeating full requirements in overview, story map, and outcome sections: link the canonical record instead.

Planned path: **competency theme → specific demonstrated claim → case section → authored artifact/excerpt → requirement/rule/criterion and validation status**. Include project/provenance and return context at the destination. A case section can link back to related competency themes and other permitted evidence; no extra expertise route, filters, or search are needed for three candidates. If evidence is missing or restricted without a usable permitted explanation, withhold the claim from public competency navigation.

### Audience coverage

| Phase 2.1 audience | First-view needs | Optional evidence depth |
| --- | --- | --- |
| P1 Vietnamese IT Recruiter | Reviewed Vietnamese role focus, contribution/provenance, CV and contact. | A concise case example and supported competency links. |
| P2 Vietnamese Healthcare IT Hiring Manager | Confirmed setting, workflow problem, personal role and evidence boundary. | Handoffs, rules, access/exception analysis and validation. |
| P3 International Technical Recruiter | Clear English role fit, verified background, case provenance and practical fit if approved. | Shareable case summary and consistent resume facts. |
| P4 International Senior BA / BA Lead | Analytical question, contribution, source quality and limits. | Discovery, alternative causes, requirements traceability, decisions and executed versus planned validation. |
| P5 International Product or Healthcare IT Manager | Problem/value, scope decision and known outcome status. | Proposed delivery slice, dependencies, risk and measurement approach. |

These remain planning hypotheses. No reviewer interviews, comprehension sessions, or live navigation tests occurred during this documentation phase.

### Resume and contact requirements

Maintain one shared profile record for approved display name, actual title/career stage, chronology, education/credentials if stated, tools/languages if substantiated, and chosen role preferences. All actual facts: `[USER INPUT REQUIRED]`. Match dates, titles, project role and outcomes across About, Resume, summaries and both languages. Do not infer proficiency from bilingual content or career seniority from artifact quality.

Provide a reviewed HTML resume summary as the planned core. Optional PDF references need public-safe facts, inspected metadata/export contents, language/revision labels, a real approved file, and disclosure permission. Do not offer a missing download. Contact needs owner-approved public email/profile destinations and a concise invitation; location, time zone, availability or eligibility are optional approved facts, not inferred from this chat environment. No response-time promises or personal phone exposure by default.

## Phase boundary and handoff

The [framework](BA_COMPETENCY_FRAMEWORK.md) defines the evidence taxonomy; the [matrix](CASE_STUDY_EVIDENCE_MATRIX.md) records case gaps; the [checklist](CONTENT_VERIFICATION_CHECKLIST.md) owns review gates and this phase's quality results. Complete these plans without inventing cases or author identities. Next content work depends on public-safe owner inputs and a separately authorized scope. No application code, UI, new dependencies, publication or Phase 3 work is included.
