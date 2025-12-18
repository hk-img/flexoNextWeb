import BookingDetail from "@/components/frontend/bookingDetail/BookingDetail";
import { WEBSITE_BASE_URL } from "@/services/ApiService";
import React from "react";
export async function generateMetadata({ params }) {
  const { id } = await params;
  return {
    title: "Find Coworking & Office Spaces Across India | Flexo",
    description:
      "Discover top coworking spaces, managed offices, and commercial properties. Find your perfect office with Flexo. Trusted by leading companies - Flexo",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${WEBSITE_BASE_URL}/booking-detail/${id}`,
    },
  };
}
const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <BookingDetail bookingId={id} />
    </>
  );
};

export default page;
