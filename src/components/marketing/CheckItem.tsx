
import React from "react";
import { MiniKit } from "@worldcoin/minikit-js";

interface CheckItemProps {
  label: string;
  value: string;
  icon: string;
}

export const CheckItem: React.FC<CheckItemProps> = ({ label, value, icon }) => {
  const isWorldApp = MiniKit.isInstalled();

  return (
    <div className={`${isWorldApp ? 'bg-[#F8F8F8]' : 'bg-white'} flex w-full items-center gap-2 py-3`}>
      <div className="text-[#657080] font-normal flex-1">
        {label}
      </div>
      <div className={`${isWorldApp ? 'text-[#3D7DFF]' : 'text-[#191C20]'} font-medium`}>
        {value}
      </div>
      <img
        src={icon}
        className="w-4 h-4 object-contain"
        alt="Status icon"
      />
    </div>
  );
};
