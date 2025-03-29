
import React from "react";

interface SimCardDisplayProps {
  phoneNumber: string;
  planName: string;
}

export const SimCardDisplay: React.FC<SimCardDisplayProps> = ({ phoneNumber, planName }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="w-full max-w-[300px] mb-4">
        <div className="bg-gray-100 rounded-xl w-full h-[180px] p-6 relative overflow-hidden">
          <div className="flex flex-col justify-between h-full relative z-10">
            <div>
              <p className="text-gray-600 font-medium">ACME</p>
            </div>
            <div>
              <p className="text-xl font-medium">{planName}</p>
              <div className="absolute bottom-6 right-6">
                <img 
                  src="/lovable-uploads/3ed3348e-514a-4fb4-8602-7043d056f816.png" 
                  alt="AT&T logo" 
                  className="h-6"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 opacity-70 blur-xl"></div>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-6">{planName}</h2>
    </div>
  );
};
