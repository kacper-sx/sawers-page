import { HeroOpacityBg } from "@/components/common/hero-pages";
import { ContactContent } from "@/components/features/contact/contact";
export const metadata = {
  title: "Kontakt | Sawers Saweczko Robert",
  description: "Dane kontaktowe Sawers Saweczko Robert",
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
