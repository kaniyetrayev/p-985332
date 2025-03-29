
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
    <div className="w-full">
      <div className={`${isWorldApp ? 'bg-[#F8F8F8]' : 'bg-white'} w-full mx-auto pb-[130px]`}>
        <div>
          <MarketingHeader />
          <div className="w-full py-4">
            <MarketingHero />
            <div className="w-full mt-5 px-6">
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
