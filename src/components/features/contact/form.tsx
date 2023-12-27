"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Banner } from "@/components/ui/custom/banner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// import { schemaClient } from "@/lib/schemas/form-schemas";
import { SharedFields } from "@/lib/schemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
export function ContactForm() {
  const [state, setState] = React.useState<"loading" | "ready">("ready");
  const formSchema = React.useMemo(
    () =>
      z.object({
        fullName: z
          .string({ required_error: "Imie i nazwisko są wymagane" })
          .min(3, {
            message: "Imię i nazwisko musi składać się z co najmniej 3 znaków.",
          })
          .max(30, {
            message: "Imię i nazwisko nie może zawierać więcej niż 20 znaków.",
          }),
        email: z
          .string({ required_error: "Adres e-mail jest wymagany" })
          .email({
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
      }),
    []
  );

  const [showMessage, setShowMessage] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    setState("loading");

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("Email sent successfully");

        setShowMessage(true);
        setState("ready");
        const ts = setTimeout(() => setShowMessage(false), 6000);

        form.reset();
        return () => {
          clearTimeout(ts);
        };
      } else {
        throw response;
      }
    } catch (e) {
      console.error(e);
      setState("ready");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full xl:w-[550px]"
      >
        <Banner className="flex flex-col gap-6 rounded-32 border border-gray-200 bg-white p-8">
          {/* fullName */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel variant="form">Imię i nazwisko</FormLabel>
                <FormControl>
                  <Input
                    variant="form"
                    placeholder="Pawełek Bimberek"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* email & phone */}
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-4 w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel variant="form">Adres email</FormLabel>
                  <FormControl>
                    <Input
                      variant="form"
                      placeholder="email@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel variant="form">Numer telefonu</FormLabel>
                  <FormControl>
                    <Input
                      variant="form"
                      placeholder="+48 000 000 000"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel variant="form">Twoja wiadomość</FormLabel>
                <FormControl>
                  <Textarea
                    variant="form"
                    placeholder="Treść wiadomości"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            className="w-full rounded-64 bg-sawers-blue py-4 text-xl font-medium tracking-wide text-white"
          >
            Wyślij
          </button>
          {/* FormMessage for success */}
          {form.formState.isSubmitSuccessful && (
            <FormMessage variant="button">
              Formularz został wysłany pomyślnie
            </FormMessage>
          )}
        </Banner>
      </form>
    </Form>
  );
}
