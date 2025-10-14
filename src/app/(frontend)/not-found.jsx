import Image from 'next/image'
import React from 'react'

const NotFound = () => {
  return (
    <section className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px]">
      <div className="container mx-auto px-[15px] py-10">
        <div className='flex flex-col items-center justify-center'>
          <div className='absolute top-[50px]'>
            <h1 className='text-[80px] font-medium'>404</h1>
          </div>
          <div className=' h-[400px]'>
            <Image src="/images/dribble_1.gif" className='h-full w-full' width={500} height={400} alt="404"/>
              
          </div>
        </div>     
      </div>
    </section>
  )
}

export default NotFound
