import './Intro.css'

import hand from '../../../media/hand.png'
import introIcon from '../../../media/intro-icon.png'
import introBg from '../../../media/introbg.png'

import button from '../../../media/CTA.svg'
import { useState } from 'react'

import copy from '../../../media/copy.svg'

export const Intro = () => {
  const [isCopyNotificationShown, setCopyNotificationShown] = useState(false)

  return (
    <>
      <div
        className=" flex flex-col items-start justify-start w-screen lg:h-screen py-[2%]"
        id="Intro"
      >
        <div
          style={{
            backgroundImage: 'url(' + introBg + ')',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="flex flex-col lg:flex-row items-center justify-between mx-[2%] h-full bg-[#1E1E1E] rounded-3xl px-[5%] py-[3%]"
        >
          <div className="w-full lg:w-1/2 pr-[5%] flex h-[40%] lg:h-full pt-4 flex-col ">
            <div className=" flex flex-row">
              <img
                src={introIcon}
                alt=""
                className="5xl:h-[55px] 4xl:h-[45px] 3xl:h-[40px] 2xl:h-[35px] xl:h-[35px] lg:h-[30px] md:h-[40px] h-[25px] pr-4"
              />
              <span className="font-nmr 5xl:text-7xl 4xl:text-6xl 3xl:text-5xl 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-5xl text-2xl text-white">
                <span className="font-d3">$One Introduction</span>
              </span>
            </div>
            <img
              src={hand}
              alt=""
              className="w-full h-full max-h-[85vh] object-contain"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pb-[5%] flex flex-col h-[50%] lg:h-full items-center justify-start mt-[10%] lg:mt-0 pb-4">
            <span className="font-nmr 5xl:text-4xl 4xl:text-3xl 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl pt-2 text-base text-gray-500 lg:pl-[5%]">
              <span className="text-white">
                Welcome to The Great Reset - $ONE, a revolution & the start of a
                new number trend in the crypto space☝️,1️⃣{' '}
              </span>
              <br />
              <br />
              It's time to disrupt, innovate and reset the degens' mindset. This
              is more than just a token. This is a movement.
            </span>
            <div className="flex flex-col justify-start w-full lg:px-[5%] pt-8">
              <a href="#" className="">
                <img src={button} alt="" className="xl:h-[50px] 3xl:h-[70px]" />
              </a>
            </div>
            <span className="font-nmr flex flex-row justify-between w-full lg:px-[5%] text-white  5xl:text-4xl 4xl:text-3xl 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl text-base pt-8">
              <a href="">Telegram</a> | <a href="">Twitter</a> |{' '}
              <a href="">Uniswap</a> | <a href="">Etherscan</a>
            </span>

            <div className="lg:pt-6 flex flex-col items-start w-full h-[56px] pl-[1px] lg:px-[5%] mt-4 mb-4">
              {!isCopyNotificationShown && (
                <span className="pt-6 font-nmr 5xl:text-3xl 4xl:text-2xl 3xl:text-xl 2xl:text-xl xl:text-xl lg:text-lg md:text-lg text-base hyphens-none flex flex-row items-center  w-full pr-6 break-all bg-[#131313] rounded-3xl py-4 px-6 text-gray-500">
                  <img
                    src={copy}
                    alt=""
                    className="mr-6 -ml-[2px] cursor-pointer"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        // asdasd
                        // asdasd
                        // asdasd

                        '0x611231231231237b23af12312r4234523523412'
                      )
                      setCopyNotificationShown(true)
                      setTimeout(() => {
                        setCopyNotificationShown(false)
                      }, 3000)
                    }}
                  />
                  0x611231231231237b23af12312r4234523523412
                </span>
              )}
              {isCopyNotificationShown && (
                <span className="pt-6 font-nmr 5xl:text-3xl 4xl:text-2xl 3xl:text-xl 2xl:text-xl xl:text-xl lg:text-lg md:text-lg text-base hyphens-none flex flex-row items-center lg:w-[600px] w-full pr-6  break-all text-gray-500 bg-[#131313] rounded-3xl py-4 px-6">
                  <img src={copy} alt="" className="pr-4" />
                  Copied to clipboard
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
