import type { Metadata } from "next";

import articlesJson from "@/features/article/lib/data.json";

import type { ArticleItem } from "@/features/article/lib/definitions";

export const getArticles = (): ArticleItem[] => articlesJson;

export const getArticleById = (articleId: string) => {
  const article = articlesJson.find((article) => article.id === articleId);

  return article;
};

export const getArticleMetadataById = (articleId: string): Metadata => {
  const metadata = articlesJson.find(({ id }) => id === articleId);

  return {
    title: metadata?.title,
    description: metadata?.description,
    authors: [{ name: metadata?.author, url: "https://gerardoortiz.dev" }],
    other: {
      "article:published": metadata?.publishedAt ?? "",
    },
  };
};
