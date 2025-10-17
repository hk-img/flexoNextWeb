import React from 'react'
import Svg from '@/components/svg'
import Image from 'next/image'
import Link from 'next/link'

const JoyOfGiving = () => {
  return (
    <>
      <section className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px] ">
        <div className='relative'>
          <div className='w-full md:h-[452px]'>
            <Image width="1356" height="452" className="w-full h-full" src="/images/joy_of_giving_banner_pc.webp" alt="" />
          </div>
        </div>
        <div className='max-w-[90%]  mx-auto md:px-[34px] py-5'>
          <div>
            <div>
              <h2 className=' text-xl font-bold text-center leading-[1.6]'>Joy of Giving</h2>
              
            </div> 
            <div className=' text-center mt-[15px] pb-[20px]'>
              <p className=' text-[#777]'>Real happiness lies in making others happy. At Flexo, we strive to spread joy by giving back to society and to Mother Nature.</p>
              <p className=' text-[#777]'> As part of our Joy Of Giving initiative, we plant a fruit tree in your name for every long-term desk that you book through us.</p>
            </div>

          </div>
          <div className='mt-[30px] space-y-5'>
            <div className="flex md:flex-row flex-col md:items-center items-start max-md:gap-5.5">
              <div className=''>
                <Image width="700" height="466" src="/images/joy_of_giving_1.webp" alt="" />
              </div>
              <div className='flex-1 mx-[26px]'>
                <div>
                  <h3 className='font-bold'>Helping Farmers and Rural Communities</h3>
                </div>
                <div className='mt-5'>
                 <p className='text-[#777]'>The trees that are planted bear fruit for about 20-25 years, benefiting farmers and rural communities for decades to come. All the trees we plant are geo-tagged, visible on google maps and can be tracked online.</p>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:items-center items-start max-md:gap-4 justify-between">
              <div className='order-2 md:order-1 flex-1  mx-[26px] '>
                <div>
                  <h3 className=' font-bold'>Towards Sustainability</h3>
                </div>
                <div className='mt-5'>
                  <p className='text-base text-[#777]'>While we can never give back what we take from Nature, we strive to make our planet more sustainable by contributing in a small but meaningful way. Planting trees helps prevent soil erosion, increases land fertility and mitigates global warming.</p>
                </div>
              </div>
              <div className='order-1 md:order-2'>
                <Image width="700" height="467" src="/images/joy_of_giving_2.webp" alt="" />
              </div>
            </div>
             <div className="flex md:flex-row flex-col md:items-center items-start max-md:gap-4">
               <div >
                <Image width="700" height="467" src="/images/joy_of_giving_3.webp" alt="" />
              </div>
              <div className='flex-1 mx-[26px]'>
                <div>
                  <h3 className=' font-bold'>Environment as a Stakeholder</h3>
                </div>
                <div className='mt-5'>
                 <p className=' text-base text-[#777]'>This is a small action towards helping create a world that recognizes the environment as a stakeholder, a world that is filled with generosity and a world that gives back as it evolves. We wish to do more with your support. Let's work towards creating a better place for all of us to live in because there's no greater joy than the one there is in giving.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default JoyOfGiving
