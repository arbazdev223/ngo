import type { Metadata } from "next";

import { siteContent } from "@/content/config";

export const baseMetadata: Metadata = {
  title: {
    default: siteContent.site.name,
    template: `%s | ${siteContent.site.name}`,
  },
  description: siteContent.site.description,
  keywords: [
    "NGO Delhi",
    "urban workers",
    "migrant workers",
    "community development",
    "legal aid",
    "health and education",
    "Badarpur NGO",
    "Shehri Kamgar Samaj",
  ],
};

export function createPageMetadata(
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
  };
}
