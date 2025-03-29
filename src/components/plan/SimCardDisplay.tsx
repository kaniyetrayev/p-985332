
import React from "react";

interface SimCardDisplayProps {
  phoneNumber: string;
  planName: string;
}

export const SimCardDisplay: React.FC<SimCardDisplayProps> = ({ phoneNumber, planName }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="bg-gray-100 rounded-xl w-full max-w-[300px] h-[180px] p-6 mb-4 relative">
        <div className="flex flex-col justify-between h-full">
          <div>
            <p className="text-gray-600">ACME</p>
          </div>
          <div>
            <p className="text-xl font-medium">{planName}</p>
            <div className="absolute bottom-6 right-6">
              <img 
                src="/lovable-uploads/3ca07b41-ed40-4bbd-ab2d-673189534185.png" 
                alt="AT&T logo" 
                className="h-6"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 opacity-70 blur-md"></div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-6">Next Gen Unlimited</h2>
    </div>
  );
};
