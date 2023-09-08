import React from 'react'

const Room = () => {
    
  return (
      
    <div id="two" className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[30%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
       
        <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
        <p className='pt-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p>

      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
       
        <img className='object-cover w-full h-full' 
                      src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt=""/>
        <img className='row-span-2 object-cover w-full h-[65%]' 
                      src="https://images.unsplash.com/photo-1621057621391-7ed446a24b41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2914&q=80" alt=""/>
        <img className='object-cover w-full h-[70%]' 
                      src="https://images.unsplash.com/photo-1585341840941-98553e474d84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2750&q=80" alt=""/>
      </div>
    </div>
  )
}

export default Room
    