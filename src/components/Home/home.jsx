import React from 'react'
import "./home.css"
import Navbar from "../Navbar/navbar"
import Solutions from '../Solutions/solutions'
import Technologies from '../Technology/technology'
import Hero from '../Hero/hero'
import Cards from '../Cards.js/cards'
import Footer from '../Footer/footer'
import CustomizedConepy from '../CustomizedConepy/customizedConepy'
import Chambers from '../Chambers/chambers'
import SingleChamber from '../Chambers/SingleCamber/singleChamber'
import About from '../About/about'

const Home = () => {
  return (
    <> <div>
    <div className='scroll-watcher'></div>
   <Navbar />

   

   </div>
   {/* <Hero />
   <Solutions />
   <Cards />

   <Technologies />
   <CustomizedConepy />
   <Footer /> */}
   <Chambers/>
   {/* <SingleChamber /> */}
   <About/>
   </>
  )
}

export default Home