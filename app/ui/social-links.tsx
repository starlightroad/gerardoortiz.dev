import Link from "next/link";
import ArrowIcon from "@/app/ui/arrow-icon";
import { getSocials } from "@/app/lib/data";

export default function SocialLinks() {
  const socials = getSocials();

  return (
    <ul className="mt-6 flex flex-col gap-4 sm:flex-row">
      {socials.map((social) => {
        const { id, name, location } = social;

        return (
          <li key={id}>
            <Link
              href={location}
              target="_blank"
              className="group flex items-center gap-2 rounded-md py-1 text-blue-600 hover:text-blue-400"
            >
              <span>{name}</span>
              <span>
                <ArrowIcon className="text-blue-600 group-hover:text-blue-400" />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
