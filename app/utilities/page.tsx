import Link from "next/link";
import type { Metadata } from "next";
import { getUtilities } from "@/app/lib/data";
import ArrowIcon from "@/app/ui/arrow-icon";

export const metadata: Metadata = {
  title: "Utilities",
};

export default function Utilities() {
  const utilities = getUtilities();

  return (
    <section className="my-12">
      <header>
        <h1 className="text-3xl font-medium text-gray-900">Useful Utilities</h1>
        <p className="mb-12 mt-6 text-gray-600">
          Utilities I have built and use on a regular basis.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {utilities.map((utility) => {
          const { id, name, description, location } = utility;

          if (!location) {
            return (
              <li key={id}>
                <div className="flex select-none items-center gap-2 rounded-xl bg-gray-50 p-4 hover:cursor-not-allowed">
                  <header className="w-full">
                    <h2 className="mb-3 font-medium text-gray-900">{name}</h2>
                    <p className="line-clamp-2 text-gray-600">{description}</p>
                  </header>
                  <span>
                    <ArrowIcon />
                  </span>
                </div>
              </li>
            );
          }

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
