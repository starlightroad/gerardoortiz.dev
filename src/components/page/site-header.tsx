import Link from "next/link";

import { DEVELOPER_PROFILE } from "@/lib/constants";

import SiteLogo from "@/components/page/site-logo";

import ThemeButton from "@/components/theme/theme-button";

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between py-10">
      <nav>
        <p className="text-base font-medium">
          <Link href="/" className="text-foreground inline-flex items-center gap-2">
            <SiteLogo />
            {DEVELOPER_PROFILE.name}
          </Link>
        </p>
      </nav>
      <ThemeButton />
    </header>
  );
}
