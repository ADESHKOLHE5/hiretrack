import { siteConfig } from "@/config/site";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const siteName = siteConfig?.name ?? "My Site"; // guard against missing config

  return (
    <footer className="border-t">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-center px-4 text-sm text-muted-foreground">
        <span suppressHydrationWarning>
          © {CURRENT_YEAR} {siteName}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}