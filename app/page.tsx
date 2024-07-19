import SocialLinks from "@/app/ui/social-links";
import PinnedProjects from "@/app/ui/pinned-projects";
import RecentBlogs from "@/app/ui/recent-blogs";

export default function Home() {
  return (
    <div className="my-12 grid gap-12">
      <section>
        <header>
          <h1 className="text-3xl font-medium text-gray-900">
            Self-Taught Developer Based in South Florida.
          </h1>
          <p className="mt-6 text-gray-600">
            I build things for the web using React. I currently hold a position at a tech company
            within their network operations center where I am responsible for managing and ensuring
            the seamless operation of their network infrastructure.
          </p>
        </header>
        <SocialLinks />
      </section>
      <PinnedProjects />
      <RecentBlogs />
    </div>
  );
}
