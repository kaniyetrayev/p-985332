
import React from "react";
import { Text } from "@worldcoin/mini-apps-ui-kit-react";
import { CheckItem } from "./CheckItem";

export const MarketingChecks: React.FC = () => {
  return (
    <section className="w-full mt-5">
      <div className="flex w-full items-center gap-4 text-xl text-[#191C20] font-semibold whitespace-nowrap tracking-[0px] leading-[1.4]">
        <Text variant="heading2" className="self-stretch flex-1 shrink basis-[0%] min-w-60 w-full gap-2.5 my-auto">
          Checks
        </Text>
      </div>
      <div className="items-stretch shadow-[3px_6px_15px_0px_rgba(0,0,0,0.10)] bg-white flex w-full flex-col text-sm tracking-[0px] leading-none justify-center mt-4 px-4 py-2 rounded-xl">
        <div className="w-full">
          <div className="w-full">
            <CheckItem
              label="eSIM compatibility"
              value="Supported"
              icon="https://cdn.builder.io/api/v1/image/assets/5ff7ee42325448c9879d12b7db97993d/5df4373414b3bc871975a7f3ec30313467ccaf57?placeholderIfAbsent=true"
            />
            <CheckItem
              label="Coverage in your area"
              value="Excellent"
              icon="https://cdn.builder.io/api/v1/image/assets/5ff7ee42325448c9879d12b7db97993d/4537aad20d5d50df70365422abdcce305d533cb4?placeholderIfAbsent=true"
            />
            <CheckItem
              label="Plan"
              value="Next Gen Unlimited"
              icon="https://cdn.builder.io/api/v1/image/assets/5ff7ee42325448c9879d12b7db97993d/4537aad20d5d50df70365422abdcce305d533cb4?placeholderIfAbsent=true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
