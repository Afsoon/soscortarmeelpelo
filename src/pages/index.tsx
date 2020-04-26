import React from 'react'
import Footer from '../components/Footer'
import CTAImage from '../components/CTAImage'
import HowWorks from '../components/HowWorks'
import HeroSection from '../components/HeroSection'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>SOS Pelatencasa - Página de inicio</title>
        <meta
          name="description"
          content="Servicio online de asistencia a la peluquería con un estilista experimentado."
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="robots" content="index, follow" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SOS Pelatencasa" />
        <meta property="og:url" content="https://pelatencasa.now.sh/" />
        <meta property="og:site_name" content="SOS Pelatencasa" />
        <meta
          property="og:image"
          content="https://pelatencasa.now.sh/seo-image.png"
        />
        <meta property="og:image:width" content="484" />
        <meta property="og:image:height" content="500" />
        <meta
          property="og:description"
          content="Servicio online de asistencia a la peluquería con un estilista experimentado."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://pelatencasa.now.sh/" />
        <meta name="twitter:title" content="SOS Pelatencasa" />
        <meta
          name="twitter:description"
          content="Servicio online de asistencia a la peluquería con un estilista experimentado."
        />
        <meta
          name="twitter:image"
          content="https://pelatencasa.now.sh/seo-image.png"
        />
        <link rel="canonical" href="https://pelatencasa.now.sh/" />
      </Head>
      <HeroSection />
      <HowWorks />
      <CTAImage />
      <Footer />
    </>
  )
}
export default Home
