import type { Project } from "@/app/lib/definitions";
import { navItems, projects, socials } from "@/app/lib/db";

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
