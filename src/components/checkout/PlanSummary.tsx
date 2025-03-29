
import React from "react";

interface PlanSummaryProps {
  phoneNumber: string;
}

export const PlanSummary: React.FC<PlanSummaryProps> = ({ phoneNumber }) => {
  return (
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
  );
};
