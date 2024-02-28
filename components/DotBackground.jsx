import HeroHeadingTextAnimation from './HeroHeadingTextAnimation'
import HeroSubHeadingTextAnimation from './HeroSubHeadingTextAnimation'

export function DotBackground() {
    return (
        <div className='relative mb-32 flex h-full w-full items-center justify-center bg-backgroundColor px-4 bg-dot-black/[0.2] dark:bg-backgroundColorDark dark:bg-dot-white/[0.2]'>
            {/* Radial gradient for the container to give a faded look */}
            <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-backgroundColor [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-backgroundColorDark'></div>
            <div className='flex flex-col'>
                <HeroHeadingTextAnimation>
                    {/* <h1 className='relative z-20 bg-gradient-to-b from-backgroundColor to-backgroundColorDark bg-clip-text py-8 text-4xl font-bold text-transparent transition-all duration-300 dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 sm:max-w-[520px] sm:text-7xl'> */}
                    <span className='block transform-none opacity-100'>
                        Hey,
                    </span>
                    <span className='block transform-none opacity-100'>
                        Im Yahya
                    </span>
                    {/* </h1> */}
                </HeroHeadingTextAnimation>
                <div className='transform-none opacity-100'>
                    <HeroSubHeadingTextAnimation>
                        — a web developer and freelancer crafting web apps that
                        help businesses stand out and attract more clients.
                    </HeroSubHeadingTextAnimation>
                </div>
            </div>
        </div>
    )
}
