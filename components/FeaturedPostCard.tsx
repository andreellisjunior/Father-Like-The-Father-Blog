import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import animations from '../animations/animations'

const FeaturedPostCard = ({ post }: any) => (
  <>
    {/* Desktop View */}
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animations.fpAnimations}
      className="wrapper relative mx-auto my-24 hidden max-w-7xl items-center justify-center md:flex"
    >
      <motion.div
        variants={animations.fpItems}
        className="left-text relative left-16 z-10 flex w-7/12 flex-col items-start rounded-xl bg-white py-8 px-8 text-[#777777]"
      >
        <h3 className="mb-4 text-4xl">{post.title}</h3>
        <p className="mb-4">{post.except}</p>
        <Link href={`/post/${post.slug}`}>
          <span className="transistion inline-block transform cursor-pointer rounded-full bg-primary px-8 py-1 text-lg font-medium text-white shadow-lg duration-500 hover:-translate-y-1 hover:shadow-xl">
            Read More
          </span>
        </Link>
      </motion.div>
      <motion.div
        variants={animations.fpItems}
        className="right-img relative h-96 w-[60rem]"
      >
        <div
          className="absolute right-16 h-full w-full rounded-lg bg-cover bg-center bg-no-repeat shadow-md"
          style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
        />
      </motion.div>
    </motion.section>

    {/* Mobile View */}
    <section className="relative my-24 flex h-1/2-screen w-full flex-col items-center justify-center px-4 md:hidden">
      <div
        className="absolute inline-block h-full w-4/5 rounded-lg bg-cover bg-center bg-no-repeat shadow-md"
        style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
      />
      <div className="absolute h-full w-4/5 rounded-lg bg-gradient-to-b from-transparent via-gray-700 to-black bg-center opacity-50" />
      <div className="absolute flex h-full w-4/5 flex-col items-center justify-center rounded-lg p-4">
        <p className="text-shadow mb-4 text-center text-2xl font-semibold text-white">
          {post.title}
        </p>
        <p className="mb-4 text-center font-semibold text-white">
          {post.except}
        </p>
        <Link href={`/post/${post.slug}`}>
          <span className="transistion inline-block transform cursor-pointer rounded-full bg-primary px-8 py-1 text-lg font-medium text-white shadow-lg duration-500 hover:-translate-y-1 hover:shadow-xl">
            Read More
          </span>
        </Link>
      </div>
      <Link href={`/post/${post.slug}`}>
        <span className="absolute h-full w-4/5 cursor-pointer" />
      </Link>
    </section>
  </>
)

export default FeaturedPostCard
