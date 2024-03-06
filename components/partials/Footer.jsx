import menuItems from '../../config/menu.json'
import Link from 'next/link.js'

export default function Footer() {
    const { footer } = menuItems

    return (
        <>
            <footer className='relative mb-3 flex items-center justify-between px-3 py-8 lg:px-10'>
                <div className='container mx-auto flex items-center justify-between px-4'>
                    <div className='relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start'>
                        <p className='cursor-default text-lg'>
                            <span className='text-xl font-bold'>©</span> Yahya
                            Abbakar
                        </p>
                    </div>
                    <div className='flex flex-grow items-center'>
                        <ul className='grid list-none grid-cols-2 gap-x-8 pr-6 md:grid-cols-4 lg:ml-auto lg:gap-x-2'>
                            {footer.map((navList) => (
                                <Link key={navList.name} href={navList.url}>
                                    <li className='items-center px-3 py-2 text-lg leading-snug hover:text-textColor/90 hover:underline dark:hover:text-textColorDark/90'>
                                        {navList.name}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
