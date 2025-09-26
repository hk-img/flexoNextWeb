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
  const capitalWorkSpace = convertSlugToCapitalLetter(workSpaceSlug);
  const findWorkSpace = workSpace.find((item) => item.workSpaceName === capitalWorkSpace);
  return findWorkSpace?.typeOfSpace?.toLowerCase().replace(/-/g, "");
};

export const slugGenerator = (text) =>{
  if(!text) return "";
  return text?.toLowerCase().replace(/\s+/g, "-");
}
