import Svg from '@/components/svg'
import React from 'react'

 const OfficeSearch = () => {
  return (
    <section className="container px-[15px] mx-auto py-2.5">
        <div className="text-center mb-12">
             <h2 className="sm:text-[32px] text-2xl font-medium text-center text-[#333] leading-[1.2] tracking-normal">
                Your Office Search, Simplified By Experts
            </h2>
            <p className="lg:mt-[16px] mt-10 text-[#777] text-lg leading-[1.5] ">
            With over 1,000 businesses and professionals helped, we bring unmatched
            expertise and personalized service to every client.
            </p>
        </div>

        <div className="grid md:grid-cols-2 md:gap-x-[30px] md:gap-y-6 gap-4">
            <div className="relative flex flex-col items-start gap-1.5 rounded-md px-6 py-2 shadow-[0_0_3px_#fbb784]">
                <div className="lg:absolute top-1/2 lg:transform lg:-translate-y-1/2 -left-4.5 bg-white text-[#f76900] flex items-center justify-center w-[35px] h-[35px]  shadow-[0_0_3px_#f76900] rounded-full">
                    <Svg
                        name="check"
                        className="size-5 text-[#f76900]"
                        />
                </div>
                <div>
                    <h3 className="font-medium text-[#141414] text-base leading-[1.6] xl:pb-px ">Space shortlisting</h3>
                    <p className="text-[#777] text-sm leading-[1.5]">
                    We find the perfect office that suits your needs and budget.
                    </p>
                </div>
            </div>

            <div className="relative flex flex-col items-start gap-1.5 rounded-md px-6 py-2 shadow-[0_0_3px_#fbb784]">
                <div className="lg:absolute top-1/2 lg:transform lg:-translate-y-1/2 -left-4.5 bg-white text-[#f76900] flex items-center justify-center w-[35px] h-[35px]  shadow-[0_0_3px_#f76900] rounded-full">
                    <Svg
                        name="check"
                        className="size-5 text-[#f76900]"
                        />
                </div>
                <div>
                    <h3 className="font-medium text-[#141414] text-base leading-[1.6] xl:pb-px ">Personalized Tours</h3>
                    <p className="text-[#777] xl:text-sm text-sm leading-[1.5]">
                    Visit spaces that match your criteria—saving you time and effort.
                    </p>
                </div>
            </div>

            <div className="relative flex flex-col items-start gap-1.5 rounded-md px-6 py-2 shadow-[0_0_3px_#fbb784]">
                <div className="lg:absolute top-1/2 lg:transform lg:-translate-y-1/2 -left-4.5 bg-white text-[#f76900] flex items-center justify-center w-[35px] h-[35px]  shadow-[0_0_3px_#f76900] rounded-full">
                    <Svg
                        name="check"
                        className="size-5 text-[#f76900]"
                        />
                </div>
                <div>
                    <h3 className="font-medium text-[#141414] text-base leading-[1.6] xl:pb-px ">Smart Price Negotiation</h3>
                    <p className="text-[#777] xl:text-sm text-sm leading-[1.5]">
                   We secure the best deal, so you can focus on growing your business.
                    </p>
                </div>
            </div>

            <div className="relative flex flex-col items-start gap-1.5 rounded-md px-6 py-2 shadow-[0_0_3px_#fbb784]">
                <div className="lg:absolute top-1/2 lg:transform lg:-translate-y-1/2 -left-4.5 bg-white text-[#f76900] flex items-center justify-center w-[35px] h-[35px]  shadow-[0_0_3px_#f76900] rounded-full">
                    <Svg
                        name="check"
                        className="size-5 text-[#f76900]"
                        />
                </div>
                <div>
                    <h3 className="font-medium text-[#141414] text-base leading-[1.6] xl:pb-px ">Seamless Contract Handling</h3>
                    <p className="text-[#777] xl:text-sm text-sm leading-[1.5]">
                    From paperwork to move in, we make it effortless.
                    </p>
                </div>
            </div>
        </div>
    </section>

  )
}
export default OfficeSearch