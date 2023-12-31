import React from 'react'
import Footer from './Footer'

const Contact = () => {
    return (
        <>
        <div className='max-w-[1040px] m-auto md:20' id="contact">
        <div>
            <h1 className='p-10 py-16 text-4xl font-bold text-center text-[#001b5e]'>Contact Us</h1>
            <form action="https://getform.io/f/03bcee55-6c65-492d-9309-4ccf7d21db7a" 
            method='POST' 
            encType='multipart/form-data'>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label className='uppercase text-sm py-2'>Name</label>
                        <input required className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="name" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Phone</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="phone"/>
                    </div> 
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Email</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name="email" id="email"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                    </div> 
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Message</label>
                        <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='3' name="message"
                        required
                        minLength={6}
                        maxLength={400}
                        ></textarea>
                    </div>
                    <br/>
                    <button className='bg-[#001b5e] text-gray-100 mt-4 rounded-lg'>
                        SEND NOW
                    </button>
                </div>
            </form>
        </div>
    </div>
                <Footer />
        </>

    )
}

export default Contact