
'use client';

import { ReactNode, useEffect } from 'react';
import { MiniKit } from '@worldcoin/minikit-js';

export default function MiniKitProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize MiniKit when the component mounts
    try {
      MiniKit.install();
      
      // Register MiniKit components if installed
      if (MiniKit.isInstalled()) {
        // Register standard UI components with WorldCoin theme
        MiniKit.registerComponent('button', { theme: 'worldcoin' });
        MiniKit.registerComponent('container', { theme: 'worldcoin' });
        MiniKit.registerComponent('card', { theme: 'worldcoin' });
        MiniKit.registerComponent('input', { theme: 'worldcoin' });
        
        console.log("MiniKit installed and components registered successfully");
      } else {
        console.log("MiniKit not installed or not available");
      }
    } catch (error) {
      console.error("Error installing MiniKit:", error);
    }
  }, []);

  return <>{children}</>;
}
