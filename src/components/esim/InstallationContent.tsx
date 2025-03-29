
import React from "react";

interface InstallationContentProps {
  activeTab: string;
}

export const InstallationContent: React.FC<InstallationContentProps> = ({ activeTab }) => {
  return (
    <div className="bg-worldcoin-lightGray rounded-xl h-[300px] w-full mb-8 flex items-center justify-center">
      {activeTab === "direct" && (
        <div className="text-center p-4">
          <p className="text-worldcoin-textGray">Direct installation content would go here</p>
        </div>
      )}
      {activeTab === "qrcode" && (
        <div className="text-center p-4">
          <p className="text-worldcoin-textGray">QR Code installation content would go here</p>
        </div>
      )}
      {activeTab === "manual" && (
        <div className="text-center p-4">
          <p className="text-worldcoin-textGray">Manual installation content would go here</p>
        </div>
      )}
    </div>
  );
};
