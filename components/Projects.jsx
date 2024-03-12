import Image from 'next/image'
import Link from 'next/link'

export default function Projects({ projects }) {
    return (
        <>
            <div className='h-full py-6 sm:py-8 lg:py-12'>
                <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
                    <div className='grid grid-cols-1 gap-2 sm:grid-cols-3 md:gap-2 xl:gap-4'>
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
                                <Link key={id} href={url} className={className}>
                                    <Image
                                        width={500}
                                        height={500}
                                        src={image}
                                        loading='lazy'
                                        alt={alt}
                                        className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                                    />
                                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-70'></div>
                                    <div className='flex flex-col p-2'>
                                        <h3 className='relative inline-block text-xl font-bold text-white'>
                                            {title}
                                        </h3>
                                        <p className='relative mt-2 inline-block text-white'>
                                            {description}
                                        </p>
                                        <p className='relative inline-block text-sm italic text-white'>
                                            {category}
                                        </p>
                                    </div>
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
