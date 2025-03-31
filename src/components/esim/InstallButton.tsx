
import React from "react";
import { ActionButton } from "../common/ActionButton";

interface InstallButtonProps {
  isWorldApp: boolean;
  onClick: () => void;
}

export const InstallButton: React.FC<InstallButtonProps> = ({ isWorldApp, onClick }) => {
  return (
    <div className="mb-6">
      <ActionButton
        text="Install Now"
        onClick={onClick}
        isWorldApp={isWorldApp}
        variant="primary"
      />
    </div>
  );
};
