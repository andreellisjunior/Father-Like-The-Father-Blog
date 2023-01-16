import React from 'react'

const ContactSection = () => {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-between bg-[#005C45] md:h-full md:flex-row">
      <div className="contact-section-img h-full w-0 md:h-[175vh] md:min-h-screen md:w-1/2 lg:h-full"></div>
      <div className="form-container relative h-auto w-full md:w-1/2">
        <div className="form-wrapper relative right-auto top-auto left-0 mx-12 my-12 h-auto w-auto rounded-2xl bg-white px-6 py-6 md:relative md:top-1/2 md:left-auto md:right-40 md:w-full md:px-12 md:py-12">
          <h3 className="font-bold text-primary">
            Have any questions? Something on your mind?
          </h3>
          <p className="font-bold text-primary ">
            Fill out the form or send me an email: fatherlikethefather@gmail.com
          </p>
          <form>
            <div className="form-input mt-8">
              <label htmlFor="name" className="font-bold text-primary">
                Full Name:
              </label>
              <input
                type="text"
                name="name"
                className="my-4 block w-full rounded-xl bg-gray-300 px-4 py-2"
              />
            </div>
            <div className="form-input mt-8">
              <label htmlFor="email" className="font-bold text-primary">
                Email:
              </label>
              <input
                type="email"
                name="email"
                className="my-4 block w-full rounded-xl bg-gray-300 px-4 py-2"
              />
            </div>
            <div className="form-input mt-8">
              <label htmlFor="message" className="font-bold text-primary">
                Message:
              </label>
              <textarea
                name="message"
                className="my-4 block w-full rounded-xl bg-gray-300 px-4 py-2"
              />
            </div>
            <div className="form-input mt-8">
              <button
                type="submit"
                className="ransistion inline-block transform cursor-pointer rounded-full bg-primary px-8 py-1 text-lg font-medium text-white shadow-lg duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
