
import React from "react";

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
  return (
    <div className="flex w-full items-stretch gap-2">
      <div className="flex min-w-60 w-full gap-3 overflow-hidden h-full flex-1 shrink basis-[0%] py-2">
        <div className="flex flex-col overflow-hidden items-center justify-center w-6">
          <img
            src={icon}
            className="aspect-[1] object-contain w-6"
            alt={`${title} icon`}
          />
        </div>
        <div className="min-w-60 flex-1 shrink basis-[0%]">
          <div className="text-[#191C20] text-base font-semibold tracking-[0px]">
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
