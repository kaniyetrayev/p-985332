
import React, { ReactNode } from "react";

interface CardContainerProps {
  children: ReactNode;
  isWorldApp?: boolean;
  className?: string;
}

export const CardContainer: React.FC<CardContainerProps> = ({
  children,
  isWorldApp = false,
  className = ""
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-sm p-3 ${className}`}
      id={isWorldApp ? "minikit-card" : ""}
    >
      {children}
    </div>
  );
};
