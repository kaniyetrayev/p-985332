
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { PageLayout } from "@/components/layout/PageLayout";
import { useWindowSize } from "@/hooks/use-window-size";
import { MiniKit } from "@worldcoin/minikit-js";
import { SuccessIcon } from "@/components/payment/SuccessIcon";
import { SuccessMessage } from "@/components/payment/SuccessMessage";
import { ActivationButtons } from "@/components/payment/ActivationButtons";

// Create a type assertion for the extended MiniKit
const ExtendedMiniKit = MiniKit as typeof MiniKit & {
  registerComponent?: (componentName: string, options?: { theme?: string }) => void;
};

const PaymentSuccessPage: React.FC = () => {
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

  // Use MiniKit UI components if available
  useEffect(() => {
    if (isWorldApp && ExtendedMiniKit.registerComponent) {
      try {
        // Register MiniKit components if needed
        ExtendedMiniKit.registerComponent('button', {
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
        <SuccessIcon />
        <SuccessMessage />
      </div>
      
      <ActivationButtons isWorldApp={isWorldApp} />
    </PageLayout>
  );
};

export default PaymentSuccessPage;
