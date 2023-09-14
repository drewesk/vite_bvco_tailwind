import React from 'react'
import vendingAnimationData from './vending.json'
import Lottie from 'lottie-react'

const AboutUs = () => {
  return (
      
    <div id="one" className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>

      {/* Left Side */}
            <div className='grid grid-cols-2 grid-rows-1 h-[80vh] flex flex-col justify-center'>
            <Lottie animationData={vendingAnimationData} />
        
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Our Story</h3>
        <p className='text-2xl py-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p>
        <p className='pb-6'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nostrum similique, asperiores cumque! Dignissimos earum, commodi harum quas id. Nobis magni ducimus officiis veniam atque, quas sed quaerat tempora minima facere, ratione recusandae dignissimos maxime accusantium vitae eius incidunt dolores?
        </p>
        <div>
          
          <a href='#contact'  className='font-bold text-3xl p-8'><button className='border-black mr-4 hover:shadow-xl'>
            Send us a Message
          </button></a>
        </div>
      </div>
    </div>
  )
}

export default AboutUs