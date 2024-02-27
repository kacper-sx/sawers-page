import Logo from "@/components/ui/assets/logo";
import { Typography } from "@/components/ui/typography/typography";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
type CustomLinkProps = {
  text: string;
  href: string;
} & React.HTMLAttributes<HTMLElement>;

export const CustomLink = ({ text, href, ...props }: CustomLinkProps) => {
  return (
    <Link
      href={href}
      target={href.startsWith("https") ? "_blank" : undefined}
      className="group"
    >
      <Typography
        variant="small2"
        weight="semibold"
        className={cn(
          "text-sawers-blue underline underline-offset-2 group-hover:text-dark-foreground",
          props.className
        )}
      >
        {text}
      </Typography>
    </Link>
  );
};
export default function BottomFooter() {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between py-4">
      <CustomLink
        text={"Polityka Prywatności"}
        href={"/privacy-policy"}
      ></CustomLink>

      <Typography variant="small2" className="text-sawers-blue">
        ©2023 - Sawers | All right reserved
      </Typography>
      <div className="flex items-center gap-1">
        <Typography variant="small2" className="text-sawers-blue">
          Designed and developed by
        </Typography>

        <a
          href="https://www.facebook.com/kacper.saweczko"
          target="_blank"
          rel="noreferrer"
        >
          <Typography
            variant="small2"
            weight="semibold"
            className="text-sawers-blue underline underline-offset-2 uppercase group-hover:text-dark-foreground"
          >
            Kacper-sx
          </Typography>
        </a>
      </div>
    </div>
  );
}
