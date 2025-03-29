
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Info, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";

const SubscribePage: React.FC = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("+1 (940) 310-2432");

  const handleGoBack = () => {
    navigate('/');
  };

  const handleChooseAnother = () => {
    // In a real app, this would open a phone number selection UI
    console.log("Choose another number");
  };

  const handleContinue = () => {
    navigate('/checkout');
  };

  return (
    <PageLayout 
      showBackButton={true} 
      onBackClick={handleGoBack}
      rightIcon={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.2601 6.7998C17.4701 6.7998 17.6401 6.6298 17.6401 6.4198C17.6401 6.2098 17.4701 6.0398 17.2601 6.0398C17.0501 6.0398 16.8801 6.2098 16.8801 6.4198C16.8801 6.6298 17.0401 6.7998 17.2601 6.7998Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 16.5V19.5H6" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 7.5V4.5H6" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 16.5V19.5H18" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 7.5V4.5H18" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      }
    >
      <h1 className="text-4xl font-semibold mb-16">Phone number</h1>
      
      <div className="bg-white rounded-3xl p-6 shadow-sm mb-8">
        <p className="text-worldcoin-textGray text-center mb-2">Your new number</p>
        <p className="text-[32px] font-medium text-center mb-6">{phoneNumber}</p>
        
        <button 
          onClick={handleChooseAnother}
          className="bg-worldcoin-lightGray text-black rounded-full py-3 px-6 w-full text-center font-medium"
        >
          Choose another
        </button>
      </div>
      
      <div className="flex items-center p-4 bg-worldcoin-gray rounded-2xl">
        <div className="w-8 h-8 rounded-full bg-worldcoin-lightGray flex items-center justify-center mr-4">
          <Info className="w-5 h-5 text-worldcoin-textGray" />
        </div>
        <div className="flex-1">
          <p className="text-worldcoin-textDark font-medium">Ensure your device is carrier unlocked</p>
        </div>
        <ChevronRight className="w-5 h-5 text-worldcoin-textGray" />
      </div>
    </PageLayout>
  );
};

export default SubscribePage;
