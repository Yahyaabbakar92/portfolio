import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function NotFound() {
    return (
        <>
            <section className='container text-center'>
                <div className='row justify-center'>
                    <div className='sm:col-10 md:col-8 lg:col-6'>
                        <span className='text block text-[8rem] font-bold'>
                            404
                        </span>
                        <h1 className='h2 mb-4'>Page not found</h1>
                        <div className=''>
                            <p className='line-clamp-3'>
                                The page you are looking for might have been
                                removed, had its name changed, or is temporarily
                                unavailable.
                            </p>
                        </div>
                        <Link href='/'>
                            <Button className='mt-5 bg-primaryColor text-textColor shadow hover:bg-primaryColor/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 dark:bg-primaryColorDark dark:text-textColor dark:hover:bg-primaryColorDark/90'>
                                Back to home
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
