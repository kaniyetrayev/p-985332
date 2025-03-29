
import React from "react";
import { useEffect, useState } from "react";
import { MiniKit } from "@worldcoin/minikit-js";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const MarketingFooter: React.FC = () => {
  const [isWorldApp, setIsWorldApp] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    console.log("Navigating to subscribe page");
    navigate('/subscribe');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  // Determine which buttons to show based on current route
  const isSubscribePage = location.pathname === '/subscribe';

  return (
    <footer className={`${isWorldApp ? 'bg-[#F8F8F8]' : 'bg-white'} fixed bottom-0 left-0 w-full z-50 border-t border-[#E5E7EB]`}>
      <div className="flex w-full flex-col items-center px-6 py-4">
        {isSubscribePage ? (
          <button
            onClick={handleBackToHome}
            className="w-full"
          >
            <div className={`w-full py-4 rounded-[100px] text-white text-center text-base font-semibold ${
              isWorldApp 
                ? "bg-[#3D7DFF]" 
                : "bg-[#191C20]"
            }`}>
              Back to Home
            </div>
          </button>
        ) : (
          <form onSubmit={handleSubscribe} className="w-full">
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
          </form>
        )}
        
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
      </div>
    </footer>
  );
};
