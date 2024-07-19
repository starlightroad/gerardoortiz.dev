import path from "node:path";
import { readdir, readFile } from "node:fs/promises";
import type { BlogMetadata } from "@/app/lib/definitions";

export const getMDXFiles = async (dir: string) => {
  return (await readdir(dir)).filter((file) => path.extname(file) === ".mdx");
};

export const readMDXFile = async (filePath: string) => {
  const rawContent = await readFile(filePath, "utf-8");
  return parseContent(rawContent);
};

const parseContent = (fileContent: string) => {
  const regex = /---\s*([\s\S]*?)\s*---/;
  const match = regex.exec(fileContent);
  const block = match![1];
  const content = fileContent.replace(regex, "").trim();
  const lines = block.trim().split("\n");
  const metadata: Partial<BlogMetadata> = {};

  lines.forEach((line) => {
    const [key, ...rest] = line.split(": ");
    let value = rest.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1");
    metadata[key.trim() as keyof BlogMetadata] = value;
  });

  return { metadata: metadata as BlogMetadata, content };
};

export const getMDXData = async (dir: string = path.join(process.cwd(), "content")) => {
  const mdxFiles = await getMDXFiles(dir);

  return await Promise.all(
    mdxFiles.map(async (file) => {
      const { metadata, content } = await readMDXFile(path.join(dir, file));
      const slug = path.basename(file, path.extname(file));
      return { metadata, slug, content };
    }),
  );
};
