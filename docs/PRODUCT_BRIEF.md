# BA Healthcare Portfolio — Product Brief

## Vision

An interactive, professional Healthcare Business Analyst portfolio that demonstrates structured problem solving, requirements engineering, process improvement, and systems thinking.

The portfolio should help readers understand how the analyst frames a problem, clarifies uncertainty, models workflows, evaluates alternatives, specifies requirements, and validates business value. Credibility comes from traceable evidence and honest boundaries around experience.

## Bilingual market positioning — Phase 2.1

The owner has approved targeting both Vietnamese and international recruitment markets through one bilingual portfolio. English is the primary and default language; Vietnamese is the secondary supported language. Both versions must sound natural and professional while communicating the same facts, project scope, personal contribution, and verified outcomes.

Recommended positioning: **Business Analyst focused on Healthcare IT, Business Process Improvement, Requirements Engineering, and Systems Analysis.** Vietnamese adaptation: **Business Analyst định hướng CNTT y tế, cải tiến quy trình nghiệp vụ, phân tích và quản lý yêu cầu, và phân tích hệ thống.** This describes the intended professional focus, not verified seniority, employment, experience, credentials, or achievements. Missing personal information is marked `[USER INPUT REQUIRED]` in planning documents and must not appear as placeholder public copy.

The portfolio should demonstrate BA competence through analytical rationale and evidence-linked artifacts. Visual quality supports comprehension; it does not replace discovery, process analysis, requirements, decisions, or validation. Target role families include Healthcare IT/IT Business Analyst, Business Systems Analyst, Business Process Analyst, and product-facing BA; actual target level and specific markets are `[USER INPUT REQUIRED]`.

Complete English content first. Activate Vietnamese only after its core pages and selected featured narrative are reviewed, with clear handling of any additional English-only cases. A translated website does not itself establish the owner's language proficiency.

## Target users

| Audience | What the portfolio should help them assess |
| --- | --- |
| Recruiters | Relevant capabilities, professional profile, and an accessible route to contact. |
| Hiring Managers | Depth of analysis, individual contribution, evidence quality, and delivery judgment. |
| Product Managers | Discovery, prioritization, requirements clarity, and solution trade-offs. |
| Healthcare IT Leaders | Workflow understanding, stakeholder handoffs, systems thinking, privacy, and operational constraints. |

Phase 2.1 refines these audiences into five planning personas: Vietnamese IT Recruiter, Vietnamese Healthcare IT Hiring Manager, International Technical Recruiter, International Senior BA / BA Lead, and International Product or Healthcare IT Manager. Their goals and journeys are hypotheses, with external evidence and its limitations separated in [PORTFOLIO_STRATEGY.md](PORTFOLIO_STRATEGY.md). No recruiter interviews or hiring outcomes are claimed.

## Candidate case study topics

These are candidate topics only. None establishes verified employment, project participation, delivered systems, or outcomes. Each future case must explicitly identify whether it is real or simulated.

| Candidate | Possible questions to investigate, not established findings |
| --- | --- |
| Healthcare Appointment Management | How could scheduling, rescheduling, cancellation, capacity conflicts, and patient communications be coordinated? |
| Healthcare Omnichannel Integration | How could channel handoffs, identity matching, consent preferences, duplicate requests, and delivery failures be handled? |
| Employee Shift Scheduling | How could availability, coverage, qualifications, shift swaps, and scheduling conflicts be analyzed? |

Employee Shift Scheduling is a workforce-operations candidate with an unverified industry. Do not classify it as Healthcare unless its actual setting is confirmed. The provisional presentation order is Appointment Management, Omnichannel Integration, then Shift Scheduling, but the strongest verified, relevant, publishable evidence determines the final featured order. All candidates' real/simulated provenance, personal contribution, artifacts, and outcomes are `[USER INPUT REQUIRED]`.

Any organizational policy, clinical constraint, integration standard, or jurisdiction-specific rule requires supporting evidence before being described as applicable.

## Scope and phase boundary

Phase 1.3 established the maintainable directory structure, project-wide agent instructions, Healthcare BA storytelling skill, foundation documentation, and passing configured lint/build checks.

The current owner request authorizes **Phase 2.1 — Portfolio Strategy & Information Architecture** only. Its deliverables are professional positioning, audience analysis, bilingual information architecture, recruiter journey, case-study strategy, localization policy, content inventory, and privacy/credibility rules. Draft profile copy and candidate analysis hypotheses support planning; they are not verified personal biographies or completed case studies.

The existing starter UI remains in place. Reserved route directories contain `.gitkeep` markers and expose no pages. This phase does not write application code, implement UI or internationalization, add dependencies, modify installed Agent Skills, publish content, or begin Phase 2.2. Stop after Phase 2.1 for owner approval.

## Planned information architecture

