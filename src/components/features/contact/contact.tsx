"use client";
import { Typography } from "@/components/ui/typography/typography";
import { ContactForm } from "./form";
import { Banner } from "@/components/ui/custom/banner";
import { MainContact } from "@/components/common/main-contact";
import { RegisterData } from "./register-data/register-data";
import { CustomLink } from "../footer/bottom-section/bottom-footer";

export function ContactContent() {
  return (
    <div className="flex w-screen justify-center bg-gray-100 flex-col px-5 gap-8 py-16 lg:flex-row lg:gap-16 lg:py-16 lg:px-[200px]">
      <div className="flex flex-col gap-4">
        <Banner
          variant={"less-rounded"}
          className="flex flex-col gap-4 px-5 py-4"
        >
          <Typography
            variant={"h3"}
            weight={"semibold"}
            className="text-sawers-blue"
          >
            Główny Kontakt
          </Typography>
          <MainContact />
        </Banner>
        <Banner
          variant={"less-rounded"}
          className="flex flex-col gap-4 px-5 py-4"
        >
          <Typography
            variant={"h3"}
            weight={"semibold"}
            className="text-sawers-blue"
          >
            Dane Rejestrowe
          </Typography>
          <div className="flex flex-col gap-2">
            {RegisterData.map(({ content }, index) => (
              <Typography
                key={`${index}-contact-section`}
                variant={"p"}
                weight={"regular"}
                className="text-dark-foreground-62"
              >
                {content}
              </Typography>
            ))}
          </div>
        </Banner>
      </div>
      <ContactForm />
      <div className="flex flex-col max-w-[200px] place-self-center">
        <Typography variant="small2" className="text-dark-foreground-62">
          Wysyłając nam ten ten formularz, potwierdzasz, że zapoznałeś się i
          zrozumiałeś
        </Typography>

        <CustomLink
          href="/privacy-policy"
          className="uppercase"
          text={"POLITYKĘ PRYWATNOŚCI"}
        />
      </div>
    </div>
  );
}
