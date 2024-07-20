import Link from "next/link";
import { getBlogPosts } from "@/app/lib/data";

export default async function RecentBlogs() {
  const blogs = await getBlogPosts();
  const filteredBlogs = blogs.slice(0, 3);

  return (
    <section>
      <article className="grid gap-4">
        <h2 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">Recent Blogs</h2>
        {filteredBlogs.map((blog) => {
          const { publishedAt, title } = blog.metadata;
          const id = `blog-${blog.slug}`;

          const publicationDate = new Date(publishedAt).toISOString().split("T")[0];
          const location = `/blog/${title.toLowerCase().split(" ").join("-")}`;

          return (
            <article key={id}>
              <Link
                href={location}
                className="-mx-3 flex gap-4 rounded-xl p-3 hover:bg-gray-50 dark:hover:bg-white dark:hover:bg-opacity-5"
              >
                <p className="hidden text-gray-600 sm:block dark:text-white dark:text-opacity-75">
                  {publicationDate}
                </p>
                <h2 className="font-medium text-gray-900 dark:text-white">{title}</h2>
              </Link>
            </article>
          );
        })}
      </article>
    </section>
  );
}
