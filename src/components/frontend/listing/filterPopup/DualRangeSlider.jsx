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
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="text-base font-extralight text-[#777777]">
          {sliderValues[0]}
        </div>
        <div className="text-base font-extralight text-[#777777]">
          {sliderValues[1]}
        </div>
      </div>
 
      {/* track */}
      <div className="relative w-full h-2">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 -translate-y-1/2 rounded"></div>
        <div
          className="absolute top-1/2 h-1 bg-orange-500 -translate-y-1/2 rounded"
          style={{
            left: `${((sliderValues[0] - min) / (max - min)) * 100}%`,
            right: `${100 - ((sliderValues[1] - min) / (max - min)) * 100}%`,
          }}
        ></div>
      </div>
 
      {/* inputs handled by react-range but styled exactly like your thumbs */}
      <Range
        step={step}
        min={min}
        max={max}
        values={sliderValues}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div {...props} style={{ ...props.style, height: 0 }}>
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="
              w-8 h-8 rounded-full bg-[#f76900] cursor-pointer
              bg-[radial-gradient(circle,white_4px,transparent_3px)]
            "
          />
        )}
      />
    </div>
  );
};
 
export default DualRangeSlider;