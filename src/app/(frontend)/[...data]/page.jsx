import Detail from "@/components/frontend/detail/Detail";
import { BASE_URL } from "@/services/ApiService";
import React from "react";

async function getSpaceDetails(spaceId) {
  const res = await fetch(`${BASE_URL}/spaces/getSpaceDetails/${spaceId}`, {
    cache: "no-store", 
  });
  return res.json();
}

async function getDetailData(payload) {
  const res = await fetch(`${BASE_URL}/spaces/details?spaceId=${payload?.spaceId}&city=${payload?.city}&spaceType=${payload?.spaceType}&country=${payload?.country}`, {
    cache: "no-store",
  });
  return res.json();
}

const page = async ({ params }) => {
  const slug = (await params?.data) || [];
  console.log({ slug });
  const [spaceType,spaceSlug] = slug;
  const spaceId = spaceSlug?.split("-").pop();
  const spaceDetails = await getSpaceDetails(spaceId);
  const payload = {
    spaceId: spaceId,
    city: spaceDetails?.spaceData?.contact_city_name,
    spaceType: spaceDetails?.spaceData?.spaceType,
    country: spaceDetails?.spaceData?.country,
  }
  const detailData = await getDetailData(payload);
  return (
    <>
      <Detail detailData={detailData}/>
    </>
  );
};

export default page;
