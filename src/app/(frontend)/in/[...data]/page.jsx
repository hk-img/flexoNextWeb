import Listing from '@/components/frontend/listing/Listing';
import { BASE_URL } from '@/services/ApiService';
import React from 'react'

const page = async({params}) => {
  const slug = await params?.data || [];
  const [sapceType,city,locationName] = slug;
  console.log(slug,"Rtyhrty");
  async function fetchAPI1() {
    const res = await fetch(`${BASE_URL}/getAllActiveSpaceCategory`, {
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: 3600 }
    });
    return res.json();
  }
  const payload = {
    cityId: city,
    spaceType: sapceType?.replace(/-/g, " ")
  }
  async function fetchAPI2() {
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
  const [data1,data2] = await Promise.all([fetchAPI1(),fetchAPI2()]);
  return (
    <>
      <Listing sapceType={sapceType} city={city} locationName = {locationName} spaceCategoryData={data1} nearBySpacesData={data2}/>
    </>
  )
}

export default page
