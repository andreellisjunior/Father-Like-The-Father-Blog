import type { NextPage } from 'next'
import Head from 'next/head'
import { HeadSEO } from '../components'
import AboutSection from '../sections/AboutSection'
import ContactSection from '../sections/ContactSection'
import FeaturedPosts from '../sections/FeaturedPosts'
import HeroSection from '../sections/HeroSection'

const Home: NextPage = () => {
  return (
    <div className="homepage-wrapper min-h-screen bg-primary">
      <HeadSEO title={`Home`} />
      <HeroSection />
      <AboutSection />
      <hr className="mx-auto max-w-lg" />
      <FeaturedPosts />
      <ContactSection />
    </div>
  )
}

export default Home
