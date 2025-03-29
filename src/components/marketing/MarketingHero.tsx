
import React from "react";
import { Text } from "@worldcoin/mini-apps-ui-kit-react";

export const MarketingHero: React.FC = () => {
  return (
    <section className="relative flex min-h-96 w-full flex-col overflow-hidden justify-center py-[54px]">
      <div className="absolute z-0 flex w-[1496px] flex-col -translate-x-2/4 -translate-y-2/4 h-[1496px] left-2/4 top-2/4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/5ff7ee42325448c9879d12b7db97993d/3130f9c1aa54687f267f1037b265cfd0ff4addd1?placeholderIfAbsent=true"
          className="aspect-[3.89] object-contain w-full max-md:max-w-full"
          alt="Background pattern"
        />
      </div>
      <div className="absolute z-0 flex min-h-96 w-[393px] right-[-18px] h-96 bottom-0" />
      <div className="-translate-x-2/4 -translate-y-2/4 absolute z-0 flex min-h-[143px] w-[161px] max-w-full h-[143px] rounded-2xl left-2/4 top-2/4" />
      <div className="self-center z-0 w-[203px] max-w-full text-[13px] text-black font-medium whitespace-nowrap">
        <div className="overflow-hidden rounded-[9px]">
          <div className="flex flex-col relative aspect-[1.586] w-full overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5ff7ee42325448c9879d12b7db97993d/912d559df4d09748ebe4373941bb0211990b3efe?placeholderIfAbsent=true"
              className="absolute h-full w-full object-cover inset-0"
              alt="Card background"
            />
            <div className="relative shadow-[0px_0px_0px_rgba(255,255,255,0.3)] min-h-32 w-full overflow-hidden p-4 rounded-[9px]">
              <div className="flex min-h-3.5 w-full gap-[5px]" />
              <div className="flex min-h-[18px] w-full items-center gap-[40px_94px] justify-between mt-[63px] max-md:mt-10">
                <div className="self-stretch my-auto">Unlimited</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/5ff7ee42325448c9879d12b7db97993d/ec25b176708ff03749f3a69dc717c9ad9dcb7c3f?placeholderIfAbsent=true"
                  className="aspect-[1.18] object-contain w-5 self-stretch shrink-0 my-auto"
                  alt="Unlimited icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch z-0 flex w-full flex-col items-stretch text-[#191C20] text-center justify-center mt-8 px-4">
        <Text variant="heading1" className="text-[34px] font-bold leading-10 tracking-[0px] mix-blend-multiply">
          Explore World Connect Unlimited
        </Text>
        <Text variant="paragraph1" className="text-base font-medium tracking-[0px] mt-3">
          Just $35 monthly
        </Text>
      </div>
    </section>
  );
};
