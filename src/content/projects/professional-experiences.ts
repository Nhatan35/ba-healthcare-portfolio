import type { ContentBlock, ProfessionalActivity, ProfessionalExperience } from "@/types/case-study";
import type { ProfessionalProjectDraft } from "@/types/project";
import { preparationQuestions } from "./preparation-questions";

const context: ProfessionalActivity = {
  text: "I joined an integration project that was already in progress.",
  claimReferences: ["O-01"],
};
const scope: ProfessionalActivity = {
  text: "The scope of my work includes inbound and outbound workflows and related customer relationship management (CRM) processes.",
  claimReferences: ["O-03"],
};
const personalContribution: ProfessionalActivity = {
  text: "I coordinate integration requirements and participate in cross-team requirements discussions.",
  claimReferences: ["O-02", "O-05"],
};
const workflowAnalysis: ProfessionalActivity = {
  text: "My work includes analyzing inbound and outbound workflows and related CRM processes.",
  claimReferences: ["O-03"],
};
const apiCoordination: ProfessionalActivity = {
  text: "I work with an integration partner to clarify application programming interface (API) requirements and information needed for the integration.",
  claimReferences: ["O-02"],
};
const reportedArtifacts = {
  text: "I have created flowcharts, work timelines, and weekly progress reports as part of this project.",
  types: ["Flowcharts", "Work timelines", "Weekly progress reports"],
  claimReferences: ["O-04"],
} satisfies ProfessionalExperience["reportedArtifacts"];

function attested(activity: ProfessionalActivity): ContentBlock {
  return { kind: "paragraph", classification: "Owner-attested activity", ...activity };
}

export const professionalExperiences: Readonly<Record<ProfessionalProjectDraft["id"], ProfessionalExperience>> = {
  C2: {
    context,
    scope,
    personalContribution,
    workflowAnalysis,
    apiCoordination,
    reportedArtifacts,
    openQuestions: preparationQuestions.C2,
    evidenceLimitations: {
      text: "My participation and activities are owner-attested. Supporting project artifacts have not been independently reviewed for this portfolio. Implementation outcomes and publication permission remain unconfirmed.",
      claimReferences: ["O-01", "O-02", "O-03", "O-04", "O-05", "O-06"],
    },
    sectionOverrides: {
      "business-context": {
        sectionSummary: "Participation in an ongoing integration project is owner-attested. Dates, organizational context, and the full project boundary have not been supplied.",
        sectionStatus: "Draft",
        contentBlocks: [attested(context), attested(scope)],
      },
      stakeholders: {
        sectionSummary: "Integration-partner coordination and cross-team discussions are owner-attested. A stakeholder map and decision authority have not been supplied.",
        sectionStatus: "Draft",
        contentBlocks: [attested(personalContribution)],
      },
      discovery: {
        sectionSummary: "Requirements coordination and meeting participation are owner-attested. The questions below are for future verification, not completed requirements or findings.",
        sectionStatus: "Draft",
        contentBlocks: [attested(personalContribution), { kind: "list", classification: "Proposed Analysis", items: preparationQuestions.C2 }],
      },
      "as-is": {
        sectionSummary: "Workflow analysis is owner-attested, but no current-state workflow, diagram, or source description has been supplied.",
        sectionStatus: "Missing",
        contentBlocks: [],
      },
      requirements: {
        sectionSummary: "API requirements coordination is owner-attested. No completed specification or agreed quality thresholds have been supplied.",
        sectionStatus: "Draft",
        contentBlocks: [attested(apiCoordination)],
      },
      "system-interactions": {
        sectionSummary: "Coordination with an integration partner is owner-attested. Specific interfaces, data ownership, and failure behavior have not been supplied.",
        sectionStatus: "Draft",
        contentBlocks: [attested(apiCoordination)],
      },
      "process-flow": {
        sectionSummary: "Creating flowcharts is owner-attested. No diagram has been supplied or reviewed, and no specific modeling notation is claimed.",
        sectionStatus: "Draft",
        contentBlocks: [attested(workflowAnalysis), attested(reportedArtifacts)],
      },
    },
  },
};
