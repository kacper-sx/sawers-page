import { HeroOpacityBg } from '@/components/common/hero-pages'
import { Services } from '@/components/features/services/1-services/services'
export default function Home() {
  return (
    <>
      <HeroOpacityBg
        heading={'USŁUGI'}
        subHeading={'Klimatyzacja, pompy ciepła, fotowoltaika i inne'}
        src={'/photos/foto4.jpg'}
      />
      <Services />
    </>
  )
}
