import type { Metadata } from "next";

import { getArticleMetadataById, getArticles } from "@/data/article";

type ArticlePageProps = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export const generateStaticParams = () => {
  const articles = getArticles();

  return articles.map((article) => ({
    id: article.id,
  }));
};

export const generateMetadata = async ({ params }: ArticlePageProps): Promise<Metadata> => {
  const { id } = await params;

  const metadata = getArticleMetadataById(id);

  return metadata;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;

  const { default: Article } = await import(`@/features/article/content/${id}.mdx`);

  return <Article />;
}
