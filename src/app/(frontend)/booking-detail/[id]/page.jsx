import BookingDetail from '@/components/frontend/bookingDetail/BookingDetail'
import React from 'react'

const page = async({params}) => {
  const {id} = await params;
  console.log({id})
  return (
    <>
      <BookingDetail/>
    </>
  )
}

export default page