| Location | Responsibility |
| --- | --- |
| `src/app` | App Router composition, root layout, metadata, and future route-level states. |
| `src/app/about` | Reserved for the owner-approved professional profile. |
| `src/app/projects` | Reserved for a case-study index. |
| `src/app/projects/[slug]` | Reserved for individual case studies; future unknown slugs must resolve appropriately to not found. |
| `src/app/contact` | Reserved for approved contact information or interactions. |
| `src/components/layout` | Shared navigation and page framing. |
| `src/components/sections` | Composable page sections. |
| `src/components/ui` | Reusable, accessible UI primitives. |
| `src/components/case-studies` | Requirements, process, evidence, and case-study presentation components. |
| `src/content/projects` | Sanitized, publishable project narratives and artifact descriptions. |
| `src/data` | Shared structured data such as approved navigation and profile records. |
| `src/lib` | Focused utilities and content access, without UI coupling. |
| `src/types` | Shared domain and component contracts when needed. |

Routes compose components; components consume typed content or props. Generic UI does not depend on route modules. Content should remain independent of presentation. Choose a content format or loader only when actual case content requires it; no CMS or MDX dependency is needed now.

The table above records the preserved Phase 1.3 scaffolding, not implemented bilingual routing. Phase 2.1 recommends `/en` and `/vi` with equivalent `/about`, `/projects`, `/projects/[slug]`, `/resume`, and `/contact` pages. Expertise is a homepage anchor (`#expertise`), not an additional route. The root is proposed to default deterministically to `/en`; shared project identities/slugs preserve page context across languages. Only reviewed published translations should be linked as equivalents. Future route organization/migration requires an approved implementation phase and the installed Next.js documentation.

Detailed page structures, complete sitemap, language-switching/missing-translation behavior, and SEO requirements are in [INFORMATION_ARCHITECTURE.md](INFORMATION_ARCHITECTURE.md). Canonical, alternate-language, and metadata rules are a plan only; no live SEO readiness or indexing is asserted.

## Existing technical baseline

Inspected during Phase 1.3:

- Next.js 16.4.0 with React/React DOM 19.3.0 and the `src/app` App Router.
- TypeScript 5.9.3 installed, strict mode enabled, bundler module resolution, Next.js plugin, and `@/*` mapped to `src/*`.
- Tailwind CSS 4.3.3 and `@tailwindcss/turbopack` 4.3.3 installed; the CSS loader is configured in `next.config.ts`, and `globals.css` imports Tailwind and is imported by the root layout.
- ESLint 9.39.5 with Next.js 16.4.0 Core Web Vitals and TypeScript flat configurations. Installed agent tooling is excluded from application lint scope.
- Existing npm scripts: `dev`, `build`, `start`, and `lint`. The build performs TypeScript checking; lint is run separately.

The root layout currently loads Geist fonts through `next/font/google`, which can require network access during a build. Starter metadata and styling are retained for a later approved UI phase. No dependency changes are planned for Phase 1.3.

## Content and evidence policy

Use `CASE_STUDY_TEMPLATE.md` and the `ba-portfolio-storytelling` skill. Label real and simulated work, identify the author's actual role, and distinguish assumptions, proposals, targets, and observed outcomes. Publish no invented metrics or confidential healthcare information. Use synthetic examples where disclosure is not appropriate.

Maintain one shared factual/evidence record with localized English and Vietnamese narratives. Keep project IDs, scope, requirement/rule/criterion IDs, personal contribution, numbers, and validation status consistent. Use the approved glossary and source-revision review rules in [LOCALIZATION_STRATEGY.md](LOCALIZATION_STRATEGY.md). Preserve the 19-section case-study structure with a concise Quick Overview and optional Deep Dive. Unavailable evidence is stated honestly, never invented to fill a section.

The minimum content plan is a complete approved English core and one strongest publishable case, followed by reviewed Vietnamese core content before language activation. A clearly labeled, independently authored simulation may demonstrate analysis if its provenance is confirmed; it cannot establish employment or production outcomes. Release priorities, ownership, evidence gaps, and missing user inputs are recorded in [CONTENT_INVENTORY.md](CONTENT_INVENTORY.md).

## Acceptance and future evaluation

Phase 1.3 is accepted when all requested directories and documents exist, the managed Next.js instructions and installed skills are preserved, the new skill has valid frontmatter and all 19 required sections, and `npm run lint` and `npm run build` pass without disabling application checks.

Future portfolio evaluation should assess whether readers can find relevant work, follow requirement-to-evidence traceability, understand the author's contribution, and navigate accessibly on mobile and desktop. These are evaluation intentions, not measured outcomes. No performance, engagement, or hiring success metrics have been established.

Phase 2.1 acceptance requires the four strategy documents and this updated brief to cover the requested tasks consistently; bilingual copy options, all five personas, the recruiter journey, the candidate-case evaluation, terminology, evidence/privacy rules, and release gates must be present. Confirm that only documentation changed and that existing application files, skills, and dependencies were preserved. Personal fact verification, bilingual reviewer approval, actual usability/accessibility testing, and technical SEO implementation are later content/release gates, not claims made by completing the strategy. Phase 2.2 remains unauthorized until the owner approves it.
