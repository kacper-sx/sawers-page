"use client";

import { m } from "framer-motion";
import { Typography } from "@/components/ui/typography/typography";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import { IoMdHappy } from "react-icons/io";
import { Banner } from "@/components/ui/custom/banner";
import { CarouselContainer } from "../1-services/carousel/carousel-container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// TODO mobile: animation
export function SideServices() {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const isClient = useIsClient();

  return (
    <div className="flex flex-col lg:flex-row relative min-h-[50vh] lg:pb-32 lg:pt-16 py-8 px-5 bg-gray-100 scroll-mb-16 items-center justify-center gap-5 lg:gap-12">
      <CarouselContainer isMain />

      <div className="flex flex-col lg:gap-5 gap-2 items-center justify-center">
        <Typography
          variant={"h2"}
          weight={"semibold"}
          className="flex text-sawers-blue max-w-lg text-center"
        >
          A to robimy hobbystycznie ale też najlepiej na świecie.
        </Typography>
        <IoMdHappy className="w-16 h-16 text-sawers-sun [animation-duration:5000ms] animate-spin" />
        <Button variant={"sawersCall"} asChild>
          <Link href={"/contact"}>Pogadajmy!</Link>
        </Button>
      </div>
    </div>
  );
}
