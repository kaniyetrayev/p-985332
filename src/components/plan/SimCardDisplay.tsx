
import React from "react";

interface SimCardDisplayProps {
  phoneNumber: string;
  planName: string;
}

export const SimCardDisplay: React.FC<SimCardDisplayProps> = ({ phoneNumber, planName }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="w-full max-w-[300px] mb-4">
        <img 
          src="/lovable-uploads/04bd8633-56f5-4a16-b2c9-5aea7f816748.png"
          alt="eSIM Card"
          className="w-full rounded-xl"
        />
      </div>
      
      <h2 className="text-2xl font-bold mb-6">Next Gen Unlimited</h2>
    </div>
  );
};
