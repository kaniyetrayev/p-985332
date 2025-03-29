import React from "react";
import { useEffect, useState } from "react";
import { MiniKit } from "@worldcoin/minikit-js";
import { useNavigate, useLocation } from "react-router-dom";

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

  const handleContinue = () => {
    // If on subscribe page, navigate to checkout
    if (location.pathname === '/subscribe') {
      navigate('/checkout');
    } else if (location.pathname === '/checkout') {
      navigate('/payment-success'); // Navigate to payment success page
    } else {
      // Otherwise go home
      navigate('/');
    }
  };

  // Determine which buttons to show based on current route
  const isSubscribePage = location.pathname === '/subscribe';
  const isCheckoutPage = location.pathname === '/checkout';
  const isPaymentSuccessPage = location.pathname === '/payment-success';

  // Don't show footer on payment success page
  if (isPaymentSuccessPage) {
    return null;
  }

  if (isCheckoutPage) {
    return (
      <footer className={`${isWorldApp ? 'bg-worldcoin-gray' : 'bg-white'} fixed bottom-0 left-0 w-full z-50 border-t border-[#E5E7EB]`}>
        <div className="flex w-full flex-col items-center px-6 py-4">
          <button
            onClick={() => navigate('/payment-success')}
            className="w-full"
          >
            <div className={`w-full py-4 rounded-[100px] text-white text-center text-base font-semibold ${
              isWorldApp 
                ? "bg-worldcoin-blue" 
                : "bg-worldcoin-black"
            }`}>
              Continue to Payment
            </div>
          </button>
          
          <p className="text-worldcoin-textGray text-center text-[13px] font-normal leading-none tracking-[0px] mt-4">
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
              <span className="ml-1 text-worldcoin-blue">World App Enabled</span>
            )}
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className={`${isWorldApp ? 'bg-worldcoin-gray' : 'bg-white'} fixed bottom-0 left-0 w-full z-50 border-t border-[#E5E7EB]`}>
      <div className="flex w-full flex-col items-center px-6 py-4">
        {isSubscribePage ? (
          <button
            onClick={handleContinue}
            className="w-full"
          >
            <div className={`w-full py-4 rounded-[100px] text-white text-center text-base font-semibold ${
              isWorldApp 
                ? "bg-worldcoin-blue" 
                : "bg-worldcoin-black"
            }`}>
              Continue
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
                  ? "bg-worldcoin-blue" 
                  : "bg-worldcoin-black"
              }`}>
                Subscribe
              </div>
            </button>
          </form>
        )}
        
        <p className="text-worldcoin-textGray text-center text-[13px] font-normal leading-none tracking-[0px] mt-4">
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
            <span className="ml-1 text-worldcoin-blue">World App Enabled</span>
          )}
        </p>
      </div>
    </footer>
  );
};
