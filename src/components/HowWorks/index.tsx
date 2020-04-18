import React from 'react'
import Container from '../Container'

const HowWorks = () => (
  <Container>
    <div className="flex flex-wrap flex-col items-center px-4 py-12 lg:py-16 lg:px-8 ">
      <h2 className="flex-1  text-4xl font-bold text-gray-900">
        ¿Cómo funciona?
      </h2>
      <ol className="list-decimal list-inside space-y-4 font-light text-xl text-gray-500 sm:mt-5 sm:text-2xl lg:text-3xl ">
        <li>Prepara las herramientas.</li>
        <li>
          Reserva una cita en menos de 5 minutos y en el horario que más te
          convenga.
        </li>
        <li>
          Ten una videollamada con tu estilista, quien te guiará paso a paso
          durante la sesión.
        </li>
      </ol>
    </div>
  </Container>
)

export default HowWorks
