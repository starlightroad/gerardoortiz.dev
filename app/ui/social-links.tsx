import Link from "next/link";
import ArrowIcon from "@/app/ui/arrow-icon";
import { getSocials } from "@/app/lib/data";

export default function SocialLinks() {
  const socials = getSocials();

  return (
    <ul className="mt-6 flex gap-4">
      {socials.map((social) => {
        const { id, name, location } = social;

        return (
          <li key={id}>
            <Link
              href={location}
              target="_blank"
              className="flex items-center gap-2 rounded-md py-1 text-sm text-gray-600 hover:text-gray-900"
            >
              <span>{name}</span>
              <span>
                <ArrowIcon />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
