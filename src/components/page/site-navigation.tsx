import Link from "next/link";

import { siteNavigationItems } from "@/lib/constants";

export default function SiteNavigation() {
  return (
    <header>
      <nav>
        <ul className="flex items-center gap-5">
          {siteNavigationItems.map((siteNavigationItem) => {
            const { label, href } = siteNavigationItem;

            return (
              <li key={label.toLowerCase()}>
                <Link href={href} className="text-muted-foreground text-base underline underline-offset-4">
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
