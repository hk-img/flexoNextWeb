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

const TestimonialCta = () => {
  return (
    <section className="w-full relative lg:py-4 md:py-3 py-4 px-4 rounded-2xl items-center mt-6 shadow-[0_4px_10px_#00000014] mx-auto bg-no-repeat bg-cover overflow-hidden bg-gradient-to-r from-[#ffd7ba] to-[#FFE7DA]">
        <div className="max-w-full xl:px-4 lg:px-4 md:px-3 px-4 mx-auto pt-4">
          <div className="flex lg:flex-row flex-col items-center gap-4">
              <div className="lg:w-2/5 w-full flex flex-col gap-y-6">
                <h4 className="text-base/relaxed text-[#141414] font-semibold">Still Searching? Let Us Help.</h4>
                <h5 className="text-base/relaxed text-[#141414] font-semibold">Leave the hassle to us. Connect with an expert workspace advisor today.</h5>
                <a href="#" class="w-fit bg-[#f76900] text-[12px] border border-[#f76900]  text-white py-3 px-7 rounded-2xl font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px] cursor-pointer">
                  Enquire Now
                </a>
              </div>
              <div className="lg:w-3/5 w-full flex flex-col gap-y-6">
                <div className="w-full [&_.embla__arrows]:hidden sm:[&_.embla__arrows]:flex [&_.embla__dots]:flex sm:[&_.embla__dots]:hidden [&_.embla__button]:w-10 [&_.embla__button]:h-10 [&_.embla__button svg]:w-4.5 [&_.embla__button svg]:h-4.5">
                  <EmblaCarousel
                    options={{ loop: false, autoplay: false, align: "start", showDots: false }}
                  >
                    {testimonials.map((t, idx) => (
                      <div
                        key={idx}
                        className="embla__slide shrink-0 lg:px-4 sm:px-3 px-1 basis-full py-10"
                      >
                        <div className="relative flex flex-col items-start gap-y-4">
                          <div className="flex items-center space-x-4">
                            <Image
                              src={t.img}
                              alt={t.name}
                              width={110}
                              height={110}
                              className="w-[110px] h-[110px] rounded-full p-2 border border-[#f76900] object-cover"
                            />

                            <div>
                              <span className="text-[#f76900] text-4xl font-bold opacity-30 mb-4 -mt-10 block">
                                <Svg name="quots" className="w-8 h-8 rotate-180" />
                              </span>
                              <h5 className="text-base text-[#060D45] font-semibold">
                                {t.name}, 
                                <span className="ms-1 text-base text-[#060D45] font-semibold">
                                  {t.designation}
                                </span>
                              </h5>
                              <p className="text-[13px] font-semibold text-[#f76900]">{t.company}</p>
                              <div className="flex items-center mt-2 text-[#fbbf24]">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                  <Svg key={i} name="star" className="w-4.5 h-4.5" />
                                ))}
                              </div>
                            </div>
                          </div>

                          <p className="text-[#777] text-sm 2xl:text-base line-clamp-5 md:group-hover:line-clamp-none transition-all duration-500 cursor-default">
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
