import React from 'react'

const MyBooking = () => {
  return (
    <>
      <div className='bg-[#f9f9f9]'>
        <div className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px]">
          <div className="container mx-auto md:px-0 px-[15px] py-10">
            <div className='flex'>
              <div className="w-2/5">
                 <div class="flex border-b border-gray-300">
                    <input type="radio" name="tabs" id="tab1" class="hidden peer/tab1" checked/>
                    <label for="tab1" class="flex-1 text-center py-3 cursor-pointer text-gray-600 font-medium border-b-2 border-transparent peer-checked/tab1:border-[#3f51b5] peer-checked/tab1:text-[#3f51b5] transition">
                      Tab One
                    </label>

                    <input type="radio" name="tabs" id="tab2" class="hidden peer/tab2"/>
                    <label for="tab2" class="flex-1 text-center py-3 cursor-pointer text-gray-600 font-medium border-b-2 border-transparent peer-checked/tab2:border-[#3f51b5] peer-checked/tab2:text-[#3f51b5] transition">
                      Tab Two
                    </label>

                    <input type="radio" name="tabs" id="tab3" class="hidden peer/tab3"/>
                    <label for="tab3" class="flex-1 text-center py-3 cursor-pointer text-gray-600 font-medium border-b-2 border-transparent peer-checked/tab3:border-[#3f51b5] peer-checked/tab3:text-[#3f51b5] transition">
                      Tab Three
                    </label>
                  </div>
              </div>
            </div>
            <div>
              <div class="mt-4">
                <div class="hidden peer-checked/tab1:block">
                  <p class="text-gray-700">This is content for Tab One.</p>
                </div>
                <div class="hidden peer-checked/tab2:block">
                  <p class="text-gray-700">This is content for Tab Two.</p>
                </div>
                <div class="hidden peer-checked/tab3:block">
                  <p class="text-gray-700">This is content for Tab Three.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyBooking
