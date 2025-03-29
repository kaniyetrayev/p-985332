
import React, { useEffect, useState } from "react";
import { MiniKit } from "@worldcoin/minikit-js";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: React.ReactNode;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  const [isWorldApp, setIsWorldApp] = useState(false);

  useEffect(() => {
    const checkEnvironment = () => {
      setIsWorldApp(MiniKit.isInstalled());
    };
    
    const timer = setTimeout(checkEnvironment, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-full items-stretch gap-2 my-4">
      <div className="flex w-full gap-3 py-2">
        <div className="flex flex-col items-center justify-center w-6">
          <img
            src={icon}
            className="aspect-[1] object-contain w-6"
            alt={`${title} icon`}
          />
        </div>
        <div className="flex-1">
          <div className={`${isWorldApp ? 'text-worldcoin-blue' : 'text-worldcoin-black'} text-base font-semibold tracking-[0px]`}>
            {title}
          </div>
          <div className="text-worldcoin-textGray text-sm font-normal leading-5 tracking-[0px]">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
