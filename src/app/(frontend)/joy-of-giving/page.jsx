import JoyOfGiving from '@/components/frontend/joyOfGiving/JoyOfGiving'
import { WEBSITE_BASE_URL } from '@/services/ApiService';
import React from 'react'

export const metadata = {
  title: "Giving Is A New Way",
  description:"Discover top coworking spaces, managed offices, and commercial properties. Find your perfect office with Flexo. Trusted by leading companies - Flexo",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/joy-of-giving`,
  },
};

const page = () => {
  return (
    <>
      <JoyOfGiving/>
    </>
  )
}

export default page
