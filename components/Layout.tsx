import React from 'react'
import HeroSection from '../sections/HeroSection'
import { Header } from './'
import Footer from './Footer'

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
