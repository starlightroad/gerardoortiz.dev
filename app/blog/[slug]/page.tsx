import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPosts } from "@/app/lib/data";
import MDXComponent from "@/app/ui/mdx";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: Pick<Props, "params">): Promise<Metadata> {
  const { params } = props;
  const slug = params.slug;

  const blogs = await getBlogPosts();
  const blogPost = blogs.find((blogPost) => blogPost.slug === slug);

  return {
    title: blogPost?.metadata.title,
    description: blogPost?.metadata.description,
  };
}

export default async function Blog({ params }: Pick<Props, "params">) {
  const blogPost = (await getBlogPosts()).find((blogPost) => blogPost.slug === params.slug);
  let publishedAt = blogPost?.metadata.publishedAt;

  if (!publishedAt?.includes("T")) publishedAt = `${publishedAt}T00:00:00`;

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const publicationDate = new Date(String(publishedAt)).toLocaleString("en-us", dateOptions);

  if (!blogPost) {
    notFound();
  }

  return (
    <article className="my-12">
      <header>
        <h1 className="text-3xl font-medium text-gray-900">{blogPost.metadata.title}</h1>
        <p className="mb-12 mt-6 text-gray-600">
          <time dateTime={publishedAt}>Published on {publicationDate}</time>
        </p>
      </header>
      <article>
        <MDXComponent content={blogPost.content} />
      </article>
    </article>
  );
}
