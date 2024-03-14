import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Projects({ projects }) {
    const bentoGridStyle = 'mx-auto max-w-4xl md:auto-rows-[20rem]'
    const bentoGridItemStyle = cn('[&>p:text-lg]')
    return (
        <>
            <div
                className={cn(
                    'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3',
                    bentoGridStyle
                )}
            >
                {projects.map(
                    ({
                        id,
                        url,
                        className,
                        image,
                        alt,
                        title,
                        description,
                        category
                    }) => (
                        <Link
                            key={id}
                            href={url}
                            className={cn(
                                'group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
                                bentoGridItemStyle,
                                className
                            )}
                        >
                            <Image
                                width={500}
                                height={500}
                                src={image}
                                loading='lazy'
                                alt={alt}
                                className='h-full min-h-[6rem] w-full rounded-xl border border-transparent'
                            />
                            <div className='transition duration-200 group-hover/bento:-translate-y-2'>
                                <h3 className='text-lg font-bold'>{title}</h3>
                                <p className='mb-1 mt-2 font-sans text-neutral-600 dark:text-neutral-200'>
                                    {description}
                                </p>
                                <p className='font-sans text-xs font-normal italic text-neutral-600 dark:text-neutral-300'>
                                    {category}
                                </p>
                            </div>
                        </Link>
                    )
                )}
            </div>
        </>
    )
}
