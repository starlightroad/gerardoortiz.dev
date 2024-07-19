import Link from "next/link";
import { createElement } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { codeToHtml } from "shiki";
import ArrowIcon from "@/app/ui/arrow-icon";

type Props = {
  content: string;
};

const createHeading = (level: number) => {
  const Element = ({ children }: any) => {
    return createElement(
      `h${level}`,
      { className: "my-3 text-xl font-medium text-gray-900" },
      children,
    );
  };
  return Element;
};

function CustomText(props: any) {
  return <p className="py-3 text-gray-600" {...props} />;
}

function CustomLink(props: any) {
  const href = props.href;

  if (href.startsWith("http")) {
    return (
      <Link
        href={href}
        target="_blank"
        className="group inline-flex items-center gap-1 text-blue-600 hover:text-blue-400"
        {...props}
      >
        {props.children}
        <ArrowIcon className="text-blue-600 group-hover:text-blue-400" />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

async function CustomCode(props: any) {
  const htmlCode = await codeToHtml(props.children, {
    lang: "typescript",
    theme: "one-light",
    structure: "inline",
  });
  const newProps = { ...props };
  delete newProps.children;

  return (
    <code
      dangerouslySetInnerHTML={{ __html: htmlCode }}
      {...newProps}
      className="block px-4 text-sm"
    />
  );
}

function CustomPre(props: any) {
  return (
    <div className="py-3">
      <pre className="overflow-x-auto rounded-xl bg-gray-50 py-4" {...props} />
    </div>
  );
}

const components = {
  h2: createHeading(2),
  a: CustomLink,
  code: CustomCode,
  pre: CustomPre,
  p: CustomText,
};

export default function MDXComponent({ content }: Props) {
  return <MDXRemote source={content} components={components} />;
}
