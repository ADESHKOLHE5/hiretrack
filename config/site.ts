export const siteConfig = {
  name: "HireTrack",
  description: "Track job applications, interviews, and hiring pipelines.",
  url: "http://localhost:3000",
} as const;

export type SiteConfig = typeof siteConfig;
