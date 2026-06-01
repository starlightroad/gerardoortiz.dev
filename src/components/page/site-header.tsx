import Link from "next/link";

import SiteLogo from "@/components/page/site-logo";

import ThemeButton from "@/components/theme/theme-button";

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between py-10">
      <nav>
        <p className="text-base font-medium">
          <Link href="/" className="text-foreground inline-flex items-center gap-2">
            <SiteLogo />
            Gerardo Ortiz
          </Link>
        </p>
      </nav>
      <ThemeButton />
    </header>
  );
}
