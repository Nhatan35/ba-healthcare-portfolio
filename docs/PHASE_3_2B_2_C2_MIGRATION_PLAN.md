# Phase 3.2B.2A — C2 Omicall Content Migration Plan

Prepared 16 October 2026. **Specification and bilingual draft only — pending owner review.** No application migration, publication, or Phase 3.2C work is authorized or performed. The companion [disclosure and evidence gates](C2_DISCLOSURE_AND_EVIDENCE_GATES.md) governs every proposed narrative variant.

## 1. Confirmed identity, sources, and scope

The owner confirms that C2 represents their **real, ongoing Omicall integration project**. This resolves the identity question in the earlier intake. Professional participation and activities are owner-attested; artifact verification, acceptance, results, and disclosure rights are separate.

| Locked field | Required value |
| --- | --- |
| Project ID | `C2` |
| Slug | `healthcare-omnichannel-integration` |
| URL | `/projects/healthcare-omnichannel-integration` |

No redirect, replacement identity, new route, or locale-prefixed route is proposed. C2 remains `featuredOrder: 2`; a later ranking decision is outside this migration. C1 and C3 remain candidates with their current identities, copy, status, and order.

Reviewed repository guidance and sources: [AGENTS.md](../AGENTS.md), [product brief](PRODUCT_BRIEF.md), [design system](DESIGN_SYSTEM.md), [canonical template](CASE_STUDY_TEMPLATE.md), [professional intake](PROFESSIONAL_EXPERIENCE_INTAKE.md), [HRM brief](HRM_CASE_STUDY_BRIEF.md), [Omicall brief](OMICALL_CASE_STUDY_BRIEF.md), [professional evidence matrix](PROFESSIONAL_EVIDENCE_MATRIX.md), [candidate evidence matrix](CASE_STUDY_EVIDENCE_MATRIX.md), [verification checklist](CONTENT_VERIFICATION_CHECKLIST.md), and [Phase 3.2B owner review](PHASE_3_2B_OWNER_REVIEW.md). Applied the already-read `ba-portfolio-storytelling` guidance. The owner decision and continued instructions supplied for this phase, reaffirmed on 16 October 2026, are the source for the confirmed identity and ongoing status.

The older documents' requests to confirm the C2/Omicall identity are resolved **for this plan**. Their historic statements about unknown participation do not override the new testimony. Those files remain unchanged; they are not silently rewritten as if testimony or artifacts had been available earlier. The C3/HRM relationship is still unresolved and outside C2 scope.

Existing claim references retain their meanings: O-01 joining the ongoing project; O-02 API requirements and HIS information coordination; O-03 Inbound/Outbound/MiniCRM analysis, including HIS 315 MiniCRM workflows; O-04 creation of flowcharts, timelines, weekly reports; O-05 cross-team requirements meetings; O-06 unconfirmed production completion/results. API means application programming interface. HIS and HIS 315 remain owner-supplied system labels; no official expansion or ownership of every external endpoint is inferred.

## 2. Current dependency path and proposed content contract

Current source inspection identifies this path:

`projectPreviews → homepage ProjectPreview / library ProjectCard / getCaseStudy → CaseStudyDetail + metadata`

`candidateAnalyses.C2 → preparationQuestions.C2 → overview and discovery content`

`caseStudySections → shared 19-section template → getCaseStudy discovery override → checklist`

`getRelatedProjects → C2 title/category/status on C1 and C3 pages`

The current `ProjectCandidate` contract permits only unknown provenance, missing evidence, and unverified status. `CaseStudy.analysis` always requires hypothetical `CandidateAnalysis`. Components also contain fixed assertions that no participation or artifacts are confirmed. Editing only C2's title/summary would leave contradictory descriptions elsewhere.

**Proposed later contract:** introduce a typed `ProjectRecord` distinction between a candidate and an owner-attested professional draft; keep candidate behavior for C1/C3. A project/content-kind discriminator is not a verification status. The C2 branch must carry source-qualified real provenance while retaining unverified evidence and unknown permission. The shared identity remains sourced from `projectPreviews`, never duplicated in a second independent identity record.

Use a dedicated C2 professional-content record in the proposed `src/content/projects/professional-experiences.ts`, keyed by existing project ID. Proposed fields: `context`, `scope`, `personalContribution`, `workflowAnalysis`, `apiCoordination`, `reportedArtifacts`, `openQuestions`, `limitations`, `claimReferences`, and section overrides keyed by stable section IDs. Text can reference existing O-01–O-06; collection-slot IDs belong in internal traceability, not a list of inspected artifacts. Keep `evidenceReferences` empty until actual permissible evidence is received and reviewed. Add an explicit `Owner-attested activity` content classification rather than using `Confirmed information` to imply independent verification.

