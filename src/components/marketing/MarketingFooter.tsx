
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
    <footer className={`${isWorldApp ? 'bg-[#F8F8F8]' : 'bg-white'} fixed bottom-0 left-0 w-full z-50`}>
      <form
        onSubmit={handleSubscribe}
        className="flex w-full flex-col items-center px-6 pb-4 pt-4"
      >
        <button
          type="submit"
          className="w-full"
        >
          <div className={`w-full py-4 rounded-[100px] text-white text-center text-base font-semibold ${
            isWorldApp 
              ? "bg-[#3D7DFF]" 
              : "bg-[#191C20]"
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
    </footer>
  );
};
