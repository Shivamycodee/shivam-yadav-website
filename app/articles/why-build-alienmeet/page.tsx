// pages/readme.js
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'

export default async function ReadmePage() {
const filePath = path.join(process.cwd(), 'app', 'articles', 'why-build-alienmeet', 'alienmeet.md')
  const source = await fs.readFile(filePath, 'utf8')
  const { content } = matter(source)
  const mdxSource = await serialize(content)

  return (
    <div className="prose text-white mt-10 mb-10 mx-80 flex flex-col gap-7">
      <MDXRemote source={content} />
    </div>
  )
}
