import React from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Offers from './components/Offers'
import AboutUs from './components/AboutUs'
// import ImageSlider from './components/ImageSlider'
import Contact from './components/Contact'

function App() {

  return (
      
      <div>
         <NavBar/>
         <Hero />
         <Offers />
         <AboutUs />
        {/* <ImageSlider />*/}
         <Contact />
      </div>  
  )
}

export default App
