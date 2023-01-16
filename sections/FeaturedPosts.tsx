import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import animations from '../animations/animations'

import { FeaturedPostCard } from '../components'
import { getFeaturedPosts } from '../services'

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([])

  useEffect(() => {
    getFeaturedPosts().then((result: any) => {
      setFeaturedPosts(result)
    })
  }, [])

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-125px' }}
      variants={animations.containerAnimation}
      className="relative bg-primary py-28"
    >
      <motion.h2
        variants={animations.item}
        className="text-center font-primary text-6xl font-bold text-white"
      >
        FEATURED BLOG POSTS
      </motion.h2>

      {featuredPosts.map((post, index) => (
        <FeaturedPostCard key={index} post={post} />
      ))}
    </motion.div>
  )
}

export default FeaturedPosts
