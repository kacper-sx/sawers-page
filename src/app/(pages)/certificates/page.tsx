import { HeroOpacityBg } from '@/components/common/hero-pages'

export default function Home() {
  return (
    <main>
      <HeroOpacityBg
        heading={'Certyfikaty i uprawnienia'}
        subHeading={'Mamy dyplomy ale w pracy nam to nie przeszkadza'}
        src={'/photos/foto3.jpg'}
      />
    </main>
  )
}
