"use client";

import { m } from "framer-motion";
import { Typography } from "@/components/ui/typography/typography";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import { IoMdHappy } from "react-icons/io";
import { Banner } from "@/components/ui/custom/banner";
import { CarouselContainer } from "./carousel/carousel-container";

// TODO mobile: animation
export function Services() {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const isClient = useIsClient();

  return (
    <div className="flex flex-col lg:flex-row relative min-h-[50vh] lg:py-16 py-8 bg-gray-100 scroll-mt-16 items-center justify-center gap-5 lg:gap-12">
      <div className="flex flex-col lg:gap-5 gap-2 items-center justify-center">
        <Typography
          variant={"h2"}
          weight={"semibold"}
          className="flex text-sawers-blue max-w-lg text-center"
        >
          To lubimy i umiemy robić najlepiej na świecie.
        </Typography>
        <IoMdHappy className="w-16 h-16 text-sawers-sun [animation-duration:5000ms] animate-spin" />
        <Typography
          variant={"h4"}
          weight={"semibold"}
          className="flex text-sawers-blue max-w-md text-center underline-offset-8 underline decoration-sawers-sun"
        >
          Zobacz i przekonaj się sam!
        </Typography>
      </div>
      <CarouselContainer />
    </div>
  );
}
