'use client'

import { Banner } from '@/components/ui/custom/banner'
import { Typography } from '@/components/ui/typography/typography'
import { bottomOpacityEntranceVariant } from '@/lib/framer-variants'
import { m } from 'framer-motion'
import Image from 'next/image'
import { AdvatagesList } from './list'

const MotionTypography = m(Typography)
const MotionBanner = m(Banner)
export function Advantages() {
  return (
    <div className='flex flex-col bg-gray-100 lg:px-[100px] px-5 lg:py-24 py-8 lg:gap-16 gap-8 items-center'>
      <MotionTypography
        initial='hidden'
        whileInView='visible'
        variants={bottomOpacityEntranceVariant({ delay: 0.3 })}
        variant={'h2'}
        weight={'semibold'}
        className='text-sawers-blue text-center'
      >
        Montaż klimatyzacji i pompy ciepła - korzyści
      </MotionTypography>

      <MotionBanner
        initial='hidden'
        whileInView='visible'
        variants={bottomOpacityEntranceVariant({ delay: 0.6 })}
        className='flex flex-col lg:flex-row lg:gap-16 lg:pl-5 lg:py-5 gap-8 items-center overflow-hidden shadow-xl'
      >
        <AdvatagesList />
        <Image
          src={'/photos/foto7.jpg'}
          alt={'foto'}
          width={500}
          height={500}
          className='object-cover '
        />
      </MotionBanner>
    </div>
  )
}
