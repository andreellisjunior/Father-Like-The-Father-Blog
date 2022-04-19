import React from 'react'
import { motion } from 'framer-motion'
import animations from '../animations/animations'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'

const HeroSection = () => {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[{ image: '/tree-background.jpg', speed: -20 }]}
        className="hero-section home relative flex h-screen items-center justify-center px-10 font-primary"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animations.containerAnimation}
          className="container z-50 mx-auto flex flex-col items-start gap-9 text-white"
        >
          <motion.h1
            variants={animations.item}
            className="text-7xl font-semibold"
          >
            FATHER LIKE THE FATHER
          </motion.h1>
          <motion.h3 variants={animations.item} className="text-3xl capitalize">
            Fathering our children like God fathers us.
          </motion.h3>
          <motion.button
            variants={animations.item}
            className="flex items-center gap-4 font-secondary"
          >
            SCROLL DOWN
            <span>
              <img src="/down-arrow.svg" alt="down arrow" />
            </span>
          </motion.button>
        </motion.div>
      </ParallaxBanner>
    </ParallaxProvider>
  )
}

export default HeroSection
