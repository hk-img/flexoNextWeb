import React from 'react'
import HeroSection from './HeroSection'
import TrustedCompanies from './TrustedCompanies'
import CoworkingSpaces from './CoworkingSpaces'
import WorkspaceOptions from './WorkspaceOptions'
import CoworkingBrands from './CoworkingBrands'
import BookWorkspace from './BookWorkspace'
import WhyChooseUs from './WhyChooseUs'
import OfficeSearch from './OfficeSearch'
import Testimonial from './Testimonial'
import Banner from './Banner'
import FaqSection from './FaqSection'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <TrustedCompanies/>
      <CoworkingSpaces/>
      <WorkspaceOptions/>
      <CoworkingBrands/>
      <BookWorkspace/>
      <WhyChooseUs/>
      <OfficeSearch/>
      <Testimonial/>
      <Banner heading="Get Tailored Office Space Solutions for Your Business Needs" img="/images/ready-to-move.webp" desc="Our workspace experts will get in touch to help you with your requirements." btnText="REQUEST CALLBACK" btnLink="#"/>
      <FaqSection/>
      <Banner heading="List Your Space and Earn with Flexo" img="/images/become-a-host.webp" desc="Showcase your space, set your pricing, and start receiving leads and bookings effortlessly." btnText="BECOME A HOST" btnLink="#"/>
    </>
  )
}

export default Home
