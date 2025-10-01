import Listing from '@/components/frontend/listing/Listing';
import { BASE_URL } from '@/services/ApiService';
import { convertSlugToCapitalLetter } from '@/services/Comman';
import React from 'react'

const page = async({params}) => {
  const slug = await params?.data || [];
  const [spaceTypeSlug,citySlug,locationNameSlug] = slug;

  const spaceType = convertSlugToCapitalLetter(spaceTypeSlug || "");
  const city = convertSlugToCapitalLetter(citySlug || "");
  const locationName = convertSlugToCapitalLetter(locationNameSlug || "");
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
  return (
    <>
      <Listing spaceTypeSlug={spaceTypeSlug} citySlug={citySlug} locationNameSlug={locationNameSlug} spaceType={spaceType} city={city} locationName = {locationName}  spaceCategoryData={data1} locationData = {data2} nearBySpacesData={data3}/>
    </>
  )
}

export default page
