
import React, { ReactNode } from "react";

export interface DetailItemProps {
  label: string;
  value: string;
  actionElement?: ReactNode;
  isWorldApp?: boolean;
}

export const DetailListItem: React.FC<DetailItemProps> = ({ 
  label, 
  value, 
  actionElement,
  isWorldApp = false
}) => {
  return (
    <div className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0">
      <span className={`${isWorldApp ? 'text-worldcoin-textGray' : 'text-gray-500'} text-left w-1/2`}>
        {label}
      </span>
      <div className="flex items-center justify-end w-1/2">
        <span className={`font-medium ${isWorldApp ? 'text-worldcoin-textDark' : ''} text-right`}>
          {value}
        </span>
        {actionElement}
      </div>
    </div>
  );
};
