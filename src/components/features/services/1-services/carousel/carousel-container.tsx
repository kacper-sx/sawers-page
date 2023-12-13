import { config } from '@react-spring/web'
import dynamic from 'next/dynamic'
import React from 'react'
// import { useScopedI18n } from '~/locales/client'
import { CarouselCard } from './carousel-card'
import { cardsData1, cardsData2 } from './carousel-data'
import { Typography } from '@/components/ui/typography/typography'

// @ts-expect-error something fkd w/ lib props, but not problematic
const Carousel = dynamic(() => import('react-spring-3d-carousel'), {
  ssr: false,
})

export function CarouselContainer() {
  const cards = React.useMemo(
    () =>
      Array.from({ length: 3 }).map((_, i) => {
        const cardData = cardsData1[i] // Access the data directly using the index

        return {
          key: `${i}-carousel-card`,
          content: (
            <CarouselCard
              key={`${i}-carousel-card`}
              title={cardData.title}
              href={cardData.href}
            >
              {cardData.content}
            </CarouselCard>
          ),
        }
      }),
    [] // Include cardsData in the dependency array if it can change
  )
  const cards2 = React.useMemo(
    () =>
      Array.from({ length: 3 }).map((_, i) => {
        const cardData = cardsData2[i] // Access the data directly using the index

        return {
          key: `${i}-carousel-card2`,
          content: (
            <CarouselCard
              key={`${i}-carousel-card2`}
              title={cardData.title}
              href={cardData.href}
            >
              {cardData.content}
            </CarouselCard>
          ),
        }
      }),
    [] // Include cardsData in the dependency array if it can change
  )
  const [goToSlide, setGoToSlide] = React.useState<number>(0)

  const autoPlayRef = React.useRef<NodeJS.Timeout>()

  React.useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setGoToSlide((prevIndex) => (prevIndex + 1) % cards.length)
    }, 4000)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  })

  return (
    <div className='flex relative flex-col lg:gap-28 gap-10 items-center'>
      <div className='flex relative flex-col gap-4 lg:gap-16 items-center'>
        <Typography variant={'h2'} weight={'bold'} className='text-sawers-blue'>
          Główne usługi
        </Typography>
        <div className='mx-auto	h-[300px] lg:h-[400px] s:w-[300px] m:w-[350px] l:w-[380px] tablet:w-[500px] lg:w-[800px]'>
          <Carousel
            goToSlideDelay={500}
            slides={cards}
            // index -> autoplay, goToSlide -> manual
            goToSlide={goToSlide}
            offsetRadius={2}
            showNavigation={false}
            animationConfig={config.default}
          />
        </div>
      </div>
      <div className='flex relative flex-col gap-4 lg:gap-16 items-center'>
        <Typography variant={'h2'} weight={'bold'} className='text-sawers-blue'>
          Dodatkowe usługi
        </Typography>
        <div className='mx-auto	h-[300px] lg:h-[400px] s:w-[300px] m:w-[350px] l:w-[380px] tablet:w-[450px] lg:w-[700px]'>
          <Carousel
            goToSlideDelay={500}
            slides={cards2}
            // index -> autoplay, goToSlide -> manual
            goToSlide={goToSlide}
            offsetRadius={2}
            showNavigation={false}
            animationConfig={config.default}
          />
        </div>
      </div>
    </div>
  )
}
