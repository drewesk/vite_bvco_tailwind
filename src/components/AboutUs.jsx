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
        <h3 className='text-5xl md:text-6xl font-bold'>Our Mission</h3>
        <p className='text-2xl py-6'>
          Taking vending machine services through the Stratosphere, at Zero-cost to you!
        </p>
        <p className='pb-6'>
          We noticed a hunger for premium, natural, and healthy options local to the greater Denver-Boulder area. BVCo. proudly serves high quality products with natural ingredients as well as the "Vending Classics" everyone knows and loves. 
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