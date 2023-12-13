import { HeroOpacityBg } from '@/components/common/hero-pages'

export default function Home() {
  return (
    <main>
      <HeroOpacityBg
        heading={'O NAS'}
        subHeading={'Cały ten Sawers na papierze'}
        src={'/photos/foto5.jpg'}
        paragraph={'No i w liczbach żeby nie było '}
        normal
      />
    </main>
  )
}
