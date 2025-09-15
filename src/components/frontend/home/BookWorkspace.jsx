import Image from 'next/image';
import React from 'react'

const BookWorkspace = () => {
    return (
        <div className="max-w-6xl xl:px-[21px] lg:px-10 md:px-6 px-6 mx-auto md:pt-4 ">
            <div>
                <section className="container mx-auto md:px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-2xl md:text-[27px] font-normal mb-10">
                                Find and <span className="text-[#f76900]">Book</span> Your Perfect Workspace in 4
                                Easy Steps With <span className="text-[#f76900] font-bold">Flexo</span>
                            </h2>

                            <div className="space-y-2">
                                <div className="flex md:flex-row flex-col items-start gap-3 rounded-[7px] rounded-br-none p-4 shadow-[0_0_3px_#7a7a7a]  relative">
                                    <div>
                                        <span className="md:absolute -top-5 -left-5 bg-gradient-to-br from-[rgb(81,49,18)] to-[rgb(247,105,0)] text-white w-10 h-10 flex items-center justify-center rounded-[7px] rounded-br-none font-medium text-[17px]">1</span>
                                    </div>
                                    <div>
                                        <h6 className="font-medium text-base text-[#f76900]">Share Your Requirements</h6>
                                        <p className="text-[#777] text-sm">Tell us your needs and a dedicated advisor will handle the rest.</p>
                                    </div>
                                </div>

                                <div className="flex md:flex-row flex-col items-start gap-3 rounded-[7px] rounded-br-none p-4 shadow-[0_0_3px_#7a7a7a]  relative">
                                    <div>
                                        <span className="md:absolute -top-5 -left-5 bg-gradient-to-br from-[rgb(81,49,18)] to-[rgb(247,105,0)] text-white w-10 h-10 flex items-center justify-center rounded-[7px] rounded-br-none font-medium text-[17px]">2</span>
                                    </div>
                                    <div>
                                        <h6 className="font-medium text-base text-[#f76900]">Get Space Options and Personalised Tours</h6>
                                        <p className="text-[#777] text-sm">Shortlist and take guided tours of your favorite options.</p>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col items-start gap-3 rounded-[7px] rounded-br-none p-4 shadow-[0_0_3px_#7a7a7a]  relative">
                                    <div>
                                        <span className="md:absolute -top-5 -left-5 bg-gradient-to-br from-[rgb(81,49,18)] to-[rgb(247,105,0)] text-white w-10 h-10 flex items-center justify-center rounded-[7px] rounded-br-none font-medium text-[17px]">3</span>
                                    </div>
                                    <div>
                                        <h6 className="font-medium text-base text-[#f76900]">We Negotiate, You Save</h6>
                                        <p className="text-[#777] text-sm">We leverage our relationships to help you secure the best terms.</p>
                                    </div>
                                </div>

                                <div className="flex md:flex-row flex-col items-start gap-3 rounded-[7px] rounded-br-none p-4 shadow-[0_0_3px_#7a7a7a]  relative">
                                    <div>
                                        <span className="md:absolute -top-5 -left-5 bg-gradient-to-br from-[rgb(81,49,18)] to-[rgb(247,105,0)] text-white w-10 h-10 flex items-center justify-center rounded-[7px] rounded-br-none font-medium text-[17px]">4</span>
                                    </div>
                                    <div>
                                        <h6 className="font-medium text-base text-[#f76900]">Move-In Quickly and Get To Work</h6>
                                        <p className="text-[#777] text-sm">Finalize the agreement and move-in, hassle-free.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button className="cursor-pointer relative w-full overflow-hidden rounded-sm font-semibold text-white hover:text-[#f76900] py-2 z-10 bg-transparent border-2 border-[#f76900] before:absolute before:inset-0 before:w-full before:bg-[#f76900] before:transition-all before:duration-500 before:origin-right hover:before:w-0 before:-z-10">
                                    Connect with a Workspace Expert Today
                                </button>
                            </div>
                        </div>

                        <div>
                            <Image width={500} height={500} src="/images/find-work-space-1.webp" alt="Workspace"  title="Workspace"className="rounded-[7px] w-full object-cover h-[544px]" />
                        </div>
                    </div>
                </section>
                <section className='mx-auto md:px-4 text-center'>
                    <div>
                        <div>
                            <h2 className="md:text-[32px] text-xl font-medium text-center text-[#333]"> India's Premier Marketplace for <span className="text-[#f76900]">Flexible Workspaces</span></h2>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8.5">
                            <div className='text-center'>
                                <h2 className="md:text-3xl text-[23px] md:text-[40px] text-[#f76900] font-medium">1800+</h2>
                                <h5 className="text-[#141414] font-medium mt-1 text-base">Partner Spaces</h5>
                            </div>

                            <div className='text-center'>
                                <h2 className="md:text-3xl text-[23px] md:text-[40px] text-[#f76900] font-medium">1000+</h2>
                                <h5 className="text-[#141414] font-medium mt-1 text-base">Clients Served</h5>
                            </div>

                            <div className='text-center'>
                                <h2 className="md:text-3xl text-[23px] md:text-[40px] text-[#f76900] font-medium">20+</h2>
                                <h5 className="text-[#141414] font-medium mt-1 text-base">Cities Across India</h5>
                            </div>

                            <div className='text-center'>
                                <h2 className="md:text-3xl text-[23px] md:text-[40px] text-[#f76900] font-medium">25 million+</h2>
                                <h5 className="text-[#141414] font-medium mt-1 text-base">Sqft of Office Space Options</h5>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default BookWorkspace;