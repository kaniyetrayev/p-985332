
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { Check } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { useWindowSize } from "@/hooks/use-window-size";

const PaymentSuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const [confettiActive, setConfettiActive] = useState(true);
  const { width, height } = useWindowSize();

  // Stop confetti after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setConfettiActive(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

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
        
        <p className="text-gray-500 text-center text-lg max-w-md">
          Welcome to World Connect. We've created your eSIM and you're good to go.
        </p>
      </div>
      
      {/* Action buttons */}
      <div className="fixed bottom-0 left-0 w-full px-6 pb-10">
        <Button
          className="w-full py-6 rounded-full text-white text-center text-lg font-medium bg-worldcoin-black hover:bg-black mb-4"
          onClick={() => {
            console.log("Activate now");
            // Navigate to activation page or handle activation logic
          }}
        >
          Activate now
        </Button>
        
        <Button
          variant="ghost"
          className="w-full text-center text-lg font-medium hover:bg-transparent hover:text-black mb-6"
          onClick={() => {
            console.log("Activate later");
            navigate("/");
          }}
        >
          Activate later
        </Button>
        
        {/* Home indicator bar */}
        <div className="flex justify-center w-full">
          <div className="w-[134px] h-[5px] bg-gray-900 rounded-full"></div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PaymentSuccessPage;
