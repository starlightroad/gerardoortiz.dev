import Link from "next/link";

import type { Metadata } from "next";

import { getArticles } from "@/data/article";

import { SITE_METADATA } from "@/lib/constants";

import { createBlogUrl } from "@/features/article/lib/utils";

export const metadata: Metadata = {
  title: SITE_METADATA.blog.title,
  description: SITE_METADATA.blog.description,
};

export default function BlogPage() {
  const articles = getArticles();

  return (
    <main className="pb-10">
      <h1 className="text-foreground mt-10 text-2xl font-medium">Articles</h1>
      <table className="my-5">
        <thead>
          <tr>
            <th className="text-foreground pr-2.5 text-left font-medium">Date</th>
            <th className="text-foreground pl-2.5 text-left font-medium">Title</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td className="text-muted-foreground py-2.5 pr-2.5">
                <time dateTime={article.publishedAt}>{article.publishedAt}</time>
              </td>
              <td className="text-muted-foreground py-2.5 pl-2.5">
                <Link href={createBlogUrl(article.id)} className="text-base underline underline-offset-4">
                  {article.title}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
