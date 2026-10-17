import { ProjectStatus } from "@/components/case-studies/project-status";
import type { ProjectRecord } from "@/types/project";

export function ProjectPreview({ project }: { project: ProjectRecord }) {
  const content = project.content.en;
  const professional = project.contentKind === "professional-draft";
  return (
    <article className={`project-card${project.id === "C1" ? " project-card--provisional-lead" : ""}`} id={project.slug}>
      <div className="project-card-top">
        <span className="project-id">{project.id}</span>
        <ProjectStatus status={project.verificationStatus} />
      </div>
      {project.id === "C1" ? <p className="provisional-lead-label">Provisional primary case study</p> : null}
      {professional ? <p className="provisional-lead-label">Professional project draft · Owner-attested</p> : null}
      <p className="project-domain">{content.category}</p>
      <h3>{content.title}</h3>
      <p className="project-question">{content.summary}</p>
      <ul className="project-tags" aria-label={professional ? "Reported BA activities" : "Proposed analysis focus"}>
        {content.competencyTags.map((focus) => <li key={focus}>{focus}</li>)}
      </ul>
      <details className="project-details">
        <summary>
          {professional ? "Explore scope and contribution" : "Explore proposed scope"}
          <span className="sr-only"> for {content.title}</span>
          <span className="details-symbol" aria-hidden="true" />
        </summary>
        <div className="details-content">
          <p>{content.scope}</p>
          {project.id === "C1" ? (
            <div className="evidence-plans">
              <h4>Potential evidence to develop</h4>
              <p>None of these artifacts exist in this preview; each depends on verified source material and owner review.</p>
              <ul>
                <li>Process diagram</li>
                <li>Business rules</li>
                <li>Acceptance criteria</li>
                <li>Decision trade-offs</li>
              </ul>
            </div>
          ) : null}
          <p>{professional ? "Participation and activities are owner-attested. Supporting artifacts and outcomes remain unverified; publication permission is unknown." : "Real or simulated status, authorship, and publication permission await owner confirmation. No validated results are available for this preview."}</p>
        </div>
      </details>
    </article>
  );
}
