# Localization Strategy — Phase 2.1

Status: content policy proposed for approval, 12 October 2026. English is the primary/default language; Vietnamese is the secondary supported language. That market decision is confirmed. No translation library, locale routing, UI, or publishing is implemented in this phase.

Read with [Portfolio strategy](PORTFOLIO_STRATEGY.md), [Information architecture](INFORMATION_ARCHITECTURE.md), and [Content inventory](CONTENT_INVENTORY.md). IA owns URL and navigation behavior; this document owns terminology, translation states, and language review.

## 1. One factual record, two natural presentations

English-first means drafting the approved narrative in English first. It does not mean English evidence is more credible or that original Vietnamese evidence must be rewritten to become valid. Keep permitted evidence in its original language and describe its meaning accurately. Both published versions must communicate the same project identity, scope, role, provenance, assumptions, decisions, and verified outcomes.

Use shared project IDs and stable requirement/rule/criterion/evidence IDs. Keep dates, numbers, units, currencies, author contributions, outcome status, and source references in a shared factual record. Localize titles, summaries, explanatory prose, labels, captions, alternative text, and metadata. This is a conceptual content model only; no schema, parser, or application code is required now.

Language adaptation may change sentence structure and examples of phrasing. It must not add employment history, imply greater seniority, turn a simulation into a real project, change an acceptance threshold, or turn expected benefits into achieved results. Employment titles should retain their verified meaning; do not upgrade “Business Analyst” to “chuyên gia,” “Senior,” or “Lead.”

## 2. English-first authoring and Vietnamese localization workflow

| Step | Action and deliverable | Gate / responsible role |
| --- | --- | --- |
| 1. Collect facts | Owner supplies publishable profile facts, actual contribution, provenance, and sanitized evidence references; identify gaps with `[USER INPUT REQUIRED]`. | Portfolio owner confirms factual accuracy and disclosure authority. No raw patient/client confidential material. |
| 2. Build evidence map | Link claims to evidence or label them assumptions/proposals; distinguish artifact quality from production outcomes. | BA reviewer checks traceability; identity `[USER INPUT REQUIRED]`. |
| 3. Draft English | Write for a mixed recruiter/technical audience using the approved structure and glossary. Preserve original source meanings. | Content author; owner or appointed author identity `[USER INPUT REQUIRED]`. |
| 4. Review English and privacy | Check clarity, claim boundaries, contribution, metrics, source dates, and public suitability. | Owner approves facts; relevant disclosure authority if needed; reviewers `[USER INPUT REQUIRED]`. |
| 5. Establish source revision | Record the approved English narrative revision plus shared-fact revision and evidence IDs. | Content owner establishes the translation baseline. |
| 6. Adapt Vietnamese | Translate meaning and decision logic in natural professional Vietnamese. Preserve technical identifiers and factual values. | Vietnamese localization reviewer/author `[USER INPUT REQUIRED]`. Machine assistance is drafting only, using public/synthetic input. |
| 7. Compare languages | Review side by side for facts, scope, modality, terminology, numbers, artifact labels, and conclusions. Read Vietnamese independently for fluency. | Bilingual BA-capable reviewer `[USER INPUT REQUIRED]`; do not claim independent review without one. |
| 8. Approve and release | Owner approves the publishable variants and CV/contact details; future implementer checks locale links/metadata. | English release may precede Vietnamese. Activate Vietnamese only when its core release set passes review. No publication in Phase 2.1. |
| 9. Maintain | When shared facts or English source change, identify affected translations, mark them for review, and rerun relevant checks. | Content owner tracks each locale; outdated claims must not remain approved by default. |

The owner may perform multiple roles, but record that honestly. A future external reviewer is a recommendation, not an implied appointment or authorization to send material to anyone.

## 3. Review states and release rules

Keep evidence verification and editorial/translation status separate. A polished translation cannot verify a project claim.

