
import React from "react";
import { ArrowUpDown, Pause, Info, MoreHorizontal } from "lucide-react";

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, onClick }) => {
  return (
    <div className="flex flex-col items-center">
      <button 
        className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2"
        onClick={onClick}
      >
        {icon}
      </button>
      <span className="text-sm">{label}</span>
    </div>
  );
};

interface ActionButtonsProps {
  onDetailsClick: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onDetailsClick }) => {
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
        />
      ))}
    </div>
  );
};
