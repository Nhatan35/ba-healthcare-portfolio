# Bilingual Information Architecture — Phase 2.1

Status: recommended structure for approval, 12 October 2026. Documentation only; no routes, components, UI, redirects, or internationalization are implemented. See [Portfolio strategy](PORTFOLIO_STRATEGY.md) for personas and evidence boundaries and [Localization strategy](LOCALIZATION_STRATEGY.md) for the content review lifecycle.

## 1. Architectural decisions

- Maintain one portfolio, one professional identity, one project catalog, and one set of verified facts. English and Vietnamese are presentations of that same content.
- English is primary/default. Recommend explicit `/en` and `/vi` prefixes for all public content pages, including the default language.
- Use a small primary navigation: Home, About, Projects, Contact. Expertise is a homepage section with a stable anchor; Resume is a utility destination rather than another large content area.
- Offer a fast overview and optional deep exploration. Essential positioning, project provenance, contribution, and contact must not require opening a diagram or downloading a file.
- Treat all paths below as planned. Existing `src/app` placeholders are retained in this phase. A future approved implementation may organize localized routes under a locale segment after reading the installed Next.js documentation; no migration is performed here.

## 2. Navigation and complete planned sitemap

| Purpose | English label / destination | Vietnamese label / destination |
| --- | --- | --- |
| Home | Home — `/en` | Trang chủ — `/vi` |
| Profile | About — `/en/about` | Giới thiệu — `/vi/about` |
| Case catalog | Projects — `/en/projects` | Dự án — `/vi/projects` |
| Contact | Contact — `/en/contact` | Liên hệ — `/vi/contact` |
| Expertise section link | Expertise — `/en#expertise` | Năng lực nghiệp vụ — `/vi#expertise` |
| Resume utility | Resume — `/en/resume` | CV — `/vi/resume` |
| Locale control | English / Tiếng Việt | English / Tiếng Việt |

Use language names rather than national flags: language preference and nationality are not equivalent. Keep primary labels and order consistent across page types. Projects may contain real or simulated cases, always visibly labeled.

```text
/                                    → planned deterministic redirect to /en
├── /en                              English homepage
│   ├── #expertise                   section anchor, not a separate page
│   ├── /about                       profile and working approach
│   ├── /projects                    reviewed case-study catalog
│   │   └── /[slug]                  one reviewed case study
│   ├── /resume                      accessible CV summary and approved downloads
│   └── /contact                     approved professional contact channels
└── /vi                              Vietnamese homepage, only after release review
    ├── #expertise
    ├── /about
    ├── /projects
    │   └── /[slug]                  only reviewed Vietnamese case variants
    ├── /resume
    └── /contact

Supporting resources (future, not content pages):
/sitemap.xml                         only published canonical content URLs
/robots.txt                          crawl guidance; never a privacy control
Approved resume/artifact files       linked from relevant pages, language identified
Localized not-found states           unknown/unpublished routes; not sitemap entries
```

No standalone expertise page, blog, search, dashboard, or contact submission system is required for the minimum release. Add routes only for approved content needs. Privacy/legal pages are not prescribed without the future data-handling scope; reassess before adding analytics, forms, or third-party embeds. Direct contact links are the proposed minimum.

### Shared project identities

These are reserved editorial identifiers and proposed slugs, not live pages or claims of completed projects.

| Project ID | Shared slug in both languages | English candidate title | Vietnamese candidate title |
| --- | --- | --- | --- |
| C1 | `healthcare-appointment-management` | Healthcare Appointment Management | Quản lý lịch hẹn khám bệnh |
| C2 | `healthcare-omnichannel-integration` | Healthcare Omnichannel Integration | Tích hợp đa kênh trong dịch vụ y tế |
| C3 | `employee-shift-scheduling` | Employee Shift Scheduling | Lập lịch ca làm việc cho nhân viên |

Titles may change when actual scope is confirmed; retain identity and stable slug where practical. “Khám bệnh” is a proposed appointment context, not confirmed scope; broaden to “lịch hẹn trong dịch vụ y tế” if the verified setting is not medical consultation. C3 remains domain-unverified and must not inherit a healthcare category from the site's positioning.

## 3. URL approach and trade-offs

| Approach | Benefits | Costs / decision |
| --- | --- | --- |
| `/en/...` and `/vi/...` on one domain — recommended | Predictable equivalent pages, shareable language choice, one hosting/content system, room for additional locales. | Longer default URLs and an explicit root rule; requires translation completeness and alternate-link maintenance. |
| English without prefix; `/vi/...` | Short default URLs. | Asymmetric mapping and migration rules; less consistent with the proposed bilingual model. |
| Separate domains or subdomains | Independent country/brand operations if genuinely needed. | Extra administration and greater risk of content divergence; unnecessary for this single identity. |
| One URL with language only in browser state | Appears simple for an application. | Weak shareability and language discovery; rejected for this portfolio. |

