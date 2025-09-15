import React from 'react'
import EmblaCarousel from "../../emblaCarousel/EmblaCarousel"
import WorkspaceOptionItem from './WorkspaceOptionItem';
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

  return (
    <div className="max-w-6xl xl:px-[21px] lg:px-10 md:px-6 px-6 mx-auto py-12">
      <div className='max-w-[800px] px-6 mx-auto'>
        <h2 className="md:text-[32px] text-xl font-medium text-center text-[#333]">
          With <span className="text-[#f76900]">1800+</span> Workspace Options, We have the Right Space for Every Team

        </h2>
      </div>
      <div className="mt-10 flex lg:flex-row gap-[6px]">

        <div className="w-full">
          <EmblaCarousel
            options={{ loop: true, autoplay: false, showButton: true, align: "start" }}
          >
            {coworkingSpaces.map((space, idx) => (
              <WorkspaceOptionItem space={space} key={idx} />
            ))}
          </EmblaCarousel>
        </div>
      </div>
    </div>
  )
}

export default WorkspaceOptions
