export const DEVELOPER_PROFILE = {
  name: "Gerardo Ortiz",
  title: "Network Operations Center (NOC) Technician",
  email: "hello@gerardoortiz.dev",
  github: "https://github.com/starlightroad",
  linkedin: "https://linkedin.com/in/gerardoortiz443",
};

export const SITE_METADATA = {
  home: {
    title: `${DEVELOPER_PROFILE.name} - Crafting responsive web experiences`,
    description: "A full-stack web developer crafting clean, type-safe web applications with React.",
  },
  work: {
    title: "Work",
    description:
      "Explore a collection of full-stack applications specializing in network asset management and infrastructure mapping built with Next.js and React.",
  },
  blog: {
    title: "Blog",
    description: "Articles and insights on web development. Content is on its way!",
  },
  tools: {
    title: "Tools",
    description:
      "A list of web tools and utilities for developers and network professionals, featuring subnet calculators, regex testers, and specification guides.",
  },
};

export const siteNavigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Tools",
    href: "/tools",
  },
];
