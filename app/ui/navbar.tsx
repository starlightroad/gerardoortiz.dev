import Link from "next/link";
import { getNavItems } from "@/app/lib/data";

export default function Navbar() {
  const navItems = getNavItems();

  return (
    <header className="flex h-12 items-center border-b border-b-gray-100 dark:border-b-white dark:border-opacity-10">
      <div className="mx-auto flex max-w-screen-md items-center">
        <nav>
          <ul className="flex gap-1">
            {navItems.map((item) => {
              const { name, location } = item;

              return (
                <li key={location}>
                  <Link
                    href={location}
                    className="px-2 py-1 text-sm capitalize text-gray-600 hover:text-gray-900 dark:text-white dark:text-opacity-80 dark:hover:text-white"
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
