"use client";
import Svg from "@/components/svg";
import React, { useState } from "react";

const faqs = [
  { question: "What is Flexo?", answer: "Flexo is a platform that provides office space solutions... Flexo is a platform that provides office space solutions... Flexo is a platform that provides office space solutions... Flexo is a platform that provides office space solutions... Flexo is a platform that provides office space solutions... Flexo is a platform that provides office space solutions..." },
  { question: "How does Flexo help me find office spaces?", answer: "We help by offering tailored suggestions..." },
  { question: "Does Flexo have coworking spaces of its own?", answer: "No, Flexo partners with trusted providers..." },
  { question: "What types of spaces are listed on Flexo?", answer: "Coworking, managed offices, enterprise spaces..." },
  { question: "How does Flexo ensure the quality of its listed spaces?", answer: "We do quality checks before listing..." },
  { question: "Does Flexo manage spaces directly?", answer: "No, we connect businesses with workspace providers..." },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <section className="max-w-6xl xl:px-[21px] lg:px-10 md:px-6 px-6 mx-auto py-8">
        <div>
            <h2 className="text-3xl md:text-[32px] font-medium mb-2 text-center text-[#333]">
               Frequently Asked Question
            </h2>
            <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
                <div key={index} className="py-4">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="flex items-center justify-between w-full text-left text-base font-medium text-[#141414]"
                    >
                        <div
                        className={`${
                            openIndex === index ? "shadow-[5px_5px_15px_#00000033]" : ""
                        } flex items-center gap-2 w-full p-4 rounded-sm`}
                        >
                        <span className="text-orange-500">
                            <Svg
                            name="rightArrow"
                            className={`size-3 text-[#f76900] transform transition-transform duration-500 ease-in-out ${
                                openIndex === index ? "rotate-90" : ""
                            }`}
                            />
                        </span>
                        {faq.question}
                        </div>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                        <p className="mt-8 text-[#777] text-sm md:text-lg pl-6">
                        {faq.answer}
                        </p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>

  );
};

export default FaqSection;
