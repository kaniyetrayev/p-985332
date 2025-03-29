
import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const phoneNumber = "+1 (940) 310-2432";
  const subtotal = 35.00;
  const taxes = 2.40;
  const total = subtotal + taxes;

  const handleGoBack = () => {
    navigate('/subscribe');
  };

  return (
    <PageLayout
      showBackButton={true}
      onBackClick={handleGoBack}
    >
      <h1 className="text-5xl font-bold mb-8">Checkout</h1>
      
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">World Connect Unlimited</h2>
          <p className="text-worldcoin-textGray">{phoneNumber}</p>
        </div>
        <div className="bg-worldcoin-gray p-3 rounded-lg">
          <div className="flex flex-col items-end">
            <span className="text-xs text-worldcoin-textGray mb-1">ACME</span>
            <span className="text-lg font-semibold">Unlimited</span>
          </div>
          <div className="flex justify-end mt-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="5" width="20" height="14" rx="2" stroke="black" strokeWidth="1.5"/>
              <path d="M2 10H22" stroke="black" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6 mb-4">
        <div className="flex justify-between mb-4">
          <span className="text-worldcoin-textGray text-lg">Subtotal</span>
          <span className="text-xl font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-worldcoin-textGray text-lg">Taxes</span>
          <div className="flex items-center">
            <span className="text-xl font-semibold mr-2">${taxes.toFixed(2)}</span>
            <ChevronDown className="w-5 h-5 text-worldcoin-textGray" />
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6 mb-4">
        <div className="flex justify-between">
          <span className="text-worldcoin-textGray text-lg">Total</span>
          <span className="text-2xl font-bold">${total.toFixed(2)}</span>
        </div>
      </div>
    </PageLayout>
  );
};

export default CheckoutPage;
