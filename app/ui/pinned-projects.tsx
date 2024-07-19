import Link from "next/link";
import { getProjects } from "@/app/lib/data";
import ArrowIcon from "@/app/ui/arrow-icon";

export default function PinnedProjects() {
  const projects = getProjects();
  const pinned = projects.filter((project) => project.pinned);

  return (
    <section>
      <header>
        <h2 className="mb-6 text-xl font-medium text-gray-900">Pinned Projects</h2>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {pinned.map((project) => {
          const { id, name, description, location } = project;

          return (
            <li key={id}>
              <Link
                href={location}
                target="_blank"
                className="flex items-center gap-2 rounded-xl bg-gray-50 p-4"
              >
                <header>
                  <h2 className="mb-3 font-medium text-gray-900">{name}</h2>
                  <p className="line-clamp-2 text-gray-600">{description}</p>
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
