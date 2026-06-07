import { isMatch } from "@/lib/utils";

import { siteNavigationItems } from "@/lib/constants";

export const createBlogUrl = (articleId: string) => {
  const navigationItem = siteNavigationItems.filter((siteNavigationItem) => isMatch(siteNavigationItem.label, "blog"));

  return `${navigationItem[0].href}/${articleId}`;
};
