
'use client';

import { ReactNode, useEffect } from 'react';
import { MiniKit } from '@worldcoin/minikit-js';

// Extend the MiniKit interface with the missing methods
interface ExtendedMiniKit {
  install: () => void;
  isInstalled: () => boolean;
  // Add any other methods that might be used but not in type definitions
}

// Create a type assertion for the extended MiniKit
const ExtendedMiniKit = MiniKit as typeof MiniKit & {
  registerComponent?: (componentName: string, options?: { theme?: string }) => void;
};

export default function MiniKitProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize MiniKit when the component mounts
    try {
      MiniKit.install();
      
      // Register MiniKit components if installed
      if (MiniKit.isInstalled() && ExtendedMiniKit.registerComponent) {
        // Register standard UI components with WorldCoin theme
        ExtendedMiniKit.registerComponent('button', { theme: 'worldcoin' });
        ExtendedMiniKit.registerComponent('container', { theme: 'worldcoin' });
        ExtendedMiniKit.registerComponent('card', { theme: 'worldcoin' });
        ExtendedMiniKit.registerComponent('input', { theme: 'worldcoin' });
        
        console.log("MiniKit installed and components registered successfully");
      } else {
        console.log("MiniKit not installed or registerComponent not available");
      }
    } catch (error) {
      console.error("Error installing MiniKit:", error);
    }
  }, []);

  return <>{children}</>;
}
