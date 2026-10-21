import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutPreview } from "@/components/sections/about-preview";
import { Approach } from "@/components/sections/approach";
import { Competencies } from "@/components/sections/competencies";
import { Contact } from "@/components/sections/contact";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Positioning } from "@/components/sections/positioning";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <FeaturedProjects />
        <Positioning />
        <Competencies />
        <Approach />
        <AboutPreview />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
