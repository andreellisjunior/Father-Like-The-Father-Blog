import React from 'react'

import { getPosts, getPostDetails } from '../../services'

import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
} from '../../components'

const PostDetails = ({ post }: any) => {
  return (
    <div className="container mx-auto mb-8 mt-28 px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="reative top-8 lg:sticky">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category: any) => category.slug)}
            />
          </div>
        </div>
      </div>
    </div>
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
    fallback: false,
  }
}
