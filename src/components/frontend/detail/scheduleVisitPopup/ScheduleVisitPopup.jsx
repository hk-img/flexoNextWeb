import Svg from '@/components/svg'
import React from 'react'

const ScheduleVisitPopup = ({ setIsOpen }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative w-full lg:max-w-[55vw] mx-[12px] rounded-[11px] bg-white p-6 overflow-y-auto h-full md:h-auto [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]  animate-scaleIn">
        <div className="pb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Schedule Visit</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-black cursor-pointer"
          >
            <Svg name="close" className="size-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ScheduleVisitPopup
