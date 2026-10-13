import { ActionLink } from "@/components/ui/action-link";

const analysisSteps = [
  { label: "Understand the need", detail: "People, context & constraints", symbol: "01" },
  { label: "Define the requirement", detail: "Rules, behavior & exceptions", symbol: "02" },
  { label: "Make it testable", detail: "Criteria, evidence & limitations", symbol: "03" },
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="page-container hero-grid">
        <div className="hero-copy">
          <p className="hero-intro"><span aria-hidden="true" />Healthcare Business Analysis</p>
          <h1 id="hero-title">Clear thinking.<br />Better healthcare<br className="hero-break" /> systems.</h1>
          <p className="hero-description">Exploring the space between people, processes, and technology—where clear requirements help shape better decisions.</p>
          <div className="flex flex-wrap gap-3">
            <ActionLink href="#projects">Explore case study drafts</ActionLink>
            <ActionLink href="#approach" variant="secondary">See the approach</ActionLink>
          </div>
          <p className="hero-note">A portfolio in development. Experience and project evidence await verification.</p>
        </div>
        <figure className="analysis-figure">
          <div className="analysis-board">
            <div className="board-heading"><span>The thread of analysis</span><span className="board-mark" aria-hidden="true">↗</span></div>
            <p className="board-description">From an operational question<br />to a clear, testable decision.</p>
            <ol className="analysis-steps">
              {analysisSteps.map((step) => (
                <li key={step.symbol}>
                  <span className="step-node" aria-hidden="true">{step.symbol}</span>
                  <div><strong>{step.label}</strong><span>{step.detail}</span></div>
                </li>
              ))}
            </ol>
            <div className="board-bottom"><span className="connection-mark" aria-hidden="true" />Keep the evidence connected.</div>
          </div>
          <figcaption>Illustrative analysis framework · Not project evidence</figcaption>
        </figure>
      </div>
    </section>
  );
}
