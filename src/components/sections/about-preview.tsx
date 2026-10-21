import { SectionHeading } from "@/components/ui/section-heading";

export function AboutPreview() {
  return (
    <section id="about" className="section-space" aria-labelledby="about-title">
      <div className="page-container about-grid">
        <SectionHeading
          id="about-title"
          label="Professional profile"
          title="The person behind the questions."
          description="A clear introduction to the person, target Business Analyst role, and Healthcare IT focus will appear here once the owner confirms the details."
        />
        <div className="profile-placeholder">
          <p className="profile-label">Identity details · owner input required</p>
          <dl>
            <div><dt>Name</dt><dd>[Owner input required]</dd></div>
            <div><dt>Target BA role</dt><dd>[Confirm preferred role title]</dd></div>
            <div><dt>Healthcare IT specialization</dt><dd>[Confirm specific focus]</dd></div>
            <div><dt>Professional summary</dt><dd>[Add after background and contribution are verified]</dd></div>
            <div id="resume"><dt>Resume</dt><dd>Awaiting an approved public version</dd></div>
          </dl>
          <p>Experience, credentials, and personal claims will appear only after verification.</p>
        </div>
      </div>
    </section>
  );
}
