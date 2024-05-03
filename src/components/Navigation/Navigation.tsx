import React, { useState } from 'react'
import { RemoveScroll } from 'react-remove-scroll'

import './Navigation.css'
import logo from '../../../media/logo.png'

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="lg:border-black flex items-center justify-between w-full py-6 mx-auto px-[5%]">
        <div className="lg:flex-1 flex px-4">
          <img
            className="lg:block hidden w-auto h-16 pointer-events-none"
            src={logo}
            alt=""
          />
          <img
            className="lg:hidden w-auto h-12 ml-2 pointer-events-none"
            src={logo}
            alt=""
          />
        </div>
        <div className="lg:hidden flex">
          <button
            type="button"
            className="px-6 text-white border-none rounded-md"
            onClick={() => {
              setIsMobileMenuOpen(true)
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="lg:flex lg:gap-x-12 xl:gap-x-20 hidden px-10">
          <a
            onClick={() => {
              setIsMobileMenuOpen(false)
              const element_to_scroll_to = document.getElementById('Intro')
              if (element_to_scroll_to) element_to_scroll_to.scrollIntoView()
            }}
            className="font-nmr 5xl:text-4xl 4xl:text-3xl 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl leading-6 text-white cursor-pointer"
          >
            Intro
          </a>{' '}
          <a
            className="font-nmr 5xl:text-4xl 4xl:text-3xl 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl leading-6 text-white cursor-pointer"
            onClick={() => {
              setIsMobileMenuOpen(false)
              const element_to_scroll_to = document.getElementById('About')
              if (element_to_scroll_to) element_to_scroll_to.scrollIntoView()
            }}
          >
            About
          </a>
          <a
            onClick={() => {
              setIsMobileMenuOpen(false)
              const element_to_scroll_to = document.getElementById('Mission')
              if (element_to_scroll_to) element_to_scroll_to.scrollIntoView()
            }}
            className="font-nmr 5xl:text-4xl 4xl:text-3xl 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl leading-6 text-white cursor-pointer"
          >
            Mission
          </a>
          <a
            onClick={() => {
              setIsMobileMenuOpen(false)
              const element_to_scroll_to = document.getElementById('Tokenomics')
              if (element_to_scroll_to) element_to_scroll_to.scrollIntoView()
            }}
            className="font-nmr 5xl:text-4xl 4xl:text-3xl 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl leading-6 text-white cursor-pointer"
          >
            Tokenomics
          </a>
          <a
            onClick={() => {
              setIsMobileMenuOpen(false)
              const element_to_scroll_to = document.getElementById('Roadmap')
              if (element_to_scroll_to) element_to_scroll_to.scrollIntoView()
            }}
            className="font-nmr 5xl:text-4xl 4xl:text-3xl 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl leading-6 text-white cursor-pointer"
          >
            Roadmap
          </a>
          {/*!!!!!!!!!*/}
        </div>
      </nav>

      {isMobileMenuOpen && (
        <RemoveScroll>
          <div className="lg:hidden">
            <div className="mobile-menu fixed inset-0"></div>
            <div className="ring-1 ring-black fixed inset-y-0 right-0 z-10 w-full px-4 py-6 overflow-y-auto bg-black">
              <div className="flex items-center justify-between">
                <img className="lg:hidden w-auto h-16 ml-2" src={logo} alt="" />
                <button
                  type="button"
                  className="px-2 text-white border-none rounded-md"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flow-root mt-6">
                <div className="divide-y">
                  <div className="pt-20 space-y-2 text-center">
                    <a
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        const element_to_scroll_to =
                          document.getElementById('Intro')
                        if (element_to_scroll_to)
                          element_to_scroll_to.scrollIntoView()
                      }}
                      className="bg-none font-nmr block pb-8 text-white"
                    >
                      Intro
                    </a>
                    <a
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        const element_to_scroll_to =
                          document.getElementById('About')
                        if (element_to_scroll_to)
                          element_to_scroll_to.scrollIntoView()
                      }}
                      className="bg-none font-nmr block pb-8 text-white"
                    >
                      About
                    </a>
                    <a
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        const element_to_scroll_to =
                          document.getElementById('Mission')
                        if (element_to_scroll_to)
                          element_to_scroll_to.scrollIntoView()
                      }}
                      className="bg-none font-nmr block pb-8 text-white"
                    >
                      Mission
                    </a>
                    <a
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        const element_to_scroll_to =
                          document.getElementById('Tokenomics')
                        if (element_to_scroll_to)
                          element_to_scroll_to.scrollIntoView()
                      }}
                      className="font-nmr block pb-8 text-white"
                    >
                      Tokenomics
                    </a>
                    <a
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        const element_to_scroll_to =
                          document.getElementById('Roadmap')
                        if (element_to_scroll_to)
                          element_to_scroll_to.scrollIntoView()
                      }}
                      className="font-nmr block pb-16 text-white"
                    >
                      Roadmap
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RemoveScroll>
      )}
    </>
  )
}
