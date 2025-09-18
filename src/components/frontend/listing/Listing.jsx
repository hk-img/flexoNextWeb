"use client";
import Image from "next/image";
import Svg from "@/components/svg";
import TrustedCompanies from "@/components/frontend/home/TrustedCompanies";
import Testimonial from "@/components/frontend/home/Testimonial";
import ProductCard from "../productCard/ProductCard";
import { use, useState } from "react";

const Listing = () => {
  const [toggleSpaceType, setToggleSpaceType] = useState(false);
  const [toggleSpace, setToggleSpace] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("Co-working");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([
    "Private Office",
    "Managed Office",
    "Dedicated Desk",
    "Flexible Desk",
    "Virtual Office",
    "Day Pass",
  ]);
  const [toggleLocation, setToggleLocation] = useState(false);

  const handleRadioChange = (e) => {
    const { value } = e.target;
    if (value == "co-working") {
      setSelectedCheckboxes([
        "Private Office",
        "Managed Office",
        "Dedicated Desk",
        "Flexible Desk",
        "Virtual Office",
        "Day Pass",
      ]);
    } else {
      setSelectedCheckboxes([]);
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
  return (
    <>
      <section className="w-full relative lg:py-16 bg-white">
        <div className="max-w-full xl:px-4 lg:px-4 md:px-3 px-4 mx-auto py-8">
          <div className="group/mainBox w-full flex flex-col lg:flex-row gap-6 items-start">
            <div className="lg:w-2/3 w-full grow flex flex-col justify-center lg:mt-10 mt-16">
              <h1 className="text-xl flex flex-wrap font-bold text-[#141414] mb-4">
                Coworking Space in Bkc, Mumbai
              </h1>
              <div className="form-group filter-group">
                <div className="scrollMenus overflow-auto whitespace-nowrap lg:py-4 py-2 mb-4">
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Andheri West
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Bandra
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Bandra Kurla Complex
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Bhandup
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    BKC
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Borivali
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Borivali East
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Borivali West
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Chembur
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Churchgate
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Colaba
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Dadar
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Dadar West
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Deonar
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Fort
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Ghatkopar
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Goregaon
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Goregaon East
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Jogeshwari
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Juhu
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Kandivali
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Kandivali West
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Khar West
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Kurla
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Lower Parel
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Mahalaxmi
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Mahim West
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Malad
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Malad East
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Malad West
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Marine Lines
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Mulund
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Nahur
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Nariman Point
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Powai
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Santacruz
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Santacruz West
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Thane
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Vashi
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Vikhroli
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Vile Parle
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Wadala
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Western Express Highway
                  </a>
                  <a
                    className="inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]"
                    href="https://example.com"
                    target="_blank"
                  >
                    Worli
                  </a>
                </div>

                <div className="filterRow w-full flex lg:flex-row flex-col items-center gap-4">
                  <div className="lg:w-3/5 w-full filters-buttons flex justify-between items-center">
                    <div>
                      <nav className="block">
                        <ul className="flex p-0 m-0">
                          <li className="text-[13px] !leading-8 font-normal list-style-none p-0 m-0 h-5">
                            <div
                              onClick={() => {
                                setToggleSpaceType(!toggleSpaceType);
                                setToggleSpace(false);
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
                            <div className="relative inline-block">
                              {toggleSpaceType && (
                                <div
                                  onClick={() => setToggleSpace(!toggleSpace)}
                                  className="absolute top-2 left-0 w-[520px] rounded-xl z-50"
                                >
                                  <div className="text-sm text-[#333333] bg-white border-2 border-[#cccccc] flex items-center min-h-14 max-h-14 gap-5 p-[18px] rounded-[42px]">
                                    <div className="border-1 border-[#dee2e6] p-1 text-sm font-light">
                                      {selectedRadio}
                                    </div>
                                  </div>
                                </div>
                              )}
                              {toggleSpace && (
                                <div className="scrollDropdown absolute top-[64px] left-0 w-[520px] bg-white block shadow-lg z-50 max-h-72 overflow-y-auto p-5 space-y-2 text-sm border border-[#00000020] text-gray-700">
                                  <label className="flex items-center gap-2 cursor-pointer text-sm text-[#777777] font-light">
                                    <input
                                      type="radio"
                                      name="spaceType"
                                      value="co-working"
                                      checked={selectedRadio === "Co-working"}
                                      onChange={handleRadioChange}
                                      className="accent-[#26310b]"
                                    />
                                    Co-working
                                  </label>

                                  <div className="pl-6 space-y-2">
                                    {[
                                      "Private Office",
                                      "Managed Office",
                                      "Dedicated Desk",
                                      "Flexible Desk",
                                      "Virtual Office",
                                      "Day Pass",
                                    ].map((type) => (
                                      <label
                                        key={type}
                                        className="flex items-center gap-2 cursor-pointer text-sm text-[#777777] font-light"
                                      >
                                        <input
                                          type="checkbox"
                                          checked={selectedCheckboxes.includes(
                                            type
                                          )}
                                          onChange={() => handleCheckbox(type)}
                                          className="accent-[#26310b]"
                                        />
                                        {type}
                                      </label>
                                    ))}
                                  </div>

                                  <label className="flex items-center gap-2 cursor-pointer text-sm text-[#777777] font-light">
                                    <input
                                      type="radio"
                                      name="spaceType"
                                      value="Private Office"
                                      checked={selectedRadio === "Private Office"}
                                      onChange={handleRadioChange}
                                      className="accent-[#26310b]"
                                    />
                                    Private Office
                                  </label>

                                  <label className="flex items-center gap-2 cursor-pointer text-sm text-[#777777] font-light">
                                    <input
                                      type="radio"
                                      name="spaceType"
                                      value="Classroom"
                                      checked={selectedRadio === "Classroom"}
                                      onChange={handleRadioChange}
                                      className="accent-[#26310b]"
                                    />
                                    Classroom
                                  </label>

                                  <label className="flex items-center gap-2 cursor-pointer text-sm text-[#777777] font-light">
                                    <input
                                      type="radio"
                                      name="spaceType"
                                      value="Managed Office"
                                      checked={selectedRadio === "Managed Office"}
                                      onChange={handleRadioChange}
                                      className="accent-[#26310b]"
                                    />
                                    Managed Office
                                  </label>
                                </div>
                              )}
                              
                              {toggleLocation && (
                                  <div
                                    onClick={() => setToggleLocation(!toggleLocation)}
                                    className="absolute top-[70px] -left-0 w-[520px] rounded-xl z-50"
                                  >
                                    <div className="text-sm text-[#333333] bg-white border-2 border-[#cccccc] flex items-center min-h-14 max-h-14 gap-5 p-[18px] rounded-[42px]">
                                      <div className="w-full ">
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
                                          </svg>
                                        </button>
                                        <input
                                          type="text" placeholder="Where are you looking for office space?" className="border-0 bg-transparent w-full text-sm placeholder:font-normal transition-all duration-200 p-[10px] placeholder:text-[#333] focus:outline-none" />
                                      </div>
                                      <div className="flex whitespace-nowrap text-[#777777]">Near Me</div>
                                      </div>
                                      </div>
                                    </div>
                                  </div>
                                )}

                            </div>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div>
                      <nav className="block">
                        <ul className="flex p-0 m-0">
                          <li className="text-[13px] !leading-8 font-normal list-style-none p-0 m-0 h-5">
                            <div
                              onClick={() => {
                                setToggleLocation(!toggleLocation);
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
                            {/* <div className="relative inline-block">
                                {toggleLocation && (
                                  <div
                                    onClick={() => setToggleLocation(!toggleLocation)}
                                    className="absolute top-2 -left-[170px] w-[520px] rounded-xl z-50"
                                  >
                                    <div className="text-sm text-[#333333] bg-white border-2 border-[#d4d0d0] flex items-center min-h-14 max-h-14 gap-5 py-[7px] px-[18px] rounded-[42px]">
                                      <div className="w-full ">
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
                                          </svg>
                                        </button>
                                        <input
                                          type="text" placeholder="Where are you looking for office space?" className="border-0 bg-transparent w-full text-sm placeholder:font-normal transition-all duration-200 p-[10px] placeholder:text-[#333] focus:outline-none" />
                                      </div>
                                      <div className="flex whitespace-nowrap text-[#777777]">Near Me</div>
                                      </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                            </div> */}
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div>
                      <ul className="flex">
                        <li className="text-[13px] !leading-8 font-normal list-style-none">
                          <a
                            href=""
                            className="flex items-center cursor-pointer font-medium text-[#777777] text-sm"
                          >
                            <Svg
                              name="filter"
                              className="text-[#777777] size-[18px] me-1"
                            />
                            Filters
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-2">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked
                        />
                        <div
                          className="w-[36px] h-[14px] shrink-0 bg-[#00000061] rounded-lg 
                            peer-checked:bg-[#f76900] 
                            relative after:absolute after:top-[-4px] after:left-[-7px] 
                            after:bg-[#fafafa] after:border after:border-[#fafafa] 
                            after:rounded-full after:h-5 after:w-5 after:transition-all 
                            after:duration-500 after:shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)] peer-checked:after:translate-x-6 peer-checked:after:bg-[#f76900] 
                            peer-checked:after:border-[#f76900]"
                        ></div>
                        <span className="ms-3 text-sm font-normal text-[#777777]">
                          Map
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="lg:w-2/5 w-full items-start lg:flex lg:flex-row hidden flex-col lg:justify-end justify-start">
                    <div className="text-right xs:text-left">
                      <p className="text-sm text-[#777777] leading-10 text-[15px]">
                        Showing{" "}
                        <span className="font-medium text-[#f76900]">1–30</span>{" "}
                        <span className="font-medium text-[#f76900]">
                          of 37
                        </span>{" "}
                        Listings
                      </p>
                    </div>
                  </div>
                </div>
                <div className="map lg:w-2/5 w-full flex flex-col md:sticky md:top-10 mt-6 lg:mt-1 lg:hidden">
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
              </div>
              <div className="lg:w-2/5 w-full items-start flex lg:flex-row lg:hidden flex-col lg:justify-end justify-start lg:pt-2 pt-4">
                <div className="text-right xs:text-left">
                  <p className="text-sm text-[#777777] leading-10 text-[15px]">
                    Showing{" "}
                    <span className="font-medium text-[#f76900]">1–30</span>{" "}
                    <span className="font-medium text-[#f76900]">of 37</span>{" "}
                    Listings
                  </p>
                </div>
              </div>
              <div className="spaces lg:mt-6 flex flex-row flex-wrap -mx-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4"
                  >
                    <ProductCard />
                  </div>
                ))}
              </div>
              <TrustedCompanies />
              <div className="spaces flex flex-row flex-wrap -mx-4">
                {Array.from({ length: 12 }).map((_, index) => (
                  <div
                    key={index}
                    className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4"
                  >
                    <ProductCard />
                  </div>
                ))}
              </div>

              <section className="w-full relative lg:py-12 md:py-6 py-4">
                <div className="relative w-full h-[280px]">
                  <Image
                    src="/images/banner.png"
                    alt="Banner"
                    width={1200}
                    height={240}
                    className="rounded-lg relative object-cover w-full h-full"
                  />
                </div>

                <div className="flex items-center absolute lg:top-[30%] lg:left-10 top-[22%] left-8">
                  <div className="md:w-4/5 w-full flex flex-col gap-y-3">
                    <h4 className="text-xl font-semibold text-[#010101] text-balance ">
                      Winner of Best Flex Space Aggregator of the Year
                    </h4>
                    <p className="lg:3/5 w-full text-sm text-[#272828] lg:mb-4 mb-2">
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
                {Array.from({ length: 12 }).map((_, index) => (
                  <div
                    key={index}
                    className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4"
                  >
                    <ProductCard />
                  </div>
                ))}
              </div>

              <Testimonial />
            </div>

            <div className="map lg:w-1/3 w-full lg:flex flex-col md:sticky md:top-10 hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.501429411464!2d72.82552997425316!3d19.129516050292203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b77913e9dd2d%3A0xcb2f5ffbb0662d10!2sSpaces%20-%20Inspire%20Hub%20Andheri%20West!5e0!3m2!1sen!2sin!4v1758019913835!5m2!1sen!2sin"
                width="505"
                height="700"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
