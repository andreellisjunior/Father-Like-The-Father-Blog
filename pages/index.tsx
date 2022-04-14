import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components'
import AboutSection from '../sections/AboutSection'
import HeroSection from '../sections/HeroSection'
import { getPosts } from '../services'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Father Like The Father Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <AboutSection />
    </div>
  )
}

export default Home