Google recommends separate URLs for language versions and warns that inferred-language redirects can obstruct discovery. A single language for the main content and navigation also helps make a page's language clear. These support, but do not uniquely require, the proposed prefix strategy. [Google multilingual guidance](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites).

Recommend a deterministic `/` → `/en` redirect once implemented; never override an explicit `/en` or `/vi` URL based on IP, browser language, or remembered preference. The URL is authoritative. A saved preference is optional future convenience, not an MVP requirement. Keep internal links locale-specific. Reserve language-neutral slugs to reduce mapping errors; Vietnamese titles and descriptions provide localized meaning even though route words remain English. Localized slugs could be added later but would require mappings and redirect maintenance.

If any current unprefixed `/about`, `/projects`, `/projects/[slug]`, or `/contact` routes become public before migration, inventory them and map each existing page to its `/en` equivalent. Do not invent redirect targets for unknown slugs. At present those folders contain placeholders and expose no pages. Redirect and migration decisions are future implementation work.

## 4. Page and section requirements

### Homepage hierarchy

| Order | Section | Reader question / content requirement |
| --- | --- | --- |
| 1 | Identity and professional positioning | Who is this, and what BA work is the focus? Use one approved headline, concise summary, verified identity; primary link to projects, secondary to resume/contact. |
| 2 | Expertise highlights (`#expertise`) | Which competencies can I inspect? Group the taxonomy into a few readable themes; each displayed claim links to a case section or other permitted evidence. |
| 3 | Featured work | Which example is most relevant? Show only publishable cases with problem, domain, provenance, contribution, artifact cues, and result/validation status. |
| 4 | Analytical approach | How are needs turned into decisions? Brief framing → discovery → specification → validation explanation linked to actual examples when available. |
| 5 | Profile and credibility | What is the actual background and contribution? Short approved facts and a link to About; omit unsupported badges, client logos, and outcome counters. |
| 6 | Resume and contact | How can I assess practical fit and start a conversation? Visible approved links; no forced form or download before reading the work. |

This is content ordering, not a wireframe or visual design. Important links may recur where useful without repeating full content. Keep the first positioning and evidence cues immediately understandable; no invented recruiter attention-span targets.

### About page

1. Approved professional summary and focus.
2. Actual background, roles, dates, and responsibilities — `[USER INPUT REQUIRED]`; omit unsupported chronology rather than filling it.
3. Working approach with an evidence-linked example of clarification, analysis, or a trade-off.
4. Relevant competencies and tools actually used; link to the canonical case evidence instead of duplicating narratives.
5. Education/certifications only if confirmed; no placeholder badges.
6. Collaboration/language context, location and work preferences only with owner confirmation.
7. Resume and contact links.

### Expertise section

Use the seven competency groups from [Portfolio strategy](PORTFOLIO_STRATEGY.md). Each displayed item pairs a competency with evidence and its provenance. Show learning interests separately from demonstrated practice. Do not imply certification or production use from a sample diagram. On small screens, retain competency names and evidence links; deeper artifact detail can follow later in the page journey.

### Projects listing

- Lead with a short explanation of real vs simulated labels and the purpose of the case collection.
- Each card/row needs a localized title, verified domain or explicit limitation, problem statement, actual role, provenance, key BA artifacts, and validation/result status.
- Rank by verified publishable evidence and role relevance, using the provisional order only when evidence strength is comparable.
- With at most three candidate cases, omit search, filters, pagination, and complex sorting from the MVP. No empty public cards for unverified ideas.
- When Vietnamese is active, its listing can include an approved Vietnamese synopsis of an English-only case, clearly marked **Bản đầy đủ hiện chỉ có tiếng Anh**. The action **Đọc bằng tiếng Anh** points directly to the English URL; it is not a Vietnamese detail page or an `hreflang` equivalent.
- If no case meets the release gate, hold the planned minimum release or revise its promise explicitly with owner approval. Do not present candidate outlines as finished work.

### Project detail

1. Breadcrumbs to locale homepage and projects.
2. Title plus visible provenance, domain, author role, and scope/date only if confirmed.
3. Quick Overview as defined in the strategy: problem, context, contribution, analytical outputs, decision, and validation/limitations.
4. Linked table of contents with stable section identities across languages.
5. All 19 Deep Dive sections, following the existing template and preserving evidence/assumption distinctions.
6. Accessible artifact summaries before optional larger diagrams/downloads. Clearly label language, synthetic/redacted status, format, and relevant requirement IDs.
7. Contribution/evidence notes where needed; not only hidden at the foot of the page.
8. Related reviewed work if relevant, then resume/contact.

Use shared section anchors such as `#business-context`, `#business-rules`, and `#validation-and-outcomes` for both languages. A long page should be skimmable through headings and summaries; essential content should not depend on hover, animation, or inaccessible image text. No wireframes are created now.

