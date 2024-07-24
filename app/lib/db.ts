import type { SocialLink, Utility } from "@/app/lib/definitions";

export const projects = [
  {
    id: "f0c852a2-a0ee-4afb-bbdb-cdbe1de4fe53",
    name: "Bookmarky",
    description: "Bookmark manager that allows you to store and organize your favorite websites.",
    location: "#",
    repository: "https://github.com/starlightroad/bookmarky",
    tags: [
      { id: "b5472422-25ba-4d23-8aaf-af8e73c2668b", name: "Next.js" },
      { id: "492a9a04-481a-4dd1-a1c9-e6d9cdb7d6e4", name: "TypeScript" },
      { id: "52a07095-a87b-4c4b-8eb2-c84af5247575", name: "PostgreSQL" },
      { id: "9b1511d2-f729-4492-be0e-413becc23e87", name: "Prisma" },
      { id: "b97ea646-8e59-4132-82ee-807ebb8658e8", name: "Next Auth" },
    ],
    imageUrl: "/img/projects/bookmarky-lg.jpg",
    archived: false,
    pinned: false,
  },
  {
    id: "25ae9392-5e80-4aec-b0b1-d3a56be2cdfa",
    name: "Pokemon API",
    description: "API that contains data about Pokemon, moves, TMs, and HMs from generation I.",
    location: "https://pokemon-api.devgerardoortiz.com",
    repository: "https://github.com/starlightroad/bookmarky",
    tags: [
      { id: "1aea6a90-d000-40e4-8ac9-1f2edf19df57", name: "React" },
      { id: "8bd4ffd7-cd2b-4af3-81f3-5cda59a99ffa", name: "React Router" },
      { id: "f9cacd09-7540-4f80-a01f-9e2dbc88a32f", name: "Redux" },
      { id: "5a44d95e-afd1-48a2-a88a-0cec788d9ac9", name: "Node.js" },
      { id: "adbc209b-4a8c-488f-b52b-d570947a5756", name: "Express" },
      { id: "ef29ae50-f29f-4643-af4d-8d48d122a04a", name: "MongoDB" },
    ],
    imageUrl: "/img/projects/pokemon-api-lg.jpg",
    archived: false,
    pinned: true,
  },
  {
    id: "57b66b26-a4b2-44bc-91dc-e78077556938",
    name: "Nues",
    description:
      "News app that utilizes the Newscatcher API to display content from various sources.",
    location: "https://nues.devgerardoortiz.com",
    repository: "https://github.com/starlightroad/nues",
    tags: [
      { id: "96ffea71-0a07-4655-8d26-f823d12e3511", name: "React" },
      { id: "256bd518-0dae-495d-9354-e75838c16228", name: "React Router" },
      { id: "dbac82e7-3f22-42c2-ad6e-20bbe65bc599", name: "Redux" },
      { id: "c069281d-9139-472b-93a3-f23391829f8f", name: "Newscatcher API" },
    ],
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

export const utilities: Utility[] = [
  {
    id: "c0eb6780-6e08-4549-b17e-1a45a0bb9176",
    name: "Time Duration Calculator",
    description: "A time calculator that calculates how long something occurred between two dates.",
    location: "https://go-time-duration-calculator.netlify.app",
    repository: "https://github.com/starlightroad/time-duration-calculator",
  },
  {
    id: "ab8af1fd-3af8-446e-a809-75b31f15470c",
    name: "UUID Generator",
    description: "An online UUID generator that generates random IDs.",
    location: "",
    repository: "",
  },
];
