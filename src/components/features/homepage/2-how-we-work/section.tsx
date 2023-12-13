import { Typography } from '@/components/ui/typography/typography'
import { Banner } from '@/components/ui/custom/banner'
import { HowWeWorkData } from './data/how-we-work-data'

type WorkData = {
  title: string
  insideIcon: JSX.Element
  content: string
  outsideIcon?: JSX.Element
}

export function HowWeWorkSection({
  title,
  insideIcon,
  content,
  outsideIcon,
}: WorkData) {
  return (
    <div className='flex flex-col lg:flex-row lg:gap-4 gap-5 px-2 my-2 lg:my-0 items-center'>
      <Banner
        variant={'less-rounded'}
        className='flex flex-col gap-4 px-5 py-5 max-w-card h-[250px] border border-dark-foreground-35 shadow-md'
      >
        <div className='flex gap-4 items-center'>
          {insideIcon}
          <Typography
            variant={'table'}
            weight={'medium'}
            className='text-sawers-blue'
          >
            {title}
          </Typography>
        </div>
        <Typography
          variant={'small'}
          weight={'regular'}
          className='text-dark-foreground-62'
        >
          {content}
        </Typography>
      </Banner>
      {outsideIcon}
    </div>
  )
}
