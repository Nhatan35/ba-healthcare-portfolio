# Phase 3.2B — Owner Review Corrections

Review date: 15 October 2026. Project root: `C:\BA\Portfolio\ba-healthcare-portfolio`. Continue the accepted uncommitted working tree; no deployment or Phase 3.2C work.

## 1. Original findings and disposition

The owner found the visual design acceptable but the long sequence of mostly Missing sections insufficiently useful. The requested correction was a concise, distinct candidate analysis before an accessible full preparation checklist. The owner also reported a red development “1 Issue” indicator and subsequently confirmed a root `<html>` class hydration mismatch in the affected browser.

The editorial corrections are implemented and controlled browser regressions pass. The follow-up investigation identifies an installed **eJOY AI Dictionary 7.1.51** content script adding `mdl-js` to the root HTML element. Replaying its exact Material Design Lite script in clean Chrome reproduces the same hydration error; removing the replay restores clean hydration. This is an extension-side mechanism, not an application/font defect. No application code fix is required. Confirmation that the owner has disabled the injector and reloaded the affected tab remains pending; see section 14 for evidence and the distinction between reproduction and owner-profile remediation.

## 2. C1 — Appointment workflow analysis

The business problem is framed as an investigation into competing appointment requests and limited provider availability. Six proposed questions cover concurrent requests for one slot, lifecycle transitions, availability/capacity constraints, cancellation, safe rescheduling, authorized overrides, and escalation.

The proposed approach moves from stakeholder discovery through As-Is mapping, rules, To-Be exploration, requirements, and acceptance criteria. Required evidence includes permitted scheduling examples, policies and ownership, role permissions, contribution, and validation. Proposed deliverables are lifecycle/process maps, a scheduling decision table, and traceable requirements/acceptance criteria. No policy, hospital, completed work, metric, or outcome is invented. C1 remains the provisional featured candidate.

## 3. C2 — Omnichannel systems and integration analysis

The overview investigates retaining request context and consistent status across boundaries. Six proposed questions cover authoritative state ownership, cross-channel field/identifier mapping, duplicates, rejected updates/retries, out-of-order events, and integration acceptance criteria.

The proposed sequence covers context, boundaries, data mapping, application programming interface (API)/event contract questions, exceptions, and integration criteria. Evidence would need permitted system/lifecycle descriptions, sanitized specifications, authorship, and validation. Context/ownership diagrams, mapping/question registers, and exception/acceptance scenarios remain proposed deliverables. No real hospital information system, contact center, vendor implementation, or confidential integration is claimed.

## 4. C3 — Workforce scheduling and decision rules

Six proposed questions address availability/eligibility, overlapping shifts, branches/legal entities where applicable, modifications after Human Resources (HR) locks registration, shift-swap approval, and attendance dependencies/exceptions. The proposed sequence covers stakeholders, constraints, roles/permissions, workflow, rules, and acceptance criteria.

Evidence would need industry/context confirmation, policy ownership, permitted scheduling/approval rules, attendance dependencies, contribution, and validation. Constraint/permission catalogues, workflow maps, and business-rule/acceptance artifacts are expressly proposed. **Industry and healthcare provenance remain unverified**; this is not presented as completed hospital or healthcare implementation experience.

## 5. Editorial structure and UI changes

Each detail page presents these five sections before the checklist:

1. Business Problem to Investigate.
2. Key BA Questions.
3. Proposed Analysis Approach.
4. Evidence & Deliverables Required.
5. Verification & Publication Status.

The existing 19 canonical sections and five nested topics remain in their original order, with their stable IDs, evidence gaps, and independent section statuses. The native **Full BA Analysis Preparation Checklist** is collapsed by default. Its visible summary states that 18 sections lack supporting content, one contains draft discovery questions, and none is verified or approved for publication. The 19-section index is inside that disclosure; the primary sidebar links to the visible overview and checklist heading. Nested discovery notes remain a native disclosure.

The typed `CandidateAnalysis` record holds the proposed problem, questions, approach, evidence requirements, proposed deliverables, and provenance caveat. It is keyed by existing candidate IDs. Questions are reused in the overview and discovery preparation section. Existing title/slug/status records remain the single source of identity. No CMS, database, client-state framework, or dependency is added.

