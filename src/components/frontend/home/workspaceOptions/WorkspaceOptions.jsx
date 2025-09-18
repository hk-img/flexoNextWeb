"use client";
import React, { useState } from 'react'
import EmblaCarousel from "../../emblaCarousel/EmblaCarousel"
import WorkspaceOptionItem from './WorkspaceOptionItem';
import ExplorePopup from '../../explorePopup/ExplorePopup';
const coworkingSpaces = [
  {
    title: "Private Cabins",
    img: "/images/workspaceOption-1.webp",
    teamSize: "3 to 50",
  },
  {
    title: "private Offices",
    img: "/images/private-offices.webp",
    teamSize: "15 to 500",
  },
  {
    title: "Managed Offices",
    img: "/images/managed-offices.webp",
    teamSize: "25 to 1000+",
  },
  {
    title: "Desks Space",
    img: "/images/Desk-spaces.webp",
    teamSize: "1 to 50",
  },
 
  {
    title: "Meeting Rooms",
    img: "/images/private-cabins.webp",
    teamSize: "2 to 20",
  },
 
   {
    title: "Built to Suit",
    img: "/images/built-to-suit.webp",
    teamSize: "25 to 1000+",
  },
];

const WorkspaceOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="container mx-auto text-center px-[15px] sm:pt-[84px] pt-[64px]">
      <div className='max-w-[850px] md:px-6 mx-auto'>
        <h2 className="sm:text-[32px] text-2xl leading-[1.2] font-medium text-center text-[#333] text-balanced">
          With <span className="text-[#f76900]">1800+</span> Workspace Options, We have the Right Space for Every Team

        </h2>
      </div>
      <div className="sm:mt-10 mt-12 flex lg:flex-row gap-[6px]">

        <div className="w-full md:[&_.emblaarrows]:-left-6 md:[&_.emblaarrows]:-right-6 [&_.emblaarrows]:-left-3 [&_.emblaarrows]:-right-3 [&_.emblaarrows_button]:w-10 [&_.emblaarrows_button]:h-10 [&_.emblaarrows_button_Svg]:size-[18px]">
          <EmblaCarousel
            options={{ loop: true, autoplay: false, showButton: true, align: "start" }}
          >
            {coworkingSpaces.map((space, idx) => (
              <WorkspaceOptionItem space={space} key={idx} setIsOpen={setIsOpen}/>
            ))}
          </EmblaCarousel>
        </div>
      </div>
    </div>
    {isOpen && <ExplorePopup isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </>
  )
}

export default WorkspaceOptions
