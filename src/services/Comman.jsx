import { redirect } from "next/navigation";

export const coworkingTypes = [
  "Private Office",
  "Managed Office",
  "Dedicated Desk",
  "Flexible Desk",
  "Virtual Office",
  "Day Pass",
]

export const Facilities = {
  1: 'clock-half',
  2: 'parkingP',
  3: 'motorcycle',
  4: 'car-parking',
  5: 'mailFill',
  6: 'wifi',
  7: 'router',
  8: 'lock',
  9: 'printer',
  10: 'whiteBoard',
  11: 'projector',
  12: 'tv',
  13: 'computer',
  14: 'charging',
  15: 'security',
  16: 'cctv-camera',
  17: 'snowflake',
  18: 'breakfast',
  19: 'food-bev',
  20: 'foodBank',
  21: 'sensor',
  22: 'lift',
  23: 'bedtime',
  24: 'userCircle',
  25: 'support',
  26: 'call',
  27: 'branding',
  28: 'breakout',
  29: 'train',
  30: 'services',
  31: 'fitness',
  32: 'pool',
  33: 'shower',
  36: 'printer',
  37: 'restraunt',
  39: 'breakout',
  40: 'chair',
  41: 'water',
  42: 'cleaning',
  43: 'hotelBed',
  44: 'meditation',
  45: 'sun',
  46: 'pets',
  47: 'call',
  48: 'electricCar ',
  49: 'sports',
  50: 'brightness',
  51: 'chair',
  52: 'restroom',
  53: 'lift',
  55: 'camera',
  56: 'image',
  57: 'bulb',
  58: 'micFill',
  59: 'sound',
  60: 'restroom',
  61: 'speaker',
  62: 'soundOff',
  63: 'cctv-camera',
  64: 'wheelchair'
}
export const workSpace = [
  { workSpaceName: "Coworking Space", typeOfSpace: "Coworking" },
  { workSpaceName: "Managed Office", typeOfSpace: "Long-Term" },
  { workSpaceName: "Private Office", typeOfSpace: "Long-Term" },
  { workSpaceName: "Shared Office", typeOfSpace: "Long-Term" },
  { workSpaceName: "Virtual Office", typeOfSpace: "Long-Term" },
  { workSpaceName: "Coworking Café/Restaurant", typeOfSpace: "Short-Term" },
  { workSpaceName: "Shoot Studio", typeOfSpace: "Short-Term" },
  { workSpaceName: "Recording Studio", typeOfSpace: "Short-Term" },
  { workSpaceName: "Podcast Studio", typeOfSpace: "Short-Term" },
  { workSpaceName: "Activity Space", typeOfSpace: "Short-Term" },
  { workSpaceName: "Sports Turf", typeOfSpace: "Short-Term" },
  { workSpaceName: "Sports Venue", typeOfSpace: "Short-Term" },
  { workSpaceName: "Party Space", typeOfSpace: "Short-Term" },
  { workSpaceName: "Banquet Hall", typeOfSpace: "Short-Term" },
  { workSpaceName: "Gallery", typeOfSpace: "Short-Term" },
  { workSpaceName: "Classroom", typeOfSpace: "Short-Term" },
  { workSpaceName: "Private Cabin", typeOfSpace: "Short-Term" },
  { workSpaceName: "Meeting Room", typeOfSpace: "Short-Term" },
  { workSpaceName: "Training Room", typeOfSpace: "Short-Term" },
  { workSpaceName: "Event Space", typeOfSpace: "Short-Term" },
];

export const convertSlugToAllCapitalLetter = (slug) => {
  if (!slug) return "";
  return slug.replace(/-/g, " ").toUpperCase();
};

export const convertSlugToCapitalLetter = (slug)=>{
  if(!slug) return "";
  return slug?.replace(/-/g, " ")?.split(" ")?.map(word => word?.charAt(0)?.toUpperCase() + word?.slice(1))?.join(" ")
}

export const getTypeOfSpaceByWorkSpace = (workSpaceSlug) => {
  if(!workSpaceSlug) return "";
  const capitalWorkSpace = workSpaceSlug == "coworking" ? "Coworking Space" : convertSlugToCapitalLetter(workSpaceSlug);
  const findWorkSpace = workSpace.find((item) => item.workSpaceName === capitalWorkSpace);
  return findWorkSpace?.typeOfSpace?.toLowerCase().replace(/-/g, "");
};

export const slugGenerator = (text) =>{
  if(!text) return "";
  return text?.toLowerCase().replace(/\s+/g, "-");
}

export const convertSlugToSmallLetter = (slug)=>{
  if(!slug) return "";
  return slug?.replace(/-/g, " ")?.toLowerCase();
}


