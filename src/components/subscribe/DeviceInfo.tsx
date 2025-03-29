
import React from "react";
import { Info, ChevronRight } from "lucide-react";

export const DeviceInfo: React.FC = () => {
  return (
    <div className="flex items-center p-4 bg-worldcoin-gray rounded-2xl">
      <div className="w-8 h-8 rounded-full bg-worldcoin-lightGray flex items-center justify-center mr-4">
        <Info className="w-5 h-5 text-worldcoin-textGray" />
      </div>
      <div className="flex-1">
        <p className="text-worldcoin-textDark font-medium">Ensure your device is carrier unlocked</p>
      </div>
      <ChevronRight className="w-5 h-5 text-worldcoin-textGray" />
    </div>
  );
};
