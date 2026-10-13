export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Ecos La Brea Wiki",
  shortName: "Ecos La Brea",
  logoText: "E",
  tagline: "Creature Guides, Survival Tips, Maps & Tier Lists",
  description: "Your ultimate Ecos La Brea wiki! Explore playable creatures, survival strategies, hunting tips, maps, tier lists, and progression guides for the prehistoric Roblox survival game.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ecos-la-brea.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ecos-la-brea.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/12550651382/Ecos-La-Brea",
  heroVideoId: "nOfquDXj0xI", // ECOS: LA BREA | OFFICIAL TRAILER
  social: {
    discord: "https://discord.gg/ecoslabrea",
    youtube: "https://www.youtube.com/@Ecos_Roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
