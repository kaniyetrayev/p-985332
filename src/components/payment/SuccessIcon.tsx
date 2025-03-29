
import React from "react";
import { Check } from "lucide-react";

export const SuccessIcon: React.FC = () => {
  return (
    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8">
      <Check className="text-white h-12 w-12" />
    </div>
  );
};
