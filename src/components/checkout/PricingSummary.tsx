
import React from "react";
import { ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface TaxItem {
  name: string;
  amount: number;
}

interface PricingSummaryProps {
  subtotal: number;
  taxes: number;
  total: number;
  taxDetails: TaxItem[];
}

export const PricingSummary: React.FC<PricingSummaryProps> = ({ 
  subtotal, 
  taxes, 
  total, 
  taxDetails 
}) => {
  return (
    <>
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
          <SheetContent side="bottom" className="px-6 pb-6 pt-10 rounded-t-[20px]">
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
    </>
  );
};
