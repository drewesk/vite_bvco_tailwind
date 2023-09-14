import React from 'react'
import vendingAnimationData from './vending.json'
import Lottie from 'lottie-react'

const AboutUs = () => {
  return (
      
    <div id="one" className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 bg-black/5 '>

      {/* Left Side */}
            <div className='grid grid-cols-2 grid-rows-1 h-[80vh] flex flex-col justify-center'>
            <Lottie animationData={vendingAnimationData} />
        
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Our Story</h3>
        <p className='text-2xl py-6'>
          What if you could have your cake and eat it too?
        </p>
        <p className='pb-6'>
          We noticed a niche in the market, most vending companies are not taking advantage of premium markets local to the greater Denver-Boulder area. We offer both high quality options and natural ingredients for snack and drink as well as the "vending classics". Click below to learn more! 
        </p>
        <div>
          
          <a href='#contact'  className='font-bold text-3xl p-8'><button className='border-black mr-4 hover:shadow-xl'>
            Get started today!
          </button></a>
        </div>
      </div>
    </div>
  )
}

export default AboutUs