"use client";
import Svg from "@/components/svg";
import React, { useState } from "react";

const faqs = [
    { question: "What is Flexo?", answer: "Flexo is a leading proptech marketplace and commercial real estate advisor specializing in offices, coworking spaces, managed offices and flexible spaces across India. We also offer multi-city office solutions and empower companies to implement hybrid and hub-and-spoke real estate strategies effectively." },
    { question: "How does Flexo help me find office spaces?", answer: "Flexo offers a curated selection of coworking spaces, managed offices, and long-term lease options. Our team provides expert guidance to find the perfect fit for your needs." },
    { question: "Does Flexo have coworking spaces of its own?", answer: "Currently, Flexo does not operate coworking spaces. Flexo is an aggregator platform that connects you with trusted coworking operators offering a diverse range of workspaces tailored to your needs." },
    { question: "What types of spaces are listed on Flexo?", answer: "Flexo features offices, coworking spaces, meeting rooms, virtual offices, podcast studios, photo studios, production venues, and more." },
    { question: "How does Flexo ensure the quality of its listed spaces?", answer: "Flexo verifies the listed spaces and partners with trusted operators to provide high-quality, professional environments for your needs. Additionally, users can leave reviews for spaces based on their experiences." },
    { question: "Does Flexo manage spaces directly?", answer: "Currently, Flexo collaborates with trusted operators who manage long-term office spaces, such as managed offices and coworking spaces. Short-term spaces like podcast studios and photo studios are listed by verified hosts, ensuring access to high-quality, well-maintained spaces." },
    { question: " Can Flexo help me customize my office space? ", answer: "Yes, Flexo specializes in finding fully furnished and customizable office spaces that align with your team's requirements. We can also assist with fit-outs through our qualified design and build partners to create a workspace tailored to your needs." },
    { question: " How do I list my space on Flexo? ", answer: "Listing your space is easy! Visit our 'List Your Space' page, fill out the required details and submit your space. Your space will go live after our team reviews and approves your listing." },
    { question: " What makes Flexo different from other platforms? ", answer: "Flexo stands out by offering tailored solutions, expert guidance, and a diverse selection of office spaces, coworking spaces, and flexible short-term spaces. Our deep expertise in the commercial real estate market ensures a seamless and personalized experience for every client." },
    { question: " How do I contact Flexo for assistance? ", answer: "You can reach out to us via email at hello@flexospaces.com. Our team is here to help with all your inquiries." },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <section className="container px-[15px] mx-auto sm:py-[41px] py-8">
        <div>
            <h2 className="text-2xl md:text-[32px] font-medium lg:mb-10 sm:mb-16 mb-8 leading-[1.2] text-center text-[#333]">
               Frequently Asked Question
            </h2>
            <div className="divide-y divide-gray-200 space-y-[9px]">
            {faqs.map((faq, index) => (
                <div key={index} className="md:px-5 py-[13px] px-2">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="flex items-center justify-between w-full text-left text-base font-medium text-[#141414]"
                    >
                        <div
                        className={`${
                            openIndex === index ? "shadow-[5px_5px_15px_#00000033]" : ""
                        } flex items-center gap-2 w-full p-3 rounded-sm 2xl:text-lg text-base leading-[1.6]`}
                        >
                        <span className="text-orange-500">
                            <Svg
                            name="rightArrow"
                            className={`size-[15px] text-[#f76900] transform transition-transform duration-500 ease-in-out ${
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
                        <p className="mt-8 text-[#777] text-lg leading-[1.5]">
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
