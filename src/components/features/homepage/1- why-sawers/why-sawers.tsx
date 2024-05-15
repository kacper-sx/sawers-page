'use client'

import { Typography } from '@/components/ui/typography/typography'
import { bottomOpacityEntranceVariant } from '@/lib/framer-variants'
import { m } from 'framer-motion'
import { AccordionCard } from './accordion-card'
const MotionTypography = m(Typography)
export function WhySawers() {
  return (
    <div className='flex w-screen items-center bg-gray-100 flex-col px-5 gap-8 pt-8 lg:gap-16 lg:py-16 lg:px-[300px]'>
      <MotionTypography
        initial='hidden'
        whileInView='visible'
        variants={bottomOpacityEntranceVariant({ delay: 0.2 })}
        variant={'h2'}
        
        weight={'semibold'}
        className='text-sawers-blue text-center'
      >
       Dlaczego montaż klimatyzacji czy pompy ciepła u Sawers?
      </MotionTypography>
      <AccordionCard className='w-full' />
    </div>
  )
}
