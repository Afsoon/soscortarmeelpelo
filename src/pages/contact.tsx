import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'

const Form = () => {
  const [accepTOC, setAceeptTOC] = useState(false)
  const classNameBg = accepTOC ? 'bg-indigo-600' : 'bg-gray-200'
  const classNameTransition = accepTOC ? 'translate-x-5' : 'translate-x-0'

  const clickCheckbox = () => {
    setAceeptTOC((state) => !state)
  }

  return (
    <div className="bg-gray-50 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa28"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa28)"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Contacto
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Rellene el siguiente formulario para ponerse en contacto con su
            peluquero. Podrás comunicarle tus dudas antes de reservar una cita.
          </p>
        </div>
        <div className="mt-12">
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8"
          >
            <div>
              <label
                htmlFor="first_name"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Nombre
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="first_name"
                  className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Apellido(s)
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="last_name"
                  className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  type="email"
                  className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Mensaje
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <textarea
                  id="message"
                  rows={4}
                  className="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span
                    role="checkbox"
                    tabIndex={0}
                    aria-checked="false"
                    onClick={clickCheckbox}
                    className={`${classNameBg} relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
                  >
                    <span
                      aria-hidden="true"
                      className={`${classNameTransition} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
                    ></span>
                  </span>
                </div>
                <div className="ml-3">
                  <p className="text-base leading-6 text-gray-500">
                    Acuerdo de RGPD. Doy mi consentimiento para que esta web
                    almacene la información que envío y puedan responder a mi
                    petición.
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <span className="w-full inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >
                  Enviar mensaje
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <>
      <Head>
        <title>SOS Pelatencasa - Enviar mensaje de contacto</title>
        <meta
          name="description"
          content="Pongasé en contacto con su peluquero para consultar sobre los servicios que desee contratar."
        />
        <meta name="robots" content="index, follow" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          content="Pongasé en contacto con su peluquero para consultar sobre los servicios que desee contratar."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://pelatencasa.now.sh/" />
        <meta name="twitter:title" content="SOS Pelatencasa" />
        <meta
          name="twitter:description"
          content="Pongasé en contacto con su peluquero para consultar sobre los servicios que desee contratar."
        />
        <link rel="canonical" href="https://pelatencasa.now.sh/contact" />
      </Head>
      <Header showBook />
      <Form />
      <Footer />
    </>
  )
}
export default Contact
