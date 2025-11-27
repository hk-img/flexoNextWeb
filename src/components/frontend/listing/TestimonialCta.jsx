import React from "react";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";
import Image from "next/image";
import Svg from "@/components/svg";

const testimonials = [
  {
    name: "Ritesh Singh",
    designation: "Admin Manager",
    company: "Kennect Technologies",
    img: "/images/testimonial.webp",
    rating: 5,
    review:
      " Flexo provided us with multiple office location suggestions, which greatly helped us in selecting the perfect office based on our needs. With Flexo, we didn’t face any issues at all. In fact, it made our work easier and helped us find an office that perfectly matched our requirements. Their team provided excellent support throughout the process, guiding us with the right options and making the experience smooth and hassle-free. What made us choose Flexo over other options was that Flexo offered multiple office choices, a seamless process, and excellent support, making it the best fit for our needs. I would definitely recommend Flexo to others because of its multiple office options, and excellent support, making finding the perfect space effortless.  ",
  },
  {
    name: "Abhinav Jain",
    designation: "Founder",
    company: "Shop 101 (Acquired by Glance InMobi)",
    img: "/images/abhinavjain.webp",
    rating: 5,
    review:
      "We were in urgent need of flex space for some of our teams. We communicated our needs to Flexo assuming that it would be a time-consuming process. However, we were delighted as the perfect space was found and booked within 24 hours and our teams started working there the very next day. Flexo’s knowledge of the flex space market and speed of execution is impressive. Highly recommend Flexo for finding and booking flex space. ",
  },
  {
    name: "Rakhshin Patel",
    designation: "Managing Director",
    company: "Pi Communications",
    img: "/images/rakhshin.webp",
    rating: 4,
    review:
      "When we took a decision to move into a co-working space, we could not have found a better guide and friend than Flexo. Conversations with them helped us validate in our minds the benefits of such a move.Their team took care to understand our requirements and they helped us through the entire journey of negotiations, standing by us to get us better benefits. A potentially exhausting process was wrapped up in two days with efficiency and empathy. ",
  },
  {
    name: " Ameet Zaverii",
    designation: "Co-Founder & CEO",
    company: "Get Set Learn (An Arvind Mafatlal Group Company)",
    img: "/images/ameet.webp",
    rating: 5,
    review:
      "Finding meeting rooms for our team meetings was becoming a challenge for us. We talked to a couple of spaces but couldn't find what we were looking for. Then we approached Flexo with our requirements and in no time, our ideal meeting rooms were booked at very good discounts. The meeting rooms were fully equipped and everything that was promised was delivered. We will definitely use Flexo again for our flexible workspace requirements. ",
  },
];

const TestimonialCta = ({ setIsOpen, type }) => {
  return (
    <section className="w-full relative md:py-3 py-1 px-4 rounded-2xl items-center mt-6 mb-8 shadow-[0_4px_10px_#00000014] mx-auto bg-no-repeat bg-cover overflow-hidden h-full">
      {/* === Blob Backgrounds === */}
      <div className="absolute inset-0 -z-0 overflow-hidden">
        {/* Orange Blob */}
        <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-[#7bb3ff3b] blur-3xl rounded-[60%] [clip-path:circle(50%_at_30%_50%)]"></div>
        {/* Blue Blob */}
        <div className="absolute bottom-[-325px] right-[-241px] w-[600px] h-[600px] bg-[#7bb3ff3b] blur-3xl rounded-[60%] [clip-path:circle(50%_at_70%_60%)]"></div>
      </div>

      <div className="max-w-full xl:px-4 lg:px-4 md:px-3 px-4 md:py-0 py-4 mx-auto relative z-10">
        <h2 className="text-2xl text-black font-bold mb-2 md:hidden block text-center ">
          Client's Testimonials
        </h2>
        <div className="flex md:flex-row flex-col items-center md:gap-4">
          <div className="md:w-2/5 w-full order-last md:text-start text-center">
            <div className="flex flex-col gap-y-4">
              <span className="text-[#000d54] text-4xl font-bold md:block hidden">
                <Svg name="quots" className="w-5 h-5 rotate-180" />
              </span>
              <h2 className="text-2xl text-black font-bold  md:block hidden">
                Client's Testimonials
              </h2>
              <h5 className="text-sm/relaxed text-black font-bold">
                Still Searching? Let Us Help.
              </h5>
              {/* <h5 className="text-sm/relaxed text-black">
                Leave the hassle to us. Connect with an expert workspace advisor
                today.
              </h5> */}
              {type !== "shortterm" && (
                <div
                  onClick={() => setIsOpen(true)}
                  className="w-fit bg-[#000d54] text-[12px] border border-[#000d54] text-white py-3 px-7 rounded-2xl font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer md:mx-0 mx-auto"
                >
                  Enquire Now
                </div>
              )}
            </div>
          </div>

          <div className="md:w-3/5 w-full flex flex-col gap-y-6">
            <div className="w-full [&_.embla__arrows]:hidden sm:[&_.embla__arrows]:flex [&_.embla__dots]:flex sm:[&_.embla__dots]:hidden [&_.embla__button]:w-10 [&_.embla__button]:h-10 [&_.embla__button_svg]:w-4.5 [&_.embla__button_svg]:h-4.5">
              <EmblaCarousel
                options={{
                  loop: true,
                  autoplay: true,
                  align: "start",
                  showDots: false,
                }}
              >
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="embla__slide shrink-0 lg:px-4 sm:px-3 px-1 basis-full pt-8 md:pb-6 pb-3"
                  >
                    <div className="relative flex flex-col items-start gap-y-3">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={t.img}
                          alt={t.name}
                          width={110}
                          height={110}
                          className="w-[90px] h-[90px] rounded-full p-2 border border-[#000d54] object-cover"
                        />

                        <div>
                          <h6 className="text-base text-black font-semibold">
                            {t.name},
                            <span className="ms-1 text-base text-black font-semibold">
                              {t.designation}
                            </span>
                          </h6>
                          <p className="text-[13px] font-semibold text-black">
                            {t.company}
                          </p>
                          <div className="flex items-center mt-2 text-[#fbbf24]">
                            {Array.from({ length: t.rating }).map((_, i) => (
                              <Svg
                                key={i}
                                name="star"
                                className="w-4.5 h-4.5"
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <p className="text-black md:text-sm text-[13px] font-normal leading-[1.6] line-clamp-5 transition-all duration-500 cursor-default">
                        {t.review}
                      </p>
                    </div>
                  </div>
                ))}
              </EmblaCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCta;
