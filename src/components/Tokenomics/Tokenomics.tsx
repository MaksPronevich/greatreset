import './Tokenomics.css'

import tokenBg from '../../../media/tokenBg.png'
import tokenIcon from '../../../media/tokenIcon.png'
import token from '../../../media/token.png'

export const Tokenomics = () => {
  return (
    <>
      <div
        className=" flex flex-col items-start justify-start w-screen lg:h-screen py-[2%]"
        id="Tokenomics"
      >
        <div
          style={{
            backgroundImage: 'url(' + tokenBg + ')',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="flex flex-col lg:flex-row items-center justify-between mx-[2%] h-full bg-[#1E1E1E] rounded-3xl px-[5%] py-[3%]"
        >
          <div className="w-full lg:w-1/2 pr-[5%] flex h-[40%] lg:h-full pt-4 flex-col ">
            <div className=" flex flex-row">
              <img
                src={tokenIcon}
                alt=""
                className="5xl:h-[55px] 4xl:h-[45px] 3xl:h-[40px] 2xl:h-[35px] xl:h-[35px] lg:h-[30px] md:h-[40px] h-[25px] pr-4"
              />
              <span className="font-nmr 5xl:text-7xl 4xl:text-6xl 3xl:text-5xl 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-5xl text-2xl text-white">
                <span className="font-d3">Tokenomics</span>
              </span>
            </div>
            <img
              src={token}
              alt=""
              className="w-full h-full max-h-[85vh] object-contain"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pb-[5%] flex flex-col h-[50%] lg:h-full items-center justify-start mt-[10%] lg:mt-0 pb-4">
            <span className="font-nmr 5xl:text-4xl 4xl:text-3xl 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl pt-2 text-base text-gray-500 lg:pl-[5%]">
              <span className="text-white">Token Supply: 1 $ONE</span>
              <br />
              <br />
              <span className="text-white">$ONE isn't like other tokens.</span>
              <br />
              <br />
              With just ONE token in supply, the value of $ONE is as clear as
              day - the price of the ONE token equals the market cap.
              <br />
              <br />
              <span className="text-white">
                No taxes. No presale. This is the ultimate reset, the game
                changer.
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
