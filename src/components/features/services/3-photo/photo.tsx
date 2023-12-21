"use client";
import { PhotoGrid } from "@/components/ui/custom/photo-grid";
import { Typography } from "@/components/ui/typography/typography";
import { Button } from "@/components/ui/button";
import { m } from "framer-motion";
import { bottomOpacityEntranceVariant } from "@/lib/framer-variants";
import { Banner } from "@/components/ui/custom/banner";

const paths = [
  "/services-photos/p1.jpg",
  "/services-photos/p2.jpg",
  "/services-photos/p3.jpg",
  "/services-photos/p4.jpg",
];
export function Photovoltaic() {
  const MotionTypography = m(Typography);
  return (
    <div className="flex w-screen items-center bg-gray-100 flex-col px-5 gap-8 py-8 lg:gap-16 lg:py-16 lg:px-[200px]">
      <MotionTypography
        initial="hidden"
        whileInView="visible"
        variants={bottomOpacityEntranceVariant({ delay: 0.2 })}
        variant={"h2"}
        weight={"semibold"}
        className="text-sawers-blue text-center"
      >
        Fotowoltaika
      </MotionTypography>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">
        <PhotoGrid
          photosPaths={paths}
          isLeft
          className="relative z-10 order-first h-96 w-full lg:w-1/2 pt-16 lg:order-none lg:h-auto lg:pt-0"
        />
        <Banner className="flex flex-col gap-5 items-center px-8 py-5 shadow-xl">
          <Typography
            variant={"h3"}
            weight={"semibold"}
            className="text-sawers-blue"
          >
            Oferta zawiera
          </Typography>
          <Button variant={"sawersCall"} className="place-self-end">
            Darmowa wycena
          </Button>
          <Typography
            variant={"h3"}
            weight={"semibold"}
            className="text-sawers-blue"
          >
            Oferujemy projekt i realizację instalacji fotowoltaicznych
          </Typography>
          <Button variant={"sawersCall"} className="place-self-end">
            Darmowa wycena
          </Button>
          <Typography
            variant={"h3"}
            weight={"semibold"}
            className="text-sawers-blue"
          >
            Oferujemy projekt i realizację instalacji fotowoltaicznych
          </Typography>
          <Button variant={"sawersCall"} className="place-self-end">
            Darmowa wycena
          </Button>
        </Banner>
      </div>
    </div>
  );
}
