import Listing from "@/components/frontend/listing/Listing";
import { BASE_URL, WEBSITE_BASE_URL, IMAGE_BASE_URL } from "@/services/ApiService";
import {
  convertSlugToCapitalLetter,
  convertSlugToSmallLetter,
  getTypeOfSpaceByWorkSpace,
  coworkingTypes,
  convertSlugToAllCapitalLetter,
} from "@/services/Comman";
import { notFound } from "next/navigation";
import React from "react";

export const revalidate = 3600;
// force-static ko remove kiya - ISR use karega jo better hai
// dynamic content ke liye force-static problematic ho sakta hai
export const fetchCache = "force-cache";

export async function generateMetadata({ params }) {
  const data = await params;
  const slug = data?.data || [];
  const [spaceTypeSlug, citySlug, locationNameSlug] = slug;
  const decodedSlug = decodeURIComponent(spaceTypeSlug || "");
  if (!citySlug && !locationNameSlug) return notFound();
  const spaceType =
      decodedSlug == "coworking"
      ? "coworking space"
      : decodedSlug == "coworking-café-restaurant" ? "coworking café restaurant" : convertSlugToSmallLetter(decodedSlug || "");
  const city = convertSlugToAllCapitalLetter(citySlug || "");
  const locationName = convertSlugToAllCapitalLetter(locationNameSlug || "");
  const type = decodedSlug == "coworking-café-restaurant" ? "shortterm" : getTypeOfSpaceByWorkSpace(decodedSlug || "");
  let title = "";
  let description = "";
  if (locationNameSlug) {
    if (type == "coworking") {
      title = `Best Coworking Space in ${locationName} | Book A Shared Office`;
      description = `Book coworking spaces in ${locationName}, ${city}.Compare prices and amenities of coworking spaces and get quotes. Free, fast and easy!`;
    } else if (type == "shortterm") {
      title = `${spaceType} in ${locationName} | Book Now`;
      description = `Book ${spaceType} in ${convertSlugToSmallLetter(
        locationNameSlug || ""
      )}, ${city} Starting from Rs.20000 /hour. Compare prices, services and amenities. Explore available options now.`;
    } else {
      title = `Office Space for Rent in ${locationName}, ${city}`;
      description = `Find office space for rent in ${locationName}, ${city}. Choose from a variety of furnished, unfurnished, and custom-built options to suit your needs.`;
    }
  } else {
    if (type == "coworking") {
      title = `Best Coworking Space in ${city} (${new Date().getFullYear()}) | Compare & Book`;
      description = `Book coworking spaces in ${city} with flexible pricing and premium amenities at prime locations. Find your shared office fast and FREE with Flexo.`;
    } else if (type == "shortterm") {
      title = `Book ${spaceType} in ${city} from Rs.20000 /hour`;
      description = `Book ${spaceType} in ${city} starting from Rs.20000 /hour. View images, amenities, pricing to find the best fit.Explore and book now!.`;
    } else {
      title = `Office Space for Rent in ${city} | Managed Offices`;
      description = `Explore offices for rent in ${city}. Choose from a wide range of furnished, unfurnished, built-to-suit and managed office options.`;
    }
  }
  const canonicalUrl = `${WEBSITE_BASE_URL}/in/${slug.join("/")}`;
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

async function fetchAPI1() {
  try {
    const res = await fetch(`${BASE_URL}/getAllActiveSpaceCategory`, {
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
async function fetchAPI2(spaceType) {
  try {
    const res = await fetch(
      `${BASE_URL}/user/getAllLocations?spaceType=${spaceType}`,
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
async function getNearBySpaceData(payload) {
  try {
    const res = await fetch(`${BASE_URL}/spaces/getNearBySpacesByCityId`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      next: { revalidate: 300 }
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
const getListingData = async (payload) => {
  try {
    const res = await fetch(`${BASE_URL}/spaces/getSpacesByCity`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      next: { revalidate: 300 }
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
};

export function stripTags(html) {
  if (!html) return "";
  if (typeof window !== "undefined") {
    const div = document.createElement("div");
    div.innerHTML = html;
    return (div.textContent || div.innerText || "").trim();
  }
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}
const page = async ({ params }) => {
  const data = await params;
  const slug = data?.data || [];
  const [spaceTypeSlug, citySlug, locationNameSlug] = slug;
  const decodedSlug = decodeURIComponent(spaceTypeSlug || "");
  if (!citySlug && !locationNameSlug) return notFound();
  const spaceType = decodedSlug == "coworking-café-restaurant" ? "Coworking Café Restaurant" : convertSlugToCapitalLetter(decodedSlug || "");
  const city = convertSlugToCapitalLetter(citySlug || "");
  const locationName = convertSlugToCapitalLetter(locationNameSlug || "");
  const type = decodedSlug == "coworking-café-restaurant" ? "shortterm" : getTypeOfSpaceByWorkSpace(decodedSlug || "");
  const payload = {
    cityId: city,
    spaceType:
      decodedSlug == "coworking"
        ? "coworking space"
        : decodedSlug == "coworking-café-restaurant" ? "coworking café restaurant" : decodedSlug?.replace(/-/g, " "),
  };
  const nearBySpacesData = await getNearBySpaceData(payload);
  const selectedSpace = nearBySpacesData?.find(
    (space) =>
      space?.location_name?.toLowerCase() == locationName?.toLowerCase()
  );
  const otherTypes = decodedSlug == "coworking-café-restaurant" ? "Coworking Café/Restaurant" : convertSlugToSmallLetter(decodedSlug || "");
  const listingPayload = {
    city_name: convertSlugToSmallLetter(city || ""),
    spaceType: type == "coworking" ? coworkingTypes : [otherTypes],
    type: type,
    userId: 0,
    capacity: null,
    min_price: null,
    max_price: null,
    amenities: [],
    city_lat: 0,
    city_long: 0,
    location_lat: selectedSpace?.lat || 0,
    location_longi: selectedSpace?.longi || 0,
    page_no: 1,
    location_name: convertSlugToSmallLetter(locationNameSlug || "") || null,
  };
  const [data1, data2, listingData] = await Promise.all([
    fetchAPI1(),
    fetchAPI2(spaceType),
    getListingData(listingPayload),
  ]);
  // if (listingData?.data?.length <= 0) return notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: listingData?.faqs?.map(
      (faq) =>
        ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: stripTags(faq.answer),
          },
        } || [])
    ),
  };
  let detail = "";
  let minPrice = 0;
  let maxPrice = 0;
  if (type == "coworking") {
    const flexiblePrices = listingData?.data
    ?.map((item) => Number(item?.flexible_desk_price))
    ?.filter((price) => !isNaN(price) && price !== null && price > 0);

    const privateCabinPrices = listingData?.data
      ?.map((item) => Number(item?.privatecabin_price))
      ?.filter((price) => !isNaN(price) && price !== null && price > 0);
    minPrice = flexiblePrices?.length ? Math.min(...flexiblePrices) : 0;
    maxPrice = privateCabinPrices?.length ? Math.max(...privateCabinPrices) : 0;
    detail = locationName ? 
    `Book coworking spaces in ${locationName}, ${city} that offer fully serviced offices with flexible terms, high-speed internet, and community-driven workspaces. Enjoy a productive environment with a range of coworking options on Flexo, from open desks to private cabins.`:
    `Book premium ${spaceType == "Coworking" ? "Coworking Spaces" : spaceType} in ${city} with flexible pricing options, prime locations, and modern amenities. Explore top coworking brands on Flexo for shared offices, private cabins, and collaborative work environments designed for businesses of all sizes.`;
  } else if (type == "shortterm") {
    const orignalPrices = listingData?.data
      ?.map((item) => Number(item?.originalPrice))
      ?.filter((price) => !isNaN(price) && price !== null && price > 0);
    minPrice = orignalPrices?.length ? Math.min(...orignalPrices) : 0;
    maxPrice = orignalPrices?.length ? Math.max(...orignalPrices) : 0;
    detail = locationName ? 
    `Book the best ${spaceType == "Coworking" ? "Coworking Spaces" : spaceType} in ${locationName}, ${city} with premium equipments and modern amenities. Find spaces available for reservation by the hour with a variety of setups for your needs. Create, collaborate and celebrate with Flexo.`:
    `Book the best ${spaceType == "Coworking" ? "Coworking Spaces" : spaceType} in ${city} with premium equipments and modern amenities. Find spaces available for reservation by the hour with a variety of setups for your needs. Create, collaborate and celebrate with Flexo.`;
  } else {
    const orignalPrices = listingData?.data
      ?.map((item) => Number(item?.originalPrice))
      ?.filter((price) => !isNaN(price) && price !== null && price > 0);
    minPrice = orignalPrices?.length ? Math.min(...orignalPrices) : 0;
    maxPrice = orignalPrices?.length ? Math.max(...orignalPrices) : 0;
    detail = locationName ? `Explore ${spaceType == "Coworking" ? "Coworking Spaces" : spaceType} for rent in ${locationName}, ${city} with options ranging from furnished and unfurnished offices to managed spaces. Expert advise and local knowledge make it easy to find your perfect office.`:
    `Explore a variety of ${spaceType == "Coworking" ? "Coworking Spaces" : spaceType} for rent in ${city}. Choose from fully furnished, unfurnished, or built-to-suit options designed to accommodate growing businesses. Find the perfect office with Flexo today.`;
  }
  const jsonLd2 = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: locationName
      ? `${spaceType == "Coworking" ? "Coworking Spaces" : spaceType} in ${locationName}, ${city}`
      : `${spaceType == "Coworking" ? "Coworking Spaces" : spaceType} in ${city}`,
    image: listingData?.data?.[0]?.images?.[0],
    description: detail,
    brand: {
      "@type": "Brand",
      name: "Flexo",
    },
    offers: {
      "@type": "AggregateOffer",
      url: `${WEBSITE_BASE_URL}/in/${slug.join("/")}`,
      priceCurrency: "INR",
      lowPrice: minPrice,
      highPrice: maxPrice,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };
  const schemaData = {
    "@context": "http://schema.org",
    "@type": `${spaceType == "Coworking" ? "Coworking Spaces" : spaceType}`,
    name: `${spaceType === "Coworking" ? "Coworking Spaces" : spaceType} in ${locationName ? locationName + " " : ""}${city}`,
    telephone: "Call +91 95133 92400",
    url: `${WEBSITE_BASE_URL}/in/${slug.join("/")}`,
  };
  // Preload LCP image for faster rendering - reduce element render delay
  const lcpImage = listingData?.data?.[0]?.images?.[0];
  const lcpImageUrl = lcpImage?.startsWith("http") || lcpImage?.startsWith("/")
    ? lcpImage
    : lcpImage
    ? `${IMAGE_BASE_URL}/${lcpImage}`
    : null;

  return (
    <>
      {/* Preload LCP image to reduce element render delay (currently 520ms) */}
      {lcpImageUrl && (
        <link
          rel="preload"
          as="image"
          href={lcpImageUrl}
          fetchPriority="high"
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
      />
      <Listing
        spaceTypeSlug={decodedSlug}
        citySlug={citySlug}
        locationNameSlug={locationNameSlug}
        spaceType={spaceType}
        city={city}
        locationName={locationName}
        spaceCategoryData={data1}
        locationData={data2}
        nearBySpacesData={nearBySpacesData}
        listingData={listingData}
      />
    </>
  );
};

export default page;
