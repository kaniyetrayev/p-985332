
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
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
      
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-lg font-medium mb-1">World Connect Unlimited</h2>
          <p className="text-worldcoin-textGray text-base">{phoneNumber}</p>
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
          <span className="text-worldcoin-textGray text-base">Subtotal</span>
          <span className="text-base font-medium">${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-worldcoin-textGray text-base">Taxes</span>
          <div className="flex items-center">
            <span className="text-base font-medium mr-2">${taxes.toFixed(2)}</span>
            <ChevronDown className="w-4 h-4 text-worldcoin-textGray" />
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-5 mb-32">
        <div className="flex justify-between">
          <span className="text-worldcoin-textGray text-base">Total</span>
          <span className="text-xl font-medium">${total.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 px-6 py-4 bg-white">
        <button 
          className="w-full bg-black text-white py-4 rounded-full text-base font-medium"
          onClick={() => console.log('Continue to payment')}
        >
          Continue to Payment
        </button>
        <p className="text-center text-sm text-worldcoin-textGray mt-4">
          By continuing, you accept WC's <a href="#" className="underline">terms and conditions</a>.
        </p>
      </div>
    </PageLayout>
  );
};

export default CheckoutPage;
