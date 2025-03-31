
import React from "react";

interface ActionButtonProps {
  text: string;
  onClick: () => void;
  isWorldApp?: boolean;
  variant?: "primary" | "secondary";
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  onClick,
  isWorldApp = false,
  variant = "secondary"
}) => {
  const getButtonClasses = () => {
    if (variant === "primary") {
      return `w-full py-4 rounded-[100px] text-white text-center text-base font-semibold ${
        isWorldApp ? "bg-worldcoin-blue" : "bg-worldcoin-black"
      }`;
    }
    
    return `${isWorldApp ? 'bg-worldcoin-lightGray' : 'bg-gray-100'} px-4 py-1.5 rounded-full text-sm font-medium`;
  };

  return (
    <button 
      onClick={onClick}
      className={getButtonClasses()}
      id={isWorldApp ? (variant === "primary" ? "minikit-primary-button" : "minikit-button") : ""}
    >
      {text}
    </button>
  );
};
