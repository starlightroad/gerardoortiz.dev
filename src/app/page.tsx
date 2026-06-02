import Link from "next/link";

import type { Metadata } from "next";

import { createMailTo } from "@/lib/utils";

import { DEVELOPER_PROFILE, SITE_METADATA } from "@/lib/constants";

const workItems = [
  {
    label: "DeviceMGR",
    href: "#",
  },
  {
    label: "NCMS",
    href: "#",
  },
];

export const metadata: Metadata = {
  title: SITE_METADATA.home.title,
};

export default function HomePage() {
  return (
    <main>
      <h1 className="text-foreground mt-10 text-2xl font-medium">
        Crafting clean, responsive web experiences with React and JavaScript.
      </h1>
      <p className="text-muted-foreground my-5">
        Hi, I&apos;m a self-taught developer dedicated to building functional, well-structured applications. My
        background as a {DEVELOPER_PROFILE.title} brings a methodical, detail-oriented perspective to front-end and
        back-end engineering.
      </p>
      <p className="text-muted-foreground my-5">
        I write type-safe code, containerize applications with Docker, and manage my own deployments across a custom VPS
        environment.
      </p>
      <p className="text-muted-foreground my-5">Some of my recent work:</p>
      <nav>
        <ul className="list-disc pl-5">
          {workItems.map((workItem) => {
            const { label, href } = workItem;

            return (
              <li key={label.toLowerCase()} className="text-muted-foreground">
                <Link href={href} className="text-base underline underline-offset-4">
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <p className="text-muted-foreground my-5">
        You can reach me via&nbsp;
        <Link href={createMailTo(DEVELOPER_PROFILE.email)} className="text-base underline underline-offset-4">
          {DEVELOPER_PROFILE.email}
        </Link>
        , view my&nbsp;
        <Link
          href={DEVELOPER_PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base underline underline-offset-4"
        >
          codebase
        </Link>
        , or&nbsp;
        <Link
          href={DEVELOPER_PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base underline underline-offset-4"
        >
          connect
        </Link>
        &nbsp;via LinkedIn.
      </p>
    </main>
  );
}
