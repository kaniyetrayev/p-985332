
import React, { useEffect, useState } from "react";
import { MiniKit } from "@worldcoin/minikit-js";

interface SimCardDisplayProps {
  phoneNumber: string;
  planName: string;
  isWorldApp: boolean;
}

export const SimCardDisplay: React.FC<SimCardDisplayProps> = ({ phoneNumber, planName, isWorldApp }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="w-full max-w-[300px] mb-4">
        <div 
          className={`${isWorldApp ? 'bg-worldcoin-lightGray' : 'bg-gray-100'} rounded-xl w-full h-[180px] p-6 relative overflow-hidden`}
          id={isWorldApp ? "minikit-card" : ""}
        >
          <div className="flex flex-col justify-between h-full relative z-10">
            <div>
              <p className={`${isWorldApp ? 'text-worldcoin-textGray' : 'text-gray-600'} font-medium`}>ACME</p>
            </div>
            <div>
              <p className="text-xl font-medium">{planName}</p>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 opacity-70 blur-xl"></div>
          </div>
        </div>
      </div>
      
      <h2 className={`text-2xl font-bold mb-6 ${isWorldApp ? 'text-worldcoin-textDark' : ''}`}>{planName}</h2>
    </div>
  );
};
