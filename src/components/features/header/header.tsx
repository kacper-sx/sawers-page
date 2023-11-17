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

export function PreventScroll() {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100dvh'
    return () => {
      document.body.style.height = 'auto'
      document.body.style.overflow = 'unset'
    }
  }, [])

  return null
}

interface HeaderProps {
  withNavigation?: boolean
}
export default function Header({ withNavigation = true }: HeaderProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [{ open: isMenuOpen }, setMenuOpen] = useAtom(mobileNavAtom)
  const isClient = useIsClient()
  return (
    <div className='fixed top-0 z-40 flex w-full'>
      <m.header
        initial='hidden'
        animate='visible'
        variants={headerVariants}
        className={cn(
          'flex w-full items-center justify-between transition-all duration-500 s:px-2 s:py-[5px] s:backdrop-blur-[6px] lg:border-0 lg:px-16 lg:py-[18px] lg:backdrop-blur-[8.5px]'
        )}
      >
        <NavBar />
      </m.header>
    </div>
  )
}
