
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface InstallationTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export const InstallationTabs: React.FC<InstallationTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
      <TabsList className="grid grid-cols-3 bg-worldcoin-lightGray rounded-full p-1 h-14">
        <TabsTrigger
          value="direct"
          className={`rounded-full text-base ${
            activeTab === "direct" ? "bg-black text-white" : "text-black"
          }`}
        >
          Direct
        </TabsTrigger>
        <TabsTrigger
          value="qrcode"
          className={`rounded-full text-base ${
            activeTab === "qrcode" ? "bg-black text-white" : "text-black"
          }`}
        >
          QR Code
        </TabsTrigger>
        <TabsTrigger
          value="manual"
          className={`rounded-full text-base ${
            activeTab === "manual" ? "bg-black text-white" : "text-black"
          }`}
        >
          Manual
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
