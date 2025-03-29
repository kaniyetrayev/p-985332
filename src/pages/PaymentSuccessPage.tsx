
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { Check } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { useWindowSize } from "@/hooks/use-window-size";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MiniKit } from "@worldcoin/minikit-js";

const PaymentSuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const [confettiActive, setConfettiActive] = useState(true);
  const { width, height } = useWindowSize();
  const [isWorldApp, setIsWorldApp] = useState(false);

  // Check if we're running in World App
  useEffect(() => {
    const checkEnvironment = () => {
      setIsWorldApp(MiniKit.isInstalled());
    };
    
    const timer = setTimeout(checkEnvironment, 500);
    return () => clearTimeout(timer);
  }, []);

  // Stop confetti after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setConfettiActive(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleActivateNow = () => {
    console.log("Activate now");
    // Handle activation logic here
  };

  const handleActivateLater = () => {
    console.log("Activate later");
    navigate("/");
  };

  return (
    <PageLayout hideBackButton={true} title="Payment successful">
      {confettiActive && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.2}
        />
      )}
      
      <div className="flex flex-col items-center justify-center py-10">
        {/* Success circle with check */}
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8">
          <Check className="text-white h-12 w-12" />
        </div>
        
        {/* Success text */}
        <h1 className="text-[32px] font-bold text-center mb-4">
          Payment successful
        </h1>
        
        <p className="text-gray-500 text-center text-lg max-w-md mb-8">
          Welcome to World Connect. We've created your eSIM and you're good to go.
        </p>
      </div>
      
      {/* MiniKit Tab Bar for Activate Now/Later */}
      <div className="fixed bottom-0 left-0 w-full px-6 pb-10">
        <Tabs defaultValue="activate-now" className="w-full">
          <TabsList className={`w-full grid grid-cols-2 rounded-full ${isWorldApp ? 'bg-worldcoin-lightGray' : 'bg-gray-100'}`}>
            <TabsTrigger 
              value="activate-now" 
              className={`rounded-full py-3 text-lg font-medium data-[state=active]:${isWorldApp ? 'bg-worldcoin-blue text-white' : 'bg-black text-white'}`}
              onClick={handleActivateNow}
            >
              Activate now
            </TabsTrigger>
            <TabsTrigger 
              value="activate-later" 
              className="rounded-full py-3 text-lg font-medium data-[state=active]:bg-transparent"
              onClick={handleActivateLater}
            >
              Activate later
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        {/* Home indicator bar */}
        <div className="flex justify-center w-full mt-6">
          <div className="w-[134px] h-[5px] bg-gray-900 rounded-full"></div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PaymentSuccessPage;
