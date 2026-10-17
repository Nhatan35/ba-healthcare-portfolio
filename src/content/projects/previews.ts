import type { ProjectRecord } from "@/types/project";

export const projectPreviews: readonly ProjectRecord[] = [
  {
    id: "C1",
    contentKind: "candidate",
    slug: "healthcare-appointment-management",
    verificationStatus: "unverified",
    provenance: "unknown",
    evidenceStatus: "missing",
    publicationPermission: "unknown",
    featuredOrder: 1,
    availableLocales: ["en"],
    content: {
      en: {
        title: "Healthcare Appointment Management",
        category: "Healthcare workflows",
        summary: "How could booking, rescheduling, and capacity conflicts become easier to understand and manage?",
        competencyTags: ["Process analysis", "Business rules", "Acceptance criteria"],
        scope: "A proposed exploration of appointment states, scheduling handoffs, and exception paths. The service setting, actual responsibilities, artifacts, and outcomes have not been verified.",
      },
    },
  },
  {
    id: "C2",
    contentKind: "professional-draft",
    participationSource: "owner-attested",
    slug: "healthcare-omnichannel-integration",
    verificationStatus: "unverified",
    provenance: "real",
    evidenceStatus: "missing",
    publicationPermission: "unknown",
    featuredOrder: 2,
    availableLocales: ["en"],
    content: {
      en: {
        title: "Communications Integration — Workflow & Requirements Analysis",
        category: "Systems & integration",
        summary: "I contribute to an ongoing communications integration project through workflow analysis, API requirements coordination, and progress reporting.",
        competencyTags: ["Workflow analysis", "API requirements coordination", "Progress reporting"],
        scope: "My work includes analyzing inbound and outbound workflows and related CRM processes, coordinating integration requirements, and participating in cross-team discussions.",
      },
    },
  },
  {
    id: "C3",
    contentKind: "candidate",
    slug: "employee-shift-scheduling",
    verificationStatus: "unverified",
    provenance: "unknown",
    evidenceStatus: "missing",
    publicationPermission: "unknown",
    featuredOrder: 3,
    availableLocales: ["en"],
    content: {
      en: {
        title: "Employee Shift Scheduling",
        category: "Workforce operations · Industry unverified",
        summary: "How could availability, shift changes, and approval rules support clearer scheduling decisions?",
        competencyTags: ["Constraint analysis", "Decision rules", "Process improvement"],
        scope: "A proposed analysis of availability, coverage, and shift approvals. Industry, organizational policies, actual role, and outcomes remain unknown. This is not confirmed healthcare experience.",
      },
    },
  },
];
