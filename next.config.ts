import createMdx from "@next/mdx";

import type { NextConfig } from "next";

import type { Options as RehypeOptions } from "rehype-pretty-code";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const rehypeOptions: RehypeOptions = {
  theme: "github-light",
};

const withMdx = createMdx({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [["rehype-pretty-code", rehypeOptions]],
  },
});

export default withMdx(nextConfig);
