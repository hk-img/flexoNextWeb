import Image from 'next/image'
import React from 'react'

const NotFound = () => {
  return (
    <section className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px]">
      <div className="container mx-auto px-[15px] py-10">
        <div
          className="relative flex flex-col items-center justify-center h-[400px] 
                    bg-[url('/images/dribble_1.gif')] bg-auto bg-center bg-no-repeat rounded-lg"
        >
          {/* 404 Text */}
          <h1 className="absolute top-0 text-[80px] font-medium text-black ">
            404
          </h1>

          {/* Lost Message */}
          <h3 className="absolute sm:bottom-4 -bottom-8 text-[32px] text-[#777] font-medium text-center">
            Looks like you're lost
          </h3>
        </div>
      </div>

    </section>
  )
}

export default NotFound