Make `CaseStudy` composition discriminate between candidate analysis and professional draft content. Do not populate `proposedApproach` with performed work or relabel proposed deliverables as completed artifacts. Keep the five section workflow states and separate publication-permission vocabulary. No schema, route, component, or field is changed by this document.

## 3. Field-level migration map

Status notation used in these tables: **A/U** = owner-attested statement, not independently verified; **D/U** = draft editorial proposal, unverified; **M/U** = relevant supporting material missing/unverified. **P?** = publication permission Unknown; it never means a public release is allowed. **K** = technical identity/presentation invariant, not a business claim. All proposed prose remains Draft in both languages. KEEP preserves an existing value; REWRITE changes a later scoped value; DEFER leaves a claim or feature unimplemented; REMOVE means remove from active C2 presentation, not erase historical documents. Exact current strings are quoted where shown; other entries explicitly summarize arrays or shared behavior.

### 3.1 Project record and types

All `projectPreviews` rows below refer to the record with `id === "C2"` in `src/content/projects/previews.ts`.

| Current file/field and content | Action / proposed content | Claim / evidence slot | Verification / permission | Affected consumers / dependencies |
| --- | --- | --- | --- | --- |
| `projectPreviews.id`, `.slug`; route built from slug | KEEP locked values in section 1. | Owner identity decision / E-OMI-01 | Identity confirmed by owner; P? for narrative | All cards, lookup, static params, metadata, related links. |
| `.content.en.title`: “Healthcare Omnichannel Integration” | REWRITE to proposed editorial title **“Omicall Integration — Workflow and Requirements Analysis”**, conditional on name disclosure. Anonymous option in section 4. This is not asserted to be the official client project title. | O-01–O-03 / E-OMI-01, E-OMI-03, E-PUB-01 | D/U, P? | Card/header titles, document title, related links. Slug unchanged. |
| `.content.en.category`: “Systems & integration” | KEEP. No additional employer, clinical specialty, or domain-expertise claim. | O-02/O-03 / E-OMI-01, E-OMI-03 | A/U scope; P? | All project summaries and detail header. |
| `.content.en.summary`: “How could requests retain their context as they move between service channels?” | REWRITE using the English short summary in section 4. | O-01–O-04 / E-OMI-01–E-OMI-04 | A/U, P? | Homepage, library, detail lead, metadata description. |
| `.content.en.competencyTags`: System boundaries; Data mapping; Exception handling | REWRITE to **Workflow analysis; API requirements coordination; Progress reporting**. These describe reported activities, not verified proficiency. | O-02–O-04 / E-OMI-02–E-OMI-04 | A/U, P? | Card tags, homepage tags, detail tags and their accessible labels. Data mapping/exception expertise remains unproven. |
| `.content.en.scope`: “A candidate topic examining request ownership, status consistency, and failed handoffs. Channels, systems, personal contribution, and implementation history remain unverified.” | REWRITE to section 4's scope/contribution copy; distinguish HIS 315 MiniCRM scope from wider API boundaries. | O-02–O-05 / E-OMI-02–E-OMI-05 | A/U, P? | Card scope, homepage disclosure; professional detail content must use the same claims. |
| `.provenance`: `unknown`; type allows only `unknown` | REWRITE proposed C2 value to `real`, with explicit `owner-attested` source qualifier in the professional branch. C1/C3 stay unknown. | O-01 plus identity decision / E-OMI-01 | A/U; independent corroboration pending; P? | Project type, provenance label map, detail metadata. Never display “verified real project.” |
| `.verificationStatus`: `unverified` | KEEP value and “Draft · Unverified” badge; explain source-qualified participation separately. | O-01–O-06 / E-OMI-01–E-OMI-06 | A/U and M/U, P? | ProjectStatus and all consumers. No automatic promotion to Verified. |
| `.evidenceStatus`: `missing` | KEEP for supporting project artifacts; clarify label as **“Artifacts not supplied”** for C2. Owner statements exist. | O-04 / E-OMI-02, E-OMI-04 | Artifact existence A/U; files M/U; P? | Card and detail evidence labels; separate reported-artifact list. |
| `.publicationPermission`: `unknown` | KEEP; display “Unknown · Not cleared.” | All O claims / E-PUB-01 | P? | All summaries, detail status, release gates. |
| `.featuredOrder`: `2` | KEEP; existing C1/C2/C3 order and C1 provisional lead unchanged. | K / no business evidence applicable | Editorial order only | Homepage sort, library sort, related-project sort. |
| `.availableLocales`: `["en"]`; `.content.vi` absent | KEEP current runtime availability; DEFER Vietnamese runtime activation. Draft Vietnamese below is for owner review only. | O-01–O-05 / same evidence as English; E-PUB-01 | Both text variants Draft; P? | No language switch, translated routes, hreflang, or locale claim added. |
| `src/types/project.ts`: candidate-only `ProjectCandidate` and `ProjectCopy` | REWRITE shared project typing to admit the proposed discriminated `ProjectRecord`; retain narrow candidate semantics for C1/C3 and existing identity union. | K; representation of O claims | No verification upgrade | Update all typed consumers together; no cast that bypasses missing evidence. |
| `src/types/case-study.ts`: required `analysis: CandidateAnalysis`; three content classifications | REWRITE with a professional-draft branch, source-qualified activity blocks and `claimReferences`; KEEP section verification/permission separation. | O-01–O-06 / E-OMI-01–E-OMI-06 | A/U, P? | Content assembly and detail rendering. Existing candidate analysis remains hypothetical. |

