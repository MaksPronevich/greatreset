import './Footer.css'
import React from 'react'

import etherscan from '../../../media/et.svg'
import telegram from '../../../media/tg.svg'
import twitter from '../../../media/tw.svg'
import uniswap from '../../../media/un.svg'

export const Footer = () => {
  return (
    <div className="md:flex-row container flex flex-col items-center justify-between lg:px-[10%] pb-8">
      <span className="font-nmr py-6 text-white">
        © 2023 <span className="font-d3">øñE</span>. All rights reserved.
      </span>
      <div className="md:pl-0 flex flex-row pl-6">
        <a href="#" target="_blank" className="mr-8">
          <img alt="" src={telegram} />
        </a>
        <a href="#" target="_blank" className="mr-8">
          <img alt="" src={twitter} />
        </a>
        {/*!!!!!!!!!*/}
        <a href="#" target="_blank" className="mr-8">
          <img alt="" src={uniswap} />
        </a>
        {/*!!!!!!!!!*/}
        <a href="#" target="_blank" className="mr-8">
          <img alt="" src={etherscan} />
        </a>
      </div>
    </div>
  )
}
