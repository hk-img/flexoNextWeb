import Detail from "@/components/frontend/detail/Detail";
import { BASE_URL } from "@/services/ApiService";
import {
  convertSlugToCapitalLetter,
  convertSlugToSmallLetter,
  getTypeOfSpaceByWorkSpace,
} from "@/services/Comman";
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
  if (type == "coworking") {
    const [spaceTypeSlug, spaceSlug] = slug;
    spaceId = spaceSlug?.split("-").pop();
  } else {
    const [spaceTypeSlug, citySlug, locationSlug, spaceIdd] = slug;
    spaceId = spaceIdd;
  }
  const spaceDetails = await getSpaceDetails(spaceId);
  const payload = {
    spaceId: spaceId,
    city: spaceDetails?.spaceData?.contact_city_name,
    spaceType: spaceDetails?.spaceData?.spaceType,
    country: spaceDetails?.spaceData?.country,
  };
  let detailData = await getDetailData(payload);
  const reviews = await getReviewData(spaceId);
  let reviewData = reviews?.data?.reviews || [];
  return (
    <>
      <Detail detailData={detailData} reviewData={reviewData} />
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
  const payload = {
    spaceId: spaceId,
    city: spaceDetails?.spaceData?.contact_city_name,
    spaceType: spaceDetails?.spaceData?.spaceType,
    country: spaceDetails?.spaceData?.country,
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
