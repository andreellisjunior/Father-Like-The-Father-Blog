import { motion } from 'framer-motion'
import React from 'react'
import animations from '../animations/animations'

const AboutSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={animations.aboutAnimations}
      className="flex w-full items-center justify-center py-28 px-10"
    >
      <div className="flex max-w-7xl flex-col items-center justify-center gap-5 text-center text-white">
        <motion.h2
          variants={animations.aboutItems}
          className="font-primary text-6xl font-bold"
        >
          WHAT IS FATHER LIKE THE FATHER?
        </motion.h2>
        <motion.p
          variants={animations.aboutItems}
          className="max-w-5xl text-xl leading-8"
        >
          An initiative and a new resource to finding how to father our own
          children the way The Father himself fathers us. Too often, we find
          ourselves trying very hard to either be like our earthly fathers or
          fathers figures, or NOT be like them. Either they did it "right" or
          they've completely missed the mark. Well, what about God The Father?
          Don't you think He has a say in how we father our children? As someone
          who has made the choice to take fathering very serious, I want to make
          the right choices. Not only for me, but for my sons. Walk with me as
          we figure out what it truely means to
          <br />
          <span className="mt-2 inline-block text-2xl italic">
            Father Like The Father.
          </span>
        </motion.p>
      </div>
    </motion.div>
  )
}

export default AboutSection
