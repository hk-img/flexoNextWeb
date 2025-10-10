import Svg from '@/components/svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Enterprise = () => {
  return (
    <>
      <section className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px] ">
        <div className='relative'>
          <div className='w-full h-[452px]'>
            <Image width="1356" height="452" className="w-full h-full" src="/images/enterprise_banner.webp" alt="" />
          </div>
          <div className='absolute left-[12%] bottom-[10%]'>
            <Link href="" className='inline-block text-xl cursor-pointer bg-[#f76900] text-white p-[10px] font-medium text-center gap-2 uppercase min-w-[285px] rounded-sm'>ENQUIRE NOW</Link>
          </div>
        </div>
        <div className='max-w-[90%]  mx-auto px-[30px] py-5'>
          <div>
            <div>
              <h2 className='text-[30px] font-bold text-center leading-[1.6]'>Adapt to the New Normal</h2>
              
            </div> 
            <div className='max-w-[816.91px] mx-auto mt-[35px]'>
              <p className='text-[17px] text-[#777]'>Make informed decisions on your workplace strategy with Flexo. We help you with more than just options because your business deserves to save more and grow more. We provide tailor-made workplace solutions that match your exact needs.</p>
            </div>

          </div>
          <div className='mt-[30px] space-y-5'>
            <div className="flex items-center gap-4">
              <div className=''>
                <Image width="680" height="453" src="/images/enterprise-1.webp" alt="" />
              </div>
              <div>
                <div>
                  <h3 className='text-[17px] font-bold'>Our Office Space Experts Help you with</h3>
                </div>
                <div className='mt-5'>
                  <ul>
                    <li className='flex leading-[30px] items-center text-[#777] gap-1'>
                      <span>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d]"/>
                      </span>
                      Customized spaces for small and large teams
                    </li>
                    <li className='flex leading-[30px] items-center text-[#777] gap-1'>
                      <span>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d]"/>
                      </span>
                      Distributed workspaces for the new normal
                    </li>
                    <li className='flex leading-[30px] items-center text-[#777] gap-1'>
                      <span>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d]"/>
                      </span>
                      Hub and spoke workplace strategy
                    </li>

                    <li className='flex leading-[30px] items-center text-[#777] gap-1'>
                      <span>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d]"/>
                      </span>
                      Branded and bespoke workspaces
                    </li>
                    <li className='flex leading-[30px] items-center text-[#777] gap-1'>
                      <span>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d]"/>
                      </span>
                      Well-equipped and managed spaces
                    </li>
                    <li className='flex leading-[30px] items-center text-[#777] gap-1'>
                      <span>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d]"/>
                      </span>
                      Plug-and-play setups
                    </li>
                    <li className='flex leading-[30px] items-center text-[#777] gap-1'>
                      <span>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d]"/>
                      </span>
                       Touchdown offices
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-between">
              <div>
                <div>
                  <h3 className='text-[17px] font-bold'>Why go with FLEXO™?</h3>
                </div>
                <div className='mt-5'>
                  <ul>
                    <li className='flex leading-[30px] items-center text-[#777] gap-1'>
                      <span>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d]"/>
                      </span>
                      Free, fast and easy
                    </li>
                    <li className='flex leading-[30px] items-center text-[#777] gap-1'>
                      <span>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d]"/>
                      </span>
                      Wide range of office spaces to choose from
                    </li>
                    <li className='flex leading-[30px] items-center text-[#777] gap-1'>
                      <span>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d]"/>
                      </span>
                       One stop shop for customized workspace requirements
                    </li>

                    <li className='flex leading-[30px] items-center text-[#777] gap-1'>
                      <span>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d]"/>
                      </span>
                     Specialist in flexible office spaces
                    </li>
                    <li className=' leading-[30px] items-center text-[#777] gap-1'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                      Unbiased expert advice
                    </li>
                    <li className='inline-block leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                      Give back to society and the environment. Learn more about Flexo’s  <a href="" className='text-[#0000ff]'>Joy Of Giving initiative here.</a>
                    </li>

                  </ul>
                </div>
              </div>
               <div className=''>
                <Image width="680" height="453" src="/images/enterprise-2.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Enterprise
