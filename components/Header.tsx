import React, { useContext, useState, useEffect } from 'react'
import { getCategories } from '../services'
import Link from 'next/link'
import logo from '../public/white-logo.svg'

const Header = () => {
  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <header className="absolute top-0 z-50 w-full bg-transparent px-10">
      <div className="container mx-auto ">
        <div className="flex w-full items-center justify-between py-5">
          <div className="block md:float-left">
            <Link href="/">
              <span className="cursor-pointer text-4xl font-bold text-white">
                <img
                  src="/white-logo.svg"
                  alt="Father Like The Father Logo"
                  className="h-full w-48"
                />
              </span>
            </Link>
          </div>
          <div className="ml-auto flex items-center justify-end font-primary text-sm md:block">
            {/* {categories.map(category => (
                            <Link key={category.slug} href={`/category/${category.slug}`}>
                                <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                                    {category.name}
                                </span>
                            </Link>
                        ))} */}
            <Link href="/">
              <span className="mt-2 ml-4 cursor-pointer align-middle text-white hover:underline">
                HOME
              </span>
            </Link>
            <Link href="/about">
              <span className="mt-2 ml-4 cursor-pointer align-middle text-white hover:underline">
                ABOUT
              </span>
            </Link>
            <Link href="/blog">
              <span className="mt-2 ml-4 cursor-pointer align-middle text-white hover:underline">
                BLOG
              </span>
            </Link>
            <Link href="/contact">
              <span className="mt-2 ml-4 cursor-pointer align-middle text-white hover:underline">
                CONTACT
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