### 3.2 Candidate analysis, questions, and assembly

| Current file/field and content | Action / proposed content | Claim / evidence slot | Verification / permission | Affected consumers / dependencies |
| --- | --- | --- | --- | --- |
| `src/content/projects/candidate-analyses.ts`, `C2.businessProblem`: investigation of context/status across service channels; proposed ownership, mapping, synchronization, duplicates/rejections; explicitly claims no real HIS/contact-center/vendor integration | REMOVE from active C2 professional content. REWRITE professional `context` from O-01–O-03; actual business problem remains missing. Do not convert the hypothetical failure list into findings. | O-01–O-03 / E-OMI-01, E-OMI-03 | Context A/U; problem M/U; P? | Professional overview branch; retain C1/C3 candidate records. |
| `C2.proposedApproach`: Context diagram exploration; System boundary analysis; Data mapping; API/event contract questions; Exception handling analysis; Integration acceptance criteria | REMOVE as C2's experience sequence. Use only reported workflow analysis, requirements coordination, and meetings. DEFER the other methods until supported. | O-02/O-03/O-05 / E-OMI-02, E-OMI-03, E-OMI-05 | A/U for bounded activities; other methods M/U; P? | Professional contribution/workflow blocks. No implied chronological delivery process. |
| `C2.requiredEvidence`: channel/lifecycle/ownership descriptions; field/event/interface specifications; authored analysis, validation, permission (array summarized) | REWRITE internal collection links around E-OMI-01–E-OMI-06 and E-PUB-01. Prefer one permitted flow and clarification sample; no payload request in public copy. | O-01–O-06 / E-OMI-01–E-OMI-06, E-PUB-01 | M/U, P? | Evidence notes and companion gates; source files not embedded. |
| `C2.proposedDeliverables`: context/ownership model; mapping/API-question register; exception/acceptance scenarios (array summarized) | REMOVE as the headline artifact inventory. REWRITE `reportedArtifacts` as flowcharts, timelines, weekly reports. DEFER other deliverables; do not assert they were produced. | O-04 / E-OMI-02, E-OMI-04 | Creation A/U; artifacts uninspected; P? | Professional artifact summary, checklist process-flow section. |
| `C2.provenanceNote`: “Channels, systems, vendors, real or simulated provenance, and personal involvement remain unverified. Confidential integration details are not supplied.” | REWRITE: **“Real ongoing project and participation are owner-attested. Supporting artifacts, acceptance, production completion, and results are not independently verified. Publication permission is unknown.”** | O-01–O-06 / E-OMI-01–E-OMI-06, E-PUB-01 | A/U, P? | Evidence/status block, not repeated inside each narrative paragraph. |
| `candidateAnalyses.C2.questions` references `preparationQuestions.C2` | REMOVE dependency from the candidate branch for C2; use `openQuestions` in the professional record, sourcing the single C2 question list below. | O-01–O-06 / E-OMI-01–E-OMI-06 | Questions D/U, P? | Overview/discovery remain synchronized without duplicating answers. |
| `src/lib/case-studies.ts`, `getCaseStudy`: attaches candidate analysis for every project and replaces discovery with proposed questions | REWRITE branch selection by content kind; C2 composes professional content and keyed section overrides. C1/C3 keep current composition. | O-01–O-06 / E-OMI-01–E-OMI-06 | Draft assembly, not evidence review | CaseStudyDetail and generateMetadata. Unrecognized slugs still return undefined. |
| `getRelatedProjects`: excludes current ID and sorts by featured order | KEEP behavior; adapt shared type only. | K / not applicable | No business claim | C1/C3 may show C2's revised related title/status without changing their own narratives. |

For `src/content/projects/preparation-questions.ts`, every item below remains a **future collection question**, not a discovered requirement. Publication permission remains P?; question text is D/U. Preserve C1/C3 question arrays exactly.

