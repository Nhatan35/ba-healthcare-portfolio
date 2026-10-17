import type { CaseStudySection } from "@/types/case-study";

function missing(sectionId: string, sectionTitle: string, sectionSummary: string, subsections?: readonly CaseStudySection[]): CaseStudySection {
  return { sectionId, sectionTitle, sectionSummary, sectionStatus: "Missing", contentBlocks: [], evidenceReferences: [], verificationStatus: "unverified", publicationPermission: "unknown", subsections };
}

// The canonical 19-section template; nested topics preserve the broader content hierarchy.
export const caseStudySections: readonly CaseStudySection[] = [
  missing("business-context", "Business context", "The organization, service setting, timeframe, and real or simulated provenance have not been established."),
  missing("problem-statement", "Problem identification", "No observed problem, affected population, baseline, or source evidence has been supplied."),
  missing("business-goals", "Business goals", "Business goals, measures of success, and stakeholder agreement are not documented."),
  missing("stakeholders", "Stakeholder analysis", "No stakeholder roles, decision rights, or engagement records have been verified."),
  missing("discovery", "Discovery and clarification", "No interviews, observations, workshops, or discovery findings have been supplied."),
  missing("as-is", "As-Is process", "The current workflow, handoffs, systems, and exceptions are unknown. No current-state diagram is available."),
  missing("root-cause", "Root cause analysis", "No causal analysis or evidence separating symptoms from causes is available."),
  missing("to-be", "To-Be process", "No future-state workflow, agreed changes, or implementation boundary has been documented."),
  missing("user-story-mapping", "User story mapping", "No user story map, prioritized journeys, or release slices have been supplied."),
  missing("business-requirements", "Business requirements", "No agreed business requirements or traceability to stakeholder needs is available."),
  missing("requirements", "Functional and non-functional requirements", "Requirements and system boundaries need evidence before they can be presented as project work.", [
    missing("functional-requirements", "Functional requirements", "No verified behaviors, inputs, outputs, or requirement identifiers have been supplied."),
    missing("non-functional-requirements", "Non-functional requirements", "No agreed quality attributes, constraints, or measurable thresholds are available."),
    missing("system-interactions", "System interactions", "Systems, interfaces, data ownership, and failure handling remain unknown."),
  ]),
  missing("business-rules", "Business rules", "No policies, rule owners, decision tables, or approved rule sources have been supplied."),
  missing("process-flow", "BPMN / process flow", "No authored or permitted Business Process Model and Notation (BPMN) diagram or other process flow is available."),
  missing("wireframes", "Wireframes", "No project wireframes, design rationale, or permission to share artifacts has been supplied."),
  missing("exceptions", "Exceptions and edge cases", "No observed exception paths or agreed recovery behavior have been verified."),
  missing("acceptance-criteria", "Acceptance criteria", "No agreed acceptance criteria, linked requirements, or acceptance results are available."),
  missing("trade-offs", "Decisions and trade-offs", "No evaluated options, decision records, constraints, or personal contribution have been verified."),
  missing("validation-outcomes", "Validation and outcomes", "Validation activities and outcomes must be supported separately; neither has been evidenced.", [
    missing("evidence-validation", "Evidence and validation", "No review records, test results, stakeholder sign-off, or publishable evidence references are available."),
    missing("outcomes", "Outcomes", "No delivered change, measured result, or attributable business impact has been verified."),
  ]),
  missing("lessons", "Lessons learned", "No evidence-based personal reflection or lessons from completed work have been supplied."),
];
