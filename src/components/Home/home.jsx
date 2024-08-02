import React from 'react'
import "./home.css"
import Navbar from "../Navbar/navbar"
import Hero from '../Hero/hero'
import Herotwo from '../Hero/HeroTwo/herotwo'

const Home = () => {
  return (
    <> <div className='home-container'>
    <div className='scroll-watcher'></div>
   <Navbar />
   <Hero />
   {/* <Herotwo/> */}

  

   </div></>
  )
}

export default Home