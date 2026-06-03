import toolsJson from "@/features/tool/lib/data.json";

import type { ToolItem } from "@/features/tool/lib/definitions";

export const getTools = (): ToolItem[] => toolsJson;