| Current C2 question (exact text) | Action / proposed question | Claim / evidence slot | Consumer |
| --- | --- | --- | --- |
| Which system should own the authoritative request or ticket status at each lifecycle stage? | REWRITE: What work was already in progress when you joined, and which analysis did you personally contribute? | O-01 / E-OMI-01 | C2 overview and discovery collection notes. |
| What context must follow a request between channels, and how should fields and identifiers be mapped? | REWRITE: Which Inbound, Outbound, and HIS 315 MiniCRM flowchart revisions show your work, and are they current-state, proposed-state, or another model? | O-03/O-04 / E-OMI-02 | Same single question source. |
| How should duplicate customer requests be detected and reviewed without losing distinct needs? | REWRITE: Which API-information question did you coordinate with Omicall, and what was its recorded disposition? | O-02 / E-OMI-03 | Same single question source. |
| What should happen when a downstream system rejects an update or is unavailable for a retry? | REWRITE: Which timeline and weekly-report excerpts can show your contribution without exposing confidential information? | O-04 / E-OMI-04 | Same single question source. |
| How should delayed or out-of-order events affect status synchronization? | REWRITE: What was your role in a cross-team requirements discussion, and what clarification can be described with permission? | O-05 / E-OMI-05 | Same single question source. |
| Which acceptance criteria would demonstrate a complete handoff, consistent status, and recoverable failure? | REWRITE: What review, acceptance, release, or outcome evidence exists, and which claims can it actually support? | O-06 / E-OMI-06, E-PUB-01 | Same single question source. |

The superseded questions may remain historical analysis hypotheses in existing documents. They are not evidence that duplicate handling, retry policies, ordering rules, state ownership, or acceptance criteria apply to Omicall.

### 3.3 Rendered wording, metadata, and dependency effects

All proposed C2 display copy is A/U or D/U with P? unless marked technical KEEP. No layout redesign is proposed.

