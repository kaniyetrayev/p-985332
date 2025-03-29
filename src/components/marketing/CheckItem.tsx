
import React, { useEffect, useState } from "react";
import { MiniKit } from "@worldcoin/minikit-js";

interface CheckItemProps {
  label: string;
  value: string;
  icon: string;
}

export const CheckItem: React.FC<CheckItemProps> = ({ label, value, icon }) => {
  const [isWorldApp, setIsWorldApp] = useState(false);

  useEffect(() => {
    const checkEnvironment = () => {
      setIsWorldApp(MiniKit.isInstalled());
    };
    
    const timer = setTimeout(checkEnvironment, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${isWorldApp ? 'bg-worldcoin-gray' : 'bg-white'} flex w-full items-center gap-2 py-3`}>
      <div className="text-worldcoin-textGray font-normal flex-1">
        {label}
      </div>
      <div className={`${isWorldApp ? 'text-worldcoin-blue' : 'text-worldcoin-black'} font-medium`}>
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
