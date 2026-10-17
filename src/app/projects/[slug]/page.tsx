import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/case-studies/case-study-detail";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { projectPreviews } from "@/content/projects/previews";
import { getCaseStudy, getRelatedProjects } from "@/lib/case-studies";

export function generateStaticParams() {
  return projectPreviews.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();
  return {
    title: `${study.project.content.en.title} — Draft case study`,
    description: `${study.contentKind === "professional-draft" ? "Owner-attested project draft." : "Unverified case study preparation."} ${study.project.content.en.summary}`,
    robots: { index: false, follow: false },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/projects/[slug]">) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();
  return <>
    <SiteHeader currentPage="project" />
    <main id="main-content" tabIndex={-1}><CaseStudyDetail study={study} relatedProjects={getRelatedProjects(study.projectId)} /></main>
    <SiteFooter pageLabel={study.contentKind === "professional-draft" ? "Professional project draft." : "Case study preparation."} />
  </>;
}
