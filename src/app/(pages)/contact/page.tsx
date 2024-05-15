import { HeroOpacityBg } from "@/components/common/hero-pages";
import { ContactContent } from "@/components/features/contact/contact";
export const metadata = {
  title: "Kontakt | Sawers Saweczko Robert",
  alternates: {
      canonical: "https://sawers.pl/contact",
    },
  description:
    "Dane kontaktowe i dane rejestrowe Sawers Saweczko Robert. Uzyskaj wycenę klimatyzacji i innych usług.",
};
export default function Home() {
  return (
    <main>
      <HeroOpacityBg
        heading={"KONTAKT"}
        subHeading={"Napisz, zadzwoń, pogadamy"}
        src={"/photos/foto2.jpg"}
        paragraph={"Nie ważne jaki masz problem, pomożemy!"}
        isContact
      />
      <ContactContent />
    </main>
  );
}
