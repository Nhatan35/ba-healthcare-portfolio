import Link from "next/link";
import { ProjectStatus } from "./project-status";
import type { CandidateCaseStudy, CaseStudy, CaseStudySection, ProfessionalCaseStudy } from "@/types/case-study";
import type { ProjectRecord } from "@/types/project";
import "./case-study-detail.css";

export function BackToProjects() {
  return <Link href="/projects" className="cs-back"><span aria-hidden="true">← </span>Back to Projects</Link>;
}

export function ProjectMetadata({ project }: { project: ProjectRecord }) {
  const professional = project.contentKind === "professional-draft";
  return <dl className="cs-metadata">
    <div><dt>Project reference</dt><dd>{project.id} · {professional ? "Professional project draft" : "Candidate topic"}</dd></div>
    <div><dt>Real or simulated</dt><dd>{professional ? "Real · Owner-attested" : "Unknown"}</dd></div>
    <div><dt>{professional ? "Supporting artifacts" : "Evidence supplied"}</dt><dd>{professional ? "Artifacts not supplied" : "None"}</dd></div>
    <div><dt>Publication permission</dt><dd>{project.publicationPermission === "unknown" ? "Unknown · Not cleared" : project.publicationPermission}</dd></div>
  </dl>;
}

export function CaseStudyHeader({ project }: { project: ProjectRecord }) {
  return <header className="cs-header">
    <BackToProjects />
    <div className="cs-heading-meta"><p className="cs-eyebrow">{project.contentKind === "professional-draft" ? "Professional project draft" : "Case study preparation"}</p><ProjectStatus status={project.verificationStatus} /></div>
    <p className="cs-category">{project.content.en.category}</p>
    <h1>{project.content.en.title}</h1>
    <p className="cs-lead">{project.content.en.summary}</p>
    <ProjectMetadata project={project} />
  </header>;
}

export function EvidenceStatus({ study }: { study: CaseStudy }) {
  const drafted = study.sections.filter((section) => section.sectionStatus === "Draft").length;
  if (study.contentKind === "professional-draft") {
    return <aside className="cs-evidence" aria-labelledby="evidence-heading">
      <div><p className="cs-eyebrow">Evidence status</p><h2 id="evidence-heading">Owner-attested experience; evidence review pending.</h2></div>
      <div><p>{study.experience.evidenceLimitations.text}</p>
        <p className="cs-evidence-note">{drafted} of {study.sections.length} sections have draft content. Section approval and project publication permission remain separate.</p>
      </div>
    </aside>;
  }
  return <aside className="cs-evidence" aria-labelledby="evidence-heading">
    <div><p className="cs-eyebrow">Evidence status</p><h2 id="evidence-heading">A preparation page, with evidence still to come.</h2></div>
    <div><p>This candidate remains unverified. The questions below describe proposed analysis, not work performed. No responsibilities, artifacts, or outcomes have been confirmed.</p>
      <p className="cs-evidence-note">{drafted} of {study.sections.length} sections has draft preparation content. Section approval and project publication permission are separate; this project is not cleared for publication.</p>
    </div>
  </aside>;
}

