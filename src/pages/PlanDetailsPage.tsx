import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Headphones } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { MiniKit } from "@worldcoin/minikit-js";
import { SimCardDisplay } from "@/components/plan/SimCardDisplay";
import { ActionButtons } from "@/components/plan/ActionButtons";
import { DetailsSection, DetailItem } from "@/components/plan/DetailsSection";
import { DataUsageSection } from "@/components/plan/DataUsageSection";

// Extended MiniKit type
const ExtendedMiniKit = MiniKit as typeof MiniKit & {
  registerComponent?: (componentName: string, options?: { theme?: string }) => void;
};

const PlanDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const [isWorldApp, setIsWorldApp] = useState(false);
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

  // Data usage details
  const usedData = 4.7; // GB
  const totalData = 15; // GB
  const resetDate = "March 7, 2025";

  const handleGoBack = () => {
    navigate('/payment-success');
  };

  const handleCopyPhoneNumber = (value: string) => {
    navigator.clipboard.writeText(value.replace(/[^0-9+]/g, ''));
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
      <SimCardDisplay phoneNumber={phoneNumber} planName="Unlimited" />
      
      {/* Action buttons */}
      <ActionButtons />
      
      {/* Data Usage Section */}
      <DataUsageSection 
        usedData={usedData}
        totalData={totalData}
        resetDate={resetDate}
      />
      
      {/* SIM card details */}
      <DetailsSection 
        title="SIM card" 
        details={simDetails} 
        onCopy={handleCopyPhoneNumber}
        onAction={() => console.log("Manage SIM")}
      />
      
      {/* Billing details */}
      <DetailsSection 
        title="Billing" 
        details={billingDetails}
        onAction={() => console.log("Manage billing")}
      />
      
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
