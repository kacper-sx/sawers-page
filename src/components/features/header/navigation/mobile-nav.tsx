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
      className='absolute justify-center inset-0 top-[60px] h-screen w-full bg-slate-100 px-5 pt-12'
    >
      <NavigationList />
      <m.a
        initial='hidden'
        animate='visible'
        variants={navLinkVariants}
        href='mailto:ser2332@wp.pl'
        className='absolute bottom-24 block text-sm font-medium'
      >
        ser2332@wp.pl
      </m.a>
    </m.nav>
  )
}