The library already distinguishes healthcare workflows, systems/integration, and workforce decision rules; its cards and definitions were preserved unchanged. Candidate, simulated, and verified definitions remain explicit and are linked from each detail overview.

At 1440px, total rendered document height changes from 6124 to 4215px for C1, 6124 to 4267px for C2, and 6055 to 4172px for C3, with the checklist collapsed. These are local UI measurements, not project outcomes or business metrics. The overview now supplies meaningful proposed analysis instead of displaying 19 consecutive empty states.

## 6. Preserved system and evidence safeguards

- Homepage, shared navigation/header/footer, featured/standard cards, routes/slugs, existing candidate records, colors, Manrope/Geist, and responsive breakpoints remain unchanged.
- All candidates remain **Draft · Unverified**. No candidate was promoted to a simulated or verified case.
- Personal contribution, project role, delivered artifacts, stakeholder validation, measured outcomes, business impact, provenance, and publication permission remain unknown or explicitly unsupported.
- Every proposed deliverable has a visible “Proposed:” label. Method sequences and questions are future investigation plans, not completed professional work.
- Section approval does not grant project publication permission; source code and a local preview do not grant permission either. No fake dates, clients, testimonials, financial results, compliance claims, or artifacts were introduced.
- Package files, dependencies, framework/ESLint configuration, globals, all 251 installed skill files, and unrelated user edits are preserved by comparison with a pre-correction hash snapshot. Previous phase reports remain historical records rather than being overwritten.

## 7. Development issue investigation

### Confirmed findings

The existing development server at `http://localhost:3000` has a real React hydration error in an affected browser session. The saved log and Next.js built-in `/_next/mcp` `get_errors` output both point to `RootLayout → html` and a className mismatch. The runtime diagnostic is therefore not merely a screenshot artifact. Its root cause cannot be inferred from the truncated strings.

`get_compilation_issues` returns an empty issues array; no configuration or compilation error is reported. A fresh isolated Edge profile renders all five pages with the development badge's `data-error="false"`, no browser console errors/warnings, and no hydration mismatch. Existing diagnostics remain enabled.

### Root layout and full class comparison

`src/app/layout.tsx` calls Geist and Manrope at module scope with fixed configuration. The root class string is a deterministic combination of the two font variables plus `h-full antialiased`; there are no time-dependent values, random values, browser branches, local storage reads, or application root-class mutation code. Font configuration and dependencies are unchanged.

In the clean profile, full server and browser class values are identical, character for character:

```text
Development server AND clean browser:
geist_a71539c9-module__T19VSG__variable manrope_27cfd987-module___Y-2BW__variable h-full antialiased

Production server AND clean browser:
T19VSG_variable _Y-2BW_variable h-full antialiased
```

Development and production use different emitted class names, but each mode's server and browser agree. Ten comparisons cover cached and cache-disabled loads in both modes, plus two Fast Refresh checks. The exact character-difference arrays are empty in all ten comparisons. A root-class MutationObserver installed before page scripts recorded no class mutations. Controlled Fast Refresh was exercised using a temporary comment in an already-modified detail component; the exact original bytes were restored and checked afterward.

At the initial review, the affected browser's full observed class was unavailable through the truncated React error or the exposed Next.js diagnostic tools. The owner subsequently identified the additional `mdl-js` token. Inspection of local Chrome extension code and a controlled replay now identify its source and reproduce the error; see section 14. The agent's browser connection controls only the isolated test profile, not the owner's browser. No owner extension setting was changed, no user cache was cleared, and no `suppressHydrationWarning` was added.

