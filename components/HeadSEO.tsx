import Head from 'next/head'
import React from 'react'

const HeadSEO = ({ title, children }: any) => {
  return (
    <Head>
      <title>{title} | Father Like The Father</title>
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  )
}

export default HeadSEO
