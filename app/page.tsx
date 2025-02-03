import type { Metadata } from "next";
import SocialLinks from "@/app/ui/social-links";
import PinnedProjects from "@/app/ui/pinned-projects";
import RecentBlogs from "@/app/ui/recent-blogs";
import { DEVELOPER } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: `${DEVELOPER} - Building Web Apps with React and Docker`,
};

export default function Home() {
  return (
    <div className="my-12 grid gap-12">
      <section>
        <header>
          <h1 className="text-3xl font-medium text-gray-900 dark:text-white">
            Full-Stack Developer Building Scalable Web Apps with React and Docker
          </h1>
          <p className="mt-6 text-gray-600 dark:text-white dark:text-opacity-75">
            As a self-taught web developer, I focus on building modern applications using React,
            Next.js, and Docker. I'm continuously learning and applying new skills through my
            personal projects, focusing on performance, scalability, and user experience.
          </p>
        </header>
        <SocialLinks />
      </section>
      <PinnedProjects />
      <RecentBlogs />
    </div>
  );
}
