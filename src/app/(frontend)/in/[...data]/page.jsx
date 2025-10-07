import Listing from '@/components/frontend/listing/Listing';
import { BASE_URL } from '@/services/ApiService';
import { convertSlugToCapitalLetter, convertSlugToSmallLetter, getTypeOfSpaceByWorkSpace,coworkingTypes, convertSlugToAllCapitalLetter } from '@/services/Comman';
import React from 'react'

export async function generateMetadata({params}) {
  const data = await params;
  const slug = data?.data || [];
  const [spaceTypeSlug,citySlug,locationNameSlug] = slug;
  const spaceType = spaceTypeSlug == "coworking" ? "coworking space" : convertSlugToSmallLetter(spaceTypeSlug || "");
  const city = convertSlugToAllCapitalLetter(citySlug || "");
  const locationName = convertSlugToAllCapitalLetter(locationNameSlug || "");
  const type = getTypeOfSpaceByWorkSpace(spaceTypeSlug || "");
  let title = "";
  let description = "";
  if(locationNameSlug){
    if(type == "coworking"){
      title = `Best Coworking Space in ${locationName} | Book A Shared Office`;
      description = `Book coworking spaces in ${locationName}, ${city}.Compare prices and amenities of coworking spaces and get quotes. Free, fast and easy!`;
    }else if(type == "shortterm"){
      title = `${spaceType} in ${locationName} | Book Now`;
      description = `Book ${spaceType} in ${convertSlugToSmallLetter(locationNameSlug || "")}, ${city} Starting from Rs.20000 /hour. Compare prices, services and amenities. Explore available options now.`;
    }else{
      title = `Office Space for Rent in ${locationName}, ${city}`;
      description = `Find office space for rent in ${locationName}, ${city}. Choose from a variety of furnished, unfurnished, and custom-built options to suit your needs.`;
    }
  }else{
    if(type == "coworking"){
      title = `Best Coworking Space in ${city} (${new Date().getFullYear()}) | Compare & Book`;
      description = `Book coworking spaces in ${city} with flexible pricing and premium amenities at prime locations. Find your shared office fast and FREE with Flexo.`
    }else if(type == "shortterm"){
      title = `Book ${spaceType} in ${city} from Rs.20000 /hour`;
      description = `Book ${spaceType} in ${city} starting from Rs.20000 /hour. View images, amenities, pricing to find the best fit.Explore and book now!.`
    }else{
      title = `Office Space for Rent in ${city} | Managed Offices`;
      description = `Explore offices for rent in ${city}. Choose from a wide range of furnished, unfurnished, built-to-suit and managed office options.`
    }
  }
  const canonicalUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/in/${slug.join("/")}`;
  return {
    title:title,
    description:description,
    alternates: {
      canonical:canonicalUrl,
    },
  };
}


const getListingData = async (payload) => {
  const res = await fetch(`${BASE_URL}/spaces/getSpacesByCity`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return res.json();
};

const page = async({params}) => {
  const data = await params;
  const slug = data?.data || [];
  const [spaceTypeSlug,citySlug,locationNameSlug] = slug;

  const spaceType = convertSlugToCapitalLetter(spaceTypeSlug || "");
  const city = convertSlugToCapitalLetter(citySlug || "");
  const locationName = convertSlugToCapitalLetter(locationNameSlug || "");
  const type = getTypeOfSpaceByWorkSpace(spaceTypeSlug || "");

  async function fetchAPI1() {
    const res = await fetch(`${BASE_URL}/getAllActiveSpaceCategory`, {
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: 3600 }
    });
    return res.json();
  }
  async function fetchAPI2() {
    const res = await fetch(`${BASE_URL}/user/getAllLocations?spaceType=${spaceType}`,{
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: 3600 }
    });
    return res.json();
  }
  const payload = {
    cityId: city,
    spaceType: spaceTypeSlug == "coworking" ? "coworking space" : spaceTypeSlug?.replace(/-/g, " ")
  }
  async function fetchAPI3() {
    const res = await fetch(`${BASE_URL}/spaces/getNearBySpacesByCityId`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      next: { revalidate: 3600 },
    });
    return res.json();
  }
  const [data1,data2,data3] = await Promise.all([fetchAPI1(),fetchAPI2(),fetchAPI3()]);
  const otherTypes = convertSlugToSmallLetter(spaceTypeSlug || "");
  const listingPayload = {
    city_name: convertSlugToSmallLetter(city || ""),
    spaceType: type == "coworking" ? coworkingTypes : [otherTypes],
    "type": type,
    "userId": 0,
    "capacity": null,
    "min_price": null,
    "max_price": null,
    "amenities": [],
    "city_lat": 0,
    "city_long": 0,
    "location_lat": 19.1121947,
    "location_longi": 72.8792898,
    "page_no": 1,
    "location_name": convertSlugToSmallLetter(locationNameSlug || "") || null,
  }
  const listingData = await getListingData(listingPayload) || {};
  return (
    <>
      <Listing spaceTypeSlug={spaceTypeSlug} citySlug={citySlug} locationNameSlug={locationNameSlug} spaceType={spaceType} city={city} locationName = {locationName}  spaceCategoryData={data1} locationData = {data2} nearBySpacesData={data3} listingData={listingData}/>
    </>
  )
}

export default page
