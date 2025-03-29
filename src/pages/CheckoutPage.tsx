
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
      <h1 className="text-[40px] font-semibold mb-8">Checkout</h1>
      
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-[15px] font-semibold mb-1">World Connect Unlimited</h2>
          <p className="text-worldcoin-textGray text-[15px]">{phoneNumber}</p>
        </div>
        <div className="bg-worldcoin-lightGray p-3 rounded-lg">
          <div className="flex flex-col items-end">
            <span className="text-xs text-worldcoin-textGray mb-1">ACME</span>
            <span className="text-base font-medium">Unlimited</span>
          </div>
          <div className="flex justify-end mt-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="5" width="20" height="14" rx="2" stroke="black" strokeWidth="1.5"/>
              <path d="M2 10H22" stroke="black" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-5 pb-2">
        <div className="flex justify-between mb-4">
          <span className="text-worldcoin-textGray text-[15px] font-normal">Subtotal</span>
          <span className="text-[15px] font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-worldcoin-textGray text-[15px] font-normal">Taxes</span>
          <div className="flex items-center">
            <span className="text-[15px] font-semibold mr-2">${taxes.toFixed(2)}</span>
            <ChevronDown className="w-4 h-4 text-worldcoin-textGray" />
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-5 mb-6">
        <div className="flex justify-between">
          <span className="text-worldcoin-textGray text-[15px] font-normal">Total</span>
          <span className="text-[20px] font-semibold">${total.toFixed(2)}</span>
        </div>
      </div>
    </PageLayout>
  );
};

export default CheckoutPage;
