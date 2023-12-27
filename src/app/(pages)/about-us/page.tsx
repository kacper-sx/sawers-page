import { HeroOpacityBg } from "@/components/common/hero-pages";
import { Numbers } from "@/components/features/about/numbers/numbers";
import { Person } from "@/components/features/about/person/person";
export const metadata = {
  title: "O nas",
  description: "Strona przedstawiająca opis firmy Sawers",
};
export default function Home() {
  return (
    <main>
      <HeroOpacityBg
        heading={"O NAS"}
        subHeading={"Cały ten Sawers na papierze"}
        src={"/photos/foto5.jpg"}
        paragraph={"No i w liczbach żeby nie było "}
        normal
      />

      <Person />
      <Numbers />
    </main>
  );
}
