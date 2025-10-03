export const Facilities = {
  1: 'update',
  2: 'local_parking',
  3: 'two_wheeler',
  4: 'commute',
  5: 'mail',
  6: 'wifi',
  7: 'router',
  8: 'lock',
  9: 'local_printshop',
  10: 'content_paste',
  11: 'video_label',
  12: 'tv',
  13: 'laptop',
  14: 'battery_charging_full',
  15: 'security',
  16: 'videocam',
  17: 'ac_unit',
  18: 'free_breakfast',
  19: 'fastfood',
  20: 'food_bank',
  21: 'touch_app',
  22: 'elevator',
  23: 'bedtime',
  24: 'person_pin',
  25: 'support_agent',
  26: 'phone',
  27: 'featured_video',
  28: 'weekend',
  29: 'directions_subway',
  30: 'miscellaneous_services',
  31: 'fitness_center',
  32: 'pool',
  33: 'bathtub',
  36: 'print',
  37: 'restaurant',
  39: 'weekend',
  40: 'chair',
  41: 'local_drink',
  42: 'cleaning_services',
  43: 'hotel',
  44: 'spa',
  45: 'wb_sunny',
  46: 'pets',
  47: 'phone',
  48: 'electric_car ',
  49: 'sports',
  50: 'brightness_6',
  51: 'chair',
  52: 'wc',
  53: 'elevator',
  55: 'photo_camera',
  56: 'image',
  57: 'lightbulb',
  58: 'mic',
  59: 'mic_none',
  60: 'wc',
  61: 'speaker',
  62: 'volume_off',
  63: 'videocam',
  64: 'accessible'
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
