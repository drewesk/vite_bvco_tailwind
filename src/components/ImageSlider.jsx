import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'


const ImageSlider = () => {
    
  const slides = [
      
                    {
                      url: '../123.jpeg',
                      title: 'one',
                    },
      
                    {
                      url: '../222.jpeg',
                      title: 'two',
                    },
      
                    {
                      url: '../333.jpeg',
                      title: 'three',
                    },
      
                    {
                      url: '../444.jpeg',
                      title: 'market',
                    },
                ]
                
                const [currentIndex, setCurrentIndex] = useState(0)
                
                const preSlide = () => {
                    const isFirstSlide = currentIndex === 0
                    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
                    setCurrentIndex(newIndex)
                    
                }
                
                const nextSlide = () => {
                    const isLastSlide = currentIndex === slides.length - 1
                    const newIndex = isLastSlide ? 0 : currentIndex + 1
                    setCurrentIndex(newIndex)
                    
                }
                
                const goToSlide = (slideIndex) => {
                    setCurrentIndex(slideIndex)
                }
  
                return (
                    <div id="three" className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
                        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                             style={{ backgroundImage: `url(${slides[currentIndex].url})`}}>

                        </div>

                        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
                            <BsChevronCompactLeft onClick={preSlide} size={30}/>
                        </div>

                        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
                            <BsChevronCompactRight onClick={nextSlide} size={30}/>
                        </div>
                        
                        <div className='flex top-4 justify-center py-2'>
                            {slides.map((slide, slideIndex)=> (
                                <div className='2xl cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                                    <RxDotFilled size={25}/>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                )
}

export default ImageSlider