import Logo from '@/components/ui/assets/logo'
import Link from 'next/link'
import React from 'react'

import { MainLinksSections } from './section'
import { navListDataApp } from '../../../../data/nav-list-data'

export default function MainLinks() {
  return (
    <div className='flex flex-col gap-2 items-start'>
      {navListDataApp.map(({ name, href }, index) => (
        <MainLinksSections key={index} href={href} name={name} />
      ))}
    </div>
  )
}
