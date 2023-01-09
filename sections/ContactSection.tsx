import React from 'react'

const ContactSection = () => {
  return (
    <div className="flex w-full items-center justify-center bg-primary py-28 px-10">
      <div className="flex max-w-7xl flex-col items-center justify-center gap-5 text-center text-white">
        <h2 className="font-primary text-3xl font-bold">
          Questions? Comments? Thoughts? Complete the form below and we'll get
          back to you as soon as possible!
        </h2>
        <p className="max-w-5xl text-xl leading-8">
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
        </p>
      </div>
    </div>
  )
}

export default ContactSection
