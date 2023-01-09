import React from 'react'
import { HeadSEO } from '../components'
import AboutSection from '../sections/AboutSection'
import ContactSection from '../sections/ContactSection'
import InternalHeroSection from '../sections/InternalHeroSection'

const contact = () => {
  return (
    <div>
      <HeadSEO title={`Contact`} />
      <InternalHeroSection title="CONTACT" img="contact" />
      <ContactSection />
    </div>
  )
}

export default contact
