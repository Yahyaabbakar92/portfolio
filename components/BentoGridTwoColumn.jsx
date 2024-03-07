import { Suspense } from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { SkeletonCard } from './SkeletonCard'

export function BentoGridTwoColumn({ projects }) {
    return (
        <BentoGrid className='mx-auto max-w-4xl md:auto-rows-[20rem]'>
            {projects.map((project, i) => (
                <Suspense fallback={<SkeletonCard />} key={i}>
                    <BentoGridItem
                        // key={i}
                        title={project.title}
                        description={project.description}
                        header={<Skeleton />}
                        className={project.className}
                        category={project.category}
                        url={project.url}
                    />
                </Suspense>
            ))}
        </BentoGrid>
    )
}
const Skeleton = () => (
    <div className='flex h-full min-h-[6rem] w-full flex-1 rounded-xl   border border-transparent bg-neutral-100  bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black dark:bg-dot-white/[0.2]'></div>
)
