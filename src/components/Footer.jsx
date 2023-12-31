import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { TiSocialPinterest } from 'react-icons/ti'

const Footer = () => {
  return (
    <div  className='mt-[40px] bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>

        <div className='col-span-2 py-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our newsletter</p>
          <p className='py-4'>
            Deals, articles and resources sent to your inbox weekly.
          </p>
          <form className='flex flex-col sm:flex-row'
           action="https://getform.io/f/03bcee55-6c65-492d-9309-4ccf7d21db7a" 
            method='POST' 
            encType='multipart/form-data'>
            <input name='name' className='hidden' value='EmailList'/>

            <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter email..' name="email" id="email"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
            <button className='p-2 mb-4 rounded-md'>Subscribe</button>
          </form>
        </div>
               <br/>
                <div>
          <h6 className='line-through font-bold uppercare pt-2'>Company</h6>
          <ul>
            <li className='line-through py-1'>Jobs</li>
            <li className='line-through py-1'>Press</li>
            <li className='line-through py-1'>Partners</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2 line-through'>Legal</h6>
          <ul>
            <li className='line-through py-1'>Claims</li>
            <li className='line-through py-1'>Privacy</li>
            <li className='line-through py-1'>Terms</li>
            <li className='line-through py-1'>Conditions</li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>{new Date(). getFullYear()} Boulder Vending Co. LLC All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest size={30} />
        </div>
      </div>
    </div>
  )
}

export default Footer