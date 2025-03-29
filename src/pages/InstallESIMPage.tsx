
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Headphones } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { MiniKit } from "@worldcoin/minikit-js";
import { InstallationTabs } from "@/components/esim/InstallationTabs";
import { InstallationContent } from "@/components/esim/InstallationContent";
import { StepIndicators } from "@/components/esim/StepIndicators";
import { InstallButton } from "@/components/esim/InstallButton";

// Extended MiniKit type
const ExtendedMiniKit = MiniKit as typeof MiniKit & {
  registerComponent?: (componentName: string, options?: { theme?: string }) => void;
};

const InstallESIMPage: React.FC = () => {
  const navigate = useNavigate();
  const [isWorldApp, setIsWorldApp] = useState(false);
  const [activeTab, setActiveTab] = useState("direct");
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 7;

  const handleGoBack = () => {
    navigate('/payment-success');
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
        ExtendedMiniKit.registerComponent('tabs', {
          theme: 'worldcoin',
        });
      } catch (error) {
        console.error("Error registering MiniKit components:", error);
      }
    }
  }, [isWorldApp]);

  const handleInstallNow = () => {
    console.log("Install now - navigating to plan details");
    navigate("/plan-details");
  };

  return (
    <PageLayout 
      showBackButton={true} 
      onBackClick={handleGoBack}
      rightIcon={<Headphones className="w-5 h-5" />}
    >
      <h1 className="text-[40px] font-semibold mb-8">Install eSIM</h1>
      
      <InstallationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <InstallationContent activeTab={activeTab} />
      
      <p className="text-center text-worldcoin-textGray text-lg mb-10">
        Ensure you have a stable internet connection<br />
        before starting the installation process.
      </p>
      
      <StepIndicators currentStep={currentStep} totalSteps={totalSteps} />
      
      <InstallButton isWorldApp={isWorldApp} onClick={handleInstallNow} />
    </PageLayout>
  );
};

export default InstallESIMPage;
