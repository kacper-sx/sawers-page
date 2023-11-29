import { Mail, MapPin, Phone } from 'lucide-react'

type ContactType = {
  name: string
  href: string
  icon: JSX.Element
}

export const contactData: ContactType[] = [
  {
    name: '21-200 Parczew, ul. 11 Listopada 66/23',
    href: 'https://maps.app.goo.gl/LhNdgUEwR6BT1pUL6',
    icon: <MapPin className='h-8 w-8 text-sawers-sun' />,
  },

  {
    name: '+48 606 136 448',
    href: 'tel:+48 606 136 448',
    icon: <Phone className='h-8 w-8 text-sawers-sun' />,
  },
  {
    name: 'ser2332@wp.pl',
    href: 'mailto:ser2332@wp.pl',
    icon: <Mail className='h-8 w-8 text-sawers-sun' />,
  },
]
