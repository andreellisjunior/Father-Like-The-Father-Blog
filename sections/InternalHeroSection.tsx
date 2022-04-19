import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'

const InternalHeroSection = ({ title, img }: any) => {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[{ image: `/${img}-background.jpg`, speed: -20 }]}
        className="hero-section about relative flex h-1/2-screen items-center justify-center font-primary text-white"
      >
        <h1 className="z-50 text-7xl font-semibold">{title}</h1>
      </ParallaxBanner>
    </ParallaxProvider>
  )
}

export default InternalHeroSection
