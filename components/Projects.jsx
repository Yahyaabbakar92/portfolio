import Image from 'next/image'
import Link from 'next/link'

export default function Projects({ projects }) {
    console.log(projects)
    return (
        <>
            {/* Bento Grid */}
            <div className='h-ful py-6sm:py-8 lg:py-12'>
                <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
                    <div className='grid grid-cols-1 gap-2 sm:grid-cols-3 md:gap-2 xl:gap-4'>
                        <Link
                            href='#'
                            className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80'
                        >
                            <Image
                                width={500}
                                height={500}
                                src='https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600'
                                loading='lazy'
                                alt='Photo by Minh Pham'
                                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                            />

                            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>
                            <div className='flex flex-col'>
                                <h3 className='relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg'>
                                    VR
                                </h3>
                                <p className='relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg'>
                                    VR
                                </p>
                                <p className='relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg'>
                                    VR
                                </p>
                            </div>
                        </Link>

                        <Link
                            href='#'
                            className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80'
                        >
                            <Image
                                width={500}
                                height={500}
                                src='https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000'
                                loading='lazy'
                                alt='Photo by Magicle'
                                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                            />

                            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

                            <span className='relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg'>
                                Tech
                            </span>
                        </Link>

                        <Link
                            href='#'
                            className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80'
                        >
                            <Image
                                width={500}
                                height={500}
                                src='https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000'
                                loading='lazy'
                                alt='Photo by Martin Sanchez'
                                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                            />

                            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

                            <span className='relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg'>
                                Dev
                            </span>
                        </Link>

                        <Link
                            href='#'
                            className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80'
                        >
                            <Image
                                width={500}
                                height={500}
                                src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600'
                                loading='lazy'
                                alt='Photo by Lorenzo Herrera'
                                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                            />

                            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

                            <span className='relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg'>
                                Retro
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
