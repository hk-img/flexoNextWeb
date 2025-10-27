import React from 'react'
import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("./HeroSection"));
const TrustedCompanies = dynamic(() => import("./TrustedCompanies"));
const CoworkingSpaces = dynamic(() => import("./CoworkingSpaces"));
const WorkspaceOptions = dynamic(() => import("./workspaceOptions/WorkspaceOptions"));
const CoworkingBrands = dynamic(() => import("./CoworkingBrands"));
const BookWorkspace = dynamic(() => import("./BookWorkspace"));
const WhyChooseUs = dynamic(() => import("./WhyChooseUs"));
const OfficeSearch = dynamic(() => import("./OfficeSearch"));
const Testimonial = dynamic(() => import("./Testimonial"));
const Banner = dynamic(() => import("./Banner"));
const FaqSection = dynamic(() => import("./FaqSection"));
const RequestCallback = dynamic(() => import("./RequestCallback"));

const Home = ({spaceCategoryData}) => {
  
  return (
    <>
      <HeroSection spaceCategoryData={spaceCategoryData}/>
      <TrustedCompanies/>
      <CoworkingSpaces/>
      <WorkspaceOptions/>
      <CoworkingBrands/>
      <BookWorkspace/>
      <WhyChooseUs/>
      <OfficeSearch/>
      <Testimonial/>
      <RequestCallback/>
      <FaqSection/>
      <Banner/>
    </>
  )
}

export default Home
