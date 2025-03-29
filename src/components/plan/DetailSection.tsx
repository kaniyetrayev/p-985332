
import React from "react";

export interface DetailItem {
  label: string;
  value: string;
  actionButton?: React.ReactNode;
}

interface DetailSectionProps {
  title: string;
  items: DetailItem[];
  actionButtonText?: string;
  onActionClick?: () => void;
}

export const DetailSection: React.FC<DetailSectionProps> = ({ 
  title, 
  items, 
  actionButtonText = "Manage", 
  onActionClick 
}) => {
  const handleAction = () => {
    if (onActionClick) {
      onActionClick();
    }
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        {actionButtonText && (
          <button 
            className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium"
            onClick={handleAction}
          >
            {actionButtonText}
          </button>
        )}
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
            <span className="text-gray-500">{item.label}</span>
            <div className="flex items-center">
              <span className="font-medium">{item.value}</span>
              {item.actionButton}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
