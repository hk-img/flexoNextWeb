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
      " Finding meeting rooms for our team meetings was becoming a challenge for us. We talked to a couple of spaces but couldn't find what we were looking for. Then we approached Flexo with our requirements and in no time, our ideal meeting rooms were booked at very good discounts. The meeting rooms were fully equipped and everything that was promised was delivered. We will definitely use Flexo again for our flexible workspace requirements. ",
  },
];

const Testimonial = () => {
  return (
    <div className="container px-[15px] mx-auto xl:pt-[90px] xl:pb-[94px] py-12">
      <div className="max-w-[800px] mx-auto">
        <h2 className="md:text-[32px] text-2xl font-medium text-center text-[#333] leading-[1.2] ">
          Trusted by Teams,{" "}
          <span className="text-[#f76900]">Loved by Leaders</span>
        </h2>
      </div>

      <div className="xl:mt-10 lg:mt-9 md:mt-15 mt-10 flex lg:flex-row flex-col gap-[6px]">
        <div className="w-full [&_.emblaarrows]:-left-9 [&_.emblaarrows]:-right-9 sm:[&_.emblaarrows]:flex [&_.emblaarrows]:hidden sm:[&_.embladots]:hidden [&_.embladots]:flex  [&_.emblaarrows_button]:w-10 [&_.emblaarrows_button]:h-10 [&_.emblaarrows_button_Svg]:size-[18px]">
          <EmblaCarousel
            options={{ loop: true, autoplay: true, showButton: true, align: "start",showDots: true }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="embla__slide shrink-0 lg:px-[15px] sm:px-[12px] px-1 basis-[100%] sm:basis-[50%] md:basis-[50%] lg:basis-[33.3%] xl:basis-[33.3%] py-3"
              >
                <div className=" group rounded-md shadow-[0_0_3px_#cbcbcb] p-6 relative bg-white md:hover:transform md:hover:translate-y-[-10px] transition-all duration-500 min-h-[280px]">
                  <span className="absolute top-3 right-3 text-[#f76900] text-4xl font-bold opacity-40">
                    <Svg name="quots" className="size-[34px]" />
                  </span>

                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={76}
                      height={76}
                      className="w-[76px] h-[76px] rounded-full border-3 border-[#f76900] object-cover"
                    />
                    <div className="space-y-1">
                      <h5 className="font-medium text-[17px] text-black">
                        {t.name}
                        <br />
                        <span className="font-medium text-[15px] text-black">
                        {t.designation}
                      </span>
                      </h5>
                      
                      <p
                        className="text-xs font-bold text-[#cd854f]"
                        
                      >
                        {t.company}
                      </p>
                      <div className="flex items-center mt-2 text-[#fbbf24]">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Svg key={i} name="star" className="size-4.5" />
                        ))}
                      </div>
                    </div>
                  </div>

                 <p
                    className="text-[#777] text-sm 2xl:text-base line-clamp-5 group-hover:max-h-[500px] group-hover:line-clamp-none transition-[max-height] duration-500 ease-in-out overflow-hidden cursor-default"
                  >
                    {t.review}
                  </p>
                </div>
              </div>
            ))}
          </EmblaCarousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