| State | Meaning | Public eligibility |
| --- | --- | --- |
| Missing | No authored content or required input absent. | No. |
| Draft | Content exists but claims/language/privacy checks are incomplete. | No. |
| In review | Named reviewer is actively checking the specified revision. | No; do not claim this state without a reviewer. |
| Approved | Facts, language, and privacy for this revision are approved by the responsible owner/reviewer. | Eligible for a separately authorized release, not automatically published. |
| Published | Approved revision intentionally released in a later authorized phase. | Yes. |
| Needs review | A source or shared fact changed; the affected translation's approval is invalidated. | No new publication; hold updates until reviewed, and withdraw materially inaccurate public content if necessary. |

Minimum record per localized page/case: stable content ID, locale, source revision, shared-fact revision, translation status, evidence verification status, reviewer, approval date, public URL when published, and approved artifact-language availability. These are requirements for future content maintenance, not new application types.

For a routine update, keep the previous mutually consistent approved content until the new release is ready. Do not leave known incorrect facts online to preserve translation parity: correct the source, withdraw the inaccurate variant if necessary, and use the IA missing-translation behavior until reviewed. If a required Vietnamese core page is no longer publishable, suspend the Vietnamese release entry until the core set is restored. Do not silently serve English prose as a Vietnamese page.

**Vietnamese activation gate:** reviewed Vietnamese homepage, About, project listing, Contact, Resume summary, navigation, provenance/status labels, metadata, and at least the selected featured case's core narrative (Quick Overview and all applicable Deep Dive sections). Artifact originals may remain English if explicitly labeled with a reviewed Vietnamese explanation. Additional English-only cases can be linked transparently from the Vietnamese listing. An English-only PDF can be linked from a reviewed Vietnamese resume page with a clear language label.

## 4. Professional tone

| English | Vietnamese |
| --- | --- |
| Use direct, specific, professional language; show the problem and reasoning before technical detail. | Viết rõ ràng, tự nhiên, chuyên nghiệp; ưu tiên vấn đề nghiệp vụ và lập luận trước chi tiết kỹ thuật. |
| Use first person only for verified personal contributions; use “the team” for team activities. | Dùng “tôi” cho phần việc cá nhân đã xác nhận; dùng “nhóm” cho công việc tập thể. |
| Say “proposed,” “assumed,” or “not measured” when that is the evidence status. | Giữ đúng mức độ xác thực: “đề xuất,” “giả định,” “chưa đo lường”; không đổi thành “đã triển khai” hoặc “đã cải thiện.” |
| Explain healthcare/system acronyms on first use and avoid sales language. | Giải thích thuật ngữ và chữ viết tắt khi xuất hiện lần đầu; tránh cách dịch từng từ và lời quảng bá quá mức. |
| Avoid “expert,” “proven success,” “seamless,” and unsupported transformation claims. | Tránh “chuyên gia,” “thành công vượt trội,” “tối ưu toàn diện” hoặc cam kết kết quả khi chưa có căn cứ. |

Do not translate “stakeholder” as only “khách hàng”: employees, users, sponsors, and other affected roles may also matter. Do not translate every occurrence of “business” as “kinh doanh”; “nghiệp vụ” is often the intended meaning in these IT workflows. Confirm contextual terms with the owner/reviewer rather than declaring a universal Vietnamese standard.

## 5. Initial bilingual glossary

These are proposed portfolio editorial terms, not legally mandated translations, a certification glossary, or proof of the author's expertise. Confirm organization-specific vocabulary when actual evidence arrives. Use English + Vietnamese expansion at first meaningful mention where it helps a recruitment audience; then use the agreed short term consistently.

