
import React from "react";

interface AddLineButtonProps {
  onClick: () => void;
  isWorldApp: boolean;
}

export const AddLineButton: React.FC<AddLineButtonProps> = ({ onClick, isWorldApp }) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-center py-4 text-white font-semibold text-lg rounded-full bg-black mb-6"
      id={isWorldApp ? "minikit-primary-button" : ""}
    >
      Add line
    </button>
  );
};
