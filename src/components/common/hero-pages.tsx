'use client'
import { Typography } from '@/components/ui/typography/typography'
import { m } from 'framer-motion'
import Image from 'next/image'
import { MoveDown } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

const MotionTypography = m(Typography)
const MotionButton = m(Button)

type Props = {
  heading: string
  subHeading: string
  paragraph: string
  src: string
  isContact?: boolean
  isServices?: boolean
  normal?: boolean
}

export const HeroOpacityBg = ({
  heading,
  subHeading,
  paragraph,
  src,
  isContact,
  isServices,
  normal,
}: Props) => {
  return (
    <div className='relative flex-col flex lg:min-h-screen justify-center pt-28 pb-12 lg:pb-0 lg:pt-[100px] gap-12 items-center bg-background-photo w-full px-5 lg:px-[250px]'>
      <Image
        src={src}
        alt='hero opacity bg'
        className='-z-10 object-cover fixed'
        fill
      />
      <div className='flex flex-col lg:gap-24 gap-5 items-center w-full'>
        <div className='flex w-full bg-dark-foreground-35 h-[2px]'></div>
        <div className='flex flex-col gap-5 items-center'>
          <Typography
            variant='h1'
            weight={'bold'}
            className='lg:max-w-6xl text-sawers-blue text-center'
          >
            {heading}
          </Typography>

          <Typography
            variant='h2'
            weight={'semibold'}
            className='text-sawers-sun text-center'
          >
            {subHeading}
          </Typography>
          <Typography
            variant='p'
            weight={'semibold'}
            className='text-dark-foreground-62 text-center lg:pt-5'
          >
            {paragraph}
          </Typography>
          <div className='flex flex-col lg:flex-row items-center justify-center gap-5 w-full pt-5'>
            {isContact && (
              <Button asChild variant={'sawersService'}>
                <Link href={'/services'}>Sprawdź usługi</Link>
              </Button>
            )}
            {isServices && (
              <Button variant={'sawersCall'} asChild>
                <Link href={'/contact'}>Skontaktuj się</Link>
              </Button>
            )}
            {normal && (
              <>
                <Button asChild variant={'sawersService'}>
                  <Link href={'/services'}>Sprawdź usługi</Link>
                </Button>
                <Button variant={'sawersCall'} asChild>
                  <Link href={'/contact'}>Skontaktuj się</Link>
                </Button>
              </>
            )}
          </div>
        </div>
        <div className='flex w-full bg-dark-foreground-35 h-[2px]'></div>
      </div>
      <div>
        <MoveDown className='text-sawers-blue lg:w-16 lg:h-16 w-8 h-8  animate-bounce' />
      </div>
    </div>
  )
}
