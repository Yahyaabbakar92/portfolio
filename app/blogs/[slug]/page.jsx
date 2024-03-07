import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { getPost } from '@/lib/getBlogData'

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('content/blogs'))
    const paths = files.map((filename) => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

export async function generateMetadata({ params }) {
    const blog = await getPost(params)
    const { title, description } = blog.frontMatter

    return { title, description }
}

export default async function Post({ params }) {
    const post = await getPost(params)
    const { title } = post.frontMatter

    return (
        <section className='relative px-3 py-5 text-textColor dark:text-textColorDark lg:px-10'>
            <div className='container mx-auto px-4'>
                <article className='prose prose-sm mx-auto dark:prose-invert md:prose-base lg:prose-lg'>
                    <h1>{title}</h1>
                    <MDXRemote source={post.content} />
                    <Link href='/blogs'>
                        <Button className='mt-5 bg-secondaryColor text-textColorDark shadow hover:bg-secondaryColor/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 dark:bg-secondaryColorDark dark:text-textColor dark:hover:bg-secondaryColorDark/90'>
                            Back to Blog
                        </Button>
                    </Link>
                </article>
            </div>
        </section>
    )
}
