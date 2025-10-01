import React from "react";
import DOMPurify from "dompurify";
import { convertSlugToCapitalLetter } from "@/services/Comman";

const Faq = ({ spaceTypeSlug,citySlug,locationNameSlug,faqData }) => {
  const spaceType = convertSlugToCapitalLetter(spaceTypeSlug || "");
  const city = convertSlugToCapitalLetter(citySlug || "");
  const locationName = convertSlugToCapitalLetter(locationNameSlug || "");
  return (
    <>
      <section className=" mt-18 bg-[#f9f9f9]">
        <div className="container mx-auto md:px-0 px-[15px] py-10">
          <div>
            <h2 className="text-[#141414] font-medium leading-[1.6] md:text-[26px] text-xl">
              Frequently Asked Questions About {spaceType} in {locationName}{" "}
              {city} | Best {spaceType} in {locationName} {city}
            </h2>
          </div>
          <div className="max-w-[975px] mx-auto mt-4">
            <div className="space-y-4">
              {faqData?.map((item, idx) => (
                <div key={idx}>
                  <div>
                    <p className="font-extrabold text-[#777] 2xl:text-base text-sm">
                      Q- {item.question}
                    </p>
                  </div>
                  <div className="flex text-[#7b7b7b] 2xl:text-base text-sm pt-1">
                    <p>Ans-</p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item.answer),
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
