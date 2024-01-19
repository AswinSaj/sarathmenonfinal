'use client'
import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import SmoothScroll from './utils/SmoothScroll'
import PreLoader from './components/PreLoader/PreLoader'
import Parallax from './components/Parallax/Parallax'
import Landing from './components/Landing/Landing'
import Filmography from './components/Filmography/Filmography'
import Timeline from './components/Timeline/Timeline'
import Contact from './components/Contact/Contact'
import VideosMobile from './components/VideoMobile/VideosMobile'
import Poetry from './components/Poetry/Poetry'
const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = 'default'
    }, 2000)
    setTimeout(() => {
      document.body.style.overflow = 'auto'
    }, 2500)
  }, [])
  return (
    <>
      <div id='modal'></div>
      <main>
        <AnimatePresence mode='wait'>
          {isLoading ? <PreLoader /> : null}
        </AnimatePresence>
        <SmoothScroll />
        <Landing />
        <Timeline />
        <Parallax />
        <Filmography />
        <VideosMobile />
        <Poetry />
        <Contact />
      </main>
    </>
  )
}

export default Home
