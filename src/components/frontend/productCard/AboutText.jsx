import React, { useState } from "react";

const AboutText = ({ about }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-2 w-full flex items-start">
      <div className="text-sm text-[#141414] !leading-[21px] text-start">
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? "max-h-[1000px]" : "max-h-[40px]"
          }`}
        >
          {about}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          className="mt-1 block text-[12px] tracking-[1px] font-semibold text-[#777777] cursor-pointer"
        >
          {expanded ? "See less" : "See more"}
        </button>
      </div>
    </div>
  );
};

export default AboutText;
