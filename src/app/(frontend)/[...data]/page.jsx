import Detail from "@/components/frontend/detail/Detail";
import React from "react";

const page = async ({ params }) => {
  const slug = (await params?.data) || [];
  console.log(slug, "Rtyhrhhhhhty");
  return (
    <>
      <Detail />
    </>
  );
};

export default page;
