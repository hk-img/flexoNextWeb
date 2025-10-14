import Detail from "@/components/frontend/detail/Detail";
import { BASE_URL } from "@/services/ApiService";
import {
  convertSlugToSmallLetter,
  getTypeOfSpaceByWorkSpace,
} from "@/services/Comman";
import { notFound } from "next/navigation";
import React from "react";

async function getSpaceDetails(spaceId) {
  const res = await fetch(`${BASE_URL}/spaces/getSpaceDetails/${spaceId}`, {
    cache: "no-store",
  });
  return res.json();
}

async function getDetailData(payload) {
  const res = await fetch(
    `${BASE_URL}/spaces/details?spaceId=${payload?.spaceId}&city=${payload?.city}&spaceType=${payload?.spaceType}&country=${payload?.country}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

async function getReviewData(spaceId) {
  const res = await fetch(
    `${BASE_URL}/ratings/reviews/${spaceId}?sortBy=topRating`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

const page = async ({ params }) => {
  const data = await params;
  const slug = data?.data || [];
  const [spaceTypeSlug] = slug;
  const type = getTypeOfSpaceByWorkSpace(spaceTypeSlug || "");
  let spaceId = "";
  if(slug?.length > 4){
    return notFound();
  }
  if (type == "coworking") {
    const [spaceTypeSlug, spaceSlug] = slug;
    spaceId = spaceSlug?.split("-").pop();
  } else {
    const [spaceTypeSlug, citySlug, locationSlug, spaceIdd] = slug;
    spaceId = spaceIdd;
  }
  const spaceDetails = await getSpaceDetails(spaceId);
  const spaceDetailsData = spaceDetails?.spaceData;
  const payload = {
    spaceId: spaceId,
    city: spaceDetailsData?.contact_city_name,
    spaceType: spaceDetailsData?.spaceType,
    country: spaceDetailsData?.country,
  };
  let detailData = await getDetailData(payload);
  const reviews = await getReviewData(spaceId);
  let reviewData = reviews?.data?.reviews || [];
  const {spaceType,actual_name,contact_city_name,location_name,images,originalPrice,spaceStatus} = detailData?.data;
  const spaceTypeSmallLetter = convertSlugToSmallLetter(spaceType || "");
  const locationNameSmallLetter = convertSlugToSmallLetter(location_name || "");
  const actualNameSmallLetter = convertSlugToSmallLetter(actual_name || "");
  const spaceStatusSmallLetter = convertSlugToSmallLetter(spaceStatus || "");
  let minPrice = ""
  let maxPrice = ""
  let detail = "";
  if (type === 'coworking') {
    minPrice = detailData?.data?.flexible_desk_price
    maxPrice = detailData?.data?.privatecabin_price;
    detail = `Book your workspace at ${actualNameSmallLetter}, a fully furnished coworking space in ${locationNameSmallLetter}, ${contact_city_name}. With flexible membership plans, premium facilities, and a collaborative environment, it's the perfect place for freelancers, startups, and teams.`;
  } else if (type === 'shortterm') {
    minPrice = originalPrice;
    maxPrice = "none";
    detail = `Reserve this ${spaceTypeSmallLetter} at, located in ${locationNameSmallLetter}, ${contact_city_name}. Available by the hour, this space offers top-notch amenities, flexible bookings, and a professional setup perfect for your next project, event or activity.`;
  } else {
    minPrice = originalPrice;
    maxPrice = "none";
    detail = `Rent your ${spaceTypeSmallLetter}, at ${locationNameSmallLetter}, ${contact_city_name}. This ${spaceStatusSmallLetter} office is listed at Rs. ${originalPrice}/month. Get in touch with Flexo now to schedule your visit`;
  }
 
  let offer = "";
  if (maxPrice === "none") {
    offer = "Offer"
  } else {
    offer = "AggregateOffer"
  }
  let jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": `${spaceTypeSmallLetter} in ${locationNameSmallLetter || 'an unknown location'}`,
    "image": images?.[0],
    "description": detail,
    "brand": {
      "@type": "Brand",
      "name": "Flexo"
    },
    "offers": {
      "@type": offer,
      "url": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${slug.join("/")}`,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };
  if (maxPrice === "none") {
    jsonLd.offers.price = minPrice;
  } else {
    jsonLd.offers.lowPrice = minPrice;
    jsonLd.offers.highPrice = maxPrice;
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Detail slug={slug} spaceId={spaceId} spaceDetailsData={spaceDetailsData} detailData={detailData} reviewData={reviewData} />
    </>
  );
};

export default page;

export async function generateMetadata({ params }) {
  const data = await params;
  const slug = data?.data || [];
  const [spaceTypeSlug] = slug;
  const type = getTypeOfSpaceByWorkSpace(spaceTypeSlug || "");
  let spaceId = "";
  if (type == "coworking") {
    const [spaceTypeSlug, spaceSlug] = slug;
    spaceId = spaceSlug?.split("-").pop();
  } else {
    const [spaceTypeSlug, citySlug, locationSlug, spaceIdd] = slug;
    spaceId = spaceIdd;
  }
  const spaceDetails = await getSpaceDetails(spaceId);
  const spaceDetailsData = spaceDetails?.spaceData;
  const payload = {
    spaceId: spaceId,
    city: spaceDetailsData?.contact_city_name,
    spaceType: spaceDetailsData?.spaceType,
    country: spaceDetailsData?.country,
  };
  let detailData = await getDetailData(payload);
  const spaceType = spaceTypeSlug == "coworking" ? "coworking space" : convertSlugToSmallLetter(spaceTypeSlug || "");
  const {
    spaceTitle,
    actual_name,
    location_name,
    contact_city_name,
  } = detailData?.data || {};
  let title = "";
  let description = "";
  if (type == "coworking") {
    title = `${actual_name} ${location_name} - ${spaceType} | Pricing - FLEXO`;
    description = `Discover ${actual_name}, ${location_name}, a coworking space with modern amenities and great pricing, Get customised quotes today!`;
  } else if (type == "shortterm") {
    title = `${spaceTitle} at ${location_name}, ${contact_city_name}`;
    description = `Book ${spaceTitle} at ${location_name}, ${contact_city_name} for Rs.2000 /hour on FLEXO.`;
  } else {
    title = `${spaceType} for Rent at ${location_name}, ${contact_city_name}`;
    description = `Rent ${spaceTitle} at ${location_name}, ${contact_city_name} for Rs.2000 /month`;
  }
  const canonicalUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${slug.join("/")}`;
  return {
    title: title,
    description: description,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
