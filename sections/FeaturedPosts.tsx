import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { FeaturedPostCard } from '../components'
import { FeaturedPostCardFlip } from '../components'
import { getFeaturedPosts } from '../services'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
}

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result)
      setDataLoaded(true)
    })
  }, [])

  return (
    <div className="relative bg-primary py-28">
      <h2 className="text-center font-primary text-6xl font-bold text-white">
        FEATURED BLOG POSTS
      </h2>

      {featuredPosts.map((post, index) => (
        <FeaturedPostCard key={index} post={post} />
      ))}
    </div>
  )
}

export default FeaturedPosts