### Resume and contact

`/en/resume` and `/vi/resume` are recommended accessible HTML summaries that draw from the same verified profile facts. Offer approved PDF downloads only when supplied and privacy-reviewed; show language and revision date. File paths/names and actual resume content: `[USER INPUT REQUIRED]`. If only an English PDF exists, the reviewed Vietnamese resume page may link to it as **Tải CV tiếng Anh**; do not imply a Vietnamese file exists. Until an approved CV is available, withhold download links rather than make them dead controls.

Contact pages should expose approved professional channels, desired role discussion, and optional location/time zone/availability if verified. Email, professional-profile URLs, public phone preference, and availability are `[USER INPUT REQUIRED]`. Prefer a direct email link and optional copy action in the later implementation. Do not promise response times. No form backend, patient-data intake, analytics, or third-party embed is required by this strategy.

## 5. Language switching and translation availability

Publication and review states are owned by [Localization strategy](LOCALIZATION_STRATEGY.md). The rules below specify the reader-facing behavior.

| Situation | Required behavior |
| --- | --- |
| Both variants published | Switch to the same page/project ID in the chosen locale. Preserve a valid shared section anchor and any future locale-neutral listing state; never jump to homepage by default. |
| Section anchor absent in target | Open the equivalent page at its overview; do not navigate to a broken anchor. |
| English case has no approved Vietnamese variant | Keep the reader on English; explain **Bản tiếng Việt chưa được duyệt. Bạn có thể tiếp tục đọc bằng tiếng Anh hoặc xem danh sách dự án bằng tiếng Việt.** Offer explicit actions to stay or open `/vi/projects`. No silent redirect. |
| Vietnamese listing links an English-only case | Announce the destination language in the link before navigating. Active page language becomes English because `/en/...` is authoritative. |
| Direct visit to an unpublished/unknown `/vi/projects/[slug]` | Return an appropriate Vietnamese not-found state and actual 404 status, with an English equivalent link only if that project exists and is published. Do not serve English body content under a Vietnamese URL. |
| Unknown project in either locale | Localized not-found state with projects/home links. No fake project, homepage redirect, or invented alternate. |
| Vietnamese release not yet activated | Do not offer a working Vietnamese selection or publish Vietnamese routes, alternates, or sitemap entries. Any locale explanation must be truthful; drafts remain nonpublic. |
| Browser Back or shared link | Preserve normal history and the URL's explicit language. Do not force the reader back to a remembered locale. |

Use an accessible named control with current language exposed, keyboard-operable options, and clear unavailable-language messaging. After a real page change, manage focus consistently with the destination and preserve relevant context. Do not require reading both languages to understand the portfolio.

Example planned journey: `/en/projects/healthcare-appointment-management#business-rules` → `/vi/projects/healthcare-appointment-management#business-rules` only after that Vietnamese case is reviewed and published. The project ID, requirement IDs, facts, and provenance remain identical.

## 6. International SEO plan

No SEO implementation or live search performance is claimed. Production domain: `[USER INPUT REQUIRED]`. Validate the following after future implementation.

| Area | Proposed rule |
| --- | --- |
| Page identity | One canonical URL per published page per language. Use absolute URLs on the chosen production domain. |
| Canonical | Each substantive English/Vietnamese translation points to itself. Do not canonicalize Vietnamese pages to English. Keep redirects, internal links, and sitemap entries consistent with the chosen URLs. |
| Language alternates | For published equivalents, use reciprocal `en` and `vi` relationships, including each page itself. Use the equivalent English page as `x-default`, not the homepage for every case. |
| Missing translation | Omit unpublished variants from alternate sets and the sitemap. An English-only case has no `vi` alternate; do not link its alternate to the Vietnamese project index. |
| Language scope | Use language codes `en` and `vi`, without country variants until genuinely different regional content exists. |
| Metadata | Write a distinct title, meta description, and sharing description in the page's language, reflecting the same approved facts. Translate meaningful image descriptions; set document language and mark embedded other-language excerpts in future implementation. |
| Sitemap | Include only published, indexable canonical content pages. Exclude draft content, missing variants, redirects, not-found URLs, and section anchors as separate entries. |
| Discovery | Keep locale/project links crawlable and stable. Draft protection requires access controls or nonpublication; robots rules alone do not protect confidentiality. |

The alternate-link rules follow [Google's localized-version documentation](https://developers.google.com/search/docs/specialty/international/localized-versions), including reciprocal links and supported language codes. Canonical consistency follows [Google's canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls). The choice of English as each page's default is this portfolio's recommendation. These signals do not guarantee ranking or indexing.

Search-friendly title patterns, subject to verified scope:

