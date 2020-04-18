import React from 'react'
import Container from '../Container'

const HowWorks = () => (
  <Container>
    <div className="flex flex-wrap flex-col items-center px-4 py-12 lg:py-16 lg:px-8 ">
      <h2 className="flex-1 self-start text-4xl font-bold text-gray-900">
        ¿Cómo Funciona?
      </h2>
      <ol className="list-decimal list-inside space-y-4 font-light text-xl text-gray-500 sm:mt-5 sm:text-2xl lg:text-3xl ">
        <li className="">
          Prepara las herramientas. Busca tus mejores tijeras o cuchillas.
        </li>
        <li className="">
          Reserva una cita. +15€ es más rentable que cometer un fallo.
        </li>
        <li className="">
          Ten una videollamada con tu estilista que te guiará, o a tú amigo o
          familiar, durante la sesión.
        </li>
      </ol>
    </div>
  </Container>
)

export default HowWorks
