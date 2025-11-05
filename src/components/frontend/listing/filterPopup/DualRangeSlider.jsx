import React, { useState, useEffect } from "react";
import { Range } from "react-range";

const DualRangeSlider = ({ min, max, step, values, onChange }) => {
  const [sliderValues, setSliderValues] = useState([values.min, values.max]);

  useEffect(() => {
    setSliderValues([values.min, values.max]);
  }, [values]);

  const handleChange = (vals) => {
    setSliderValues(vals);
    onChange({ min: vals[0], max: vals[1] });
  };

  return (
    <div className="relative w-full">
      {/* values */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="text-base font-extralight text-[#777777]">
          {sliderValues[0]}
        </div>
        <div className="text-base font-extralight text-[#777777]">
          {sliderValues[1]}
        </div>
      </div>

      {/* track */}
      <div className="relative w-full mt-2 mb-6 px-4">
        {" "}
        {/* 👈 added px-4 for thumb spacing */}
        {/* Track background */}
        <div className="absolute top-1/2 left-0 w-full h-[6px] bg-gray-300 rounded-full -translate-y-1/2"></div>
        {/* Active range */}
        <div
          className="absolute top-1/2 h-[6px] bg-[#f76900] rounded-full -translate-y-1/2 transition-all duration-300"
          style={{
            left: `calc(${
              ((sliderValues[0] - min) / (max - min)) * 100
            }% + 8px)`,
            right: `calc(${
              100 - ((sliderValues[1] - min) / (max - min)) * 100
            }% + 8px)`,
          }}
        ></div>
        {/* React Range */}
        <Range
          step={step}
          min={min}
          max={max}
          values={sliderValues}
          onChange={handleChange}
          renderTrack={({ props, children }) => (
            <div {...props} className="relative w-full h-[6px] bg-transparent">
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              {...props}
              className={`
          w-8 h-8 rounded-full bg-[#f76900] cursor-pointer
          flex items-center justify-center
          bg-[radial-gradient(circle,white_4px,transparent_3px)]
          shadow-[0_0_4px_#00000033] focus-within:outline-none
          -translate-y-[3px]
          ${index === 0 ? "z-20" : "z-10"}
        `}
              style={{
                ...props.style,
                left: `calc(${props.style?.left} - 16px)`, // 👈 prevents thumb from overflowing
              }}
            />
          )}
        />
      </div>
    </div>
  );
};

export default DualRangeSlider;
