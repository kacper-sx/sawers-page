import Link from 'next/link'

import { Typography } from '@/components/ui/typography/typography'

type MainLinksType = {
  name: string
  href: string
}

export function MainLinksSections({ name, href }: MainLinksType) {
  return (
    <div className='flex flex-col gap-2'>
      <Link href={href}>
        <Typography
          variant={'h4'}
          as='span'
          weight={'medium'}
          className='text-sawers-blue border-b-2 border-sawers-sun max-w-max'
        >
          {name}
        </Typography>
      </Link>
    </div>
  )
}
