import type { MDXComponents } from "mdx/types";
import { Typography } from "@/components/ui/typography/typography";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <Typography className="py-4" as="h2" variant={"h1"}>
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography
        className="py-3 text-3xl [text-transform:none] lg:text-4xl"
        as="h3"
        variant={"h2"}
      >
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography className="py-2" as="h4" variant={"h3"}>
        {children}
      </Typography>
    ),
    h4: ({ children }) => (
      <Typography className="py-1" as="h5" variant={"h4"}>
        {children}
      </Typography>
    ),

    p: ({ children }) => (
      <Typography className="py-1" variant={"p"}>
        {children}
      </Typography>
    ),
    ul: ({ children }) => (
      <Typography className="accent-nfuViolet" variant={"list"}>
        {children}
      </Typography>
    ),
    img: ({ src, alt }) => (
      <Image
        className="h-auto w-full max-w-full"
        src={src ?? "/assets/_nfu_logo.png"}
        alt={alt ?? ""}
        width={1200}
        height={600}
      />
    ),
    li: ({ children, className }) => (
      <Typography
        className={cn(
          className?.includes("task-list-item") &&
            "flex items-center gap-2 py-0.5",
          className
        )}
        as="li"
      >
        {children}
      </Typography>
    ),
    input: ({ ...props }) => (
      <input {...props} className="h-4 w-4" disabled={false} />
    ),
    ...components,
  };
}
