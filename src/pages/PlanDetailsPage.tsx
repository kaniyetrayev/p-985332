
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Headphones } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { MiniKit } from "@worldcoin/minikit-js";
import { SimCardDisplay } from "@/components/plan/SimCardDisplay";
import { ActionButtons } from "@/components/plan/ActionButtons";
import { DetailsSection, DetailItem } from "@/components/plan/DetailsSection";
import { PlanDetailsSheet } from "@/components/plan/PlanDetailsSheet";

// Extended MiniKit type
const ExtendedMiniKit = MiniKit as typeof MiniKit & {
  registerComponent?: (componentName: string, options?: { theme?: string }) => void;
};

const PlanDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const [isWorldApp, setIsWorldApp] = useState(false);
  const [detailsSheetOpen, setDetailsSheetOpen] = useState(false);
  const phoneNumber = "+1 (940) 310-2432";
  
  // SIM card details
  const simDetails: DetailItem[] = [
    { label: "Phone number", value: phoneNumber },
    { label: "Network provider", value: "AT&T" },
    { label: "Active since", value: "Sunday, Feb 5, 2025" },
  ];
  
  // Billing details
  const billingDetails: DetailItem[] = [
    { label: "Next renewal", value: "Tuesday, March 7, 2025" },
    { label: "Subscription started", value: "Sunday, Feb 5, 2025" },
    { label: "Billing cycle", value: "Monthly" },
  ];

  const handleGoBack = () => {
    navigate('/payment-success');
  };

  const handleCopyPhoneNumber = (value: string) => {
    navigator.clipboard.writeText(value.replace(/[^0-9+]/g, ''));
    console.log("Phone number copied to clipboard");
  };

  const handleAddLine = () => {
    console.log("Add line");
  };
  
  const handleDetailsClick = () => {
    setDetailsSheetOpen(true);
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
      <SimCardDisplay phoneNumber={phoneNumber} planName="Unlimited" />
      
      {/* Action buttons */}
      <ActionButtons onDetailsClick={handleDetailsClick} />
      
      {/* SIM card details */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">SIM card</h3>
          <button className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
            Manage
          </button>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          {simDetails.map((detail, index) => (
            <div key={index} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
              <span className="text-gray-500">{detail.label}</span>
              <div className="flex items-center">
                <span className="font-medium">{detail.value}</span>
                {detail.label === "Phone number" && (
                  <button onClick={() => handleCopyPhoneNumber(detail.value)} className="ml-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H16C17.1046 21 18 20.1046 18 19V17M8 5C8 6.10457 8.89543 7 10 7H14C15.1046 7 16 6.10457 16 5M8 5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5M16 5V9C16 10.1046 16.8954 11 18 11H20C21.1046 11 22 11.8954 22 13V19C22 20.1046 21.1046 21 20 21H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Billing details */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Billing</h3>
          <button className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
            Manage
          </button>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          {billingDetails.map((detail, index) => (
            <div key={index} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
              <span className="text-gray-500">{detail.label}</span>
              <span className="font-medium">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add line button */}
      <button
        onClick={handleAddLine}
        className="w-full text-center py-4 text-white font-semibold text-lg rounded-full bg-black mb-6"
        id={isWorldApp ? "minikit-primary-button" : ""}
      >
        Add line
      </button>
      
      {/* Plan Details Sheet */}
      <PlanDetailsSheet 
        isOpen={detailsSheetOpen}
        onOpenChange={setDetailsSheetOpen}
      />
    </PageLayout>
  );
};

export default PlanDetailsPage;