| Current file / field or rendering | Action / proposed content | Claim / evidence slot | Affected dependency |
| --- | --- | --- | --- |
| `project-card.tsx`: “Candidate topic”, “Proposed scope”, “Proposed Business Analyst competency focus”, “View preparation page”; provenance map only `unknown` | REWRITE C2 labels to “Professional project draft”, “Scope and contribution”, “Reported BA activities”, “View project draft”; show “Real · Owner-attested”. KEEP C1/C3 labels. | O-01–O-05 / E-OMI-01–E-OMI-05, E-PUB-01 | Library cards, accessible names, provenance maps and ProjectRecord type. |
| `project-preview.tsx`: “Explore proposed scope”; fixed paragraph says real/simulated status and authorship await confirmation | REWRITE C2 disclosure label to “Explore scope and contribution”; note “Participation is owner-attested; supporting artifacts and results remain unverified.” Keep permission status visible. KEEP C1/C3 copy and C1 lead treatment. | O-01–O-06 / E-OMI-01–E-OMI-06, E-PUB-01 | Homepage C2 card; use shared C2 content. |
| `project-status.tsx`: `unverified` → “Draft · Unverified” | KEEP badge text; REWRITE shared type reference only if needed for ProjectRecord. | All O claims / E-OMI-01–E-OMI-06 | No verified badge, new success color, or implied approval. |
| `case-study-detail.tsx`, `ProjectMetadata`, `CaseStudyHeader`: “Candidate topic”, “Unknown”, “None”, “Case study preparation” | REWRITE C2 to “Professional project draft”, “Real · Owner-attested”, “Artifacts not supplied”, “Professional project draft”. KEEP the current title/summary data bindings and layout. | O-01/O-04 / E-OMI-01, E-OMI-02, E-OMI-04 | Header, metadata and revised project type. |
| `EvidenceStatus`: “A preparation page, with evidence still to come.” and “No responsibilities, artifacts, or outcomes have been confirmed.” | REWRITE C2 notice to **“Owner-attested experience; evidence review pending.”** Explain once that artifact creation is reported, artifacts are uninspected, completion/results unconfirmed, permission unknown. C1/C3 unchanged. | O-01–O-06 / E-OMI-01–E-OMI-06, E-PUB-01 | Display counts must reflect section states, not imply all Draft sections contain questions. |
| `CandidateOverview`: “Business Problem to Investigate”, “Key BA Questions”, “Proposed Analysis Approach”, “Evidence & Deliverables Required”, “Verification & Publication Status” | REWRITE C2 professional branch headings to **Project context and scope; Personal contribution; Workflow analysis and API coordination; Reported artifacts and evidence; Verification and publication status**. Retain existing overview fragment IDs and update navigation labels accordingly. Keep C1/C3 branch and headings. | O-01–O-06 / E-OMI-01–E-OMI-06, E-PUB-01 | No longer call the C2 renderer CandidateOverview internally if that obscures the branch; no new route or client state required. |
| `CandidateOverview` fixed statements: methods “have not been performed”; no artifacts “claimed as completed”; role “Unknown”; “not confirmed experience” | REMOVE these blanket assertions from C2. Use bounded owner-attested activities and reported artifact creation; acceptance/completion/outcomes remain unconfirmed. | O-01–O-06 / E-OMI-01–E-OMI-06 | Status prose, activity lists and artifact captions; do not remove C1/C3 safeguards. |
| `CaseStudySectionNavigation`: fixed links/labels to current overview IDs | KEEP hrefs; REWRITE C2 labels to match the five revised headings. KEEP checklist/related links. | K / not applicable | Navigation must describe its actual target; no broken fragment links. |
| `SectionContent`, `DeepDiveSections`: “Read preparation notes”; “Draft” means preparation only; summary says `{drafted} has draft discovery questions` | REWRITE C2 to “Read draft notes” and explain owner-attested versus proposed blocks distinctly. Count draft/missing sections generically with correct pluralization. KEEP native disclosures and default collapsed checklist. | O-01–O-06 / E-OMI-01–E-OMI-06 | Section model/overrides below; C1/C3 retain their current meanings. |
| `RelatedProjects`: “Related project candidates” | REWRITE neutral heading to “Related projects”; use each entry's type/status label. KEEP destinations and sort. | K; C2 references O-01 / E-OMI-01 | C2 appears on C1/C3 pages; their actual case content/status must remain unchanged. |
| `projects-library.tsx`: all entries described as candidates; “Personal contributions, artifacts, and outcomes have not been established”; definition “All entries here are candidates” | REWRITE collection wording to distinguish candidate topics from an owner-attested professional draft. Add a concise owner-attested definition; keep verified definition and explicit permission boundary. KEEP C1 feature, layout, and candidate definitions for C1/C3. | O-01–O-06 / E-OMI-01–E-OMI-06, E-PUB-01 | Library hero, contextual caveat, supporting collection labels, status guide. |
| `featured-projects.tsx`: “Questions worth exploring.” and collection-wide candidate-only description | REWRITE neutral title to “Projects and analysis.” and description to “Explore project drafts and candidate topics, with their contribution and evidence status clearly identified.” Keep current order/layout. | D/U editorial; O-01 / E-OMI-01 | Homepage collection framing only; other homepage sections remain unchanged. |
| `src/app/projects/[slug]/page.tsx`, `generateMetadata`: title suffix “— Draft case study”; description prefix “Unverified case study preparation.” | KEEP draft suffix; REWRITE C2 description prefix to “Owner-attested project draft. ” plus the approved summary variant. C1/C3 metadata unchanged. | O-01–O-04 / E-OMI-01–E-OMI-04, E-PUB-01 | Document metadata must obey the same naming gates as visible copy. |
| Same route: `generateStaticParams`, awaited params, `notFound()`, `robots: { index: false, follow: false }`; footer label “Case study preparation.” | KEEP routing, params, 404 and robots behavior. REWRITE only C2 footer prop to “Professional project draft.” | K; description O-01 / E-OMI-01 | Noindex is not a privacy or authorization control. Shared footer component unchanged. |
| `src/app/projects/page.tsx`, metadata description: “Explore draft Business Analyst project candidates in healthcare workflows, systems integration, and workforce operations. Experience and evidence remain unverified.” | REWRITE to “Explore Business Analyst project drafts and candidate topics, with contribution, evidence, and publication status clearly identified.” KEEP title, sort and robots. | D/U editorial / E-PUB-01 | Mixed-collection metadata, without asserting all experience is unknown or verified. |

## 4. Proposed bilingual recruiter-facing copy

The text in this section is an editorial proposal in the owner's voice. Named variants remain internal drafts until the naming and narrative gates are satisfied. Evidence controls follow in section 5 and the companion document; do not paste the full internal collection checklist into a recruiter summary.

### English

**Proposed title:** Omicall Integration — Workflow and Requirements Analysis

**Short summary:** I contribute to an ongoing Omicall integration project through workflow analysis, API requirements coordination, and progress reporting.

**Context:** I joined the Omicall integration project while it was already underway.

**Scope and personal contribution:** I analyze Inbound and Outbound flows and MiniCRM-related workflows in HIS 315. I also participate in cross-team requirements meetings.

**Workflow analysis and API coordination:** My work includes workflow analysis and coordination with Omicall on application programming interface (API) requirements and the information HIS needs to provide.

**Reported artifacts:** I have created flowcharts, timelines, and weekly progress reports as part of this work.

### Vietnamese

**Tiêu đề đề xuất:** Tích hợp Omicall — Phân tích luồng nghiệp vụ và yêu cầu

**Tóm tắt:** Tôi tham gia dự án tích hợp Omicall đang được thực hiện, với các hoạt động phân tích luồng nghiệp vụ, phối hợp làm rõ yêu cầu API và báo cáo tiến độ.

