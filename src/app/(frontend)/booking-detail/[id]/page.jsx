import BookingDetail from '@/components/frontend/bookingDetail/BookingDetail'
import React from 'react'

const page = async({params}) => {
  const {id} = await params;
  return (
    <>
      <BookingDetail bookingId={id}/>
    </>
  )
}

export default page
