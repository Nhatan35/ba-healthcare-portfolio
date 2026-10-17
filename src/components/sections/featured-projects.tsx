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
            title="Projects and analysis."
            description="Explore project drafts and candidate topics, with their contribution and evidence status clearly identified."
          />
          <p className="draft-note">Draft collection<br /><span>Evidence review pending</span></p>
        </div>
        <div className="project-grid">{projectPreviews.toSorted((a, b) => a.featuredOrder - b.featuredOrder).map((project) => <ProjectPreview key={project.id} project={project} />)}</div>
        <p className="collection-note">These previews distinguish owner-attested activities from candidate topics. Evidence review and publication permission are pending.</p>
      </div>
    </section>
  );
}
