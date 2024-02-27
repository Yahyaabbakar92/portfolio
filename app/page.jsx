import { DotBackground } from '@/components/DotBackground'

export default function page() {
    return (
        <section className='pb-xs max-w-content mx-auto flex flex-col items-center justify-between px-5 sm:px-10 lg:px-20'>
            {/* Hero Section */}
            <DotBackground />
            <h1 className='text-3xl font-bold'>Next Template</h1>
        </section>
    )
}
