
import React, { useEffect, useState } from "react";
import { MiniKit } from '@worldcoin/minikit-js';

export const MarketingHeader: React.FC = () => {
  const [isInstalledInWorldApp, setIsInstalledInWorldApp] = useState(false);

  useEffect(() => {
    // Check if the app is running inside World App
    const checkMiniKit = () => {
      const installed = MiniKit.isInstalled();
      setIsInstalledInWorldApp(installed);
      console.log("MiniKit installed status:", installed);
    };
    
    // Check after a slight delay to ensure MiniKit has time to initialize
    const timer = setTimeout(checkMiniKit, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="w-full">
      <div className="bg-white w-full overflow-hidden pb-11">
        <div className="bg-black">
          <div className="bg-white flex shrink-0 h-6 rounded-[0px_0px_0px_0px]" />
        </div>
        {isInstalledInWorldApp && (
          <div className="text-center text-green-500 font-medium py-2">
            Running inside World App
          </div>
        )}
      </div>
    </header>
  );
};