**Bối cảnh:** Tôi tham gia dự án tích hợp Omicall khi dự án đã bắt đầu và đang được thực hiện.

**Phạm vi và đóng góp cá nhân:** Tôi phân tích các luồng Inbound, Outbound và các luồng nghiệp vụ liên quan đến MiniCRM trong HIS 315. Tôi cũng tham gia các cuộc họp liên nhóm về yêu cầu.

**Phân tích luồng nghiệp vụ và phối hợp yêu cầu API:** Công việc của tôi bao gồm phân tích luồng nghiệp vụ và phối hợp với Omicall về yêu cầu giao diện lập trình ứng dụng (API) cùng thông tin mà HIS cần cung cấp.

**Tài liệu đã tạo theo xác nhận của chủ sở hữu:** Trong quá trình này, tôi đã tạo lưu đồ, các mốc tiến độ và báo cáo tiến độ hằng tuần.

**Anonymous alternative for later review:** title “Communications Integration — Workflow and Requirements Analysis” / “Tích hợp hệ thống liên lạc — Phân tích luồng nghiệp vụ và yêu cầu”. Replace “Omicall” with “a communications integration project” or “the integration partner” as the sentence requires; replace “MiniCRM-related workflows in HIS 315” with “related MiniCRM workflows” and “information HIS needs to provide” with “information needed for the integration”. Vietnamese equivalents: “dự án tích hợp hệ thống liên lạc”, “đối tác tích hợp”, “các luồng nghiệp vụ liên quan đến MiniCRM”, and “thông tin cần cung cấp cho việc tích hợp”. Review the exact resulting text in both languages before use. Anonymization is an alternative to review, not automatic disclosure clearance; even the remaining feature/flow names may need omission.

Traceability: context → O-01/E-OMI-01; scope/workflow → O-03/E-OMI-02; API coordination → O-02/E-OMI-03; artifact sentence → O-04/E-OMI-02 and E-OMI-04; meetings → O-05/E-OMI-05. O-06 constrains all copy: no completed implementation, acceptance, improvement, or result is asserted. No code authorship or employer name is introduced. HIS 315 scope applies to the reported MiniCRM work, not automatically to every API/endpoint. The narrative does not describe actual flow steps, payloads, business rules, or decisions.

## 5. Internal status and all 19 canonical sections

C2 is a real professional draft with owner-attested provenance. Overall verification remains `unverified`; project permission remains `unknown`. All section verification stays `unverified`, all section permissions `unknown`, and actual artifact `evidenceReferences` remain empty. Draft blocks use claim/source references, not fabricated artifact references. The proposed status changes below acknowledge draft testimony, not evidence approval.

Apply C2 overrides during assembly; **do not mutate the shared template**. Preserve canonical ordering, section IDs, and `${sectionId}-heading` fragments. A Missing section may still explain what related activity is attested; it must not imply the section's substantive artifact exists. Keep all five nested topics as shown after the table.

