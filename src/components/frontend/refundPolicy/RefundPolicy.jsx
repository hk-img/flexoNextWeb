import Link from 'next/link'
import React from 'react'

const RefundPolicy = () => {
  return (
    <>
      <section className="bg-[#808080] h-64 flex justify-center items-center relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px]">
        <div className="container mx-auto text-center md:px-0 px-[15px]">
          <div className="w-full">
            <h1 className="text-[28px] text-white font-semibold uppercase">
              REFUND POLICY
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-white md:py-20 py-10 " >
        <div className=" max-w:[1224px] w-[92%] mx-auto px-[12px]">
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#000e54] text-lg underline font-semibold">
                For Hourly Bookings & Day Passes:
              </h3>
              <ul className="flex flex-col leading-[30px] text-[13px] text-[#777] list-disc font-normal">
                <li>Refunds and cancellations are subject to the cancellation policy of the space booked.</li>
                <li>Some spaces may offer full or partial refunds, while others may be non-refundable.</li>
                <li>In case of a no-show, refunds will not be issued.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[#000e54] text-lg underline font-semibold">
                For Subscription & Credit Packages (Hosts):
              </h3>
              <ul className="flex flex-col leading-[30px] text-[13px] text-[#777] list-disc font-normal">
                <li>Non-refundable once purchased</li>
                <li>Unused credits remain valid for the duration specified at the time of purchase..</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[#000e54] text-lg underline font-semibold">
                General Terms:
              </h3>
              <ul className="flex flex-col leading-[30px] text-[13px] text-[#777] list-disc font-normal">
                <li>Refunds (if applicable) are usually processed within 7 to 10 business days.</li>
                <li>Any disputes must be raised within 48 hours of the booking date.</li>
              </ul>
            </div>
          </div>
          <div className='py-12'>
            <p className="text-sm 2xl:text-base  text-[#777] font-medium leading-[1.5]">
                For any assistance, contact support@flexospaces.com
              </p>
          </div>
          <p className="text-sm 2xl:text-base font-medium leading-[1.5]">© Flexo Proptech Pvt Ltd. All rights reserved.</p>
        </div>
      </section>
    </>
  )
}

export default RefundPolicy
