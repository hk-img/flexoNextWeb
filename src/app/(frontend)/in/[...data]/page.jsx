import Listing from '@/components/frontend/listing/Listing';
import React from 'react'

const page = async({params}) => {
  const slug = await params?.data || [];
  console.log(slug,"Rtyhrty");
  return (
    <>
      <Listing/>
    </>
  )
}

export default page
