
import React from "react";
import { Copy } from "lucide-react";

export interface DetailItem {
  label: string;
  value: string;
}

interface DetailsSectionProps {
  title: string;
  details: DetailItem[];
  onCopy?: (value: string) => void;
  actionLabel?: string;
  onAction?: () => void;
}

export const DetailsSection: React.FC<DetailsSectionProps> = ({ 
  title, 
  details, 
  onCopy, 
  actionLabel = "Manage",
  onAction 
}) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        {onAction && (
          <button 
            onClick={onAction}
            className="bg-worldcoin-lightGray text-black px-5 py-2 rounded-full text-sm font-medium"
          >
            {actionLabel}
          </button>
        )}
      </div>
      
      <div className="bg-white rounded-xl p-5 shadow-sm">
        {details.map((detail, index) => (
          <div 
            key={index} 
            className={`flex justify-between items-center py-1.5 ${
              index !== details.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            <span className="text-worldcoin-textGray">{detail.label}</span>
            <div className="flex items-center">
              <span className="font-medium">{detail.value}</span>
              {detail.label === "Phone number" && onCopy && (
                <button 
                  onClick={() => onCopy(detail.value)} 
                  className="ml-2 text-gray-500"
                >
                  <Copy className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
