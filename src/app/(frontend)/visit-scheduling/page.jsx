import MyVisit from '@/components/frontend/myVisit/MyVisit'
import { WEBSITE_BASE_URL } from '@/services/ApiService';
import React from 'react'

export const metadata = {
  title: "Find Coworking & Office Spaces Across India | Flexo",
  description:
    "Discover top coworking spaces, managed offices, and commercial properties. Find your perfect office with Flexo. Trusted by leading companies - Flexo",
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/visit-scheduling`,
  },
};

const page = () => {
  return (
    <>
      <MyVisit/>
    </>
  )
}

export default page
