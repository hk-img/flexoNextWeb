import React, { useState, useEffect } from "react";

const DualRangeSlider = ({ min, max, step, values, onChange }) => {
  const [minValue, setMinValue] = useState(values.min);
  const [maxValue, setMaxValue] = useState(values.max);

  useEffect(() => {
    setMinValue(values.min);
    setMaxValue(values.max);
  }, [values]);

  const handleMinChange = (e) => {
    const val = Math.min(Number(e.target.value), maxValue - step);
    setMinValue(val);
    onChange({ min: val, max: maxValue });
  };

  const handleMaxChange = (e) => {
    const val = Math.max(Number(e.target.value), minValue + step);
    setMaxValue(val);
    onChange({ min: minValue, max: val });
  };

  return (
    <div className="relative w-full">
      {/* values */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="text-base font-extralight text-[#777777]">{minValue}</div>
        <div className="text-base font-extralight text-[#777777]">{maxValue}</div>
      </div>

      {/* track */}
      <div className="relative w-full h-2">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 -translate-y-1/2 rounded"></div>
        <div
          className="absolute top-1/2 h-1 bg-orange-500 -translate-y-1/2 rounded"
          style={{
            left: `${((minValue - min) / (max - min)) * 100}%`,
            right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
          }}
        ></div>
      </div>

      {/* inputs */}
     <input
  type="range"
  min={min}
  max={max}
  step={step}
  value={minValue}
  onChange={handleMinChange}
  className="
    absolute top-[34px] w-full h-2 bg-transparent appearance-none pointer-events-none
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:bg-[#f76900]
    [&::-webkit-slider-thumb]:cursor-pointer
    [&::-webkit-slider-thumb]:pointer-events-auto
    [&::-webkit-slider-thumb]:bg-[radial-gradient(circle,white_4px,transparent_3px)]
  "
/>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxValue}
        onChange={handleMaxChange}
        className="absolute top-[34px] w-full h-2 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#f76900] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:bg-[radial-gradient(circle,white_4px,transparent_3px)]"
      />
    </div>
  );
};

export default DualRangeSlider;
