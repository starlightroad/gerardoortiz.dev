"use client";

import { LightbulbIcon } from "lucide-react";

import { useTheme } from "@wrksz/themes/client";

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      title="Toggle theme"
      className="relative inline-flex h-8 w-8 items-center justify-center"
      onClick={handleThemeChange}
    >
      <LightbulbIcon className="size-4 rotate-180" />
      <PowerIndicator />
    </button>
  );
}

function PowerIndicator() {
  return <span className="absolute bottom-1.75 -z-10 h-3 w-3 rounded-full bg-yellow-300 dark:bg-transparent" />;
}
