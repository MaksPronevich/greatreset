import './Goals.css'
import React from 'react'

export const Goals = () => {
  return (
    <div className="flex flex-col items-center px-[2%] py-8 w-full">
      <span className="font-nmr 5xl:text-7xl 4xl:text-6xl 3xl:text-5xl 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-5xl text-2xl text-white">
        <span className="font-d3">Our GoAls</span>
      </span>
      <div className="lg:flex-row flex flex-col w-full pt-8">
        <div className="lg:w-1/2 bg-[#1E1E1E] rounded-3xl lg:mr-[1%] flex flex-row justify-between mb-4 pb-4 lg:pb-0">
          <span className="font-nmr 5xl:text-4xl 4xl:text-3xl 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl pl-9 pt-6 text-base text-white">
            Holders
          </span>
          <span className="font-nmr pr-9 md:text-8xl 2xl:text-9xl pt-6 text-6xl text-red-500">
            1000
          </span>
        </div>
        <div className="lg:w-1/2 bg-[#1E1E1E] rounded-3xl lg:ml-[1%] flex flex-row justify-between pb-4 lg:pb-0">
          <span className="font-nmr 5xl:text-4xl 4xl:text-3xl 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl pl-9 pt-6 text-base text-white">
            Telegram members
          </span>
          <span className="font-nmr pr-9 md:text-8xl 2xl:text-9xl pt-6 text-6xl text-red-500">
            1000
          </span>
        </div>
      </div>
    </div>
  )
}
