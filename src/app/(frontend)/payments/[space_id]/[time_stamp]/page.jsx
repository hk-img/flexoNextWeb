import Payments from '@/components/frontend/payments/Payments';
import React from 'react'

const page = async({params}) => {
  const data = await params;
  const {space_id, time_stamp} = data;
  return (
    <>
      <Payments spaceId={space_id} timeStamp={time_stamp}/>
    </>
  )
}

export default page
