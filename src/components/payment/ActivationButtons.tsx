
import React from "react";
import { useNavigate } from "react-router-dom";

interface ActivationButtonsProps {
  isWorldApp: boolean;
}

export const ActivationButtons: React.FC<ActivationButtonsProps> = ({ isWorldApp }) => {
  const navigate = useNavigate();

  const handleActivateNow = () => {
    console.log("Activate now");
    navigate("/install-esim");
  };

  const handleActivateLater = () => {
    console.log("Activate later");
    navigate("/plan-details");
  };

  return (
    <div className="fixed bottom-0 left-0 w-full px-6 pb-10">
      {isWorldApp ? (
        <>
          <button
            onClick={handleActivateNow}
            className="w-full text-base py-6 h-auto rounded-full mb-4 bg-worldcoin-blue text-white font-semibold"
            id="minikit-primary-button"
          >
            Activate now
          </button>
          
          <button
            onClick={handleActivateLater}
            className="w-full py-3 mb-6 text-base h-auto text-worldcoin-blue font-medium"
            id="minikit-secondary-button"
          >
            Activate later
          </button>
        </>
      ) : (
        <>
          <button
            onClick={handleActivateNow}
            className="w-full text-base py-6 h-auto rounded-full mb-4 bg-black hover:bg-black/90 text-white font-semibold"
          >
            Activate now
          </button>
          
          <button
            onClick={handleActivateLater}
            className="w-full py-3 mb-6 text-base h-auto font-medium"
          >
            Activate later
          </button>
        </>
      )}
    </div>
  );
};
