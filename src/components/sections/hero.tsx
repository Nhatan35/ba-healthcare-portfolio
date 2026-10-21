import { AnalyticalArtwork } from "@/components/ui/analytical-artwork";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="page-container">
        <div className="hero-kicker"><p>Healthcare Business Analysis</p><p>People / Processes / Technology</p></div>
        <h1 id="hero-title">Clear thinking.<span>Connected decisions.</span></h1>
        <div className="hero-opening">
          <div className="hero-copy">
            <p className="hero-description">Exploring the space between people, processes, and technology—where clear requirements help shape better decisions.</p>
            <a className="text-link" href="#projects">Explore case study drafts</a>
            <p className="hero-note">A portfolio in development. Experience and project evidence await verification.</p>
          </div>
          <AnalyticalArtwork kind="analysis" />
        </div>
      </div>
    </section>
  );
}
