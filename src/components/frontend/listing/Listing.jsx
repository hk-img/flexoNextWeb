"use client";
import Image from "next/image";
import Svg from "@/components/svg";
import TrustedCompaniesCta from "./TrustedCompaniesCta";
import TestimonialCta from "./TestimonialCta";
import ProductCard from "../productCard/ProductCard";
import React, { useEffect, useMemo, useRef, useState } from "react";
import FilterPopup from "./filterPopup/FilterPopup";
import { postAPI } from "@/services/ApiService";
import { useQuery } from "@tanstack/react-query";
import Pagination from "../pagination/Pagination";
import ExplorePopup from "../explorePopup/ExplorePopup";
import { convertSlugToCapitalLetter, convertSlugToSmallLetter, getTypeOfSpaceByWorkSpace, slugGenerator } from "@/services/Comman";
import MapWithPrices from "./MapWithPrice";
const coworkingTypes = [
  "Private Office",
  "Managed Office",
  "Dedicated Desk",
  "Flexible Desk",
  "Virtual Office",
  "Day Pass",
]

const Listing = ({ spaceType, city, locationName, spaceCategoryData, locationData, nearBySpacesData }) => {
  console.log({ locationData, spaceCategoryData, nearBySpacesData })
  const [isOpen, setIsOpen] = useState(false);
  const spacesTypeRef = useRef(null);
  const locationRef = useRef(null);
  const [mapToggle, setMapToggle] = useState(true);
  const [toggleSpaceType, setToggleSpaceType] = useState(false);
  const [toggleSpace, setToggleSpace] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(spaceCategoryData?.[0]?.spaceType);
  console.log({ selectedRadio })
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  console.log({ selectedCheckboxes })
  const [toggleLocation, setToggleLocation] = useState(false);
  const [toggleLocationOptions, setToggleLocationOptions] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  console.log({ selectedLocation })
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterData, setFilterData] = useState({
    priceRange: { min: 50000, max: 50000000 },
    distance: 0,
    sortBy: "",
    amenities: [],
  });
  const [page, setPage] = useState(1);
  const [hoveredSpaceId, setHoveredSpaceId] = useState(null);
  console.log({ hoveredSpaceId })
  const perPage = 30;

  const handleRadioChange = (e) => {
    const { value } = e.target;
    if (value == "Coworking Space") {
      setSelectedCheckboxes(coworkingTypes);
    } else {
      setSelectedCheckboxes([value]);
    }
    setSelectedRadio(value);
  };

  const handleCheckbox = (type) => {
    if (selectedCheckboxes.includes(type)) {
      setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== type));
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, type]);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        event.target.closest(".toggle-space-type") ||
        event.target.closest(".dropdown-menu-space-type") ||
        event.target.closest(".toggle-location") ||
        event.target.closest(".dropdown-menu-location")
      ) {
        return;
      }
      if (
        spacesTypeRef.current &&
        !spacesTypeRef.current.contains(event.target)
      ) {
        setToggleSpace(false);
      }
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setToggleLocationOptions(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (spaceType === "coworking") {
      setSelectedRadio("Coworking Space");
      setSelectedCheckboxes(coworkingTypes);
      return;
    }
    const selectedSpaceType = spaceCategoryData?.find((item) => {
      const categorySpaceType = slugGenerator(item?.spaceType || "");
      if (categorySpaceType === spaceType) {
        return item
      }
    });
    console.log({ selectedSpaceType })
    setSelectedRadio(selectedSpaceType?.spaceType)
    if (selectedSpaceType?.spaceType === "Coworking Space") {
      setSelectedCheckboxes(coworkingTypes);
    } else {
      const smallSpaceType = convertSlugToSmallLetter(selectedSpaceType?.spaceType || "");
      setSelectedCheckboxes([smallSpaceType]);
    }
  }, [spaceCategoryData, spaceType])

  useEffect(() => {
    if (locationData?.length > 0 && locationName) {
      const smallLetterLocationName = convertSlugToSmallLetter(locationName || "");
      console.log({ smallLetterLocationName, locationData })
      const selectedLocation = locationData?.find((item) => {
        if (item?.location_name.toLowerCase() === smallLetterLocationName) {
          return item
        }
      })
      console.log({ selectedLocation })
      setQuery(selectedLocation?.label || "");
      setSelectedLocation(selectedLocation || null);
    }
  }, [locationData, locationName])

  const { data: allSpaces, refetch: refetchSpaces } = useQuery({
    queryKey: ["allSpaces", page, city, selectedCheckboxes, selectedLocation],
    queryFn: async () => {
      const type = getTypeOfSpaceByWorkSpace(spaceType || "");
      console.log({ type }, "Rftyhryryry")
      let payload = {
        city_name: selectedLocation?.city,
        spaceType: selectedCheckboxes,
        type: type,
        userId: 0,
        capacity: null,
        min_price: 0,
        max_price: 0,
        amenities: filterData?.amenities,
        location_name: selectedLocation?.location_name,
        city_lat: 0,
        city_long: 0,
        location_lat: 19.1121947,
        location_longi: 72.8792898,
        page_no: page
      }
      if (filterData.sortBy) {
        payload.sortBy = filterData?.sortBy;
      }
      if (filterData.distance > 0) {
        payload.distance = filterData?.distance;
      }
      const res = await postAPI("spaces/getSpacesByCity", payload);
      return res.data;
    },
    keepPreviousData: true,
  });
  const productData = useMemo(() => {
    return allSpaces?.data || []
  }, [allSpaces]);
  const faqData = useMemo(() => {
    return allSpaces?.faqs || []
  }, [allSpaces]);

  const handleApply = () => {
    refetchSpaces();
    setIsFilterOpen(false);
  };

  const handleClear = () => {
    setIsFilterOpen(false);
  };
  const total = allSpaces?.space_count || 0;
  const start = total > 0 ? (page - 1) * perPage + 1 : 0;
  const end = total > 0 ? Math.min(page * perPage, total) : 0;
  return (
    <>
      <section className="w-full relative lg:pt-16 bg-white">
        <div className="max-w-full xl:px-4 lg:px-4 md:px-3 px-4 mx-auto pt-4">
          <div className="group/mainBox w-full flex flex-col lg:flex-row gap-6 items-start">
            <div className="lg:w-2/3 w-full grow flex flex-col justify-center lg:mt-8 mt-16">
              <h1 className="text-xl flex flex-wrap font-bold text-[#141414] mb-4">
                {locationName ? `${convertSlugToCapitalLetter(spaceType || "")} in ${convertSlugToCapitalLetter(locationName || "")}, ${convertSlugToCapitalLetter(city || "")}` : spaceType == "coworking" ? `Coworking Space in ${convertSlugToCapitalLetter(city || "")}` : `${convertSlugToCapitalLetter(spaceType || "")} in ${convertSlugToCapitalLetter(city || "")}`}
              </h1>
              <div className="form-group filter-group">
                <div className="scrollMenus overflow-auto whitespace-nowrap pb-2 mb-4">
                  {
                    nearBySpacesData?.map((item, index) => (
                      <a
                        key={index}
                        className={`${item?.location_name?.split(" ")?.map(word => word.charAt(0).toLowerCase() + word.slice(1))?.join(" ") == locationName?.replace(/-/g, " ") ? "text-[#4343e8] border-[#7d9dd9] bg-[#e9e9ff]" : "text-[#9e9e9e] border-[#d4d4d4] bg-white"} inline-block text-center me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]`}
                        href={`/in/${spaceType}/${city}/${slugGenerator(item?.location_name || "")}`}
                        target="_blank"
                      >
                        {" "}
                        {item?.location_name}
                      </a>
                    ))
                  }
                </div>

                <div className="filterRow w-full flex lg:flex-row flex-col items-center gap-4">
                  <div className="lg:w-[70%] w-full filters-buttons flex justify-between items-center">
                    <div className="lg:w-1/4 md:w-1/5 w-auto">
                      <nav className="block">
                        <ul className="flex flex-col p-0 m-0">
                          <li className="text-[13px] !leading-8 font-normal list-style-none p-0 m-0 h-5">
                            <div
                              onClick={() => {
                                setToggleSpaceType(!toggleSpaceType);
                                setToggleSpace(false);
                                setToggleLocationOptions(false);
                              }}
                              className="flex items-center cursor-pointer font-medium text-[#777777] text-sm"
                            >
                              Space Type
                              <svg
                                className="text-[#777777] size-5"
                                stroke="currentColor"
                                fill="currentColor"
                                viewBox="0 0 512 512"
                                height="20px"
                                width="20px"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M128 192l128 128 128-128z"></path>
                              </svg>
                            </div>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/5 w-auto">
                      <nav className="block">
                        <ul className="flex flex-col p-0 m-0">
                          <li className="text-[13px] !leading-8 font-normal list-style-none p-0 m-0 h-5">
                            <div
                              onClick={() => {
                                setToggleLocation(!toggleLocation);
                                setToggleSpace(false);
                                setToggleLocationOptions(false);
                                setToggleSpace(false);
                              }}
                              className="flex items-center cursor-pointer font-medium text-[#777777] text-sm"
                            >
                              <Svg
                                name="pencil"
                                className="text-[#777777] size-[15px] me-1"
                              />
                              Location
                            </div>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/5 w-auto">
                      <ul className="flex flex-col p-0 m-0">
                        <li className="text-[13px] !leading-8 font-normal list-style-none">
                          <div
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="flex items-center cursor-pointer font-medium text-[#777777] text-sm"
                          >
                            <Svg
                              name="filter"
                              className="text-[#777777] size-[18px] me-1"
                            />
                            Filters
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/4 md:w-1/5 w-auto">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={mapToggle}
                          onChange={(e) => setMapToggle(e.target.checked)}
                        />
                        <div
                          className="w-[36px] h-[14px] shrink-0 bg-[#00000061] rounded-lg 
                            peer-checked:bg-[#f76900] 
                            relative after:absolute after:top-[-4px] after:left-[-7px] 
                            after:bg-[#fafafa] after:border after:border-[#fafafa] 
                            after:rounded-full after:h-5 after:w-5 after:transition-all 
                            after:duration-500 after:shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)] peer-checked:after:translate-x-6 peer-checked:after:bg-[#f76900] 
                            peer-checked:after:border-[#fafafa]"
                        ></div>
                        <span className="lg:ms-3 ms-1 text-sm font-normal text-[#777777]">
                          Map
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="lg:w-[30%] w-full items-start lg:flex lg:flex-row hidden flex-col lg:justify-end justify-start">
                    <div className="text-right xs:text-left">
                      <p className="text-sm text-[#777777] leading-10 text-[15px]">
                        Showing{" "}
                        <span className="font-medium text-[#f76900]">{start}–{end}</span>{" "}
                        <span className="font-medium text-[#f76900]">
                          of {allSpaces?.space_count}
                        </span>{" "}
                        Listings
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative inline-block lg:hidden w-full">
                  {toggleSpaceType && (
                    <>
                      <div
                        onClick={() => setToggleSpace(!toggleSpace)}
                        className="toggle-space-type relative top-4 left-0 w-full md:w-[400px] lg:w-3/5 rounded-xl z-10"
                      >
                        <div className="text-sm text-[#333333] bg-white border-2 border-[#cccccc] flex items-center min-h-14 max-h-14 gap-5 p-[18px] rounded-[42px]">
                          <div className="border-1 border-[#dee2e6] p-1 text-sm font-light">
                            {selectedRadio}
                          </div>
                        </div>
                      </div>
                      {toggleSpace && (
                        <div
                          ref={spacesTypeRef}
                          className="dropdown-menu-space-type scrollDropdown absolute top-[72px] left-0 w-[550px] bg-white block shadow-lg z-20 max-h-72 overflow-y-auto p-5 space-y-2 text-sm border border-[#00000020] text-gray-700"
                        >
                          {
                            spaceCategoryData?.map((item, index) => {
                              return (
                                <React.Fragment key={index}>
                                  <label className="flex items-center gap-2 cursor-pointer text-sm text-[#777777] font-light">
                                    <input
                                      type="radio"
                                      name="spaceType2"
                                      value={item?.spaceType}
                                      defaultChecked={selectedRadio === item?.spaceType}
                                      onChange={handleRadioChange}
                                      className="accent-[#26310b]"
                                    />
                                    {item?.spaceType}
                                  </label>
                                  {
                                    item?.spaceType == "Coworking Space" && <div className="pl-6 space-y-2">
                                      {coworkingTypes?.map((type) => (
                                        <label
                                          key={type}
                                          className="flex items-center gap-2 cursor-pointer text-sm text-[#777777] font-light"
                                        >
                                          <input
                                            type="checkbox"
                                            checked={selectedCheckboxes.includes(type)}
                                            onChange={() => handleCheckbox(type)}
                                            className="accent-[#26310b]"
                                          />
                                          {type}
                                        </label>
                                      ))}
                                    </div>
                                  }
                                </React.Fragment>
                              )
                            })
                          }
                        </div>
                      )}
                    </>
                  )}
                  {toggleLocation && (
                    <div className="relative toggle-location">
                      {/* Search box */}
                      <div className="relative top-6 -left-0 w-full md:w-[400px] lg:w-3/5 rounded-xl z-10 pb-7">
                        <div className="text-sm text-[#333333] bg-white border-2 border-[#cccccc] flex items-center py-[9px] px-4 rounded-[42px]">
                          <div className="w-full">
                            <div className="bg-white shadow-mb rounded-full h-10 w-full flex items-center justify-between">
                              <div className="w-full flex justify-between items-center">
                                <button className="text-[#777777] w-[15px] h-[15px]">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={3}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                                    />
                                  </svg>
                                </button>
                                <input
                                  type="text"
                                  placeholder="Where are you looking for office space?"
                                  className="border-0 bg-transparent w-full text-sm placeholder:font-normal transition-all duration-200 p-[10px] placeholder:text-[#333] focus:outline-none"
                                  value={query}
                                  onFocus={() => setToggleLocationOptions(true)}
                                  onChange={(e) => setQuery(e.target.value)}
                                />
                              </div>
                              <div className="flex whitespace-nowrap text-[#777777] cursor-pointer">
                                Near Me
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Suggestion list */}
                      {toggleLocationOptions && (
                        <div
                          ref={locationRef}
                          className="dropdown-menu-location scrollDropdown max-h-72 overflow-y-auto absolute top-[70px] left-4 w-[420px] bg-white shadow-lg z-20"
                        >
                          {locationData
                            .filter((loc) =>
                              loc?.label?.toLowerCase()?.includes(query?.toLowerCase())
                            )
                            .map((loc, idx) => (
                              <div
                                key={idx}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                onClick={() => {
                                  setQuery(loc?.label);
                                  setSelectedLocation(loc);
                                  setToggleLocationOptions(false);
                                }}
                              >
                                {loc?.label}
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {
                  mapToggle && (
                    <div className="map lg:w-2/5 w-full flex flex-col md:sticky md:top-10 mt-3 lg:mt-1 lg:hidden">
                      <MapWithPrices spaceType={spaceType} spaces={productData} hoveredSpaceId={hoveredSpaceId} />
                    </div>
                  )
                }
                {/* {mapToggle && (
                  <div className="map lg:w-2/5 w-full flex flex-col md:sticky md:top-10 mt-3 lg:mt-1 lg:hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.501429411464!2d72.82552997425316!3d19.129516050292203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b77913e9dd2d%3A0xcb2f5ffbb0662d10!2sSpaces%20-%20Inspire%20Hub%20Andheri%20West!5e0!3m2!1sen!2sin!4v1758019913835!5m2!1sen!2sin"
                      width="505"
                      height="700"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full lg:aspect-[505/800] aspect-square object-cover rounded-md"
                    ></iframe>
                  </div>
                )} */}
              </div>
              <div className="lg:w-2/5 w-full items-start flex lg:flex-row lg:hidden flex-col lg:justify-end justify-start lg:pt-2 pt-4">
                <div className="text-right xs:text-left">
                  <p className="text-sm text-[#777777] leading-10 text-[15px]">
                    Showing{" "}
                    <span className="font-medium text-[#f76900]">{start}–{end}</span>{" "}
                    <span className="font-medium text-[#f76900]">of {allSpaces?.space_count}</span>{" "}
                    Listings
                  </p>
                </div>
              </div>
              <div className="relative lg:inline-block hidden w-full">
                {toggleSpaceType && (
                  <>
                    <div
                      onClick={() => setToggleSpace(!toggleSpace)}
                      className="toggle-space-type relative top-4 left-0 w-full md:w-[400px] lg:w-3/5 rounded-xl z-10"
                    >
                      <div className="text-sm text-[#333333] bg-white border-2 border-[#cccccc] flex items-center min-h-14 max-h-14 gap-5 p-[18px] rounded-[42px]">
                        <div className="border-1 border-[#dee2e6] p-1 text-sm font-light">
                          {selectedRadio}
                        </div>
                      </div>
                    </div>
                    {toggleSpace && (
                      <div
                        ref={spacesTypeRef}
                        className="dropdown-menu-space-type scrollDropdown absolute top-[72px] left-0 w-[550px] bg-white block shadow-lg z-20 max-h-72 overflow-y-auto p-5 space-y-2 text-sm border border-[#00000020] text-gray-700"
                      >
                        {
                          spaceCategoryData?.map((item, index) => {
                            return (
                              <React.Fragment key={index}>
                                <label className="flex items-center gap-2 cursor-pointer text-sm text-[#777777] font-light">
                                  <input
                                    type="radio"
                                    name="spaceType"
                                    value={item?.spaceType}
                                    defaultChecked={selectedRadio === item?.spaceType}
                                    onChange={handleRadioChange}
                                    className="accent-[#26310b]"
                                  />
                                  {item?.spaceType}
                                </label>
                                {
                                  item?.spaceType == "Coworking Space" && <div className="pl-6 space-y-2">
                                    {coworkingTypes?.map((type) => (
                                      <label
                                        key={type}
                                        className="flex items-center gap-2 cursor-pointer text-sm text-[#777777] font-light"
                                      >
                                        <input
                                          type="checkbox"
                                          checked={selectedCheckboxes.includes(type)}
                                          onChange={() => handleCheckbox(type)}
                                          className="accent-[#26310b]"
                                        />
                                        {type}
                                      </label>
                                    ))}
                                  </div>
                                }
                              </React.Fragment>
                            )
                          })
                        }
                      </div>
                    )}
                  </>
                )}
                {toggleLocation && (
                  <div className="relative toggle-location">
                    {/* Search box */}
                    <div className="relative top-6 -left-0 w-full md:w-[400px] lg:w-3/5 rounded-xl z-10 pb-7">
                      <div className="text-sm text-[#333333] bg-white border-2 border-[#cccccc] flex items-center py-[9px] px-4 rounded-[42px]">
                        <div className="w-full">
                          <div className="bg-white shadow-mb rounded-full h-10 w-full flex items-center justify-between">
                            <div className="w-full flex justify-between items-center">
                              <button className="text-[#777777] w-[15px] h-[15px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={3}
                                  stroke="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                                  />
                                </svg>
                              </button>
                              <input
                                type="text"
                                placeholder="Where are you looking for office space?"
                                className="border-0 bg-transparent w-full text-sm placeholder:font-normal transition-all duration-200 p-[10px] placeholder:text-[#333] focus:outline-none"
                                value={query}
                                onFocus={() => setToggleLocationOptions(true)}
                                onChange={(e) => setQuery(e.target.value)}
                              />
                            </div>
                            <div className="flex whitespace-nowrap text-[#777777] cursor-pointer">
                              Near Me
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Suggestion list */}
                    {toggleLocationOptions && (
                      <div
                        ref={locationRef}
                        className="dropdown-menu-location scrollDropdown max-h-72 overflow-y-auto absolute top-[70px] left-4 w-[420px] bg-white shadow-lg z-20"
                      >
                        {locationData
                          .filter((loc) =>
                            loc?.label?.toLowerCase()?.includes(query?.toLowerCase())
                          )
                          .map((loc, idx) => (
                            <div
                              key={idx}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                              onClick={() => {
                                setQuery(loc?.label);
                                setSelectedLocation(loc);
                                setToggleLocationOptions(false);
                              }}
                            >
                              {loc?.label}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="spaces lg:mt-6 flex flex-row flex-wrap -mx-4">
                {productData?.slice(0, 6)?.map((item, index) => (
                  <div
                    key={`product-${index}`}
                    className="spaceCard relative lg:w-1/3 md:w-1/3 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4"
                    onMouseOver={() => setHoveredSpaceId(item?.id)}
                    onMouseLeave={() => setHoveredSpaceId(null)}
                  >
                    <ProductCard item={item} setIsOpen={setIsOpen} />
                  </div>
                ))}
              </div>
              <TrustedCompaniesCta />
              <div className="spaces flex flex-row flex-wrap -mx-4">
                {productData?.slice(6, 18)?.map((item, index) => (
                  <div
                    key={`product-${index + 6}`}
                    className="spaceCard relative lg:w-1/3 md:w-1/3 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4"
                    onMouseOver={() => setHoveredSpaceId(item?.id)}
                    onMouseLeave={() => setHoveredSpaceId(null)}
                  >
                    <ProductCard item={item} setIsOpen={setIsOpen} />
                  </div>
                ))}
              </div>

              <section className="w-full relative lg:py-8 md:py-6 py-4">
                <div className="relative w-full h-[280px]">
                  <Image
                    src="/images/banner.png"
                    alt="Banner"
                    width={1200}
                    height={240}
                    className="rounded-lg relative object-cover w-full h-full"
                  />
                </div>

                <div className="flex items-center absolute lg:top-[30%] lg:left-10 sm:top-[22%] top-[15%] left-8">
                  <div className="md:w-4/5 w-full flex flex-col gap-y-3">
                    <h4 className="text-xl font-semibold text-[#010101] ">
                      Winner of Best Flex Space Aggregator of the Year
                    </h4>
                    <p className="lg:w-4/5 w-3/4 text-sm pe-4 text-[#272828] lg:mb-4 mb-2">
                      We negotiate, you save. Our strong relationships with
                      operators ensure you get the best terms—zero hassle, zero
                      brokerage.
                    </p>
                    <button className="w-fit bg-[#141414] text-sm hover:bg-[#ff7c52] text-white py-4 px-6 rounded-[15px] font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">
                      Request call back
                    </button>
                  </div>
                </div>
              </section>

              <div className="spaces flex flex-row flex-wrap -mx-4">
                {productData?.slice(18, 30)?.map((item, index) => (
                  <div
                    key={`product-${index + 18}`}
                    className="spaceCard lg:w-1/3 md:w-1/3 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4"
                    onMouseOver={() => setHoveredSpaceId(item?.id)}
                    onMouseLeave={() => setHoveredSpaceId(null)}
                  >
                    <ProductCard item={item} setIsOpen={setIsOpen} />
                  </div>
                ))}
              </div>

              <TestimonialCta />
              <Pagination currentPage={page} totalPages={Math.ceil(allSpaces?.space_count / perPage)} onPageChange={setPage} />
            </div>
            {
              mapToggle && (
                <div className="map lg:w-1/3 w-full lg:flex flex-col md:sticky md:top-10 hidden">
                  <MapWithPrices spaceType={spaceType} spaces={productData} hoveredSpaceId={hoveredSpaceId} />
                </div>
              )
            }
            {/* {mapToggle && (
              <div className="map lg:w-1/3 w-full lg:flex flex-col md:sticky md:top-10 hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.501429411464!2d72.82552997425316!3d19.129516050292203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b77913e9dd2d%3A0xcb2f5ffbb0662d10!2sSpaces%20-%20Inspire%20Hub%20Andheri%20West!5e0!3m2!1sen!2sin!4v1758019913835!5m2!1sen!2sin"
                  width="505"
                  height="700"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className=""
                ></iframe>
              </div>
            )} */}
          </div>
        </div>
      </section>
      <section className=" mt-18 bg-[#f9f9f9]">
        <div className="container mx-auto md:px-0 px-[15px] py-10">
          <div>
            <h2 className="text-[#141414] font-medium leading-[1.6] md:text-[26px] text-xl">Frequently Asked Questions About Coworking Space in Andheri East Mumbai | Best Coworking Space in Andheri East Mumbai</h2>
          </div>
          <div className="max-w-[975px] mx-auto mt-4">
            <div className="space-y-4">
              <div>
                <div>
                  <p className="font-extrabold text-[#777] 2xl:text-base text-sm">Q- What are the best coworking spaces in Andheri East?</p>
                </div>
                <div className="flex text-[#7b7b7b] 2xl:text-base text-sm pt-1">
                  <p>Ans-</p>
                  <p>Top coworking spaces in Andheri East include Quest Coworks, Redbrick Offices, Wework Raheja Platinum, DevX Dynasty, Awfis Skyline Icon, Yessss Works, Wework Vijay Diamond, Innov8, to name a few.</p>
                </div>
              </div>
              <div>
                <div>
                  <p className="font-extrabold text-[#777] 2xl:text-base text-sm">Q- What are the best coworking spaces in Andheri East?</p>
                </div>
                <div className="flex text-[#7b7b7b] 2xl:text-base text-sm pt-1">
                  <p>Ans-</p>
                  <p>Top coworking spaces in Andheri East include Quest Coworks, Redbrick Offices, Wework Raheja Platinum, DevX Dynasty, Awfis Skyline Icon, Yessss Works, Wework Vijay Diamond, Innov8, to name a few.</p>
                </div>
                <div className="mt-4">
                  <h4 className="text-[#7b7b7b] font-bold leading-[20px] text-[15px]">Top Coworking Spaces in Andheri East</h4>
                  <ol className="list-decimal list-inside text-black  2xl:text-base text-sm space-y-1 my-6">
                    <li className="hover:text-[#7b7b7b]"> WeWork Andheri East</li>

                    <li className="hover:text-[#7b7b7b]">  Innov8 Andheri East</li>

                    <li className="hover:text-[#7b7b7b]"> Awfis Andheri East</li>

                    <li className="hover:text-[#7b7b7b]">  Quest Coworks Andheri East</li>

                    <li className="hover:text-[#7b7b7b]">  Regus Andheri East</li>

                    <li className="hover:text-[#7b7b7b]"> YesssWorks Andheri East</li>

                    <li className="hover:text-[#7b7b7b]"> Executive Spaces Andheri East</li>
                    <li className="hover:text-[#7b7b7b]" > Incuspaze Andheri East</li>

                    <li className="hover:text-[#7b7b7b]"> DevX Andheri East</li>

                    <li className="hover:text-[#7b7b7b]"> DBS Business Center Andheri East</li>
                  </ol>
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-black  2xl:text-base text-sm"> WeWork Andheri East</h5>
                      <p className="text-[#7b7b7b] 2xl:text-base text-sm pt-4">Experience the grandeur of WeWork Vijay Diamond, a hub of coworking excellence in Andheri East. Immerse yourself in meticulously designed meeting booths, hot desks, and communal areas, all enhanced with state-of-the-art HVAC standards for utmost comfort. Indulge in the community spirit at the vibrant community bar or host impactful gatherings in the well-appointed conference rooms. Enjoy the flexibility of private offices and dedicated desks tailored to your needs. With amenities like parking, bike storage, wellness rooms, and a dedicated mother's room, every aspect of your workday is catered to. Take advantage of the outdoor space for small gatherings or utilize the expansive event space for larger events. Plus, with a dedicated area for your furry companions, you can bring your dog to work stress-free. Conveniently located just a 2-minute walk from the MIDC bus stop, WeWork Vijay Diamond offers a seamless blend of productivity and convenience for your work-life balance.</p>
                    </div>
                    <div>
                      <h5 className="text-black  2xl:text-base text-sm"> WeWork Andheri East</h5>
                      <p className="text-[#7b7b7b] 2xl:text-base text-sm pt-4">Experience the grandeur of WeWork Vijay Diamond, a hub of coworking excellence in Andheri East. Immerse yourself in meticulously designed meeting booths, hot desks, and communal areas, all enhanced with state-of-the-art HVAC standards for utmost comfort. Indulge in the community spirit at the vibrant community bar or host impactful gatherings in the well-appointed conference rooms. Enjoy the flexibility of private offices and dedicated desks tailored to your needs. With amenities like parking, bike storage, wellness rooms, and a dedicated mother's room, every aspect of your workday is catered to. Take advantage of the outdoor space for small gatherings or utilize the expansive event space for larger events. Plus, with a dedicated area for your furry companions, you can bring your dog to work stress-free. Conveniently located just a 2-minute walk from the MIDC bus stop, WeWork Vijay Diamond offers a seamless blend of productivity and convenience for your work-life balance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isFilterOpen && (
        <FilterPopup
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
          filterData={filterData}
          setFilterData={setFilterData}
          handleApply={handleApply}
          handleClear={handleClear}
        />
      )}
      {isOpen && <ExplorePopup isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Listing;
