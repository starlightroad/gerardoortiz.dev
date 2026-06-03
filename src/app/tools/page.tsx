import Link from "next/link";

import { getTools } from "@/data/tool";

export default function ToolsPage() {
  const toolItems = getTools();

  return (
    <main>
      <h1 className="text-foreground mt-10 text-2xl font-medium">Tools</h1>
      <p className="text-muted-foreground my-5">Useful tools from web that&apos;s worth sharing:</p>
      <nav>
        <ul className="list-disc pl-5">
          {toolItems.map((toolItem) => {
            const { id, label, href } = toolItem;

            return (
              <li key={id} className="text-muted-foreground">
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base underline underline-offset-4"
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </main>
  );
}
