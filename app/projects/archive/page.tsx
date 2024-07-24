import Link from "next/link";
import type { Metadata } from "next";
import { Fragment } from "react";
import { getProjects } from "@/app/lib/data";
import ArrowIcon from "@/app/ui/arrow-icon";

export const metadata: Metadata = {
  title: "Archive",
};

export default function Archive() {
  const archive = getProjects().filter((project) => project.archived);

  return (
    <section className="my-12">
      <article>
        <h1 className="mb-6 text-3xl font-medium text-gray-900 dark:text-white">Archive</h1>
        <div className="grid gap-12">
          {archive.map((project, idx) => {
            const { id } = project;

            return (
              <Fragment key={id}>
                <article>
                  <h2 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">
                    {project.name}
                  </h2>
                  <p className="line-clamp-2 text-gray-600 dark:text-white dark:text-opacity-75">
                    {project.description}
                  </p>
                  <footer>
                    <ul className="mt-4 flex flex-wrap gap-3">
                      {project.tags.map((tag) => {
                        const { id, name } = tag;

                        return (
                          <li key={id}>
                            <p>
                              <span className="block rounded-full bg-gray-50 px-3 py-1 text-sm dark:bg-white dark:bg-opacity-[8%] dark:text-white">
                                {name}
                              </span>
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                    <p className="mt-6 flex flex-wrap text-gray-600 dark:text-white dark:text-opacity-75">
                      See the&nbsp;
                      <Link
                        href={project.location}
                        target="_blank"
                        className="group flex items-center gap-1 text-blue-600 hover:text-blue-400"
                      >
                        <span>live site</span>
                        <ArrowIcon className="text-blue-600 group-hover:text-blue-400" />
                      </Link>
                      &nbsp;or the&nbsp;
                      <Link
                        href={project.repository}
                        target="_blank"
                        className="group flex items-center gap-1 text-blue-600 hover:text-blue-400"
                      >
                        <span>repository</span>
                        <ArrowIcon className="text-blue-600 group-hover:text-blue-400" />
                      </Link>
                      .
                    </p>
                  </footer>
                </article>
                {idx !== archive.length - 1 && (
                  <hr className="border-gray-100 dark:border-white dark:border-opacity-10" />
                )}
              </Fragment>
            );
          })}
        </div>
      </article>
    </section>
  );
}
