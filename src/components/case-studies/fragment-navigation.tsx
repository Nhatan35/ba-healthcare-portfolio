"use client";

import { useEffect } from "react";

/** Reveal native disclosures when fragment history restores a hidden heading. */
export function FragmentNavigation() {
  useEffect(() => {
    let frame = 0;
    function revealTarget() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let id: string;
        try {
          id = decodeURIComponent(window.location.hash.slice(1));
        } catch {
          return;
        }
        const target = id ? document.getElementById(id) : null;
        if (!target?.closest(".cs-detail")) return;
        for (let parent = target.parentElement; parent; parent = parent.parentElement) {
          if (parent instanceof HTMLDetailsElement) parent.open = true;
        }
        // Headings already have tabindex=-1; retain native Tab order.
        target.focus({ preventScroll: true });
        target.scrollIntoView({ block: "start", behavior: "instant" });
      });
    }
    revealTarget();
    window.addEventListener("hashchange", revealTarget);
    window.addEventListener("popstate", revealTarget);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", revealTarget);
      window.removeEventListener("popstate", revealTarget);
    };
  }, []);
  return null;
}
