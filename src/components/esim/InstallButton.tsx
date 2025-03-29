
import React from "react";

interface InstallButtonProps {
  isWorldApp: boolean;
  onClick: () => void;
}

export const InstallButton: React.FC<InstallButtonProps> = ({ isWorldApp, onClick }) => {
  return (
    <>
      {isWorldApp ? (
        <button
          onClick={onClick}
          className="w-full text-center py-4 text-white font-semibold text-lg rounded-full bg-black mb-6"
          id="minikit-primary-button"
        >
          Install Now
        </button>
      ) : (
        <button
          onClick={onClick}
          className="w-full text-center py-4 text-white font-semibold text-lg rounded-full bg-black mb-6"
        >
          Install Now
        </button>
      )}
    </>
  );
};
