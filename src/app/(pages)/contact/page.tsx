import { HeroOpacityBg } from '@/components/common/hero-pages'
import { ContactContent } from '@/components/features/contact/contact'

export default function Home() {
  return (
    <main>
      <HeroOpacityBg
        heading={'KONTAKT'}
        subHeading={'Napisz, zadzwoń, pogadamy'}
        src={'/photos/foto2.jpg'}
        paragraph={'Albo wypełnij formularz (tylko nas nie hakuj sqlem)'}
        isContact
      />
      <ContactContent />
    </main>
  )
}
