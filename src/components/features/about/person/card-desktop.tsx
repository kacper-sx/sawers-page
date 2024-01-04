"use client";
import { Typography } from "@/components/ui/typography/typography";
import { bottomOpacityEntranceVariant } from "@/lib/framer-variants";
import { m } from "framer-motion";
import Image from "next/image";
import { Banner } from "@/components/ui/custom/banner";

// TODO make w/ Banner
export function PersonalCardSectionDesktop() {
  return (
    <Banner
      variant={"card"}
      className="group flex overflow-hidden max-w-3xl xl:justify-between"
    >
      <Image
        src={"/photos/robert.jpg"}
        alt={"photo"}
        width={100}
        height={100}
        priority
        className="md:w-[280px] object-cover"
      />

      <div className="flex w-full flex-col gap-4 border-sawers-blue p-8  group-hover:border-b-2">
        <div className="flex gap-2">
          <Typography
            variant={"table"}
            weight={"medium"}
            className="min-w-max text-sawers-blue"
          >
            Robert Saweczko
          </Typography>
        </div>

        <Typography
          variant={"small"}
          weight={"regular"}
          className="min-w-min max-w-xl text-dark-foreground-62"
        >
          Cześć, jestem Robert. Od 15 lat działam w branży chłodnictwa i
          telewizji przemysłowej. Razem z zaufanymi patrnerami montujemy pompy
          ciepła i instalacje fotowoltaiczne. Nie stosuję się do instrukcji,
          robię po swojemu i lepiej. Działam sam bo tylko wtedy wiem, że robota
          będzie zrobiona porządnie jak Pan Bóg przykazał.
        </Typography>
        <Typography
          variant={"small2"}
          weight={"regular"}
          className="text-dark-foreground-62"
        >
          Stanowisko - Prywaciarz
        </Typography>
      </div>
    </Banner>
  );
}
