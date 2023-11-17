import { switzer } from '@/app/fonts'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const typographyVariants = cva(cn('', switzer.className), {
  variants: {
    variant: {
      display: 'text-4xl leading-120% lg:text-8xl xl:text-160',
      display2: 'text-[32px] leading-130% lg:text-8xl',
      h1: 'text-[32px] leading-130% lg:text-64',
      h2: 'text-2xl leading-130% lg:text-5xl',
      h3: 'text-xl leading-130% lg:text-[32px]',
      h4: 'text-lg leading-130% lg:text-2xl',
      p: 'text-base	leading-150% lg:text-xl',
      blockquote: 'text-base leading-130% lg:text-xl',
      list: 'text-sm leading-130% lg:text-base',
      lead: 'text-xl leading-130% lg:text-2xl',
      large: 'text-xl	leading-130% lg:text-2xl',
      small: 'text-base leading-150%',
      small2: 'font-source-sans-3 text-sm leading-130%',
      muted: 'text-base leading-130%',
      'footer-title': 'text-sm uppercase',
      'footer-links': 'text-base leading-5',
      'footer-text': 'text-xl leading-5',
      table: 'text-base	leading-130% lg:text-xl',
      'navigation-large':
        'font-source-sans-3 text-base lg:font-switzer lg:text-[32px]',
      'navigation-medium': 'font-source-sans-3 text-base',
    },
    weight: {
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      regular: 'font-normal',
      italic: 'italic',
    },
  },
  defaultVariants: {
    variant: 'p',
    weight: 'regular',
  },
})

type VariantPropType = VariantProps<typeof typographyVariants>

const variantElementMap: Record<
  NonNullable<VariantPropType['variant']>,
  string
> = {
  display: 'span',
  display2: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  blockquote: 'blockquote',
  list: 'ul',
  lead: 'p',
  large: 'div',
  small: 'small',
  small2: 'small',
  muted: 'p',
  'footer-title': 'p',
  'footer-links': 'p',
  'footer-text': 'p',
  table: 'div',
  'navigation-large': 'span',
  'navigation-medium': 'span',
}

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean
  as?: string
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, weight, as, asChild, ...props }, ref) => {
    const Comp = asChild
      ? Slot
      : as ?? (variant ? variantElementMap[variant] : undefined) ?? 'div'
    return (
      <Comp
        className={cn(typographyVariants({ variant, weight, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Typography.displayName = 'Typography'

export { Typography, typographyVariants }
