import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getPostCategories } from '../services'

const CategoriesButtons = ({ post }: any) => {
  //   const [categories, setCategories] = useState<any[]>([])

  //   useEffect(() => {
  //     getPostCategories().then((newCategories) => setCategories(newCategories))
  //   }, [])
  return (
    <div className="mb-8 flex gap-3 text-white">
      {post.categories.map((category: any) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="transistion inline-block transform cursor-pointer rounded-full bg-primary px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg duration-500 hover:-translate-y-0.5 hover:shadow-xl">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default CategoriesButtons
