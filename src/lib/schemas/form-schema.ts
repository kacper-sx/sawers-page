import * as z from 'zod'

export function SharedFields() {
  const ObjectSharedFields = z.object({
    fullName: z
      .string({ required_error: 'Imie i nazwisko są wymagane' })
      .min(3, {
        message: 'Imię i nazwisko musi składać się z co najmniej 3 znaków.',
      })
      .max(20, {
        message: 'Imię i nazwisko nie może zawierać więcej niż 20 znaków.',
      }),
    email: z.string({ required_error: 'Adres e-mail jest wymagany' }).email({
      message: 'Adres e-mail musi być prawidłowy.',
    }),
    phone: z
      .string({ required_error: 'Numer telefonu jest wymagany' })
      .min(5, {
        message: 'Numer telefonu musi składać się z co najmniej 5 znaków.',
      })
      .max(20, {
        message: 'Numer telefonu nie może przekroczyć 20 znaków.',
      }),
    message: z
      .string({ required_error: 'Wiadomość jest wymagana' })
      .min(10, {
        message: 'Wiadomość musi składać się z co najmniej 10 znaków.',
      })
      .max(255, {
        message: 'Wiadomość nie może zawierać więcej niż 255 znaków.',
      }),
    terms: z.boolean({
      errorMap: () => ({
        message: 'Musisz zaakceptować regulamin.',
      }),
    }),
  })

  return ObjectSharedFields
}
