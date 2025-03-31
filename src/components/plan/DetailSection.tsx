
import React from "react";
import { DetailListItem, DetailItemProps } from "../common/DetailListItem";

interface DetailSectionProps {
  title: string;
  items: Omit<DetailItemProps, 'isWorldApp'>[];
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
          <DetailListItem
            key={index}
            label={item.label}
            value={item.value}
            actionElement={item.actionElement}
            isWorldApp={isWorldApp}
          />
        ))}
      </div>
    </div>
  );
};