| English term | Preferred Vietnamese adaptation | Usage / precision rule |
| --- | --- | --- |
| Business Analyst (BA) | Chuyên viên phân tích nghiệp vụ (Business Analyst — BA) | Keep “Business Analyst” in headline/CV role keywords if appropriate; do not imply seniority. Actual title requires confirmation. |
| Stakeholder | Bên liên quan / các bên liên quan | Choose singular/plural naturally; identify actual roles rather than a generic list. |
| Business Requirement | Yêu cầu nghiệp vụ | Business need or capability/outcome; keep distinct from screen behavior and design choices. |
| Functional Requirement | Yêu cầu chức năng | Observable system behavior; preserve actor, condition, action, and result. |
| Non-functional Requirement (NFR) | Yêu cầu phi chức năng (NFR) | State the quality dimension, context, and measurable criterion; not an optional requirement. |
| Business Rule | Quy tắc nghiệp vụ | Preserve condition, precedence, exception, and authority/source. |
| User Story | User Story (mô tả nhu cầu từ góc nhìn người dùng) | Prefer the English artifact name with explanation; avoid repeated literal “câu chuyện người dùng” if unnatural to the audience. |
| Acceptance Criteria | Tiêu chí chấp nhận | Conditions for accepting a requirement/story; distinguish from formal organizational acceptance or “nghiệm thu” when that is a different process. |
| As-Is Process | Quy trình hiện tại (As-Is) | “Current” means observed/confirmed only when evidence exists; identify simulated baselines. |
| To-Be Process | Quy trình đề xuất (To-Be) | Do not imply already implemented. “Quy trình mục tiêu” may be used if the target state is explicitly agreed. |
| Root Cause Analysis | Phân tích nguyên nhân gốc rễ | Distinguish a supported cause from a causal hypothesis. |
| User Story Mapping | Lập bản đồ User Story | Explain activities, tasks, stories, and delivery slices; do not translate it as general journey mapping. |
| HIS — Hospital Information System | Hệ thống thông tin bệnh viện (HIS) | This portfolio's default expansion only when the context is a hospital system. Some sources use HIS for Health Information System; preserve and explain the actual source meaning. |
| EMR — Electronic Medical Record | Bệnh án điện tử (EMR) | Confirm the product/jurisdiction's scope; do not treat the abbreviation as proof of regulatory status. |
| EHR — Electronic Health Record | Hồ sơ sức khỏe điện tử (EHR) | Distinguish broader health-record/exchange context from an individual organization/practice record where applicable; do not assume every vendor uses the same boundary. |
| Integration | Tích hợp / tích hợp hệ thống | State what is integrated: data, workflow, identity, status, or services. Do not imply a particular API or standard without evidence. |
| Appointment Management | Quản lý lịch hẹn; quản lý lịch hẹn khám bệnh when confirmed | “Khám bệnh” is specific to medical appointments; broaden wording if the confirmed scenario covers other healthcare services. |

