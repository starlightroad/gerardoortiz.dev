import type { Metadata } from "next";

import { SITE_METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE_METADATA.blog.title,
  description: SITE_METADATA.blog.description,
};

export default function BlogPage() {
  return (
    <main className="pb-10">
      <h1 className="text-foreground mt-10 text-2xl font-medium">Articles</h1>
      <p className="text-muted-foreground mt-5">Content is on its way. Stay tuned!</p>
    </main>
  );
}
