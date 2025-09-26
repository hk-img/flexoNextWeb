import React from "react";

const SingleRangeSlider = ({ min, max, step, value, onChange }) => {
  return (
    <div className="relative w-full">
      {/* value */}
      <div className="flex justify-end">
        <div className="text-base font-extralight text-[#777777]">{value}</div>
      </div>

      {/* track */}
      <div className="relative w-full h-2">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 -translate-y-1/2 rounded"></div>
        <div
          className="absolute top-1/2 h-1 bg-orange-500 -translate-y-1/2 rounded"
          style={{
            width: `${((value - min) / (max - min)) * 100}%`,
          }}
        ></div>
      </div>

      {/* input */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute top-[22px] w-full h-2 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#f76900] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto"
      />
    </div>
  );
};

export default SingleRangeSlider;
