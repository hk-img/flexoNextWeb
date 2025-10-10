import React from "react";
import Link from "next/link";

const TermsConditions = () => {
  return (
    <>
      <section className="bg-[#808080] h-64 flex justify-center items-center relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px]">
        <div className="container mx-auto text-center px-[15px]">
          <div className="w-full">
            <h1 className="text-[28px] text-white font-semibold">
              TERMS OF USE
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-white md:py-20 py-10 " >
        <div className=" max-w:[1224px] w-[92%] mx-auto px-[12px]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-sm 2xl:text-base text-[#777] font-normal leading-[1.5]">
                Welcome to{" "}
                <Link
                  href="flexospaces.com"
                  className="text-black hover:text-[#777]"
                >
                  www.flexospaces.com
                </Link>
                . This website and mobile applications are owned and operated by
                Flexo Spaces. By visiting our website and mobile applications and
                accessing the information, resources, services, products, and
                tools we provide, you understand and agree to accept and adhere to
                the following terms and conditions as stated in this policy
                (hereinafter referred to as the ‘Agreement’), along with the terms
                and conditions as stated in our Privacy Policy (please refer to
                the Privacy Policy section below for more information).
              </p>
              <p className="text-sm 2xl:text-base text-[#777] font-normal leading-[1.5]">
                We reserve the right to change this Agreement from time to time
                with/without notice. You acknowledge and agree that it is your
                responsibility to review this Agreement periodically to
                familiarize yourself with any modifications. Your continued use of
                this site after such modifications will constitute acknowledgment
                and agreement of the modified terms and conditions.
              </p>
              <p className="font-bold text-sm text-[#777] leading-[1.5]">
                PLEASE READ THIS TERMS OF SERVICE AGREEMENT CAREFULLY. BY USING
                THIS WEBSITE OR ORDERING PRODUCTS FROM THIS WEBSITE YOU AGREE TO
                BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT.
              </p>
            </div>

            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[#000e54] text-lg underline font-semibold  leading-[1.6]">
                Scope of Agreement
              </h3>
              <p className="text-sm 2xl:text-base text-[#777] font-normal ">
                These Terms govern your use of the Platform, including browsing,
                enquiries, communications, and bookings.
              </p>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6]">
                Responsible Use and Conduct
              </h3>
              <ul className="flex flex-col  text-sm pl-12 text-[#777] leading-[30px] list-disc font-normal text-[13px]">
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
                  <ul className=" flex flex-col leading-[30px] text-[13px] pl-12 text-[#777] list-[circle] font-normal">
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
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6]">
                Privacy
              </h3>
              <p className="text-sm 2xl:text-base text-[#777] font-normal">
                Flexo strongly believes in protecting user privacy. Please refer
                to our Privacy Policy, incorporated herein by reference.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#000e54] text-lg underline font-semibold mb-[15px] leading-[1.6]">
                Customer Communication
              </h3>
              <p className="text-sm 2xl:text-base text-[#777] font-normal">
                By providing your contact information, you consent to receive
                communications from Flexo via email, phone calls, SMS, and
                WhatsApp, even if your number is registered under DND/NCPR under
                TRAI.
              </p>
              <p className="text-[13px] 2xl:text-base text-[#777] font-normal my-1.5">
                You may opt out by:
              </p>
              <ul className="flex flex-col text-[13px] pl-12 text-[#777] list-decimal leading-[30px] font-normal">
                <li>Using unsubscribe links in emails</li>
                <li>Emailing us at hello@flexospaces.com</li>
                <li>Communicating your preference during calls.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6] mb-[7px]">
                Services & Space Bookings
              </h3>
              <p className="text-sm 2xl:text-base text-[#777] font-normal">The Platform enables you to search for, enquire about, and book workspaces (including short-term bookings such as hourly, daily, weekly, monthly, day passes, and virtual offices).</p>
              <ul className="flex flex-col text-sm pl-12 leading-[30px] text-[#777] list-disc font-normal text-[13px]">
                <li>
                  Flexo acts as a broker and intermediary and is not the operator of the spaces.
                </li>
                <li>
                  After you submit an enquiry or booking request, Flexo may share your details with internal teams, workspace partners, and broker partners to provide support and fulfillment.
                </li>
                <li>
                  Workspace providers may contact you directly.
                </li>
              </ul>
              <p className="text-sm 2xl:text-base text-[#777] font-normal">If you book a space, you must:</p>
              <ul className="flex flex-col leading-[30px] text-sm pl-12 text-[#777] list-disc font-normal text-[13px]">
                <li>
                  Comply with the terms of use, rules, and payment obligations set by the host/provider.
                </li>
                <li>
                  Ensure responsible behavior while using the space.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6]">
                Refund Policy
              </h3>
              <p className="text-sm 2xl:text-base text-[#777] font-normal">
                All refund requests, if any, will be handled per our Refund Policy available on the website
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6] mb-[7px]">
                User Content & Posting
              </h3>
              <p className="text-sm 2xl:text-base text-[#777] font-normal">By posting or submitting content on the Platform:</p>
              <ul className="flex flex-col leading-[30px] text-sm pl-12 text-[#777] list-disc font-normal text-[13px]">
                <li>
                  You grant Flexo a worldwide, royalty-free, perpetual license to use, display, publish, adapt, or distribute your content
                </li>
                <li>
                  You must not post unlawful, defamatory, infringing, obscene, misleading, or unauthorized promotional content.
                </li>
                <li>
                  Flexo reserves the right to moderate or remove user content at its sole discretion.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6]">
                Intellectual Property

              </h3>
              <ul className="flex flex-col leading-[30px] text-sm pl-12 text-[#777] list-disc font-normal text-[13px]">
                <li>
                  All Platform content (text, images, design, software, trademarks, trade dress) is owned by or licensed to Flexo Proptech Pvt. Ltd
                </li>
                <li>
                  You are granted a limited, non-exclusive, non-transferable license to use Platform content for <span className="font-bold">personal, non-commercial purposes.</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6]">
                Third-Party Links
              </h3>
              <ul className="flex flex-col leading-[30px] text-sm pl-12 text-[#777] list-disc font-normal text-[13px]">
                <li>
                  Flexo may display links to third-party sites for convenience.

                </li>
                <li>
                  Flexo disclaims liability for content, accuracy, or transactions occurring on third-party sites. Use at your own risk
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6]">
                Domestic Use
              </h3>
              <p className="text-sm 2xl:text-base text-[#777] font-normal">Flexo makes no representation that Platform services or content are appropriate for use outside India. Users who access from other jurisdictions do so at their own risk and are responsible for compliance with local laws.</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6] mb-[7px]">
                Indemnity
              </h3>
              <p className="text-sm 2xl:text-base text-[#777] font-normal">You agree to indemnify and hold harmless Flexo Proptech Pvt. Ltd., its directors, officers, employees, and agents from any claims, losses, damages, liabilities, or expenses (including attorneys' fees) arising from:</p>
              <ul className="flex flex-col leading-[30px] text-sm pl-12 text-[#777] list-disc font-normal text-[13px]">
                <li>
                  Your breach of these Terms
                </li>
                <li>
                 Your misuse of the Platform
                </li>
                <li>
                 Your violation of any third-party rights or applicable laws.
                </li>
              </ul>
            </div>
             <div className="flex flex-col gap-[15px]">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6]">
                Disclaimer of Warranties
              </h3>
              <ul className="flex flex-col leading-[30px] text-sm pl-12 text-[#777] list-disc font-normal text-[13px]">
                <li>
                  The Platform and its services are provided "as is" and "as available".
                </li>
                <li>
                 Flexo disclaims all warranties of any kind, express or implied, including merchantability, fitness for purpose, or non-infringement
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6]">
                Limitation of Liability
              </h3>
              <ul className="flex flex-col leading-[30px] text-sm pl-12 text-[#777] list-disc font-normal text-[13px]">
                <li>
                  Flexo’s total liability shall not exceed the amount paid by you, if any, for use of the Platform.
                </li>
                <li>
                 Flexo shall not be liable for indirect, incidental, special, or consequential damages.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6]">
                Termination
              </h3>
              <p className="text-sm 2xl:text-base text-[#777] font-normal">Flexo may terminate or suspend your access to the Platform at its sole discretion for breach of these Terms. Upon termination, all rights granted to you cease immediately.</p>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6]">
                Force Majeure
              </h3>
              <p className="text-sm 2xl:text-base text-[#777] font-normal">Flexo shall not be liable for any delay or failure in performance due to causes beyond its reasonable control, including acts of God, war, pandemic, strikes, lockouts, or Internet disruptions.</p>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6]">
                Governing Law and Jurisdiction
              </h3>
              <p className="text-sm 2xl:text-base text-[#777] font-normal">This Agreement is governed by and construed under the laws of India, with exclusive jurisdiction in the courts of <span className="font-bold">Mumbai, Maharashtra.</span> You waive any objection to jurisdiction, venue, or inconvenient forum.</p>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6]">
                Statute of Limitations
              </h3>
              <p className="text-sm 2xl:text-base text-[#777] font-normal">Any claim arising from use of the Platform must be brought within <span className="font-bold">one (1) year</span>  from the cause of action.</p>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6]">
                Waiver of Class Actions
              </h3>
              <p className="text-sm 2xl:text-base text-[#777] font-normal">You waive any right to pursue claims as part of a class action.</p>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6]">
                Assignment
              </h3>
              <p className="text-sm 2xl:text-base text-[#777] font-normal">You may not assign your rights or obligations under these Terms without prior consent. Flexo may assign its rights at its discretion.</p>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6]">
                Entire Agreement
              </h3>
              <p className="text-sm 2xl:text-base text-[#777] font-normal">These Terms constitute the entire agreement between you and Flexo regarding the Platform, superseding any prior agreements.</p>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[#000e54] text-lg underline font-semibold leading-[1.6]">
                Contact Information
              </h3>
              <p className="text-sm 2xl:text-base text-[#777] font-normal">If you have any questions about these Terms, email: hello@flexospaces.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
