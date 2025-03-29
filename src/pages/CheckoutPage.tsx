
import React from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { PlanSummary } from "@/components/checkout/PlanSummary";
import { PricingSummary } from "@/components/checkout/PricingSummary";

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
      
      <PlanSummary phoneNumber={phoneNumber} />
      
      <PricingSummary 
        subtotal={subtotal} 
        taxes={taxes} 
        total={total} 
        taxDetails={taxDetails} 
      />
    </PageLayout>
  );
};

export default CheckoutPage;
