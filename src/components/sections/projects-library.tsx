import Link from "next/link";
import { ProjectCard } from "@/components/case-studies/project-card";
import type { ProjectRecord } from "@/types/project";
import "./projects-library.css";

export function ProjectsLibrary({ projects }: { projects: readonly ProjectRecord[] }) {
  return (
    <div className="pl-library">
      <section className="pl-hero" aria-labelledby="library-title">
        <div className="page-container">
          <Link href="/" className="text-link pl-home-link">Back to homepage</Link>
          <div className="pl-introduction">
            <div>
              <p className="section-label">Projects library</p>
              <h1 id="library-title">Questions<span>worth exploring.</span></h1>
            </div>
            <div className="pl-context">
              <p>Explore an owner-attested professional draft alongside candidate topics in healthcare workflows and workforce operations. Each identifies its contribution and evidence status.</p>
              <p className="pl-caveat">Owner testimony and proposed analysis are distinct from independently verified artifacts or outcomes. Publication permission remains unknown.</p>
            </div>
          </div>
          <nav className="pl-project-index" aria-label="Project index">{projects.map(project => <a key={project.id} href={`#${project.slug}`}><span>{project.id}</span>{project.content.en.title}</a>)}</nav>
        </div>
      </section>

      <div className="page-container pl-collection">
        <section id="featured-candidate" aria-labelledby="collection-title">
          <h2 id="collection-title" className="sr-only">Project drafts and candidate topics</h2>
          <div className="pl-spreads">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
          <p className="pl-feature-note">The order reflects a provisional editorial priority, not proven project impact. Final selection depends on relevant evidence and permission review.</p>
        </section>

        <section className="pl-status-guide" aria-labelledby="status-guide-title">
          <div className="pl-guide-introduction">
            <h2 id="status-guide-title">How to read this collection</h2>
            <p>Tags describe reported activities or proposed analysis areas, not verified proficiency. Owner-attested participation is distinct from independent evidence review; unknown provenance is not the same as a simulation.</p>
          </div>
          <dl className="pl-definitions">
            <div><dt>Candidate topic</dt><dd>A question or area to investigate. It does not establish project participation or completed analysis. C1 and C3 remain candidates.</dd></div>
            <div><dt>Owner-attested professional draft</dt><dd>A real project described through the owner&apos;s account of participation. Supporting artifacts, acceptance, and outcomes have not been independently verified. C2 uses this classification.</dd></div>
            <div><dt>Simulated case</dt><dd>An explicitly identified exercise using synthetic scenarios and stated assumptions. None of these candidates has been confirmed as a simulation.</dd></div>
            <div><dt>Verified professional project</dt><dd>A real engagement supported by evidence of context, personal contribution, and validation limits. Publication also requires disclosure permission. None is claimed here.</dd></div>
          </dl>
          <div className="pl-return-row">
            <p>Publication requires separate evidence, privacy, and permission review.</p>
            <Link href="/#approach" className="pl-jump-link">Explore the analysis approach</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
