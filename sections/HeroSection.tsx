import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import animations from '../animations/animations'

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
          className="container z-50 mx-auto flex flex-col items-center gap-9 text-center text-white sm:items-start sm:text-left"
        >
          <motion.h1
            variants={animations.item}
            className="text-5xl font-semibold sm:text-7xl"
          >
            FATHER LIKE THE FATHER
          </motion.h1>
          <motion.h3
            variants={animations.item}
            className="text-2xl capitalize sm:text-3xl"
          >
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
