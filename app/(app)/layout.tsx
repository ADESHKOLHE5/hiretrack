import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <span className="font-bold">{siteConfig.name} App</span>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Back to website
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}