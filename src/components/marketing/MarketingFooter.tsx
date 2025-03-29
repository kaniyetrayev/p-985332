
import React from "react";
import { useEffect, useState } from "react";
import { MiniKit } from "@worldcoin/minikit-js";

export const MarketingFooter: React.FC = () => {
  const [isWorldApp, setIsWorldApp] = useState(false);

  useEffect(() => {
    // Check if we're running in World App
    const checkEnvironment = () => {
      setIsWorldApp(MiniKit.isInstalled());
    };
    
    const timer = setTimeout(checkEnvironment, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscription submitted");
    
    if (isWorldApp) {
      // Use MiniKit for World App-specific functionality
      console.log("Using World App specific features");
    }
  };

  return (
    <footer className="bg-white mt-[109px] max-md:mt-10">
      <form
        onSubmit={handleSubscribe}
        className="flex w-full max-w-[375px] flex-col items-stretch pt-4 px-6 max-md:px-5"
      >
        <button
          type="submit"
          className={`shadow-[0px_5px_10px_rgba(25,28,32,0.2)] flex w-full items-stretch text-base font-semibold whitespace-nowrap tracking-[0px] ${
            isWorldApp ? "text-black" : "text-white"
          }`}
        >
          <div className={`self-stretch border min-w-60 w-full gap-1 overflow-hidden h-full flex-1 shrink basis-[0%] p-4 rounded-[100px] border-solid ${
            isWorldApp 
              ? "bg-[#3D7DFF] border-[#3D7DFF] text-white" 
              : "bg-[rgba(25,28,32,1)] border-[rgba(25,28,32,1)] text-white"
          }`}>
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
          {isWorldApp && (
            <span className="ml-1 text-[#3D7DFF]">World App Enabled</span>
          )}
        </p>
      </form>
      <div className="flex w-full flex-col items-center pt-[21px] pb-2 px-[38px] max-md:px-5">
        <div className="bg-neutral-900 flex w-[134px] shrink-0 h-[5px] rounded-[100px]" />
      </div>
    </footer>
  );
};
