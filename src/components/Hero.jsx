import React from 'react'

const Hero = () => {
    return (
            <div className='w-full h-screen' id="home">
                <img className='top-0 left-0 w-full h-screen object-cover' src="./1.jpeg" alt="vending image"/>
                <div className='bg-black/20 absolute top-0 left-0 w-full h-screen'/>
                <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                    <div className='top-[40%] md:left-[10%] max-w-[1100px] m-auto absolute p-4 shadow-2xl'>
                        <p className='md:text-7xl'>Premium Vending</p>
                        <h1 className="font-bold text-5xl md:text-6xl drop-shadow-2xl">At your place of business</h1>
                        <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
                            Premuim snack and drink services, vending classics, zero-cost placement.
                        </p>
                        <a href="#contact"><button className="bg-white text-black ">Request Now!</button></a>

                    </div>
            
                    </div>
                </div>
    )
}

export default Hero 