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
                        <ul className='flex list-none items-center lg:ml-auto'>
                            {footer.map((navList) => (
                                <Link key={navList.name} href={navList.url}>
                                    <li className='items-center px-3 py-2 text-lg leading-snug hover:text-textColor/90 dark:hover:text-textColorDark/90'>
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
