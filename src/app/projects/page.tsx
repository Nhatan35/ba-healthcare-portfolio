import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProjectsLibrary } from "@/components/sections/projects-library";
import { projectPreviews } from "@/content/projects/previews";

export const metadata: Metadata = {
  title: "Projects Library — Healthcare BA Portfolio",
  description: "Explore Business Analyst project drafts and candidate topics, with contribution, evidence, and publication status clearly identified.",
  robots: { index: false, follow: false },
};

export default function ProjectsPage() {
  const projects = projectPreviews.toSorted((a, b) => a.featuredOrder - b.featuredOrder);

  return (
    <>
      <SiteHeader currentPage="projects" />
      <main id="main-content" tabIndex={-1}>
        <ProjectsLibrary projects={projects} />
      </main>
      <SiteFooter pageLabel="Projects library prototype." />
    </>
  );
}
