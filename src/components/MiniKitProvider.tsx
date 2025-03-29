
'use client';

import { ReactNode, useEffect } from 'react';
import { MiniKit } from '@worldcoin/minikit-js';

export default function MiniKitProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize MiniKit when the component mounts
    try {
      MiniKit.install();
      console.log("MiniKit installed:", MiniKit.isInstalled());
    } catch (error) {
      console.error("Error installing MiniKit:", error);
    }
  }, []);

  return <>{children}</>;
}
