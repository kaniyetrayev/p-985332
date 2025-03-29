
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { Check } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { useWindowSize } from "@/hooks/use-window-size";
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

  // Use MiniKit UI components if available
  useEffect(() => {
    if (isWorldApp) {
      try {
        // Register MiniKit components if needed
        MiniKit.registerComponent('button', {
          theme: 'worldcoin',
        });
      } catch (error) {
        console.error("Error registering MiniKit components:", error);
      }
    }
  }, [isWorldApp]);

  return (
    <PageLayout hideBackButton={true} hideTitle={true}>
      {confettiActive && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.2}
        />
      )}
      
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
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
      
      {/* Activate buttons fixed at bottom */}
      <div className="fixed bottom-0 left-0 w-full px-6 pb-10">
        {isWorldApp ? (
          // Using MiniKit buttons when in World App
          <>
            <button
              onClick={handleActivateNow}
              className="w-full text-base py-6 h-auto rounded-full mb-4 bg-worldcoin-blue text-white font-semibold"
              id="minikit-primary-button"
            >
              Activate now
            </button>
            
            <button
              onClick={handleActivateLater}
              className="w-full py-3 mb-6 text-base h-auto text-worldcoin-blue font-medium"
              id="minikit-secondary-button"
            >
              Activate later
            </button>
          </>
        ) : (
          // Regular buttons when not in World App
          <>
            <button
              onClick={handleActivateNow}
              className="w-full text-base py-6 h-auto rounded-full mb-4 bg-black hover:bg-black/90 text-white font-semibold"
            >
              Activate now
            </button>
            
            <button
              onClick={handleActivateLater}
              className="w-full py-3 mb-6 text-base h-auto font-medium"
            >
              Activate later
            </button>
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default PaymentSuccessPage;
