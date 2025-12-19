import HostTermsConditions from '@/components/frontend/hostTermsConditions/HostTermsConditions'
import { WEBSITE_BASE_URL } from '@/services/ApiService';
import React from 'react'

export const metadata = {
  title: "Find Coworking & Office Spaces Across India | Flexo",
  description:
    "Discover top coworking spaces, managed offices, and commercial properties. Find your perfect office with Flexo. Trusted by leading companies - Flexo",
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/host-terms-conditions`,
  },
};

const page = () => {
  return (
    <>
      <HostTermsConditions/>
    </>
  )
}

export default page
