import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import CTAImage from '../components/CTAImage'
import HowWorks from '../components/HowWorks'
import HeroSection from '../components/HeroSection'
import TeamSection from '../components/TeamSection'
import CookieBanner from '../components/CookieBanner'

const Home = () => {
  return (
    <>
      <Head>
        <title>SOS Cortarme el pelo - Página de inicio</title>
        <meta
          name="description"
          content="Servicio online de asistencia a la peluquería con un estilista experimentado en tú casa  ."
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
        <meta property="og:title" content="SOS Cortarme el pelo" />
        <meta property="og:url" content="https://soscortarmeelpelo.com/" />
        <meta property="og:site_name" content="SOS Cortarme el pelo" />
        <meta
          property="og:image"
          content="https://soscortarmeelpelo.com/seo-image.png"
        />
        <meta property="og:image:width" content="484" />
        <meta property="og:image:height" content="500" />
        <meta
          property="og:description"
          content="Servicio online de asistencia a la peluquería con un estilista experimentado en tú casa  ."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://soscortarmeelpelo.com/" />
        <meta name="twitter:title" content="SOS Cortarme el pelo" />
        <meta
          name="twitter:description"
          content="Servicio online de asistencia a la peluquería con un estilista experimentado en tú casa  ."
        />
        <meta
          name="twitter:image"
          content="https://soscortarmeelpelo.com/seo-image.png"
        />
        <link rel="canonical" href="https://soscortarmeelpelo.com/" />
      </Head>
      <HeroSection />
      <TeamSection />
      <HowWorks />
      <CTAImage />
      <Footer />
      <CookieBanner />
    </>
  )
}
export default Home
