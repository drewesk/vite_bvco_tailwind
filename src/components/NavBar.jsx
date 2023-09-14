import { React, useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'

const NavBar = () => {
    
    const [nav, setNav] = useState(false)
    
    const handleNav = () => {
        setNav(!nav)
    }
    
    return (
        <div className='absolute w-full flex justify-between p-4 items-center'>
            <img src="./logo.svg" alt="BVCo. Logo" className='shadow-inner absolute align-items-center top-0 w-[30%] justify-center'/>  
            <HiMenuAlt3 onClick={handleNav} className='hover:bg-gray-700 shadow-2xl bg-white fixed right-[4%] top-0 z-20 text-black cursor-pointer' size={80}/>
            <div className={
                    nav 
                        ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/70 px-4 py-7 flex-col z-10' 
                        : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10' 
                } >
                <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                    <a onClick={handleNav} href='#home' className='font-bold text-3xl p-8'> Home</a>
                    <a onClick={handleNav} href='#one'  className='font-bold text-3xl p-8'> About Us</a>
                    <a onClick={handleNav} href='#three'  className='font-bold text-3xl p-8'> Gallery</a>
                    <a onClick={handleNav} href='#contact'  className='font-bold text-3xl p-8'>Contact</a>
                </ul>
            </div>
        </div>
    )
}

export default NavBar