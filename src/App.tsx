import './index.css'
import './App.css'

import { useEffect, useState } from 'react'
import { Home } from './components/Home/Home'
import { Intro } from './components/Intro/Intro'
import { About } from './components/About/About'
import { Mission } from './components/Mission/Mission'
import { Tokenomics } from './components/Tokenomics/Tokenomics'
import { Roadmap } from './components/Roadmap/Roadmap'
import { Footer } from './components/Footer/Footer'
import { Goals } from './components/Goals/Goals'

interface BlockState {
  absolute: boolean
  scale: number | null
  visible: boolean
  marginTop: number
}

const App: React.FC = () => {
  const [bS, setBs] = useState<BlockState[]>([
    { absolute: false, scale: null, visible: true, marginTop: 0 },
    { absolute: false, scale: null, visible: true, marginTop: 0 },
    { absolute: false, scale: null, visible: true, marginTop: 0 },
    { absolute: false, scale: null, visible: true, marginTop: 0 },
    { absolute: false, scale: null, visible: true, marginTop: 0 },
    { absolute: false, scale: null, visible: true, marginTop: 0 },
  ])

  useEffect(() => {
    const handleScroll = () => {
      let valueForSet = [
        { absolute: false, scale: null, visible: true, marginTop: 0 },
        { absolute: false, scale: null, visible: true, marginTop: 0 },
        { absolute: false, scale: null, visible: true, marginTop: 0 },
        { absolute: false, scale: null, visible: true, marginTop: 0 },
        { absolute: false, scale: null, visible: true, marginTop: 0 },
        { absolute: false, scale: null, visible: true, marginTop: 0 },
      ] as BlockState[]

      const windowH = window.innerHeight
      const position = document.documentElement.scrollTop

      if (position < windowH && position > 0) {
        valueForSet[0].scale = Math.trunc(
          ((windowH - position / 2) / windowH) * 100
        )
        valueForSet[0].marginTop = position * 2
      } else if (position >= windowH) {
        valueForSet[0].scale = 0
      }

      if (position < windowH * 2 && position > windowH) {
        valueForSet[1].scale = Math.trunc(
          ((windowH * 2 - position) / windowH) * 100
        )
        valueForSet[1].marginTop = (position - windowH) * 2
      } else if (position >= windowH * 2) {
        valueForSet[1].scale = 0
      }

      if (position < windowH * 3 && position > windowH * 2) {
        valueForSet[2].scale = Math.trunc(
          ((windowH * 3 - position) / windowH) * 100
        )
        valueForSet[2].marginTop = (position - windowH * 2) * 2
      } else if (position >= windowH * 3) {
        valueForSet[2].scale = 0
      }

      if (position < windowH * 4 && position > windowH * 3) {
        valueForSet[3].scale = Math.trunc(
          ((windowH * 4 - position) / windowH) * 100
        )
        valueForSet[3].marginTop = (position - windowH * 3) * 2
      } else if (position >= windowH * 4) {
        valueForSet[3].scale = 0
      }

      if (position < windowH * 5 && position > windowH * 4) {
        valueForSet[4].scale = Math.trunc(
          ((windowH * 5 - position) / windowH) * 100
        )
        valueForSet[4].marginTop = (position - windowH * 4) * 2
      } else if (position >= windowH * 5) {
        valueForSet[4].scale = 0
      }

      if (position < windowH * 6 && position > windowH * 5) {
        valueForSet[5].scale = Math.trunc(
          ((windowH * 6 - position) / windowH) * 100
        )
        valueForSet[5].marginTop = (position - windowH * 5) * 2
      } else if (position >= windowH * 6) {
        valueForSet[5].scale = 0
      }

      setBs(valueForSet)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    console.log(bS)
  }, [bS])

  return (
    <>
      {/*<div className="lg:block hidden">*/}
      <div>
        <div className="flex items-center justify-center h-screen bg-black">
          <div
            className="flex items-center justify-center h-screen bg-black"
            style={{
              transform:
                bS[0].scale != null
                  ? 'scale(.' + bS[0].scale.toString().padStart(2, '0') + ')'
                  : 'scale(.99)',
              marginTop: bS[0].marginTop + 'px',
              // filte
              //   bS[0].scale != nu
              //     ? 'blur(' + (100 - bS[0].scale) / 7 + 'px
              //     : 'none
            }}
          >
            <Home />
          </div>

          {/*<div*/}
          {/*  style={{*/}
          {/*    backgroundColor: 'rgba(0, 0, 0, 1)',*/}
          {/*    opacity: bS[0].scale != null ? (100 - bS[0].scale) / 100 : 0,*/}
          {/*  }}*/}
          {/*  className="absolute w-screen h-screen"*/}
          {/*></div>*/}
        </div>
        <div className="flex items-center justify-center w-full h-screen">
          <div
            className="z-10 flex items-center justify-center w-full h-screen"
            style={{
              transform:
                bS[1].scale != null
                  ? 'scale(.' + bS[1].scale.toString().padStart(2, '0') + ')'
                  : 'scale(1)',
              marginTop: bS[1].marginTop + 'px',
              // filt
              //   bS[1].scale != n
              //     ? 'blur(' + (100 - bS[1].scale) / 7 + 'p
              //     : 'non
            }}
          >
            <Intro />
          </div>

          {/*<div*/}
          {/*  style={{*/}
          {/*    backgroundColor: 'rgba(0, 0, 0, 1)',*/}
          {/*    opacity: bS[1].scale != null ? (100 - bS[1].scale) / 100 : 0,*/}
          {/*  }}*/}
          {/*  className="absolute z-10 w-screen h-screen"*/}
          {/*></div>*/}
        </div>
        <div className="flex items-center justify-center w-full h-screen">
          <div
            className="z-20 flex items-center justify-center w-full h-screen"
            style={{
              transform:
                bS[2].scale != null
                  ? 'scale(.' + bS[2].scale.toString().padStart(2, '0') + ')'
                  : 'scale(1)',
              marginTop: bS[2].marginTop + 'px',
              // filt
              //   bS[2].scale != n
              //     ? 'blur(' + (100 - bS[2].scale) / 7 + 'p
              //     : 'non
            }}
          >
            <About />
          </div>
          {/*<div*/}
          {/*  style={{*/}
          {/*    backgroundColor: 'rgba(0, 0, 0, 1)',*/}
          {/*    opacity: bS[2].scale != null ? (100 - bS[2].scale) / 100 : 0,*/}
          {/*  }}*/}
          {/*  className="absolute z-20 w-screen h-screen"*/}
          {/*></div>*/}
        </div>
        <div className="flex items-center justify-center w-full h-screen bg-black">
          <div
            className="z-30 flex items-center justify-center w-full h-screen"
            style={{
              transform:
                bS[3].scale != null
                  ? 'scale(.' + bS[3].scale.toString().padStart(2, '0') + ')'
                  : 'scale(1)',
              marginTop: bS[3].marginTop + 'px',
              // filt
              //   bS[3].scale != n
              //     ? 'blur(' + (100 - bS[3].scale) / 7 + 'p
              //     : 'non
            }}
          >
            <Mission></Mission>
          </div>

          {/*<div*/}
          {/*  style={{*/}
          {/*    backgroundColor: 'rgba(0, 0, 0, 1)',*/}
          {/*    opacity: bS[3].scale != null ? (100 - bS[3].scale) / 100 : 0,*/}
          {/*  }}*/}
          {/*  className="absolute z-30 w-screen h-screen"*/}
          {/*></div>*/}
        </div>
        <div className=" flex items-center justify-center w-full h-screen bg-black">
          <div
            className=" z-40 flex items-center justify-center w-full h-screen"
            style={{
              transform:
                bS[4].scale != null
                  ? 'scale(.' + bS[4].scale.toString().padStart(2, '0') + ')'
                  : 'scale(1)',
              marginTop: bS[4].marginTop + 'px',
              // filt
              //   bS[4].scale != n
              //     ? 'blur(' + (100 - bS[4].scale) / 7 + 'p
              //     : 'non
            }}
          >
            <Tokenomics />
          </div>
          {/*<div*/}
          {/*  style={{*/}
          {/*    backgroundColor: 'rgba(0, 0, 0, 1)',*/}
          {/*    opacity: bS[4].scale != null ? (100 - bS[4].scale) / 100 : 0,*/}
          {/*  }}*/}
          {/*  className="absolute z-40 w-screen h-screen"*/}
          {/*></div>*/}
        </div>
        <div className="flex items-center justify-center bg-black">
          <div className="z-[60] flex flex-col items-center justify-center">
            <Roadmap />
            <Goals />
            <Footer />
          </div>
        </div>
      </div>

      {/*<div className="lg:hidden">*/}
      {/*  <Home />*/}
      {/*  <Intro />*/}
      {/*  <About />*/}
      {/*  <Mission />*/}
      {/*  <Tokenomics />*/}
      {/*  <Roadmap />*/}
      {/*  <Goals />*/}
      {/*  <Footer />*/}
      {/*</div>*/}
    </>
  )
}
export default App
