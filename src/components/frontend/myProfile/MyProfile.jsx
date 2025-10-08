import Svg from '@/components/svg'
import Image from 'next/image'
import React from 'react'

const MyProfile = () => {
  return (
    <>
      <div className='relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px]'>
        <div className='container mx-auto md:px-0 px-[15px] py-10'>
          <div className='w-[55%] mx-auto'>
            <div>
              <h2 className='text-[22px] md:text-[26px] font-semibold leading-[1.6]'>Profile Management</h2>
              <div className='mt-5'>
                <div className=' flex items-center justify-center'>
                  <div className='relative'>
                    <Image width={125} height={125} className='w-[125px] h-[125px] rounded-full' src="/images/user_image_profile.webp" alt="" />
                    <div className='w-10 h-10 rounded-full bg-black  flex items-center justify-center absolute right-0 bottom-0'>
                    <Svg name="camera" className=" text-white size-4 " />
                  </div>
                  </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                  <div>
                    <label htmlFor="first-name" className='text-sm 2xl:text-base font-semibold mb-1'>First name <span className='text-[#dc3545]'>*</span> </label>
                    <input
                      type="first-name"
                      placeholder="Enter First Name"
                      className={`h-12 px-4 border-2 border-[#e0e0e0] hover:border-black placeholder:text-sm rounded-md w-full focus:outline-none focus:border-[#001740]`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyProfile
