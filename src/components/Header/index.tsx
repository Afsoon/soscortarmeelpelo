import React from 'react'

const Header = () => (
  <div className="pt-notch relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
    <nav className="notch relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
      <div className="flex items-center flex-1">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a
            className="flex items-center"
            href="/"
            title="Ir a página de inicio"
          >
            <img className="h-8 w-auto sm:h-10" src="/logo.png" alt="" />
            <h1 className="font-bold text-xl">SOS Pelatencasa</h1>
          </a>
        </div>
      </div>
    </nav>
  </div>
)

export default Header
