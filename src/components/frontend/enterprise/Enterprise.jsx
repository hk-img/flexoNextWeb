import Svg from '@/components/svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Enterprise = () => {
  return (
    <>
      <section className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px] ">
        <div className='relative'>
          <div className='w-full md:h-[452px]'>
            <Image width="1356" height="452" className="w-full h-full" src="/images/enterprise_banner.webp" alt="" />
          </div>
          <div className='absolute left-[12%] bottom-[10%]'>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScCNsY3akGSEpVwWDb-KyhlZ0dYdlvbs1IxiHHXlOZNvPrVJQ/viewform" target="_blank" className='inline-block md:text-xl text-base  cursor-pointer bg-[#f76900] text-white p-[10px] font-medium text-center gap-2 uppercase md:min-w-[285px] px-7 rounded-sm'>ENQUIRE NOW</Link>
          </div>
        </div>
        <div className='max-w-[90%]  mx-auto md:px-[30px] py-5'>
          <div>
            <div>
              <h2 className='md:text-[30px] text-xl font-bold text-center leading-[1.6]'>Adapt to the New Normal</h2>
              
            </div> 
            <div className='max-w-[816.91px] mx-auto mt-[35px]'>
              <p className='md:text-[17px] text-base text-[#777]'>Make informed decisions on your workplace strategy with Flexo. We help you with more than just options because your business deserves to save more and grow more. We provide tailor-made workplace solutions that match your exact needs.</p>
            </div>

          </div>
          <div className='mt-[30px] space-y-5'>
            <div className="flex md:flex-row flex-col md:items-center items-start gap-4">
              <div className=''>
                <Image width="680" height="453" src="/images/enterprise-1.webp" alt="" />
              </div>
              <div>
                <div>
                  <h3 className='text-[17px] font-bold'>Our Office Space Experts Help you with</h3>
                </div>
                <div className='mt-5'>
                  <ul>
                    <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                         Customized spaces for small and large teams
                        </span>
                    </li>
                   <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                           Distributed workspaces for the new normal
                        </span>
                    </li>
                    <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                         Hub and spoke workplace strategy
                        </span>
                    </li>

                  <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                          Branded and bespoke workspaces
                        </span>
                    </li>
                   <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                          Well-equipped and managed spaces
                        </span>
                    </li>
                   <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                           Plug-and-play setups
                        </span>
                    </li>
                    <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                         Touchdown offices
                        </span>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:items-center items-start max-md:gap-4 justify-between">
              <div className='order-2 md:order-1 flex-1 '>
                <div>
                  <h3 className='text-[17px] font-bold'>Why go with FLEXO™?</h3>
                </div>
                <div className='mt-5'>
                  <ul className='md:max-w-[85%] w-full'>
                     <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                          Free, fast and easy
                        </span>
                    </li>
                     <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                         Wide range of office spaces to choose from
                        </span>
                    </li>
                    <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                          One stop shop for customized workspace requirements
                        </span>
                    </li>

                    <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                         Specialist in flexible office spaces
                        </span>
                    </li>
                   <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                          Unbiased expert advice
                        </span>
                    </li>
                    <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                          Give back to society and the environment. Learn more about Flexo’s{" "}
                          <a href="https://www.flexospaces.com/joy-of-giving" className='text-[#0000ff]'>
                            Joy Of Giving initiative
                          </a>.
                        </span>
                    </li>

                  </ul>
                </div>
              </div>
              <div className='order-1 md:order-2 flex-1'>
                <Image width="680" height="453" src="/images/enterprise-2.webp" alt="" />
              </div>
            </div>
             <div className="flex md:flex-row flex-col md:items-center items-start gap-4">
               <div className=''>
                <Image width="680" height="453" src="/images/enterprise-3.webp" alt="" />
              </div>
              <div>
                <div>
                  <h3 className='text-[17px] font-bold'>Benefits of Distributed Workspaces</h3>
                </div>
                <div className='mt-5'>
                  <ul>
                     <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                          Lower capex
                        </span>
                    </li>
                     <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                         Flexible terms
                        </span>
                    </li>
                    <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                          Reduced commute for employees
                        </span>
                    </li>

                    <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                         Greater employee morale and retention
                        </span>
                    </li>
                   <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                           De-risk corporate real estate strategy
                        </span>
                    </li>
                    <li className=' leading-[30px] items-start text-[#777]'>
                        <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                        <span className='ps-1'>
                         Easy-to-scale setups
                        </span>
                    </li>
                    <li className=' leading-[30px] items-start text-[#777]'>
                      <Svg name="smallDot" className="size-[15px] text-[#6c757d] inline"/>
                      <span className='ps-1'>
                       Business continuity planning
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Enterprise
