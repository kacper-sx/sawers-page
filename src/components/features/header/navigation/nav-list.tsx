import { m } from 'framer-motion'
import { useSetAtom } from 'jotai'
import { mobileNavAtom } from '@/atoms/mobileNav'
import { navListDataApp } from '../../../../data/nav-list-data'
import { Typography } from '@/components/ui/typography/typography'

import { cn } from '@/lib/utils'
import {
  navListItemVariants,
  navListVariants,
} from '../variants/HeaderVariants'
import Link from 'next/link'

export function NavigationList() {
  const setMobileNavState = useSetAtom(mobileNavAtom)
  return (
    <m.ul
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={navListVariants}
      className='flex w-max flex-col gap-8 text-xl [&_li]:w-fit'
    >
      {navListDataApp.map(({ name, href }, index) => (
        <m.li key={index} variants={navListItemVariants}>
          <Link
            href={href}
            onClick={() => {
              setMobileNavState({ open: false })
            }}
            className='font-medium bg-clip-text active:bg-link-blue active:text-transparent'
          >
            <Typography
              variant={'h2'}
              weight={'semibold'}
              className='text-sawers-blue border-b-2 border-sawers-sun'
            >
              {name}
            </Typography>
          </Link>
        </m.li>
      ))}
    </m.ul>
  )
}
