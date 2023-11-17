import { m } from 'framer-motion'
import { useSetAtom } from 'jotai'
import { mobileNavAtom } from '@/atoms/mobileNav'
import { navListDataApp } from './data/nav-list-data'

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
            className='border-b-2 pb-1 font-medium bg-clip-text active:bg-link-blue active:text-transparent'
          >
            {name}
          </Link>
        </m.li>
      ))}
    </m.ul>
  )
}
