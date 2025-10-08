import Svg from '@/components/svg'
import React from 'react'

const ScheduleVisitPopup = ({ setIsOpen }) => {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center animate-fadeIn py-4">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative w-full lg:max-w-[55vw] mx-[12px] rounded-[11px]  bg-white overflow-y-auto h-full md:h-auto [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]  animate-scaleIn">
        <div className="p-6 flex items-center justify-between">
          <h2 className="2xl:text-xl text-lg font-medium text-[#141414]">Schedule Visit</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-black cursor-pointer"
          >
            <Svg name="close" className="size-3" />
          </button>
        </div>
        <div>
          <div className='bg-[#F3F3F3] py-[5px]'>
            <p className='2xl:text-base text-sm text-[#777] text-center'>Schedule a personalised tour with one of our experts</p>
          </div>
          <div>
            <h2 className='text-[#141414]  font-light text-[26px] text-center py-3'>When would you like to visit?</h2>
          </div>
          <div className="p-5 space-y-5 ">
            <div className="relative ">
              <input
              type="date"
                id="preferedDate"
                className="block h-[58px] px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none hover:border-black focus:outline-none focus:ring-0 focus:border-[#3f51b5] peer" 
                placeholder=" "
              />
              <label
                htmlFor="preferedDate"
                className="absolute text-sm font-semibold text-[#00000099] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#3f51b5]   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >Prefered View Date*

              </label>
            </div>
            <div class="relative">
              <select
                id="preferredTime"
                required
                class="peer block h-[58px] w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 hover:border-black focus:border-[#3f51b5] focus:outline-none focus:ring-0 invalid:text-gray-400"
              >
                <option value="" disabled selected hidden></option>
                <option>10:00 AM</option>
                <option>10:00 AM</option>
                <option>10:00 AM</option>
              </select>

              <label
                for="preferredTime"
                class="absolute text-sm font-semibold text-[#00000099] bg-white px-2 left-2 top-1/2 -translate-y-1/2 duration-300 transform scale-100 origin-[0]
                peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-[#3f51b5]
                peer-valid:top-2 peer-valid:scale-75 peer-valid:-translate-y-4 "
              >
                Preferred View Time *
              </label>

              <Svg name="arrowDropDown" className="absolute text-[#0000008a] size-4 right-2 top-1/2 -translate-y-1/2" />
            </div>
            <div>
              <button className='cursor-pointer w-full bg-[#f76900] 2xl:text-[15px] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:py-[15px] py-[10px] rounded-[15px] font-semibold leading-[1.5] duration-500 transition text-center gap-2 uppercase tracking-[1px]'>Continue</button>
            </div>
            <div className='border-t pt-5 border-[#0000001a]'>
              <p className='text-[#777] text-[11px] text-center'>After you submit a workspace enquiry to us, we may share your details with workspace providers, who may contact you to follow up on your enquiry." Please read our <span className='text-[#f76900] cursor-pointer'>Privacy Policy</span> for details of how we process the information.</p>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default ScheduleVisitPopup
