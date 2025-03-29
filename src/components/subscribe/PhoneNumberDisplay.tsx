
import React from "react";

interface PhoneNumberDisplayProps {
  phoneNumber: string;
  onChooseAnother: () => void;
}

export const PhoneNumberDisplay: React.FC<PhoneNumberDisplayProps> = ({ phoneNumber, onChooseAnother }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm mb-8">
      <p className="text-worldcoin-textGray text-center mb-2">Your new number</p>
      <p className="text-[32px] font-medium text-center mb-6">{phoneNumber}</p>
      
      <button 
        onClick={onChooseAnother}
        className="bg-worldcoin-lightGray text-black rounded-full py-3 px-6 w-full text-center font-medium"
      >
        Choose another
      </button>
    </div>
  );
};
