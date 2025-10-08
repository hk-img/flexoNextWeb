import React from "react";
import Link from "next/link";

const TermsConditions = () => {
  return (
    <>
      <section className="bg-[#808080] md:h-64 flex justify-center items-center relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px]">
        <div className="container mx-auto text-center md:px-0 px-[15px]">
          <div className="w-full">
            <h1 className="text-[28px] text-white font-semibold">
              TERMS OF USE
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-white md:py-16 py-10">
        <div className="container mx-auto md:px-0 px-[15px]">
          <div className="flex flex-col gap-6">
            <p className="text-sm text-[#777] font-normal">
              Welcome to{" "}
              <Link
                href="flexospaces.com"
                className="text-black hover:text-[#777]"
              >
                www.flexospaces.com
              </Link>{" "}
              . This website and mobile applications are owned and operated by
              Flexo Spaces. By visiting our website and mobile applications and
              accessing the information, resources, services, products, and
              tools we provide, you understand and agree to accept and adhere to
              the following terms and conditions as stated in this policy
              (hereinafter referred to as the ‘Agreement’), along with the terms
              and conditions as stated in our Privacy Policy (please refer to
              the Privacy Policy section below for more information).
            </p>
            <p className="text-sm text-[#777] font-normal">
              We reserve the right to change this Agreement from time to time
              with/without notice. You acknowledge and agree that it is your
              responsibility to review this Agreement periodically to
              familiarize yourself with any modifications. Your continued use of
              this site after such modifications will constitute acknowledgment
              and agreement of the modified terms and conditions.
            </p>
            <p className="font-bold text-sm text-[#777]">
              PLEASE READ THIS TERMS OF SERVICE AGREEMENT CAREFULLY. BY USING
              THIS WEBSITE OR ORDERING PRODUCTS FROM THIS WEBSITE YOU AGREE TO
              BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT.
            </p>

            <div className="flex flex-col gap-3">
              <h3 className="text-[#000e54] text-lg underline font-semibold">
                Scope of Agreement
              </h3>
              <p className="text-sm text-[#777] font-normal">
                These Terms govern your use of the Platform, including browsing,
                enquiries, communications, and bookings.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[#000e54] text-lg underline font-semibold">
                Responsible Use and Conduct
              </h3>
              <ul className="flex flex-col gap-3 text-sm pl-6 text-[#777] list-disc font-normal">
                <li>
                  You must provide accurate, current, and complete information
                  during registration or enquiry submission.
                </li>
                <li>
                  You are responsible for maintaining confidentiality of login
                  credentials and all activities that occur under your account.
                </li>
                <li>
                  You agree not to:
                  <ul className="pt-3 flex flex-col gap-3 text-[13px] pl-6 text-[#777] list-disc font-normal">
                    <li>
                      Access Platform content by unauthorized, automated, or
                      unethical means
                    </li>
                    <li>
                      Disrupt servers, duplicate/copy/reproduce Platform content
                    </li>
                    <li>
                      Use Platform resources for illegal or unauthorized
                      purposes.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[#000e54] text-lg underline font-semibold">
                Privacy
              </h3>
              <p className="text-sm text-[#777] font-normal">
                Flexo strongly believes in protecting user privacy. Please refer
                to our Privacy Policy, incorporated herein by reference.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[#000e54] text-lg underline font-semibold">
                Customer Communication
              </h3>
              <p className="text-sm text-[#777] font-normal">
                By providing your contact information, you consent to receive
                communications from Flexo via email, phone calls, SMS, and
                WhatsApp, even if your number is registered under DND/NCPR under
                TRAI.
              </p>
              <p className="text-sm text-[#777] font-normal">
                You may opt out by:
              </p>
              <ul className="flex flex-col gap-3 text-sm pl-6 text-[#777] list-decimal font-normal">
                <li>Using unsubscribe links in emails</li>
                <li>Emailing us at hello@flexospaces.com</li>
                <li>Communicating your preference during calls.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
