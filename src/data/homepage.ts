export const competencyThemes = [
  { title: "Discovery & context", description: "Frame the problem, identify stakeholders, and make uncertainty visible.", methods: "Problem framing / Stakeholder analysis" },
  { title: "Processes & requirements", description: "Connect workflows, business rules, and requirements to the need they serve.", methods: "Process modeling / Requirements analysis" },
  { title: "Systems & information", description: "Understand boundaries, data handoffs, and the exceptions between systems.", methods: "Integration analysis / Data mapping" },
  { title: "Decisions & validation", description: "Compare options and define what an acceptable outcome would look like.", methods: "Trade-offs / Acceptance criteria" },
] as const;

export const approachSteps = [
  { title: "Understand", question: "What needs to change?", description: "Clarify the context, the people affected, and the evidence behind the problem." },
  { title: "Connect", question: "Where does the work meet?", description: "Map the workflow, the handoffs, and the rules that shape each decision." },
  { title: "Define", question: "What should happen?", description: "Turn needs into scoped requirements, explicit exceptions, and viable options." },
  { title: "Validate", question: "How would we know?", description: "Set testable criteria and distinguish expected value from observed results." },
] as const;
