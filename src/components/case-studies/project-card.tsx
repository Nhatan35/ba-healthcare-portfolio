import Link from "next/link";
import { ProjectStatus } from "@/components/case-studies/project-status";
import type { ProjectRecord } from "@/types/project";
import "./project-card.css";

const provenanceLabels = { unknown: "Unknown", real: "Real · Owner-attested" } satisfies Record<ProjectRecord["provenance"], string>;
const evidenceLabels = { missing: "Not supplied" } satisfies Record<ProjectRecord["evidenceStatus"], string>;
const permissionLabels = { unknown: "Unknown · Not cleared" } satisfies Record<ProjectRecord["publicationPermission"], string>;

type ProjectCardProps = {
  project: ProjectRecord;
  variant?: "featured" | "standard";
};

export function ProjectCard({ project, variant = "standard" }: ProjectCardProps) {
  const content = project.content.en;
  const professional = project.contentKind === "professional-draft";

  return (
    <article
      id={project.slug}
      aria-labelledby={`${project.id}-title`}
      className={`pc-card ${variant === "featured" ? "pc-featured" : ""}`}
    >
      <div className="pc-top">
        <span className="pc-reference">{project.id} <span>{professional ? "Professional project draft" : "Candidate topic"}</span></span>
        <ProjectStatus status={project.verificationStatus} />
      </div>
      <div className="pc-content">
        <div className="pc-overview">
          <p className="pc-category">{content.category}</p>
          <h3 id={`${project.id}-title`}>{content.title}</h3>
          <p className="pc-summary">{content.summary}</p>
          <p className="pc-focus-label">{professional ? "Reported BA activities" : "Proposed Business Analyst competency focus"}</p>
          <ul className="pc-tags" aria-label={`${professional ? "Reported BA activities" : "Proposed competency focus"} for ${content.title}`}>
            {content.competencyTags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
        <div className="pc-scope">
          <h4>{professional ? "Scope and contribution" : "Proposed scope"}</h4>
          <p>{content.scope}</p>
          <dl className="pc-evidence">
            <div><dt>Provenance</dt><dd>{provenanceLabels[project.provenance]}</dd></div>
            <div><dt>Evidence</dt><dd>{professional ? "Artifacts not supplied" : evidenceLabels[project.evidenceStatus]}</dd></div>
            <div><dt>Publication permission</dt><dd>{permissionLabels[project.publicationPermission]}</dd></div>
          </dl>
        </div>
      </div>
      <p className="pc-preparation"><Link href={`/projects/${project.slug}`} className="pc-detail-link">{professional ? "View project draft" : "View preparation page"}<span className="sr-only">: {content.title}</span><span aria-hidden="true"> →</span></Link></p>
    </article>
  );
}
