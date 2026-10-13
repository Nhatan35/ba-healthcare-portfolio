export type ProjectPreview = {
  id: "C1" | "C2" | "C3";
  slug: string;
  title: string;
  domain: string;
  question: string;
  focus: readonly string[];
  scope: string;
};

export const projectPreviews: readonly ProjectPreview[] = [
  {
    id: "C1",
    slug: "healthcare-appointment-management",
    title: "Healthcare Appointment Management",
    domain: "Healthcare workflows",
    question: "How could booking, rescheduling, and capacity conflicts become easier to understand and manage?",
    focus: ["Process analysis", "Business rules", "Acceptance criteria"],
    scope: "A proposed exploration of appointment states, scheduling handoffs, and exception paths. The service setting, actual responsibilities, artifacts, and outcomes have not been verified.",
  },
  {
    id: "C2",
    slug: "healthcare-omnichannel-integration",
    title: "Healthcare Omnichannel Integration",
    domain: "Systems & integration",
    question: "How could requests retain their context as they move between service channels?",
    focus: ["System boundaries", "Data mapping", "Exception handling"],
    scope: "A candidate topic examining request ownership, status consistency, and failed handoffs. Channels, systems, personal contribution, and implementation history remain unverified.",
  },
  {
    id: "C3",
    slug: "employee-shift-scheduling",
    title: "Employee Shift Scheduling",
    domain: "Workforce operations · Industry unverified",
    question: "How could availability, shift changes, and approval rules support clearer scheduling decisions?",
    focus: ["Constraint analysis", "Decision rules", "Process improvement"],
    scope: "A proposed analysis of availability, coverage, and shift approvals. Industry, organizational policies, actual role, and outcomes remain unknown. This is not confirmed healthcare experience.",
  },
];
