import React from 'react'

const Header = () => {
  return (
    <header className=''>
      <div className='max-w-6xl mx-auto py-[23px] '>
        <div className='flex justify-between items-center'>
          <div>
            <img src="/images/logo.webp" alt="logo" title='logo' className='w-[130px]' width={137} height={37} />
          </div>
          <div className='flex items-center  gap-3'>
            <div>
              <a href="#" className='bg-[#f76900] rounded-[15px] text-white py-[10px] px-6'>List Your Space</a>
            </div>
            <div>
              <a href="#" className='border-[2px] border-[#ffe9d8] bg-[#f7690012] text-[#f76900] rounded-[15px]  py-[10px] px-6'>Sign in</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
