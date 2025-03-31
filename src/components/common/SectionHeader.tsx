
import React from "react";
import { ActionButton } from "./ActionButton";

interface SectionHeaderProps {
  title: string;
  actionText?: string;
  onAction?: () => void;
  isWorldApp?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  actionText,
  onAction,
  isWorldApp = false
}) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <h3 className={`text-xl font-bold ${isWorldApp ? 'text-worldcoin-textDark' : ''}`}>
        {title}
      </h3>
      {actionText && onAction && (
        <ActionButton
          text={actionText}
          onClick={onAction}
          isWorldApp={isWorldApp}
        />
      )}
    </div>
  );
};
