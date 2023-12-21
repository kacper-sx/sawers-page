import { HeroOpacityBg } from "@/components/common/hero-pages";
export const metadata = {
  title: "Certyfikaty",
  description: "Strona przedstawiająca certyfikaty firmy Sawers",
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
    </main>
  );
}
