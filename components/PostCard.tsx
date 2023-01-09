import moment from 'moment'
import Link from 'next/link'
import React from 'react'

const PostCard = ({ post }: any) => {
  return (
    <div className="mb-8 rounded-lg bg-[#777777] p-0 pb-12 text-white shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="absolute h-80 w-full rounded-t-lg object-cover object-center shadow-lg lg:rounded-lg"
        />
      </div>
      <h1 className="mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-100 hover:text-gray-300">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="mb-8 block w-full items-center justify-center text-center lg:flex">
        <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            height="30px"
            width="30px"
            className="rounded-full align-middle"
          />
          <p className="ml-2 mb-0 inline align-middle text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 inline h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{moment(post.createdAt).format('MMM, DD, YYYY')}</span>
        </div>
      </div>
      <p className="mb-8 px-4 text-center text-lg font-normal  lg:px-20">
        {post.except}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transistion inline-block transform cursor-pointer rounded-full bg-primary px-8 py-3 text-lg font-medium text-white shadow-lg duration-500 hover:-translate-y-1 hover:shadow-xl">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
