import EmblaCarousel from "@/components/frontend/emblaCarousel/EmblaCarousel"
import Image from 'next/image';

const page = () => {
  const cities = [
  {
    name: "wework bkc bkc coworking space 6_681160.webp",
    image: "/images/6_681160.webp",
    },
  ];
  return (
    <>
      <section className="w-full relative lg:py-16 bg-white">
        <div className="max-w-full xl:px-4 lg:px-4 md:px-3 px-4 mx-auto py-8">
          <div className="group/mainBox w-full flex flex-col lg:flex-row gap-6 items-start">
            <div className="lg:w-3/5 w-full grow flex flex-col justify-center">
              <div className='form-group filter-group'>
                <h1 className="text-xl flex flex-wrap font-bold text-[#141414] mb-4">
                  Coworking Space in Bkc, Mumbai
                </h1>
                <div className='scrollMenus overflow-auto whitespace-nowrap py-4 mb-4'>
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

                <div className='filterRow w-full flex flex-nowrap items-center gap-4'>
                  <div className='lg:w-3/5 w-full filters-buttons flex justify-between items-center'>
                    <div>
                      <nav className='block '>
                        <ul className='flex'>
                          <li className='text-[13px] !leading-8 font-normal list-style-none'>
                            <a href='' className='flex items-center cursor-pointer font-medium text-[#777777] text-sm'>
                              Space Type
                              <svg className='text-[#777777] size-5' stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div>
                      <nav className='block '>
                        <ul className='flex'>
                          <li className='text-[13px] !leading-8 font-normal list-style-none'>
                            <a href='' className='flex items-center cursor-pointer font-medium text-[#777777] text-sm'>
                              <svg className='text-[#777777] size-[15px] me-1' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                              Location
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div>
                      <nav className='block '>
                        <ul className='flex'>
                          <li className='text-[13px] !leading-8 font-normal list-style-none'>
                            <a href='' className='flex items-center cursor-pointer font-medium text-[#777777] text-sm'>
                              <svg className='text-[#777777] size-[18px] me-1' stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48zm-80 112H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48zm-96 112h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48z"></path></svg>
                              Filters
                            </a>
                          </li>
                        </ul>
                      </nav>
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
                              relative after:content-[''] after:absolute after:-top-0.5 after:left-[10px] 
                              after:bg-white after:border-gray-300 after:border after:rounded-full 
                              after:h-[22px] after:w-[22px] after:transition-all 
                              peer-checked:after:translate-x-full"
                        ></div>

                        <span className="ms-3 text-sm font-normal text-[#777777]">
                          Map
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className='lg:w-2/5 w-full items-center flex justify-end'>
                    <div className="text-right xs:text-left">
                      <p className="text-sm text-[#777777] leading-10 text-[15px]">
                        Showing <span className="font-medium text-[#f76900]">1–30</span> <span className="font-medium text-[#f76900]">of 37</span> Listings
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="spaces mt-6 flex flex-row flex-wrap -mx-2">

                <div className="spaceCard lg:w-1/3 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:md:w-full w-full p-2">
                  <div className="space-card border border-[#e4e4e4] rounded-md flex flex-col">
                      {/* <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true , p: 0, gap: 0,  align: "start"}}>
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
                                      className="w-full h-auto object-cover rounded-md"
                                    />
                                </div>
                              ))}
            

                        <div className="embla__slide shrink-0 basis-full">
                          <Image
                              src={city.image}
                              alt={city.name}
                              title={city.name}
                              width={399}
                              height={320}
                              loading="lazy"
                              className="w-full h-auto object-cover rounded-md"
                            />
                        </div>
                        <div className="embla__slide shrink-0 basis-full">
                          <Image
                                      src={city.image}
                                      alt={city.name}
                                      title={city.name}
                                      width={399}
                                      height={320}
                                      loading="lazy"
                                      className="w-full h-auto object-cover rounded-md"
                                    />
                        </div>
                      </EmblaCarousel> */}
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
                                className="w-full h-auto object-cover rounded-md"
                              />
                            </div>
                          ))}

                          {/* Example of static extra slides */}
                          <div className="embla__slide shrink-0 basis-full">
                            <Image
                              src="/images/extra1.webp"
                              alt="Extra Slide 1"
                              title="Extra Slide 1"
                              width={399}
                              height={320}
                              loading="lazy"
                              className="w-full h-auto object-cover rounded-md"
                            />
                          </div>
                          <div className="embla__slide shrink-0 basis-full">
                            <Image
                              src="/images/extra2.webp"
                              alt="Extra Slide 2"
                              title="Extra Slide 2"
                              width={399}
                              height={320}
                              loading="lazy"
                              className="w-full h-auto object-cover rounded-md"
                            />
                          </div>
                        </EmblaCarousel>
                      <div className="pt-2 px-7 pb-4 flex flex-col flex-grow">
                        <div className="flex flex-col justify-between items-start md:mb-2 mb-1">
                          <h3 className="text-lg cursor-pointer font-semibold text-[#141414]">
                            WeWork BKC A Reputed Business Address in Mumbai 
                          </h3>
                          <span className="text-[15px] text-[#141414] bg-transparent text-start font-normal">
                            <svg className="text-[#f76900] size-[15px]" stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"></path></svg>
                            BKC, Mumbai</span>
                        </div>
                      </div>
                  </div>
                </div>

                <div className="spaceCard lg:w-1/3 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:md:w-full w-full p-2">
                  <div className="space-card border border-[#e4e4e4] rounded-md overflow-hidden">
                    <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true , align: "start"}}>
                      <div className="embla__slide shrink-0 basis-full">
                        <div className="grid grid-rows-2 gap-1">
                          sdgdf
                        </div>
                      </div>
                      <div className="embla__slide shrink-0 basis-full">
                        <div className="grid grid-rows-2 gap-1">
                          sdgdf
                        </div>
                      </div>
                      <div className="embla__slide shrink-0 basis-full">
                        <div className="grid grid-rows-2 gap-1">
                          sdgdf
                        </div>
                      </div>
                    </EmblaCarousel>

                  </div>
                </div>

                <div className="spaceCard lg:w-1/3 md:w-1/2 group-has-[.map]/mainBox:lg:w-1/2 group-has-[.map]/mainBox:md:w-full w-full p-2">
                  <div className="space-card border border-[#e4e4e4] rounded-md overflow-hidden">
                    <EmblaCarousel options={{ loop: true, autoplay: false, showButton: true , align: "start"}}>
                      <div className="embla__slide shrink-0 basis-full">
                        <div className="grid grid-rows-2 gap-1">
                          sdgdf
                        </div>
                      </div>
                      <div className="embla__slide shrink-0 basis-full">
                        <div className="grid grid-rows-2 gap-1">
                          sdgdf
                        </div>
                      </div>
                      <div className="embla__slide shrink-0 basis-full">
                        <div className="grid grid-rows-2 gap-1">
                          sdgdf
                        </div>
                      </div>
                    </EmblaCarousel>

                  </div>
                </div>

              </div>
            </div>

            <div className="map lg:w-2/5 w-full flex flex-col ps-8">
              <img src='https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630' alt='listing banner' className='w-full h-full object-cover rounded-md' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
