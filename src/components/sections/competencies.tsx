import { SectionHeading } from "@/components/ui/section-heading";
import { competencyThemes } from "@/data/homepage";

export function Competencies() {
  return (
    <section id="expertise" className="section-space" aria-labelledby="competencies-title">
      <div className="page-container">
        <SectionHeading
          id="competencies-title"
          label="Core BA competencies"
          title="The thinking behind the work."
          description="Four themes for organizing future evidence. These describe the portfolio’s focus, not verified personal proficiency."
        />
        <div className="competency-grid">
          {competencyThemes.map((theme, index) => (
            <article key={theme.title} className="competency-item">
              <span className={`competency-symbol competency-symbol--${index + 1}`} aria-hidden="true" />
              <h3>{theme.title}</h3>
              <p>{theme.description}</p>
              <p className="method-label">{theme.methods}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
