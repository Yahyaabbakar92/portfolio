'use client'

import { motion } from 'framer-motion'

export default function HeroSubHeadingTextAnimation({ children }) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                ease: 'easeIn',
                duration: 0.8
            }}
            className='md:ml-4/12 md:mr-1/12 relative z-20 ml-16 text-3xl transition-all duration-300 sm:max-w-[780px] md:ml-20 lg:ml-24'
        >
            {children}
        </motion.h2>
    )
}
