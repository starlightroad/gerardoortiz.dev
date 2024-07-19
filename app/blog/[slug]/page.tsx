import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPosts } from "@/app/lib/data";

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
  const publicationDate = new Date(String(blogPost?.metadata.publishedAt));
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "2-digit",
    year: "numeric",
  };

  if (!blogPost) {
    notFound();
  }

  return (
    <article className="my-12">
      <header>
        <h1 className="text-3xl font-medium text-gray-900">{blogPost.metadata.title}</h1>
        <p className="mb-12 mt-6 text-gray-600">
          <time dateTime={blogPost.metadata.publishedAt}>
            Published {publicationDate.toLocaleDateString("en-us", dateOptions)}
          </time>
        </p>
      </header>
      <article>
        <MDXRemote source={blogPost.content} />
      </article>
    </article>
  );
}
