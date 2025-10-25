"use client";
import Svg from "@/components/svg";
import TrustedCompaniesCta from "./TrustedCompaniesCta";
import TestimonialCta from "./TestimonialCta";
import ProductCard from "../productCard/ProductCard";
import React, { useEffect, useMemo, useRef, useState } from "react";
import FilterPopup from "./filterPopup/FilterPopup";
import { getApi, postAPI } from "@/services/ApiService";
import { useQuery } from "@tanstack/react-query";
import Pagination from "../pagination/Pagination";
import ExplorePopup from "../explorePopup/ExplorePopup";
import { convertSlugToSmallLetter, getTypeOfSpaceByWorkSpace, slugGenerator,coworkingTypes } from "@/services/Comman";
import MapWithPrices from "./MapWithPrice";
import Faq from "./faq/Faq";
import LongTermPopup from "./LongTermPopup";
import RequestCallback from "./RequestCallback";
import Auth from "../auth/Auth";
import { useAuth } from "@/context/useAuth";
import BottomBar from "../bottomBar/BottomBar";
import { useLocation } from "@/context/useLocation";
import Link from "next/link";

const Listing = ({ spaceTypeSlug, citySlug, locationNameSlug, spaceType, city, locationName, spaceCategoryData, locationData, nearBySpacesData,listingData }) => {
  const {user} = useAuth();
  const {coordinates} = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [type,setType] = useState("");
  const [isLongTermPopupOpen, setIsLongTermPopupOpen] = useState(false);
  const spacesTypeRef = useRef(null);
  const locationRef = useRef(null);
  const [mapToggle, setMapToggle] = useState(true);
  const [toggleSpaceType, setToggleSpaceType] = useState(false);
  const [toggleSpace, setToggleSpace] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(spaceCategoryData?.[0]?.spaceType);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [toggleLocation, setToggleLocation] = useState(false);
  const [toggleLocationOptions, setToggleLocationOptions] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterData, setFilterData] = useState({
    priceRange: { min: 500, max: 50000 },
    distance: 0,
    sortBy: "",
    amenities: [],
  });
  const [appliedFilter, setAppliedFilter] = useState(filterData);
  const [nearMeData, setNearMeData] = useState(null);
  const [page, setPage] = useState(1);
  const [hoveredSpaceId, setHoveredSpaceId] = useState(null);
  const [selectedSpaceData,setSelectedSpaceData] = useState(null);
  const perPage = 30;

  const handleRadioChange = (e) => {
    const { value } = e.target;
    if (value == "Coworking Space") {
      setSelectedCheckboxes(coworkingTypes);
    } else {
      const smallSpaceType = convertSlugToSmallLetter(value || "");
      setSelectedCheckboxes([smallSpaceType]);
    }
    setSelectedRadio(value);
  };
  useEffect(()=>{
    if(selectedRadio){
      const type = getTypeOfSpaceByWorkSpace(selectedRadio || "");
      setType(type);
    } 
  },[selectedRadio])
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
    if (spaceTypeSlug === "coworking") {
      setSelectedRadio("Coworking Space");
      setSelectedCheckboxes(coworkingTypes);
      return;
    }
    const selectedSpaceType = spaceCategoryData?.find((item) => {
      const categorySpaceType = slugGenerator(item?.spaceType || "");
      if (categorySpaceType === spaceTypeSlug) {
        return item
      }
    });
    setSelectedRadio(selectedSpaceType?.spaceType)
    if (selectedSpaceType?.spaceType === "Coworking Space") {
      setSelectedCheckboxes(coworkingTypes);
    } else {
      const smallSpaceType = convertSlugToSmallLetter(selectedSpaceType?.spaceType || "");
      setSelectedCheckboxes([smallSpaceType]);
    }
  }, [spaceCategoryData, spaceTypeSlug])

  const { data: allSpaces, refetch: refetchSpaces } = useQuery({
    queryKey: ["allSpaces", page, city,type,selectedCheckboxes,selectedLocation,nearMeData,appliedFilter,user?.id],
    queryFn: async () => {
      let payload = {
        city_name: convertSlugToSmallLetter(city || ""),
        spaceType: selectedCheckboxes,
        type: type,
        userId: user?.id || 0,
        capacity: null,
        min_price: null,
        max_price: null,
        amenities: [],
        city_lat: nearMeData?.lat || 0,
        city_long: nearMeData?.lng || 0,
        page_no: page
      }
      if(!nearMeData){
        payload.location_lat =  19.1121947;
        payload.location_longi = 72.8792898;
      }
      if (selectedLocation) {
        payload.city_name = convertSlugToSmallLetter(selectedLocation?.city || "");
        payload.location_name = convertSlugToSmallLetter(selectedLocation?.location_name || "");
      }
      if (
        appliedFilter?.priceRange?.min !== 500 ||
        appliedFilter?.priceRange?.max !== 50000
      ) {
        payload.min_price = appliedFilter?.priceRange?.min;
        payload.max_price = appliedFilter?.priceRange?.max;
      }
      if (appliedFilter.distance > 0) {
        payload.distance = appliedFilter?.distance;
      }
      if (appliedFilter.sortBy) {
        payload.sortBy = appliedFilter?.sortBy;
      }
      if (appliedFilter?.amenities?.length > 0) {
        payload.amenities = appliedFilter?.amenities;
      }
      const res = await postAPI("spaces/getSpacesByCity", payload);
      return res.data;
    },
    keepPreviousData: true,
    initialData: listingData
  });
  const productData = useMemo(() => {
    return allSpaces?.data || []
  }, [allSpaces]);
  const faqData = useMemo(() => {
    return allSpaces?.faqs || []
  }, [allSpaces]);

  const {data: allLocations} = useQuery({
    queryKey: ["allLocations",selectedRadio],
    queryFn: async () => {
      const res = await getApi(`/user/getAllLocations?spaceType=${selectedRadio}`);
      return res.data;
    },
    keepPreviousData: true,
    initialData: locationData,
  })

  useEffect(() => {
    if (allLocations?.length > 0 && locationName) {
      const smallLetterLocationName = convertSlugToSmallLetter(locationName || "");
      const selectedLocation = allLocations?.find((item) => {
        if (item?.location_name.toLowerCase() === smallLetterLocationName) {
          return item
        }
      })
      setQuery(selectedLocation?.label || "");
      setSelectedLocation(selectedLocation || null);
    }
  }, [allLocations, locationName])

  const handleApply = () => {
    setAppliedFilter(filterData);
    setIsFilterOpen(false);
  };

  const handleClear = () => {
    const resetFilters = {
      priceRange: { min: 500, max: 50000 },
      distance: 0,
      sortBy: "",
      amenities: [],
    };
    setFilterData(resetFilters);
    setAppliedFilter(resetFilters);
    setIsFilterOpen(false);
  };
  const handleNearMe = ()=>{
    setNearMeData({
      lat: coordinates?.lat || 19.1121947,
      lng: coordinates?.lng || 72.8792898,
    })
  }
  const [isPagination,setIsPagination] = useState(false);
  const paginationRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    if (!paginationRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsPagination(true); 
        } else {
          setIsPagination(false); 
        }
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    observer.observe(paginationRef.current);

    return () => {
      if (paginationRef.current) observer.unobserve(paginationRef.current);
    };
  }, [productData]);
  const total = allSpaces?.space_count || 0;
  const start = total > 0 ? (page - 1) * perPage + 1 : 0;
  const end = total > 0 ? Math.min(page * perPage, total) : 0;
  return (
    <>
      <section className="w-full relative lg:pt-16 bg-white">
        <div className="max-w-full xl:px-4 lg:px-4 md:px-3 px-4 mx-auto pt-4">
          <div className="group/mainBox w-full flex flex-col lg:flex-row gap-6 items-start">
            <div className={`lg:w-2/3 w-full flex ${!mapToggle ? "grow" : ""} flex-col justify-center lg:mt-8 mt-16`}>
              <h1 className="text-xl flex flex-wrap font-bold text-[#141414] mb-4">
                {locationName ? `${spaceType} in ${locationName}, ${city}` : spaceTypeSlug == "coworking" ? `Coworking Space in ${city}` : `${spaceType} in ${city}`}
              </h1>
              <div className="form-group filter-group">
                <div className="scrollMenus overflow-auto whitespace-nowrap pb-2 mb-4">
                  {
                    nearBySpacesData?.map((item, index) => (
                      <div
                        key={index}
                        className={`${item?.location_name?.split(" ")?.map(word => word.charAt(0).toLowerCase() + word.slice(1))?.join(" ") == locationNameSlug?.replace(/-/g, " ") ? "text-[#4343e8] border-[#7d9dd9] bg-[#e9e9ff]" : "text-[#9e9e9e] border-[#d4d4d4] bg-white"} inline-block text-center me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border max-w-full min-w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]`}
                        onClick={()=>{
                          const url = `/in/${slugGenerator(item?.spaceType || "")}/${citySlug}/${slugGenerator(item?.location_name || "")}`
                          window.open(url, "_blank");
                        }}
                      >
                        {" "}
                        {item?.location_name}
                      </div>
                    ))
                  }
                </div>

                <div className="filterRow w-full flex lg:flex-row flex-col items-center gap-4 justify-between">
                  <div className="lg:w-2/3 w-full filters-buttons flex justify-between items-center pr-[15px]">
                    <div className="">
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
                    <div className="">
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
                    <div className="">
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
                    <div className="">
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
                  <div className="items-start lg:flex lg:flex-row hidden flex-col lg:justify-end justify-start">
                  <div className="text-right xs:text-left">
                    <p className="text-sm text-[#777777] leading-10 min-[1400px]:text-[15px]">
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
                          className="dropdown-menu-space-type scrollDropdown absolute top-[72px] left-0 md:w-[550px] w-full bg-white block shadow-lg z-20 max-h-72 overflow-y-auto p-5 space-y-2 text-sm border border-[#00000020] text-gray-700"
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
                    <div className="relative">
                      {/* Search box */}
                      <div className="relative top-6 -left-0 w-full md:w-[400px] lg:w-3/5 rounded-xl z-10 pb-7">
                        <div className="text-sm text-[#333333] bg-white border-2 border-[#cccccc] flex items-center py-[9px] px-4 rounded-[42px]">
                          <div className="w-full toggle-location">
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
                              <div onClick={handleNearMe} className="flex whitespace-nowrap text-[#777777] cursor-pointer">
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
                          className="dropdown-menu-location scrollDropdown max-h-72 overflow-y-auto absolute top-[70px] left-4  bg-white shadow-lg z-20"
                        >
                          {allLocations
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
                                  setNearMeData(null)
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
                 
                {/* {
                  mapToggle && (
                    <div className="map lg:w-2/5 w-full flex flex-col md:sticky md:top-10 mt-3 lg:mt-1 lg:hidden [&_.gm-style-iw-d]:!overflow-hidden [&_.gm-style-iw-d]:!max-w-[336px] [&_.gm-style-iw-d]:!max-h-full [&_.gm-style-iw-c]:!p-0 [&_.gm-style-iw-chr]:!hidden [&_.gm-style-iw]:!rounded-xl">
                      <MapWithPrices type={type} spaces={productData} hoveredSpaceId={hoveredSpaceId} />
                    </div>
                  )
                } */}
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
                  <div className="relative">
                    {/* Search box */}
                    <div className="relative top-6 -left-0 w-full md:w-[400px] lg:w-3/5 rounded-xl z-10 pb-7">
                      <div className="text-sm text-[#333333] bg-white border-2 border-[#cccccc] flex items-center py-[9px] px-4 rounded-[42px]">
                        <div className="w-full">
                          <div className="bg-white shadow-mb rounded-full h-10 w-full flex items-center justify-between">
                            <div className="w-full flex justify-between items-center toggle-location">
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
                            <div onClick={handleNearMe} className="flex whitespace-nowrap text-[#777777] cursor-pointer">
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
                        {allLocations
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
                                setNearMeData(null);
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
                    <ProductCard item={item} setIsOpen={setIsOpen} setIsAuthOpen={setIsAuthOpen} setSelectedSpaceData={setSelectedSpaceData}/>
                  </div>
                ))}
              </div>
              <TrustedCompaniesCta setIsOpen={setIsOpen} type={type}/>
              <div className="spaces flex flex-row flex-wrap -mx-4">
                {productData?.slice(6, 18)?.map((item, index) => (
                  <div
                    key={`product-${index + 6}`}
                    className="spaceCard relative lg:w-1/3 md:w-1/3 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4"
                    onMouseOver={() => setHoveredSpaceId(item?.id)}
                    onMouseLeave={() => setHoveredSpaceId(null)}
                  >
                    <ProductCard item={item} setIsOpen={setIsOpen} setIsAuthOpen={setIsAuthOpen} setSelectedSpaceData={setSelectedSpaceData}/>
                  </div>
                ))}
              </div>
              {
                productData?.length > 18 && (
                  <RequestCallback/>
                )
              }
              <div className="spaces flex flex-row flex-wrap -mx-4">
                {productData?.slice(18, 30)?.map((item, index) => (
                  <div
                    key={`product-${index + 18}`}
                    className="spaceCard lg:w-1/3 md:w-1/3 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4"
                    onMouseOver={() => setHoveredSpaceId(item?.id)}
                    onMouseLeave={() => setHoveredSpaceId(null)}
                  >
                    <ProductCard item={item} setIsOpen={setIsOpen} setIsAuthOpen={setIsAuthOpen} setSelectedSpaceData={setSelectedSpaceData}/>
                  </div>
                ))}
              </div>
              <TestimonialCta setIsOpen={setIsOpen} type={type}/>
              <Pagination currentPage={page} totalPages={Math.ceil(allSpaces?.space_count / perPage)} onPageChange={setPage} paginationRef={paginationRef}/>
            </div>
            {
              mapToggle && (
                <div className={`${isPagination ? 'hidden':''} map lg:w-1/3 w-full flex flex-col md:sticky md:top-20 [&_.gm-style-iw-d]:!overflow-hidden [&_.gm-style-iw-d]:!max-w-[336px] [&_.gm-style-iw-d]:!max-h-full [&_.gm-style-iw-c]:!p-0 [&_.gm-style-iw-chr]:!hidden [&_.gm-style-iw]:!rounded-xl`}>
                  <MapWithPrices type={type} spaces={productData} hoveredSpaceId={hoveredSpaceId} />
                </div>
              )
            }
          </div>
        </div>
      </section>
      {type != "shortterm" && <BottomBar type={type} city={city}/>}
      {
        type == "longterm" && (
          <div className="fixed bottom-0 left-0 w-full lg:w-7/12  bg-white z-40">
              <div className=" mx-auto flex md:flex-row flex-col md:gap-[30px] gap-1 items-center justify-between px-7 py-3">
                <div className="flex md:flex-row flex-col w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div>
                      <Svg name="checkTic" className="size-3 text-[#f76900]"/>
                    </div>
                    <div className="text-sm font-light ">Our service is <span className="font-semibold ">FREE</span> </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <Svg name="checkTic" className="size-3 text-[#f76900]"/>
                    </div>
                    <div className="text-sm font-light">We help secure the <span className="font-semibold ">best deal</span> </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsLongTermPopupOpen((prev) => !prev)} className="cursor-pointer bg-[#f76900] text-white px-10 text-sm py-[15px] rounded-sm uppercase text-nowrap">FIND MY PERFECT OFFICE NOW</button>
                </div>
              </div>
          </div>
        )
      }
      {
        faqData?.length > 0 && <Faq spaceType={spaceType} city={city} locationName={locationName} faqData={faqData} />
      }
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
      {
        isLongTermPopupOpen && <LongTermPopup isOpen={isLongTermPopupOpen} setIsOpen={setIsLongTermPopupOpen} city={city} />
      }
      {isOpen && <ExplorePopup isOpen={isOpen} setIsOpen={setIsOpen} selectedSpaceData={selectedSpaceData} type={type}/>}
      {isAuthOpen && <Auth isOpen={isAuthOpen} setIsOpen={setIsAuthOpen} />}
    </>
  );
};

export default Listing;
