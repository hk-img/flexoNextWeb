import Svg from '@/components/svg'
import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
    return (
        <section className="relative py-16 my-8">
            <Image
                width={1526}
                height={539}
                src="/images/why-choose-flexo.webp"
                alt="Why choose Flexo"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#00000066] -z-10"></div>
            <div className='max-w-6xl xl:px-1 lg:px-10 md:px-6 px-4 mx-auto'>
                <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="text-white">
                        <h2 className="text-3xl md:text-[32px] font-medium mb-2">
                            Why choose <span className="text-orange-500">Flexo ?</span>
                        </h2>
                        <p className="mb-4 text-white text-sm">
                           We make your office-search, a hassle-less experience. With an in depth knowledge, let our workspace solution experts find what you're looking for
                        </p>
                        <div>
                            <a
                                href="#"
                                className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] font-semibold text-[#f76900] bg-[#0000006b] backdrop-blur-[12px] transition-all duration-500 hover:scale-105 text-sm hover:underline text-center"
                            >
                                Claim Your Free Consultation with Zero Brokerage Offer Now! 
                                <span className="transition-transform duration-300">
                                <Svg
                                    name="rightLongArrow"
                                    className="size-5 text-[#f76900]"
                                />
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-[#0000002b] backdrop-blur-[6px] rounded-lg p-5 shadow-[0_0_3px_#f7f7f7] text-center text-white hover:translate-y-[-10px] transition duration-500 ease-in-out">
                            <div className="mb-2 flex items-center justify-center">
                                <Svg name="shareYourRequirements" className="size-14 text-white"/>
                            </div>
                            <h3 className="text-[#f76900]">Tell Us Your Needs</h3>
                            <p className="text-sm text-white">
                                Share your requirements, and a dedicated workspace advisor will
                                handle the rest.
                            </p>
                        </div>

                         <div className="bg-[#0000002b] backdrop-blur-[6px] rounded-lg p-5 shadow-[0_0_3px_#f7f7f7] text-center text-white hover:translate-y-[-10px] transition duration-500 ease-in-out">
                            <div className="mb-2 flex items-center justify-center">
                                <Svg name="fastService" className="size-14 text-white"/>
                            </div>
                            <h3 className="text-[#f76900]">Fast & Efficient Service</h3>
                            <p className="text-sm text-white">
                               Experience a quick turnaround time and a smooth process from search to move-in.
                            </p>
                        </div>

                         <div className="bg-[#0000002b] backdrop-blur-[6px] rounded-lg p-5 shadow-[0_0_3px_#f7f7f7] text-center text-white hover:translate-y-[-10px] transition duration-500 ease-in-out">
                            <div className="mb-2 flex items-center justify-center">
                                <Svg name="largestCoverage" className="size-14 text-white"/>
                            </div>
                            <h3 className="text-[#f76900]">Largest Coverage</h3>
                            <p className="text-sm text-white">
                                Access 1800+ coworking spaces across India with Flexo's extensive network.
                            </p>
                        </div>
                         <div className="bg-[#0000002b] backdrop-blur-[6px] rounded-lg p-5 shadow-[0_0_3px_#f7f7f7] text-center text-white hover:translate-y-[-10px] transition duration-500 ease-in-out">
                            <div className="mb-2 flex items-center justify-center">
                                <Svg name="dedicatedAdvisor" className="size-14 text-white"/>
                            </div>
                            <h3 className="text-[#f76900]">Dedicated Workspace Experts</h3>
                            <p className="text-sm text-white">
                                Get personalized, support from experts for shortlisting, negotiating and finalizing your perfect office
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default WhyChooseUs
