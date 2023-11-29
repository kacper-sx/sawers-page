'use client'
import { Typography } from '@/components/ui/typography/typography'
import { bottomOpacityEntranceVariant } from '@/lib/framer-variants'
import { m } from 'framer-motion'
import Image from 'next/image'
import { MoveDown } from 'lucide-react'

const MotionTypography = m(Typography)

type Props = {
  heading: string
  subHeading: string
  src: string
}

export const HeroOpacityBg = ({ heading, subHeading, src }: Props) => {
  return (
    <div className='relative flex-col flex min-h-screen justify-center items-center bg-background-photo  px-5 lg:pl-100px'>
      <Image
        src={src}
        alt='hero opacity bg'
        className='-z-10 object-cover fixed'
        fill
      />
      <div className='flex lg:gap-24 gap-4 items-center'>
        <m.div
          initial='hidden'
          whileInView='visible'
          variants={bottomOpacityEntranceVariant({ delay: 0.6 })}
        >
          <MoveDown className='text-sawers-blue w-16 h-16 animate-bounce' />
        </m.div>
        <div className='flex flex-col gap-5 items-center'>
          <MotionTypography
            initial='hidden'
            whileInView='visible'
            variants={bottomOpacityEntranceVariant({ delay: 0.2 })}
            variant='h1'
            weight={'bold'}
            className='lg:max-w-6xl text-sawers-blue text-center'
          >
            {heading}
          </MotionTypography>

          <MotionTypography
            initial='hidden'
            whileInView='visible'
            variants={bottomOpacityEntranceVariant({ delay: 0.5 })}
            variant='h2'
            weight={'semibold'}
            className='text-sawers-sun text-center'
          >
            {subHeading}
          </MotionTypography>
        </div>
        <m.div
          initial='hidden'
          whileInView='visible'
          variants={bottomOpacityEntranceVariant({ delay: 0.7 })}
        >
          <MoveDown className='text-sawers-sun w-16 h-16 animate-bounce' />
        </m.div>
      </div>
    </div>
  )
}
