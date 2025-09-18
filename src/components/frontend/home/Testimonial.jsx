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
      "Flexo provided us with multiple office location suggestions, which greatly helped us in selecting the perfect office based on our needs. With Flexo, we didn’t face any issues at all. In fact, it made our Flexo provided us with multiple office location suggestions, which greatly helped us in selecting the perfect office based on our needs. With Flexo, we didn’t face any issues at all. In fact, it made our...",
  },
  {
    name: "Arjun Patel",
    designation: "CEO",
    company: "StartHub",
    img: "/images/testimonial.webp",
    rating: 5,
    review:
      "Amazing support, smooth process, and great locations. Definitely recommended for startups looking for quick and reliable workspace solutions.",
  },
  {
    name: "Priya Mehta",
    designation: "HR Head",
    company: "Techwave Solutions",
    img: "/images/testimonial.webp",
    rating: 4,
    review:
      "The team was super supportive in arranging dedicated desks for our employees. It saved us a lot of hassle and gave us flexible options.",
  },
  {
    name: "Arjun Patel",
    designation: "CEO",
    company: "StartHub",
    img: "/images/testimonial.webp",
    rating: 5,
    review:
      "Amazing support, smooth process, and great locations. Definitely recommended for startups looking for quick and reliable workspace solutions.",
  },
];

const Testimonial = () => {
  return (
    <div className="container px-[15px] mx-auto xl:pt-[90px] xl:pb-[94px] py-[93px]">
      <div className="max-w-[800px] mx-auto">
        <h2 className="md:text-[32px] text-2xl font-medium text-center text-[#333] leading-[1.2]">
          Trusted by Teams,{" "}
          <span className="text-[#f76900]">Loved by Leaders</span>
        </h2>
      </div>

      <div className="xl:mt-10 lg:mt-9 md:mt-15 mt-16 flex lg:flex-row flex-col gap-[6px]">
        <div className="w-full">
          <EmblaCarousel
            options={{ loop: true, autoplay: false, showButton: true, align: "start" }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="embla__slide shrink-0 lg:px-[15px] sm:px-[12px] px-[28px] basis-[100%] sm:basis-[50%] md:basis-[50%] lg:basis-[33.3%] xl:basis-[33.3%] py-3"
              >
                <div className=" group rounded-md shadow-[0_0_3px_#cbcbcb] p-6 relative bg-white hover:transform hover:translate-y-[-10px] transition-all duration-500 min-h-[330px]">
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

                  <p className="text-[#777] text-base line-clamp-5 group-hover:line-clamp-none transition-all duration-500 cursor-default">
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
