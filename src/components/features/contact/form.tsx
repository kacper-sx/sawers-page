'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { Banner } from '@/components/ui/custom/banner'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

// import { schemaClient } from "@/lib/schemas/form-schemas";
import { SharedFields } from '@/lib/schemas/form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const defaultValues: z.infer<ReturnType<typeof SharedFields>> = {
  message: '',
  email: '',
  fullName: '',
  phone: '',
  terms: false,
}

export function ContactForm() {
  const [state, setState] = React.useState<'loading' | 'ready'>('ready')
  const [showMessage, setShowMessage] = React.useState(false)
  const schemaClient = SharedFields()
  const form = useForm<z.infer<typeof schemaClient>>({
    resolver: zodResolver(schemaClient),
    defaultValues: defaultValues,
  })

  function onSubmit(values: z.infer<typeof schemaClient>) {
    console.log(values)
    form.reset(defaultValues)
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className='w-full xl:w-[500px]'
    >
      <Form {...form}>
        <Banner className='flex flex-col gap-5 rounded-32 border border-gray-200 bg-white p-8'>
          {/* fullName */}
          <FormField
            control={form.control}
            name='fullName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Imię i nazwisko</FormLabel>
                <FormControl>
                  <Input
                    variant='form'
                    placeholder='Pawełek Bimberek'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* email & phone */}
          <div className='flex flex-col gap-5 lg:flex-row lg:gap-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adres email</FormLabel>
                  <FormControl>
                    <Input
                      variant='form'
                      placeholder='email@gmail.com'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numer telefonu</FormLabel>
                  <FormControl>
                    <Input
                      variant='form'
                      placeholder='+48 000 000 000'
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
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Twoja wiadomość</FormLabel>
                <FormControl>
                  <Textarea
                    variant='form'
                    placeholder='Treść wiadomości'
                    className='resize-none'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* terms */}
          <FormField
            control={form.control}
            name='terms'
            render={({ field }) => (
              <FormItem>
                <div className='flex items-center gap-3'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel variant='terms'>
                    <Link href='/terms'>Polityka prywatności</Link>
                  </FormLabel>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type='submit'
            className='w-full rounded-64 bg-sawers-blue py-4 text-xl font-medium tracking-wide text-white'
          >
            Wyślij
          </button>
          {/* FormMessage for success */}
          {form.formState.isSubmitSuccessful && (
            <FormMessage variant='button'>
              Formularz został wysłany pomyślnie
            </FormMessage>
          )}
        </Banner>
      </Form>
    </form>
  )
}