export function CandidateOverview({ study }: { study: CandidateCaseStudy }) {
  const { project, analysis } = study;
  return <div id="overview" className="cs-overview">
    <section aria-labelledby="overview-heading" className="cs-analysis-section">
      <p className="cs-eyebrow">Candidate overview · Proposed Analysis</p>
      <h2 id="overview-heading" tabIndex={-1}>Business Problem to Investigate</h2>
      <p>{analysis.businessProblem}</p>
      <ul className="cs-tags" aria-label="Proposed competency focus">{project.content.en.competencyTags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
    </section>
    <section aria-labelledby="ba-questions-heading" className="cs-analysis-section">
      <h2 id="ba-questions-heading" tabIndex={-1}>Key BA Questions</h2>
      <p className="cs-intro">Proposed Business Analyst (BA) questions for future clarification. No stakeholder answers or discovery findings are claimed.</p>
      <ol className="cs-questions">{analysis.questions.map((question) => <li key={question}>{question}</li>)}</ol>
    </section>
    <section aria-labelledby="analysis-approach-heading" className="cs-analysis-section">
      <h2 id="analysis-approach-heading" tabIndex={-1}>Proposed Analysis Approach</h2>
      <p className="cs-intro">A possible sequence, subject to scope and evidence review. These methods have not been performed for this candidate.</p>
      <ol className="cs-approach">{analysis.proposedApproach.map((method) => <li key={method}>{method}</li>)}</ol>
    </section>
    <section aria-labelledby="required-evidence-heading" className="cs-analysis-section">
      <h2 id="required-evidence-heading" tabIndex={-1}>Evidence & Deliverables Required</h2>
      <h3>Evidence to obtain</h3>
      <ul className="cs-analysis-list">{analysis.requiredEvidence.map((item) => <li key={item}>{item}</li>)}</ul>
      <h3>Proposed deliverables</h3>
      <p className="cs-intro">None is supplied or claimed as completed. Each would depend on confirmed scope and permitted source evidence.</p>
      <ul className="cs-analysis-list">{analysis.proposedDeliverables.map((item) => <li key={item}><strong>Proposed:</strong> {item}</li>)}</ul>
    </section>
    <section aria-labelledby="verification-heading" className="cs-analysis-section">
      <h2 id="verification-heading" tabIndex={-1}>Verification & Publication Status</h2>
      <ProjectStatus status={project.verificationStatus} />
      <p className="cs-provenance">{analysis.provenanceNote}</p>
      <dl className="cs-overview-facts">
        <div><dt>Contribution & role</dt><dd>Unknown. No professional participation or responsibilities are verified.</dd></div>
        <div><dt>Artifacts & validation</dt><dd>No delivered artifacts or stakeholder validation supplied.</dd></div>
        <div><dt>Outcomes & business impact</dt><dd>Unknown. No measured results or improvements claimed.</dd></div>
        <div><dt>Publication permission</dt><dd>Unknown · Not cleared. A preparation page or section workflow status does not grant disclosure permission.</dd></div>
      </dl>
      <p className="cs-definition-note">This remains a candidate topic, not confirmed experience or a completed simulation. <Link href="/projects#status-guide-title">Read the candidate, simulated, and verified definitions.</Link></p>
    </section>
  </div>;
}

function ProfessionalOverview({ study }: { study: ProfessionalCaseStudy }) {
  const { project, experience } = study;
  return <div id="overview" className="cs-overview">
    <section aria-labelledby="overview-heading" className="cs-analysis-section">
      <p className="cs-eyebrow">Professional project draft · Owner-attested</p>
      <h2 id="overview-heading" tabIndex={-1}>Project Context &amp; Scope</h2>
      <p>{experience.context.text}</p>
      <p className="cs-intro">{experience.scope.text}</p>
      <ul className="cs-tags" aria-label="Reported BA activities">{project.content.en.competencyTags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
    </section>
    <section aria-labelledby="ba-questions-heading" className="cs-analysis-section">
      <h2 id="ba-questions-heading" tabIndex={-1}>Personal Contribution</h2>
      <p>{experience.personalContribution.text}</p>
    </section>
    <section aria-labelledby="analysis-approach-heading" className="cs-analysis-section">
      <h2 id="analysis-approach-heading" tabIndex={-1}>Workflow Analysis &amp; API Coordination</h2>
      <p>{experience.workflowAnalysis.text}</p>
      <p className="cs-intro">{experience.apiCoordination.text}</p>
    </section>
    <section aria-labelledby="required-evidence-heading" className="cs-analysis-section">
      <h2 id="required-evidence-heading" tabIndex={-1}>Reported Artifacts &amp; Evidence</h2>
      <p>{experience.reportedArtifacts.text}</p>
      <details className="cs-disclosure">
        <summary>Questions for future verification</summary>
        <div className="cs-disclosure-body">
          <p className="cs-intro">These are evidence-collection questions, not completed requirements or project findings.</p>
          <ol className="cs-questions">{experience.openQuestions.map((question) => <li key={question}>{question}</li>)}</ol>
        </div>
      </details>
    </section>
    <section aria-labelledby="verification-heading" className="cs-analysis-section">
      <h2 id="verification-heading" tabIndex={-1}>Verification &amp; Publication Status</h2>
      <ProjectStatus status={project.verificationStatus} />
      <dl className="cs-overview-facts">
        <div><dt>Contribution source</dt><dd>Owner-attested participation and activities.</dd></div>
        <div><dt>Supporting artifacts</dt><dd>Reported as created; not supplied or independently reviewed.</dd></div>
        <div><dt>Acceptance, production completion &amp; outcomes</dt><dd>Not confirmed.</dd></div>
        <div><dt>Publication permission</dt><dd>Unknown · Not cleared. Anonymous local review does not authorize publication.</dd></div>
      </dl>
      <p className="cs-definition-note">This is an anonymous professional draft. <Link href="/projects#status-guide-title">Read the project and evidence definitions.</Link></p>
    </section>
  </div>;
}

export function CaseStudySectionNavigation({ contentKind }: { contentKind: CaseStudy["contentKind"] }) {
  const professional = contentKind === "professional-draft";
  return <nav className="cs-navigation" aria-label="Case study sections">
    <p className="cs-eyebrow">On this page</p>
    <a href="#overview-heading">{professional ? "Project context & scope" : "Business problem"}</a>
    <a href="#ba-questions-heading">{professional ? "Personal contribution" : "Key BA questions"}</a>
    <a href="#analysis-approach-heading">{professional ? "Workflow analysis & API coordination" : "Proposed approach"}</a>
    <a href="#required-evidence-heading">{professional ? "Reported artifacts & evidence" : "Required evidence"}</a>
    <a href="#verification-heading">{professional ? "Verification & publication status" : "Verification & permission"}</a>
    <a href="#deep-dive-heading">Preparation checklist</a>
    <a href="#related-projects">Related projects</a>
  </nav>;
}

function SectionContent({ section, professional }: { section: CaseStudySection; professional: boolean }) {
  return <>
    <p>{section.sectionSummary}</p>
    {section.contentBlocks.length > 0 && <details className="cs-disclosure">
      <summary>{professional ? "Read draft notes" : "Read preparation notes"}<span className="sr-only">: {section.sectionTitle}</span></summary>
      <div className="cs-disclosure-body">{section.contentBlocks.map((block, index) => <div key={index}>
        <p className="cs-label">{block.classification}</p>
        {block.kind === "paragraph" ? <p>{block.text}</p> : <ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>}
      </div>)}
      <p className="cs-note">Evidence verification: {section.verificationStatus}. Section publication permission: {section.publicationPermission}.</p>
      </div>
    </details>}
    {section.evidenceReferences.length > 0 && <ul aria-label="Evidence references">{section.evidenceReferences.map((reference) => <li key={reference.id}>{reference.label}</li>)}</ul>}
  </>;
}

export function DeepDiveSections({ sections, contentKind }: { sections: CaseStudy["sections"]; contentKind: CaseStudy["contentKind"] }) {
  const missing = sections.filter((section) => section.sectionStatus === "Missing").length;
  const drafted = sections.filter((section) => section.sectionStatus === "Draft").length;
  const professional = contentKind === "professional-draft";
  return <section id="deep-dive" aria-labelledby="deep-dive-heading" className="cs-deep-dive">
    <p className="cs-eyebrow">Evidence still required</p><h2 id="deep-dive-heading" tabIndex={-1}>Preparation checklist</h2>
    <p id="checklist-status" className="cs-intro">{professional
      ? `${missing} ${missing === 1 ? "section is" : "sections are"} missing supporting content; ${drafted} ${drafted === 1 ? "section has" : "sections have"} draft content. Draft records owner testimony or proposed analysis, not verified delivery. No section is verified or approved for publication.`
      : `${missing} sections are missing supporting content; ${drafted} has draft discovery questions. Context, workflows, requirements, authored artifacts, validation, and outcomes still need evidence. No section is verified or approved for publication.`}</p>
    <details className="cs-checklist">
      <summary aria-describedby="checklist-status">Full BA Analysis Preparation Checklist<span className="cs-note">{sections.length} sections · Expand to review evidence gaps</span></summary>
      <div className="cs-checklist-body">
      <nav aria-label="Full preparation checklist sections" className="cs-checklist-index"><ol>{sections.map((section) => <li key={section.sectionId}><a href={`#${section.sectionId}-heading`}>{section.sectionTitle}</a></li>)}</ol></nav>
      <p className="cs-intro">{professional ? "“Missing” means substantive supporting content is unavailable. “Draft” identifies owner-attested activity or proposed analysis, not verified evidence." : "“Missing” means supporting content has not been supplied. “Draft” marks preparation content, not verified evidence."}</p>
    {sections.map((section, index) => <section key={section.sectionId} className="cs-section" aria-labelledby={`${section.sectionId}-heading`}>
      <div className="cs-section-top"><span className="cs-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span className="cs-state">{section.sectionStatus}</span></div>
      <h3 id={`${section.sectionId}-heading`} tabIndex={-1}>{section.sectionTitle}</h3>
      <SectionContent section={section} professional={professional} />
      {section.subsections?.map((child) => <section key={child.sectionId} className="cs-subsection" aria-labelledby={`${child.sectionId}-heading`}>
        <h4 id={`${child.sectionId}-heading`} tabIndex={-1}>{child.sectionTitle}</h4><p className="cs-note">{child.sectionStatus}</p><SectionContent section={child} professional={professional} />
      </section>)}
    </section>)}
      </div>
    </details>
  </section>;
}

export function RelatedProjects({ projects }: { projects: readonly ProjectRecord[] }) {
  return <section id="related-projects" aria-labelledby="related-heading" className="cs-related">
    <p className="cs-eyebrow">Continue exploring</p><h2 id="related-heading" tabIndex={-1}>Related projects</h2>
    <ul>{projects.map((project) => <li key={project.id}>
      <ProjectStatus status={project.verificationStatus} />
      {project.contentKind === "professional-draft" ? <p>Professional project draft · Owner-attested</p> : null}
      <h3><Link href={`/projects/${project.slug}`}>{project.content.en.title}<span aria-hidden="true"> ↗</span></Link></h3>
      <p>{project.content.en.category}</p>
    </li>)}</ul>
    <BackToProjects />
  </section>;
}

export function CaseStudyDetail({ study, relatedProjects }: { study: CaseStudy; relatedProjects: readonly ProjectRecord[] }) {
  return <div className="cs-detail page-container">
    <CaseStudyHeader project={study.project} />
    <EvidenceStatus study={study} />
    <div className="cs-body"><CaseStudySectionNavigation contentKind={study.contentKind} /><div className="cs-reading-column">
      {study.contentKind === "professional-draft" ? <ProfessionalOverview study={study} /> : <CandidateOverview study={study} />}<DeepDiveSections sections={study.sections} contentKind={study.contentKind} />
    </div></div>
    <RelatedProjects projects={relatedProjects} />
  </div>;
}
