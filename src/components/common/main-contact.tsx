import { Typography } from '@/components/ui/typography/typography'
import { contactData } from '@/data/contact'
import Link from 'next/link'

export function MainContact() {
  return (
    <div className='flex flex-col gap-2'>
      {contactData.map(({ icon, name: title, href: url }, index) => (
        <div
          key={`${index}-contact-section`}
          className='flex gap-2 lg:items-center lg:gap-5'
        >
          {icon}

          <Link href={url}>
            <Typography className='text-sawers-blue transition-colors duration-200 hover:text-dark-foreground'>
              {title}
            </Typography>
          </Link>
        </div>
      ))}
    </div>
  )
}
