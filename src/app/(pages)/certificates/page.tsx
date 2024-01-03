import { HeroOpacityBg } from "@/components/common/hero-pages";
import { Collab } from "@/components/features/certificates/collab/collab";
export const metadata = {
  title: "Certyfikaty | Sawers Saweczko Robert",
  description: "Certyfikaty i uprawnienia Sawers Saweczko Robert",
};
export default function Home() {
  return (
    <main>
      <HeroOpacityBg
        heading={"Certyfikaty i uprawnienia"}
        subHeading={"Mamy dyplomy ale w pracy nam to nie przeszkadza"}
        src={"/photos/foto3.jpg"}
        paragraph={"Ale jak to mówią papier jest papier"}
        normal
      />
      <Collab />
    </main>
  );
}