| # / canonical section | Stable section ID | Action / current → proposed section status and content | Claim / evidence slot |
| --- | --- | --- | --- |
| 1. Business Context | `business-context` | REWRITE Missing → Draft: ongoing project and owner-attested participation; dates, organization, full boundary still missing. | O-01/O-03 / E-OMI-01 |
| 2. Problem Identification | `problem-statement` | KEEP Missing: no observed business problem, causal finding, or quantified impact supplied. REMOVE inherited hypothetical failures from factual framing. | O-01 context only / E-OMI-01, E-OMI-05 |
| 3. Business Goals | `business-goals` | KEEP Missing: no agreed business goal, target, or success measure. | O-06 limitation / E-OMI-01, E-OMI-06 |
| 4. Stakeholder Analysis | `stakeholders` | REWRITE Missing → Draft: Omicall coordination and cross-team participation only; stakeholder map, authority, employer and individual identities missing. | O-02/O-05 / E-OMI-01, E-OMI-05 |
| 5. Discovery and Clarification | `discovery` | REWRITE Draft → Draft: distinguish reported coordination/meetings from future collection questions. No invented findings or decisions. | O-02/O-05 / E-OMI-03, E-OMI-05 |
| 6. As-Is Process | `as-is` | KEEP Missing: flow analysis is attested, but no current-state workflow supplied. Do not classify every reported flowchart as As-Is. | O-03/O-04 / E-OMI-02 |
| 7. Root Cause Analysis | `root-cause` | KEEP Missing: no supported causal analysis. | No supporting claim / E-OMI-05 collection only |
| 8. To-Be Process | `to-be` | KEEP Missing: no future-state model or agreed change supplied. | O-03 does not establish To-Be / E-OMI-02 |
| 9. User Story Mapping | `user-story-mapping` | KEEP Missing: no story map; timelines are not story maps. | No supporting claim / E-OMI-03 collection only |
| 10. Business Requirements | `business-requirements` | KEEP Missing: coordination is attested, not a supplied business-requirements catalog. | O-02 / E-OMI-03 |
| 11. Functional and Non-functional Requirements | `requirements` | REWRITE Missing → Draft: record the bounded API-information coordination activity; specifications and quality thresholds remain absent. Preserve three nested topics. | O-02/O-03 / E-OMI-03 |
| 12. Business Rules | `business-rules` | KEEP Missing: no approved or proposed case-specific rule is supplied. | No supporting rule claim / E-OMI-03, E-OMI-05 collection only |
| 13. BPMN / Process Flow | `process-flow` | REWRITE Missing → Draft: owner reports creating flowcharts; no images/files inspected. Do not call them Business Process Model and Notation (BPMN) diagrams without checking notation. | O-03/O-04 / E-OMI-02 |
| 14. Wireframes | `wireframes` | KEEP Missing: MiniCRM analysis does not establish design or wireframe authorship. | No supporting claim / E-OMI-03 collection only |
| 15. Edge Cases and Exception Flows | `exceptions` | KEEP Missing: no actual rejection, retry, duplicate, or ordering behavior supplied. | No supporting behavior claim / E-OMI-02, E-OMI-03 collection only |
| 16. Acceptance Criteria | `acceptance-criteria` | KEEP Missing: no criteria, sign-off, or passed test supplied. | O-06 limitation / E-OMI-03, E-OMI-06 |
| 17. Solution Trade-offs | `trade-offs` | KEEP Missing: meetings do not establish decisions or option ownership. | O-05 boundary / E-OMI-05 |
| 18. Validation and Outcomes | `validation-outcomes` | KEEP Missing: production completion/results unconfirmed; retain separate validation/outcome children. | O-06 / E-OMI-06 |
| 19. Lessons Learned | `lessons` | KEEP Missing: no owner reflection supplied; do not invent a retrospective. | No reflection claim / E-REF-01 collection only |

Nested IDs and proposed section states: `functional-requirements` Missing; `non-functional-requirements` Missing; `system-interactions` Draft with only O-02/O-03 owner-attested scope and unknown wider ownership; `evidence-validation` Missing; `outcomes` Missing. Keep their current titles, order, and heading fragments. No subsection is verified. Proposed top-level totals are **5 Draft and 14 Missing**; nested totals are **1 Draft and 4 Missing**. Derive display counts from assembled data; do not hardcode these counts or label every Draft section “discovery questions.”

Keep these overview/structural anchors too: `overview`, `overview-heading`, `ba-questions-heading`, `analysis-approach-heading`, `required-evidence-heading`, `verification-heading`, `evidence-heading`, `deep-dive`, `deep-dive-heading`, `checklist-status`, `related-projects`, and `related-heading`. Labels may change for C2 while IDs remain stable. Do not remove the collapsed checklist or its native keyboard behavior.

## 6. Exact proposed later implementation files

This is a future change list for separate approval, **not permission to edit them now**. No dependencies, styling files, root layout, shared header/footer implementation, or installed skills need changes under this plan. Before any future Next.js code edit, read the relevant installed `node_modules/next/dist/docs/` guides as AGENTS.md requires.

| Exact path | Planned later change |
| --- | --- |
| `src/types/project.ts` | Add the discriminated project representation and source-qualified provenance; retain identities and conservative verification/permission values. |
| `src/types/case-study.ts` | Professional content branch and owner-attested block/claim-reference support; retain canonical section contracts and status vocabulary. |
| `src/content/projects/previews.ts` | Update C2 fields from approved variants; adapt shared record type. C1/C3 field values unchanged; no reorder or locale activation. |
| `src/content/projects/professional-experiences.ts` (new, later only) | Store C2 professional narrative, source claim references, reported artifacts, limitations and keyed section overrides; reuse existing identity/question sources. |
| `src/content/projects/candidate-analyses.ts` | Remove active C2 hypothetical record when professional composition is introduced; scope the candidate mapping to the candidate branch. Preserve C1/C3 records exactly. |
| `src/content/projects/preparation-questions.ts` | Replace C2 questions with collection questions in section 3.2; update shared project typing; preserve C1/C3 arrays. |
| `src/lib/case-studies.ts` | Select candidate/professional branch and assemble immutable C2 overrides; retain lookup, related sort, and unknown-slug behavior. |
| `src/components/case-studies/project-card.tsx` | Source-aware C2 labels and provenance map; preserve card structure and candidate branch. |
| `src/components/case-studies/project-preview.tsx` | C2-specific scope/source wording and shared type; retain C1 lead and C1/C3 content. |
| `src/components/case-studies/project-status.tsx` | Shared project type compatibility only; keep unverified badge text. |
| `src/components/case-studies/case-study-detail.tsx` | Professional overview branch, source/permission notice, matching navigation, generic draft counts, stable IDs, neutral related heading. |
| `src/components/sections/projects-library.tsx` | Mixed-collection wording/status definitions and shared type; keep C1 feature and layout. |
| `src/components/sections/featured-projects.tsx` | Neutral collection framing; current order and all other homepage sections unchanged. |
| `src/app/projects/page.tsx` | Neutral collection metadata description only. |
| `src/app/projects/[slug]/page.tsx` | C2-specific metadata description/footer label; preserve params, static paths, robots, and notFound behavior. |

