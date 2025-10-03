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
 
  const {data:allAmenities,isLoading} = useQuery({
    queryKey: ['allAmenities'],
    queryFn: async() => {
      const res = await getApi('user/getAllAmenities');
      return res.data;
    }
  })
  return (
    <>
      <section className="w-full relative ">
       
        <div className="w-full fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setIsFilterOpen(false)}
            />
          <div className="w-full h-full lg:max-w-[546px] flex items-center justify-center">
            <div className="scrollDropdown block p-6 bg-white h-[90%] lg:overflow-y-auto text-black shadow-[0px_11px_15px_-7px_rgba(0,0,0,0.2),0px_24px_38px_3px_rgba(0,0,0,0.14),0px_9px_46px_8px_rgba(0,0,0,0.12)] rounded-sm overflow-auto outline-0 w-full max-h-full z-10">
              {
                isLoading ? (
                  <div className="w-full h-full flex items-center justify-center">
                    Loading...
                  </div>
                ) : (
                  <div className="relative">
                    <div className="flex justify-between items-center -mx-[15px]">
                      <p className="w-1/6 md:w-1/12 px-4 text-sm">Filters</p>
                      <div className="flex items-center lg:gap-x-12 gap-x-6">
                        <div className="applyBtn w-2/6 md:w-1/4 px-4 text-center">
                          <button
                            className="cursor-pointer bg-[#f76900] lg:py-[10px] lg:px-7 py-2 px-4 text-white font-normal inline-block text-base rounded-sm"
                            onClick={handleApply}
                          >
                            Apply
                          </button>
                        </div>
                        <div className="clearBtn w-2/6 md:w-1/4 px-4 text-center">
                          <button
                            className="cursor-pointer bg-[#f76900] lg:py-[10px] lg:px-7 py-2 px-4 text-white font-normal inline-block text-base rounded-sm"
                            onClick={handleClear}
                          >
                            Clear
                          </button>
                        </div>
                      </div>
                      <div
                        onClick={() => setIsFilterOpen(false)}
                        className="w-1/6 md:w-1/6 text-right cursor-pointer lg:px-4 flex justify-end"
                      >
                        <Svg
                          name="close"
                          className="text-[#343a40] size-[20px] me-1"
                        />
                      </div>
                    </div>
                    <div className="border-b border-[#0000001a] my-4"></div>
                    <p className="text-base font-extralight">Price</p>
                    <DualRangeSlider
                      min={50000}
                      max={50000000}
                      step={500}
                      values={filterData.priceRange}
                      onChange={(range) =>
                        setFilterData({
                          ...filterData,
                          priceRange: range,
                        })
                      }
                    />
                    <p className="text-base font-extralight mt-5">Distance</p>
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
                      <div className="flex flex-wrap gap-y-3">
                        {allAmenities?.map((item, index) => (
                          <label
                            key={index}
                            className="w-1/2 sm:w-1/2 lg:w-1/3 flex items-center cursor-pointer"
                          >
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
                            <span className="lg:w-4/5 text-[#212121] text-[13px] font-normal !leading-6">
                              {item?.amenities}
                            </span>
                          </label>
                        ))}
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