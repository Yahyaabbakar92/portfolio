import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function Blogs() {
    // 1) Set blogs directory
    const blogDir = 'content/blogs'
    // 2) Find all files in the blog directory
    const files = fs.readdirSync(path.join(blogDir))
    // 3) For each blog found
    const blogs = files.map((filename) => {
        // 4) Read the content of that blog
        const fileContent = fs.readFileSync(
            path.join(blogDir, filename),
            'utf-8'
        )
        // 5) Extract the metadata from the blog's content
        const { data: frontMatter } = matter(fileContent)
        // 6) Return the metadata and page slug
        return {
            meta: frontMatter,
            slug: filename.replace('.mdx', '')
        }
    })
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
