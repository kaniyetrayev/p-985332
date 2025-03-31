
import React from "react";
import { CardContainer } from "../common/CardContainer";

interface InstallationContentProps {
  activeTab: string;
}

export const InstallationContent: React.FC<InstallationContentProps> = ({ activeTab }) => {
  const getContent = () => {
    switch (activeTab) {
      case "direct":
        return <p className="text-worldcoin-textGray">Direct installation content would go here</p>;
      case "qrcode":
        return <p className="text-worldcoin-textGray">QR Code installation content would go here</p>;
      case "manual":
        return <p className="text-worldcoin-textGray">Manual installation content would go here</p>;
      default:
        return null;
    }
  };

  return (
    <CardContainer className="bg-worldcoin-lightGray h-[300px] w-full mb-8 flex items-center justify-center">
      <div className="text-center p-4">
        {getContent()}
      </div>
    </CardContainer>
  );
};
