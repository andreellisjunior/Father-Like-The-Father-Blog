import React from 'react'
import { HeadSEO } from '../components'
import HeroSection from '../sections/HeroSection'
import InternalHeroSection from '../sections/InternalHeroSection'

const about = () => {
  return (
    <>
      <HeadSEO title={`About`} />
      {/* Hero Section */}
      <InternalHeroSection title="ABOUT" img="about" />

      {/* Section Two */}
      <div className=" bg-primary py-28 px-10 text-white">
        <div className="container mx-auto flex flex-col justify-between gap-7 md:flex-row">
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h2 className="mb-4 font-primary text-4xl font-bold">
              WHERE IT ALL BEGAN...
            </h2>
            <p>
              {' '}
              My girlfriend at the time(now wife 🙌) came to visit where I lived
              a few times during the early years of our relationship. During
              this time, we hung out and whatnot. On January 2nd of 2015, we
              found out that she was pregnant. This was naturally huge but it
              carried a greater impact because she was 19 at the time and I was
              21. We, by no means, weren't ready to start a family. As a matter
              of fact, we only knew each other since September of 2014. Five
              months prior! Crazy! Nonetheless, this was the beginning of
              something I had no idea that was going to happen. Something that I
              envisioned for myself many, many, many years in the future. I knew
              that I had to prepare to become a father (and eventually a
              husband). I was not only scared but still had child-like thinking.
              Little did I know this was going to be a wild ride!
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="../begin-photo.jpg"
              alt="early photo of the family"
              className="mx-auto md:ml-auto md:mr-0"
            />
          </div>
        </div>
      </div>

      {/* Section Three */}
      <div className=" bg-primary py-28 px-10 text-white">
        <div className="container mx-auto flex flex-col-reverse justify-between gap-7 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src="../family-photo.jpeg"
              alt="current photo of the family"
              className="mx-auto md:mr-auto md:ml-0"
            />
          </div>
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h2 className="mb-4 font-primary text-4xl font-bold">
              WHERE WE ARE GOING...
            </h2>
            <p>
              {' '}
              Fast forward to today. We are now going on 8 years of marriage, 9
              years of knowing each other, 1 son (the one that changed it all)
              who'll be 8 years old, and another son who'll be 6 years old. It's
              only by the grace of God that we've gotten this far! Please
              understand, things are by no means perfect or in order. As a
              matter of fact, they are far from. However, the main approach that
              I take is I need to trust God and have Him lead. If he doesn't, I
              get in the way and It's nothing my kids and my wife need. You'll
              see all of that as you explore and notice everything that I
              struggle with and am looking to Jesus to guide the way. I hope you
              find encouragement as we try, through the grace of God, to Father
              Like The Father.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default about
