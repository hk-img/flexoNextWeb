import React from 'react'
import EmblaCarousel from "../emblaCarousel/EmblaCarousel"
import Svg from '@/components/svg'
import Image from 'next/image';
const coworkingSpaces = [
  {
    title: "Private Cabins",
    img: "/images/workspaceOption-1.webp",
    teamSize: "3 to 50",
  },
  {
    title: "Dedicated Desks",
    img: "/images/Desk-spaces (1).webp",
    teamSize: "5 to 50",
  },
  {
    title: "Hot Desks",
    img: "/images/managed-offices (1).webp",
    teamSize: "1 to 10",
  },
  {
    title: "Meeting Rooms",
    img: "/images/private-cabins (1).webp",
    teamSize: "2 to 20",
  },
  {
    title: "Event Spaces",
    img: "/images/private-offices (1).webp",
    teamSize: "20 to 200",
  },
   {
    title: "Built to Suit",
    img: "/images/built-to-suit.webp",
    teamSize: "20 to 200",
  },
];

const WorkspaceOptions = () => {

  return (
    <div className="max-w-6xl xl:px-[21px] lg:px-10 md:px-6 px-6 mx-auto py-12">
      <div className='max-w-[800px] px-6 mx-auto'>
        <h2 className="md:text-[32px] text-xl font-medium text-center text-[#333]">
          With <span className="text-[#f76900]">1800+</span> Workspace Options, We have the Right Space for Every Team

        </h2>
      </div>
      <div className="mt-10 flex  lg:flex-row gap-[6px]">

        <div className="w-full">
          <EmblaCarousel
            options={{ loop: true, autoplay: false, showButton: true, align: "start" }}
          >
            {coworkingSpaces.map((space, idx) => (
              <div
                key={idx}
                className="embla__slide shrink-0 px-2 basis-[100%] sm:basis-[50%] md:basis-[50%] lg:basis-[33.3%] xl:basis-[25%]"
              >
                <div className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer">
                  <Image
                  width={405}
                  height={400}
                    src={space.img}
                    alt={space.title}
                    className="w-full h-[400px] object-cover"
                  />

                  <div
                    className="absolute bottom-3 left-3 right-3 bg-[#00000080] backdrop-blur-[5px]  
              text-white p-2 rounded-lg transition-all duration-700 ease-in-out 
              group-hover:-translate-y-3"
                  >
                    <div className="border-b border-[#ffffff1a] pb-2">
                      <h3 className="text-lg font-medium">{space.title}</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      {space.teamSize && (
                        <div>
                          <p className="font-bold text-[#b2b2b2] text-xs mb-1">
                            For Team Size
                          </p>
                          <p className="font-bold text-white text-sm">
                            {space.teamSize}
                          </p>
                        </div>
                      )}
                      <button
                        className="mt-3 bg-[#00000096] text-[#f76900] px-4 py-2 rounded-full 
                  text-sm font-medium transition flex items-center gap-1"
                      >
                        Explore{" "}
                        <span>
                          <Svg
                            name="rightLongArrow"
                            className="size-[16px] text-[#f76900]"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </EmblaCarousel>
        </div>
      </div>
    </div>
  )
}

export default WorkspaceOptions
