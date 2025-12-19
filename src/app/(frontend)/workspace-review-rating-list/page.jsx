import MyReview from '@/components/frontend/myReview/MyReview'
import { WEBSITE_BASE_URL } from '@/services/ApiService';
import React from 'react'

export const metadata = {
  title: "Find Coworking & Office Spaces Across India | Flexo",
  description:
    "Discover top coworking spaces, managed offices, and commercial properties. Find your perfect office with Flexo. Trusted by leading companies - Flexo",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/workspace-review-rating-list`,
  },
};

const page = () => {
  return (
    <>
      <MyReview/>
    </>
  )
}

export default page
