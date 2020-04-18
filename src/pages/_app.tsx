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
          <title>SOS Pelatencasa</title>
          <meta
            name="description"
            content="Servicio online de asistencia a la peluquería con tu peluquero de confianza."
          />
          <meta name="robots" content="index, follow" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="SOS Pelatencasa" />
          <meta property="og:url" content="https://pelatencasa.now.sh/" />
          <meta
            property="og:image"
            content="https://pelatencasa.now.sh/seo-image.png"
          />
          <meta property="og:image:width" content="484" />
          <meta property="og:image:height" content="500" />
          <meta
            property="og:description"
            content="Servicio online de asistencia a la peluquería con tu peluquero de confianza."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://pelatencasa.now.sh/" />
          <meta name="twitter:title" content="SOS Pelatencasa" />
          <meta
            name="twitter:description"
            content="Servicio online de asistencia a la peluquería con tu peluquero de confianza."
          />
          <meta
            name="twitter:image"
            content="https://pelatencasa.now.sh/seo-image.png"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="194x194"
            href="/favicon-194x194.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default MyApp