Keep `src/content/projects/case-study-sections.ts` unchanged as the shared canonical template. Keep `src/app/projects/[slug]/not-found.tsx`, CSS, font setup, package files, and runtime locale behavior unchanged. Existing intake/phase reports stay historical; any later reconciliation appendix is separate documentation scope, not a prerequisite to altering them now.

## 7. Future verification, preservation, and rollback

All checks in this section are **planned, not run for this documentation phase**.

1. Obtain approval of the specification and exact copy variant for the intended local review, plus a separate implementation instruction. Publication remains gated. Snapshot the full working tree, including untracked files and C1/C3 records, questions, analyses, assembled sections, current route responses, and responsive screenshots. Existing user changes must be included in the baseline.
2. Implement only the approved file list. Verify one C2 identity record; no data drift between homepage/library/detail/metadata/related cards; actual professional activities and future questions must remain separate. Ensure source/claim references are not rendered as inspected artifacts or acceptance evidence.
3. After inspecting current scripts, run `npm run lint` and `npm run build` and record exit codes, warnings, and blockers. Font fetching remains network-dependent in the existing setup; report actual failure if encountered without changing typography or claiming PASS. No rule/check suppression or dependency changes to force a pass.
4. Validate C2 at the exact locked URL, static params, title/description/robots, one h1, internal links and every overview/checklist fragment. Verify `/`, `/projects`, both C1/C3 detail URLs return their expected successful responses, while an unknown slug returns 404. No redirects or `/en`/`/vi` paths added. Check related links from C1/C3 into C2 and Back to Projects.
5. Compare C1/C3 identity fields, prose, questions, statuses, canonical sections, and C1 lead order to baseline. Neutral collection/related headings and the C2 related-card text are the expressly planned shared-copy changes; they must not alter C1/C3 business narratives. Recheck shared labels across all five valid pages.
6. Exercise 1440, 768, 390, and 320px widths, open/closed disclosures, actual 200% browser zoom, long copy and reduced motion. Check keyboard skip link, link order/focus, Enter/Space disclosures, heading hierarchy, named landmarks, anchor targets, contrast, target size, wrapping and overflow. Confirm reading without JavaScript. Record native assistive-technology/cross-browser coverage actually performed and any limits.
7. Check development and production console/hydration behavior in a clean profile. Preserve Next.js diagnostics and Geist/Manrope. The prior extension-induced `mdl-js` issue is documented; do not suppress warnings to make this migration appear clean. An affected-profile comparison remains separate from application regression evidence.
8. Run final scope/whitespace checks and review all public-facing strings and metadata for unsupported rules, payloads, outcomes, or names. Record owner review of the resulting local implementation; do not infer release authorization from tests or this plan.

**Rollback:** preserve file-level pre-implementation copies/patches of all affected tracked and untracked files. If contracts, identity, C1/C3 content, disclosure behavior, or required checks fail, restore only the migration's changes from that baseline; do not use a blanket reset/clean or overwrite unrelated edits. Remove the newly created professional-content file only if it was created solely for that implementation and its path/contents are verified. Recheck the locked routes, original C1/C3 values, lint/build and relevant browser behavior after restoration. Retain the plan and accurate failed-check evidence; rollback of code does not revoke the owner's identity attestation.

## 8. Planning acceptance and unresolved decisions

The C2 identity decision is **resolved** and must not be requested again. Owner review is still needed for the proposed title, English/Vietnamese wording, anonymous versus named variant, source-label presentation, field/section treatment, and later implementation scope. Exact role title, dates, detailed system boundaries, inspectable artifacts, assigned reviewers, and disclosure authority remain missing. C1/C3 remapping, feature reorder, HRM migration, bilingual activation, and Phase 3.2C are outside this plan.

This phase creates only this file and `docs/C2_DISCLOSURE_AND_EVIDENCE_GATES.md`. Validation covers registered references, identity/section preservation, local links, scope and whitespace; it does not verify professional artifacts or authorize publication. Stop for owner review.
