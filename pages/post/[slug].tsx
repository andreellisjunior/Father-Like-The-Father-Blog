import { useRouter } from 'next/router'
import React from 'react'

import { getPostDetails, getPosts } from '../../services'

import {
  Author,
  Categories,
  Comments,
  CommentsForm,
  HeadSEO,
  Loader,
  PostDetail,
  PostWidget,
} from '../../components'

const PostDetails = ({ post }: any) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }
  return (
    <>
      <HeadSEO title={post.title} />
      <div className="container mx-auto mb-8 mt-28 px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            {/* <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} /> */}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="reative top-8 lg:sticky">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map(
                  (category: any) => category.slug
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostDetails

export async function getStaticProps({ params }: any) {
  const data = await getPostDetails(params.slug)

  return {
    props: { post: data },
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: { slug } }: any) => ({ params: { slug } })),
    fallback: true,
  }
}
