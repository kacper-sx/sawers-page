'use client'

import { m } from 'framer-motion'
import { useIsClient, useMediaQuery } from 'usehooks-ts'

import { CarouselContainer } from './carousel/carousel-container'

// TODO mobile: animation
export function Services() {
  const isMobile = useMediaQuery('(max-width: 1024px)')

  const isClient = useIsClient()

  return (
    <div className='relative flex min-h-screen py-24 bg-gray-100 scroll-mt-16 items-center justify-center gap-24'>
      <div className='relative flex items-center justify-between s:flex-col s:gap-0 lg:flex-row lg:gap-32'>
        <CarouselContainer />
      </div>
    </div>
  )
}
