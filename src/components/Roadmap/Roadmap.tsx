import './Roadmap.css'

import roadmapBg from '../../../media/roadmapBg.png'
import roadmapIcon from '../../../media/roadmapIcon.png'
import roadmap from '../../../media/roadmap.png'

export const Roadmap = () => {
  return (
    <>
      <div
        className=" flex flex-col items-start justify-start w-screen py-[2%]"
        id="Roadmap"
      >
        <div
          style={{
            backgroundImage: 'url(' + roadmapBg + ')',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="flex flex-col lg:flex-row items-center justify-between mx-[2%] h-full bg-[#1E1E1E] rounded-3xl px-[5%] py-[3%]"
        >
          <div className="w-full lg:w-[40%] pr-[5%] flex h-[40%] lg:h-full pt-4 flex-col ">
            <div className=" flex flex-row">
              <img
                src={roadmapIcon}
                alt=""
                className="5xl:h-[55px] 4xl:h-[45px] 3xl:h-[40px] 2xl:h-[35px] xl:h-[35px] lg:h-[30px] md:h-[40px] h-[25px] pr-4"
              />
              <span className="font-nmr 5xl:text-7xl 4xl:text-6xl 3xl:text-5xl 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-5xl text-2xl text-white">
                <span className="font-d3">roaDmap</span>
              </span>
            </div>
            <img
              src={roadmap}
              alt=""
              className="w-full h-full max-h-[85%] object-contain"
            />
          </div>
          <div className="w-full lg:w-[60%] lg:pb-[5%] flex flex-col h-[50%] lg:h-full items-center justify-start mt-[10%] lg:mt-0">
            <span className="font-nmr 5xl:text-4xl 4xl:text-3xl 3xl:text-xl 2xl:text-lg xl:text-lg lg:text-xl md:text-xl pt-2 pb-4 text-base text-gray-500">
              <span className="text-white">Phase 1: Launch</span>
              <br />
              <br className="4xl:block hidden" />
              We hit the ground running with the launch of $ONE and the
              establishment of our DAO. The groundwork is laid, and the
              revolution has begun.
              <br />
              <br />
              <span className="text-white">
                Phase 2: Community Building & Development
              </span>
              <br />
              <br className="4xl:block hidden" />
              We foster community development and encourage participation
              through our hackathon. Developers have a chance to obtain
              different percentages of the total supply prize for their
              contributions.
              <br />
              <br />
              <span className="text-white">Phase 3: Growth & Expansion</span>
              <br />
              <br className="4xl:block hidden" />
              We continue to grow and expand, taking $ONE to new heights. The
              journey doesn't end here. As we progress, we continue to disrupt,
              innovate, and make our mark on the crypto landscape.
              <br />
              <br />
              <span className="text-white">
                Join us, and be a part of The Great Reset - $ONE. <br />
                <br /> Nobody will ever own ONE, but everyone will want to own
                ONE. Will you?
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
