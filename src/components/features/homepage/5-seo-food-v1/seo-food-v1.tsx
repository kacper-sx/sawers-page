'use client'

import { Banner } from '@/components/ui/custom/banner'
import { Typography } from '@/components/ui/typography/typography'
import { bottomOpacityEntranceVariant } from '@/lib/framer-variants'
import { m } from 'framer-motion'

const MotionTypography = m(Typography)
const MotionBanner = m(Banner)
export function SeoFoodV1() {
  return (
    <div className='flex flex-col bg-gray-100 lg:px-[100px] px-5 lg:py-24 py-8 lg:gap-16 gap-8 items-center'>
      <MotionTypography
        initial='hidden'
        whileInView='visible'
        variants={bottomOpacityEntranceVariant({ delay: 0.3 })}
        variant={'h2'}
        as="h3"
        weight={'semibold'}
        className='text-sawers-blue text-center'
      >
        Klimatyzacja Parczew, pompy ciepła Parczew
      </MotionTypography>

      <div className='grid grid-cols lg:grid-cols-2 gap-8'>

     
      <MotionBanner
        initial='hidden'
        whileInView='visible'
        variants={bottomOpacityEntranceVariant({ delay: 0.3 })}
        className='flex flex-col lg:gap-8 gap-4 px-5 lg:px-8 py-5 items-center overflow-hidden shadow-xl'
      >
      <Typography variant={"p"}  className='text-sawers-blue'><strong>Montaż klimatyzacji</strong> jest kluczowym procesem zarówno dla komfortu jak i efektywności energetycznej w budynkach i pojazdach. Montaż klimatyzacji obejmuje szeroki zakres działań, począwszy od projektowania systemu, poprzez wybór odpowiednich komponentów, aż po instalację i konserwację. Współczesne systemy klimatyzacyjne muszą być precyzyjnie zaprojektowane i zainstalowane, aby zapewnić optymalne warunki temperaturowe i wilgotnościowe, niezależnie od zewnętrznych warunków atmosferycznych. <strong>Profesjonalny montaż klimatyzacji</strong> wymaga nie tylko fachowej wiedzy technicznej, ale również staranności i precyzji w wykonaniu. Każdy etap montażu, począwszy od montażu jednostki zewnętrznej, poprzez rozmieszczenie i podłączenie jednostek wewnętrznych, aż po instalację systemu wentylacyjnego i elektrycznego, musi być przeprowadzony zgodnie z najwyższymi standardami, aby zapewnić niezawodność i efektywność działania systemu klimatyzacyjnego przez długie lata użytkowania.</Typography>
      <Typography variant={"p"}  className='text-sawers-blue'> Montaż klimatyzacji wymaga również uwzględnienia różnorodnych czynników, takich jak specyfika pomieszczenia, obciążenie cieplne, rodzaj używanego chłodziwa czy też estetyka instalacji. Dlatego też warto zlecić montaż klimatyzacji profesjonalnej firmie, która dysponuje odpowiednim doświadczeniem i wiedzą techniczną. Profesjonalnie wykonany montaż klimatyzacji nie tylko zapewni komfort termiczny, ale również pozwoli zaoszczędzić energię i pieniądze, minimalizując straty energetyczne i zapewniając optymalną wydajność systemu. Zaufaj Sawers Parczew i zamów klimatyzację do swojego domu.</Typography>
      </MotionBanner>
      <MotionBanner
        initial='hidden'
        whileInView='visible'
        variants={bottomOpacityEntranceVariant({ delay: 0.6 })}
        className='flex flex-col lg:gap-8 gap-4 px-5 lg:px-8 py-5 items-center overflow-hidden shadow-xl'
      >
     <Typography variant={"p"}  className='text-sawers-blue'>Montaż pompy ciepła jest kluczowym etapem w procesie tworzenia efektywnego i ekologicznego systemu ogrzewania oraz chłodzenia. <strong>Pompy ciepła</strong> są coraz popularniejszym rozwiązaniem, pozwalającym na wykorzystanie energii odnawialnej i zmniejszenie emisji gazów cieplarnianych. Montaż pompy ciepła obejmuje szereg złożonych działań, począwszy od odpowiedniego doboru typu i mocy pompy, poprzez wybór odpowiedniego miejsca montażu, aż po instalację i uruchomienie systemu. <strong>Profesjonalny montaż pomp ciepła</strong> wymaga precyzyjnego przeprowadzenia wszystkich etapów procesu, aby zapewnić optymalną wydajność i niezawodność działania urządzenia. Montaż pompy ciepła musi być przeprowadzony zgodnie z wymaganiami technicznymi oraz normami bezpieczeństwa, uwzględniając specyfikę budynku oraz warunki lokalne.</Typography>
     <Typography variant={"p"}  className='text-sawers-blue'> Warto również pamiętać o odpowiednim doborze dodatkowych komponentów, takich jak zbiorniki buforowe czy układy grzewcze, które mogą być niezbędne dla optymalnego funkcjonowania całego systemu. Profesjonalna firma zajmująca się montażem pomp ciepła powinna posiadać odpowiednie kwalifikacje oraz doświadczenie, aby zapewnić klientom wysoką jakość usług i satysfakcję z wyboru tego ekologicznego rozwiązania. <strong>Montaż pompy ciepła</strong> przyczynia się nie tylko do zwiększenia komfortu cieplnego w budynkach, ale również do obniżenia kosztów eksploatacji oraz redukcji negatywnego wpływu na środowisko, co sprawia, że jest to inwestycja o wielu korzyściach zarówno dla użytkowników, jak i dla planety. Dołącz do klientów Sawers Parczew i zadbaj o swoje mieszkanie.</Typography>
      </MotionBanner>
       </div>
    </div>
  )
}
