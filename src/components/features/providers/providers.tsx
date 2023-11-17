'use client'

import { LazyMotion } from 'framer-motion'
import { Provider } from 'jotai'
import { type PropsWithChildren } from 'react'

const loadFeatures = () =>
  import('./features').then((res) => {
    const framerLoadedEvent = new Event('framerLoaded')
    //@ts-expect-error we're explictly using flag on window on purpose
    window.__SAWERS_LOADED = true
    window.dispatchEvent(framerLoadedEvent)
    return res.default
  })

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Provider>
      <LazyMotion strict features={loadFeatures}>
        {children}
      </LazyMotion>
    </Provider>
  )
}

export default Providers
