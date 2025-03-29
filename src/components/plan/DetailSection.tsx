
import React, { useEffect, useState } from "react";
import { MiniKit } from "@worldcoin/minikit-js";

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
  isWorldApp?: boolean;
}

export const DetailSection: React.FC<DetailSectionProps> = ({ 
  title, 
  items, 
  actionButtonText = "Manage", 
  onActionClick,
  isWorldApp = false
}) => {
  const handleAction = () => {
    if (onActionClick) {
      onActionClick();
    }
  };

  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-3">
        <h3 className={`text-xl font-bold ${isWorldApp ? 'text-worldcoin-textDark' : ''}`}>{title}</h3>
        {actionButtonText && (
          <button 
            className={`${isWorldApp ? 'bg-worldcoin-lightGray' : 'bg-gray-100'} px-4 py-1.5 rounded-full text-sm font-medium`}
            onClick={handleAction}
            id={isWorldApp ? "minikit-button" : ""}
          >
            {actionButtonText}
          </button>
        )}
      </div>
      <div 
        className={`${isWorldApp ? 'bg-white' : 'bg-white'} rounded-lg p-3 shadow-sm`}
        id={isWorldApp ? "minikit-card" : ""}
      >
        {items.map((item, index) => (
          <div key={index} className="flex justify-between py-1 border-b border-gray-100 last:border-0">
            <span className={`${isWorldApp ? 'text-worldcoin-textGray' : 'text-gray-500'}`}>{item.label}</span>
            <div className="flex items-center">
              <span className={`font-medium ${isWorldApp ? 'text-worldcoin-textDark' : ''}`}>{item.value}</span>
              {item.actionButton}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
