import Svg from '@/components/svg'
import React from 'react'

 const OfficeSearch = () => {
  return (
    <section className="max-w-6xl xl:px-1 lg:px-10 md:px-6 px-4 mx-auto py-8">
        <div className="text-center mb-10">
             <h2 className="md:text-[32px] text-xl font-medium text-center text-[#333] ">
                Your Office Search, Simplified By Experts
            </h2>
            <p className="mt-1 text-[#777] text-lg">
            With over 1,000 businesses and professionals helped, we bring unmatched
            expertise and personalized service to every client.
            </p>
        </div>

        <div className="grid md:grid-cols-2 md:gap-8 gap-4">
            <div className="relative flex flex-col items-start gap-2 rounded-md px-6 py-2 shadow-[0_0_3px_#fbb784]">
                <div className="md:absolute top-1/2 md:transform md:-translate-y-1/2 -left-5 bg-white text-[#f76900] flex items-center justify-center w-9 h-9  shadow-[0_0_3px_#f76900] rounded-full">
                    <Svg
                        name="check"
                        className="size-4 text-[#f76900]"
                        />
                </div>
                <div>
                    <h3 className="font-medium text-[#141414]">Space shortlisting</h3>
                    <p className="text-[#777] text-sm">
                    We find the perfect office that suits your needs and budget.
                    </p>
                </div>
            </div>

            <div className="relative flex flex-col items-start gap-2 rounded-md px-6 py-2 shadow-[0_0_3px_#fbb784]">
                <div className="md:absolute top-1/2 md:transform md:-translate-y-1/2 -left-5 bg-white text-[#f76900] flex items-center justify-center w-9 h-9  shadow-[0_0_3px_#f76900] rounded-full">
                    <Svg
                        name="check"
                        className="size-4 text-[#f76900]"
                        />
                </div>
                <div>
                    <h3 className="font-medium text-[#141414]">Personalized Tours</h3>
                    <p className="text-[#777] text-sm">
                    Visit spaces that match your criteria—saving you time and effort.
                    </p>
                </div>
            </div>

            <div className="relative flex flex-col items-start gap-2 rounded-md px-6 py-2 shadow-[0_0_3px_#fbb784]">
                <div className="md:absolute top-1/2 md:transform md:-translate-y-1/2 -left-5 bg-white text-[#f76900] flex items-center justify-center w-9 h-9  shadow-[0_0_3px_#f76900] rounded-full">
                    <Svg
                        name="check"
                        className="size-4 text-[#f76900]"
                        />
                </div>
                <div>
                    <h3 className="font-medium text-[#141414]">Smart Price Negotiation</h3>
                    <p className="text-[#777] text-sm">
                   We secure the best deal, so you can focus on growing your business.
                    </p>
                </div>
            </div>

            <div className="relative flex flex-col items-start gap-2 rounded-md px-6 py-2 shadow-[0_0_3px_#fbb784]">
                <div className="md:absolute top-1/2 md:transform md:-translate-y-1/2 -left-5 bg-white text-[#f76900] flex items-center justify-center w-9 h-9  shadow-[0_0_3px_#f76900] rounded-full">
                    <Svg
                        name="check"
                        className="size-4 text-[#f76900]"
                        />
                </div>
                <div>
                    <h3 className="font-medium text-[#141414]">Seamless Contract Handling</h3>
                    <p className="text-[#777] text-sm">
                    From paperwork to move in, we make it effortless.
                    </p>
                </div>
            </div>
        </div>
    </section>

  )
}
export default OfficeSearch