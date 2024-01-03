import Lg from "./lg";
import Mitsubishi from "./mitsubishi";
import Cooper from "./cooper";
import Gree from "./gree";
import Rotenso from "./rotenso";
import Hyundai from "./hyundai";
import Samsung from "./samsung";
import { VariantProps, cva } from "class-variance-authority";
import Fujitsu from "./fujitsu";

// const styleVariants = cva("", {
//   variants: {
//     variant: {
//       collab: "h-full w-full text-dark-foreground-62",
//       referrals:
//         "min-h-[80px] min-w-[80px] text-red transition-colors duration-200 group-hover:text-red lg:min-h-[120px] lg:min-w-[120px] lg:text-dark-foreground-62",
//     },
//   },
//   defaultVariants: {
//     variant: "referrals",
//   },
// });

type IconsType = {
  icon: JSX.Element;
};

// export function BuildBrandIcons({
//   variant,
// }: VariantProps<typeof styleVariants>) {
//   const data: IconsType[] = [
//     {
//       icon: <Lg className={styleVariants({ variant })} />,
//     },
//     {
//       icon: <Cooper className={styleVariants({ variant })} />,
//     },
//     {
//       icon: <Mitsubishi className={styleVariants({ variant })} />,
//     },
//     {
//       icon: <Gree className={styleVariants({ variant })} />,
//     },
//     {
//       icon: <Rotenso className={styleVariants({ variant })} />,
//     },
//     {
//       icon: <Hyundai className={styleVariants({ variant })} />,
//     },
//     {
//       icon: <Samsung className={styleVariants({ variant })} />,
//     },
//     {
//       icon: <Fujitsu className={styleVariants({ variant })} />,
//     },
//   ];
//   return data;
// }

export const BuildBrandIcons: IconsType[] = [
  {
    icon: <Mitsubishi className="h-full w-full" />,
  },
  {
    icon: <Lg className="h-full w-full" />,
  },
  {
    icon: <Cooper className="h-full w-full" />,
  },

  {
    icon: <Gree className="h-full w-full" />,
  },
  {
    icon: <Rotenso className="h-full w-full" />,
  },
  {
    icon: <Hyundai className="h-full w-full" />,
  },
  {
    icon: <Samsung className="h-full w-full" />,
  },
  {
    icon: <Fujitsu className="h-full w-full" />,
  },
  {
    icon: <Cooper className="h-full w-full" />,
  },
  {
    icon: <Gree className="h-full w-full" />,
  },
  {
    icon: <Lg className="h-full w-full" />,
  },
  {
    icon: <Mitsubishi className="h-full w-full" />,
  },
  {
    icon: <Rotenso className="h-full w-full" />,
  },
  {
    icon: <Hyundai className="h-full w-full" />,
  },
  {
    icon: <Fujitsu className="h-full w-full" />,
  },
  {
    icon: <Samsung className="h-full w-full" />,
  },
];
