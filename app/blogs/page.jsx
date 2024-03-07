import { getPosts } from '@/lib/getBlogData'
import Link from 'next/link'

export default async function Blogs() {
    const blogs = await getPosts()

    return (
        <section className='relative px-3 py-5 text-textColor dark:text-textColorDark lg:px-10'>
            <div className='container mx-auto px-5 md:px-24'>
                <h2 className='text-3xl font-bold'>Latest Blogs</h2>
                <div className='py-8'>
                    {blogs.map((blog) => (
                        <Link
                            href={'/blogs/' + blog.slug}
                            passHref
                            key={blog.slug}
                        >
                            <div className='grid grid-cols-1 gap-4 py-3'>
                                <div>
                                    <h3 className='text-2xl font-bold text-black dark:text-white'>
                                        {blog.meta.title}
                                    </h3>
                                    <p className='text-lg'>
                                        {blog.meta.description}
                                    </p>
                                    <p>{blog.meta.date}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
