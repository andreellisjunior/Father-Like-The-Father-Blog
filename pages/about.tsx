import React from 'react'
import HeroSection from '../sections/HeroSection'
import InternalHeroSection from '../sections/InternalHeroSection'

const about = () => {
  return (
    <>
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
              This section would highlight my past and being fathered by my dad
              and the struggles and problems there were. Then talk about the
              call to do something like this and be the infulence that God has
              called me to be. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Netus semper nulla nunc, interdum sed. Urna,
              pretium in mattis nibh eget. Orci, at aliquet libero, consequat
              enim. Nunc sed varius urna bibendum cras aenean tristique. Eros
              quis aliquet id sit vel cursus gravida. Enim netus nisi nullam
              nunc feugiat nunc, ut mi. Egestas tristique tortor montes, magna
              malesuada dui. Ultrices tristique at ut lorem tortor. Sed mi fames
              amet mauris. Mi ultrices scelerisque cursus diam arcu purus massa
              consequat faucibus. Ornare placerat id consequat mauris cursus
              rhoncus duis hac. Enim habitant et purus eget magna iaculis est
              euismod in. Egestas pulvinar vitae urna quis. Enim elementum
              ultrices donec vitae, arcu. A netus congue ipsum vestibulum eget
              amet. Non bibendum etiam tristique non et pretium odio. Malesuada
              iaculis mus nulla nec. Ultricies aliquam aliquam pellentesque in
              sagittis. Ipsum pulvinar consequat vitae sed leo lobortis ornare
              odio. Erat eget euismod nunc viverra parturient. Consequat ac
              lectus lacinia sem. Pharetra, rutrum semper mi hendrerit vulputate
              et. Nunc nec scelerisque ultricies arcu pharetra, mauris et
              laoreet. Feugiat scelerisque vivamus id convallis dictum dictum
              diam.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="../begin-photo.jpg"
              alt="Early photo of me"
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
              src="../begin-photo.jpg"
              alt="Early photo of me"
              className="mx-auto md:mr-auto md:ml-0"
            />
          </div>
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h2 className="mb-4 font-primary text-4xl font-bold">
              WHERE WE ARE GOING...
            </h2>
            <p>
              {' '}
              This section would highlight my past and being fathered by my dad
              and the struggles and problems there were. Then talk about the
              call to do something like this and be the infulence that God has
              called me to be. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Netus semper nulla nunc, interdum sed. Urna,
              pretium in mattis nibh eget. Orci, at aliquet libero, consequat
              enim. Nunc sed varius urna bibendum cras aenean tristique. Eros
              quis aliquet id sit vel cursus gravida. Enim netus nisi nullam
              nunc feugiat nunc, ut mi. Egestas tristique tortor montes, magna
              malesuada dui. Ultrices tristique at ut lorem tortor. Sed mi fames
              amet mauris. Mi ultrices scelerisque cursus diam arcu purus massa
              consequat faucibus. Ornare placerat id consequat mauris cursus
              rhoncus duis hac. Enim habitant et purus eget magna iaculis est
              euismod in. Egestas pulvinar vitae urna quis. Enim elementum
              ultrices donec vitae, arcu. A netus congue ipsum vestibulum eget
              amet. Non bibendum etiam tristique non et pretium odio. Malesuada
              iaculis mus nulla nec. Ultricies aliquam aliquam pellentesque in
              sagittis. Ipsum pulvinar consequat vitae sed leo lobortis ornare
              odio. Erat eget euismod nunc viverra parturient. Consequat ac
              lectus lacinia sem. Pharetra, rutrum semper mi hendrerit vulputate
              et. Nunc nec scelerisque ultricies arcu pharetra, mauris et
              laoreet. Feugiat scelerisque vivamus id convallis dictum dictum
              diam.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default about
