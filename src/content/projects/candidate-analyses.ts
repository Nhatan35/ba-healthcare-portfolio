import type { CandidateAnalysis } from "@/types/case-study";
import type { ProjectCandidate } from "@/types/project";
import { preparationQuestions } from "./preparation-questions";

// Editorial investigation plans. No observed problem or performed work is asserted.
export const candidateAnalyses = {
  C1: {
    businessProblem: "Investigate how an appointment workflow could keep booking decisions clear when requests compete for limited provider availability. The proposed scope covers appointment statuses, capacity, cancellation, rescheduling, role permissions, and operational exceptions. Whether these issues occur in any particular service remains unverified.",
    questions: preparationQuestions.C1,
    proposedApproach: ["Stakeholder discovery", "As-Is process mapping", "Business rule analysis", "To-Be workflow exploration", "Requirement analysis", "Acceptance criteria"],
    requiredEvidence: [
      "Permitted scheduling examples and source policies establishing appointment states, provider availability, and capacity ownership.",
      "Confirmed role permissions and examples of cancellation, rescheduling, conflict, and exception handling.",
      "Evidence of personal contribution, stakeholder review, and any validation or outcomes before making experience claims.",
    ],
    proposedDeliverables: [
      "Appointment lifecycle and As-Is / To-Be process maps, grounded in confirmed workflow evidence.",
      "Scheduling decision table covering capacity, conflicts, cancellation, rescheduling, and authorized overrides.",
      "Requirements and acceptance criteria linked to normal and exception scenarios.",
    ],
    provenanceNote: "The healthcare scheduling theme is a candidate direction. The service setting, real or simulated provenance, project role, and personal contribution remain unknown.",
  },
  C3: {
    businessProblem: "Investigate how workforce scheduling could reconcile availability and eligibility with overlapping assignments, registration windows, and locked schedules. Possible scope includes shift swaps, approval decisions, attendance dependencies, and assignments across branches or legal entities; their applicability still needs confirmation.",
    questions: preparationQuestions.C3,
    proposedApproach: ["Stakeholder discovery", "Scheduling constraint analysis", "Role and permission analysis", "Workflow mapping", "Business rule analysis", "Acceptance criteria"],
    requiredEvidence: [
      "Confirmed industry and organizational scope, including whether multiple branches or legal entities are relevant.",
      "Permitted policies defining availability, eligibility, registration windows, HR approval, schedule locks, and shift changes.",
      "Attendance dependency descriptions, exception examples, and evidence of personal contribution and validation.",
    ],
    proposedDeliverables: [
      "Scheduling constraint catalogue and role / permission matrix based on confirmed policy owners.",
      "Registration, approval, locking, and shift-swap workflow maps with exception paths.",
      "Business rules and acceptance criteria covering overlaps, cross-branch assignments, and attendance updates where applicable.",
    ],
    provenanceNote: "Industry and healthcare provenance are unverified. This candidate is not confirmed hospital or healthcare implementation experience; real or simulated provenance and personal contribution are also unknown.",
  },
} satisfies Record<ProjectCandidate["id"], CandidateAnalysis>;
