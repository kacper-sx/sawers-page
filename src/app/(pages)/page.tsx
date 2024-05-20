'use client'
import { HeroOpacityBg } from '@/components/common/hero-pages'
import { WhySawers } from '@/components/features/homepage/1- why-sawers/why-sawers'
import { HowWeWork } from '@/components/features/homepage/2-how-we-work/how-we-work'
import { PhotoBg } from '@/components/features/homepage/3-photo/photo'
import { Advantages } from '@/components/features/homepage/4-advantages/advantages'
import { SeoFoodV1 } from '@/components/features/homepage/5-seo-food-v1/seo-food-v1'
export default function Home() {
  return (
    <main className='w-full'>
      <HeroOpacityBg
        heading={'SAWERS PARCZEW'}
        subHeading={'Za ciepło? Za zimno? Coś wymyślimy'}
        src={'/photos/foto1.webp'}
        paragraph={'Montaż klimatyzacji pompy ciepła Parczew'}
        normal
      />
      <WhySawers />
      <HowWeWork />
      <PhotoBg />
      <Advantages />
      <SeoFoodV1 />
    </main>
  )
}
