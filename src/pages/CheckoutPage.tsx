
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface TaxItem {
  name: string;
  amount: number;
}

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const phoneNumber = "+1 (940) 310-2432";
  const subtotal = 35.00;
  const taxes = 2.40;
  const total = subtotal + taxes;

  const taxDetails: TaxItem[] = [
    { name: "State Taxes", amount: 0.20 },
    { name: "County Sales Tax", amount: 0.30 },
    { name: "New York MTA Surcharge", amount: 0.10 },
    { name: "State Excise Tax", amount: 0.50 },
    { name: "Local Gross Receipts Tax", amount: 0.25 },
    { name: "Federal Universal Service Fund", amount: 0.05 },
  ];

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
          src="/lovable-uploads/cf4e8c2f-dc2c-4583-8ac2-08c8758ae4b6.png" 
          alt="ACME Unlimited Card" 
          className="h-20 rounded-lg"
        />
      </div>
      
      <div className="border-t border-gray-200 pt-5 pb-2">
        <div className="flex justify-between mb-4">
          <span className="text-worldcoin-textGray text-[15px] font-normal">Subtotal</span>
          <span className="text-[15px] font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex justify-between items-center mb-4 cursor-pointer">
              <span className="text-worldcoin-textGray text-[15px] font-normal">Taxes</span>
              <div className="flex items-center">
                <span className="text-[15px] font-semibold mr-2">${taxes.toFixed(2)}</span>
                <ChevronDown className="w-4 h-4 text-worldcoin-textGray" />
              </div>
            </div>
          </SheetTrigger>
          <SheetContent side="bottom" className="px-6 py-6 rounded-t-[20px]">
            <SheetHeader className="text-left mb-6">
              <SheetTitle className="text-[32px] font-semibold">Taxes</SheetTitle>
            </SheetHeader>
            <div className="space-y-4">
              {taxDetails.map((tax, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-worldcoin-textGray text-[15px]">{tax.name}</span>
                  <span className="text-[15px] font-semibold">${tax.amount.toFixed(2)}</span>
                </div>
              ))}
              <div className="pt-6 mt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-worldcoin-textGray text-[15px] font-medium">Total taxes</span>
                  <span className="text-[20px] font-semibold">${taxes.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
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
