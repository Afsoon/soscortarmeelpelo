import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const CTA = () => (
  <div className="bg-gray-300">
    <div className="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        ¿Preparado?
        <br />
        Pide tu cita hoy.
      </h2>
      <div className="mt-8 flex justify-center">
        <iframe
          src="https://app.acuityscheduling.com/schedule.php?owner=19447408"
          title="Schedule Appointment"
          width="100%"
          height="800"
          frameBorder="0"
        ></iframe>
        <script
          src="https://embed.acuityscheduling.com/js/embed.js"
          type="text/javascript"
        ></script>
      </div>
    </div>
  </div>
)

const Book = () => {
  return (
    <>
      <Header />
      <CTA />
      <Footer />
    </>
  )
}
export default Book
