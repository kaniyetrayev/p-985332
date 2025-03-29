
import React from "react";

interface CopyButtonProps {
  value: string;
  onCopy: (value: string) => void;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ value, onCopy }) => {
  return (
    <button onClick={() => onCopy(value)} className="ml-2">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H16C17.1046 21 18 20.1046 18 19V17M8 5C8 6.10457 8.89543 7 10 7H14C15.1046 7 16 6.10457 16 5M8 5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5M16 5V9C16 10.1046 16.8954 11 18 11H20C21.1046 11 22 11.8954 22 13V19C22 20.1046 21.1046 21 20 21H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};
