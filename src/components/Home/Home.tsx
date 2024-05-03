import './Home.css'
import { Navigation } from '../Navigation/Navigation'
import home from '../../../media/home.png'

export const Home = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-start w-screen h-screen bg-black">
        <Navigation />

        <div className="flex flex-col lg:flex-row items-center justify-between px-[5%] h-full">
          <div className="w-full lg:w-1/2 lg:pb-[5%] flex flex-col order-2 lg:order-1 h-[60%] lg:h-full items-center justify-center">
            <span className="font-nmr 5xl:text-8xl 4xl:text-7xl 3xl:text-6xl 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-6xl text-4xl text-white">
              <span className="font-d3">W</span>elcome to the world of{' '}
              <span className="font-d3 text-red-500">$øñE</span>, the start of a
              new number trend.
            </span>
            <p className="font-nmr 5xl:text-4xl 4xl:text-3xl 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl lg:pt-10 lg: pt-2 text-base leading-relaxed text-gray-500">
              A revolutionary crypto that dares to redefine the conventions of
              the crypto landscape.
            </p>
          </div>
          <div className="w-full lg:w-1/2 pr-[5%] flex order-1 lg:order-2 h-[40%] lg:h-full pt-4">
            <div className="homeImage w-full h-full">
              <div className="card w-full h-full">
                <div className="fold">
                  <img
                    src={home}
                    alt=""
                    className="object-contain w-full h-full"
                  />
                  {/*<img*/}
                  {/*  src={home}*/}
                  {/*  alt=""*/}
                  {/*  className="c-glitch__img object-contain w-full h-full"*/}
                  {/*/>*/}
                  {/*<img*/}
                  {/*  src={home}*/}
                  {/*  alt=""*/}
                  {/*  className="c-glitch__img object-contain w-full h-full"*/}
                  {/*/>*/}
                  {/*<img*/}
                  {/*  src={home}*/}
                  {/*  alt=""*/}
                  {/*  className="c-glitch__img object-contain w-full h-full"*/}
                  {/*/>*/}
                  {/*<img*/}
                  {/*  src={home}*/}
                  {/*  alt=""*/}
                  {/*  className="c-glitch__img object-contain w-full h-full"*/}
                  {/*/>*/}
                  {/*<div*/}
                  {/*  className="c-glitch"*/}
                  {/*  style={{*/}
                  {/*    backgroundImage:*/}
                  {/*      "url('https://i.ibb.co/1MJYDDF/0-a.png')",*/}
                  {/*  }}*/}
                  {/*>*/}
                  {/*  <div*/}
                  {/*    className="c-glitch__img"*/}
                  {/*    style={{*/}
                  {/*      backgroundImage:*/}
                  {/*        "url('https://i.ibb.co/1MJYDDF/0-a.png')",*/}
                  {/*    }}*/}
                  {/*  ></div>*/}
                  {/*  <div*/}
                  {/*    className="c-glitch__img"*/}
                  {/*    style={{*/}
                  {/*      backgroundImage:*/}
                  {/*        "url('https://i.ibb.co/1MJYDDF/0-a.png')",*/}
                  {/*    }}*/}
                  {/*  ></div>*/}
                  {/*  <div*/}
                  {/*    className="c-glitch__img"*/}
                  {/*    style={{*/}
                  {/*      backgroundImage:*/}
                  {/*        "url('https://i.ibb.co/1MJYDDF/0-a.png')",*/}
                  {/*    }}*/}
                  {/*  ></div>*/}
                  {/*  <div*/}
                  {/*    className="c-glitch__img"*/}
                  {/*    style={{*/}
                  {/*      backgroundImage:*/}
                  {/*        "url('https://i.ibb.co/1MJYDDF/0-a.png')",*/}
                  {/*    }}*/}
                  {/*  ></div>*/}
                  {/*  <div*/}
                  {/*    className="c-glitch__img"*/}
                  {/*    style={{*/}
                  {/*      backgroundImage:*/}
                  {/*        "url('https://i.ibb.co/1MJYDDF/0-a.png')",*/}
                  {/*    }}*/}
                  {/*  ></div>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
