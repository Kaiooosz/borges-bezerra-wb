import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";

const BASE_URL = "https://www.bezerraborges.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, priority: 1, changeFrequency: "weekly" },
    { url: `${BASE_URL}/servicos`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/servicos/planejamento-patrimonial`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/servicos/internacionalizacao`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/servicos/cripto-fintechs`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/servicos/juridico-estrategico`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/servicos/legal-growth`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/servicos/contencioso`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/holding`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/offshore`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/consultoria`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/sobre-nos`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/artigos`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/contact`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE_URL}/termos-de-uso`, priority: 0.2, changeFrequency: "yearly" },
    { url: `${BASE_URL}/politica-de-privacidade`, priority: 0.2, changeFrequency: "yearly" },
    { url: `${BASE_URL}/politica-de-cookies`, priority: 0.2, changeFrequency: "yearly" },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/artigos/${article.slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...articleRoutes];
}
