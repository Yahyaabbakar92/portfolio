'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeSwitcher() {
    const { setTheme, theme } = useTheme()

    return (
        <Button
            variant='ghost'
            size='icon'
            className='hover:bg-backgroundColor focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 dark:hover:bg-backgroundColorDark'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {theme !== 'dark' ? (
                <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            ) : (
                <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            )}

            <span className='sr-only'>Toggle theme</span>
        </Button>
    )
}
