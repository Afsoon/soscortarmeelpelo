import React from 'react'

const Header = () => (
  <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
    <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
      <div className="flex items-center flex-1">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="#">
            <img
              className="h-8 w-auto sm:h-10"
              src="/img/logos/workflow-mark-on-white.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </nav>
  </div>
)

export default Header
