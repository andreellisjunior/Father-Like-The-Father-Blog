import type { NextPage } from 'next'
import Head from 'next/head'
import { HeadSEO } from '../components'
import AboutSection from '../sections/AboutSection'
import FeaturedPosts from '../sections/FeaturedPosts'
import HeroSection from '../sections/HeroSection'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <HeadSEO title={`Home`} />
      <HeroSection />
      <AboutSection />
      <FeaturedPosts />
    </div>
  )
}

export default Home
