import { SectionHeading } from "@/components/ui/section-heading";

export function AboutPreview() {
  return (
    <section id="about" className="section-space" aria-labelledby="about-title">
      <div className="page-container about-grid">
        <SectionHeading
          id="about-title"
          label="Behind the analysis"
          title="A professional profile, built on evidence."
          description="This space will introduce the person behind the work: their background, contribution, and perspective on healthcare business analysis."
        />
        <div className="profile-placeholder">
          <p className="profile-label">Profile awaiting owner details</p>
          <dl>
            <div><dt>Name</dt><dd>To be added</dd></div>
            <div><dt>Professional focus</dt><dd>Business Analysis for Healthcare IT</dd></div>
            <div id="resume"><dt>Resume</dt><dd>Awaiting an approved public version</dd></div>
          </dl>
          <p>Role, experience, and credentials will appear only after verification.</p>
        </div>
      </div>
    </section>
  );
}
