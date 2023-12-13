'use client'
import { animated, useSpring } from '@react-spring/web'
import React from 'react'
import Image from 'next/image'
import { Typography } from '@/components/ui/typography/typography'
interface CarouselCardProps extends React.ComponentPropsWithoutRef<'div'> {
  href: string
  title: string
}

export function CarouselCard({ href, title, children }: CarouselCardProps) {
  const [show, setShown] = React.useState(false)
  const styleProps = useSpring({
    transform: show ? 'scale(1.03)' : 'scale(1)',
    boxShadow: show
      ? '0 20px 25px rgb(0 0 0 / 25%)'
      : '0 2px 10px rgb(0 0 0 / 8%)',
    margin: '0px',
  })

  return (
    <animated.div
      style={styleProps}
      onPointerEnter={() => setShown(true)}
      onPointerLeave={() => setShown(false)}
      className='flex rounded-3xl'
    >
      <div className='relative flex h-fit flex-col gap-4 pb-4 rounded-3xl items-center bg-white overflow-hidden s:w-[300px] lg:w-[500px] lg:pb-8'>
        <Image
          src={href}
          alt={'foto'}
          width={500}
          height={500}
          className='object-cover'
        />
        <Typography
          variant={'h3'}
          weight={'semibold'}
          className='text-sawers-blue lg:px-8'
        >
          {title}
        </Typography>
        <Typography
          variant={'table'}
          weight={'regular'}
          className='leading-[140%] text-center text-sawers-sun lg:px-8'
        >
          {children}
        </Typography>
      </div>
    </animated.div>
  )
}
