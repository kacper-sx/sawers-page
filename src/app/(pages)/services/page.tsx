import { HeroOpacityBg } from "@/components/common/hero-pages";
import { Services } from "@/components/features/services/1-services/services";
import { AirCondition } from "@/components/features/services/2-air/air";
import { Photovoltaic } from "@/components/features/services/3-photo/photo";
import { SideServices } from "@/components/features/services/side-services/side-services";
export const metadata = {
  title: "Usługi | Sawers Saweczko Robert",
  alternates: {
      canonical: "https://sawers.pl/services",
    },
  description:
    "Klimatyzacja, pompy ciepła, fotowoltaika, monitoring i inne usuługi na terenie Parczewa",
};
export default function Home() {
  return (
    <>
      <HeroOpacityBg
        heading={"USŁUGI"}
        subHeading={"Poznaj nasze lepsze i jeszcze lepsze specjalizacje"}
        src={"/photos/foto4.webp"}
        paragraph={"Klimatyzacja, pompy ciepła, fotowoltaika Parczew"}
        isServices
      />
      <Services />
      <AirCondition />
      <Photovoltaic />
      <SideServices />
    </>
  );
}
