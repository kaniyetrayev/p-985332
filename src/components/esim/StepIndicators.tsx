
import React from "react";

interface StepIndicatorsProps {
  currentStep: number;
  totalSteps: number;
}

export const StepIndicators: React.FC<StepIndicatorsProps> = ({ currentStep, totalSteps }) => {
  const stepIndicators = Array(totalSteps).fill(0);
  
  return (
    <div className="flex justify-center space-x-2 mb-10">
      {stepIndicators.map((_, index) => (
        <div 
          key={index}
          className={`h-2 w-2 rounded-full ${
            index === currentStep ? "bg-black" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};
