import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import '../index.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>Pelatencasa</title>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default MyApp
