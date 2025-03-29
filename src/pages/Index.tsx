
import { MarketingApp } from "@/components/marketing/MarketingApp";
import { useEffect, useState } from "react";
import { MiniKit } from "@worldcoin/minikit-js";

const Index = () => {
  const [isWorldApp, setIsWorldApp] = useState(false);

  useEffect(() => {
    const checkEnvironment = () => {
      setIsWorldApp(MiniKit.isInstalled());
    };
    
    const timer = setTimeout(checkEnvironment, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`${isWorldApp ? 'bg-worldcoin-gray' : 'bg-white'} min-h-screen flex flex-col`}>
      <MarketingApp />
    </main>
  );
};

export default Index;
