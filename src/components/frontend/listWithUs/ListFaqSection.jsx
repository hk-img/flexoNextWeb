"use client";
import Svg from "@/components/svg";
import React, { useState } from "react";

const faqs = [
    { question: "What types of spaces can I list on Flexo?", answer: "You can list coworking spaces, office spaces for lease, and short-term spaces such as meeting rooms, podcast studios, photo studios, and more that can be booked by the hour." },
    { question: "Is there a fee to list my space on Flexo?", answer: "For coworking spaces: Standard listing is free, but you can opt for our premium subscription packages to enhance visibility and maximize leads. For short-term spaces: Listing is completely free, and Flexo charges a service fee based on successful bookings. For Office Spaces: Listing is free." },
    { question: "How can I improve my listing’s visibility?", answer: "For coworking spaces, we offer premium subscription packages that provide enhanced visibility, priority placement, and additional benefits to attract more bookings. Standard listings are free, but premium plans help boost exposure. For office spaces for lease and short-term spaces, optimizing your listing with high-quality photos, detailed descriptions, and quick response times will help improve ranking." },
    { question: "Can I manage multiple spaces under one account?", answer: "Yes! You can list and manage multiple spaces from a single account, making it easy to track all your bookings." },
    { question: "How does the booking process work?", answer: "For short-term bookings, you can choose between two options: Request to Book – Users submit a request, and you can accept or decline it. Instant Book – Users can book and pay instantly, with no manual approval needed." },
    { question: "How will I be notified of new bookings?", answer: "You’ll receive notifications via email and WhatsApp for new booking requests. If you don’t respond within a set time, reminders will be sent." },
    { question: " Can I set my own pricing and availability?", answer: "Yes, you have full control over your pricing, availability, amenities, and any other inclusions or services." },
    { question: "How do I receive payments for bookings?", answer: "For hourly bookings, payments are processed securely through our platform, and payouts are made directly to your bank account. For long-term leases, negotiations and payments happen offline." },
    { question: " Who do I contact for support? ", answer: "You can reach out to our support team via listings@flexospaces.com for any assistance regarding your listing, payments, or platform-related queries." },
];

const ListFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <section className="container px-[15px] mx-auto sm:py-[41px] py-8">
        <div>
            <div className=" mb-8 lg:mb-10 sm:mb-16">
                <h2 className="text-2xl md:text-[32px] font-medium mb-[15px]  leading-[1.2] text-center text-[#333]">
                Frequently Asked Question
                </h2>
                <p className="text-[#777] min-[1400px]:text-base text-sm text-center">Addressing common questions and concerns about listing your space on Flexo</p>
            </div>
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
                        <p className="mt-8 text-[#777] text-sm leading-[1.5]">
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

export default ListFaqSection;
