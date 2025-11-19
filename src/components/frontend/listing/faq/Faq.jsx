import React from "react";
import FaqAnswer from "./FaqAnswer";

const Faq = ({ spaceType,city,locationName,faqData }) => {
  return (
    <>
      <section className=" mt-18 bg-[#f9f9f9]">
        <div className="container mx-auto md:px-0 px-[15px] pt-10 md:pb-20 pb-10">
          <div>
            <h2 className="text-[#141414] font-medium leading-[1.6] md:text-[26px] text-xl">
              Frequently Asked Questions About {spaceType} in {locationName}{" "}
              {city} | Best {spaceType} in {locationName} {city}
            </h2>
          </div>
          <div className="md:w-10/12 w-full mx-auto mt-4">
            <div className="space-y-4">
              {faqData?.filter((item) => item.type == 1)?.map((item, idx) => (
                <div key={idx}>
                  <div>
                    <p className="font-extrabold text-[#777] min-[1400px]:text-base text-sm">
                      Q- {item.question}
                    </p>
                  </div>
                  <div className="flex text-[#7b7b7b] min-[1400px]:text-base text-sm pt-1">
                    <p>Ans-</p>
                    <FaqAnswer answer={item.answer} />
                  </div>
                </div>
              ))}
              {faqData?.filter((item) => item.type == 2)?.map((item, idx) => (
                <div key={idx}>
                  <div>
                    <p className="font-extrabold text-[#777] min-[1400px]:text-base text-sm">
                      {item.question}
                    </p>
                  </div>
                  <div className="flex text-[#7b7b7b] min-[1400px]:text-base text-sm pt-1">
                    <FaqAnswer answer={item.answer} />
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
