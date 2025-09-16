import EmblaCarousel from "@/components/frontend/emblaCarousel/EmblaCarousel"
import Image from 'next/image';
import Svg from '@/components/svg';
import TrustedCompanies from "@/components/frontend/home/TrustedCompanies";
import Testimonial from "@/components/frontend/home/Testimonial";

const page = () => {
  const cities = [
    {
    name: "wework bkc bkc coworking space 6_681160.webp",
    image: "/images/6_681160.webp",
    },
    {
    name: "wework bkc bkc coworking space 6_970399.webp",
    image: "/images/6_970399.webp",
    },
    {
    name: "wework bkc bkc coworking space 6_110330.webp",
    image: "/images/6_110330.webp",
    },
    {
    name: "wework bkc bkc coworking space 6_816657.webp",
    image: "/images/6_816657.webp",
    },
    {
    name: "wework bkc bkc coworking space 6_857568.webp",
    image: "/images/6_857568.webp",
    },
    {
    name: "wework bkc bkc coworking space 6_220604.webp",
    image: "/images/6_220604.webp",
    },
    {
    name: "wework bkc bkc coworking space 6_477318.webp",
    image: "/images/6_477318.webp",
    },
  ];
  return (
    <>
      <section className="w-full relative lg:py-16 bg-white">
        <div className="max-w-full xl:px-4 lg:px-4 md:px-3 px-4 mx-auto py-8">
          <div className="group/mainBox w-full flex flex-col lg:flex-row gap-6 items-start">
            <div className="lg:w-2/3 w-full grow flex flex-col justify-center lg:mt-10 mt-16">
                <h1 className="text-xl flex flex-wrap font-bold text-[#141414] mb-4">
                  Coworking Space in Bkc, Mumbai
                </h1>
              <div className='form-group filter-group'>
                <div className='scrollMenus overflow-auto whitespace-nowrap lg:py-4 py-2 mb-4'>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Andheri West
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Bandra
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Bandra Kurla Complex
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Bhandup
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    BKC
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Borivali
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Borivali East
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Borivali West
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Chembur
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Churchgate
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Colaba
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Dadar
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Dadar West
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Deonar
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Fort
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Ghatkopar
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Goregaon
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Goregaon East
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Jogeshwari
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Juhu
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Kandivali
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Kandivali West
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Khar West
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Kurla
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Lower Parel
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Mahalaxmi
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Mahim West
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Malad
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Malad East
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Malad West
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Marine Lines
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Mulund
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Nahur
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Nariman Point
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Powai
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Santacruz
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Santacruz West
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Thane
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Vashi
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Vikhroli
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Vile Parle
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Wadala
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Western Express Highway
                  </a>
                  <a className='inline-block text-center bg-white me-1.5 cursor-pointer rounded-[3px] py-1 px-[10px] text-[12px] font-normal text-[#9e9e9e] border border-[#d4d4d4] max-w-[240px] w-[160px] whitespace-pre-wrap overflow-hidden text-ellipsis md:hover:bg-[#e9e9ff] md:hover:border-[#7d9dd9] md:hover:text-[#4343e8]' href="https://example.com" target="_blank">
                    Worli
                  </a>
                </div>

                <div className='filterRow w-full flex lg:flex-row flex-col items-center gap-4'>
                  <div className='lg:w-3/5 w-full filters-buttons flex justify-between items-center'>
                    <div>
                      <ul className='flex'>
                          <li className='text-[13px] !leading-8 font-normal list-style-none'>
                            <a href='' className='flex items-center cursor-pointer font-medium text-[#777777] text-sm'>
                              Space Type
                              <svg className='text-[#777777] size-5' stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg>
                            </a>
                          </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex'>
                          <li className='text-[13px] !leading-8 font-normal list-style-none'>
                            <a href='' className='flex items-center cursor-pointer font-medium text-[#777777] text-sm'>
                              <Svg name="pencil" className="text-[#777777] size-[15px] me-1" />
                              Location
                            </a>
                          </li>
                        </ul>
                    </div>
                    <div>
                      <ul className='flex'>
                          <li className='text-[13px] !leading-8 font-normal list-style-none'>
                            <a href='' className='flex items-center cursor-pointer font-medium text-[#777777] text-sm'>
                              <Svg name="filter" className="text-[#777777] size-[18px] me-1" />
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
                          className="w-12 h-5 bg-gray-300 rounded-full 
                            peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-transparent 
                            peer-checked:bg-[#f76900] 
                            relative after:content-[''] after:absolute after:top-0 after:left-0.5 
                            after:bg-white after:border-gray-300 after:border after:rounded-full 
                            after:h-5 after:w-5 after:transition-all 
                            peer-checked:after:translate-x-6"
                        ></div>

                        <span className="ms-3 text-sm font-normal text-[#777777]">
                          Map
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className='lg:w-2/5 w-full items-start lg:flex lg:flex-row hidden flex-col lg:justify-end justify-start'>
                    <div className="text-right xs:text-left">
                      <p className="text-sm text-[#777777] leading-10 text-[15px]">
                        Showing <span className="font-medium text-[#f76900]">1–30</span> <span className="font-medium text-[#f76900]">of 37</span> Listings
                      </p>
                    </div>
                  </div>
                </div>
                <div className="map lg:w-2/5 w-full flex flex-col md:sticky md:top-10 mt-6 lg:mt-1 lg:hidden">
                  <img src='https://flexospaces-images.s3.ap-south-1.amazonaws.com/img/workspaces.webp' alt='listing banner' width="505" height="800" className='w-full h-full lg:aspect-[505/800] aspect-square object-cover rounded-md' />
                </div>
              </div>
              <div className='lg:w-2/5 w-full items-start flex lg:flex-row lg:hidden flex-col lg:justify-end justify-start lg:pt-2 pt-4'>
                <div className="text-right xs:text-left">
                      <p className="text-sm text-[#777777] leading-10 text-[15px]">
                        Showing <span className="font-medium text-[#f76900]">1–30</span> <span className="font-medium text-[#f76900]">of 37</span> Listings
                      </p>
                </div>
              </div>
              <div className="spaces lg:mt-6 flex flex-row flex-wrap -mx-4">

                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide relative shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                              {/* <div className="shortlistIcon absolute top-[3px] z-30 right-[2px] flex p-3">
                                <div className="shareBtn me-2">
                                  <a href="" className="rounded-full text-base bg-[#ece8e8] w-[34px] h-[34px] cursor-pointer">
                                    <Svg name="heart" className="size-[18px] text-[#808080]" />
                                  </a>
                                </div>
                              </div> */}
                            </div>
                            
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div className="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span className="text-sm font-semibold text-black">60000</span>
                              <small className="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div className="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span className="text-sm font-semibold text-black">15000</span>
                              <small className="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div className="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" className="peer hidden"/>
                              <div
                                className="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                htmlFor="toggle"
                                className="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                        </div>

                      </div>
                  </div>
                </div>

                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>
                
                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>

                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>

                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>
                
                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>

              </div>
                <TrustedCompanies/>
              <div className="spaces flex flex-row flex-wrap -mx-4">

                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>

                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span className="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span className="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>
                
                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>

                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>

                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>
                        </div>

                        </div>
                      </div>
                </div>
                
                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>
                
                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>

                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>
                
                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>

                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>

                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>
                        </div>

                        </div>
                      </div>
                </div>
                
                <div className="spaceCard lg:w-1/3 md:w-1/2  group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>
                        </div>

                        </div>
                      </div>
                </div>
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
                      <h4 className="text-xl font-semibold text-[#010101] text-balance ">Winner of Best Flex Space Aggregator of the Year</h4>
                      <p className="lg:3/5 w-full text-sm text-[#272828] lg:mb-4 mb-2">We negotiate, you save. Our strong relationships with operators ensure you get the best terms—zero hassle, zero brokerage.</p>
                      <button className="w-fit bg-[#141414] text-sm hover:bg-[#ff7c52] text-white py-4 px-6 rounded-[15px] font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">
                          Request call back
                      </button>
                    </div>
                  </div>
              </section> 
              <div className="spaces flex flex-row flex-wrap -mx-4">

                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>

                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span className="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span className="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>
                
                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>

                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>

                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>
                        </div>

                        </div>
                      </div>
                </div>
                
                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>
                
                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>

                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>
                
                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>

                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>

                          </div>

                        </div>
                      </div>
                </div>

                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>
                        </div>

                        </div>
                      </div>
                </div>
                
                <div className="spaceCard lg:w-1/2 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:xl:w-1/2 group-has-[.map]/mainBox:md:w-1/2 w-full p-4">
                  <div className="space-card w-full h-full shadow-[0_0_17px_0_rgba(0,0,0,0.1)] mb-[30px]rounded-md flex flex-col">
                        <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true, align: "start" }}>
                          {cities.map((city, index) => (
                            <div
                              key={index}
                              className="embla__slide shrink-0 basis-full"
                            >
                              <Image
                                src={city.image}
                                alt={city.name}
                                title={city.name}
                                width={399}
                                height={320}
                                loading="lazy"
                                className="w-full aspect-[399/320] object-cover rounded-t-md"
                              />
                            </div>
                          ))}
                        </EmblaCarousel>
                        
                      <div className="pt-2 px-6 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-medium text-[#141414] text-ellipsis line-clamp-1">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent flex items-center text-start font-normal -ms-[3px]">
                            <Svg name="location2" className="text-[#f76900] size-[15px] me-1" />
                            BKC, Mumbai
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#777777] mb-1 font-light">
                          <div className="flex gap-1 items-center">
                            <Svg name="user2" className="size-[12px] text-[#f76900]" />
                            <span>people</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Svg name="scaleRuler" className="size-[12px] text-[#f76900]" />
                            <span>sqft</span>
                          </div>
                        </div>
                        <div className="m-0 flex justify-between items-start">
                          <div className="w-full flex flex-col justify-between items-start">
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Private Office from
                            </span>
                            <span className="text-sm m-0 font-normal text-[#141414]">
                              Desks From
                            </span>
                          </div>
                          <div className="w-full flex flex-col justify-end items-start">
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">60000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                            <div class="flex items-center justify-end">
                              <Svg name="rupee" className="text-[#7f7f7f] size-[15px]" />
                              <span class="text-sm font-semibold text-black">15000</span>
                              <small class="ps-1 text-[11px] font-normal text-[#141414] pt-0.5">per seat/month</small>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 w-full flex items-start">
                            <div class="text-sm text-[#141414] !leading-[21px] text-start">
                              <input type="checkbox" id="toggle" class="peer hidden"/>
                              <div
                                class="overflow-hidden max-h-[40px] transition-all duration-500 ease-in-out peer-checked:max-h-[1000px]"
                              >
                                One of the most premium coworking spaces in Mumbai, this is the ideal platform for high-growth start-ups, corporates, multinationals and financial services companies that want the best for their teams. Located in the highly energetic location of Bandra Kurla Complex (BKC), this coworking space in BKC has solutions for all your needs. It has improved HVAC standards to keep the air circulation healthy. The facility has a spacious parking lot as well as a bike storage.
                              </div>

                              <label
                                for="toggle"
                                class="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer peer-checked:after:content-['See_less'] after:content-['See_more']"
                              ></label>
                            </div>

                        </div>
                        <div className="offerBtn flex items-end justify-end">
                          <button className="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-1.5 px-3 rounded-sm font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">Get Offer </button>
                        </div>

                        </div>
                      </div>
                </div>
              </div> 
              <Testimonial />
            </div>

            <div className="map lg:w-1/3 w-full lg:flex flex-col md:sticky md:top-10 hidden">
              <img src='https://flexospaces-images.s3.ap-south-1.amazonaws.com/img/workspaces.webp' alt='listing banner' width="505" height="800" className='w-full h-full aspect-[505/800] object-cover rounded-md' />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default page
