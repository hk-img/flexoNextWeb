import Svg from '@/components/svg';
import Link from 'next/link';
import React from 'react'

export const BottomBar = () => {
  return (
    <div className='fixed bottom-0 bg-[#f76900] w-full md:hidden block z-10'>
        <div className='flex items-center justify-between p-4'>
            <div >
                <Link href="#" className='flex flex-col items-center'>
                    <Svg name="fileProtector" className="size-5 text-white"/>
                    <span className='uppercase text-white text-[11px]/normal font-medium '>Quotes</span>
                </Link>
            </div>
            <div>
                <Link href="#" className='flex flex-col items-center'>
                    <Svg name="whatsapp" className="size-5 text-white"/>
                    <span className='uppercase text-white text-[11px]/normal font-medium '>Whatsapp</span>
                </Link>
            </div>
            <div>
                <Link href="#" className='flex flex-col items-center'>
                    <Svg name="chat" className="size-5 text-white"/>
                    <span className='uppercase text-white text-[11px]/normal font-medium '>Chat</span>
                </Link>
            </div>
            <div>
                <Link href="#" className='flex flex-col items-center'>
                    <Svg name="phoneCall" className="size-5 text-white"/>
                    <span className='uppercase text-white text-[11px]/normal font-medium '>Call</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default BottomBar;
