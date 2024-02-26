'use client'

import config from '@/config/config.json'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Logo({ src }) {
    // destructuring items from config object
    const { logo, logo_width, logo_height, logo_text, title } = config.site

    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    const resolvedLogo =
        mounted && (theme === 'dark' || resolvedTheme === 'dark') ? logo : logo
    const logoPath = src ? src : resolvedLogo

    return (
        <Link href='/' className='inline-block'>
            {logoPath ? (
                <Image
                    width={logo_width.replace('px', '') * 2}
                    height={logo_height.replace('px', '') * 2}
                    src={logoPath}
                    alt={logo_text}
                    priority
                    style={{
                        height: logo_height.replace('px', '') + 'px',
                        width: logo_width.replace('px', '') + 'px'
                    }}
                />
            ) : logo_text ? (
                logo_text
            ) : (
                title
            )}
        </Link>
    )
}