| Content | English pattern | Vietnamese adaptation |
| --- | --- | --- |
| Home | `[USER INPUT REQUIRED] — Business Analyst focused on Healthcare IT` | `[USER INPUT REQUIRED] — Business Analyst định hướng CNTT y tế` |
| C1 | `Healthcare Appointment Management — BA Case Study` | `Quản lý lịch hẹn khám bệnh — Nghiên cứu tình huống BA` |
| C2 | `Healthcare Omnichannel Integration — BA Case Study` | `Tích hợp đa kênh trong dịch vụ y tế — Nghiên cứu tình huống BA` |
| C3 | `Employee Shift Scheduling — BA Case Study` | `Lập lịch ca làm việc cho nhân viên — Nghiên cứu tình huống BA` |

Add “Simulated” / “Mô phỏng” to title/description and page labels when applicable; never assign it before provenance is confirmed. Descriptions should summarize the actual problem, analysis focus, and artifact/validation status without keyword stuffing or invented impact. Example only if an original simulation is later authorized and completed: **A simulated BA case examining appointment booking rules, scheduling exceptions, and acceptance criteria.** / **Nghiên cứu tình huống BA mô phỏng về quy tắc đặt lịch, các tình huống ngoại lệ và tiêu chí chấp nhận.** These are draft patterns, not existing case descriptions.

## 7. Recruiter journey

This is a proposed journey for P1–P5, not observed user research. Readers may enter directly at a case or resume and must still find identity, provenance, and contact. Quick scanning and optional deeper review have equal support.

| Step | User goal | Questions | Information presented | Interaction requirements | Friction / design opportunity |
| --- | --- | --- | --- | --- | --- |
| 1. Land on homepage | Orient and establish language. | Where am I? Can I read this in my preferred language? | Name, approved role focus, navigation, available languages. | Fast readable entry; explicit locale links; preserve URL language. | Ambiguous identity or automatic language jump → immediate positioning and predictable language selection. |
| 2. Understand positioning | Decide initial role relevance. | Healthcare BA, systems analyst, or another role? | Approved headline, short summary, intended focus and limits. | Projects and resume reachable without completing a visual experience. | Generic slogans or inflated titles → concrete scope and verified title only. |
| 3. Identify BA competencies | Find a relevant skill with proof. | What can I inspect? | Competency groups with evidence links and provenance. | Direct jump to a case/section; readable on mobile and keyboard. | Long tool lists → show analytical work and a traceable example. |
| 4. Select featured case | Choose a useful example. | Is this relevant and real or simulated? | Problem, domain, author role, artifacts, validation status. | Descriptive case link; no mandatory filters or download; return path preserved. | Similar-looking generic cards → meaningful problem and evidence cues. |
| 5. Review problem and analysis | Understand problem framing and logic. | What is known? How was the cause identified? | Quick Overview plus context, goals, discovery, As-Is, root causes. | Anchored contents and readable summaries; equivalent-page language switch. | Dense prose or no context → layered reading with evidence boundaries visible. |
| 6. Examine deliverables and decisions | Assess BA quality and judgment. | Are requirements testable? Why this option? | To-Be, story map, requirements, rules, process artifacts, acceptance criteria, trade-offs. | Requirement-to-criterion links, text alternatives, optional approved downloads with format/language labels. | Unreadable diagrams or artifact dumping → short explanation of each decision and its value. |
| 7. Evaluate credibility | Check contribution and claims. | What did the author do? What was validated? | Provenance, personal vs team contribution, evidence references, outcomes/limitations, lessons. | Evidence notes near claims; resume/About accessible. | Unsupported metrics or confidential material → clear substantiation and honest gaps. |
| 8. Open resume/contact | Decide next recruitment action. | Can I share the CV or contact this person? | Approved resume, professional channels, optional verified availability/location. | Accessible HTML CV; labeled optional PDF; direct contact route. | Broken downloads, forced form, unclear language → concise approved options with working destinations. |

## 8. Later validation scenarios and acceptance

These are future acceptance scenarios, not test results:

- A reader can identify the intended BA focus and reach relevant evidence from each locale homepage.
- A direct case visitor can identify real/simulated status and personal contribution before the deep dive.
- Switching between published equivalents retains the same project and valid section; an unavailable translation produces an explanation and explicit choices.
- A Vietnamese index link to English-only content identifies the destination language before selection.
- Unknown and unpublished routes do not return a misleading successful case page or appear as alternates.
- Resume facts and case outcomes agree in both languages and with the approved evidence record.
- Keyboard and assistive-technology users can follow primary navigation, contents, language choice, and contact; diagrams have readable alternatives.
- Published locale pages have consistent title/description, canonical, alternate sets, and sitemap membership.

Phase 2.1 completes the structure and behavior specification. Content evidence, actual user validation, implementation, accessibility checks, and live SEO checks remain pending. Do not start Phase 2.2 without owner approval.
