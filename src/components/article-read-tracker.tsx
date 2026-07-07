"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/gtag";

export function ArticleReadTracker({ slug }: { slug: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      if (el.getBoundingClientRect().top < window.innerHeight) fire();
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        // isIntersecting cobre o scroll normal; top < 0 cobre saltos que
        // passam do sentinela sem intersecção reportada
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) fire();
      }
    });

    function fire() {
      if (fired.current) return;
      fired.current = true;
      trackEvent("article_read", { article_slug: slug });
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    }

    observer.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [slug]);

  return <div ref={ref} aria-hidden="true" />;
}
