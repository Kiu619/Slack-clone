'use client'

import { useTheme } from 'next-themes'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { useColorPrefrences } from '@/providers/color-prefrences'

const MainContent = ({ children }: {children: ReactNode}) => {
  const { theme } = useTheme()
  const { color } = useColorPrefrences()

  let backgroundColor = 'bg-[var(--primary-slack)]'
  if (color === 'green') {
    backgroundColor = 'bg-green-700'
  } else if (color === 'blue') {
    backgroundColor = 'bg-blue-700'
  }

  return (
    <div
      className={cn('md:px-2 md:pb-2 md:pt-14 md:h-screen', backgroundColor)}
    >
      <main
        className={cn(
          'md:ml-[280px] lg:ml-[420px] md:h-full overflow-y-hidden',
          theme === 'dark' ? 'bg-[#232529]' : 'bg-white'
        )}
      >
        {children}
      </main>
    </div>
  )
}

export default MainContent
