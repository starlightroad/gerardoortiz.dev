import type { Project } from "@/app/lib/definitions";
import { navItems, projects, socials, utilities } from "@/app/lib/db";
import { getMDXData } from "@/app/lib/mdx";

export const getProjects = (): Project[] => {
  return projects;
};

export const getProject = (projectId: string) => {
  return projects.find((project) => project.id === projectId);
};

export const getSocials = () => {
  return socials;
};

export const getNavItems = () => {
  return navItems;
};

export const getBlogPosts = async () => {
  const data = await getMDXData();
  return data;
};

export const getUtilities = () => {
  return utilities;
};
