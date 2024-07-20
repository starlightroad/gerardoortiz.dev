import Link from "next/link";
import { getProjects } from "@/app/lib/data";
import ArrowIcon from "@/app/ui/arrow-icon";

export default function PinnedProjects() {
  const projects = getProjects();
  const pinned = projects.filter((project) => project.pinned);

  return (
    <section>
      <header>
        <h2 className="mb-6 text-xl font-medium text-gray-900 dark:text-white">Pinned Projects</h2>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {pinned.map((project) => {
          const { id, name, description, location } = project;

          return (
            <li key={id}>
              <Link
                href={location}
                target="_blank"
                className="flex items-center gap-2 rounded-xl bg-gray-50 p-4 dark:bg-white dark:bg-opacity-5"
              >
                <header>
                  <h2 className="mb-3 font-medium text-gray-900 dark:text-white">{name}</h2>
                  <p className="line-clamp-2 text-gray-600 dark:text-white dark:text-opacity-75">
                    {description}
                  </p>
                </header>
                <span>
                  <ArrowIcon />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
