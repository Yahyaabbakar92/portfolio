import { getProjects } from '@/lib/getProjects'
import Projects from './Projects'

export default async function ProjectsList() {
    const projects = await getProjects()

    return (
        <section id='projects'>
            <h1 className='mb-14 text-center text-5xl font-bold md:mt-14'>
                My Work
            </h1>
            <Projects projects={projects} />
        </section>
    )
}
