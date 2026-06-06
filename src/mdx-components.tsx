import Link from "next/link";

import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => <h1 className="text-foreground mt-10 text-2xl font-medium">{children}</h1>,
  h2: ({ children }) => <h2 className="text-foreground my-5 text-xl font-medium">{children}</h2>,
  p: ({ children }) => <p className="text-muted-foreground my-5 leading-[28.5px]">{children}</p>,
  a: ({ children, href }) => (
    <Link href={href} className="text-muted-foreground text-base underline underline-offset-4">
      {children}
    </Link>
  ),
  ul: ({ children }) => <ul className="list-disc space-y-1 pl-5">{children}</ul>,
  li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
  pre: ({ children, ...rest }) => (
    <pre {...rest} className="overflow-auto rounded-md border border-black/10">
      {children}
    </pre>
  ),
  code: ({ children, ...rest }) => (
    <code {...rest} className="overflow-auto rounded-lg p-5 text-sm">
      {children}
    </code>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
