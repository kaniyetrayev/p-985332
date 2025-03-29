
import React from "react";
import { ArrowUp, Pause, Info, MoreHorizontal } from "lucide-react";

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-worldcoin-lightGray flex items-center justify-center mb-2">
        {icon}
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
};

export const ActionButtons: React.FC = () => {
  const buttons = [
    { icon: <ArrowUp className="w-5 h-5" />, label: "Change" },
    { icon: <Pause className="w-5 h-5" />, label: "Pause" },
    { icon: <Info className="w-5 h-5" />, label: "Details" },
    { icon: <MoreHorizontal className="w-5 h-5" />, label: "More" }
  ];
  
  return (
    <div className="grid grid-cols-4 gap-4 w-full mb-8">
      {buttons.map((button, index) => (
        <ActionButton 
          key={index} 
          icon={button.icon} 
          label={button.label} 
        />
      ))}
    </div>
  );
};
