
import React from "react";
import { Text } from "@worldcoin/mini-apps-ui-kit-react";

interface CheckItemProps {
  label: string;
  value: string;
  icon: string;
}

export const CheckItem: React.FC<CheckItemProps> = ({ label, value, icon }) => {
  return (
    <div className="bg-white flex w-full items-stretch gap-2 py-3">
      <div className="flex min-w-60 w-full items-center gap-2 overflow-hidden h-full flex-1 shrink basis-[0%]">
        <Text variant="paragraph2" className="text-[#657080] font-normal self-stretch flex-1 shrink basis-[0%] my-auto">
          {label}
        </Text>
        <Text variant="paragraph2" className="text-[#191C20] font-medium self-stretch my-auto">
          {value}
        </Text>
        <img
          src={icon}
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          alt="Status icon"
        />
      </div>
    </div>
  );
};
