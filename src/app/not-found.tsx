import Link from "next/link";

import type { Metadata } from "next";

import { SITE_METADATA, siteNavigationItems } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE_METADATA.notFound.title,
  description: SITE_METADATA.notFound.description,
};

export default function NotFoundPage() {
  const homePageLink = siteNavigationItems[0].href;

  return (
    <main>
      <h1 className="text-foreground mt-10 text-2xl font-medium">Resource Not Found</h1>
      <nav className="pb-5">
        <p className="text-muted-foreground mt-5">
          The resource you are looking for was not found. Please return to the&nbsp;
          <Link href={homePageLink} className="text-muted-foreground text-base underline underline-offset-4">
            home page
          </Link>
          .
        </p>
      </nav>
    </main>
  );
}
