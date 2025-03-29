
import React, { useEffect, useState } from "react";
import { ArrowUpDown, Pause, Info, MoreHorizontal } from "lucide-react";
import { MiniKit } from "@worldcoin/minikit-js";

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  isWorldApp: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, onClick, isWorldApp }) => {
  return (
    <div className="flex flex-col items-center">
      <button 
        className={`w-12 h-12 rounded-full ${isWorldApp ? 'bg-worldcoin-lightGray' : 'bg-gray-100'} flex items-center justify-center mb-2`}
        onClick={onClick}
        id={isWorldApp ? "minikit-button" : ""}
      >
        {icon}
      </button>
      <span className={`text-sm ${isWorldApp ? 'text-worldcoin-textGray' : ''}`}>{label}</span>
    </div>
  );
};

interface ActionButtonsProps {
  onDetailsClick: () => void;
  isWorldApp: boolean;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onDetailsClick, isWorldApp }) => {
  const handleChange = () => {
    console.log("Change plan clicked");
  };
  
  const handlePause = () => {
    console.log("Pause plan clicked");
  };
  
  const handleMore = () => {
    console.log("More options clicked");
  };
  
  const buttons = [
    { icon: <ArrowUpDown className="w-5 h-5" />, label: "Change", onClick: handleChange },
    { icon: <Pause className="w-5 h-5" />, label: "Pause", onClick: handlePause },
    { icon: <Info className="w-5 h-5" />, label: "Details", onClick: onDetailsClick },
    { icon: <MoreHorizontal className="w-5 h-5" />, label: "More", onClick: handleMore }
  ];
  
  return (
    <div className="grid grid-cols-4 gap-4 w-full mb-8">
      {buttons.map((button, index) => (
        <ActionButton 
          key={index} 
          icon={button.icon} 
          label={button.label} 
          onClick={button.onClick}
          isWorldApp={isWorldApp}
        />
      ))}
    </div>
  );
};
