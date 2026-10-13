import type { ProjectPreview as ProjectPreviewContent } from "@/content/projects/previews";

export function ProjectPreview({ project }: { project: ProjectPreviewContent }) {
  return (
    <article className="project-card" id={project.slug}>
      <div className="project-card-top">
        <span className="project-id">{project.id}</span>
        <span className="draft-badge">Draft · Unverified</span>
      </div>
      <p className="project-domain">{project.domain}</p>
      <h3>{project.title}</h3>
      <p className="project-question">{project.question}</p>
      <ul className="project-tags" aria-label="Proposed analysis focus">
        {project.focus.map((focus) => <li key={focus}>{focus}</li>)}
      </ul>
      <details className="project-details">
        <summary>
          Explore proposed scope
          <span className="sr-only"> for {project.title}</span>
          <span className="details-symbol" aria-hidden="true" />
        </summary>
        <div className="details-content">
          <p>{project.scope}</p>
          <p>Real or simulated status, authorship, and publication permission await owner confirmation. No validated results are available for this preview.</p>
        </div>
      </details>
    </article>
  );
}
