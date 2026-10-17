import { BrandMark } from "@/components/ui/brand-mark";

export function SiteFooter({ pageLabel = "Homepage prototype." }: { pageLabel?: string }) {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div className="brand"><BrandMark /><span>Healthcare BA<span className="brand-caption">Clarity at every handoff.</span></span></div>
        <p>{pageLabel} Content awaiting verification.</p>
        <a href="#home" className="text-link">Back to top</a>
      </div>
    </footer>
  );
}
