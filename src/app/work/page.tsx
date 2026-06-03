import Link from "next/link";

import { getWork } from "@/data/work";

import { DEVELOPER_PROFILE } from "@/lib/constants";

export default function WorkPage() {
  const workItems = getWork();

  return (
    <>
      <main>
        <h1 className="text-foreground mt-10 text-2xl font-medium">Work</h1>
        <p className="text-muted-foreground my-5">A collection of applications built on clean user interfaces.</p>
        {workItems.map((workItem) => {
          const { id, label, description, features, liveUrl, repoUrl, teckStack } = workItem;

          const headingAnchor = `#${id}`;

          return (
            <article key={id} className="my-5">
              <Link href={headingAnchor} className="group inline-flex items-center gap-1 text-base">
                <h2 id={id} className="text-foreground text-xl font-medium">
                  {label}
                </h2>
                <span className="hidden text-xl group-hover:inline">#</span>
              </Link>
              <p className="text-muted-foreground my-5">{description}</p>
              <nav>
                <ul className="flex items-center gap-2">
                  <li>
                    <Link
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-base underline underline-offset-4"
                    >
                      Live Demo
                    </Link>
                  </li>
                  <li className="text-muted-foreground"> · </li>
                  <li>
                    <Link
                      href={repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-base underline underline-offset-4"
                    >
                      GitHub Repo
                    </Link>
                  </li>
                </ul>
              </nav>
              <p className="text-muted-foreground my-5">Features:</p>
              <ul className="list-disc space-y-1 pl-5">
                {features.map((feature) => (
                  <li key={feature.toLowerCase()} className="text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground my-5">Tech stack:</p>
              <ul className="list-disc space-y-1 pl-5">
                {teckStack.map((techStack) => {
                  const keyId = `${workItem.id}-${techStack.toLowerCase()}`;

                  return (
                    <li key={keyId} className="text-muted-foreground">
                      {techStack}
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </main>
      <footer className="pb-5">
        <p className="text-muted-foreground my-5">
          You can explore more of my work via&nbsp;
          <Link
            href={DEVELOPER_PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
      </footer>
    </>
  );
}
