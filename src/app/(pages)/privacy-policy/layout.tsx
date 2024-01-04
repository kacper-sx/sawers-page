import { type PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

const mdxSpacedCss = cn("[&_h1]:my-8 [&_h2]:my-4");

export default function MDXLayout({ children }: PropsWithChildren) {
  return (
    <main className={cn("container relative mt-24", mdxSpacedCss)}>
      {children}
    </main>
  );
}
