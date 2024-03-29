import { DotBackground } from '@/components/DotBackground'
import ProjectsList from '@/components/ProjectsList'

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className='pb-xs max-w-content mx-auto flex flex-col items-center justify-between px-5 sm:px-10 lg:px-20'>
                <DotBackground />
            </section>
            {/* Projects Section */}
            <section className='px-3 py-5 text-textColor dark:text-textColorDark lg:px-10'>
                <div className='container mx-auto px-4'>
                    <ProjectsList />
                </div>
            </section>
        </>
    )
}