The [Next.js hydration guidance](https://nextjs.org/docs/messages/react-hydration-error) lists extensions modifying HTML as one possible cause. The follow-up attribution here is based on the installed manifest, exact script source, owner-reported token, and successful controlled reproduction, rather than that generic list of possibilities.

### Separate confirmed warning and actual fix

The development log also reports smooth scrolling without the expected root attribute. Added only `data-scroll-behavior="smooth"` to `<html>`, as recommended by the [official Next.js warning guidance](https://nextjs.org/docs/messages/missing-data-scroll-behavior) and supported by the installed `disable-smooth-scroll.js`. It lets Next.js coordinate the existing CSS with route transitions; anchor scrolling and reduced-motion preferences remain intact. The warning is absent in the subsequent clean-profile navigation checks. **This does not fix or suppress the separate class hydration error.**

The first test harness visited development through `127.0.0.1`, which triggered Next.js's dev-resource cross-origin protection. The investigation switched to the server's `localhost` origin and successfully connected HMR; no `allowedDevOrigins` configuration was added. This harness-origin warning is distinct from the owner's hydration error.

## 8. Responsive and accessibility regression

Actual tests used installed headless Edge 155 on Windows through the Chrome DevTools Protocol. Production preview: `http://127.0.0.1:3100`. No browser automation package was installed.

| Check | Measured result |
| --- | --- |
| 1440 / 768 / 390 / 320px | All five pages pass; content/scroll widths respectively 1425 / 753 / 375 / 305px, accounting for the ordinary scrollbar. |
| Expanded state | All three detail pages pass overflow checks with all disclosures open at all four widths. |
| Homepage/library preservation | Exact text and geometry match the pre-correction baseline at all four widths. |
| Initial hierarchy | Exactly five candidate-overview headings, six questions, six method steps, three Proposed deliverables, checklist closed, and zero visible Missing badges on each detail page. |
| Keyboard | Skip link focuses main; Enter/Space open and close outer checklist and nested notes; 3px visible focus outlines. |
| Mouse/touch | Mouse exercised checklist anchors, library → C1 → related C2 → Back to Projects. Emulated touch opens the checklist at 320px. |
| Existing fragment links | A direct `#discovery-heading` URL reveals the collapsed checklist and its target in Edge. |
| Heading semantics | Accessibility-tree checks on all three candidates, collapsed and expanded, find one h1 and no skipped heading levels. |
| Targets | All 33 visible detail links/summaries sampled at 320px in expanded state measure at least 44px high. |
| Reduced motion | `scroll-behavior: auto`; zero-duration link transitions. |
| Actual 200% browser zoom | All five pages reflow, including expanded disclosures; 1440px outer window, 707px inner width, 699px client/scroll width, device pixel ratio 2, visual viewport scale 1. Keyboard toggling works. Browser zoom was restored. |
| Server content without JavaScript | Overview, checklist markup, and canonical content remain in the server-rendered document. |
| Navigation | All 100 collected internal route/fragment destinations resolve. Three candidate URLs return 200; unknown candidate returns HTTP 404. |
| Runtime in clean profile | No console errors/warnings or exceptions in the controlled production regression. This does not override the affected-session error above. |

Screenshots were captured for all candidates on desktop and C1 at each requested width; desktop and narrow-mobile content were visually inspected. A settled-frame capture confirms the 320px collapsed page height is 7657px and returns to that height after opening/closing all disclosures (`candidate-0-320-stable.png`, `questions-320.png`). These checks supplement source review against the [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md), not a certification of complete conformance.

## 9. Exact technical results

| Command / script | Result |
| --- | --- |
| `npm run lint` | **PASS — exit 0**, no lint warnings/errors. |
| `npm run build` | **PASS — exit 0**, TypeScript and static generation complete; all three detail paths statically generated. |
| `verify.mjs` | **PASS — exit 0**: 20 page/viewport combinations, content/closed-state assertions, expanded overflow, keyboard, mouse, touch, links, 404, reduced motion, preservation, and console. |
| `extra-checks.mjs` | **PASS — exit 0**: actual 200% zoom, six heading-tree checks, target heights, and server content without JavaScript. |
| `dev-investigation.mjs` | **PASS — exit 0** for clean-profile visits/navigation and server/browser class equality on five pages. |
| `hydration-checks.mjs` | **PASS — exit 0** for ten controlled class comparisons, cache variants, observed mutations, and Fast Refresh; **not a pass for the affected browser**. |
| Next.js `get_compilation_issues` | No compilation issues. |
| Next.js `get_errors` | **Affected session still reports the root class hydration error.** No blanket runtime PASS claimed. |
| `preservation.mjs` | **PASS — exit 0**, changes limited to the listed files; all installed skills and unrelated existing files preserved. |
| `git diff --check` | **PASS — exit 0**; existing LF/CRLF notices only. |

Builds use the established approved network access for Google fonts. Offline font fetching remains outside this correction. Lint rules, type checks, and diagnostics remain enabled. The final source is identical to the tested implementation after the temporary hot-reload comment was restored.

Local evidence and scripts: `%TEMP%\ba-owner-3-2b-q3qCO6`, including pre-edit hashes/backups, `baseline-results.json`, `qa-results.json`, `extra-results.json`, `dev-results.json`, `hydration-results.json`, `mcp-diagnostics.json`, `preservation-results.json`, and screenshots. The scripts use an isolated browser debugging port 9223; temporary artifacts are not application dependencies or published assets.

## 10. Tests not run and limitations

- No native screen-reader session, physical touch device, Safari, or Firefox testing.
- The affected tab has not been directly controlled. Its extra token was owner-reported; local extension code/registration and isolated script replay establish the mechanism. The owner's extension-off/reload comparison has not yet been received. No user-cache cause or application/font defect is claimed.
- The original screenshot itself was not attached to this request; its reported error is corroborated by actual session diagnostics.
- No deployment, publication, or end-user outcome testing.
- Browser measurements do not establish business evidence, accessibility certification, or owner acceptance.

## 11. Publication blockers

All three cases still require confirmed provenance, actual role/contribution, permitted source evidence, authored deliverables, validation, and disclosure approval. C3 additionally needs industry confirmation before any healthcare-experience claim. Any future metrics need sources, baselines, definitions, measurement periods, and attribution. None is supplied here.

## 12. Files changed in this correction

| File | Change |
| --- | --- |
| `src/content/projects/candidate-analyses.ts` | New typed candidate-specific proposed analysis records. |
| `src/content/projects/preparation-questions.ts` | Six concrete questions per candidate, shared between overview and checklist. |
| `src/types/case-study.ts` | Add `CandidateAnalysis` and its reference on the assembled study. |
| `src/lib/case-studies.ts` | Compose candidate analysis by existing ID. |
| `src/components/case-studies/case-study-detail.tsx` | Five-section overview, visible safeguards, collapsed checklist, revised section navigation. |
| `src/components/case-studies/case-study-detail.css` | Scoped prose/list/disclosure styling using existing tokens and breakpoints. |
| `src/app/layout.tsx` | Single smooth-scroll data attribute; fonts and class expression unchanged. |
| `docs/DESIGN_SYSTEM.md` | Append owner-review hierarchy and interaction decision. |
| `docs/PHASE_3_2B_OWNER_REVIEW.md` | This report. |

No dependency updates. Existing accepted modifications elsewhere remain preserved and uncommitted.

## 13. Acceptance and Phase 3.2C entry conditions

The distinct overviews, progressive disclosure, evidence labels, route behavior, preservation checks, and controlled technical/browser checks are ready for owner review. The hydration follow-up identifies and reproduces the extension-side mechanism. No speculative application fix was made; the affected owner's browser still needs the injector disabled or a clean profile for local testing.

Before Phase 3.2C: obtain explicit owner acceptance of these corrections, confirm or knowingly document the owner-profile extension workaround, define the next phase's scope, and obtain appropriate sanitized evidence/provenance inputs for any narrative work. Public release additionally requires separate publication permission and release review. No next-phase work is authorized by this report.

**PHASE 3.2B OWNER CORRECTIONS — COMPLETE FOR REVIEW**

Editorial corrections, controlled regressions, and extension-mechanism diagnosis are complete for owner review. This does not claim the owner has changed their browser settings or that project evidence is publication-ready. No deployment or Phase 3.2C work has occurred.

## 14. Follow-up: `mdl-js` extension attribution and reproduction

### Source of the mutation

The owner reported that the affected browser's root class includes an additional `mdl-js`, absent from the server response. The pasted middle of the browser value remains abbreviated, so the report does not claim a character-by-character capture of that original tab. The controlled reproduction below records the complete values.

Read-only searches found no `mdl-js`, `material-design-lite`, or `componentHandler` in application source, public assets, dependency declarations, installed dependency JavaScript/JSON/source maps, or compiled application JavaScript/source maps. `rg` returned exit 1 for these searches, meaning no matches, with no search errors. None of the 27 unique application script URLs inspected across development and production contained the identifiers.

The same search of local Chrome extension directories found **eJOY AI Dictionary**, version **7.1.51**, extension ID `amfojhdiedpdnlijjbhjnhokbnohfdfb`, installed under Chrome `Profile 8`. Chrome's local state listed Profile 8 among active profiles. Targeted extension metadata showed no disable reasons. No history, cookies, credentials, or unrelated profile content was collected or copied.

Its manifest registers `captureToText/assets/js/material.min.js` as a content script for `*://*/*` and `file:///*`, running at `document_end` in the top-level frame. The script identifies itself as **Material Design Lite 1.0.4** and registers this behavior on window load:

```js
document.documentElement.classList.add("mdl-js");
componentHandler.upgradeAllRegistered();
```

The mutation changes the shared page DOM, even though a Chrome content script executes in an isolated JavaScript world. In the reproduced load sequence, this happens before React's hydration comparison. It is unrelated to the deterministic Geist/Manrope configuration. The separate smooth-scroll attribute fix does not address or conceal this mutation.

### Controlled Chrome comparison

Used installed **Chrome 155.0.8059.40** with a new isolated temporary profile. The owner's profile and extension settings were not modified. No full extension was installed in the test profile; only the identified local script was replayed in a named isolated execution world at DOMContentLoaded, allowing its original window-load handler to run.

1. Clean Chrome: all five routes in development and production produced matching server/browser classes, no `mdl-js`, and no console warnings/errors — ten route/mode comparisons.
2. Replay: executed the exact installed Material Design Lite script bytes. At both normal CPU speed and 4× CPU throttling, the script added `mdl-js` and React emitted the same root-HTML class hydration error and component trace.
3. Removal: removed the replay registration and reloaded. The root class returned to the server value and subsequent development navigation produced no hydration errors.

The replay's exact values are:

```text
Server (100 characters):
geist_a71539c9-module__T19VSG__variable manrope_27cfd987-module___Y-2BW__variable h-full antialiased

Browser with the installed MDL script replayed (107 characters):
geist_a71539c9-module__T19VSG__variable manrope_27cfd987-module___Y-2BW__variable h-full antialiased mdl-js
```

Characters 0–99 are identical. The extra suffix starts at zero-based index 100: a space followed by `mdl-js` (seven characters total). This isolates the root mutation and reproduces the originally truncated React error without modifying application code. Script SHA-256: `48f81f969ef1183b1e1041fd54f412ffac273e8337b9dca09b92a7d3b415f419`.

### Classification and action

**Confirmed extension-side mechanism:** the installed eJOY content-script registration supplies the exact DOM mutation, and its script reproduces the observed token and hydration failure. No application-side or font defect was found. The final owner-profile on/off comparison was requested and remains pending; the agent does not claim to have directly observed or changed the original tab's extension execution.

For local development, use a clean Chrome profile or temporarily turn off eJOY and reload the affected page. Chrome documents extension enable/disable and site-access controls in [Manage your extensions](https://support.google.com/chrome_webstore/answer/2664769?hl=en). No extension files were edited or removed. No app-side class removal, delayed hydration, warning suppression, font replacement, dependency change, or diagnostics disablement was added.

### Follow-up verification

| Check | Actual result |
| --- | --- |
| `npm run lint` | **PASS — exit 0**, no warnings/errors. |
| `npm run build` | **PASS — exit 0**, all three candidate routes statically generated; no build warnings. |
| `investigate.mjs` | **PASS — exit 0**: ten clean route/mode class comparisons, 27 served scripts inspected, two successful reproductions of the expected extension-induced error, and clean class restored after replay removal. Expected reproduction errors are intentional evidence, not claimed error-free application runs. |
| `regression.mjs` | **PASS — exit 0**: 20 Chrome page/viewport checks (1440/768/390/320), no overflow or injected class, expected closed checklist, keyboard disclosure and 3px focus, valid routes 200, unknown slug 404, and zero console errors/warnings after replay removal. |
| Original profile extension-off/reload | **Pending owner result**; not claimed tested. |

Only this review document changed in the follow-up. Application files, fonts, packages, installed skills, and all prior Phase 3.2B edits remain byte-for-byte unchanged from the follow-up snapshot. Existing Edge 200% zoom and accessibility results above remain valid for the unchanged source; this follow-up adds Chrome coverage rather than claiming physical-device or native screen-reader testing.

Local evidence: `%TEMP%\ba-mdl-diagnosis-n4VVH4`, including `search-results.json`, `investigation-results.json`, `investigation-console.txt`, `regression-results.json`, and the preservation hashes. Script replay and debugging used the isolated Chrome profile on port 9224. These are temporary local diagnostic artifacts, not deployed portfolio content.
