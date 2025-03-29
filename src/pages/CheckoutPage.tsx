
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MiniKit } from "@worldcoin/minikit-js";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const [isWorldApp, setIsWorldApp] = useState(false);
  const phoneNumber = "+1 (940) 310-2432";
  const subtotal = 35.00;
  const taxes = 2.40;
  const total = subtotal + taxes;

  useEffect(() => {
    const checkEnvironment = () => {
      setIsWorldApp(MiniKit.isInstalled());
    };
    
    const timer = setTimeout(checkEnvironment, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleGoBack = () => {
    navigate('/subscribe');
  };

  return (
    <div className={`${isWorldApp ? 'bg-[#F8F8F8]' : 'bg-white'} min-h-screen w-full flex flex-col pb-[130px]`}>
      {/* Header */}
      <div className="px-6 pt-6 pb-4 flex items-center">
        <button 
          onClick={handleGoBack}
          className="w-10 h-10 rounded-full bg-[#F1F1F1] flex items-center justify-center mr-4"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6">
        <h1 className="text-5xl font-bold mb-8">Checkout</h1>
        
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">World Connect Unlimited</h2>
            <p className="text-gray-600">{phoneNumber}</p>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-500 mb-1">ACME</span>
              <span className="text-lg font-semibold">Unlimited</span>
            </div>
            <div className="flex justify-end mt-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="black" strokeWidth="1.5"/>
                <path d="M2 10H22" stroke="black" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mb-4">
          <div className="flex justify-between mb-4">
            <span className="text-gray-600 text-lg">Subtotal</span>
            <span className="text-xl font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 text-lg">Taxes</span>
            <div className="flex items-center">
              <span className="text-xl font-semibold mr-2">${taxes.toFixed(2)}</span>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-600 text-lg">Total</span>
            <span className="text-2xl font-bold">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <MarketingFooter />
    </div>
  );
};

export default CheckoutPage;
