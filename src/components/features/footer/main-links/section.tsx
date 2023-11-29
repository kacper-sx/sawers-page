import Logo from '@/components/ui/assets/logo'
import Link from 'next/link'
import React from 'react'

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
          weight={'medium'}
          className='text-sawers-blue border-b-2 border-sawers-sun max-w-max'
        >
          {name}
        </Typography>
      </Link>
    </div>
  )
}
