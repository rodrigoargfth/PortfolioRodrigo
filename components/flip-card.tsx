"use client";

import { useState, ReactNode } from "react";

interface FlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
}

const FlipCard = ({ frontContent, backContent }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-40 h-40 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden bg-slate-800 flex items-center justify-center rounded-xl shadow-lg">
          {frontContent}
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-sky-700 flex items-center justify-center rounded-xl text-white font-bold">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
