import { SectionHeading } from "@/components/ui/section-heading";
import { approachSteps } from "@/data/homepage";

export function Approach() {
  return (
    <section id="approach" className="section-space approach-section" aria-labelledby="approach-title">
      <div className="page-container">
        <SectionHeading
          id="approach-title"
          label="A proposed problem-solving approach"
          title="Follow the need. Keep the context."
          description="A framework for future case studies, with a clear thread from the first question to the validation plan."
        />
        <ol className="approach-grid">
          {approachSteps.map((step, index) => (
            <li key={step.title}>
              <span className="approach-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p className="approach-question">{step.question}</p>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
