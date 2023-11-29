'use client'
import Image from 'next/image'
import { Typography } from '@/components/ui/typography/typography'
import Logo from '@/components/ui/assets/logo'
import { HeroOpacityBg } from '@/components/common/hero-pages'
import { WhySawers } from '@/components/features/homepage/1- why-sawers/why-sawers'
import { HowWeWork } from '@/components/features/homepage/2-how-we-work/how-we-work'
import { PhotoBg } from '@/components/features/homepage/3-photo/photo'
import { Advantages } from '@/components/features/homepage/4-advantages/advantages'

export default function Home() {
  return (
    <main>
      <HeroOpacityBg
        heading={'SAWERS PARCZEW'}
        subHeading={'Za ciepło? Za zimno? Coś wymyślimy'}
        src={'/photos/foto1.jpg'}
      />
      <WhySawers />
      <HowWeWork />
      <PhotoBg />
      <Advantages />
    </main>
  )
}