For the EMR/EHR distinction, [ONC's explanation](https://healthit.gov/blog/electronic-health-and-medical-records/emr-vs-ehr-difference/) distinguishes practice-centered medical records from health records designed for information use beyond the originating organization. It is a conceptual reference, not a declaration that every system or Vietnamese legal definition uses identical boundaries. The Vietnamese renderings above are editorial recommendations awaiting review.

### When to retain English

- Keep API names, endpoint/field names, code values, product names, standards/acronyms such as BPMN, and stable IDs such as `REQ-01` unchanged. Explain their meaning in Vietnamese nearby.
- Retain established artifact terms such as User Story, Backlog, and Given/When/Then when this improves precision for the chosen audience; provide a natural explanation at first use. Do not mix unnecessary English into otherwise clear Vietnamese prose.
- For CVs, preserve verified official role/certification names and add a Vietnamese explanation where useful. Do not translate a credential into a different qualification.
- Preserve original permitted document titles in source references, followed by a localized description; identify translated quotations as translations and keep their meaning exact.

## 6. Translating BA artifacts

| Artifact | Translation rule |
| --- | --- |
| Requirements and business rules | Preserve ID, scope, actor, condition, obligation level, precedence, threshold, exception, and approval/status. “Must,” “should,” and “may” must remain distinct. |
| Acceptance criteria | Keep preconditions, action, observable result, test data classification, and pass/fail semantics. Given/When/Then can be explained as Bối cảnh/Khi/Thì without changing logic. |
| Process/BPMN diagrams | Translate labels and text explanations while preserving topology, gateways, actor responsibilities, and identifiers. A simplified flow remains a process flow in both languages, not upgraded to BPMN. |
| Story maps | Preserve backbone activities, ordering, story identity, priority, and release slice. Localize phrasing without inventing a new scope. |
| Data/interface mappings | Keep technical field names, types, enums, units, and examples aligned. Translate descriptions only. Use synthetic values; do not insert real messages or payloads. |
| Wireframe references | Translate permitted annotations, field labels, states, and explanations. Retain concept vs delivered status. Actual wireframe creation is outside Phase 2.1. |
| Evidence and results | Preserve sources, dates, sample boundaries, methodology, baselines, outcomes, and caveats. Do not convert numbers or units silently. |

An English artifact may remain an English artifact on a Vietnamese case when clearly labeled and accompanied by a reviewed Vietnamese explanation of its relevant content. Do not claim the complete artifact has been localized. A Vietnamese page must still contain a coherent Vietnamese narrative; translating only navigation is insufficient for the proposed release.

Date formatting may be localized (for example, 12 October 2026 / 12 tháng 10 năm 2026), while the underlying date remains identical. Preserve currency and measurement units unless an explicit, dated conversion is relevant and explained. Avoid ambiguous numeric dates and do not localize identifiers.

## 7. Missing translations and UI copy requirements

Follow the behavior table in [Information architecture](INFORMATION_ARCHITECTURE.md). Only published approved variants count as available equivalents; a draft, machine translation, or stale inaccurate variant does not.

| Meaning | English | Vietnamese |
| --- | --- | --- |
| English-only detail | Full case study available in English only. | Bản đầy đủ hiện chỉ có tiếng Anh. |
| Explicit English action | Read in English | Đọc bằng tiếng Anh |
| Vietnamese variant unavailable | The Vietnamese version has not been approved yet. | Bản tiếng Việt chưa được duyệt. |
| Real project | Real project | Dự án thực tế |
| Simulated case | Simulated case study | Nghiên cứu tình huống mô phỏng |
| Proposed artifact | Proposed artifact | Tài liệu đề xuất |
| No measurement | Not measured | Chưa đo lường |
| Contribution | My contribution | Phần việc tôi thực hiện |

Before the Vietnamese activation gate is met, do not offer a functional Vietnamese switch. After activation, missing additional case translations use explicit English links and unavailable-version explanations. Never publish untranslated placeholders or imply that an English-only artifact proves translation completeness.

## 8. Bilingual QA and approval checklist

Before approving a locale revision, record the reviewer and check:

- Same project identity, real/simulated label, domain, role, contribution, scope, dates, and outcome status in both languages.
- Every personal claim has permitted evidence or remains blocked as `[USER INPUT REQUIRED]`; no unknown facts enter public copy.
- All metrics preserve source, unit, baseline, measurement period, calculation, and limitations; no targets become achieved results.
- Requirements, rules, criteria, and diagrams preserve logic and identifiers; technical acronyms are expanded accurately.
- English is concise and intelligible; Vietnamese reads naturally without literal calques, exaggerated titles, or missing diacritics.
- Link text, image explanations, artifact captions, locale labels, metadata, and CV labels are reviewed, not just body prose.
- Evidence permissions and privacy checks cover both language exports and downloaded artifacts.
- Each locale points to the correct equivalent or clearly labeled English-only destination; no misleading canonical or alternate is proposed for an unpublished page.
- The owner approves the final facts and public contact/resume details; editorial approval is not permission to publish outside an authorized release.

After implementation, separately test Vietnamese font coverage, wrapping, text expansion, screen-reader language handling, keyboard switching, dates/numbers, downloads, status messaging, and actual SEO output. These checks have not been performed on an implemented bilingual website.

## 9. Outstanding inputs

`[USER INPUT REQUIRED]`: approved personal facts and career focus; actual language proficiency (if to be stated); preferred vocabulary for verified organizational contexts; English CV and any Vietnamese version; approved professional contact details; case provenance and permitted artifacts; content owner and bilingual reviewer identities; final copy approval. These block truthful content release, not completion of this planning document.

Stop after Phase 2.1. Do not implement internationalization, modify skills, or proceed to Phase 2.2.
