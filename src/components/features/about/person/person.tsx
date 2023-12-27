"use client";
import { Typography } from "@/components/ui/typography/typography";
import { PersonalCardSectionDesktop } from "./card-desktop";
import { m } from "framer-motion";
import { bottomOpacityEntranceVariant } from "@/lib/framer-variants";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import { PersonalCardSectionMobile } from "./card-mobile";

export function Person() {
  const MotionTypography = m(Typography);
  const isClient = useIsClient();
  const isMobile = useMediaQuery("(max-width: 786px)");
  return isClient ? (
    <div className="flex w-screen items-center bg-gray-100 flex-col px-5 gap-8 pt-8 lg:gap-16 lg:py-16 lg:px-[100px]">
      <MotionTypography
        initial="hidden"
        whileInView="visible"
        variants={bottomOpacityEntranceVariant({ delay: 0.2 })}
        variant={"h2"}
        weight={"semibold"}
        className="text-sawers-blue text-center"
      >
        Poznajcie szefa i pracownika każdego miesiąca
      </MotionTypography>
      {isMobile ? (
        <PersonalCardSectionMobile />
      ) : (
        <PersonalCardSectionDesktop />
      )}
    </div>
  ) : null;
}
