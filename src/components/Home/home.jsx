import React from 'react'
import "./home.css"
import Navbar from "../Navbar/navbar"
import Solutions from '../Solutions/solutions'
import Technologies from '../Technology/technology'
import Hero from '../Hero/hero'
import Cards from '../Cards.js/cards'
import Footer from '../Footer/footer'

const Home = () => {
  return (
    <> <div>
    <div className='scroll-watcher'></div>
   {/* <Navbar /> */}

   </div>
   <Hero />
   <Solutions />
   <Cards />

   <Technologies />
   <Footer />
   </>
  )
}

export default Home