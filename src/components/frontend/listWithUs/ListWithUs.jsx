import Image from 'next/image';
import Svg from '@/components/svg';
import EmblaCarousel from "@/components/frontend/emblaCarousel/EmblaCarousel";
import RequestCallback from '../home/RequestCallback';
import ListFaqSection from './ListFaqSection';
import Link from 'next/link';

const ListWithUs = () => {
    const person = [
    {
    name: "Ganesh Ghodekar",
    image: "/images/Ganesh-OfficeBing.webp",
    content: "Working with Flexo has been an excellent experience. The platform is efficient and user-friendly, making it easy to connect with potential clients and manage inquiries seamlessly. Flexo has significantly helped in generating quality leads and successfully closing deals for our office spaces. The leads we receive through Flexo are well-targeted and relevant, which has streamlined our leasing process and improved our conversion rate. What sets Flexo apart from other platforms is the personalized support and prompt communication we receive from their team. They have been incredibly helpful, always responsive, and proactive in ensuring smooth coordination and timely updates. Their dedication and professionalism make a real difference. I would highly recommend Flexo to other space operators. Their platform, combined with the attentive support from team members, makes them a valuable partner in maximizing occupancy and growing your business. Flexo has proven to be a reliable and results-driven partner, and we highly recommend them to other space operators looking to maximize occupancy and grow their business.",
    designation:"Office Bing, Area Sales Manager"
    },
    
    {
    name: "Rushad Ghaswala",
    image: "/images/Rushad-Ghaswala-WeWork.webp",
    content: "Our experience with Flexo has been nothing short of outstanding. The team’s professionalism, efficiency, and dedication have made a significant impact on our operations. What stands out the most is how seamlessly they coordinate with us for site visits, deal closures, and specific client requirements. Their proactive communication and attention to detail ensure that every lead is handled with care, and every opportunity is maximized.The level of collaboration and support we receive from Flexo is unmatched. Their team is always accessible, responsive, and ready to adapt to our needs, making the entire workflow incredibly efficient. I would recommend Flexo to any space operator looking for a reliable, results-driven partner in the industry.",
    designation:"WeWork India, Senior Lead - Sales Transactions"
    },

    {
    name: "Manas Dhanghakar",
    image: "/images/Manas-Eszi.webp",
    content: "Working with Flexo has been a great experience. Their team is incredibly professional and helpful throughout the process from site visits to deal closures. Flexo stands out for its transparency and in-depth industry knowledge make them a valuable platform for coworking operators and clients alike. We highly recommend Flexo to other space operators and hosts, as they have helped us achieve many successful closures.",
    designation:"EsziWorkN, Community and Facility Manager"
    },
    {
    name: "Amandeep Manaktala",
    image: "/images/Amandeep-EFC.webp",
    content: "Working with Flexo has been an amazing experience. The team is a great asset, providing valuable support and ensuring a smooth process. Flexo has played a crucial role in helping us close deals at key locations like BKC and Kurla Centrium. What sets them apart is their ability to bring serious clients who are well-informed and decisive, leading to faster closures. Their transparency, professionalism, and industry expertise make them a trusted partner. We highly recommend Flexo to other space operators looking for a reliable and results-driven platform.",
    designation:"EFC Limited, Sr. Sales Manager"
    },
  ];
  const coworkingSpaces = [
  {
    title: "Coworking Spaces",
    img: "/images/Coworking.webp",
    desc: "For long-term and daily rentals."
  },
  {
    title: "Event Spaces",
    img: "/images/Event-Space.webp",
    desc: "Ideal for workshops, small gatherings, and networking events."
  },
  {
    title: "Studio",
    img: "/images/Studio-Space.webp",
    desc: "Perfect for podcasting, photoshoots, and video production."
  },
  {
    title: "Office Spaces",
    img: "/images/Office-Space.webp",
    desc: "For long-term rentals"
  },
  {
    title: "Activity Spaces",
    img: "/images/Activity-Space.webp",
    desc: "For fitness studios, dance halls, yoga centers, or any creative space."
  },
  {
    title: "Unique Spaces",
    img: "/images/And-much-more.webp",
    desc: "Multipurpose spaces that cater to every experience."
  },
  {
    title: "Meeting Rooms",
    img: "/images/Meeting-Room.webp",
    desc: "Equipped for business discussions and training sessions."
  },
];
  return (
    <>
        <section className="relative w-full lg:mt-[82px] sm:mt-[62px] mt-[63px]">
          <div className='flex items-center h-full justify-center py-[50px]'>
              <img
                src="/images/list_with_us_banner.webp"
                alt="List Your Space and Grow Your Earnings"
                width={1526}
                height={484}
                title="List Your Space and Grow Your Earnings"
                className="absolute inset-0 w-full h-full lg:h-[484px] object-cover"
              />
            <div className="container mx-auto px-[15px] flex justify-end">
              <div className='flex flex-wrap mx-[-15px] justify-end'>
                <div className="lg:w-10/12 md:w-10/12 px-[15px] w-full">
                  <div className='w-full relative flex flex-col items-start text-white'>
                    <h1 className='w-full lg:text-4xl md:text-[17px] lg:!leading-[1.6] text-white font-medium mb-4'>List Your Space and Grow Your Earnings</h1>
                      <ul className='flex flex-col text-start md:pl-4 pl-2 '>
                        <li className='lg:mb-4 md:mb-4 mb-2 gap-2 flex items-center text-white lg:text-[21px] text-base'>
                          <span><Svg name="check" className="size-[24px] text-white"/></span>
                            Get Qualified Leads and Bookings 
                        </li>
                        <li className='lg:mb-4 md:mb-4 mb-2 gap-2 flex items-center text-white lg:text-[21px] text-base'>
                            <span><Svg name="check" className="size-[24px] text-white"/></span>
                            Maximise Occupancy Levels and Revenue
                        </li>
                        <li className='lg:mb-4 md:mb-4 mb-2 gap-2 flex items-center text-white lg:text-[21px] text-base'>
                            <span><Svg name="check" className="size-[24px] text-white"/></span>
                            Increase Visibility and Reach
                        </li>
                        <li className='flex items-center gap-2 text-white lg:text-[21px] text-base'>
                            <span><Svg name="check" className="size-[24px] text-white"/></span>
                            Turn Unused Space Into Profit
                        </li>
                      </ul>
                      <div className='mt-6 md:pl-4 pl-2'>
                        <Link href="https://staginghost.flexospaces.com/auth/login" target="_blank" >
                        <div className="bg-[#f76900] min-[1400px]:text-base text-sm block text-white px-[30px] py-[15px] rounded-[3px] cursor-pointer font-medium duration-500 transition">
                          <span>Let's Get Started</span>
                        </div>
                        </Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='chooseSpace w-full relative py-10'>
            <div className='container mx-auto px-[15px]'>
              <div className='flex flex-col lg:flex-row items-center'>
                <div className='lg:w-7/12 md:w-7/12 w-full flex flex-col pe-[13px]'>
                  <div className='relative w-full rounded-lg lg:mt-0 mt-10'>
                      <img  src="/images/list-us.webp"
                          alt="List Your Space and Grow Your Earnings"
                          width={717}
                          height={403}
                          title="List Your Space and Grow Your Earnings"
                          className="inset-0 w-full h-full object-cover rounded-lg"></img>
                  </div>
                </div>
                <div className='lg:w-5/12 md:w-5/12 w-full flex flex-col'>
                    <div className='lg:relative lg:z-10 p-3 shadow-[0_0_3px_#bababa] bg-white rounded-md lg:-ml-16 border-2 border-dashed border-[#f76900] lg:mt-0 mt-6'>
                        <h2 className='font-normal text-2xl/10'>Join India's Premier Space Marketplace! </h2>
                        <p className='text-sm/normal min-[1400px]:text-base font-normal text-[#777]'>Join hundreds of hosts with 1,800+ listings from 20+ cities across India and start monetizing your space today. Whether you have a coworking space, office for lease, meeting room, studio, event venue or activity space, Flexo helps you connect with businesses and professionals actively looking for the perfect workspace. </p>
                    </div>
                </div>
              </div>
            </div>
        </section>
        
        <section className='w-full relative py-10'>
          <div className='container mx-auto px-[15px]'>
              <div className='w-full flex flex-col mx-auto px-6 mb-[15px]'>
                <h2 className='md:text-[32px] text-2xl font-medium text-center text-[#333]'>
                  How It Works
                </h2>
              </div>
              <div className='flex lg:flex-row flex-col h-full lg:gap-x-[30px] lg:pt-8 pt-6'>
                <div className='lg:w-1/3 relative p-6 flex flex-col shadow-[0_0_3px_#8b8b8b] rounded-md overflow-hidden h-auto lg:mb-0 mb-6 before:absolute before:left-[-1px] before:top-[-1px] before:h-[48px] before:border-[3px] before:border-[#f76900] before:rounded-[30px] after:absolute after:right-[-1px] after:bottom-[-1px] after:h-[48px] after:border-[3px] after:border-[#f76900] after:rounded-[30px]  transition-all duration-500 md:hover:-translate-y-[10px]'>
                  <div className='count mb-2'><span className='rounded-full bg-white shadow-[0_0_3px_#f76900] w-10 h-10 flex justify-center items-center text-[18px] font-medium text-[#f76900] border-2 border-[#f76900]'>01</span></div>
                  <h5 className='text-base/relaxed min-[1400px]:text-lg text-[#f76900] font-medium'>Sign Up and Create Your Listing</h5>
                  <p className='text-[#777] text-sm/normal min-[1400px]:text-base'>Provide key details like location, size, amenities, and usage categories. Upload high-quality photos to showcase your space.</p>
                </div>
                <div className='lg:w-1/3 relative p-6 flex flex-col shadow-[0_0_3px_#8b8b8b] rounded-md overflow-hidden h-auto lg:mb-0 mb-6 before:absolute before:left-[-1px] before:top-[-1px] before:h-[48px] before:border-[3px] before:border-[#f76900] before:rounded-[30px] after:absolute after:right-[-1px] after:bottom-[-1px] after:h-[48px] after:border-[3px] after:border-[#f76900] after:rounded-[30px] transition-all duration-500 md:hover:-translate-y-[10px]'>
                  <div className='count mb-2'><span className='rounded-full bg-white shadow-[0_0_3px_#f76900] w-10 h-10 flex justify-center items-center text-[18px] font-medium text-[#f76900] border-2 border-[#f76900]'>02</span></div>
                  <h5 className='text-base/relaxed min-[1400px]:text-lg text-[#f76900] font-medium'>Set Your Preferences</h5>
                  <p className='text-[#777] text-sm/normal min-[1400px]:text-base'>Choose how you want to rent your space and set your pricing. Offer hourly, daily, or long-term leases based on what works best for your business.</p>
                </div>
                <div className='lg:w-1/3 relative p-6 flex flex-col shadow-[0_0_3px_#8b8b8b] rounded-md overflow-hidden h-auto lg:mb-0 mb-6 before:absolute before:left-[-1px] before:top-[-1px] before:h-[48px] before:border-[3px] before:border-[#f76900] before:rounded-[30px] after:absolute after:right-[-1px] after:bottom-[-1px] after:h-[48px] after:border-[3px] after:border-[#f76900] after:rounded-[30px] transition-all duration-500 md:hover:-translate-y-[10px]'>
                  <div className='count mb-2'><span className='rounded-full bg-white shadow-[0_0_3px_#f76900] w-10 h-10 flex justify-center items-center text-[18px] font-medium text-[#f76900] border-2 border-[#f76900]'>03</span></div>
                  <h5 className='text-base/relaxed min-[1400px]:text-lg text-[#f76900] font-medium'>Start Earning</h5>
                  <p className='text-[#777] text-sm/normal min-[1400px]:text-base'>Go live on the platform, receive inquiries and bookings, and effortlessly manage everything from your dashboard.</p>
                </div>
              </div>
          </div>
        </section>
        
        <section className='w-full relative py-10'>
          <div className="container mx-auto px-[15px]">
            <div className='w-full flex flex-col mx-auto mb-6'>
              <h2 className="md:text-[32px] text-2xl font-medium text-center text-[#333] ">
                What Types of Spaces Can You List?
              </h2>
            </div>
            <p className='text-sm/normal min-[1400px]:text-base text-[#777777] text-center mx-auto'>From vibrant coworking spaces, sleek offices to creative studios, every space has a home on Flexo. We bring together diverse spaces for work, creativity, activities, and collaboration—all in one marketplace.</p>

            <div className="mt-10 flex lg:flex-row gap-[6px] md:[&_.emblaarrows]:-left-9 md:[&_.emblaarrows]:-right-9 [&_.emblaarrows]:-left-6 [&_.emblaarrows]:-right-6 [&_.emblaarrows_button]:w-10 [&_.emblaarrows_button]:h-10 [&_.emblaarrows_button_Svg]:size-[18px]">
              <div className="w-full px-[15px]">
                <EmblaCarousel
                  options={{ loop: true, autoplay: true, showButton: true, align: "start" }}
                >
                  {coworkingSpaces.map((space, idx) => (
                  <div
                      key={idx}
                      className="embla__slide shrink-0 basis-[100%] sm:basis-[50%] md:basis-[50%] lg:basis-[33.3%] xl:basis-[25%]"
                    >
                    <div className="h-[350px] shadow-[0_0_3px_#cfcfcf] rounded-md relative m-3 transition-all duration-300 overflow-hidden">
                      <div className=''>
                          <Image
                          width={278}
                          height={209}
                          src={space.img}
                          alt={space.title}
                          title={space.title}
                            className="w-full h-full rounded-md object-cover"
                          />
                        </div>
                        <div className="text-center p-3">
                          <h5 className="text-base/relaxed font-medium text-[#f76900]">{space.title}</h5>
                          <p className="text-sm text-[#777777]">
                            {space.desc}
                          </p>
                        </div>
                    </div>
                  </div>
                  ))}
                </EmblaCarousel>
              </div>
            </div>
          </div>
        </section>

        <section className='w-full relative py-10'>
          <div className='container mx-auto px-[15px]'>
              <div className='w-full flex flex-col mx-auto px-6'>
                <h2 className='md:text-[32px] text-2xl font-medium text-center text-[#333]'>
                  Why List with Flexo?
                </h2>
              </div>
              <div className='grid lg:grid-cols-4 grid-cols-1 gap-[30px] lg:pt-8 pt-6'>
                <div className='relative p-6 shadow-[0_0_3px_#8b8b8b] bg-[#f76900] rounded-md overflow-hidden h-full after:absolute after:left-0 after:w-0 after:bottom-0 after:border-[#ffffff] after:border-2 after:rounded-[30px] md:hover:after:w-full after:duration-500 after:transition-all md:hover:-translate-y-[10px] transition-all duration-500 group'>
                  <div className='mb-12'>
                    <h5 className='text-white font-semibold mb-1 min-[1400px]:text-lg text-base'>Reach The Right Audience</h5>
                    <p className='text-sm text-white min-[1400px]:text-base '>Tap into a large user base actively searching for spaces like yours.</p>
                  </div> 
                  <div className='listCount'><span className='text-[60px] font-medium text-white absolute bottom-[-19px] opacity-20 right-[13px] transition-all duration-500 group-hover:opacity-100 group-hover:text-[40px] group-hover:bottom-0'>01</span></div>
                </div>

                <div className='relative p-6 shadow-[0_0_3px_#8b8b8b] bg-[#f76900] rounded-md overflow-hidden h-full after:absolute after:left-0 after:w-0 after:bottom-0 after:border-[#ffffff] after:border-2 after:rounded-[30px] md:hover:after:w-full after:duration-500 after:transition-all md:hover:-translate-y-[10px] transition-all duration-500 group'>
                  <div className='mb-12'>
                    <h5 className='text-white font-semibold mb-1 min-[1400px]:text-lg text-base'>Flexible Options</h5>
                    <p className='text-sm text-white min-[1400px]:text-base '>List spaces for coworking, meetings, shoots, events, or short-term bookings.</p>
                  </div> 
                  <div className='listCount'><span className='text-[60px] font-medium text-white absolute bottom-[-19px] opacity-20 right-[13px] transition-all duration-500 group-hover:opacity-100 group-hover:text-[40px] group-hover:bottom-0'>02</span></div>
                </div>

                <div className='relative p-6 shadow-[0_0_3px_#8b8b8b] bg-[#f76900] rounded-md overflow-hidden h-full after:absolute after:left-0 after:w-0 after:bottom-0 after:border-[#ffffff] after:border-2 after:rounded-[30px] md:hover:after:w-full after:duration-500 after:transition-all md:hover:-translate-y-[10px] transition-all duration-500 group'>
                  <div className='mb-12'>
                    <h5 className='text-white font-semibold mb-1 min-[1400px]:text-lg text-base'>Maximize Earnings</h5>
                    <p className='text-sm text-white min-[1400px]:text-base '>Control pricing, availability, and usage types to optimize your revenue.</p>
                  </div> 
                  <div className='listCount'><span className='text-[60px] font-medium text-white absolute bottom-[-19px] opacity-20 right-[13px] transition-all duration-500 group-hover:opacity-100 group-hover:text-[40px] group-hover:bottom-0'>03</span></div>
                </div>

                <div className='relative p-6 shadow-[0_0_3px_#8b8b8b] bg-[#f76900] rounded-md overflow-hidden h-full after:absolute after:left-0 after:w-0 after:bottom-0 after:border-[#ffffff] after:border-2 after:rounded-[30px] md:hover:after:w-full after:duration-500 after:transition-all md:hover:-translate-y-[10px] transition-all duration-500 group'>
                  <div className='mb-12'>
                    <h5 className='text-white font-semibold mb-1 min-[1400px]:text-lg text-base'>End-to-End Support</h5>
                    <p className='text-sm text-white min-[1400px]:text-base '>From onboarding to managing bookings, we’ve got you covered.</p>
                  </div> 
                  <div className='listCount'><span className='text-[60px] font-medium text-white absolute bottom-[-19px] opacity-20 right-[13px] transition-all duration-500 group-hover:opacity-100 group-hover:text-[40px] group-hover:bottom-0'>04</span></div>
                </div>
                
              </div>
          </div>
        </section>

        <section className='w-full relative lg:py-8 py-4'>
          <div className='container mx-auto px-[15px]'>
            <div className='w-full flex flex-col mx-auto px-6 mb-10'>
              <h2 className='md:text-[32px] text-2xl font-medium text-center text-[#333]'>
                Host Success Stories
              </h2>
            </div>
            <div className=' px-4 [&_.emblaarrows]:hidden md:[&_.emblaarrows]:-left-6 md:[&_.emblaarrows]:-right-5 [&_.emblaarrows]:-left-3 [&_.emblaarrows]:-right-3 [&_.emblaarrows_button]:w-10 [&_.emblaarrows_button]:h-10 [&_.emblaarrows_button_Svg]:size-[18px]'>
            <div >
              <EmblaCarousel options={{ loop: true, autoplay: true, showButton: true, align: "start" }}>
                {person.map((person, index) => (
                <div key={index} className="embla__slide relative h-full shrink-0 basis-full mt-[10px] px-[15px]">
                  <div className='lg:p-6 p-2 shadow-[0_0_3px_#b3b3b3] rounded-[5px] mb-2'>
                    <div>
                    <div className='flex lg:flex-row flex-col h-full items-center'>
                      <div className='lg:w-1/3 md:w-2/5 w-full flex flex-col items-center'>
                          <Image
                              src={person.image}                     
                              alt={person.name}                      
                              title={person.name}                    
                              width={1080}                           
                              height={970}                         
                              loading="lazy"                        
                              className="lg:w-[317px] lg:h-[400px] w-full h-auto aspect-[317/400] object-cover"
                          />
                      </div>
                      <div className='lg:w-7/12 md:w-7/12 w-full flex flex-col items-start ps-4 md:mt-0 mt-4'>
                        <div className='quoteMark mb-6'>
                          <Svg name="quoteMark" className="text-[#7f7f7f] size-[55px]"/>
                        </div>
                        <p className='text-base text-[#777777] mb-6'>{person.content}</p>
                        <h5 className='text-base/relaxed min-[1400px]:text-lg  text-[#141414] font-medium mb-1'>{person.name}</h5>
                        <p className='text-sm min-[1400px]:text-base text-[#777777] font-normal'>{person.designation}</p>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                ))}
              </EmblaCarousel>
            </div>
            </div>
          </div>
        </section>

         <section className="relative w-full py-15 lg:h-[400px] h-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <Image
                width={1356}
                height={400}
                src="/images/ready-to-move.webp" 
                alt="Handshake background"
                title="Handshake background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#00000075]"></div>
            </div>
      
            <div className="relative container z-10 text-center px-[15px] py-3">
              <h2 className="text-white text-[22px] md:text-[26px] font-medium leading-[1.6]">
               Ready to Earn with Flexo?
              </h2>
              <Link href="/contact" className="inline-block bg-[#f76900] mt-6 tracking-[1px] min-[1400px]:text-base  text-[15px] border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white md:px-7.5 px-5 md:py-[15px] py-[10px] rounded-[6px] font-semibold duration-500 transition uppercase">
                List Your Space Now
              </Link>
            </div>
          </section>

        <ListFaqSection />


    </>
  )
}

export default ListWithUs
