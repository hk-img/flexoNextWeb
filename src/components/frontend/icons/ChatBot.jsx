import Svg from '@/components/svg'
import React from 'react'

const ChatBot = () => {
  return (
    <div className='fixed md:block hidden bottom-3 right-3 z-2'>
      <div className=' flex flex-col space-y-2'>
        <a href="#" target="_blank" className="relative group">
          <div className="bg-[#276ad6] text-white w-[45px] h-[45px] flex items-center justify-center rounded-full">
            <Svg name="call" className="size-4.5" />
          </div>
          <div className=" absolute top-1/2 -translate-y-1/2 right-[30px] bg-[#276ad6] text-white text-[16px]  px-2 py-1 rounded-sm flex items-center justify-center whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:right-[55px] transition-all duration-500"
          > +91 95133 92400
            <span className="absolute right-[-3px] w-[9px] h-[9px] bg-[#276ad6] rotate-45 z-[-1]"></span>
          </div>
        </a>

        <a href="https://api.whatsapp.com/send/?phone=919136153810&text=Hi&type=phone_number&app_absent=0" target='_blank'>
          <div className='bg-[#25d366] text-white w-[45px] h-[45px] flex items-center justify-center rounded-full'>
            <Svg name="whatsapp" className="size-6" />
          </div>
        </a>
        <a href="#" target='_blank'>
          <div className='bg-[#f76900] text-white w-[45px] h-[45px] flex items-center justify-center rounded-full'>
            <Svg name="chat" className="size-6" />
          </div>
        </a>
      </div>
    </div>
  )
}

export default ChatBot
