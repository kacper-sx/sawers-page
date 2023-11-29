'use client'
import { HowWeWorkData } from './data/how-we-work-data'
import { Typography } from '@/components/ui/typography/typography'
import { HowWeWorkSection } from './section'
import { m } from 'framer-motion'
import {
  WorkListItemVariants,
  WorkListVariants,
  bottomOpacityEntranceVariant,
} from '@/lib/framer-variants'
const MotionTypography = m(Typography)
export function HowWeWork() {
  const workdata = HowWeWorkData()
  return (
    <div className='flex flex-col bg-gray-100 lg:px-[100px] px-5 lg:pb-24 py-8 lg:py-0 lg:gap-16 gap-8 items-center'>
      <MotionTypography
        initial='hidden'
        whileInView='visible'
        variants={bottomOpacityEntranceVariant({ delay: 0.2 })}
        variant={'h2'}
        weight={'semibold'}
        className='text-sawers-blue'
      >
        Jak pracujemy?
      </MotionTypography>

      <m.ul
        variants={WorkListVariants}
        initial='hidden'
        whileInView='visible'
        className='flex flex-col lg:flex-row'
      >
        {workdata.map(({ title, insideIcon, content, outsideIcon }, index) => (
          <m.li key={`${index}-how-we-work`} variants={WorkListItemVariants}>
            <HowWeWorkSection
              title={title}
              insideIcon={insideIcon}
              outsideIcon={outsideIcon}
              content={content}
            />
          </m.li>
        ))}
      </m.ul>
    </div>
  )
}
