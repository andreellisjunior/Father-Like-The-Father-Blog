import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="z-50 w-full bg-[#2d2d2d] px-10 py-5">
      <div className="container mx-auto ">
        <div className="flex w-full flex-col items-center justify-between py-5 md:flex-row">
          <div className="mb-5 block md:float-left md:mb-0">
            <Link href="/">
              <span className="cursor-pointer text-4xl font-bold text-white">
                <img
                  src="/white-logo.svg"
                  alt="Father Like The Father Logo"
                  className="h-full w-48"
                />
              </span>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start font-primary text-sm md:ml-auto md:block md:flex-row">
            <p className="text-center text-white md:text-left">
              Copyright &copy; 2022 Father Like The Father. All Rights Reserved.
            </p>
            <p className="mt-2 text-center text-xs font-medium text-white text-opacity-20 md:mt-1 md:text-right">
              Designed & Developed by{' '}
              <Link href="https://aguynamedandre.com">
                <a className="italic underline">A Guy Named Andre</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
