import Link from "next/link";
import type { Metadata } from "next";
import { getBlogPosts } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Blog() {
  const blogs = await getBlogPosts();

  return (
    <section className="my-12">
      <article className="grid gap-4">
        <h1 className="mb-2 text-3xl font-medium text-gray-900">Blog</h1>
        {blogs
          .sort((a, b) => {
            if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) return -1;
            return 1;
          })
          .map((blog) => {
            const { metadata, slug } = blog;
            const publicationDate = new Date(metadata.publishedAt).toISOString().split("T")[0];
            const location = `/blog/${slug}`;

            return (
              <article key={slug}>
                <Link href={location} className="-mx-3 flex gap-4 rounded-xl p-3 hover:bg-gray-50">
                  <p className="hidden text-gray-600 sm:block">{publicationDate}</p>
                  <h2 className="font-medium text-gray-900">{metadata.title}</h2>
                </Link>
              </article>
            );
          })}
      </article>
    </section>
  );
}
