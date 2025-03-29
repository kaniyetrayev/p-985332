
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
        <img 
          src="/lovable-uploads/cb8be779-b5ef-404f-bf8c-259856d74ea0.png" 
          alt="ACME Unlimited Card" 
          className="h-20 rounded-lg"
        />
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
