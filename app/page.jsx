import { DotBackground } from '@/components/DotBackground'
import ProjectsList from '@/components/ProjectsList'

export default function Home() {
    return (
        <main className='pb-xs max-w-content mx-auto flex flex-col items-center justify-between px-5 sm:px-10 lg:px-20'>
            {/* Hero Section */}
            <DotBackground />
            {/* Projects Section */}
            <ProjectsList />
        </main>
    )
}
