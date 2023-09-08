import React from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Offers from './components/Offers'
import Plan from './components/Plan'
import Room from './components/Room'
import ImageSlider from './components/ImageSlider'
import Footer from './components/Footer'

function App() {

  return (
      
      <div>
         <NavBar/>
         <Hero />
         <Offers />
         <Plan />
         <Room />
         <ImageSlider />
         <Footer />
      </div>  
  )
}

export default App
