import { cn } from '@/lib/utils'
import Link from 'next/link'

export const BentoGrid = ({ className, children }) => {
    return (
        <div
            className={cn(
                'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ',
                className
            )}
        >
            {children}
        </div>
    )
}

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    category,
    url
}) => {
    return (
        <div
            className={cn(
                'group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
                className
            )}
        >
            <Link
                href={url}
                className='group/bento row-span-1 flex h-full flex-col justify-between space-y-4 transition duration-200'
            >
                {header}
                <div className='transition duration-200 group-hover/bento:-translate-y-2'>
                    <h3 className='my-2 text-2xl font-bold text-textColor dark:text-textColorDark'>
                        {title}
                    </h3>
                    <p className='text-base text-textColor dark:text-textColorDark'>
                        {description}
                    </p>
                    <p className='mt-1 text-sm font-light italic text-textColor dark:text-textColorDark'>
                        {category}
                    </p>
                </div>
            </Link>
        </div>
    )
}
