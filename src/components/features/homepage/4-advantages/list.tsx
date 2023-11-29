import { Typography } from '@/components/ui/typography/typography'
import { advantageData } from './data/advatages-data'
import { FaCheckCircle } from 'react-icons/fa'

export function AdvatagesList() {
  return (
    <div className='flex flex-col gap-4 lg:gap-5 pt-5 lg:pt-0'>
      {advantageData.map(({ content }, index) => (
        <div
          key={`${index}-advantages-list`}
          className='flex gap-4 items-center lg:gap-5 px-5'
        >
          <FaCheckCircle className='lg:w-12 lg:h-12 w-6 h-6 text-green-300' />
          <Typography className='text-sawers-blue transition-colors duration-200 hover:text-dark-foreground'>
            {content}
          </Typography>
        </div>
      ))}
    </div>
  )
}
