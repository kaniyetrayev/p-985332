
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Headphones } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MiniKit } from "@worldcoin/minikit-js";

// Extended MiniKit type
const ExtendedMiniKit = MiniKit as typeof MiniKit & {
  registerComponent?: (componentName: string, options?: { theme?: string }) => void;
};

const InstallESIMPage: React.FC = () => {
  const navigate = useNavigate();
  const [isWorldApp, setIsWorldApp] = useState(false);
  const [activeTab, setActiveTab] = useState("direct");
  const [currentStep, setCurrentStep] = useState(0);

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
    console.log("Install now");
    // Implement install logic here
    // Would typically trigger the actual eSIM installation process
  };

  // Array of step indicators
  const stepIndicators = Array(7).fill(0);

  return (
    <PageLayout 
      showBackButton={true} 
      onBackClick={handleGoBack}
      rightIcon={<Headphones className="w-5 h-5" />}
    >
      <h1 className="text-[40px] font-semibold mb-8">Install eSIM</h1>
      
      {/* Installation method tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid grid-cols-3 bg-worldcoin-lightGray rounded-full p-1 h-14">
          <TabsTrigger
            value="direct"
            className={`rounded-full text-base ${
              activeTab === "direct" ? "bg-black text-white" : "text-black"
            }`}
          >
            Direct
          </TabsTrigger>
          <TabsTrigger
            value="qrcode"
            className={`rounded-full text-base ${
              activeTab === "qrcode" ? "bg-black text-white" : "text-black"
            }`}
          >
            QR Code
          </TabsTrigger>
          <TabsTrigger
            value="manual"
            className={`rounded-full text-base ${
              activeTab === "manual" ? "bg-black text-white" : "text-black"
            }`}
          >
            Manual
          </TabsTrigger>
        </TabsList>
      </Tabs>
      
      {/* Installation area - Placeholder */}
      <div className="bg-worldcoin-lightGray rounded-xl h-[300px] w-full mb-8 flex items-center justify-center">
        {activeTab === "direct" && (
          <div className="text-center p-4">
            <p className="text-worldcoin-textGray">Direct installation content would go here</p>
          </div>
        )}
        {activeTab === "qrcode" && (
          <div className="text-center p-4">
            <p className="text-worldcoin-textGray">QR Code installation content would go here</p>
          </div>
        )}
        {activeTab === "manual" && (
          <div className="text-center p-4">
            <p className="text-worldcoin-textGray">Manual installation content would go here</p>
          </div>
        )}
      </div>
      
      {/* Installation note */}
      <p className="text-center text-worldcoin-textGray text-lg mb-10">
        Ensure you have a stable internet connection<br />
        before starting the installation process.
      </p>
      
      {/* Step indicators */}
      <div className="flex justify-center space-x-2 mb-10">
        {stepIndicators.map((_, index) => (
          <div 
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentStep ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      
      {/* Install button */}
      {isWorldApp ? (
        <button
          onClick={handleInstallNow}
          className="w-full text-center py-4 text-white font-semibold text-lg rounded-full bg-black mb-6"
          id="minikit-primary-button"
        >
          Install Now
        </button>
      ) : (
        <button
          onClick={handleInstallNow}
          className="w-full text-center py-4 text-white font-semibold text-lg rounded-full bg-black mb-6"
        >
          Install Now
        </button>
      )}
    </PageLayout>
  );
};

export default InstallESIMPage;
