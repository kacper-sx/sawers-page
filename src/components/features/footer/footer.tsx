import Logo from "@/components/ui/assets/logo";
import Link from "next/link";
import React from "react";
import BottomFooter from "./bottom-section/bottom-footer";
import { MainContact } from "@/components/common/main-contact";
import { Typography } from "@/components/ui/typography/typography";
import MainLinks from "./main-links/main-links";

export default function Footer() {
  return (
    <div className="flex flex-col w-full px-5 lg:px-[100px]">
      <div className="flex flex-col gap-8 lg:items-center items-start lg:justify-between lg:flex-row lg:py-16 py-8 border-b border-sawers-blue">
        <Link href={"/"} className="lg:w-1/2 w-11/12 place-self-center">
          <Logo />
          <div className="sr-only">Sawers LOGO</div>
        </Link>
        <div className="flex flex-col gap-2">
          <Typography
            variant={"h3"}
            weight={"semibold"}
            className="text-sawers-blue"
          >
            Główny Kontakt
          </Typography>
          <MainContact />
        </div>
        <div className="flex flex-col gap-2">
          <Typography
            variant={"h3"}
            weight={"semibold"}
            className="text-sawers-blue"
          >
            Linki Ogólne
          </Typography>
          <MainLinks />
        </div>
      </div>

      <BottomFooter />
    </div>
  );
}
