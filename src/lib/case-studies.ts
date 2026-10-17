import { caseStudySections } from "@/content/projects/case-study-sections";
import { candidateAnalyses } from "@/content/projects/candidate-analyses";
import { preparationQuestions } from "@/content/projects/preparation-questions";
import { projectPreviews } from "@/content/projects/previews";
import { professionalExperiences } from "@/content/projects/professional-experiences";
import type { CaseStudy, CaseStudySection, ProfessionalExperience } from "@/types/case-study";

function withProfessionalContent(section: CaseStudySection, experience: ProfessionalExperience): CaseStudySection {
  return {
    ...section,
    ...experience.sectionOverrides[section.sectionId],
    ...(section.subsections ? { subsections: section.subsections.map((child) => withProfessionalContent(child, experience)) } : {}),
  };
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  const project = projectPreviews.find((candidate) => candidate.slug === slug);
  if (!project) return undefined;

  const common = {
    projectId: project.id,
    slug: project.slug,
    verificationStatus: project.verificationStatus,
    publicationPermission: project.publicationPermission,
  };

  if (project.contentKind === "professional-draft") {
    const experience = professionalExperiences[project.id];
    return {
      ...common,
      locale: "en",
      contentKind: "professional-draft",
      project,
      experience,
      sections: caseStudySections.map((section) => withProfessionalContent(section, experience)),
    };
  }

  return {
    ...common,
    locale: "en",
    contentKind: "candidate",
    project,
    analysis: candidateAnalyses[project.id],
    sections: caseStudySections.map((section) => section.sectionId === "discovery" ? {
      ...section,
      sectionStatus: "Draft",
      contentBlocks: [{ kind: "list", classification: "Proposed Analysis", items: preparationQuestions[project.id] }],
    } : section),
  };
}

export function getRelatedProjects(projectId: CaseStudy["projectId"]) {
  return projectPreviews.filter((project) => project.id !== projectId).toSorted((a, b) => a.featuredOrder - b.featuredOrder);
}
