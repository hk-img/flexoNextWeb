import ListWithUs from '@/components/frontend/listWithUs/ListWithUs'
import { WEBSITE_BASE_URL } from '@/services/ApiService';
import React from 'react'

export const metadata = {
  title: "List Your Space On Flexo and Grow Your Business",
  description:"Listing is free. Get qualified leads and referrals. Increase occupancy levels and monetise unused space.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/list-with-us`,
  },
};
const page = () => {
  return (
    <>
      <ListWithUs/>
    </>
  )
}

export default page
