import { m } from 'framer-motion'
import { navLinkVariants, navVariants } from '../variants/HeaderVariants'
import { NavigationList } from './nav-list'

export function Navigation() {
  return (
    <m.nav
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={navVariants}
      className='absolute inset-0 top-[60px] h-screen w-full bg-white px-5 pt-12'
    >
      <NavigationList />
    </m.nav>
  )
}
