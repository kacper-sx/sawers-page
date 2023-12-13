'use client'

import { AnimatePresence, m } from 'framer-motion'
import { Fade as Hamburger } from 'hamburger-react'
import { useAtom } from 'jotai'
import Link from 'next/link'
import React from 'react'
import { useIsClient, useMediaQuery } from 'usehooks-ts'
import { mobileNavAtom } from '@/atoms/mobileNav'
import { cn } from '@/lib/utils'
import NavBar from './navigation/nav'

import { headerVariants } from './variants/HeaderVariants'

export default function Header() {
  const [{ open: isMenuOpen }, setMenuOpen] = useAtom(mobileNavAtom)

  return (
    <div className='fixed top-0 z-40 w-full'>
      <m.header
        initial='hidden'
        animate='visible'
        variants={headerVariants}
        className={cn(
          'flex w-full items-center justify-between transition-all duration-500 s:px-3 s:py-4 s:backdrop-blur-[6px] lg:px-16 lg:py-[18px] lg:backdrop-blur-[8.5px]',
          isMenuOpen ? 'bg-white' : 'bg-transparent'
        )}
      >
        <NavBar />
      </m.header>
    </div>
  )
}
