import workJson from "@/features/work/lib/data.json";

import type { WorkItem } from "@/features/work/lib/definitions";

export const getWork = (): WorkItem[] => workJson;

export const getFeaturedWork = (): WorkItem[] => workJson.filter((work) => work.featured);
