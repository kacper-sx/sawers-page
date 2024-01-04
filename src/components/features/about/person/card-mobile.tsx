import { Typography } from "@/components/ui/typography/typography";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Banner } from "@/components/ui/custom/banner";

export function PersonalCardSectionMobile() {
  return (
    <Banner className=" flex w-full flex-col items-start gap-4 overflow-hidden rounded-2xl bg-white pb-8 shadow-xl">
      <div className="flex w-full gap-2 border-b-[1px] border-sawers-blue">
        <Image
          src={"/photos/robert.jpg"}
          alt={"photo"}
          width={0}
          height={0}
          sizes="100vw"
          className="h-40 w-28 object-cover"
        />

        <div className="flex flex-col gap-2">
          <Typography
            variant={"table"}
            weight={"medium"}
            className="max-w-[150px] text-sawers-blue"
          >
            Robert Saweczko
          </Typography>

          <Typography
            variant={"small2"}
            weight={"regular"}
            className="text-dark-foreground-62"
          >
            Stanowisko Prywaciarz
          </Typography>
        </div>
      </div>

      <div className="flex px-5 ">
        <Typography
          variant={"small"}
          weight={"regular"}
          className="text-dark-foreground-62 "
        >
          Cześć, jestem Robert. Od 15 lat działam w branży chłodnictwa i
          telewizji przemysłowej. Razem z zaufanymi patrnerami montujemy pompy
          ciepła i instalacje fotowoltaiczne. Nie stosuję się do instrukcji,
          robię po swojemu i lepiej. Działam sam bo tylko wtedy wiem, że robota
          będzie zrobiona porządnie jak Pan Bóg przykazał.
        </Typography>
      </div>
    </Banner>
  );
}
