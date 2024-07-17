import type { SocialLink } from "@/app/lib/definitions";

export const projects = [
  {
    id: "f0c852a2-a0ee-4afb-bbdb-cdbe1de4fe53",
    name: "Bookmarky",
    description: "Bookmark manager that allows you to store and organize your favorite websites",
    location: "#",
    repository: "https://github.com/starlightroad/bookmarky",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Next Auth"],
    imageUrl: "/img/projects/bookmarky-lg.jpg",
    archived: false,
    pinned: false,
  },
  {
    id: "25ae9392-5e80-4aec-b0b1-d3a56be2cdfa",
    name: "Pokemon API",
    description: "API that contains data about Pokemon, moves, TMs, and HMs from generation I",
    location: "https://pokemon-api.devgerardoortiz.com",
    repository: "https://github.com/starlightroad/bookmarky",
    tags: ["React", "React Router", "Redux", "Node.js", "Express", "MongoDB"],
    imageUrl: "/img/projects/pokemon-api-lg.jpg",
    archived: false,
    pinned: true,
  },
  {
    id: "57b66b26-a4b2-44bc-91dc-e78077556938",
    name: "Nues",
    description:
      "News app that utilizes the Newscatcher API to display content from various sources",
    location: "https://nues.devgerardoortiz.com",
    repository: "https://github.com/starlightroad/nues",
    tags: ["React", "React Router", "Redux", "Newscatcher API"],
    imageUrl: "/img/nues-lg.jpg",
    archived: false,
    pinned: true,
  },
];

export const socials: SocialLink[] = [
  {
    id: "54ac4ba3-62bc-40cd-affe-cd11df1cf730",
    name: "View GitHub profile",
    location: "https://github.com/starlightroad",
  },
  {
    id: "bac909eb-f53f-4270-9add-1e346d2d1ba1",
    name: "Send email message",
    location: "mailto:contact@devgerardoortiz.com",
  },
];

export const navItems = [
  {
    name: "home",
    location: "/",
  },
  {
    name: "projects",
    location: "/projects",
  },
  {
    name: "blog",
    location: "/blog",
  },
  {
    name: "utilities",
    location: "/utilities",
  },
];
