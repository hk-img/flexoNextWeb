import Home from "@/components/frontend/home/Home";
import { BASE_URL, WEBSITE_BASE_URL } from "@/services/ApiService";
import React from "react";

export const metadata = {
  title: "Find Coworking & Office Spaces Across India | Flexo",
  description:
    "Discover top coworking spaces, managed offices, and commercial properties. Find your perfect office with Flexo. Trusted by leading companies - Flexo",
  alternates: {
    canonical: `${WEBSITE_BASE_URL}`,
  },
};

const getSpaceCategoryData = async (payload) => {
  try {
    const res = await fetch(`${BASE_URL}/getAllActiveSpaceCategory`, {
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      console.error("API error", res.status, await res.text());
      return [];
    }
    return await res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

const page = async () => {
  const data = await getSpaceCategoryData();
  const spaceCategoryData =
    data?.map((item) => ({
      value: item?.id,
      label: item?.spaceType,
    })) || [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Flexo",
    url: `${WEBSITE_BASE_URL}`,
    logo: `${WEBSITE_BASE_URL}/images/logo.webp`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9513392400",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/flexospaces",
      "https://twitter.com/flexospaces",
      "https://www.instagram.com/flexospaces",
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home spaceCategoryData={spaceCategoryData} />
    </>
  );
};

export default page;
