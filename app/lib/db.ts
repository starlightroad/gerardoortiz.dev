import type { Project, SocialLink, Utility } from "@/app/lib/definitions";

export const projects: Project[] = [
  {
    id: "049551a3-9f5b-4c8c-91f6-94a6fda8d856",
    name: "Toolbox",
    description: "A collection of web-based utilities I have developed.",
    location: "https://toolbox.gerardoortiz.dev",
    repository: "https://github.com/starlightroad/toolbox",
    tags: [
      { id: "5a5744e1-36d7-4a1a-bb2c-7181b9136fc5", name: "Vite" },
      { id: "8badf14f-fbf5-4346-a0a4-392d9538ec7b", name: "TypeScript" },
      { id: "3069b702-c8b0-4b75-835b-9381ae091a1b", name: "Tailwind CSS" },
      { id: "c84ce72d-6f50-4a4b-ab3e-8729618c05ce", name: "Docker" },
      { id: "29717f9f-c503-4063-8183-f28d103a896a", name: "Nginx" },
    ],
    archived: false,
    pinned: true,
  },
  {
    id: "1b81123b-ff2c-45ea-a4c9-cfd8cab381dc",
    name: "NCMS",
    description: "A management system that allows you to keep track of network circuits.",
    location: "https://ncms.gerardoortiz.dev",
    repository: "https://github.com/starlightroad/ncms",
    tags: [
      { id: "d85c1a7d-1dda-4b23-99b1-20d4d69192da", name: "Next.js" },
      { id: "10173912-42b0-4a1a-b6ca-8c6c4583a5a8", name: "TypeScript" },
      { id: "4c36d1b8-7cf4-4e73-92d3-21154ca4dd5e", name: "PostgreSQL" },
      { id: "7edca8d6-432f-402c-b981-259bcbe0f2a5", name: "Prisma" },
      { id: "298313e6-6e10-472a-8983-d7bca4508991", name: "Auth.js" },
      { id: "52df5a21-2043-48d8-86c4-23e734600ad1", name: "Mapbox GL JS" },
      { id: "e5b4d606-03cd-4a4e-bade-4aa9bb36e12d", name: "Docker" },
    ],
    archived: false,
    pinned: true,
  },
  {
    id: "f0c852a2-a0ee-4afb-bbdb-cdbe1de4fe53",
    name: "Bookmarky",
    description: "Bookmark manager that allows you to store and organize your favorite websites.",
    location: "https://bookmarky-app.vercel.app",
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
    repository: "https://github.com/starlightroad/pokemon-api",
    tags: [
      { id: "1aea6a90-d000-40e4-8ac9-1f2edf19df57", name: "React" },
      { id: "8bd4ffd7-cd2b-4af3-81f3-5cda59a99ffa", name: "React Router" },
      { id: "f9cacd09-7540-4f80-a01f-9e2dbc88a32f", name: "Redux" },
      { id: "5a44d95e-afd1-48a2-a88a-0cec788d9ac9", name: "Node.js" },
      { id: "adbc209b-4a8c-488f-b52b-d570947a5756", name: "Express" },
      { id: "ef29ae50-f29f-4643-af4d-8d48d122a04a", name: "MongoDB" },
    ],
    imageUrl: "/img/projects/pokemon-api-lg.jpg",
    archived: true,
    pinned: false,
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
    archived: true,
    pinned: false,
  },
  {
    id: "3bc06d43-8508-4ca9-b341-78bc779e2d18",
    name: "devgerardoortiz.com",
    description: "My portfolio website built with Vite.",
    location: "https://devgerardoortiz.com",
    repository: "https://github.com/starlightroad/gerardoortiz",
    tags: [
      { id: "f502edc4-7be8-4234-979e-0f304c1fa671", name: "Vite" },
      { id: "273532d9-1a98-475a-9934-d9da1e1f82b5", name: "React" },
      { id: "8325ab4d-2e66-460e-b15e-aca87083618c", name: "React Router" },
      { id: "fbeeb935-0e4f-49d9-9b58-75b30c08d8ca", name: "Redux" },
    ],
    archived: true,
    pinned: false,
  },
  {
    id: "4aa054a3-48ca-4959-a72f-b4e9d9b998a1",
    name: "University Finder",
    description: "This project involves finding universities at a given location.",
    location: "https://university-finder-us.cyclic.app/",
    repository: "https://github.com/starlightroad/university-finder",
    tags: [
      { id: "c7ce7ccf-dcbc-4f18-a56a-ceac86bab1c5", name: "HTML" },
      { id: "913dce5e-3da4-4964-acb7-1899c14c7abe", name: "CSS" },
      { id: "7abe4eee-91c6-423a-beb0-43310885a59f", name: "JavaScript" },
      { id: "a33475d5-8d29-4fa7-b0e1-c600145bc0ec", name: "Node.js" },
      { id: "c97619da-21f6-4939-8abe-8782d1b660b8", name: "Express.js" },
      { id: "3b0231da-e120-4237-b292-beccd67de3ca", name: "Mongoose" },
      { id: "adbd4aa7-0e92-42c7-adef-5296e7cbfa50", name: "Mapbox API" },
      { id: "f5f62afd-f5f7-438f-8731-a4d9803f82ed", name: "Yelp API" },
    ],
    archived: true,
    pinned: false,
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
    location: "mailto:hello@gerardoortiz.dev",
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
    description: "A time calculator that calculates how long something occurred between two times.",
    location: "https://toolbox.gerardoortiz.dev/time-duration-calculator",
    repository: "",
  },
  {
    id: "ab8af1fd-3af8-446e-a809-75b31f15470c",
    name: "UUID Generator",
    description: "An online UUID generator that generates random IDs.",
    location: "https://toolbox.gerardoortiz.dev/random-id-generator",
    repository: "",
  },
];
