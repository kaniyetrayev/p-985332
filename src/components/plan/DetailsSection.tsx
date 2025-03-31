
import React from "react";
import { Copy } from "lucide-react";
import { DetailListItem, DetailItemProps } from "../common/DetailListItem";

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
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-2xl font-bold">{title}</h3>
        {onAction && (
          <button 
            onClick={onAction}
            className="bg-worldcoin-lightGray text-black px-5 py-1.5 rounded-full text-sm font-medium"
          >
            {actionLabel}
          </button>
        )}
      </div>
      
      <div className="bg-white rounded-xl p-4 shadow-sm">
        {details.map((detail, index) => {
          const copyButton = detail.label === "Phone number" && onCopy ? (
            <button 
              onClick={() => onCopy(detail.value)} 
              className="ml-2 text-gray-500"
            >
              <Copy className="w-4 h-4" />
            </button>
          ) : undefined;

          return (
            <DetailListItem
              key={index}
              label={detail.label}
              value={detail.value}
              actionElement={copyButton}
            />
          );
        })}
      </div>
    </div>
  );
};
