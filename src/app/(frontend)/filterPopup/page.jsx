"use client";
import Svg from "@/components/svg";

const filterPopup = () => {
  return (
    <>
      <section className="w-full relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true"></div>
          <div className="fixed inset-0 flex items-center justify-center px-4">
            <div className="w-full h-full max-w-[546px] flex items-center justify-center">
              <div className="scrollDropdown block p-6 bg-white h-[90%] overflow-y-auto text-black shadow-[0px_11px_15px_-7px_rgba(0,0,0,0.2),0px_24px_38px_3px_rgba(0,0,0,0.14),0px_9px_46px_8px_rgba(0,0,0,0.12)] rounded-sm overflow-auto outline-0 w-full max-h-full">
                <div className="relative">
                  <div className="flex justify-between items-center -mx-[15px]">
                    <p className="w-1/6 md:w-1/12 px-4 text-sm">Filters</p>
                    <div className="flex items-center gap-x-12">
                      <div className="applyBtn w-2/6 md:w-1/4 px-4 text-center">
                        <button className="bg-[#f76900] py-[10px] px-7 text-white font-normal inline-block text-base rounded-sm">Apply</button>
                      </div>
                      <div className="clearBtn w-2/6 md:w-1/4 px-4 text-center">
                        <button className="bg-[#f76900] py-[10px] px-7 text-white font-normal inline-block text-base rounded-sm">Clear</button>
                      </div>
                    </div>
                    <div className="w-1/6 md:w-1/6 text-right cursor-pointer px-4 flex justify-end">
                      <Svg name="close" className="text-[#343a40] size-[20px] me-1" />
                    </div>
                  </div>
                  <div className="border-b border-[#0000001a] my-4"></div>
                  <div className="relative">
                    <div className=""><p className="">Price</p>
                      <div className="flex items-center justify-between gap-2">
                        <div class="text-base font-extralight text-[#777777]">500</div>
                        <div class="text-base font-extralight text-[#777777]">5000</div>
                      </div>
                      <div class="flex items-center w-full">
                        <div class="w-4 h-4 bg-[#f76900] rounded-full"></div>
                        <div class="flex-1 h-1 bg-[#f76900]"></div>
                        <div class="w-4 h-4 bg-[#f76900] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-[#0000001a] my-4"></div>
                  <div className="relative">
                    <div className="">
                      <p className="">Distance</p>
                      <div className="flex items-center justify-between gap-2">
                        <div class="text-base font-extralight text-[#777777]">0</div>
                      </div>
                      <div class="flex items-center w-full">
                        <div class="w-4 h-4 bg-[#f76900] rounded-full"></div>
                        <div class="flex-1 h-1 bg-[#d8e0f3]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-[#0000001a] my-4"></div>
                  <div className="relative">
                    <div className="text-lg text-[#141414] font-medium !leading-7 mb-4">Sort By:</div>
                    <div class="flex flex-wrap items-center gap-4">
                      <label class="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="sort"
                          value="rating"
                          class="peer hidden"
                        />
                        <span
                          class="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-[#f76900]"
                        >
                          <span class="w-2 h-2 bg-[#f76900] rounded-full scale-0 peer-checked:scale-100 transition"></span>
                        </span>
                        <span class="text-sm text-gray-700 text-extralight">Rating High to Low</span>
                      </label>

                      <label class="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="sort"
                          value="high_to_low"
                          class="peer hidden"
                        />
                        <span
                          class="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-[#f76900]"
                        >
                          <span class="w-2 h-2 bg-blue-600 rounded-full scale-0 peer-checked:scale-100 transition"></span>
                        </span>
                        <span class="text-sm text-gray-700 text-extralight">Price High to Low</span>
                      </label>

                      <label class="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="sort"
                          value="low_to_high"
                          checked
                          class="peer hidden"
                        />
                        <span
                          class="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-[#f76900]"
                        >
                          <span class="w-2 h-2 bg-blue-600 rounded-full scale-0 peer-checked:scale-100 transition"></span>
                        </span>
                        <span class="text-sm text-gray-700 text-extralight">Price Low to High</span>
                      </label>
                    </div>
                  </div>
                  <div className="border-b border-[#0000001a] my-4"></div>
                  <div className="relative">
                    <div className="text-base font-normal mt-0.5 mb-4">Amenities</div>
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="accent-[#f76900] me-2 h-4 w-4"/>
                        <span class="text-[#212121] text-[13px] font-normal  !leading-6 ">24x7 Access</span>
                      </label>
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="accent-[#f76900] me-2 h-4 w-4"/>
                        <span class="text-[#212121] text-[13px] font-normal  !leading-6 ">24x7 Access</span>
                      </label>
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="accent-[#f76900] me-2 h-4 w-4"/>
                        <span class="text-[#212121] text-[13px] font-normal  !leading-6 ">24x7 Access</span>
                      </label>
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="accent-[#f76900] me-2 h-4 w-4"/>
                        <span class="text-[#212121] text-[13px] font-normal  !leading-6 ">24x7 Access</span>
                      </label>
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="accent-[#f76900] me-2 h-4 w-4"/>
                        <span class="text-[#212121] text-[13px] font-normal  !leading-6 ">24x7 Access</span>
                      </label>
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="accent-[#f76900] me-2 h-4 w-4"/>
                        <span class="text-[#212121] text-[13px] font-normal  !leading-6 ">24x7 Access</span>
                      </label>
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="accent-[#f76900] me-2 h-4 w-4"/>
                        <span class="text-[#212121] text-[13px] font-normal  !leading-6 ">24x7 Access</span>
                      </label>
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="accent-[#f76900] me-2 h-4 w-4"/>
                        <span class="text-[#212121] text-[13px] font-normal  !leading-6 ">24x7 Access</span>
                      </label>
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="accent-[#f76900] me-2 h-4 w-4"/>
                        <span class="text-[#212121] text-[13px] font-normal  !leading-6 ">24x7 Access</span>
                      </label>
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="accent-[#f76900] me-2 h-4 w-4"/>
                        <span class="text-[#212121] text-[13px] font-normal  !leading-6 ">24x7 Access</span>
                      </label>
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="accent-[#f76900] me-2 h-4 w-4"/>
                        <span class="text-[#212121] text-[13px] font-normal  !leading-6 ">24x7 Access</span>
                      </label>
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="accent-[#f76900] me-2 h-4 w-4"/>
                        <span class="text-[#212121] text-[13px] font-normal  !leading-6 ">24x7 Access</span>
                      </label>
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="accent-[#f76900] me-2 h-4 w-4"/>
                        <span class="text-[#212121] text-[13px] font-normal  !leading-6 ">24x7 Access</span>
                      </label>
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="accent-[#f76900] me-2 h-4 w-4"/>
                        <span class="text-[#212121] text-[13px] font-normal  !leading-6 ">24x7 Access</span>
                      </label>
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="accent-[#f76900] me-2 h-4 w-4"/>
                        <span class="text-[#212121] text-[13px] font-normal  !leading-6 ">24x7 Access</span>
                      </label>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>  
      </section>
    </>
  )
}

export default filterPopup
