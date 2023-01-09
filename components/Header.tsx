import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

import animations from '../animations/animations'

const Header = () => {
  return (
    <header className="absolute top-0 z-50 w-full bg-transparent px-10">
      <div className="container mx-auto ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animations.containerAnimation}
          className="flex w-full flex-col items-center justify-center gap-4 py-5 sm:flex-row sm:justify-between sm:gap-0"
        >
          <div className="block md:float-left">
            <Link href="/">
              <span className="cursor-pointer text-4xl font-bold text-white">
                <motion.img
                  variants={animations.item}
                  src="/white-logo.svg"
                  alt="Father Like The Father Logo"
                  className="h-full w-48"
                />
              </span>
            </Link>
          </div>
          <div className="ml-0 flex items-center justify-end font-primary text-sm sm:ml-auto md:block">
            {/* {categories.map(category => (
                            <Link key={category.slug} href={`/category/${category.slug}`}>
                                <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                                    {category.name}
                                </span>
                            </Link>
                        ))} */}
            <Link href="/">
              <motion.span
                variants={animations.item}
                className="mt-2 ml-4 cursor-pointer align-middle text-white hover:underline"
              >
                HOME
              </motion.span>
            </Link>
            <Link href="/about">
              <motion.span
                variants={animations.item}
                className="mt-2 ml-4 cursor-pointer align-middle text-white hover:underline"
              >
                ABOUT
              </motion.span>
            </Link>
            <Link href="/blog">
              <motion.span
                variants={animations.item}
                className="mt-2 ml-4 cursor-pointer align-middle text-white hover:underline"
              >
                BLOG
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span
                variants={animations.item}
                className="mt-2 ml-4 cursor-pointer align-middle text-white hover:underline"
              >
                CONTACT
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export default Header
