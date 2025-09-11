import React from 'react'
import Svg from '@/components/svg'
import Image from 'next/image'

const Header = () => {
  return (
    <nav className='fixed top-0 z-50 bg-white w-full'>
      <div className='max-w-6xl xl:px-[21px] lg:px-10 md:px-6 px-4 mx-auto py-[20px] '>
        <div className='flex justify-between items-center'>
          <Image src="/images/logo.webp" alt="logo" title='logo' className='lg:w-[130px] sm:w-[70px] w-[100px]' width={137} height={37} />
          <div className='lg:flex hidden items-center gap-3'>
            <button className='bg-[#f76900] border-[2px] border-[#f76900] rounded-[15px] text-white py-[7px] px-6'>List Your Space</button>
            <button className='flex items-center gap-1 border-[2px] border-[#ffe9d8] bg-[#f7690012] text-[#f76900] rounded-[15px]  py-[7px] px-6'>
              <div><Svg name="logIn" className="size-[18px]" /></div>
              <span>Sign in</span>
            </button>
          </div>
          <div className='flex lg:hidden items-center gap-3 '>
              <a href="#">
                <Svg name="call" className="size-[16px] text-black" />
              </a>
              <a href="#">
                <Svg name="homePlus" className="size-[18px] text-black" />
              </a>
              <a href="#">
                <Svg name="logOut" className="size-[22px] text-black" />
              </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
