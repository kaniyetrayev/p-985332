
import React from "react";
import { FeatureItem } from "./FeatureItem";

export const MarketingFeatures: React.FC = () => {
  return (
    <section className="w-full py-3">
      <h2 className="self-stretch flex-1 shrink basis-[0%] w-full text-xl text-[#191C20] font-semibold tracking-[0px] leading-[1.2]">
        What's included?
      </h2>
      <div className="w-full mt-3">
        <FeatureItem
          icon="https://cdn.builder.io/api/v1/image/assets/5ff7ee42325448c9879d12b7db97993d/24746d798dc64a4025d739787a55319a16531d58?placeholderIfAbsent=true"
          title="Data"
          description={
            <>
              Unlimited 5G data that never gets slow
              <br />
              Fast service in crowded places
              <br />
              50GB 5G mobile hotspot
              <br />
              On AT&T's network
              <br />
              20GB roaming data in Mexico & Canada
            </>
          }
        />
        <FeatureItem
          icon="https://cdn.builder.io/api/v1/image/assets/5ff7ee42325448c9879d12b7db97993d/5973f91b12d81df1c44b71d395ac5592e0440097?placeholderIfAbsent=true"
          title="Calls"
          description={
            <>
              Call the US from any country for free
              <br />
              Call within any country for free
              <br />
              Unlimited talk & text to Mexico & Canada
            </>
          }
        />
        <FeatureItem
          icon="https://cdn.builder.io/api/v1/image/assets/5ff7ee42325448c9879d12b7db97993d/ba804a51e874585737568d54add7a75adfb3038d?placeholderIfAbsent=true"
          title="Entertainment"
          description="Unlimited HD video streaming"
        />
        <FeatureItem
          icon="https://cdn.builder.io/api/v1/image/assets/5ff7ee42325448c9879d12b7db97993d/f8112ee1e25507bae59d63c8f28f64b96fce3ad7?placeholderIfAbsent=true"
          title="More"
          description={
            <>
              Collect x2 World Coin
              <br />
              Instant eSIM activation
              <br />
              Keep your number or get a new one
              <br />
              No contract, cancel anytime
            </>
          }
        />
      </div>
    </section>
  );
};
