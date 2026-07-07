"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/gtag";

export function AnalyticsEvents() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      const page = window.location.pathname;

      if (href.includes("wa.me")) {
        trackEvent("whatsapp_click", {
          page_path: page,
          link_text: anchor.textContent?.trim().slice(0, 60),
        });
      } else if (href.toLowerCase().endsWith(".pdf")) {
        trackEvent("lead_magnet_download", {
          page_path: page,
          file: href,
        });
      } else if (href.startsWith("tel:") || href.startsWith("mailto:")) {
        trackEvent("contact_click", {
          page_path: page,
          channel: href.startsWith("tel:") ? "telefone" : "email",
        });
      }
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
