import Svg from "@/components/svg";
import Link from "next/link";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <section className="bg-[#808080] h-[287px] flex justify-center items-center relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px]">
        <div className="container mx-auto text-center md:px-0 px-[15px] py-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-[28px] text-white font-semibold uppercase">
              CONTACT US
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[92%] max-w-[1224px]  mx-auto grid md:grid-cols-2 md:gap-[30px] gap-5 py-20">
          <div className="border border-[#eee] rounded-[10px] p-[30px] h-fit">
            <div className="flex flex-col justify-center space-y-5  ">
              <h2 className="md:text-[40px] text-[22px] font-semibold text-[#000e54] leading-[1.5] mb-[33px] ">
                Stop by and say hi. Or drop us a note if you need support
              </h2>

              <div className="flex items-center space-x-5 text-[#6c757d] border-b pb-[38px] border-[#eee]">
                <span className="text-[#6c757d] font-medium flex items-center gap-1">
                  <Svg
                    name="mail"
                    className="size-[18px] shrink-0 text-[#6c757d]"
                  />
                  <span> Mail :</span>
                </span>
                <a
                  href="mailto:hello@flexospaces.com"
                  className="text-[#878c9f] 2xl:text-base text-sm font-medium"
                >
                  hello@flexospaces.com
                </a>
              </div>

              <div className="flex space-x-2">
                <Link
                  href="https://www.facebook.com/flexospaces/"
                  target="_blank"
                  className="bg-[#ff6600] text-white p-2 rounded-sm hover:bg-[#2c3b5a]"
                >
                  <Svg name="facebook" className="size-5 " />
                </Link>
                <Link
                  href="https://x.com/flexospaces"
                  target="_blank"
                  className="bg-[#ff6600] text-white p-2 rounded-sm hover:bg-[#2c3b5a]"
                >
                  <Svg name="twitter" className="size-5 " />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/flexospaces/"
                  target="_blank"
                  className="bg-[#ff6600] text-white p-2 rounded-sm hover:bg-[#2c3b5a]"
                >
                  <Svg name="linkedin2" className="size-5 " />
                </Link>
                <Link
                  href="https://www.instagram.com/flexospaces/"
                  target="_blank"
                  className="bg-[#ff6600] text-white p-2 rounded-sm hover:bg-[#2c3b5a]"
                >
                  <Svg name="instagram" className="size-5 " />
                </Link>
              </div>
            </div>
          </div>
          <div className=" pt-5">
            <h3 className="text-lg font-semibold mb-[35px] text-[#00194b]">
              Get In Touch
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
