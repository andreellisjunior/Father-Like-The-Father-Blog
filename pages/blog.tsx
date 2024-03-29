import type { NextPage } from 'next'
import { Categories, HeadSEO, PostCard, PostWidget } from '../components'
import InternalHeroSection from '../sections/InternalHeroSection'
import { getPosts } from '../services'

const Blog = ({ posts }: any) => {
  return (
    <>
      <HeadSEO title={`Blog`} />
      <InternalHeroSection title="BLOG" img="blog" />
      <div className="container mx-auto mb-8 mt-28 px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post: any) => (
              <PostCard post={post.node} key={post.title} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}

export default Blog
