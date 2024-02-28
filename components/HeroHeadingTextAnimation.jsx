'use client'

import { motion } from 'framer-motion'

export default function HeroHeadingTextAnimation({ children }) {
    return (
        <motion.h1
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                ease: 'easeIn',
                duration: 0.3
            }}
            className='relative z-20 bg-gradient-to-b from-backgroundColor to-backgroundColorDark bg-clip-text py-8 text-4xl font-bold text-transparent transition-all duration-300 dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 sm:max-w-[520px] sm:text-7xl'
        >
            {children}
        </motion.h1>
    )
}
