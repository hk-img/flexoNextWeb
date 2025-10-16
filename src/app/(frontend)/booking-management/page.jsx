import MyBooking from '@/components/frontend/myBooking/MyBooking'
import { WEBSITE_BASE_URL } from '@/services/ApiService';
import React from 'react'

export const metadata = {
  title: "Find Coworking & Office Spaces Across India | Flexo",
  description:
    "Discover top coworking spaces, managed offices, and commercial properties. Find your perfect office with Flexo. Trusted by leading companies - Flexo",
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/booking-management`,
  },
};
const page = () => {
  return (
    <>
      <MyBooking/>
    </>
  )
}

export default page
