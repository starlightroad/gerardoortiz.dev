import Link from "next/link";

import Image from "next/image";

import ThemeButton from "@/components/theme/theme-button";

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between py-10">
      <nav>
        <p className="text-base font-medium">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image src="logo-light.svg" width={20} height={20} alt="Gerardo Ortiz's site logo." />
            Gerardo Ortiz
          </Link>
        </p>
      </nav>
      <ThemeButton />
    </header>
  );
}
