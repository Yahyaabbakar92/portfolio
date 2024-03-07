import { getProjects } from '@/lib/getProjects'
import { BentoGridTwoColumn } from './BentoGridTwoColumn'

export default async function ProjectsList() {
    const projects = await getProjects()

    return (
        <section id='projects'>
            <h1 className='mb-14 text-5xl font-bold md:mt-14'>My Work</h1>
            <BentoGridTwoColumn projects={projects} />
        </section>
    )
}
