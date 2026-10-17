export type ProjectLocale = "en" | "vi";

export type ProjectCopy = {
  readonly title: string;
  readonly category: string;
  readonly summary: string;
  readonly competencyTags: readonly string[];
  readonly scope: string;
};

export type ProjectId = "C1" | "C2" | "C3";

type ProjectBase = {
  readonly slug: string;
  readonly verificationStatus: "unverified";
  readonly evidenceStatus: "missing";
  readonly publicationPermission: "unknown";
  readonly featuredOrder: number;
  // Availability means preview copy exists, not that a case is cleared for release.
  readonly availableLocales: readonly ProjectLocale[];
  readonly content: {
    readonly en: ProjectCopy;
    readonly vi?: ProjectCopy;
  };
};

export type ProjectCandidate = ProjectBase & {
  readonly id: Exclude<ProjectId, "C2">;
  readonly contentKind: "candidate";
  readonly provenance: "unknown";
};

export type ProfessionalProjectDraft = ProjectBase & {
  readonly id: Extract<ProjectId, "C2">;
  readonly contentKind: "professional-draft";
  readonly provenance: "real";
  readonly participationSource: "owner-attested";
};

export type ProjectRecord = ProjectCandidate | ProfessionalProjectDraft;
