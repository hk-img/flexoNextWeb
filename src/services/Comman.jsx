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

