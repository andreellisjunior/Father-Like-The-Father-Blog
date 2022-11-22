import React from 'react'
import { HeadSEO } from '../components'
import AboutSection from '../sections/AboutSection'
import InternalHeroSection from '../sections/InternalHeroSection'

const contact = () => {
  return (
    <div>
      <HeadSEO title={`Contact`} />
      <InternalHeroSection title="CONTACT" img="contact" />
      <AboutSection />
    </div>
  )
}

export default contact
