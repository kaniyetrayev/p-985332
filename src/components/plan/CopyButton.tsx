
import React, { useState, useEffect } from "react";
import { MiniKit } from "@worldcoin/minikit-js";
import { Copy } from "lucide-react";

interface CopyButtonProps {
  value: string;
  onCopy: (value: string) => void;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ value, onCopy }) => {
  const [isWorldApp, setIsWorldApp] = useState(false);

  useEffect(() => {
    const checkEnvironment = () => {
      try {
        setIsWorldApp(MiniKit.isInstalled());
      } catch (error) {
        console.error("Error checking MiniKit:", error);
      }
    };
    
    checkEnvironment();
  }, []);

  return (
    <button 
      onClick={() => onCopy(value)} 
      className={`ml-2 ${isWorldApp ? 'text-worldcoin-blue' : ''}`}
      id={isWorldApp ? "minikit-button" : ""}
    >
      <Copy size={16} />
    </button>
  );
};
