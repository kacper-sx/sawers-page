"use client";
import { Phone, Wrench, BookOpenText, PencilRuler } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

import { IoMdArrowRoundDown } from "react-icons/io";
import { HiArrowSmRight } from "react-icons/hi";

type WorkData = {
  title: string;
  insideIcon: JSX.Element;
  content: string;
  outsideIcon?: JSX.Element;
};

export function HowWeWorkData() {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const howWeWorkData: WorkData[] = [
    {
      title: "Kontakt",
      insideIcon: <Phone className="w-8 h-8 text-sawers-blue" />,
      content:
        "Najpierw odbieramy telefon, odczytujemy maila i umawiamy się na wizję lokalną w celu przedstawienia możliwych opcji dla klienta",
      outsideIcon: isMobile ? (
        <IoMdArrowRoundDown className="w-8 h-8 lg:w-16 lg:h-16 text-sawers-sun" />
      ) : (
        <HiArrowSmRight className="w-8 h-8 lg:w-16 lg:h-16 text-sawers-sun " />
      ),
    },
    {
      title: "Wycena",
      insideIcon: <BookOpenText className="w-8 h-8 text-sawers-blue" />,
      content:
        "Przyjeżdzamy na miejsce, oglądamy, przedstawiamy najkorzystniejszy wariant i dostarczamy wycenę lub projekt za darmo",
      outsideIcon: isMobile ? (
        <IoMdArrowRoundDown className="w-8 h-8 lg:w-16 lg:h-16 text-sawers-sun" />
      ) : (
        <HiArrowSmRight className="w-8 h-8 lg:w-16 lg:h-24 text-sawers-sun" />
      ),
    },
    {
      title: "Realizacja",
      insideIcon: <PencilRuler className="w-8 h-8 text-sawers-blue" />,
      content:
        "Po zaakceptowaniu oferty przystępujemy do działania czyli przyjeżdżamy na miejce, montujemy, szkolimy i wystawiamy fakturkę.",
      outsideIcon: isMobile ? (
        <IoMdArrowRoundDown className="w-8 h-8 lg:w-16 lg:h-16 text-sawers-sun" />
      ) : (
        <HiArrowSmRight className="w-8 h-8 lg:w-16 lg:h-16 text-sawers-sun" />
      ),
    },
    {
      title: "Konserwacja",
      insideIcon: <Wrench className="w-8 h-8 text-sawers-blue" />,
      content:
        "Każdy nowy produkt objęty jest gwarancją. Dodatkowo co jakiś czas pojawiamy się by wykonać przegląd okresowy w atrakcyjnej cenie",
    },
  ];
  return howWeWorkData;
}
