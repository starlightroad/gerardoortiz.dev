"use client";

import Image from "next/image";

import { useTheme } from "@wrksz/themes/client";

import { getSiteLogoByTheme } from "@/lib/utils";

export default function SiteLogo() {
  const { resolvedTheme } = useTheme();

  const siteLogo = getSiteLogoByTheme(resolvedTheme);

  return <Image src={siteLogo} width={20} height={20} alt="Gerardo Ortiz's site logo." />;
}
