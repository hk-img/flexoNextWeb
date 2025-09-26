"use client";
import Svg from "@/components/svg";
import { getApi } from "@/services/ApiService";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import DualRangeSlider from "./DualRangeSlider";
import SingleRangeSlider from "./SingleRangeSlider";
 
const FilterPopup = ({
  isFilterOpen,
  setIsFilterOpen,
  filterData,
  setFilterData,
  handleApply,
  handleClear,
}) => {
  console.log({filterData},"Rtyhrthyrtyr")
    const popupRef = useRef(null)
  useEffect(() => {
    if (!isFilterOpen) return;
 
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsFilterOpen(false);
      }
    };
 
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFilterOpen, setIsFilterOpen]);
 
  const {data:allAmenities,isLoading} = useQuery({
    queryKey: ['allAmenities'],
    queryFn: async() => {
      const res = await getApi('user/getAllAmenities');
      return res.data;
    }
  })
  console.log({allAmenities});
  return (
    <>
      <section className="w-full relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true"></div>
        <div className="fixed inset-0 flex items-center justify-center px-4">
          <div className="w-full h-full max-w-[546px] flex items-center justify-center">
            <div ref={popupRef} className="scrollDropdown block p-6 bg-white h-[90%] overflow-y-auto text-black shadow-[0px_11px_15px_-7px_rgba(0,0,0,0.2),0px_24px_38px_3px_rgba(0,0,0,0.14),0px_9px_46px_8px_rgba(0,0,0,0.12)] rounded-sm overflow-auto outline-0 w-full max-h-full">
              {
                isLoading ? (
                  <div className="w-full h-full flex items-center justify-center">
                    Loading...
                  </div>
                ) : (
                  <div className="relative">
                    <div className="flex justify-between items-center -mx-[15px]">
                      <p className="w-1/6 md:w-1/12 px-4 text-sm">Filters</p>
                      <div className="flex items-center gap-x-12">
                        <div className="applyBtn w-2/6 md:w-1/4 px-4 text-center">
                          <button
                            className="cursor-pointer bg-[#f76900] py-[10px] px-7 text-white font-normal inline-block text-base rounded-sm"
                            onClick={handleApply}
                          >
                            Apply
                          </button>
                        </div>
                        <div className="clearBtn w-2/6 md:w-1/4 px-4 text-center">
                          <button
                            className="cursor-pointer bg-[#f76900] py-[10px] px-7 text-white font-normal inline-block text-base rounded-sm"
                            onClick={handleClear}
                          >
                            Clear
                          </button>
                        </div>
                      </div>
                      <div
                        onClick={() => setIsFilterOpen(false)}
                        className="w-1/6 md:w-1/6 text-right cursor-pointer px-4 flex justify-end"
                      >
                        <Svg
                          name="close"
                          className="text-[#343a40] size-[20px] me-1"
                        />
                      </div>
                    </div>
                    <div className="border-b border-[#0000001a] my-4"></div>
                    <p className="text-base font-extralight mb-3">Price</p>
                    <DualRangeSlider
                      min={50000}
                      max={50000000}
                      step={100}
                      values={filterData.priceRange}
                      onChange={(range) =>
                        setFilterData({
                          ...filterData,
                          priceRange: range,
                        })
                      }
                    />
                    <p className="text-base font-extralight mb-3">Distance</p>
                    <SingleRangeSlider
                      min={0}
                      max={50}
                      step={1}
                      value={filterData.distance}
                      onChange={(val) =>
                        setFilterData({
                          ...filterData,
                          distance: val, // directly number
                        })
                      }
                    />
                    {/* <div className="relative">
                      <div className="">
                        <p className="">Price</p>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="text-base font-extralight text-[#777777]">
                            500
                          </div>
                          <div className="text-base font-extralight text-[#777777]">
                            5000
                          </div>
                        </div>
                        <div className="relative w-full h-2">
                          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 -translate-y-1/2 rounded"></div>
 
                          <div className="absolute top-1/2 left-0 w-full h-1 bg-orange-500 -translate-y-1/2 rounded"></div>
 
                          <div className="absolute top-1/2 left-0 w-8 h-8 -translate-y-1/2 bg-orange-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
 
                          <div className="absolute top-1/2 right-0 w-8 h-8 -translate-y-1/2 bg-orange-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-[#0000001a] mt-8 mb-6"></div>
                    <p className="text-base font-extralight mb-3">Distance</p>
                    <div className="relative w-full h-2">
                      <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 -translate-y-1/2 rounded"></div>
 
                      <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 -translate-y-1/2 rounded"></div>
 
                      <div className="absolute top-1/2 left-0 w-8 h-8 -translate-y-1/2 bg-orange-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
 
                    </div> */}
                    <div className="border-b border-[#0000001a] mt-8 mb-6"></div>
                    <div className="relative">
                      <div className="text-lg text-[#141414] font-medium !leading-7 mb-4">
                        Sort By:
                      </div>
                      <div className="flex flex-wrap items-center gap-4">
                        {/* Review */}
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="sort"
                            value="review"
                            className="accent-[#f76900] size-5"
                            checked={filterData.sortBy === "review"}
                            onChange={(e) =>
                              setFilterData((prev) => ({
                                ...prev,
                                sortBy: e.target.value,
                              }))
                            }
                          />
                          <span className="text-sm text-gray-700 font-light">
                            Rating High to Low
                          </span>
                        </label>
 
                        {/* Price High to Low */}
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="sort"
                            value="high_to_low"
                            className="accent-[#f76900] size-5"
                            checked={filterData.sortBy === "high_to_low"}
                            onChange={(e) =>
                              setFilterData((prev) => ({
                                ...prev,
                                sortBy: e.target.value,
                              }))
                            }
                          />
                          <span className="text-sm text-gray-700 font-light">
                            Price High to Low
                          </span>
                        </label>
 
                        {/* Price Low to High */}
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="sort"
                            value="low_to_high"
                            className="accent-[#f76900] size-5"
                            checked={filterData.sortBy === "low_to_high"}
                            onChange={(e) =>
                              setFilterData((prev) => ({
                                ...prev,
                                sortBy: e.target.value,
                              }))
                            }
                          />
                          <span className="text-sm text-gray-700 font-light">
                            Price Low to High
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="border-b border-[#0000001a] my-4"></div>
                    <div className="relative">
                      <div className="text-base font-normal mt-0.5 mb-4">
                        Amenities
                      </div>
                      <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
                        {
                          allAmenities?.map((item, index) => (
                            <label key={index} className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="checkbox"
                                className="accent-[#f76900] me-2 h-4 w-4"
                                name="amenities"
                                value={item?.id}
                                checked={filterData.amenities?.includes(item?.id)}
                                onChange={(e) =>
                                  setFilterData((prev) => ({
                                    ...prev,
                                    amenities: e.target.checked
                                      ? [...prev.amenities, item?.id]
                                      : prev.amenities.filter((amenity) => amenity !== item?.id),
                                  }))
                                }
                              />
                              <span className="text-[#212121] text-[13px] font-normal  !leading-6 ">
                                {item?.amenities}
                              </span>
                            </label>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
 
export default FilterPopup;