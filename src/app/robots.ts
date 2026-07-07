import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/consultoria/sucesso"],
    },
    sitemap: "https://www.bezerraborges.com.br/sitemap.xml",
  };
}
