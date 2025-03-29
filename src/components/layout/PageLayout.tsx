
import React, { ReactNode, useEffect, useState } from "react";
import { MiniKit } from "@worldcoin/minikit-js";
import { MarketingFooter } from "../marketing/MarketingFooter";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  showBackButton?: boolean;
  hideBackButton?: boolean;
  hideTitle?: boolean;
  onBackClick?: () => void;
  rightIcon?: ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  showBackButton = false,
  hideBackButton = false,
  hideTitle = false,
  onBackClick,
  rightIcon,
}) => {
  const [isWorldApp, setIsWorldApp] = useState(false);

  useEffect(() => {
    const checkEnvironment = () => {
      setIsWorldApp(MiniKit.isInstalled());
    };
    
    const timer = setTimeout(checkEnvironment, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${isWorldApp ? 'bg-worldcoin-gray' : 'bg-white'} min-h-screen w-full flex flex-col`}>
      {/* Header */}
      {!hideBackButton && (showBackButton || title || rightIcon) && (
        <div className="px-6 pt-6 pb-4 flex items-center justify-between">
          {showBackButton ? (
            <button 
              onClick={onBackClick}
              className="w-10 h-10 rounded-full bg-worldcoin-lightGray flex items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ) : <div className="w-10" />}
          
          {title && <h1 className="text-xl font-semibold absolute left-1/2 transform -translate-x-1/2">{title}</h1>}
          
          {rightIcon ? (
            <div className="w-10 h-10 rounded-full bg-worldcoin-lightGray flex items-center justify-center">
              {rightIcon}
            </div>
          ) : <div className="w-10" />}
        </div>
      )}

      {/* Title shown only on hideBackButton pages like payment success, unless hideTitle is true */}
      {hideBackButton && title && !hideTitle && (
        <div className="pt-8 text-center">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 px-6">
        {children}
      </div>

      {/* Footer - Only show on non-success pages that don't have hideBackButton */}
      {!hideBackButton && <MarketingFooter />}
    </div>
  );
};