export const checkingUrl = (url) => {
  if (url) {
    if (url === "/in/coworking-space/Mumbai/Bandra-Kurla-Complex")
      return redirect("/in/coworking-space/mumbai/bandra-kurla-complex");
    if (url === "/in/coworking-space/Mumbai/Powai")
      return redirect("/in/coworking-space/mumbai/powai");
    if (url === "/in/coworking-space/Mumbai/Andheri-East")
      return redirect("/in/coworking-space/mumbai/andheri-east");
    if (url === "/in/coworking-space/Mumbai/Thane")
      return redirect("/in/coworking-space/mumbai/thane");
    if (url === "/in/coworking-space/Mumbai/Lower-Parel")
      return redirect("/in/coworking-space/mumbai/lower-parel");

    if (url === "/in/coworking/andheri")
      return redirect("/in/coworking-space/mumbai/andheri");
    if (url === "/in/coworking-space/mumbai-suburban/andheri")
      return redirect("/in/coworking-space/mumbai/andheri");
    if (url === "/in/coworking-space/mumbai-suburban/andheri-east")
      return redirect("/in/coworking-space/mumbai/andheri-east");
    if (url === "/in/coworking-space/mumbai-suburban/andheri-west")
      return redirect("/in/coworking-space/mumbai/andheri-west");
    if (url === "/in/coworking-space/mumbai-suburban/bandra")
      return redirect("/in/coworking-space/mumbai/bandra");
    if (url === "/in/coworking-space/mumbai-suburban/bandra-kurla-complex")
      return redirect("/in/coworking-space/mumbai/bandra-kurla-complex");
    if (
      url.toLowerCase() === "/in/coworking-space/mumbai-suburban/bandra-west" ||
      url.toLowerCase() === "/in/coworking-space/mumbai/bandra-west"
    )
      return redirect("/in/coworking-space/mumbai/bandra");
    if (url === "/in/coworking-space/mumbai-suburban/bhandup")
      return redirect("/in/coworking-space/mumbai/bhandup");
    if (url === "/in/coworking-space/mumbai-suburban/bkc")
      return redirect("/in/coworking-space/mumbai/bkc");
    if (url === "/in/coworking-space/mumbai-suburban/borivali")
      return redirect("/in/coworking-space/mumbai/borivali");
    if (url === "/in/coworking-space/mumbai-suburban/borivali-east")
      return redirect("/in/coworking-space/mumbai/borivali-east");
    if (url === "/in/coworking-space/mumbai-suburban/borivali-west")
      return redirect("/in/coworking-space/mumbai/borivali-west");
    if (url === "/in/coworking-space/mumbai-suburban/chembur")
      return redirect("/in/coworking-space/mumbai/chembur");
    if (url === "/in/coworking-space/mumbai-suburban/churchgate")
      return redirect("/in/coworking-space/mumbai/churchgate");
    if (url === "/in/coworking-space/mumbai-suburban/colaba")
      return redirect("/in/coworking-space/mumbai/colaba");
    if (url === "/in/coworking-space/mumbai-suburban/dadar")
      return redirect("/in/coworking-space/mumbai/dadar");
    if (url === "/in/coworking-space/mumbai-suburban/dahisar")
      return redirect("/in/coworking-space/mumbai/dahisar");
    if (url === "/in/coworking-space/mumbai-suburban/dahisar-east")
      return redirect("/in/coworking-space/mumbai/dahisar-east");
    if (url === "/in/coworking-space/mumbai-suburban/deonar")
      return redirect("/in/coworking-space/mumbai/deonar");
    if (url === "/in/coworking-space/mumbai-suburban/fort")
      return redirect("/in/coworking-space/mumbai/fort");
    if (url === "/in/coworking-space/mumbai-suburban/ghatkopar")
      return redirect("/in/coworking-space/mumbai/ghatkopar");
    if (url === "/in/coworking-space/mumbai-suburban/goregaon")
      return redirect("/in/coworking-space/mumbai/goregaon");
    if (url === "/in/coworking-space/mumbai-suburban/goregaon-east")
      return redirect("/in/coworking-space/mumbai/goregaon-east");
    if (url === "/in/coworking-space/mumbai-suburban/goregaon-west")
      return redirect("/in/coworking-space/mumbai/goregaon-west");
    if (url === "/in/coworking-space/mumbai-suburban/juhu")
      return redirect("/in/coworking-space/mumbai/juhu");
    if (url === "/in/coworking-space/mumbai-suburban/kandivali")
      return redirect("/in/coworking-space/mumbai/kandivali");
    if (url === "/in/coworking-space/mumbai-suburban/kandivali-west")
      return redirect("/in/coworking-space/mumbai/kandivali-west");
    if (url === "/in/coworking-space/mumbai-suburban/khar")
      return redirect("/in/coworking-space/mumbai/khar");
    if (
      url.toLowerCase() === "/in/coworking-space/mumbai-suburban/khar-west" ||
      url.toLowerCase() === "/in/coworking-space/mumbai/khar"
    )
      return redirect("/in/coworking-space/mumbai/khar-west");
    if (url === "/in/coworking-space/mumbai-suburban/lower-parel")
      return redirect("/in/coworking-space/mumbai/lower-parel");
    if (url === "/in/coworking-space/mumbai-suburban/mahalaxmi")
      return redirect("/in/coworking-space/mumbai/mahalaxmi");
    if (url === "/in/coworking-space/bangalore/mahalakshmi-layout")
      return redirect("/in/coworking-space/bangalore/mahalakshmipuram-layout");
    if (
      url.toLowerCase() === "/in/coworking-space/mumbai-suburban/mahim" ||
      url.toLowerCase() === "/in/coworking-space/mumbai/mahim"
    )
      return redirect("/in/coworking-space/mumbai/mahim-west");
    if (url === "/in/coworking-space/mumbai-suburban/malad")
      return redirect("/in/coworking-space/mumbai/malad");
    if (url === "/in/coworking-space/mumbai-suburban/malad-west")
      return redirect("/in/coworking-space/mumbai/malad-west");
    if (url === "/in/coworking-space/mumbai-suburban/marine-Lines")
      return redirect("/in/coworking-space/mumbai/marine-lines");
    if (url === "/in/coworking-space/mumbai-suburban/mulund")
      return redirect("/in/coworking-space/mumbai/mulund");
    if (url === "/in/coworking-space/mumbai-suburban/nariman-Point")
      return redirect("/in/coworking-space/mumbai/mariman-point");
    if (url === "/in/coworking-space/mumbai-suburban/parel")
      return redirect("/in/coworking-space/mumbai/parel");
    if (url === "/in/coworking-space/mumbai-suburban/powai")
      return redirect("/in/coworking-space/mumbai/powai");
    if (url === "/in/coworking-space/mumbai-suburban/prabhadevi")
      return redirect("/in/coworking-space/mumbai/prabhadevi");
    if (url === "/in/coworking-space/mumbai-suburban/santacruz")
      return redirect("/in/coworking-space/mumbai/santacruz");
    if (url === "/in/coworking-space/mumbai-suburban/santacruz-east")
      return redirect("/in/coworking-space/mumbai/santacruz-east");
    if (url === "/in/coworking-space/mumbai-suburban/santacruz-west")
      return redirect("/in/coworking-space/mumbai/santacruz-west");
    if (url === "/in/coworking-space/mumbai-suburban/thane")
      return redirect("/in/coworking/thane");
    if (url === "/in/coworking-space/Mumbai/Thane")
      return redirect("/in/coworking/thane");
    if (url === "/in/coworking-space/mumbai-suburban/vikhroli")
      return redirect("/in/coworking-space/mumbai/vikhroli");
    if (url === "/in/coworking-space/mumbai-suburban/vile-parle")
      return redirect("/in/coworking-space/mumbai/vile-parle");
    if (url === "/in/coworking-space/mumbai-suburban/vile-parle-west")
      return redirect("/in/coworking-space/mumbai/vile-parle-west");
    if (url === "/in/coworking-space/mumbai/vile-parle-west")
      return redirect("/in/coworking-space/mumbai/vile-parle");
    if (url === "/in/coworking-space/mumbai-suburban/worli")
      return redirect("/in/coworking-space/mumbai/worli");
    if (url === "/in/coworking-space/Navi Mumbai/CBD-Belapur")
      return redirect("/in/coworking-space/navi mumbai/cbd-belapur");

    if (url === "/in/coworking-space/mumbai/Dahisar")
      return redirect("/in/coworking-space/mumbai/dahisar");

    if (url === "/in/coworking-space/navi/mumbai/cbd-belapur")
      return redirect("/in/coworking-space/navi-mumbai/cbd-belapur");

    if (url === "/in/coworking-space/bangalore/malleswaram")
      return redirect("/in/coworking-space/bangalore/malleshwaram");

    if (url === "/in/coworking-space/mumbai/bandra-west")
      return redirect("/in/coworking-space/mumbai/bandra");

    if (url === "/in/coworking-space/mumbai/hitec-city")
      return redirect("/in/coworking-space/hyderabad/hitec-city");

    if (url === "/in/coworking-space/new-delhi/pushp-vihar")
      return redirect("/in/coworking-space/delhi/pushp-vihar");

    if (url === "/in/coworking-space/pune/yerwada")
      return redirect("/in/coworking-space/pune/yerawada");

    if (url === "/in/coworking-space/bengaluru/richmond-town")
      return redirect("/in/coworking-space/bangalore/richmond-town");

    if (url === "/in/coworking-space/bengaluru/goregaon-east")
      return redirect("/in/coworking-space/mumbai/goregaon-east");

    if (url === "/in/coworking-space/delhi/janak-puri")
      return redirect("/in/coworking-space/delhi/janakpuri");

    if (url === "/in/coworking-space/gurugram/sector-47")
      return redirect("/in/coworking-space/gurgaon/sector-47");

    if (url === "/in/coworking-space/new delhi/kalkaji")
      return redirect("/in/coworking-space/delhi/kalkaji");

    if (url === "/in/coworking-space/new-delhi/model-town")
      return redirect("/in/coworking-space/delhi/model-town");

    if (url === "/in/coworking-space/coimbatore/race-course")
      return redirect("/in/coworking/coimbatore");

    if (url === "/in/coworking-space/mumbai/marol")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url === "/in/coworking-space/delhi/camp")
      return redirect("/in/coworking-space/pune/camp");

    if (url === "/in/coworking-space/pune/madhapur")
      return redirect("/in/coworking-space/hyderabad/madhapur");

    if (url === "/in/coworking-space/bangalore/deccan-gymkhana")
      return redirect("/in/coworking-space/pune/deccan-gymkhana");

    if (url === "/in/spaces/coimbatore")
      return redirect("/in/coworking/coimbatore");

    if (url === "/in/spaces/bangalore") return redirect("/in/coworking/bangalore");

    if (url === "/in/spaces/mumbai") return redirect("/in/coworking/mumbai");

    if (url === "/in/spaces/Mumbai") return redirect("/in/coworking/mumbai");

    if (url === "/in/spaces/delhi") return redirect("/in/coworking/delhi");

    if (url === "/in/spaces/chennai") return redirect("/in/coworking/chennai");

    if (url === "/in/spaces/noida") return redirect("/in/coworking/noida");

    if (url === "/in/spaces/hyderabad") return redirect("/in/coworking/hyderabad");

    if (url === "/in/spaces/haralur") return redirect("/in/coworking/haralur");

    if (url === "/in/spaces/surat") return redirect("/in/coworking/surat");

    if (url === "/in/spaces/ahmedabad") return redirect("/in/coworking/ahmedabad");

    if (url === "/in/spaces/vadodara") return redirect("/in/coworking/vadodara");

    if (url === "/in/spaces/nashik") return redirect("/in/coworking/nashik");

    if (url === "/in/spaces/ramanathapuram")
      return redirect("/in/coworking/ramanathapuram");

    if (url === "/in/spaces/pune") return redirect("/in/coworking/pune");

    if (url === "/in/spaces/margao") return redirect("/in/coworking/margao");

    if (url === "/in/spaces/kolkata") return redirect("/in/coworking/kolkata");

    if (url === "/in/spaces/bengaluru") return redirect("/in/coworking/bengaluru");

    if (url === "/in/spaces/ulhasnagar")
      return redirect("/in/coworking/ulhasnagar");

    if (url === "/in/spaces/pimpri-chinchwad")
      return redirect("/in/coworking-space/pune/pimpri-chinchwad");

    if (url === "/in/spaces/new%20delhi") return redirect("/in/coworking/delhi");

    if (url === "/in/spaces/greater%20mohali")
      return redirect("/in/coworking-space/chandigarh/mohali");

    if (url === "/in/spaces/mumbai/lower-parel")
      return redirect("/in/coworking-space/mumbai/lower-parel");

    if (url === "/in/spaces/mumbai/bandra-kurla-complex")
      return redirect("/in/coworking-space/mumbai/bandra-kurla-complex");

    if (url === "/in/coworking-space/new delhi/saidullajab")
      return redirect("/in/coworking-space/delhi/saidullajab");

    if (url === "/in/coworking-space/mumbai/andheri")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url === "/in/coworking-space/gurugram/phase-3")
      return redirect("/in/coworking-space/gurgaon/dlf-phase-3");

    if (url === "/in/coworking-space/gurugram/sector-61")
      return redirect("/in/coworking-space/gurgaon/sector-61");

    if (url === "/in/coworking-space/delhi/vile-parle")
      return redirect("/in/coworking-space/mumbai/vile-parle");

    if (url === "/in/coworking-space/delhi/bandra-kurla-complex")
      return redirect("/in/coworking-space/mumbai/bandra-kurla-complex");

    if (url === "/in/coworking-space/gurugram/-sector 19")
      return redirect("/in/coworking-space/gurgaon/sector-19");

    if (url === "/in/coworking-space/gurugram/dlf-cyber-city")
      return redirect("/in/coworking-space/gurgaon/dlf-cyber-city");

    if (url === "/in/coworking-space/gurugram/sector-18")
      return redirect("/in/coworking-space/gurgaon/sector-18");

    if (url === "/in/coworking-space/gurugram/-sector-19")
      return redirect("/in/coworking-space/gurgaon/sector-19");

    if (url === "/in/coworking-space/gurugram/sector-81a")
      return redirect("/in/coworking-space/gurgaon/sector-81a");

    if (url === "/in/coworking-space/gurugram/sector-65")
      return redirect("/in/coworking-space/gurgaon/sector-65");

    if (url === "/in/coworking-space/bangalore/kurla")
      return redirect("/in/coworking-space/mumbai/kurla");

    if (url === "/in/coworking-space/gurugram/-sector 18")
      return redirect("/in/coworking-space/gurgaon/sector-18");

    if (url === "/in/coworking-space/bangalore/electronics-city")
      return redirect("/in/coworking-space/bangalore/electronic-city");

    if (url === "/in/coworking-space/gurugram/sector-38")
      return redirect("/in/coworking-space/gurgaon/sector-38");

    if (url === "/in/coworking-space/gurugram/golf-course-road")
      return redirect("/in/coworking-space/gurgaon/golf-course-road");

    if (url === "/in/coworking-space/gurugram/phase-5")
      return redirect("/in/coworking-space/gurgaon/dlf-phase-5");

    if (url === "/in/coworking-space/mumbai/andheri-chakala")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url === "/in/coworking-space/new delhi/vasant-kunj")
      return redirect("/in/coworking-space/delhi/vasant-kunj");

    if (url === "/in/coworking-space/delhi/erandawane")
      return redirect("/in/coworking-space/pune/erandwane");

    if (url === "/in/coworking-space/bangalore/lower-parel")
      return redirect("/in/coworking-space/mumbai/lower-parel");

    if (url === "/in/coworking-space/mumbai/andheri-marol")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url === "/in/coworking-space/bengaluru/-bannerghatta road")
      return redirect("/in/coworking-space/bangalore/bannerghatta-road");

    if (url === "/in/coworking-space/delhi/safdarjung")
      return redirect("/in/coworking-space/delhi/safdarjung-enclave");

    if (url === "/in/coworking-space/new-delhi/safdarjung-enclave")
      return redirect("/in/coworking-space/delhi/safdarjung-enclave");

    if (url === "/in/coworking-space/bengaluru/lower-parel")
      return redirect("/in/coworking-space/mumbai/lower-parel");

    if (url === "/in/coworking-space/chennai/vadalapani")
      return redirect("/in/coworking-space/chennai/vadapalani");

    if (url === "/in/coworking-space/new delhi/defence-colony")
      return redirect("/in/coworking-space/delhi/defence-colony");

    if (url === "/in/coworking-space/gurugram/erandwane")
      return redirect("/in/coworking-space/pune/erandwane");

    if (url === "/in/coworking-space/mumbai/andheri-east-midc")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url === "/in/spaces/mumbai/andheri-east")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url === "/in/coworking-space/new-delhi/safdarjung-development area")
      return redirect("/in/coworking-space/delhi/safdarjung-development-area");

    if (url === "/in/coworking-space/new-delhi/ajmeri-gate")
      return redirect("/in/coworking-space/delhi/ajmeri-gate");

    if (url === "/in/coworking-space/hyderabad/andheri-east")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url === "/in/coworking-space/hyderabad/mind-space")
      return redirect("/in/coworking-space/hyderabad/mindspace");

    if (url === "/in/coworking-space/navi/mumbai/sanpada")
      return redirect("/in/coworking-space/navi-mumbai/sanpada");

    if (url === "/in/coworking/gurugram") return redirect("/in/coworking/gurgaon");

    if (url === "/in/coworking-space/Navi Mumbai/Kharghar")
      return redirect("/in/coworking-space/navi mumbai/kharghar");
    if (url === "/in/coworking-space/navi/mumbai/Kharghar")
      return redirect("/in/coworking-space/navi-mumbai/kharghar");
    if (url === "/in/coworking-space/Navi Mumbai/Mahape")
      return redirect("/in/coworking-space/navi mumbai/mahape");
    if (url === "/in/coworking-space/navi/mumbai/mahape")
      return redirect("/in/coworking-space/navi-mumbai/mahape");
    if (url === "/in/coworking-space/Navi Mumbai/Nerul")
      return redirect("/in/coworking-space/navi mumbai/nerul");
    if (url === "/in/coworking-space/navi/mumbai/nerul")
      return redirect("/in/coworking-space/navi-mumbai/nerul");
    if (url === "/in/coworking-space/Navi Mumbai/Sanpada")
      return redirect("/in/coworking-space/navi mumbai/sanpada");
    if (url === "/in/coworking-space/Navi Mumbai/Turbhe")
      return redirect("/in/coworking-space/navi mumbai/turbhe");
    if (url === "/in/coworking-space/navi/mumbai/turbhe")
      return redirect("/in/coworking-space/navi-mumbai/turbhe");
    if (url === "/in/coworking-space/Navi Mumbai/Vashi")
      return redirect("/in/coworking-space/navi mumbai/vashi");
    if (url === "/in/coworking-space/navi/mumbai/vashi")
      return redirect("/in/coworking-space/navi-mumbai/vashi");
    if (url === "/in/coworking-space/Thane/Thane-East")
      return redirect("/in/coworking-space/thane/thane-east");
    if (url === "/in/coworking-space/Thane/Thane-West")
      return redirect("/in/coworking-space/thane/thane-west");
    if (url === "/in/coworking-space-for-rent/Mumbai")
      return redirect("/in/coworking/mumbai");
    if (url === "/in/coworking-space-for-rent/Navi-Mumbai")
      return redirect("/in/coworking/navi-mumbai");
    if (url === "/in/coworking-space-for-rent/Thane")
      return redirect("/in/coworking/thane");

    if (url === "/in/coworking-space/mumbai/thane")
      return redirect("/in/coworking/thane");

    if (url === "/in/coworking-space/bengaluru/hebbal")
      return redirect("/in/coworking-space/bangalore/hebbal");

    if (url === "/in/coworking-space/new-delhi/south-delhi")
      return redirect("/in/coworking-space/delhi/south-delhi");

    if (url === "/in/spaces/Hyderabad") return redirect("/in/coworking/hyderabad");

    if (url === "/in/spaces/Nashik") return redirect("/in/coworking/nashik");

    if (url === "/in/spaces/jaipur") return redirect("/in/coworking/jaipur");

    if (url === "/in/spaces/Nalitabari")
      return redirect("/in/coworking/nalitabari");

    if (url === "/in/spaces/Atmakur") return redirect("/in/coworking/atmakur");

    if (url === "/in/spaces/Kasavanahalli")
      return redirect("/in/coworking/kasavanahalli");

    if (url === "/in/spaces/Ghaziabad") return redirect("/in/coworking/ghaziabad");

    if (url === "/in/coworking-space/thane/navi-mumbai")
      return redirect("/in/coworking/navi-mumbai");
    if (url === "/in/coworking-space/thane/cbd-belapur")
      return redirect("/in/coworking-space/navi-mumbai/cbd-belapur");
    if (url === "/in/coworking-space/thane/sanpada")
      return redirect("/in/coworking-space/navi-mumbai/sanpada");
    if (url === "/in/coworking-space/thane/kharghar")
      return redirect("/in/coworking-space/navi-mumbai/kharghar");
    if (url === "/in/coworking-space/thane/mahape")
      return redirect("/in/coworking-space/navi-mumbai/mahape");
    if (url === "/in/coworking-space/thane/nerul")
      return redirect("/in/coworking-space/navi-mumbai/nerul");
    if (url === "/in/coworking-space/thane/turbhe")
      return redirect("/in/coworking-space/navi-mumbai/turbhe");
    if (url === "/in/coworking-space/thane/vashi")
      return redirect("/in/coworking-space/navi-mumbai/vashi");

    if (url === "/in/coworking-space/ranga-reddy/gachibowli")
      return redirect("/in/coworking-space/hyderabad/gachibowli");
    if (url === "/in/coworking-space/ranga-reddy/hitec-city")
      return redirect("/in/coworking-space/hyderabad/hitec-city");
    if (url === "/in/coworking-space/ranga-reddy/hanuman-nagar")
      return redirect("/in/coworking-space/hyderabad/hanuman-nagar");
    if (url === "/in/coworking-space/ranga-reddy/madhapur")
      return redirect("/in/coworking-space/hyderabad/madhapur");
    if (url === "/in/coworking-space/ranga-reddy/kondapur")
      return redirect("/in/coworking-space/hyderabad/kondapur");
    if (url === "/in/coworking-space/ranga-reddy/kothaguda")
      return redirect("/in/coworking-space/hyderabad/kothaguda");
    if (url === "/in/coworking-space/ranga-reddy/kukatpally")
      return redirect("/in/coworking-space/hyderabad/kukatpally");
    if (url === "/in/coworking-space/ranga-reddy/financial-district")
      return redirect("/in/coworking-space/hyderabad/financial-district");
    if (url === "/in/coworking-space/ranga-reddy/mind-space")
      return redirect("/in/coworking-space/hyderabad/mind-space");
    if (url === "/in/coworking-space/ranga-reddy/toli-chowki")
      return redirect("/in/coworking-space/hyderabad/toli-chowki");

    if (url === "/in/coworking-space/bangalore-urban/bengaluru")
      return redirect("/in/coworking/bengaluru");
    if (url === "/in/coworking/bengaluru")
      return redirect("/in/coworking/bangalore");
    if (url === "/in/coworking-space/bangalore-urban/infantry-road")
      return redirect("/in/coworking-space/bangalore/infantry-road");
    if (url === "/in/coworking-space/bangalore-urban/indiranagar")
      return redirect("/in/coworking-space/bangalore/indiranagar");
    if (url === "/in/coworking-space/bangalore-urban/koramangala")
      return redirect("/in/coworking-space/bangalore/koramangala");
    if (url === "/in/coworking-space/bangalore-urban/bellandur")
      return redirect("/in/coworking-space/bangalore/bellandur");
    if (url === "/in/coworking-space/bangalore-urban/residency-road")
      return redirect("/in/coworking-space/bangalore/residency-road");
    if (url === "/in/coworking-space/bangalore-urban/hsr-layout")
      return redirect("/in/coworking-space/bangalore/hsr-layout");
    if (url === "/in/coworking-space/bangalore-urban/whitefield")
      return redirect("/in/coworking-space/bangalore/whitefield");
    if (url === "/in/coworking-space/bangalore-urban/shanti-nagar")
      return redirect("/in/coworking-space/bangalore/shanti-nagar");
    if (url === "/in/coworking-space/bangalore-urban/uttarahalli-hobli")
      return redirect("/in/coworking-space/bangalore/uttarahalli-hobli");
    if (url === "/in/coworking-space/bangalore-urban/mahalakshmi-layout")
      return redirect("/in/coworking-space/bangalore/mahalakshmi-layout");
    if (url === "/in/coworking-space/bangalore-urban/jayanagar")
      return redirect("/in/coworking-space/bangalore/jayanagar");
    if (url === "/in/coworking-space/bangalore-urban/yelahanka")
      return redirect("/in/coworking-space/bangalore/yelahanka");
    if (url === "/in/coworking-space/bangalore-urban/vasanth-nagar")
      return redirect("/in/coworking-space/bangalore/vasanth-nagar");
    if (url === "/in/coworking-space/bangalore-urban/pulikeshi-nagar")
      return redirect("/in/coworking-space/bangalore/pulikeshi-nagar");
    if (url === "/in/coworking-space/bangalore-urban/btm-layout")
      return redirect("/in/coworking-space/bangalore/btm-layout");
    if (url === "/in/coworking-space/bangalore-urban/marathahalli")
      return redirect("/in/coworking-space/bangalore/marathahalli");
    if (url === "/in/coworking-space/bangalore-urban/naagarabhaavi")
      return redirect("/in/coworking-space/bangalore/naagarabhaavi");
    if (url === "/in/coworking-space/bangalore/naagarabhaavi")
      return redirect("/in/coworking-space/bangalore/naagarabhavi");
    if (url === "/in/coworking-space/bangalore-urban/domlur")
      return redirect("/in/coworking-space/bangalore/domlur");
    if (url === "/in/coworking-space/bangalore-urban/hosur-road")
      return redirect("/in/coworking-space/bangalore/hosur-road");
    if (url === "/in/coworking-space/bangalore-urban/sarjapura")
      return redirect("/in/coworking-space/bangalore/sarjapura");
    if (url === "/in/coworking-space/bangalore-urban/sanjaynagar")
      return redirect("/in/coworking-space/bangalore/sanjaynagar");
    if (url === "/in/coworking-space/bangalore/sanjaynagar")
      return redirect("/in/coworking-space/bangalore/sanjay-nagar");
    if (url === "/in/coworking-space/bangalore-urban/j.-p.-nagar")
      return redirect("/in/coworking-space/bangalore/jp-nagar");
    if (url === "/in/coworking-space/bangalore/j.-p.-nagar")
      return redirect("/in/coworking-space/bangalore/jp-nagar");
    if (url === "/in/coworking-space/bangalore-urban/electronic-city")
      return redirect("/in/coworking-space/bangalore/electronic-city");
    if (url === "/in/coworking-space/bangalore-urban/sadashiva-nagar")
      return redirect("/in/coworking-space/bangalore/sadashiva-nagar");
    if (url === "/in/coworking-space/bangalore-urban/rajajinagar")
      return redirect("/in/coworking-space/bangalore/rajajinagar");
    if (url === "/in/coworking-space/bangalore-urban/naagarabhaavi")
      return redirect("/in/coworking-space/bangalore/naagarabhaavi");
    if (url === "/in/coworking-space/bangalore-urban/outer-ring-road")
      return redirect("/in/coworking-space/bangalore/outer-ring-road");
    if (url === "/in/coworking-space/bangalore/bannerghatta-main-road")
      return redirect("/in/coworking-space/bangalore/bannerghatta-road");
    if (url === "/in/coworking-space/bangalore-urban/binnipete")
      return redirect("/in/coworking-space/bangalore/binnipete");
    if (url === "/in/coworking-space/bangalore-urban/hosur-road")
      return redirect("/in/coworking-space/bangalore/hosur-road");
    if (url === "/in/coworking-space/bangalore-urban/old-madras-road")
      return redirect("/in/coworking-space/bangalore/old-madras-road");
    if (url === "/in/coworking-space/bangalore-urban/banashankari")
      return redirect("/in/coworking-space/bangalore/banashankari");
    if (url === "/in/coworking-space/bengaluru/banashankari")
      return redirect("/in/coworking-space/bangalore/banashankari");
    if (url === "/in/coworking-space/bangalore-urban/kalyan-nagar")
      return redirect("/in/coworking-space/bangalore/kalyan-nagar");
    if (url === "/in/coworking-space/bangalore-urban/sarjapur-road")
      return redirect("/in/coworking-space/bangalore/sarjapur-road");

    if (url === "/in/coworking-space/bengaluru/bannerghatta-road")
      return redirect("/in/coworking-space/bangalore/bannerghatta-road");

    if (url === "/in/coworking-space/delhi/barakhamba-road")
      return redirect("/in/coworking-space/delhi/barakhamba");

    if (url === "/in/coworking-space/delhi/pitam-pura")
      return redirect("/in/coworking-space/delhi/pitampura");

    if (url === "/in/coworking-space/delhi/saidulajab")
      return redirect("/in/coworking-space/delhi/saidullajab");

    if (url === "/in/coworking-space/delhi/mohan-cooperative-industrial-estate")
      return redirect("/in/coworking-space/delhi/mohan-estate");

    if (url === "/in/coworking-space/bengaluru/bellandur")
      return redirect("/in/coworking-space/bangalore/bellandur");

    if (url === "/in/coworking-space/bengaluru/binnipete")
      return redirect("/in/coworking-space/bangalore/binnipete");

    if (url === "/in/coworking-space/bengaluru/brookefield")
      return redirect("/in/coworking-space/bangalore/brookefield");

    if (url === "/in/coworking-space/bengaluru/btm-layout")
      return redirect("/in/coworking-space/bangalore/btm-layout");

    if (url === "/in/coworking-space/bengaluru/domlur")
      return redirect("/in/coworking-space/bangalore/domlur");

    if (url === "/in/coworking-space/bengaluru/electronic-city")
      return redirect("/in/coworking-space/bangalore/electronic-city");
    if (url === "/in/coworking-space/bengaluru/fraser-town")
      return redirect("/in/coworking-space/bangalore/fraser-town");

    if (url === "/in/coworking-space/bengaluru/hosur--road")
      return redirect("/in/coworking-space/bangalore/hosur-road");

    if (url === "/in/coworking-space/bengaluru/hsr-layout")
      return redirect("/in/coworking-space/bangalore/hsr-layout");

    if (url === "/in/coworking-space/bengaluru/indiranagar")
      return redirect("/in/coworking-space/bangalore/indiranagar");

    if (url === "/in/coworking-space/bengaluru/infantry-road")
      return redirect("/in/coworking-space/bangalore/infantry-road");

    if (url === "/in/coworking-space/bengaluru/jayanagar")
      return redirect("/in/coworking-space/bangalore/jayanagar");

    if (url === "/in/coworking-space/bengaluru/jp-nagar")
      return redirect("/in/coworking-space/bangalore/jp-nagar");

    if (url === "/in/coworking-space/bengaluru/kalyan-nagar")
      return redirect("/in/coworking-space/bangalore/kalyan-nagar");

    if (url === "/in/coworking-space/bengaluru/koramangala")
      return redirect("/in/coworking-space/bangalore/koramangala");

    if (url === "/in/coworking-space/bengaluru/mahalakshmipuram-layout")
      return redirect("/in/coworking-space/bangalore/mahalakshmipuram-layout");

    if (url === "/in/coworking-space/bengaluru/marathahalli")
      return redirect("/in/coworking-space/bangalore/marathahalli");

    if (url === "/in/coworking-space/bengaluru/mg-road")
      return redirect("/in/coworking-space/bangalore/mg-road");

    if (url === "/in/coworking-space/bengaluru/naagarabhavi")
      return redirect("/in/coworking-space/bangalore/naagarabhavi");

    if (url === "/in/coworking-space/bengaluru/nagarbhavi")
      return redirect("/in/coworking-space/bangalore/nagarbhavi");

    if (url === "/in/coworking-space/bengaluru/old-madras-road")
      return redirect("/in/coworking-space/bangalore/old-madras-road");

    if (url === "/in/coworking-space/bengaluru/outer-ring-road")
      return redirect("/in/coworking-space/bangalore/outer-ring-road");

    if (url === "/in/coworking-space/bengaluru/rajajinagar")
      return redirect("/in/coworking-space/bangalore/rajajinagar");

    if (url === "/in/coworking-space/bengaluru/residency-road")
      return redirect("/in/coworking-space/bangalore/residency-road");

    if (url === "/in/coworking-space/bengaluru/sadashivanagar")
      return redirect("/in/coworking-space/bangalore/sadashivanagar");

    if (url === "/in/coworking-space/bengaluru/sanjay-nagar")
      return redirect("/in/coworking-space/bangalore/sanjay-nagar");

    if (url === "/in/coworking-space/bengaluru/sarjapur-road")
      return redirect("/in/coworking-space/bangalore/sarjapur-road");

    if (url === "/in/coworking-space/bengaluru/shanti-nagar")
      return redirect("/in/coworking-space/bangalore/shanti-nagar");

    if (url === "/in/coworking-space/bengaluru/uttarahalli")
      return redirect("/in/coworking-space/bangalore/uttarahalli");

    if (url === "/in/coworking-space/bengaluru/vasanth-nagar")
      return redirect("/in/coworking-space/bangalore/vasanth-nagar");

    if (url === "/in/coworking-space/bengaluru/whitefield")
      return redirect("/in/coworking-space/bangalore/whitefield");

    if (url === "/in/coworking-space/bengaluru/yelahanka")
      return redirect("/in/coworking-space/bangalore/yelahanka");

    if (url === "/in/coworking/pimpri-chinchwad")
      return redirect("/in/coworking-space/pune/pimpri-chinchwad");

    if (url === "/in/coworking-space/bangalore-urban/bannerghatta-main-road")
      return redirect("/in/coworking-space/bangalore/bannerghatta-main-road");
    if (url === "/in/coworking-space/bangalore-urban/brookefield")
      return redirect("/in/coworking-space/bangalore/brookefield");

    // new banglore url

    if (url === "/in/coworking-space/bangalore-division/bengaluru")
      return redirect("/in/coworking/bengaluru");
    // if (url === '/in/coworking/bengaluru')
    //    return redirect('/in/coworking/bangalore');
    if (url === "/in/coworking-space/bangalore-division/infantry-road")
      return redirect("/in/coworking-space/bangalore/infantry-road");
    if (url === "/in/coworking-space/bangalore-division/indiranagar")
      return redirect("/in/coworking-space/bangalore/indiranagar");
    if (url === "/in/coworking-space/bangalore-division/koramangala")
      return redirect("/in/coworking-space/bangalore/koramangala");
    if (url === "/in/coworking-space/bangalore-division/bellandur")
      return redirect("/in/coworking-space/bangalore/bellandur");
    if (url === "/in/coworking-space/bangalore-division/residency-road")
      return redirect("/in/coworking-space/bangalore/residency-road");
    if (url === "/in/coworking-space/bangalore-division/hsr-layout")
      return redirect("/in/coworking-space/bangalore/hsr-layout");
    if (url === "/in/coworking-space/bangalore-division/whitefield")
      return redirect("/in/coworking-space/bangalore/whitefield");
    if (url === "/in/coworking-space/bangalore-division/shanti-nagar")
      return redirect("/in/coworking-space/bangalore/shanti-nagar");
    if (url === "/in/coworking-space/bangalore-division/uttarahalli-hobli")
      return redirect("/in/coworking-space/bangalore/uttarahalli-hobli");
    if (url === "/in/coworking-space/bangalore-division/mahalakshmi-layout")
      return redirect("/in/coworking-space/bangalore/mahalakshmi-layout");
    if (url === "/in/coworking-space/bangalore-division/jayanagar")
      return redirect("/in/coworking-space/bangalore/jayanagar");
    if (url === "/in/coworking-space/bangalore-division/yelahanka")
      return redirect("/in/coworking-space/bangalore/yelahanka");
    if (url === "/in/coworking-space/bangalore-division/vasanth-nagar")
      return redirect("/in/coworking-space/bangalore/vasanth-nagar");
    if (url === "/in/coworking-space/bangalore-division/pulikeshi-nagar")
      return redirect("/in/coworking-space/bangalore/pulikeshi-nagar");
    if (url === "/in/coworking-space/bangalore-division/btm-layout")
      return redirect("/in/coworking-space/bangalore/btm-layout");
    if (url === "/in/coworking-space/bangalore-division/marathahalli")
      return redirect("/in/coworking-space/bangalore/marathahalli");
    if (url === "/in/coworking-space/bangalore-division/naagarabhaavi")
      return redirect("/in/coworking-space/bangalore/naagarabhaavi");
    if (url === "/in/coworking-space/bangalore-division/domlur")
      return redirect("/in/coworking-space/bangalore/domlur");
    if (url === "/in/coworking-space/bangalore-division/hosur-road")
      return redirect("/in/coworking-space/bangalore/hosur-road");
    if (url === "/in/coworking-space/bangalore-division/sarjapura")
      return redirect("/in/coworking-space/bangalore/sarjapura");
    if (url === "/in/coworking-space/bangalore-division/sanjaynagar")
      return redirect("/in/coworking-space/bangalore/sanjaynagar");
    if (url === "/in/coworking-space/bangalore-division/j.-p.-nagar")
      return redirect("/in/coworking-space/bangalore/jp-nagar");
    if (url === "/in/coworking-space/bangalore-division/electronic-city")
      return redirect("/in/coworking-space/bangalore/electronic-city");
    if (url === "/in/coworking-space/bangalore-division/sadashiva-nagar")
      return redirect("/in/coworking-space/bangalore/sadashiva-nagar");
    if (url === "/in/coworking-space/bangalore-division/rajajinagar")
      return redirect("/in/coworking-space/bangalore/rajajinagar");
    if (url === "/in/coworking-space/bangalore-division/naagarabhaavi")
      return redirect("/in/coworking-space/bangalore/naagarabhaavi");
    if (url === "/in/coworking-space/bangalore-division/outer-ring-road")
      return redirect("/in/coworking-space/bangalore/outer-ring-road");
    if (url === "/in/coworking-space/bangalore-division/binnipete")
      return redirect("/in/coworking-space/bangalore/binnipete");
    if (url === "/in/coworking-space/bangalore-division/hosur-road")
      return redirect("/in/coworking-space/bangalore/hosur-road");
    if (url === "/in/coworking-space/bangalore-division/old-madras-road")
      return redirect("/in/coworking-space/bangalore/old-madras-road");
    if (url === "/in/coworking-space/bangalore-division/banashankari")
      return redirect("/in/coworking-space/bangalore/banashankari");
    if (url === "/in/coworking-space/bengaluru/banashankari")
      return redirect("/in/coworking-space/bangalore/banashankari");
    if (url === "/in/coworking-space/bangalore-division/kalyan-nagar")
      return redirect("/in/coworking-space/bangalore/kalyan-nagar");
    if (url === "/in/coworking-space/bangalore-division/sarjapur-road")
      return redirect("/in/coworking-space/bangalore/sarjapur-road");

    if (url === "/in/coworking-space/bengaluru/bannerghatta-road")
      return redirect("/in/coworking-space/bangalore/bannerghatta-road");

    if (url === "/in/coworking-space/bengaluru/bellandur")
      return redirect("/in/coworking-space/bangalore/bellandur");

    if (url === "/in/coworking-space/bengaluru/binnipete")
      return redirect("/in/coworking-space/bangalore/binnipete");

    if (url === "/in/coworking-space/bengaluru/brookefield")
      return redirect("/in/coworking-space/bangalore/brookefield");

    if (url === "/in/coworking-space/bengaluru/btm-layout")
      return redirect("/in/coworking-space/bangalore/btm-layout");

    if (url === "/in/coworking-space/bengaluru/domlur")
      return redirect("/in/coworking-space/bangalore/domlur");

    if (url === "/in/coworking-space/bengaluru/electronic-city")
      return redirect("/in/coworking-space/bangalore/electronic-city");
    if (url === "/in/coworking-space/bengaluru/fraser-town")
      return redirect("/in/coworking-space/bangalore/fraser-town");

    if (url === "/in/coworking-space/bengaluru/hosur--road")
      return redirect("/in/coworking-space/bangalore/hosur-road");

    if (url === "/in/coworking-space/bengaluru/hsr-layout")
      return redirect("/in/coworking-space/bangalore/hsr-layout");

    if (url === "/in/coworking-space/bengaluru/indiranagar")
      return redirect("/in/coworking-space/bangalore/indiranagar");

    if (url === "/in/coworking-space/bengaluru/infantry-road")
      return redirect("/in/coworking-space/bangalore/infantry-road");

    if (url === "/in/coworking-space/bengaluru/jayanagar")
      return redirect("/in/coworking-space/bangalore/jayanagar");

    if (url === "/in/coworking-space/bengaluru/jp-nagar")
      return redirect("/in/coworking-space/bangalore/jp-nagar");

    if (url === "/in/coworking-space/bengaluru/kalyan-nagar")
      return redirect("/in/coworking-space/bangalore/kalyan-nagar");

    if (url === "/in/coworking-space/bengaluru/koramangala")
      return redirect("/in/coworking-space/bangalore/koramangala");

    if (url === "/in/coworking-space/bengaluru/mahalakshmipuram-layout")
      return redirect("/in/coworking-space/bangalore/mahalakshmipuram-layout");

    if (url === "/in/coworking-space/bengaluru/marathahalli")
      return redirect("/in/coworking-space/bangalore/marathahalli");

    if (url === "/in/coworking-space/bengaluru/mg-road")
      return redirect("/in/coworking-space/bangalore/mg-road");

    if (url === "/in/coworking-space/bengaluru/naagarabhavi")
      return redirect("/in/coworking-space/bangalore/naagarabhavi");

    if (url === "/in/coworking-space/bengaluru/nagarbhavi")
      return redirect("/in/coworking-space/bangalore/nagarbhavi");

    if (url === "/in/coworking-space/bengaluru/old-madras-road")
      return redirect("/in/coworking-space/bangalore/old-madras-road");

    if (url === "/in/coworking-space/bengaluru/outer-ring-road")
      return redirect("/in/coworking-space/bangalore/outer-ring-road");

    if (url === "/in/coworking-space/bengaluru/rajajinagar")
      return redirect("/in/coworking-space/bangalore/rajajinagar");

    if (url === "/in/coworking-space/bengaluru/residency-road")
      return redirect("/in/coworking-space/bangalore/residency-road");

    if (url === "/in/coworking-space/bengaluru/sadashivanagar")
      return redirect("/in/coworking-space/bangalore/sadashivanagar");

    if (url === "/in/coworking-space/bengaluru/sanjay-nagar")
      return redirect("/in/coworking-space/bangalore/sanjay-nagar");

    if (url === "/in/coworking-space/bengaluru/sarjapur-road")
      return redirect("/in/coworking-space/bangalore/sarjapur-road");

    if (url === "/in/coworking-space/bengaluru/shanti-nagar")
      return redirect("/in/coworking-space/bangalore/shanti-nagar");

    if (url === "/in/coworking-space/bengaluru/uttarahalli")
      return redirect("/in/coworking-space/bangalore/uttarahalli");

    if (url === "/in/coworking-space/bengaluru/vasanth-nagar")
      return redirect("/in/coworking-space/bangalore/vasanth-nagar");

    if (url === "/in/coworking-space/bengaluru/whitefield")
      return redirect("/in/coworking-space/bangalore/whitefield");

    if (url === "/in/coworking-space/bengaluru/yelahanka")
      return redirect("/in/coworking-space/bangalore/yelahanka");

    if (url === "/in/coworking/pimpri-chinchwad")
      return redirect("/in/coworking-space/pune/pimpri-chinchwad");

    if (url === "/in/coworking-space/bangalore-division/bannerghatta-main-road")
      return redirect("/in/coworking-space/bangalore/bannerghatta-main-road");
    if (url === "/in/coworking-space/bangalore-division/brookefield")
      return redirect("/in/coworking-space/bangalore/brookefield");

    //end new banglore url

    if (url === "/in/coworking-space/new-delhi/connaught-place")
      return redirect("/in/coworking-space/delhi/connaught-place");
    if (url === "/in/coworking-space/south-delhi/saket")
      return redirect("/in/coworking-space/delhi/saket");
    if (url === "/in/coworking-space/south-west-delhi/aerocity")
      return redirect("/in/coworking-space/delhi/aerocity");
    if (url === "/in/coworking-space/new-delhi/aerocity")
      return redirect("/in/coworking-space/delhi/aerocity");
    if (url === "/in/coworking-space/central-delhi/barakhamba-road")
      return redirect("/in/coworking-space/delhi/barakhamba-road");

    if (url === "/in/coworking-space/new-delhi/anand-vihar")
      return redirect("/in/coworking-space/delhi/anand-vihar");

    if (url === "/in/coworking-space/new-delhi/ashok-park-main")
      return redirect("/in/coworking-space/delhi/ashok-park");

    if (url === "/in/coworking-space/new-delhi/badarpur")
      return redirect("/in/coworking-space/delhi/badarpur");

    //new delhi

    if (url === "/in/coworking-space/delhi-division/connaught-place")
      return redirect("/in/coworking-space/delhi/connaught-place");

    if (url === "/in/coworking-space/delhi-division/saket")
      return redirect("/in/coworking-space/delhi/saket");

    if (url === "/in/coworking-space/delhi-division/aerocity")
      return redirect("/in/coworking-space/delhi/aerocity");

    if (url === "/in/coworking-space/delhi-division/aerocity")
      return redirect("/in/coworking-space/delhi/aerocity");

    if (url === "/in/coworking-space/delhi-division/barakhamba-road")
      return redirect("/in/coworking-space/delhi/barakhamba-road");

    if (url === "/in/coworking-space/delhi-division/anand-vihar")
      return redirect("/in/coworking-space/delhi/anand-vihar");

    if (url === "/in/coworking-space/delhi-division/ashok-park-main")
      return redirect("/in/coworking-space/delhi/ashok-park");

    if (url === "/in/coworking-space/delhi-division/badarpur")
      return redirect("/in/coworking-space/delhi/badarpur");

    //MUmbai URL
    if (url === "/in/coworking-space/konkan-division/andheri")
      return redirect("/in/coworking-space/mumbai/andheri");

    if (url === "/in/coworking-space/konkan-division/andheri-east")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url === "/in/coworking-space/konkan-division/ballard-estate")
      return redirect("/in/coworking-space/mumbai/ballard-estate");

    if (url === "/in/coworking-space/konkan-division/bandra-kurla-complex")
      return redirect("/in/coworking-space/mumbai/bandra-kurla-complex");

    if (url === "/in/coworking-space/konkan-division/chembur")
      return redirect("/in/coworking-space/mumbai/chembur");

    if (url === "/in/coworking-space/konkan-division/churchgate")
      return redirect("/in/coworking-space/mumbai/churchgate");

    if (url === "/in/coworking-space/konkan-division/goregaon-west")
      return redirect("/in/coworking-space/mumbai/goregaon-west");

    if (url === "/in/coworking-space/konkan-division/kandivali")
      return redirect("/in/coworking-space/mumbai/kandivali");

    if (url === "/in/coworking-space/konkan-division/marine-lines")
      return redirect("/in/coworking-space/mumbai/marine-lines");

    if (url === "/in/coworking-space/konkan-division/kurla")
      return redirect("/in/coworking-space/mumbai/kurla");

    if (url === "/in/coworking-space/konkan-division/nahur")
      return redirect("/in/coworking-space/mumbai/nahur");
    if (url === "/in/coworking-space/konkan-division/vile-parle")
      return redirect("/in/coworking-space/mumbai/vile-parle");
    if (url === "/in/coworking-space/konkan-division/saki-vihar")
      return redirect("/in/coworking-space/mumbai/saki-vihar");
    if (url === "/in/coworking-space/konkan-division/nityanand-nagar")
      return redirect("/in/coworking-space/mumbai/nityanand-nagar");
    if (url === "/in/coworking-space/konkan-division/parel")
      return redirect("/in/coworking-space/mumbai/parel");
    if (url === "/in/coworking-space/konkan-division/powai")
      return redirect("/in/coworking-space/mumbai/powai");
    if (url === "/in/coworking-space/konkan-division/prabhadevi")
      return redirect("/in/coworking-space/mumbai/prabhadevi");
    if (url === "/in/coworking-space/konkan-division/santacruz")
      return redirect("/in/coworking-space/mumbai/santacruz");
    if (url === "/in/coworking-space/konkan-division/santacruz-east")
      return redirect("/in/coworking-space/mumbai/santacruz-east");
    if (url === "/in/coworking-space/konkan-division/santacruz-west")
      return redirect("/in/coworking-space/mumbai/santacruz-west");
    if (url === "/in/coworking-space/konkan-division/thane")
      return redirect("/in/coworking-space/mumbai//thane");
    // if (url === '/in/coworking-space/Mumbai/Thane')
    //   return redirect('/in/coworking/thane');
    if (url === "/in/coworking-space/konkan-division/vikhroli")
      return redirect("/in/coworking-space/mumbai/vikhroli");

    if (url === "/in/coworking-space/konkan-division/mulund")
      return redirect("/in/coworking-space/mumbai/mulund");

    if (url === "/in/coworking-space/konkan-division/malad")
      return redirect("/in/coworking-space/mumbai/malad");

    if (url === "/in/coworking-space/konkan-division/mahalakshmi")
      return redirect("/in/coworking-space/mumbai/mahalakshmi");

    if (url === "/in/coworking-space/konkan-division/lower-parel")
      return redirect("/in/coworking-space/mumbai/lower-parel");

    if (url === "/in/coworking-space/konkan-division/khar-west")
      return redirect("/in/coworking-space/mumbai/khar-west");

    if (url === "/in/coworking-space/konkan-division/kandivali-west")
      return redirect("/in/coworking-space/mumbai/kandivali-west");

    if (url === "/in/coworking-space/konkan-division/goregaon")
      return redirect("/in/coworking-space/mumbai/goregaon");

    if (url === "/in/coworking-space/konkan-division/ghatkopar")
      return redirect("/in/coworking-space/mumbai/ghatkopar");

    if (url === "/in/coworking-space/konkan-division/deonar")
      return redirect("/in/coworking-space/mumbai/deonar");

    if (url === "/in/coworking-space/konkan-division/dahisar-east")
      return redirect("/in/coworking-space/mumbai/dahisar-east");

    if (url === "/in/coworking-space/Mumbai/dahisar-east")
      return redirect("/in/coworking-space/mumbai/dahisar-east");

    if (url === "/in/coworking-space/konkan-division/borivali")
      return redirect("/in/coworking-space/mumbai/borivali");

    if (url === "/in/coworking-space/konkan-division/borivali-west")
      return redirect("/in/coworking-space/mumbai/borivali-west");

    if (url === "/in/coworking-space/konkan-division/borivali-east")
      return redirect("/in/coworking-space/mumbai/borivali-east");

    if (url === "/i/in/coworking-space/new-delhi/barakhamba-road")
      return redirect("/in/coworking-space/delhi/barakhamba");

    if (url === "/in/coworking-space/new-delhi/bhikaji-cama-place")
      return redirect("/in/coworking-space/new-delhi/bhikaji-cama-place");

    if (url === "/in/coworking-space/new-delhi/defence-colony")
      return redirect("/in/coworking-space/delhi/defence-colony");

    if (url === "/in/coworking-space/new-delhi/dwarka")
      return redirect("/in/coworking-space/delhi/dwarka");

    if (url === "/in/coworking-space/new-delhi/green-park")
      return redirect("/in/coworking-space/delhi/green-park");

    if (url === "/in/coworking-space/new-delhi/hauz-khas-village")
      return redirect("/in/coworking-space/delhi/hauz-khas-village");

    if (url.toLowerCase() === "/in/coworking-space/mumbai/andheri")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url === "/in/coworking-space/new-delhi/janak-puri")
      return redirect("/in/coworking-space/delhi/janak-puri");

    if (url === "/in/coworking-space/new-delhi/janakpuri")
      return redirect("/in/coworking-space/delhi/janak-puri");

    if (url === "/in/coworking-space/new-delhi/jhandewalan")
      return redirect("/in/coworking-space/delhi/jhandewalan");

    if (url === "/in/coworking-space/new-delhi/defence-colony")
      return redirect("/in/coworking-space/delhi/defence-colony");

    if (url === "/in/coworking-space/new-delhi/kalkaji")
      return redirect("/in/coworking-space/delhi/kalkaji");

    if (url === "/in/coworking-space/new-delhi/madhu-vihar")
      return redirect("/in/coworking-space/delhi/madhu-vihar");

    if (url === "/in/coworking-space/new-delhi/mayur-vihar")
      return redirect("/in/coworking-space/delhi/mayur-vihar");

    if (url === "/in/coworking-space/new-delhi/mohan-estate")
      return redirect("/in/coworking-space/delhi/mohan-estate");

    if (url === "/in/coworking-space/new-delhi/madhu-vihar")
      return redirect("/in/coworking-space/delhi/madhu-vihar");

    if (url === "/in/coworking-space/new-delhi/nehru-place")
      return redirect("/in/coworking-space/delhi/nehru-place");

    if (url === "/in/coworking-space/new-delhi/netaji-subhash-place")
      return redirect("/in/coworking-space/delhi/netaji-subhash-place");

    if (url === "/in/coworking-space/new-delhi/okhla")
      return redirect("/in/coworking-space/delhi/okhla");

    if (url === "/in/coworking-space/andheri/andheri")
      return redirect("/in/coworking-space/mumbai/andheri");

    if (url === "/in/coworking-space/new-delhi/paschim-vihar")
      return redirect("/in/coworking-space/delhi/paschim-vihar");

    if (url === "/in/coworking-space/new-delhi/pitampura")
      return redirect("/in/coworking-space/delhi/pitampura");

    if (url === "/coworking-space/new-delhi/preet-vihar")
      return redirect("/in/coworking-space/delhi/preet-vihar");

    if (url === "/in/coworking-space/new-delhi/rohini")
      return redirect("/in/coworking-space/delhi/rohini");

    if (url === "/in/coworking-space/new-delhi/safdarjung-development-area")
      return redirect("/in/coworking-space/delhi/safdarjung");

    if (url === "/in/coworking-space/new-delhi/saidullajab")
      return redirect("/in/coworking-space/delhi/saidullajab");

    if (url === "/in/coworking-space/new-delhi/safdarjung-enclave")
      return redirect("/in/coworking-space/delhi/safdarjung");

    if (url === "/in/coworking-space/new-delhi/saket")
      return redirect("/in/coworking-space/delhi/saket");

    //new delhi url

    if (url === "/i/in/coworking-space/delhi-division/barakhamba-road")
      return redirect("/in/coworking-space/delhi/barakhamba");

    if (url === "/in/coworking-space/delhi-division/bhikaji-cama-place")
      return redirect("/in/coworking-space/delhi/bhikaji-cama-place");

    if (url === "/in/coworking-space/delhi-division/defence-colony")
      return redirect("/in/coworking-space/delhi/defence-colony");

    if (url === "/in/coworking-space/delhi-division/dwarka")
      return redirect("/in/coworking-space/delhi/dwarka");

    if (url === "/in/coworking-space/delhi-division/green-park")
      return redirect("/in/coworking-space/delhi/green-park");

    if (url === "/in/coworking-space/delhi-division/hauz-khas-village")
      return redirect("/in/coworking-space/delhi/hauz-khas-village");

    if (url === "/in/coworking-space/delhi-division/janak-puri")
      return redirect("/in/coworking-space/delhi/janak-puri");

    if (url === "/in/coworking-space/delhi-division/janakpuri")
      return redirect("/in/coworking-space/delhi/janak-puri");

    if (url === "/in/coworking-space/delhi-division/jhandewalan")
      return redirect("/in/coworking-space/delhi/jhandewalan");

    if (url === "/in/coworking-space/delhi-division/defence-colony")
      return redirect("/in/coworking-space/delhi/defence-colony");

    if (url === "/in/coworking-space/delhi-division/kalkaji")
      return redirect("/in/coworking-space/delhi/kalkaji");

    if (url === "/in/coworking-space/delhi-division/madhu-vihar")
      return redirect("/in/coworking-space/delhi/madhu-vihar");

    if (url === "/in/coworking-space/delhi-division/mayur-vihar")
      return redirect("/in/coworking-space/delhi/mayur-vihar");

    if (url === "/in/coworking-space/delhi-division/mohan-estate")
      return redirect("/in/coworking-space/delhi/mohan-estate");

    if (url === "/in/coworking-space/delhi-division/madhu-vihar")
      return redirect("/in/coworking-space/delhi/madhu-vihar");

    if (url === "/in/coworking-space/delhi-division/nehru-place")
      return redirect("/in/coworking-space/delhi/nehru-place");

    if (url === "/in/coworking-space/delhi-division/netaji-subhash-place")
      return redirect("/in/coworking-space/delhi/netaji-subhash-place");

    if (url === "/in/coworking-space/delhi-division/okhla")
      return redirect("/in/coworking-space/delhi/okhla");

    if (url === "/in/coworking-space/andheri/andheri")
      return redirect("/in/coworking-space/mumbai/andheri");

    if (url === "/in/coworking-space/delhi-division/paschim-vihar")
      return redirect("/in/coworking-space/delhi/paschim-vihar");

    if (url === "/in/coworking-space/delhi-division/pitampura")
      return redirect("/in/coworking-space/delhi/pitampura");

    if (url === "/coworking-space/delhi-division/preet-vihar")
      return redirect("/in/coworking-space/delhi/preet-vihar");

    if (url === "/in/coworking-space/delhi-division/rohini")
      return redirect("/in/coworking-space/delhi/rohini");

    if (
      url === "/in/coworking-space/delhi-division/safdarjung-development-area"
    )
      return redirect("/in/coworking-space/delhi/safdarjung");

    if (url === "/in/coworking-space/delhi-division/saidullajab")
      return redirect("/in/coworking-space/delhi/saidullajab");

    if (url === "/in/coworking-space/delhi-division/safdarjung-enclave")
      return redirect("/in/coworking-space/delhi/safdarjung");

    if (url === "/in/coworking-space/delhi-division/saket")
      return redirect("/in/coworking-space/delhi/saket");

    //Jaipur

    if (url === "/in/coworking-space/jaipur-division/jaipur")
      return redirect("/in/coworking/jaipur");

    if (url === "/in/coworking-space/jaipur-division/ashok-nagar")
      return redirect("/in/coworking-space/jaipur/ashok-nagar");

    if (url === "/in/coworking-space/jaipur-division/bais-godam")
      return redirect("/in/coworking-space/jaipur/bais-godam");

    if (url === "/in/coworking-space/jaipur-division/brijlalpura")
      return redirect("/in/coworking-space/jaipur/brijlalpura");

    if (url === "/in/coworking-space/jaipur-division/civil-lines")
      return redirect("/in/coworking-space/jaipur/civil-lines");

    if (url === "/in/coworking-space/jaipur-division/durgapura")
      return redirect("/in/coworking-space/jaipur/durgapura");

    if (url === "/in/coworking-space/jaipur-division/gopal-pura-mode")
      return redirect("/in/coworking-space/jaipur/gopal-pura-mode");

    if (url === "/in/coworking-space/jaipur-division/heerapura")
      return redirect("/in/coworking-space/jaipur/heerapura");

    if (url === "/in/coworking-space/jaipur-division/jagatpura")
      return redirect("/in/coworking-space/jaipur/jagatpura");

    if (url === "/in/coworking-space/jaipur-division/jawahar-nagar")
      return redirect("/in/coworking-space/jaipur/jawahar-nagar");

    if (url === "/in/coworking-space/jaipur-division/lalkothi")
      return redirect("/in/coworking-space/jaipur/lalkothi");

    if (url == "/in/coworking-space/bengaluru/dahisar-east")
      return redirect("/in/coworking/bangalore");

    if (url == "/in/coworking-space/Mumbai/Andheri-East")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url == "/in/coworking-space/bengaluru/mahalakshmipuram-layout")
      return redirect("/in/coworking/bangalore");

    if (url == "/in/coworking-space/bengaluru/btm-4th-stage")
      return redirect("/in/coworking/bangalore");

    if (url == "/in/coworking/chennai/perungudi")
      return redirect("/in/coworking/chennai/perungudi");

    if (url == "/coworking-space/smartworks-bidhannagar-1324")
      return redirect("/in/coworking/kolkata");

    if (url == "/in/coworking-space/pune") return redirect("/in/coworking/pune");

    if (url == "/coworking-space/hive-hostel-andheri-east-1836")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url == "/coworking-space/Community-Coworks-Andheri-West-1843")
      return redirect("/coworking-space/community-coworks-andheri-west-1843");

    if (url == "/coworking-space/EFC-BKC-1235")
      return redirect("/coworking-space/efc-bkc-1235");

    if (url == "/contact-form?space_id=1558") return redirect("/");

    if (url == "/coworking-space/Workcult-Coworking-Space-Viman-Nagar-203")
      return redirect("/coworking-space/workcult-coworking-space-viman-nagar-203");

    if (url == "/in/coworking-space/navi-mumbai/vashi")
      return redirect("/in/coworking-space/navi-mumbai/vashi");

    if (url == "/coworking-space/cowrks-powai-72")
      return redirect("/in/coworking/mumbai");

    if (url == "/in/coworking-space/bengaluru/goregaon-west")
      return redirect("/in/coworking-space/mumbai/goregaon");

    if (url == "/in/coworking-space/gurugram/-sector 18")
      return redirect("/in/coworking/gurgaon");

    if (url == "/in/coworking/delhi") return redirect("/in/coworking/delhi");

    if (url == "/in/coworking-space/bengaluru/fraser-town")
      return redirect("/in/coworking-space/bangalore/fraser-town");

    if (url == "/in/coworking-space/bengaluru/marathahalli")
      return redirect("/in/coworking/bangalore");

    if (url == "/in/coworking/nanakaramguda")
      return redirect("/in/coworking/nanakaramguda");

    if (url === "/in/coworking-space/bengaluru/dahisar-east")
      return redirect("/in/coworking/bangalore");
    if (url === "/in/coworking-space/Mumbai/Andheri-East")
      return redirect("/in/coworking-space/mumbai/andheri-east");
    if (url === "/in/coworking-space/bengaluru/mahalakshmipuram-layout")
      return redirect("/in/coworking/bangalore");
    if (url === "/in/coworking-space/bengaluru/btm-4th-stage")
      return redirect("/in/coworking/bangalore");
    if (url === "/in/coworking-space/nashik")
      return redirect("/in/coworking/nashik");
    if (url === "/in/coworking/chennai/perungudi")
      return redirect("/in/coworking/chennai");
    if (url === "/coworking-space/smartworks-bidhannagar-1324")
      return redirect("/coworking-space/smartworks-bidhannagar-1324");
    if (url === "/in/coworking-space/pune") return redirect("/in/coworking/pune");
    if (url === "/coworking-space/hive-hostel-andheri-east-1836")
      return redirect("/coworking-space/hive-hostel-andheri-east-1836");
    if (url === "/coworking-space/Community-Coworks-Andheri-West-1843")
      return redirect("/in/coworking/mumbai");
    if (url === "/in/coworking-space/jaipur/lalkothi")
      return redirect("/in/coworking-space/jaipur/lalkothi");
    if (url === "/coworking-space/EFC-BKC-1235")
      return redirect("/in/coworking-space/mumbai/bandra-kurla-complex");
    if (url === "/contact-form?space_id=1558") return redirect("/");
    if (url === "/coworking-space/Workcult-Coworking-Space-Viman-Nagar-203")
      return redirect("/in/coworking/pune");
    if (url === "/in/coworking-space/navi-mumbai/vashi")
      return redirect("/in/coworking/navi-mumbai");
    if (url === "/coworking-space/cowrks-powai-72")
      return redirect("/in/coworking/mumbai");
    if (url === "/in/coworking-space/bengaluru/goregaon-west")
      return redirect("/in/coworking/bangalore");
    if (url === "/in/coworking-space/bengaluru/goregaon-west")
      return redirect("/in/coworking/bangalore");
    if (url === "/in/coworking-space/gurugram/-sector 18")
      return redirect("/in/coworking/gurgaon");
    if (url === "/in/coworking/delhi") return redirect("/in/coworking/delhi");
    if (url === "/in/coworking-space/bengaluru/fraser-town")
      return redirect("/in/coworking/bangalore");
    if (url === "/in/coworking-space/bengaluru/marathahalli")
      return redirect("/in/coworking-space/bangalore/marathahalli");
    if (url === "/in/coworking/nanakaramguda")
      return redirect("/in/coworking/hyderabad");
    if (url === "/") return redirect("/");
    if (url === "/in/coworking-space/delhi") return redirect("/in/coworking/delhi");
    if (url === "/in/coworking-space/bengaluru/saki-vihar")
      return redirect("/in/coworking/bangalore");
    if (url === "/in/coworking-space/bengaluru/saki-vihar")
      return redirect("/in/coworking/bangalore");
    if (url === "/in/coworking-space/bangalore/indiranagar")
      return redirect("/in/coworking-space/bangalore/indiranagar");
    if (url === "/in/coworking/gurugram") return redirect("/in/coworking/gurgaon");
    if (url === "/in/coworking-space/nanakaramguda")
      return redirect("/in/coworking-space/nanakaramguda");
    if (url === "/in/coworking-space/noida/-sector-63")
      return redirect("/in/coworking-space/noida/sector-63");
    if (url === "/in/coworking-space/gurgaon")
      return redirect("/in/coworking/gurgaon");
    if (url === "/in/coworking-space/bangalore/rama-nagar")
      return redirect("/in/coworking-space/bangalore/rama-nagar");
    if (url === "/in/coworking-space/navi mumbai/ghansoli")
      return redirect("/in/coworking/navi-mumbai");
    if (url === "/in/coworking-space/new-delhi/bhikaji-cama-place")
      return redirect("/in/coworking/delhi");
    if (url === "/in/coworking-space/bangalore/sanjay-nagar")
      return redirect("/in/coworking-space/bangalore/sanjay-nagar");
    if (url === "/in/coworking-space/bengaluru/lower-parel")
      return redirect("/in/coworking-space/mumbai/lower-parel");
    if (url === "/in/coworking/chennai/perumbakkam")
      return redirect("/in/coworking/chennai/perumbakkam");
    if (url === "/in/coworking-space/bangalore/yerawada")
      return redirect("/in/coworking-space/bangalore/yerawada");
    if (url === "/in/coworking-space/jaipur/panchyawala")
      return redirect("/in/coworking-space/jaipur/panchyawala");
    if (url === "/in/coworking-space/new delhi/okhla-phase 3")
      return redirect("/in/coworking/delhi");
    if (url === "/in/coworking-space/mumbai/bandra-kurla complex")
      return redirect("/in/coworking-space/mumbai/bandra-kurla-complex");
    if (url === "/in/coworking-space/mumbai/bandra-west")
      return redirect("/in/coworking-space/mumbai/bandra-west");
    if (url === "/in/coworking-space/bangalore/mahadevapura")
      return redirect("/in/coworking-space/bangalore/mahadevapura");
    if (url === "/in/coworking-space/mumbai/nityanand-nagar")
      return redirect("/in/coworking-space/mumbai/nityanand-nagar");
    if (url === "/coworking-space/lets-work-(opening-soon)-andheri-east-2119")
      return redirect("/in/coworking-space/mumbai/andheri-east");
    if (url === "/coworking-space/one-co.work-nungambakkam-1646")
      return redirect("/in/coworking/chennai");
    if (url === "/in/coworking-space/hyderabad/ballard-estate")
      return redirect("/in/coworking-space/hyderabad/ballard-estate");
    if (url === "/coworking-space/603-The-CoWorking-Space-Powai-68")
      return redirect("/in/coworking/mumbai");
    if (url === "/coworking-space/WeWork-Koramangala-1933")
      return redirect("/in/coworking/bangalore");
    if (url === "/in/coworking-space/gurugram/camp")
      return redirect("/in/coworking-space/gurugram/camp");
    if (url === "/in/coworking-space/bengaluru/electronic-city")
      return redirect("/in/coworking-space/bangalore/electronic-city");
    if (url === "/in/coworking-space/bengaluru/hsr-layout")
      return redirect("/in/coworking-space/bangalore/hsr-layout");
    if (url === "/in/coworking-space/new delhi/pushp-vihar")
      return redirect("/in/coworking/delhi");
    if (url === "/in/coworking-space/gurugram/-sector 45")
      return redirect("/in/coworking/gurgaon");
    if (url === "/in/coworking-space/mumbai/andheri")
      return redirect("/in/coworking-space/mumbai/andheri");
    if (url === "/in/coworking-space/bengaluru/kalyan-nagar")
      return redirect("/in/coworking/bangalore");
    if (url === "/pages/faqs") return redirect("/");
    if (url === "/coworking-space/WrkPod-Avarampalayam-1745")
      return redirect("/in/coworking/coimbatore");
    if (url === "/in/coworking-space/new-delhi/aerocity")
      return redirect("/in/coworking/delhi");
    if (url === "/in/coworking-space/hyderabad/kurla")
      return redirect("/in/coworking-space/mumbai/kurla");
    if (url === "/in/coworking-space/new delhi/malviya-nagar")
      return redirect("/in/coworking/delhi");
    if (url === "/in/coworking-space/navi-mumbai/navi-mumbai")
      return redirect("/in/coworking/navi-mumbai");
    if (url === "/coworking-space/bridge -whitefield-855")
      return redirect("/in/coworking/bangalore");
    if (url === "/in/coworking-space/mumbai/vile-parle west")
      return redirect("/in/coworking-space/mumbai/vile-parle");
    if (url === "/coworking-space/pinc-squares--jp-nagar-764")
      return redirect("//coworking-space/pinc-squares-jp-nagar-764");
    if (url === "/in/coworking-space/bengaluru/outer-ring-road")
      return redirect("/in/coworking-space/bangalore/outer-ring-road");
    if (url === "/in/coworking-space/new-delhi/okhla")
      return redirect("/in/coworking-space/delhi/okhla");
    if (url === "/in/coworking-space/bangalore/viman-nagar")
      return redirect("/in/coworking-space/bangalore/viman-nagar");
    if (url === "/spaces/inactivespaces") return redirect("/");
    if (url === "/in/coworking-space/ahmedabad/ellisbridge")
      return redirect("/in/coworking-space/ahmedabad/ellisbridge");
    if (url === "/in/coworking/vadodara") return redirect("/in/coworking/vadodara");
    if (url === "/coworking-space/Regus-Whitefield-838")
      return redirect("/coworking-space/regus-whitefield-838");
    if (url === "/spaces/user-bookings-request") return redirect("/");
    if (url === "/pages/mailinbox") return redirect("/");
    if (url === "/spaces/leads") return redirect("/");
    if (url === "/wallet/creditWalletPlans") return redirect("/");
    if (url === "/spaces/visit-enquiry") return redirect("/");
    if (url === "/coworking-space/Regus-Ashok-Nagar-1902")
      return redirect("/in/coworking/chennai");
    if (url === "/coworking-space/IndiQube-HM-Vibha-Koramangala-876")
      return redirect("/coworking-space/indiqube-hm-vibha-koramangala-876");
    if (url === "/coworking-space/Awfis-Sector-63-1589")
      return redirect("/coworking-space/awfis-sector-63-1589");
    if (url === "/in/coworking-space/Mumbai/Lower-Parel")
      return redirect("/in/coworking-space/mumbai/lower-parel");
    if (url === "/coworking-space/Awfis-Powai-72")
      return redirect("/in/coworking/mumbai");
    if (url === "/coworking-space/The-Executive-Centre-Thousand-Lights-1667")
      return redirect("/coworking-space/the-executive-centre-thousand-lights-1667");
    if (url === "/contact-form/mumbai/goregaoneast")
      return redirect("/contact-form/mumbai/goregaon-east");
    if (url === "/coworking-space/nukleus-coworking-connaught-place-1365")
      return redirect("/coworking-space/nukleus-coworking-connaught-place-1365");
    if (url === "/contact-form/pune/hinjewadi")
      return redirect("/contact-form/pune/hinjewadi");
    if (url === "/coworking-space/the-maker's-space-lalkothi-1082")
      return redirect("/coworking-space/the-makers-space-lalkothi-1082");
    if (url === "/in/coworking-space/bengaluru/santacruz-west")
      return redirect("/in/coworking-space/mumbai/santacruz-west");
    if (url === "/?trk=public_post_reshare-text") return redirect("/");
    if (url === "/in/coworking-space/new delhi/barakhamba")
      return redirect("/in/coworking-space/delhi/barakhamba");
    if (url === "/in/coworking-space/new-delhi/east-of kailash")
      return redirect("/in/coworking/delhi");
    if (url === "/in/coworking-space/new delhi/chhatarpur")
      return redirect("/in/coworking-space/delhi/chhatarpur");
    if (url === "/in/coworking-space/delhi/thane")
      return redirect("/in/coworking/thane");
    if (url === "/in/coworking-space/mumbai/saki-vihar")
      return redirect("/in/coworking-space/mumbai/saki-vihar");
    if (url === "/in/coworking-space/bangalore/balewadi")
      return redirect("/in/coworking/bangalore");
    if (url === "/spaces/spacesDetails") return redirect("/");
    if (url === "/in/coworking-space/bengaluru/bandra-kurla-complex")
      return redirect("/in/coworking-space/mumbai/bandra-kurla-complex");
    if (url === "/in/coworking-space/bangalore/marathahalli")
      return redirect("/in/coworking/bangalore");
    if (url === "/in/coworking-space/delhi/pimpri-chinchwad")
      return redirect("/in/coworking-space/pune/pimpri-chinchwad");
    if (url === "/in/coworking-space/bengaluru/queen-road")
      return redirect("/in/coworking-space/bangalore/queen-road");
    if (url === "/in/coworking-space/new delhi/sainik-farm")
      return redirect("/in/coworking/delhi");
    if (url === "/in/coworking-space/new delhi/janpath")
      return redirect("/in/coworking-space/delhi/janpath");
    if (url === "/in/coworking-space/bengaluru/kr-puram")
      return redirect("/in/coworking-space/bangalore/kr-puram");
    if (url === "/in/coworking-space/bandra-east/bandra-kurla-complex")
      return redirect("/in/coworking-space/mumbai/bandra-kurla-complex");
    if (url === "/in/coworking-space/mumbai/pimpri-chinchwad")
      return redirect("/in/coworking-space/pune/pimpri-chinchwad");
    if (url === "/in/coworking/bengaluru")
      return redirect("/in/coworking/bangalore");
    if (url === "/in/coworking-space/bengaluru/dadar")
      return redirect("/in/coworking-space/mumbai/dadar");
    if (url === "/in/coworking-space/bangalore/ballard-estate")
      return redirect("/in/coworking-space/mumbai/ballard-estate");
    if (url === "/in/coworking-space/bangalore/ballard-estate")
      return redirect("/in/coworking-space/mumbai/ballard-estate");
    if (url === "/in/coworking-space/bangalore/marine-lines")
      return redirect("/in/coworking-space/mumbai/marine-lines");
    if (url === "/in/coworking/new-delhi") return redirect("/in/coworking/delhi");
    if (url === "/in/coworking-space/new-delhi/hauz-khas-village")
      return redirect("/in/coworking-space/delhi/hauz-khas-village");
    if (url === "/in/coworking-space/hyderabad/malad")
      return redirect("/in/coworking-space/mumbai/malad");
    if (url === "/spaces/leads") return redirect("/");
    if (url === "/apps/chat") return redirect("/");
    if (url === "/custompages/forgotpassword") return redirect("/");
    if (url === "/in/coworking-space/bangalore/maharshi-nagar")
      return redirect("/in/coworking-space/bangalore/maharshi-nagar");
    if (url === "/dashboard") return redirect("/");
    if (url === "/") return redirect("/");
    if (url === "/coworking-space/collabworks-cuckoo-cafe-bandra-west-66")
      return redirect("/in/coworking/mumbai");
    if (url === "/in/coworking-space/bangalore/goregaon")
      return redirect("/in/coworking-space/mumbai/goregaon");
    if (url === "/in/coworking-space/gurugram/goregaon")
      return redirect("/in/coworking-space/gurugram");
    if (url === "/in/coworking-space/gurugram/pimpri-chinchwad")
      return redirect("/in/coworking-space/pune/pimpri-chinchwad");
    if (url === "/in/coworking-space/bengaluru/goregaon")
      return redirect("/in/coworking-space/mumbai/goregaon");
    if (url === "/coworking-space/indiqube-chetpet-1738")
      return redirect("/coworking-space/indiqube-chetpet-1738");
    if (url === "/in/coworking-space/bangalore/thane")
      return redirect("/in/coworking/thane");
    if (url === "/in/coworking-space/Mumbai/sewri-chembur-road")
      return redirect("/in/coworking-space/mumbai/sewri-chembur-road");
    if (url === "/in/coworking-space/bengaluru/thane")
      return redirect("/in/coworking/thane");
    if (url === "/in/coworking-space/mumbai/santacruz-east")
      return redirect("/in/coworking-space/mumbai/santacruz-east");
    if (url === "/in/coworking-space/new-delhi/anand-vihar")
      return redirect("/in/coworking-space/delhi/anand-vihar");
    if (url === "/in/coworking-space/new-delhi/safdarjung-development-area")
      return redirect("/in/coworking-space/delhi/safdarjung-development-area");
    if (url === "/in/coworking-space/new-delhi/kalkaji")
      return redirect("/in/coworking-space/delhi/kalkaji");
    if (url === "/coworking-space/workspaces-by-innova-sector-63-1447")
      return redirect("/coworking-space/workspaces-by-innova-sector-63-1447");
    if (url === "/in/coworking-space/delhi/anand-vihar")
      return redirect("/in/coworking-space/delhi/anand-vihar");
    if (url === "/spaces/spacesDetails") return redirect("/");
    if (url === "/coworking-space/91springboard-sector-28-1610")
      return redirect("/coworking-space/91springboard-sector-28-1610");
    if (url === "/in/coworking-space/kolkata/salt-lake")
      return redirect("/in/coworking-space/kolkata/salt-lake");
    if (url === "/in/coworking-space/delhi/pitampura")
      return redirect("/in/coworking-space/delhi/pitampura");
    if (url === "/in/coworking-space/bengaluru/kandivali-west")
      return redirect("/in/coworking-space/mumbai/kandivali-west");
    if (url === "/in/coworking-space/gurugram/aundh")
      return redirect("/in/coworking-space/gurugram");
    if (url === "/in/coworking-space/new-delhi/sector-63")
      return redirect("/in/coworking-space/delhi/sector-63");
    if (url === "/in/coworking-space/new-delhi/shahpur-jat")
      return redirect("/in/coworking-space/delhi/shahpur-jat");
    if (url === "/in/coworking-space/new-delhi/south-delhi")
      return redirect("/in/coworking-space/delhi/south-delhi");
    if (url === "/in/coworking-space/Mumbai/sakinaka")
      return redirect("/in/coworking-space/mumbai/sakinaka");
    if (url === "/in/coworking-space/new-delhi/saket")
      return redirect("/in/coworking-space/delhi/saket");
    if (url === "/in/coworking-space/chandigarh/phase-- i")
      return redirect("/in/coworking/chandigarh");
    if (url === "/in/coworking-space/new-delhi/badarpur")
      return redirect("/in/coworking-space/delhi/badarpur");
    if (url === "/pages/editprofile") return redirect("/");
    if (url === "/in/coworking-space/Mumbai/nityanand-nagar")
      return redirect("/in/coworking/mumbai");
    if (url === "/in/coworking-space/bangalore/kandivali")
      return redirect("/in/coworking-space/mumbai/kandivali-west");
    if (url === "/coworking-space/CoWork88-Chembur-251")
      return redirect("/in/coworking/mumbai");
    if (url === "/in/coworking-space/bangalore/whitefield")
      return redirect("/in/coworking-space/bangalore/whitefield");
    if (url === "/in/coworking/chandigarh")
      return redirect("/in/coworking/chandigarh");
    if (url === "/in/coworking-space/new-delhi/rohini")
      return redirect("/in/coworking-space/delhi/rohini");
    if (url === "/in/coworking-space/mumbai/saki-vihar")
      return redirect("/in/coworking/mumbai");
    if (url === "/in/coworking-space/delhi/netaji-subhash-place")
      return redirect("/in/coworking-space/delhi/netaji-subhash-place");
    if (url === "/in/coworking-space/bangalore/residency-road")
      return redirect("/in/coworking-space/bangalore/residency-road");
    if (url === "/in/coworking-space/new-delhi/turkman-gate")
      return redirect("/in/coworking/delhi");
    if (url === "/coworking-space/Bhive-11-Badarpur-445")
      return redirect("/in/coworking/delhi");
    if (url === "/in/coworking/mumbai") return redirect("/in/coworking/mumbai");
    if (url === "/in/coworking/Mumbai") return redirect("/in/coworking/mumbai");
    if (url === "/in/coworking-space/delhi/ashok-park")
      return redirect("/in/coworking-space/delhi/ashok-park");
    if (url === "/coworking-space/So-Share-Shahpur-Jat-551")
      return redirect("/in/coworking/delhi");
    if (url === "/in/coworking-space/delhi/mohan-estate")
      return redirect("/in/coworking-space/delhi/mohan-estate");
    if (url === "/coworking-space/obeya-vibes-hsr-layout-833")
      return redirect("/coworking-space/obeya-vibes-hsr-layout-833");
    if (url === "/in/coworking-space/bangalore/binnipete")
      return redirect("/in/coworking-space/bangalore/binnipete");
    if (url === "/coworking-space/Awfis-Baner-394")
      return redirect("/in/coworking/pune");
    if (url === "/in/coworking-space/delhi/toli-chowki")
      return redirect("/in/coworking-space/delhi/toli-chowki");
    if (url === "/in/coworking-space/bengaluru/yelahanka")
      return redirect("/in/coworking-space/bangalore/yelahanka");
    if (url === "/dashboard") return redirect("/");
    if (url === "/coworking-space/Sanzar-Spaces-Mulund-590")
      return redirect("/in/coworking/mumbai");
    if (url === "/custompages/forgotpassword") return redirect("/");
    if (url === "/coworking-space/segment-spaces-kukatpally-306")
      return redirect("/coworking-space/segment-spaces-kukatpally-306");
    if (url === "/coworking-space/goodworks-cowork-whitefield-852")
      return redirect("/coworking-space/goodworks-cowork-whitefield-852");
    if (url === "/coworking-space/blue-coworks-lower-parel-586")
      return redirect("/coworking-space/blue-coworks-lower-parel-586");
    if (url === "/coworking-space/regus-vastrapur-993")
      return redirect("/coworking-space/regus-vastrapur-993");
    if (url === "/coworking-space/redbrick-offices-thane-88")
      return redirect("/coworking-space/redbrick-offices-thane-88");
    if (url === "/in/coworking-space/chennai/-alwarpet")
      return redirect("/in/coworking-space/chennai/alwarpet");
    if (url === "/coworking-space/executive-spaces-andheri-east-1788")
      return redirect("/coworking-space/executive-spaces-andheri-east-1788");
    if (url === "/coworking-space/attic-space-krishvi-indiranagar-734")
      return redirect("/coworking-space/attic-space-krishvi-indiranagar-734");
    if (url === "/coworking-space/work365-spaces-indiranagar-472")
      return redirect("/coworking-space/work365-spaces-indiranagar-472");
    if (url === "/coworking-space/wework-andheri-east-2")
      return redirect("/coworking-space/wework-andheri-east-2");
    if (url === "/coworking-space/indiqube-epsilon-domlur--690")
      return redirect("/coworking-space/indiqube-epsilon-domlur-690");
    if (url === "/coworking-space/indiqube-lakeside-outer-ring-road-907")
      return redirect("/coworking-space/indiqube-lakeside-outer-ring-road-907");
    if (url === "/coworking-space/wizworks-sector-16a-1423")
      return redirect("/coworking-space/wizworks-sector-16a-1423");
    if (url === "/coworking-space/theco-space-jp-nagar-529")
      return redirect("/coworking-space/theco-space-jp-nagar-529");
    if (url === "/coworking-space/awfis-sector-62-1450")
      return redirect("/coworking-space/awfis-sector-62-1450");
    if (url === "/in/coworking-space/navi-mumbai/kharghar")
      return redirect("/in/coworking-space/navi-mumbai/kharghar");
    if (url === "/in/coworking-space/pune/maharshi-nagar")
      return redirect("/in/coworking-space/pune/maharshi-nagar");
    if (url === "/coworking-space/regus-gomti-nagar-1768")
      return redirect("/coworking-space/regus-gomti-nagar-1768");
    if (url === "/coworking-space/clowork-newmark-hitec-city-288")
      return redirect("/coworking-space/clowork-newmark-hitec-city-288");
    if (url === "/coworking-space/we-grow-vashi-1369")
      return redirect("/coworking-space/we-grow-vashi-1369");
    if (url === "/in/coworking-space/bangalore/fraser-town")
      return redirect("/in/coworking-space/bangalore/fraser-town");
    if (url === "/in/coworking-space/pune/hinjewadi")
      return redirect("/in/coworking-space/pune/hinjewadi");
    if (url === "/in/coworking-space/pune/viman-nagar")
      return redirect("/in/coworking-space/pune/viman-nagar");
    if (url === "/coworking-space/gospaze-outer-ring-road-904")
      return redirect("/coworking-space/gospaze-outer-ring-road-904");
    if (url === "/coworking-space/techspace-hsr-layout-828")
      return redirect("/coworking-space/techspace-hsr-layout-828");
    if (url === "/in/coworking-space/pune/bavdhan")
      return redirect("/in/coworking-space/pune/bavdhan");
    if (url === "/in/coworking-space/ahmedabad/iskcon-cross-road")
      return redirect("/in/coworking-space/ahmedabad/iskcon-cross-road");
    if (url === "/in/coworking-space/bangalore/yelahanka")
      return redirect("/in/coworking-space/bangalore/yelahanka");
    if (url === "/coworking-space/bloomdesk-coworking-borivali-east-99")
      return redirect("/coworking-space/bloomdesk-coworking-borivali-east-99");
    if (url === "/in/coworking-space/hyderabad/madhapur")
      return redirect("/in/coworking-space/hyderabad/madhapur");
    if (url === "/coworking-space/wework-goregaon-8")
      return redirect("/coworking-space/wework-goregaon-8");
    if (url === "/in/coworking-space/bangalore/banashankari")
      return redirect("/in/coworking-space/bangalore/banashankari");
    if (url === "/in/coworking-space/pune/fatima-nagar")
      return redirect("/in/coworking-space/pune/fatima-nagar");
    if (url === "/in/coworking-space/hyderabad/ameerpet")
      return redirect("/in/coworking-space/hyderabad/ameerpet");
    if (url === "/coworking-space/pro-coworking-office-kharghar-1792")
      return redirect("/coworking-space/pro-coworking-office-kharghar-1792");
    if (url === "/coworking-space/work-for-assets-dwarka-1412")
      return redirect("/coworking-space/work-for-assets-dwarka-1412");
    if (url === "/in/coworking-space/ahmedabad/science-city-road")
      return redirect("/in/coworking-space/ahmedabad/science-city-road");
    if (url === "/in/coworking-space/navi-mumbai/airoli")
      return redirect("/in/coworking-space/navi-mumbai/airoli");
    if (url === "/in/coworking-space/pune/camp")
      return redirect("/in/coworking-space/pune/camp");
    if (url === "/in/coworking-space/mumbai/dahisar-east")
      return redirect("/in/coworking-space/mumbai/dahisar-east");
    if (url === "/in/coworking-space/hyderabad/financial-district")
      return redirect("/in/coworking-space/hyderabad/financial-district");
    if (url === "/coworking-space/nexus-business-center-jubilee-hills-349")
      return redirect("/coworking-space/nexus-business-center-jubilee-hills-349");
    if (url === "/coworking-space/workamuse-nungambakkam-1666")
      return redirect("/coworking-space/workamuse-nungambakkam-1666");
    if (url === "/in/coworking-space/hyderabad/kothaguda")
      return redirect("/in/coworking-space/hyderabad/kothaguda");
    if (url === "/coworking-space/91springboard-vikhroli-149")
      return redirect("/coworking-space/91springboard-vikhroli-149");
    if (url === "/in/coworking-space/new-delhi/patel-nagar")
      return redirect("/in/coworking-space/delhi/patel-nagar");
    if (url === "/coworking-space/ccw-pune-coworking-space-balewadi-201")
      return redirect("/coworking-space/ccw-pune-coworking-space-balewadi-201");
    if (url === "/in/coworking-space/navi-mumbai/turbhe")
      return redirect("/in/coworking-space/navi-mumbai/turbhe");
    if (url === "/in/coworking-space/bangalore/hebbal")
      return redirect("/in/coworking-space/bangalore/hebbal");
    if (url === "/in/coworking-space/gurugram/cyber-city")
      return redirect("/in/coworking-space/gurugram/cyber-city");
    if (url === "/in/coworking-space/noida/noida-sector--15")
      return redirect("/in/coworking-space/noida/sector-15");
    if (url === "/coworking-space/mewo-panjim-1701")
      return redirect("/coworking-space/mewo-panjim-1701");
    if (url === "/in/coworking-space/mumbai/mahim")
      return redirect("/in/coworking-space/mumbai/mahim");
    if (url === "/coworking-space/315-work-avenue-gkc-domlur-696")
      return redirect("/coworking-space/315-work-avenue-gkc-domlur-696");
    if (url === "/coworking-space/serenia-sector-127-1443")
      return redirect("/coworking-space/serenia-sector-127-1443");
    if (url === "/coworking-space/anticube-mohan-estate-1382")
      return redirect("/coworking-space/anticube-mohan-estate-1382");
    if (url === "/in/coworking-space/mumbai/mahalaxmi")
      return redirect("/in/coworking-space/mumbai/mahalaxmi");
    if (url === "/coworking-space/share-space-whitefield-844")
      return redirect("/coworking-space/share-space-whitefield-844");
    if (url === "/coworking-space/control-workspace-uttam-nagar-1407")
      return redirect("/coworking-space/control-workspace-uttam-nagar-1407");
    if (url === "/coworking-space/redbrick-offices-thane-west-89")
      return redirect("/coworking-space/redbrick-offices-thane-west-89");
    if (url === "/in/coworking-space/mumbai/mulund")
      return redirect("/in/coworking-space/mumbai/mulund");
    if (url === "/in/coworking-space/mumbai/malad-east")
      return redirect("/in/coworking-space/mumbai/malad-east");
    if (url === "/coworking-space/mysoho-sector-26-1298")
      return redirect("/coworking-space/mysoho-sector-26-1298");
    if (url === "/coworking-space/geek-space-kukatpally-1026")
      return redirect("/coworking-space/geek-space-kukatpally-1026");
    if (url === "/coworking-space/dotspace-panampilly-nagar-1207")
      return redirect("/coworking-space/dotspace-panampilly-nagar-1207");
    if (url === "/coworking-space/devx-hitec-city-1037")
      return redirect("/coworking-space/devx-hitec-city-1037");
    if (url === "/coworking-space/sharingdesk-katargam-1252")
      return redirect("/coworking-space/sharingdesk-katargam-1252");
    if (url === "/coworking-space/awfis-ghansoli-630")
      return redirect("/coworking-space/awfis-ghansoli-630");
    if (url === "/in/coworking-space/bengaluru/sadashiva-nagar")
      return redirect("/in/coworking-space/bangalore/sadashiva-nagar");
    if (url === "/in/coworking-space/pune/sangamvadi")
      return redirect("/in/coworking-space/pune/sangamvadi");
    if (url === "/coworking-space/iworkk-sector-16-1559")
      return redirect("/coworking-space/iworkk-sector-16-1559");
    if (url === "/coworking-space/workx-coworking-space-gachibowli-224")
      return redirect("/coworking-space/workx-coworking-space-gachibowli-224");
    if (url === "/in/coworking-space/bengaluru/sector-6")
      return redirect("/in/coworking/bangalore");
    if (url === "/coworking-space/91springboard-sector-44-1531")
      return redirect("/coworking-space/91springboard-sector-44-1531");
    if (url === "/in/coworking-space/chennai/nandanam")
      return redirect("/in/coworking-space/chennai/nandanam");
    if (url === "/coworking-space/open-turf-navrangpura-1009")
      return redirect("/coworking-space/open-turf-navrangpura-1009");
    if (url === "/in/coworking-space/bangalore/nagarbhavi")
      return redirect("/in/coworking-space/bangalore/nagarbhavi");
    if (url === "/in/coworking-space/delhi/nehru-place")
      return redirect("/in/coworking-space/delhi/nehru-place");
    if (url === "/coworking-space/redbrick-offices-gachibowli-230")
      return redirect("/coworking-space/redbrick-offices-gachibowli-230");
    if (url === "/in/coworking-space/delhi/preet-vihar")
      return redirect("/in/coworking-space/delhi/preet-vihar");
    if (url === "/in/coworking-space/chennai/-anna-nagar")
      return redirect("/in/coworking-space/chennai/anna-nagar");
    if (url === "/coworking-space/awfis-vasant-kunj-1384")
      return redirect("/coworking-space/awfis-vasant-kunj-1384");
    if (url === "/in/coworking-space/pune/hinjawadi")
      return redirect("/in/coworking-space/pune/hinjawadi");
    if (url === "/coworking-space/ascend-cowork-thane-593")
      return redirect("/coworking-space/ascend-cowork-thane-593");
    if (url === "/in/coworking-space/bangalore/kr-puram")
      return redirect("/in/coworking-space/bangalore/kr-puram");
    if (url === "/in/coworking-space/pune/wakad")
      return redirect("/in/coworking-space/pune/wakad");
    if (url === "/in/coworking-space/gurugram/sector-47")
      return redirect("/in/coworking-space/gurugram/sector-47");
    if (url === "/in/coworking-space/bangalore/sadashiva-nagar")
      return redirect("/in/coworking-space/bangalore/sadashiva-nagar");
    if (url === "/in/coworking-space/hyderabad/begumpet")
      return redirect("/in/coworking-space/hyderabad/begumpet");
    if (url === "/coworking-space/incubex-hsr7-hsr-layout-782")
      return redirect("/coworking-space/incubex-hsr7-hsr-layout-782");
    if (url === "/coworking-space/ebc-space-2-hsr-layout-810")
      return redirect("/coworking-space/ebc-space-2-hsr-layout-810");
    if (url === "/in/coworking-space/new-delhi/east-of-kailash")
      return redirect("/in/coworking-space/delhi/east-of-kailash");
    if (url === "/coworking-space/club-360-gopalapuram-1785")
      return redirect("/coworking-space/club-360-gopalapuram-1785");
    if (url === "/coworking-space/innerspace-coworking-ernakulam-1219")
      return redirect("/coworking-space/innerspace-coworking-ernakulam-1219");
    if (
      url === "/coworking-space/our-offices-coworking-netaji-subhash-place-518"
    )
      return redirect(
        "/coworking-space/our-offices-coworking-netaji-subhash-place-518"
      );
    if (url === "/coworking-space/workshaala-vista-hsr-layout-806")
      return redirect("/coworking-space/workshaala-vista-hsr-layout-806");
    if (url === "/coworking-space/space-55-rajajinagar-859")
      return redirect("/coworking-space/space-55-rajajinagar-859");
    if (url === "/coworking-space/bootstart-cowork-koregaon-park-320")
      return redirect("/coworking-space/bootstart-cowork-koregaon-park-320");
    if (url === "/coworking-space/richesse-cowork-erandwane-361")
      return redirect("/coworking-space/richesse-cowork-erandwane-361");
    if (url === "/coworking-space/startuphuts-hsr-layout-387")
      return redirect("/coworking-space/startuphuts-hsr-layout-387");
    if (url === "/in/coworking-space/bengaluru/malleshwaram")
      return redirect("/in/coworking-space/bangalore/malleshwaram");
    if (url === "/coworking-space/pri-coworks-jp-nagar-497")
      return redirect("/coworking-space/pri-coworks-jp-nagar-497");
    if (url === "/in/coworking-space/jaipur/shanti-nagar")
      return redirect("/in/coworking-space/jaipur/shanti-nagar");
    if (url === "/in/coworking-space/bangalore/sarjapur-road")
      return redirect("/in/coworking-space/bangalore/sarjapur-road");
    if (url === "/coworking-space/innov8-sector-18-1597")
      return redirect("/coworking-space/innov8-sector-18-1597");
    if (url === "/coworking-space/virtual-coworks-sheetal-nagar-1154")
      return redirect("/coworking-space/virtual-coworks-sheetal-nagar-1154");
    if (url === "/coworking-space/regus-vasant-kunj-1344")
      return redirect("/coworking-space/regus-vasant-kunj-1344");
    if (url === "/in/coworking-space/bangalore/balewadi")
      return redirect("/in/coworking/bangalore");
    if (url === "/coworking-space/executive-coworking-space-vijay-nagar-1162")
      return redirect(
        "/coworking-space/executive-coworking-space-vijay-nagar-1162"
      );
    if (url === "/coworking-space/workzoned-vaishali-nagar-1129")
      return redirect("/coworking-space/workzoned-vaishali-nagar-1129");
    if (
      url === "/in/coworking-space/kolkata/acharya-jagadish-chandra-bose-road"
    )
      return redirect(
        "/in/coworking-space/kolkata/acharya-jagadish-chandra-bose-road"
      );
    if (url === "/coworking-space/the-valley-coworking-banjara-hills-249")
      return redirect("/coworking-space/the-valley-coworking-banjara-hills-249");
    if (url === "/coworking-space/workshaala-cosmic-kadubeesanahalli-919")
      return redirect("/coworking-space/workshaala-cosmic-kadubeesanahalli-919");
    if (url === "/coworking-space/indiqube-sigma-koramangala-878")
      return redirect("/coworking-space/indiqube-sigma-koramangala-878");
    if (url === "/coworking-space/urcubicle-coworking-hinjawadi-339")
      return redirect("/coworking-space/urcubicle-coworking-hinjawadi-339");
    if (url === "/in/coworking-space/hyderabad/nariman-point")
      return redirect("/in/coworking/hyderabad");
    if (url === "/coworking-space/cohive-coworking-bavdhan-260")
      return redirect("/coworking-space/cohive-coworking-bavdhan-260");
    if (url === "/coworking-space/the-workshop-space-baner-324")
      return redirect("/coworking-space/the-workshop-space-baner-324");
    if (url === "/coworking-space/l2l-sector-2-1422")
      return redirect("/coworking-space/l2l-sector-2-1422");
    if (url === "/coworking-space/step-01-workspaces-sector-32-1570")
      return redirect("/coworking-space/step-01-workspaces-sector-32-1570");
    if (url === "/coworking-space/innov8-gachibowli-216")
      return redirect("/coworking-space/innov8-gachibowli-216");
    if (url === "/coworking-space/springhouse-sector-28-1554")
      return redirect("/coworking-space/springhouse-sector-28-1554");
    if (url === "/in/coworking-space/delhi/savitri-road")
      return redirect("/in/coworking-space/delhi/savitri-road");
    if (url === "/in/coworking-space/hyderabad/kandivali-west")
      return redirect("/in/coworking-space/mumbai/kandivali-west");
    if (url === "/in/coworking-space/bangalore/sadashiv-peth")
      return redirect("/in/coworking/bangalore");
    if (url === "/coworking-space/awfis-outer-ring-road-900")
      return redirect("/coworking-space/awfis-outer-ring-road-900");
    if (url === "/coworking-space/greenbubbles-hsr-layout-430")
      return redirect("/coworking-space/greenbubbles-hsr-layout-430");
    if (url === "/coworking-space/krastay-cowork-saket-546")
      return redirect("/coworking-space/krastay-cowork-saket-546");
    if (url === "/coworking-space/mark-&-feeney-gopalapuram-1773")
      return redirect("/coworking-space/mark-&-feeney-gopalapuram-1773");
    if (url === "/in/coworking-space/gurugram/khar-west")
      return redirect("/in/coworking-space/mumbai/khar-west");
    if (url === "/coworking-space/start-business-center-banjara-hills-310")
      return redirect("/coworking-space/start-business-center-banjara-hills-310");

    if (url === "/coworking-space/Neopro-Coworking-Spaces-Malad-115")
      return redirect("/in/coworking-space/mumbai/malad");

    if (url === "/in/coworking-space/noida/noida-electronic-city")
      return redirect("/in/coworking-space/noida");

    if (url === "/in/coworking-space/gurugram/erandwane")
      return redirect("/in/coworking-space/pune/erandwane");

    if (url === "/in/coworking-space/new-delhi/barakhamba-road")
      return redirect("/in/coworking-space/delhi/barakhamba");

    if (url === "/coworking-space/spaces-andheri-east-45")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url === "/in/spaces/mumbai/andheri-east")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url === "/coworking-space/inspire-co-spaces-goregaon-east-114")
      return redirect("/in/coworking-space/mumbai/goregaon-east");

    if (url === "/in/coworking-space/new-delhi/safdarjung-development")
      return redirect("/in/coworking-space/delhi/safdarjung-development-area");

    if (url === "/coworking-space/accesswork-lower-parel-21")
      return redirect("/in/coworking-space/mumbai/lower-parel");

    if (url === "/coworking-space/toutle-space-goregaon-west-1484")
      return redirect("/in/coworking-space/mumbai/goregaon");

    if (url === "/in/coworking-space/new-delhi/ajmeri-gate")
      return redirect("/in/coworking-space/delhi/ajmeri-gate");

    if (url === "/in/coworking-space/delhi/hadapasar")
      return redirect("/in/coworking-space/pune/hadapsar");

    if (url === "/coworking-space/workamp-59-thane-west-90")
      return redirect("/in/coworking/thane");

    if (url === "/in/coworking-space/new-delhi/barakhamba-road")
      return redirect("/in/coworking-space/delhi/barakhamba");

    if (url === "/in/coworking-space/bangalore/hosur-road")
      return redirect("/in/coworking-space/bangalore/hosur-road");

    if (url === "/in/coworking-space/mumbai/financial-district")
      return redirect("/in/coworking-space/hyderabad/financial-district");

    if (url === "/coworking-space/incub8-andheri-east-87")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url === "/coworking-space/byob-cowork-lower-parel-584")
      return redirect("/in/coworking-space/mumbai/lower-parel");

    if (url === "/coworking-space/incuspaze-andheri-east-40")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url === "/coworking-space/wework-andheri-east-10")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url === "/in/coworking-space/delhi/district-centre")
      return redirect("/in/coworking/delhi");

    if (url === "/in/coworking-space/navi-mumbai/sanpada")
      return redirect("/in/coworking/navi-mumbai");

    if (url === "/in/coworking-space/mumbai/kukatpally")
      return redirect("/in/coworking-space/hyderabad/kukatpally");

    if (url === "/in/coworking-space/mumbai/andheri-marol")
      return redirect("/in/coworking-space/mumbai");

    if (url === "/in/coworking-space/bangalore/sarjapura-road")
      return redirect("/in/coworking-space/bangalore/sarjapur-road");

    if (url === "/coworking-space/spacyes-kandivali-west-108")
      return redirect("/in/coworking-space/mumbai/kandivali-west");

    if (url === "/in/coworking-space/delhi/sector-21")
      return redirect("/in/coworking/delhi");

    if (url === "/in/coworking-space/navi-mumbai/sanpada")
      return redirect("/in/coworking/navi-mumbai");

    if (url === "/in/coworking-space/hyderabad/secundrabad")
      return redirect("/in/coworking-space/hyderabad/secunderabad");

    if (url === "/coworking-space/toutle-space-malad-west-1490")
      return redirect("/in/coworking-space/mumbai/malad-west");

    if (url === "/coworking-space/the-boardroom-coworking-malad-west-109")
      return redirect("/in/coworking-space/mumbai/malad-west");

    if (url === "/coworking-space/The-Boardroom-Coworking-Malad-109")
      return redirect("/in/coworking-space/mumbai/malad");

    if (url === "/coworking-space/the-boardroom-coworking-malad-west-109")
      return redirect("/in/coworking-space/mumbai/malad-west");

    if (url === "/in/coworking-space/hyderabad/andheri-east")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url === "/in/coworking-space/mumbai/andheri-east-midc")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url === "/in/coworking-space/jaipur-division/malviya-nagar")
      return redirect("/in/coworking-space/jaipur/malviya-nagar");

    if (url === "/in/coworking-space/bengaluru/old-madras%20road")
      return redirect("/in/coworking-space/bangalore/old-madras-road");

    if (url === "/in/coworking-space/bengaluru/infantry-road")
      return redirect("/in/coworking-space/bangalore/infantry-road");

    if (url === "/coworking-space/awfis-sector-125-1435")
      return redirect("/coworking-space/awfis-sector-125-2228");

    if (url === "/in/coworking-space/Mumbai/dahisar-east")
      return redirect("/in/coworking/mumbai");

    if (url === "/in/coworking-space/wework-andheri-12")
      return redirect("/in/coworking-space/wework-andheri-east-12");

    if (url === "/in/coworking-space/Mumbai/marol")
      return redirect("/in/coworking-space/mumbai/andheri-east");

    if (url === "/in/coworking-space/jaipur-division/mansarovar")
      return redirect("/in/coworking-space/jaipur/mansarovar");

    if (url === "/in/coworking-space/jaipur-division/muktanand-nagar")
      return redirect("/in/coworking-space/jaipur/muktanand-nagar");

    if (url === "/in/coworking-space/jaipur-division/nirman-nagar")
      return redirect("/in/coworking-space/jaipur/nirman-nagar");

    if (url === "/in/coworking-space/jaipur-division/panchyawala")
      return redirect("/in/coworking-space/jaipur/panchyawala");

    if (url === "/in/coworking-space/jaipur-division/rajiv-vihar-colony")
      return redirect("/in/coworking-space/jaipur/rajiv-vihar-colony");

    if (url === "/in/coworking-space/jaipur-division/ramnagar")
      return redirect("/in/coworking-space/jaipur/ramnagar");

    if (url === "/in/coworking-space/jaipur-division/shanti-nagar")
      return redirect("/in/coworking-space/jaipur/shanti-nagar");

    if (url === "/in/coworking-space/jaipur-division/shyam-nagar")
      return redirect("/in/coworking-space/jaipur/shyam-nagar");

    if (url === "/in/coworking-space/jaipur-division/tonk-road")
      return redirect("/in/coworking-space/jaipur/tonk-road");

    if (url === "/in/coworking-space/jaipur-division/vaishali-nagar")
      return redirect("/in/coworking-space/jaipur/vaishali-nagar");

    //Jaipur end

    if (url === "/in/coworking-space/new-delhi/shahpur")
      return redirect("/in/coworking-space/delhi/shahpur");

    if (url === "/in/coworking-space/new-delhi/shahpur-jat")
      return redirect("/in/coworking-space/delhi/shahpur-jat");

    if (url === "/in/coworking-space/new-delhi/shalimar-bagh")
      return redirect("/in/coworking-space/delhi/shalimar-bagh");

    if (url === "/in/coworking-space/new-delhi/delhi-division")
      return redirect("/in/coworking-space/delhi/south-delhi");

    if (url === "/in/coworking-space/new-delhi/tilak-marg")
      return redirect("/in/coworking-space/delhi/tilak-marg");

    if (url === "/in/coworking-space/new-delhi/turkman-gate")
      return redirect("/in/coworking-space/delhi/turkman-gate");

    if (url === "/in/coworking-space/new-delhi/wazirpur")
      return redirect("/in/coworking-space/delhi/wazirpur");

    if (url === "/in/coworking-space/central-delhi/turkman-gate")
      return redirect("/in/coworking-space/delhi/turkman-gate");
    if (url === "/in/coworking-space/south-delhi/east-of-kailash")
      return redirect("/in/coworking-space/delhi/east-of-kailash");
    if (url === "/in/coworking-space/east-delhi/anand-vihar")
      return redirect("/in/coworking-space/delhi/anand-vihar");
    if (
      url ===
      "/in/coworking-space/south-delhi/mohan-cooperative-industrial-estate"
    )
      return redirect(
        "/in/coworking-space/delhi/mohan-cooperative-industrial-estate"
      );
    if (url === "/in/coworking-space/central-delhi/jhandewalan")
      return redirect("/in/coworking-space/delhi/jhandewalan");
    if (url === "/in/coworking-space/south-delhi/nehru-place")
      return redirect("/in/coworking-space/delhi/nehru-place");
    if (url === "/in/coworking-space/new-delhi/tilak-marg")
      return redirect("/in/coworking-space/delhi/tilak-marg");
    if (url === "/in/coworking-space/south-delhi/badarpur")
      return redirect("/in/coworking-space/delhi/badarpur");
    if (url === "/in/coworking-space/south-west-delhi/madhu-vihar")
      return redirect("/in/coworking-space/delhi/madhu-vihar");
    if (url === "/in/coworking-space/south-west-delhi/green-park")
      return redirect("/in/coworking-space/delhi/green-park");
    if (url === "/in/coworking-space/south-delhi/hauz-khas")
      return redirect("/in/coworking-space/delhi/hauz-khas");
    if (url === "/in/coworking-space/south-delhi/saidulajab")
      return redirect("/in/coworking-space/delhi/saidulajab");
    if (url === "/in/coworking-space/south-delhi/kalkaji")
      return redirect("/in/coworking-space/delhi/kalkaji");
    if (url === "/in/coworking-space/west-delhi/janakpuri")
      return redirect("/in/coworking-space/delhi/janakpuri");
    if (url === "/in/coworking-space/east-delhi/preet-vihar")
      return redirect("/in/coworking-space/delhi/preet-vihar");
    if (url === "/in/coworking-space/north-west-delhi/netaji-subhash-place")
      return redirect("/in/coworking-space/delhi/netaji-subhash-place");
    if (url === "/in/coworking-space/north-west-delhi/pitam-pura")
      return redirect("/in/coworking-space/delhi/pitam-pura");
    if (url === "/in/coworking-space/south-west-delhi/dwarka")
      return redirect("/in/coworking-space/delhi/dwarka");
    if (url === "/in/coworking-space/south-delhi/okhla")
      return redirect("/in/coworking-space/delhi/okhla");
    if (url === "/in/coworking-space/west-delhi/janakpuri")
      return redirect("/in/coworking-space/delhi/janakpuri");
    if (url === "/in/coworking-space/north-west-delhi/rohini")
      return redirect("/in/coworking-space/delhi/rohini");
    if (url === "/in/coworking-space/south-west-delhi/safdarjung-enclave")
      return redirect("/in/coworking-space/delhi/safdarjung-enclave");
    if (url === "/in/coworking-space/north-west-delhi/shalimar-bagh")
      return redirect("/in/coworking-space/delhi/shalimar-bagh");
    if (url === "/in/coworking-space/south-delhi/shahpur-jat")
      return redirect("/in/coworking-space/delhi/shahpur-jat");
    if (url === "/in/coworking-space/south-delhi/safdarjung-development-area")
      return redirect("/in/coworking-space/delhi/safdarjung-development-area");
    if (url === "/in/coworking-space/east-delhi/mayur-vihar")
      return redirect("/in/coworking-space/delhi/mayur-vihar");
    if (url === "/in/coworking-space/south-delhi/defence-colony")
      return redirect("/in/coworking-space/delhi/defence-colony");
    if (url === "/in/coworking-space/south-delhi/defence-colony")
      return redirect("/in/coworking-space/delhi/defence-colony");

    if (url === "/in/coworking-space/west-delhi/paschim-vihar")
      return redirect("/in/coworking-space/delhi/paschim-vihar");
    if (url === "/in/coworking-space/north-west-delhi/wazirpur")
      return redirect("/in/coworking-space/delhi/wazirpur");
    if (url === "/in/coworking-space/south-west-delhi/bhikaji-cama-place")
      return redirect("/in/coworking-space/delhi/bhikaji-cama-place");

    //new delhi url

    if (url === "/in/coworking-space/delhi-division/shahpur")
      return redirect("/in/coworking-space/delhi/shahpur");

    if (url === "/coworking-space/sp-coworking-kalkaji-448")
      return redirect(
        "/coworking-space/empowerers-coworking-city-hauz-khas-village-448"
      );

    if (url === "/coworking-space/the-executive-centre-hebbal-951")
      return redirect("/coworking-space/beginest-harbor-5-residency-road-951");

    if (url === "/coworking-space/flexi-business-hub-navrangpura-1008")
      return redirect("/coworking-space/sspacia-navrangpura-1008");

    if (url === "/coworking-space/co-desq-sector-62-1450")
      return redirect("/coworking-space/awfis-sector-62-1450");

    if (url === "/coworking-space/nexus-spaces-vijay-nagar-1184")
      return redirect("/coworking-space/smartworks-new-palasia-1184");

    if (url === "/coworking-space/nukleus-coworking-dlf-phase-5-2045")
      return redirect("/coworking-space/insspire-coworking-balewadi-2045");

    if (url === "/coworking-space/vatika-business-centre-teynampet-1751")
      return redirect("/coworking-space/regus-mylapore-1751");

    if (url === "/coworking-space/bhive-whitefield-1825")
      return redirect("/coworking-space/bhive-premium-whitefield-1825");

    if (url === "/coworking-space/ecosphere-sector-67-1432")
      return redirect("/coworking-space/coworkzen-sector-62-1432");

    if (url === "/coworking-space/awfis-ameerpet-1845")
      return redirect("/coworking-space/smartworks-andheri-east-1845");

    if (url === "/coworking-space/dailydeskk-baner-1616")
      return redirect("/coworking-space/awfis-sector-53-1616");

    if (url === "/in/coworking-space/delhi-division/shahpur-jat")
      return redirect("/in/coworking-space/delhi/shahpur-jat");

    if (url === "/in/coworking-space/delhi-division/shalimar-bagh")
      return redirect("/in/coworking-space/delhi/shalimar-bagh");

    if (url === "/in/coworking-space/delhi-division/tilak-marg")
      return redirect("/in/coworking-space/delhi/tilak-marg");

    if (url === "/in/coworking-space/delhi-division/turkman-gate")
      return redirect("/in/coworking-space/delhi/turkman-gate");

    if (url === "/in/coworking-space/delhi-division/wazirpur")
      return redirect("/in/coworking-space/delhi/wazirpur");

    if (url === "/in/coworking-space/delhi-division/turkman-gate")
      return redirect("/in/coworking-space/delhi/turkman-gate");
    if (url === "/in/coworking-space/delhi-division/east-of-kailash")
      return redirect("/in/coworking-space/delhi/east-of-kailash");
    if (url === "/in/coworking-space/delhi-division/anand-vihar")
      return redirect("/in/coworking-space/delhi/anand-vihar");
    if (
      url ===
      "/in/coworking-space/delhi-division/mohan-cooperative-industrial-estate"
    )
      return redirect(
        "/in/coworking-space/delhi/mohan-cooperative-industrial-estate"
      );
    if (url === "/in/coworking-space/delhi-division/jhandewalan")
      return redirect("/in/coworking-space/delhi/jhandewalan");
    if (url === "/in/coworking-space/delhi-division/nehru-place")
      return redirect("/in/coworking-space/delhi/nehru-place");

    if (url === "/in/coworking-space/delhi-division/badarpur")
      return redirect("/in/coworking-space/delhi/badarpur");
    if (url === "/in/coworking-space/delhi-division/madhu-vihar")
      return redirect("/in/coworking-space/delhi/madhu-vihar");
    if (url === "/in/coworking-space/delhi-division/green-park")
      return redirect("/in/coworking-space/delhi/green-park");
    if (url === "/in/coworking-space/delhi-division/hauz-khas")
      return redirect("/in/coworking-space/delhi/hauz-khas");
    if (url === "/in/coworking-space/delhi-division/saidulajab")
      return redirect("/in/coworking-space/delhi/saidulajab");
    if (url === "/in/coworking-space/delhi-division/kalkaji")
      return redirect("/in/coworking-space/delhi/kalkaji");
    if (url === "/in/coworking-space/delhi-division/janakpuri")
      return redirect("/in/coworking-space/delhi/janakpuri");
    if (url === "/in/coworking-space/delhi-division/preet-vihar")
      return redirect("/in/coworking-space/delhi/preet-vihar");
    if (url === "/in/coworking-space/north-delhi-division/netaji-subhash-place")
      return redirect("/in/coworking-space/delhi/netaji-subhash-place");
    if (url === "/in/coworking-space/north-delhi-division/pitam-pura")
      return redirect("/in/coworking-space/delhi/pitam-pura");
    if (url === "/in/coworking-space/delhi-division/dwarka")
      return redirect("/in/coworking-space/delhi/dwarka");
    if (url === "/in/coworking-space/delhi-division/okhla")
      return redirect("/in/coworking-space/delhi/okhla");
    if (url === "/in/coworking-space/delhi-division/janakpuri")
      return redirect("/in/coworking-space/delhi/janakpuri");
    if (url === "/in/coworking-space/north-delhi-division/rohini")
      return redirect("/in/coworking-space/delhi/rohini");
    if (url === "/in/coworking-space/delhi-division/safdarjung-enclave")
      return redirect("/in/coworking-space/delhi/safdarjung-enclave");
    if (url === "/in/coworking-space/north-delhi-division/shalimar-bagh")
      return redirect("/in/coworking-space/delhi/shalimar-bagh");
    if (url === "/in/coworking-space/delhi-division/shahpur-jat")
      return redirect("/in/coworking-space/delhi/shahpur-jat");
    if (
      url === "/in/coworking-space/delhi-division/safdarjung-development-area"
    )
      return redirect("/in/coworking-space/delhi/safdarjung-development-area");
    if (url === "/in/coworking-space/delhi-division/mayur-vihar")
      return redirect("/in/coworking-space/delhi/mayur-vihar");
    if (url === "/in/coworking-space/delhi-division/defence-colony")
      return redirect("/in/coworking-space/delhi/defence-colony");
    if (url === "/in/coworking-space/delhi-division/defence-colony")
      return redirect("/in/coworking-space/delhi/defence-colony");

    if (url === "/in/coworking-space/delhi-division/paschim-vihar")
      return redirect("/in/coworking-space/delhi/paschim-vihar");
    if (url === "/in/coworking-space/north-delhi-division/wazirpur")
      return redirect("/in/coworking-space/delhi/wazirpur");
    if (url === "/in/coworking-space/delhi-division/bhikaji-cama-place")
      return redirect("/in/coworking-space/delhi/bhikaji-cama-place");

    //new delhi url end

    if (url === "/in/coworking/new-delhi") return redirect("/in/coworking/delhi");

    return ;

    // if (url === '/in/coworking/delhi')
    //   return redirect('/in/coworking/new-delhi');
  }
};
