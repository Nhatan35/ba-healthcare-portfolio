import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function ProjectNotFound() {
  return <><SiteHeader currentPage="project" /><main id="main-content" tabIndex={-1} className="page-container py-16">
    <p className="text-accent">404 · Project not found</p><h1 className="text-4xl mt-4 mb-6">This project is not in the library.</h1>
    <p>Browse the existing candidates to continue.</p><Link href="/projects" className="text-link">Back to Projects</Link>
  </main><SiteFooter pageLabel="Project not found." /></>;
}
