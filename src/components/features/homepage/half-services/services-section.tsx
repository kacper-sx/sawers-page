"use client"
import { Typography } from "@/components/ui/typography/typography"
import { bottomOpacityEntranceVariant } from "@/lib/framer-variants"
import { m } from "framer-motion"
import type { ServicesProps } from "./services-card"
import { ServiceHomeCard } from "./services-card"

const ServicesData: ServicesProps[] = [
  {
    source: "/photos/klima.jpg",
    name: "Klimatyzacja"  
  },
  {
    source: "/photos/pompa.jpg",
    name: "Pompy ciepła",
    
  },
  {
    source: "/photos/fota.jpg",
    name: "Fotowoltaika",
  },
]
const MotionTypography = m(Typography)
export const ServicesHomeSection = () => {
  return (
    <div className="flex flex-col bg-gray-100 lg:px-[100px] px-5 lg:py-24 py-8 lg:gap-16 gap-5 items-center">
      <MotionTypography
        initial='hidden'
        whileInView='visible'
        variants={bottomOpacityEntranceVariant({ delay: 0.2 })} variant={"h2"} as="h2" weight={"semibold"} className="text-sawers-blue">
        Klimatyzacja, pompy ciepła, fotowoltaika Parczew
      </MotionTypography>

      <m.div 
        initial='hidden'
        whileInView='visible'
        variants={bottomOpacityEntranceVariant({ delay: 0.4 })} className="grid grid-cols md:grid-cols-2 xl:flex xl:flex-row lg:gap-10 gap-5">
        {ServicesData.map(( source ) => (
          <ServiceHomeCard
            key={source.name}
            source={source.source}
            name={source.name}
          />
        ))}
      </m.div>
      <MotionTypography initial='hidden'
        whileInView='visible'
        variants={bottomOpacityEntranceVariant({ delay: 0.4 })} variant={"h4"} as="p" className="text-sawers-blue text-center max-w-5xl">
        Sawers oferuje usługi z zakresu montażu klimatyzacji i pomp ciepła. Dodatkowo zajmujemy się sprzedażą fotowoltaiki. Działamy głównie w Parczewie, ale również w granicach całego województwa Lubelskiego. Sprawdź i dołącz do grona zadowolonych klientów.
      </MotionTypography>
    </div>
  )
}
