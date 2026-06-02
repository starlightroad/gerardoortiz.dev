import type { Metadata } from "next";

import { Playfair_Display } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@wrksz/themes/next";

import { DEVELOPER_PROFILE, SITE_METADATA } from "@/lib/constants";

import SiteHeader from "@/components/page/site-header";

import SiteNavigation from "@/components/page/site-navigation";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s - ${DEVELOPER_PROFILE.name}`,
    default: SITE_METADATA.home.title,
  },
  description: SITE_METADATA.home.description,
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${playfairDisplay.className} antialiased`} suppressHydrationWarning>
      <body className="mx-auto max-w-3xl px-5">
        <ThemeProvider defaultTheme="system" disableTransitionOnChange>
          <SiteHeader />
          <SiteNavigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
