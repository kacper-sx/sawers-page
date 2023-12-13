'use client'

import { m } from 'framer-motion'
import { useIsClient, useMediaQuery } from 'usehooks-ts'

import { CarouselContainer } from './carousel/carousel-container'

// TODO mobile: animation
export function Services() {
  const isMobile = useMediaQuery('(max-width: 1024px)')

  const isClient = useIsClient()

  return (
    <div className='flex relative min-h-screen py-8 lg:pb-24 lg:pt-16 bg-gray-100 scroll-mt-16 items-center justify-center gap-24'>
      <CarouselContainer />
    </div>
  )
}
