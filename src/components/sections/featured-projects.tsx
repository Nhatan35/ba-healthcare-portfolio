import { ProjectPreview } from "@/components/case-studies/project-preview";
import { SectionHeading } from "@/components/ui/section-heading";
import { projectPreviews } from "@/content/projects/previews";

export function FeaturedProjects() {
  return (
    <section id="projects" className="section-space projects-section" aria-labelledby="projects-title">
      <div className="page-container">
        <div className="projects-heading">
          <SectionHeading
            id="projects-title"
            label="Featured case study previews"
            title="Questions worth exploring."
            description="Candidate topics for a closer look at workflows, requirements, and the decisions between them."
          />
          <p className="draft-note">Draft collection<br /><span>Evidence review pending</span></p>
        </div>
        <div className="project-grid">{projectPreviews.map((project) => <ProjectPreview key={project.id} project={project} />)}</div>
        <p className="collection-note">These previews are not verified professional experience. Final selection will follow evidence and permission review.</p>
      </div>
    </section>
  );
}
