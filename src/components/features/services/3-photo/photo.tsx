"use client";
import { PhotoGrid } from "@/components/ui/custom/photo-grid";
import { Typography } from "@/components/ui/typography/typography";
import { Button } from "@/components/ui/button";
import { m } from "framer-motion";
import { bottomOpacityEntranceVariant } from "@/lib/framer-variants";
import { Banner } from "@/components/ui/custom/banner";
import { Photo } from "./data";
import Link from "next/link";

const paths = [
  "/services-photos/p1.jpg",
  "/services-photos/p2.jpg",
  "/services-photos/p3.jpg",
  "/services-photos/p4.jpg",
];
export function Photovoltaic() {
  const MotionTypography = m(Typography);

  const MotionBanner = m(Banner);
  return (
    <div className="flex w-screen items-center bg-gray-100 flex-col px-5 gap-8 py-8 lg:gap-16 lg:px-[150px]">
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
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
        <PhotoGrid
          photosPaths={paths}
          isLeft
          className="relative z-10 order-first h-96 md:h-[500px] w-full xl:h-screen lg:order-none lg:h-auto"
        />
        <MotionBanner
          className="flex flex-col gap-6 w-full lg:max-w-lg xl:max-w-2xl lg:px-8 lg:py-8 px-5 py-5 shadow-lg items-center h-max place-self-center"
          initial="hidden"
          whileInView="visible"
          variants={bottomOpacityEntranceVariant({ delay: 0.3 })}
        >
          <Typography
            variant={"h3"}
            weight={"semibold"}
            className="text-sawers-blue"
          >
            Od czego zacząć?
          </Typography>
          <Typography variant={"p"} className="text-dark-foreground-62">
            Rodzaj i wielkość instalacji fotowoltaicznej najlepiej ustalać na
            podstawie rocznego roczliczenia zużytej energii elektrycznej. Po
            dostarczeniu takiego dokumentu należy wyłącznie podać adres i
            preferencje a my zajmiemy się resztą.
          </Typography>
          <Typography
            variant={"h3"}
            weight={"semibold"}
            className="text-sawers-blue"
          >
            Oferta obejmuje:
          </Typography>
          <ul className="flex flex-col gap-5 list-disc w-max text-dark-foreground-62">
            {Photo.map(({ content }, index) => (
              <li key={`${index}-photo`}>
                <Typography
                  weight={"medium"}
                  className="text-dark-foreground-62 lg:max-w-md max-w-[200px]"
                >
                  {content}{" "}
                </Typography>
              </li>
            ))}
          </ul>
          <Typography
            variant={"h3"}
            weight={"semibold"}
            className="text-sawers-blue"
          >
            Finansowanie
          </Typography>
          <Typography variant={"p"} className="text-dark-foreground-62">
            Oprócz tradycyjnej umowy, istnieje możliwość podpisania umowy
            lizingowej na instalację fotowoltaiczną.
          </Typography>
          <Button variant={"sawersCall"} asChild>
            <Link href={"/contact"}>Darmowy projekt</Link>
          </Button>
        </MotionBanner>
      </div>
    </div>
  );
}
