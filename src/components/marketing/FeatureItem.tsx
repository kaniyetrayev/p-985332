
import React from "react";
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
  const isWorldApp = MiniKit.isInstalled();

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
          <div className={`${isWorldApp ? 'text-[#3D7DFF]' : 'text-[#191C20]'} text-base font-semibold tracking-[0px]`}>
            {title}
          </div>
          <div className="text-[#657080] text-sm font-normal leading-5 tracking-[0px]">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
