import { BrandMark } from "@/components/ui/brand-mark";

export function SiteHeader() {
  return (
    <header id="home" className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="page-container header-inner">
        <a href="#home" className="brand" aria-label="Healthcare BA portfolio home">
          <BrandMark />
          <span>Healthcare BA<span className="brand-caption">An evidence-led portfolio</span></span>
        </a>
        <nav aria-label="Main navigation" className="main-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-utilities">
          <a href="#resume" className="resume-link">Resume</a>
          <div className="language-control" role="group" aria-label="Portfolio language">
            <span className="language-current" lang="en">
              <span aria-hidden="true">EN</span>
              <span className="sr-only">English, current language</span>
            </span>
            <button type="button" disabled aria-label="Vietnamese unavailable" aria-describedby="language-note">VI</button>
          </div>
          <span id="language-note" className="language-note">Vietnamese planned</span>
        </div>
      </div>
    </header>
  );
}
