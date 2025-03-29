import React from "react";

export const MarketingFooter: React.FC = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscription submitted");
  };

  return (
    <footer className="bg-white mt-[109px] max-md:mt-10">
      <form
        onSubmit={handleSubscribe}
        className="flex w-full max-w-[375px] flex-col items-stretch pt-4 px-6 max-md:px-5"
      >
        <button
          type="submit"
          className="shadow-[0px_5px_10px_rgba(25,28,32,0.2)] flex w-full items-stretch text-base text-white font-semibold whitespace-nowrap tracking-[0px]"
        >
          <div className="self-stretch bg-[rgba(25,28,32,1)] border min-w-60 w-full gap-1 overflow-hidden h-full flex-1 shrink basis-[0%] p-4 rounded-[100px] border-[rgba(25,28,32,1)] border-solid">
            Subscribe
          </div>
        </button>
        <p className="text-[#657080] text-center text-[13px] font-normal leading-none tracking-[0px] mt-4">
          By continuing, you accept Gigs{" "}
          <a href="#terms" className="underline">
            terms
          </a>{" "}
          and{" "}
          <a href="#conditions" className="underline">
            conditions
          </a>
          .
        </p>
      </form>
      <div className="flex w-full flex-col items-center pt-[21px] pb-2 px-[38px] max-md:px-5">
        <div className="bg-neutral-900 flex w-[134px] shrink-0 h-[5px] rounded-[100px]" />
      </div>
    </footer>
  );
};
