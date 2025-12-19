import Detail from "@/components/frontend/detail/Detail";
import { BASE_URL, WEBSITE_BASE_URL } from "@/services/ApiService";
import {
  convertSlugToSmallLetter,
  getTypeOfSpaceByWorkSpace,
} from "@/services/Comman";
import { notFound } from "next/navigation";
import React from "react";

export const revalidate = 3600;
// force-static ko remove kiya - ISR use karega jo better hai
export const fetchCache = "force-cache";

async function getSpaceDetails(spaceId) {
  try {
    const res = await fetch(`${BASE_URL}/spaces/getSpaceDetails/${spaceId}`, {
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      // Only log in development
      if (process.env.NODE_ENV === 'development') {
        console.error("API error", res.status, await res.text());
      }
      return [];
    }
    return await res.json();
  } catch (error) {
    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      console.error("Fetch error:", error);
    }
    return [];
  }
}

async function getDetailData(payload) {
  try {
    const res = await fetch(
      `${BASE_URL}/spaces/details?spaceId=${payload?.spaceId}&city=${payload?.city}&spaceType=${payload?.spaceType}&country=${payload?.country}`,
      {
        headers: {
          Accept: "application/json",
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) {
      // Only log in development
      if (process.env.NODE_ENV === 'development') {
        console.error("API error", res.status, await res.text());
      }
      return [];
    }
    return await res.json();
  } catch (error) {
    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      console.error("Fetch error:", error);
    }
    return [];
  }
}

async function getReviewData(spaceId) {
  try {
    const res = await fetch(
      `${BASE_URL}/ratings/reviews/${spaceId}?sortBy=topRating`,
      {
        headers: {
          Accept: "application/json",
        },
        next: { revalidate: 600 },
      }
    );
    if (!res.ok) {
      // Only log in development
      if (process.env.NODE_ENV === 'development') {
        console.error("API error", res.status, await res.text());
      }
      return [];
    }
    return await res.json();
  } catch (error) {
    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      console.error("Fetch error:", error);
    }
    return [];
  }
}

const page = async ({ params }) => {
  const data = await params;
  const slug = data?.data || [];
  const [spaceTypeSlug] = slug;
  const type = getTypeOfSpaceByWorkSpace(spaceTypeSlug || "");
  let spaceId = "";
  if (slug?.length > 4) {
    return notFound();
  }
  if (type == "coworking") {
    const [spaceTypeSlug, spaceSlug] = slug;
    spaceId = spaceSlug?.split("-").pop();
  } else {
    const [spaceTypeSlug, citySlug, locationSlug, spaceIdd] = slug;
    spaceId = spaceIdd;
  }
  const [spaceDetails, reviews] = await Promise.all([
    getSpaceDetails(spaceId),
    getReviewData(spaceId),
  ]);
  const spaceDetailsData = spaceDetails?.spaceData;
  const payload = {
    spaceId: spaceId,
    city: spaceDetailsData?.contact_city_name,
    spaceType: spaceDetailsData?.spaceType,
    country: spaceDetailsData?.country,
  };
  let detailData = await getDetailData(payload);
  if (!detailData?.success) {
    return notFound();
  }
  let reviewData = reviews?.data?.reviews || [];
  const {
    spaceType,
    actual_name,
    contact_city_name,
    location_name,
    images,
    originalPrice,
    spaceStatus,
    days_open_string,
    mon_friday_opening_time,
    saturday_opening_time,
    mon_friday_closing_time,
    saturday_closing_time,
    privatecabin_price
  } = detailData?.data;
  const spaceTypeSmallLetter = convertSlugToSmallLetter(spaceType || "");
  const locationNameSmallLetter = convertSlugToSmallLetter(location_name || "");
  const actualNameSmallLetter = convertSlugToSmallLetter(actual_name || "");
  const spaceStatusSmallLetter = convertSlugToSmallLetter(spaceStatus || "");
  let minPrice = "";
  let maxPrice = "";
  let detail = "";
  if (type === "coworking") {
    minPrice = detailData?.data?.flexible_desk_price;
    maxPrice = detailData?.data?.privatecabin_price;
    detail = `Book your workspace at ${actualNameSmallLetter}, a fully furnished coworking space in ${locationNameSmallLetter}, ${contact_city_name}. With flexible membership plans, premium facilities, and a collaborative environment, it's the perfect place for freelancers, startups, and teams.`;
  } else if (type === "shortterm") {
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
    offer = "Offer";
  } else {
    offer = "AggregateOffer";
  }
  let jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: `${spaceTypeSmallLetter} in ${
      locationNameSmallLetter || "an unknown location"
    }`,
    image: images?.[0],
    description: detail,
    brand: {
      "@type": "Brand",
      name: "Flexo",
    },
    offers: {
      "@type": offer,
      url: `${WEBSITE_BASE_URL}/${slug.join("/")}`,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };
  if (maxPrice === "none") {
    jsonLd.offers.price = minPrice;
  } else {
    jsonLd.offers.lowPrice = minPrice;
    jsonLd.offers.highPrice = maxPrice;
  }
  const schema = {
    "@context": "http://schema.org",
    "@type": "Coworking Spaces",
    name: `${actual_name} ${location_name}`,
    telephone: `Call +91 95133 92400`,
    url: `${WEBSITE_BASE_URL}/${slug.join("/")}`,
    // image: `${images?.[0]}`,
    address: {
      "@type": "Address",
      location: `${location_name}`,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: `${days_open_string}`,
      },
      opens: {
        "Mon - Fri": `${mon_friday_opening_time}`,
        Sat: `${saturday_opening_time}`,
      },
      close: {
        "Mon - Fri": `${mon_friday_closing_time}`,
        Sat: `${saturday_closing_time}`,
      },
    },
    offers: {
      "@type": "AggregateOffer",
      price: `Rs. ${privatecabin_price}`,
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {
        type == "coworking" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )
      }
      <Detail
        slug={slug}
        spaceId={spaceId}
        spaceDetailsData={spaceDetailsData}
        detailData={detailData}
        reviewData={reviewData}
      />
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
  if (!detailData?.success) {
    return notFound();
  }
  const spaceType =
    spaceTypeSlug == "coworking"
      ? "coworking space"
      : convertSlugToSmallLetter(spaceTypeSlug || "");
  const { spaceTitle, actual_name, location_name, contact_city_name } =
    detailData?.data || {};
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
  const canonicalUrl = `${WEBSITE_BASE_URL}/${slug.join("/")}`;
  return {
    title: title,
    description: description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
