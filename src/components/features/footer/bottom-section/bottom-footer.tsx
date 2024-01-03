import Logo from "@/components/ui/assets/logo";
import { Typography } from "@/components/ui/typography/typography";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
type CustomLinkProps = {
  text: string;
  href: string;
} & React.HTMLAttributes<HTMLElement>;

const CustomLink = ({ text, href, ...props }: CustomLinkProps) => {
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
          "text-dark-foreground-62 underline underline-offset-2 group-hover:text-dark-foreground",
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
      {/* <CustomLink text={'Terms and Conditions'} href={'/'}></CustomLink> */}

      <Typography variant="small2" className="text-dark-foreground-62">
        ©2023 - Sawers | All right reserved
      </Typography>
      <div className="flex items-center gap-1">
        <Typography variant="small2" className="text-dark-foreground-62">
          Designed and developed by
        </Typography>

        <CustomLink
          href="https://www.facebook.com/kacper.saweczko"
          className="uppercase"
          text={"Kacper-sx"}
        />
      </div>
    </div>
  );
}
