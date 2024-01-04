import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { EmailTemplate } from "@/components/features/contact/form-template";
import { env } from "@/env.mjs";

const resend = new Resend(env.RESEND_KEY);
export async function POST(request: Request) {
  const schema = z.object({
    fullName: z
      .string({ required_error: "Imie i nazwisko są wymagane" })
      .min(3, {
        message: "Imię i nazwisko musi składać się z co najmniej 3 znaków.",
      })
      .max(30, {
        message: "Imię i nazwisko nie może zawierać więcej niż 20 znaków.",
      }),
    email: z.string({ required_error: "Adres e-mail jest wymagany" }).email({
      message: "Adres e-mail musi być prawidłowy.",
    }),
    phone: z
      .string({
        required_error: "Numer telefonu jest wymagany",
        invalid_type_error:
          "Serio miałem na to pozwolić? Wprowadź numer a nie znaki",
      })
      .min(5, {
        message: "Numer telefonu musi składać się z co najmniej 5 znaków.",
      })
      .max(20, {
        message: "Numer telefonu nie może przekroczyć 20 znaków.",
      }),
    message: z
      .string({ required_error: "Wiadomość jest wymagana" })
      .min(5, {
        message: "Wiadomość musi składać się z co najmniej 10 znaków.",
      })
      .max(255, {
        message: "Wiadomość nie może zawierać więcej niż 255 znaków.",
      }),
  });

  const data = (await request.json()) as unknown;
  const values = schema.parse(data);
  try {
    await resend.emails.create({
      from: "testujemy@sawers.pl",
      to: "ser2332@wp.pl",
      subject: "Formularz ze strony",
      react: EmailTemplate(values),
      text: `Fullname: ${values.fullName}\nEmail: ${values.email}\nPhone: ${values.phone}\nMessage: ${values.message}`,
    });
    return NextResponse.json({ status: "SUCCESS" });
  } catch (error) {
    return NextResponse.json({ status: "ERROR" });
  }
}
