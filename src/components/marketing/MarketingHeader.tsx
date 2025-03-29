
import React from "react";
import { MiniAppHeader } from "@worldcoin/mini-apps-ui-kit-react";

export const MarketingHeader: React.FC = () => {
  return (
    <MiniAppHeader className="w-full">
      <div className="bg-white w-full overflow-hidden pb-11">
        <div className="bg-black">
          <div className="bg-white flex shrink-0 h-6 rounded-[0px_0px_0px_0px]" />
        </div>
      </div>
    </MiniAppHeader>
  );
};
