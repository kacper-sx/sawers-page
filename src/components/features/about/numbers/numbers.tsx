import { numbersData } from "./data";
import { NumbersSection } from "./section";
import { Typography } from "@/components/ui/typography/typography";
import { Banner } from "@/components/ui/custom/banner";

export function Numbers() {
  return (
    <div className="flex flex-col bg-gray-100 lg:px-[100px] px-5 lg:pb-24 py-8 lg:py-0 lg:gap-16 gap-5 items-center">
      <Typography
        variant={"h2"}
        weight={"semibold"}
        className="text-sawers-blue"
      >
        Liczby nie kłamią...
      </Typography>
      <div className="grid grid-cols md:grid-cols-2 xl:flex xl:flex-row lg:gap-10 gap-5">
        {numbersData.map(({ number, insideIcon, content }, index) => (
          <NumbersSection
            key={`${index}-number`}
            number={number}
            insideIcon={insideIcon}
            content={content}
          />
        ))}
      </div>
    </div>
  );
}
