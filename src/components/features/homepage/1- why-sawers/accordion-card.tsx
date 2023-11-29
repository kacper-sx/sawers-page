'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { bottomOpacityEntranceVariant } from '@/lib/framer-variants'
import { cn } from '@/lib/utils'
import { m } from 'framer-motion'
import React from 'react'
import { useIsClient } from 'usehooks-ts'
import { Banner } from '@/components/ui/custom/banner'
import { AccordionData } from './data/why-sawers'

const MotionBanner = m(Banner)

export function AccordionCard({ className }: React.ComponentProps<'div'>) {
  return (
    <MotionBanner
      initial='hidden'
      whileInView='visible'
      variants={bottomOpacityEntranceVariant({ delay: 0.4 })}
      className={cn('py-2.5 lg:px-10 lg:py-8 shadow-xl', className)}
    >
      <Accordion type='single' collapsible defaultValue='item-0'>
        {AccordionData.map(({ title, content }, index) => (
          <AccordionItem
            key={`${index}-why-sawers-accordion`}
            value={`item-${index}`}
          >
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </MotionBanner>
  )
}
