import type { ProfessionalProjectDraft, ProjectCandidate, ProjectLocale, ProjectRecord } from "./project";

export type SectionStatus = "Missing" | "Draft" | "Needs Verification" | "Verified" | "Approved for Publication";
export type PublicationPermission = "unknown" | "pending" | "granted" | "denied" | "revoked";
export type ProfessionalClaimId = "O-01" | "O-02" | "O-03" | "O-04" | "O-05" | "O-06";
type ContentClassification = {
  readonly classification: "Proposed Analysis" | "Unverified assumption" | "Confirmed information";
} | {
  readonly classification: "Owner-attested activity";
  readonly claimReferences: readonly ProfessionalClaimId[];
};
export type ContentBlock = ContentClassification & ({
  readonly kind: "paragraph";
  readonly text: string;
} | {
  readonly kind: "list";
  readonly items: readonly string[];
});

export type CaseStudySection = {
  readonly sectionId: string;
  readonly sectionTitle: string;
  readonly sectionSummary: string;
  readonly sectionStatus: SectionStatus;
  readonly contentBlocks: readonly ContentBlock[];
  readonly evidenceReferences: readonly { id: string; label: string }[];
  readonly verificationStatus: "unverified" | "verified";
  readonly publicationPermission: PublicationPermission;
  readonly subsections?: readonly CaseStudySection[];
};

export type CandidateAnalysis = {
  readonly businessProblem: string;
  readonly questions: readonly string[];
  readonly proposedApproach: readonly string[];
  readonly requiredEvidence: readonly string[];
  readonly proposedDeliverables: readonly string[];
  readonly provenanceNote: string;
};

export type ProfessionalActivity = {
  readonly text: string;
  readonly claimReferences: readonly ProfessionalClaimId[];
};

export type ProfessionalSectionOverride = {
  readonly sectionSummary: string;
  readonly sectionStatus: "Draft" | "Missing";
  readonly contentBlocks: readonly ContentBlock[];
};

export type ProfessionalExperience = {
  readonly context: ProfessionalActivity;
  readonly scope: ProfessionalActivity;
  readonly personalContribution: ProfessionalActivity;
  readonly workflowAnalysis: ProfessionalActivity;
  readonly apiCoordination: ProfessionalActivity;
  readonly reportedArtifacts: ProfessionalActivity & { readonly types: readonly string[] };
  readonly openQuestions: readonly string[];
  readonly evidenceLimitations: ProfessionalActivity;
  readonly sectionOverrides: Readonly<Record<string, ProfessionalSectionOverride>>;
};

type CaseStudyBase = {
  readonly projectId: ProjectRecord["id"];
  readonly slug: ProjectRecord["slug"];
  readonly locale: ProjectLocale;
  readonly sections: readonly CaseStudySection[];
  // Section workflow approval never grants permission for the whole project.
  readonly verificationStatus: ProjectRecord["verificationStatus"];
  readonly publicationPermission: ProjectRecord["publicationPermission"];
};

export type CandidateCaseStudy = CaseStudyBase & {
  readonly contentKind: "candidate";
  readonly project: ProjectCandidate;
  readonly analysis: CandidateAnalysis;
};

export type ProfessionalCaseStudy = CaseStudyBase & {
  readonly contentKind: "professional-draft";
  readonly project: ProfessionalProjectDraft;
  readonly experience: ProfessionalExperience;
};

export type CaseStudy = CandidateCaseStudy | ProfessionalCaseStudy;
