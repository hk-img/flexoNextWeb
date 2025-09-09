import React from 'react'

const CoworkingSpaces = () => {
  return (
    <>
        <div className='max-w-6xl xl:px-[6px] lg:px-10 md:px-6 px-4 mx-auto'>
          <div>
            <div>
              <h2 className="md:text-[32px] text-xl font-medium text-center text-[#333]">Explore India's Premier Network of <span className='text-[#f76900]'>Coworking Spaces</span></h2>
            </div>
            <div className='mt-10'>
              <div className='flex items-center gap-2'> 
                <div className='w-1/3'>
                  <div className='relative'>
                    <div className='before:content-[""] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#0000002b] rounded-sm overflow-hidden'>
                      <img src="/images/mumbai.webp" alt="mumbai coworking" className='h-[405px]' loading="lazy" />
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

export default CoworkingSpaces
