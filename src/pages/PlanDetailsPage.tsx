
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Headphones, ArrowUp, Pause, Info, MoreHorizontal, Copy } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { MiniKit } from "@worldcoin/minikit-js";

// Extended MiniKit type
const ExtendedMiniKit = MiniKit as typeof MiniKit & {
  registerComponent?: (componentName: string, options?: { theme?: string }) => void;
};

interface PlanDetail {
  label: string;
  value: string;
}

const PlanDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const [isWorldApp, setIsWorldApp] = useState(false);
  const phoneNumber = "+1 (940) 310-2432";
  
  // SIM card details
  const simDetails: PlanDetail[] = [
    { label: "Phone number", value: phoneNumber },
    { label: "Network provider", value: "AT&T" },
    { label: "Active since", value: "Sunday, Feb 5, 2025" },
  ];
  
  // Billing details
  const billingDetails: PlanDetail[] = [
    { label: "Next renewal", value: "Tuesday, March 7, 2025" },
    { label: "Subscription started", value: "Sunday, Feb 5, 2025" },
    { label: "Billing cycle", value: "Monthly" },
  ];

  const handleGoBack = () => {
    navigate('/payment-success');
  };

  const handleCopyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber.replace(/[^0-9+]/g, ''));
    console.log("Phone number copied to clipboard");
    // Could show a toast notification here
  };

  const handleAddLine = () => {
    console.log("Add line");
    // Handle adding a new line logic here
  };

  // Check if running in World App
  useEffect(() => {
    const checkEnvironment = () => {
      setIsWorldApp(MiniKit.isInstalled());
    };
    
    const timer = setTimeout(checkEnvironment, 500);
    return () => clearTimeout(timer);
  }, []);

  // Register MiniKit components if available
  useEffect(() => {
    if (isWorldApp && ExtendedMiniKit.registerComponent) {
      try {
        ExtendedMiniKit.registerComponent('button', {
          theme: 'worldcoin',
        });
        ExtendedMiniKit.registerComponent('card', {
          theme: 'worldcoin',
        });
      } catch (error) {
        console.error("Error registering MiniKit components:", error);
      }
    }
  }, [isWorldApp]);

  return (
    <PageLayout 
      showBackButton={true} 
      onBackClick={handleGoBack}
      rightIcon={<Headphones className="w-5 h-5" />}
    >
      {/* SIM Card Display */}
      <div className="flex flex-col items-center mb-8">
        <div className="bg-gray-100 rounded-xl w-full max-w-[300px] h-[180px] p-6 mb-4 relative">
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-gray-600">ACME</p>
            </div>
            <div>
              <p className="text-xl font-medium">Unlimited</p>
              <div className="absolute bottom-6 right-6">
                <img 
                  src="/lovable-uploads/3ca07b41-ed40-4bbd-ab2d-673189534185.png" 
                  alt="AT&T logo" 
                  className="h-6"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 opacity-70 blur-md"></div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Next Gen Unlimited</h2>
        
        {/* Action buttons */}
        <div className="grid grid-cols-4 gap-4 w-full mb-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-worldcoin-lightGray flex items-center justify-center mb-2">
              <ArrowUp className="w-5 h-5" />
            </div>
            <span className="text-sm">Change</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-worldcoin-lightGray flex items-center justify-center mb-2">
              <Pause className="w-5 h-5" />
            </div>
            <span className="text-sm">Pause</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-worldcoin-lightGray flex items-center justify-center mb-2">
              <Info className="w-5 h-5" />
            </div>
            <span className="text-sm">Details</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-worldcoin-lightGray flex items-center justify-center mb-2">
              <MoreHorizontal className="w-5 h-5" />
            </div>
            <span className="text-sm">More</span>
          </div>
        </div>
      </div>
      
      {/* SIM card details */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">SIM card</h3>
          <button className="bg-worldcoin-lightGray text-black px-5 py-2 rounded-full text-sm font-medium">
            Manage
          </button>
        </div>
        
        <div className="bg-white rounded-xl p-5 shadow-sm">
          {simDetails.map((detail, index) => (
            <div 
              key={index} 
              className={`flex justify-between items-center ${
                index !== simDetails.length - 1 ? "pb-4 mb-4 border-b border-gray-100" : ""
              }`}
            >
              <span className="text-worldcoin-textGray">{detail.label}</span>
              <div className="flex items-center">
                <span className="font-medium">{detail.value}</span>
                {detail.label === "Phone number" && (
                  <button 
                    onClick={handleCopyPhoneNumber} 
                    className="ml-2 text-gray-500"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Billing details */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-4">Billing</h3>
        
        <div className="bg-white rounded-xl p-5 shadow-sm">
          {billingDetails.map((detail, index) => (
            <div 
              key={index} 
              className={`flex justify-between items-center ${
                index !== billingDetails.length - 1 ? "pb-4 mb-4 border-b border-gray-100" : ""
              }`}
            >
              <span className="text-worldcoin-textGray">{detail.label}</span>
              <span className="font-medium">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add line button */}
      {isWorldApp ? (
        <button
          onClick={handleAddLine}
          className="w-full text-center py-4 text-white font-semibold text-lg rounded-full bg-black mb-6"
          id="minikit-primary-button"
        >
          Add line
        </button>
      ) : (
        <button
          onClick={handleAddLine}
          className="w-full text-center py-4 text-white font-semibold text-lg rounded-full bg-black mb-6"
        >
          Add line
        </button>
      )}
    </PageLayout>
  );
};

export default PlanDetailsPage;
