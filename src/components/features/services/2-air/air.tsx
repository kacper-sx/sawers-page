"use client";
import { PhotoGrid } from "@/components/ui/custom/photo-grid";
import { Typography } from "@/components/ui/typography/typography";
import { Button } from "@/components/ui/button";
import { m } from "framer-motion";
import { bottomOpacityEntranceVariant } from "@/lib/framer-variants";
import { Banner } from "@/components/ui/custom/banner";
import { Pump, Air, Maintenance } from "./data";
import Link from "next/link";

const paths = [
  "/services-photos/s1.jpg",
  "/services-photos/s2.jpg",
  "/services-photos/s3.jpg",
  "/services-photos/s4.jpg",
];
export function AirCondition() {
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
        Klimatyzacja i pompy ciepła
      </MotionTypography>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
        <MotionBanner
          initial="hidden"
          whileInView="visible"
          variants={bottomOpacityEntranceVariant({ delay: 0.3 })}
          className="flex flex-col gap-6 w-full lg:max-w-lg xl:max-w-2xl lg:px-8 lg:py-8 px-5 py-5 shadow-lg items-center h-max place-self-center"
        >
          <Typography
            variant={"h3"}
            weight={"semibold"}
            className="text-sawers-blue text-center"
          >
            Dobór odpowiedniego urządzenia
          </Typography>
          <Typography variant={"p"} className="text-dark-foreground-62">
            Każde urządzenie dobieramy indywidualnie po wizji lokalnej lub na
            podstawie przesłanych planów pomieszczenia lub budynku.
          </Typography>
          <Typography
            variant={"h3"}
            weight={"semibold"}
            className="text-sawers-blue text-center"
          >
            Oferujemy nastpępujące urządzenia
          </Typography>
          <div className="flex flex-col xl:flex-row gap-5 xl:gap-12 xl:ml-12 w-full justify-center items-center">
            <ul className="flex flex-col gap-5 list-disc w-max text-dark-foreground-62">
              {Pump.map(({ content }, index) => (
                <li key={`${index}-pump`}>
                  <Typography
                    weight={"medium"}
                    className="text-dark-foreground-62 w-max"
                  >
                    {content}
                  </Typography>
                </li>
              ))}
            </ul>
            <div className="flex w-3/4 bg-sawers-sun h-[2px] xl:hidden"></div>
            <ul className="flex flex-col gap-5 list-disc w-max text-dark-foreground-62">
              {Air.map(({ content }, index) => (
                <li key={`${index}-air`}>
                  <Typography
                    weight={"medium"}
                    className="text-dark-foreground-62 w-max"
                  >
                    {content}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <Typography
            variant={"h3"}
            weight={"semibold"}
            className="text-sawers-blue text-center"
          >
            Serwis i konserwacja
          </Typography>
          <Typography variant={"p"} className="text-dark-foreground-62">
            Każde zamontowane urządzenie powinno raz na 2 lata przejść okresowy
            przegląd, podczas którego wykonywane są czynności takie jak:
            sprawdzenie szczelności układ, mycie jednostek, odgrzybianie,
            uzupełnienie czynnika chłodzącego i inne wymagane czynnosci w
            zależności od stanu urządzenia.
          </Typography>

          <Typography
            variant={"h4"}
            weight={"semibold"}
            className="text-sawers-blue underline-offset-8 underline decoration-sawers-sun mb-2 text-center"
          >
            Na każde urządzenie udzielamy gwarancji!
          </Typography>
          <Button variant={"sawersCall"} asChild>
            <Link href={"/contact"}>Darmowa wycena</Link>
          </Button>
        </MotionBanner>
        <PhotoGrid
          photosPaths={paths}
          className="relative z-10 order-first h-96 md:h-[500px] w-full xl:h-screen lg:order-none lg:h-auto"
        />
      </div>
    </div>
  );
}
