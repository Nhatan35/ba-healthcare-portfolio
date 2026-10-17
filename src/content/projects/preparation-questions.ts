import type { ProjectRecord } from "@/types/project";

// Questions for future evidence collection, never records of performed discovery.
export const preparationQuestions: Record<ProjectRecord["id"], readonly string[]> = {
  C1: [
    "What should happen when two patients request the same appointment slot?",
    "Which appointment statuses would be needed, and who may move an appointment between them?",
    "How should provider availability and capacity limits affect which slots can be booked?",
    "When an appointment is cancelled, when should its capacity become available again?",
    "How should rescheduling preserve the original booking until a replacement slot is confirmed?",
    "Which roles may override scheduling conflicts, and how should unresolved exceptions be escalated?",
  ],
  C2: [
    "What was already in progress before you joined, and what did you personally contribute?",
    "Which inbound, outbound, and related CRM flowchart revisions demonstrate your work, and are they current-state, proposed-state, or another model?",
    "Which integration-information or API requirement did you clarify, and what was its actual disposition?",
    "Which timeline or weekly-report sample can demonstrate your reporting contribution without exposing confidential information?",
    "What was your contribution in a cross-team requirements discussion?",
    "What review, acceptance, release, or outcome evidence exists, and which claims can it support?",
  ],
  C3: [
    "How should employee availability and shift eligibility constrain registration?",
    "What should happen when an employee selects overlapping shifts?",
    "How should assignments work across separate branches or legal entities, if these are in scope?",
    "Who may modify a shift after Human Resources (HR) locks the registration period?",
    "Which approvals would a shift swap require, and how should late or rejected requests be handled?",
    "How should approved shift changes affect attendance records and unresolved scheduling exceptions?",
  ],
};
