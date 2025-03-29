
import React from "react";
import { MarketingHeader } from "./MarketingHeader";
import { MarketingHero } from "./MarketingHero";
import { MarketingFeatures } from "./MarketingFeatures";
import { MarketingChecks } from "./MarketingChecks";
import { MarketingFooter } from "./MarketingFooter";
import { MiniKit } from '@worldcoin/minikit-js';

export const MarketingApp: React.FC = () => {
  const isWorldApp = MiniKit.isInstalled();

  return (
    <div className="flex max-w-[927px] flex-col px-20 max-md:pl-5">
      <div className={`${isWorldApp ? 'bg-[#F8F8F8]' : 'bg-white'} w-[375px] max-w-full overflow-hidden rounded-[32px]`}>
        <div>
          <MarketingHeader />
          <div className="w-full py-4">
            <MarketingHero />
            <div className="w-full mt-5 px-6 max-md:px-5">
              <MarketingFeatures />
              <MarketingChecks />
            </div>
          </div>
        </div>
        <MarketingFooter />
      </div>
    </div>
  );
};
