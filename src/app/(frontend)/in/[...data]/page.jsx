import Listing from '@/components/frontend/listing/Listing';
import { BASE_URL } from '@/services/ApiService';
import { convertSlugToCapitalLetter } from '@/services/Comman';
import React from 'react'

const page = async({params}) => {
  const slug = await params?.data || [];
  const [spaceType,city,locationName] = slug;
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
    const capitalSpaceType = convertSlugToCapitalLetter(spaceType || "");
    const res = await fetch(`${BASE_URL}/user/getAllLocations?spaceType=${capitalSpaceType}`,{
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: 3600 }
    });
    return res.json();
  }
  const payload = {
    cityId: city,
    spaceType: spaceType == "coworking" ? "coworking space" : spaceType?.replace(/-/g, " ")
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
      <Listing spaceType={spaceType} city={city} locationName = {locationName} spaceCategoryData={data1} locationData = {data2} nearBySpacesData={data3}/>
    </>
  )
}

export default page
