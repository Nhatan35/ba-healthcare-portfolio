import Link from "next/link";
import { BrandMark } from "@/components/ui/brand-mark";

export function SiteHeader({ currentPage = "home" }: { currentPage?: "home" | "projects" | "project" }) {
  const homePrefix = currentPage === "home" ? "" : "/";
  return (
    <header id="home" className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="page-container header-inner">
        <Link href={`${homePrefix}#home`} className="brand" aria-label="Healthcare BA portfolio home">
          <BrandMark />
          <span>Healthcare BA<span className="brand-caption">An evidence-led portfolio</span></span>
        </Link>
        <nav aria-label="Main navigation" className="main-nav flex-wrap">
          <Link href={`${homePrefix}#home`}>Home</Link>
          <Link href={`${homePrefix}#about`}>About</Link>
          <Link href="/projects" aria-current={currentPage === "projects" ? "page" : currentPage === "project" ? "location" : undefined} className={currentPage !== "home" ? "text-accent underline underline-offset-8" : undefined}>Projects</Link>
          <Link href={`${homePrefix}#contact`}>Contact</Link>
        </nav>
        <div className="header-utilities">
          <Link href={`${homePrefix}#resume`} className="resume-link">Resume</Link>
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
