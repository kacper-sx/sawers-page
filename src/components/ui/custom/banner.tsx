import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'

const bannerVariants = cva('bg-white', {
  variants: {
    variant: {
      default: 'rounded-3xl lg:rounded-48',
      'less-rounded': 'rounded-2xl',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export const Banner = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'> & VariantProps<typeof bannerVariants>
>(({ children, className, variant }, ref) => {
  return (
    <div ref={ref} className={cn(bannerVariants({ variant }), className)}>
      {children}
    </div>
  )
})

Banner.displayName = 'Banner'
