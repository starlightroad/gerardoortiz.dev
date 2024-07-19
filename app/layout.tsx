import type { Metadata } from "next";
import inter from "@/app/ui/font";
import "@/app/ui/globals.css";
import Navbar from "@/app/ui/navbar";
import { DEVELOPER } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: {
    template: `%s | ${DEVELOPER}`,
    default: DEVELOPER,
  },
  description: "Developer, computer wiz, and father of a green-cheeked conure.",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="mx-4 max-w-3xl lg:mx-auto">{children}</main>
      </body>
    </html>
  );
}
