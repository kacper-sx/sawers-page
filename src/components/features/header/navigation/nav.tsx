import Link from 'next/link'
import Hamburger from 'hamburger-react'
import { useIsClient, useMediaQuery } from 'usehooks-ts'
import { useAtom } from 'jotai'
import { mobileNavAtom } from '@/atoms/mobileNav'
import Logo from '@/components/ui/assets/logo'
import { AnimatePresence } from 'framer-motion'
import { Navigation } from './mobile-nav'
import { navListDataApp } from './data/nav-list-data'
export default function NavBar() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const [{ open: isMenuOpen }, setMenuOpen] = useAtom(mobileNavAtom)
  const isClient = useIsClient()
  return (
    <>
      <nav className='flex justify-between items-center lg:px-8 px-1 w-full'>
        <Link href='/'>
          <Logo className='lg:w-64 w-40' />
        </Link>
        <div className='hidden md:flex gap-8 py-3'>
          {navListDataApp.map(({ name, href }, index) => (
            <Link key={index} href={href}>
              {name}
            </Link>
          ))}
        </div>
        {isClient && isMobile && (
          <Hamburger
            label='open navigation'
            toggled={isMenuOpen}
            toggle={() => setMenuOpen((p) => ({ open: !p.open }))}
            duration={0.5}
            color='#1F1F1F'
          />
        )}
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* <PreventScroll /> */}
            <Navigation />
          </>
        )}
      </AnimatePresence>
    </>
  )
}
