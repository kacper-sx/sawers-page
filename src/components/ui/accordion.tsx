'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { Typography } from './typography/typography'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('px-6 py-3 lg:py-8', className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

type AccordionTriggerProps = {
  fleetPage?: boolean
  size?: string
  payload?: string
} & React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(
  (
    { fleetPage = false, size, payload, className, children, ...props },
    ref
  ) => (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'group flex flex-1 items-center justify-between gap-4 lg:gap-12',
          className
        )}
        {...props}
      >
        <Typography
          variant='h4'
          weight='semibold'
          as='span'
          className='min-w-max text-sawers-blue'
        >
          {children}
        </Typography>

        <div className='hidden h-px w-full bg-slate-300 transition-colors duration-200 group-data-[state=open]:h-0.5 group-data-[state=open]:bg-sawers-sun lg:block'></div>

        {fleetPage && (
          <>
            <Typography
              variant='small'
              className='hidden min-w-max text-dark-foreground-62 group-data-[state=open]:hidden xl:block'
            >
              {size}
            </Typography>

            <div className='h-[3px] w-full bg-slate-300 transition-colors duration-200 group-data-[state=closed]:hidden group-data-[state=open]:bg-sawers-sun lg:h-px lg:group-data-[state=open]:hidden lg:group-data-[state=open]:h-0.5 xl:group-data-[state=closed]:block'></div>

            <Typography
              variant='small'
              className='hidden min-w-max text-dark-foreground-62 group-data-[state=open]:hidden xl:block'
            >
              {payload}
            </Typography>
          </>
        )}

        <ChevronDown
          className='ml-1 shrink-0 text-slate-300 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-sawers-sun'
          size={32}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
)
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

type AccordionContentProps = {
  fleetPage?: boolean
} & React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ fleetPage = false, className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className
    )}
    {...props}
  >
    {fleetPage ? (
      <div className='flex flex-col gap-4 pt-4 2xl:grid 2xl:grid-cols-2 2xl:items-center 2xl:gap-16 2xl:pt-9 [&_svg]:mx-auto 2xl:[&_svg]:justify-self-end'>
        {children}
      </div>
    ) : (
      <Typography className='pt-4 text-sawers-blue lg:pt-8'>
        {children}
      </Typography>
    )}
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }

