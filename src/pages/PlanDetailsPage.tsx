
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Headphones } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { MiniKit } from "@worldcoin/minikit-js";
import { SimCardDisplay } from "@/components/plan/SimCardDisplay";
import { ActionButtons } from "@/components/plan/ActionButtons";
import { DetailSection } from "@/components/plan/DetailSection";
import { DetailItemProps } from "@/components/common/DetailListItem";
import { PlanDetailsSheet } from "@/components/plan/PlanDetailsSheet";
import { CopyButton } from "@/components/plan/CopyButton";

// Extended MiniKit type
const ExtendedMiniKit = MiniKit as typeof MiniKit & {
  registerComponent?: (componentName: string, options?: { theme?: string }) => void;
};

const PlanDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const [isWorldApp, setIsWorldApp] = useState(false);
  const [detailsSheetOpen, setDetailsSheetOpen] = useState(false);
  const phoneNumber = "+1 (940) 310-2432";
  const planName = "Next Gen Unlimited";
  
  // SIM card details with phone number copy button
  const simDetails: Omit<DetailItemProps, 'isWorldApp'>[] = [
    { 
      label: "Phone number", 
      value: phoneNumber,
      actionElement: <CopyButton value={phoneNumber} onCopy={handleCopyPhoneNumber} />
    },
    { label: "Network provider", value: "AT&T" },
    { label: "Active since", value: "Sunday, Feb 5, 2025" },
  ];
  
  // Billing details
  const billingDetails: Omit<DetailItemProps, 'isWorldApp'>[] = [
    { label: "Next renewal", value: "Tuesday, March 7, 2025" },
    { label: "Subscription started", value: "Sunday, Feb 5, 2025" },
    { label: "Billing cycle", value: "Monthly" },
  ];

  function handleGoBack() {
    navigate('/payment-success');
  }

  function handleCopyPhoneNumber(value: string) {
    navigator.clipboard.writeText(value.replace(/[^0-9+]/g, ''));
    console.log("Phone number copied to clipboard");
  }

  function handleManageSim() {
    console.log("Manage SIM clicked");
  }

  function handleManageBilling() {
    console.log("Manage billing clicked");
  }
  
  function handleDetailsClick() {
    setDetailsSheetOpen(true);
  }

  // Check if running in World App
  useEffect(() => {
    const checkEnvironment = async () => {
      try {
        setIsWorldApp(MiniKit.isInstalled());
        console.log("MiniKit installed:", MiniKit.isInstalled());
      } catch (error) {
        console.error("Error checking MiniKit:", error);
      }
    };
    
    checkEnvironment();
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
        console.log("MiniKit components registered successfully");
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
      <SimCardDisplay phoneNumber={phoneNumber} planName={planName} isWorldApp={isWorldApp} />
      
      {/* Action buttons */}
      <ActionButtons onDetailsClick={handleDetailsClick} isWorldApp={isWorldApp} />
      
      {/* SIM card details */}
      <DetailSection 
        title="SIM card" 
        items={simDetails} 
        onActionClick={handleManageSim}
        isWorldApp={isWorldApp}
      />
      
      {/* Billing details */}
      <DetailSection 
        title="Billing" 
        items={billingDetails} 
        onActionClick={handleManageBilling}
        isWorldApp={isWorldApp}
      />
      
      {/* Plan Details Sheet */}
      <PlanDetailsSheet 
        isOpen={detailsSheetOpen}
        onOpenChange={setDetailsSheetOpen}
        isWorldApp={isWorldApp}
      />
    </PageLayout>
  );
};

export default PlanDetailsPage;
