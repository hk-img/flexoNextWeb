import Home from "@/components/frontend/home/Home";
import { BASE_URL } from "@/services/ApiService";
import React from "react";

export const metadata = {
  title: 'Find Coworking & Office Spaces Across India | Flexo',
  description: "Discover top coworking spaces, managed offices, and commercial properties. Find your perfect office with Flexo. Trusted by leading companies - Flexo",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_WEBSITE_URL,
  },
};

const page = async () => {
  const res = await fetch(`${BASE_URL}/getAllActiveSpaceCategory`, {
    headers: {
      Accept: "application/json",
    },
    next: { revalidate: 3600 }
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status}`);
  }
  const data = await res.json();
  const spaceCategoryData =
    data?.map((item) => ({
      value: item?.id,
      label: item?.spaceType,
    })) || [];
  return (
    <>
      <Home spaceCategoryData={spaceCategoryData} />
    </>
  );
};

export default page;
