"use client";
import React from 'react';

const Loading = () => {
  const letters = ["F", "L", "E", "X", "O"];
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex space-x-1">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="text-[40px] font-extrabold  text-[#000d54] last:text-[#f76900] animate-wave"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loading;
