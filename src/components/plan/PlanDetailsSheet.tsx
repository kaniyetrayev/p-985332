
import React from "react";
import { Globe, Phone, Video, MoreHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";

interface FeatureGroupProps {
  icon: React.ReactNode;
  title: string;
  features: string[];
  isWorldApp: boolean;
}

const FeatureGroup: React.FC<FeatureGroupProps> = ({ icon, title, features, isWorldApp }) => {
  return (
    <div className="flex gap-4 mb-5">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h3 className={`text-xl font-bold mb-1 ${isWorldApp ? 'text-worldcoin-textDark' : ''}`}>{title}</h3>
        <ul className="space-y-0">
          {features.map((feature, index) => (
            <li key={index} className={`${isWorldApp ? 'text-worldcoin-textGray' : 'text-gray-600'} leading-tight py-0.5`}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface PlanDetailsSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  isWorldApp: boolean;
}

export const PlanDetailsSheet: React.FC<PlanDetailsSheetProps> = ({
  isOpen,
  onOpenChange,
  isWorldApp
}) => {
  const featureGroups = [
    {
      icon: <Globe className={`w-7 h-7 ${isWorldApp ? 'text-worldcoin-blue' : ''}`} />,
      title: "Data",
      features: [
        "Unlimited 5G data that never gets slow",
        "Fast service in crowded places",
        "50GB 5G mobile hotspot",
        "On AT&T's network",
        "20GB roaming data in Mexico & Canada",
      ]
    },
    {
      icon: <Phone className={`w-7 h-7 ${isWorldApp ? 'text-worldcoin-blue' : ''}`} />,
      title: "Calls",
      features: [
        "Call the US from any country for free",
        "Call within any country for free",
        "Unlimited talk & text to Mexico & Canada",
      ]
    },
    {
      icon: <Video className={`w-7 h-7 ${isWorldApp ? 'text-worldcoin-blue' : ''}`} />,
      title: "Entertainment",
      features: [
        "Unlimited HD video streaming",
      ]
    },
    {
      icon: <MoreHorizontal className={`w-7 h-7 ${isWorldApp ? 'text-worldcoin-blue' : ''}`} />,
      title: "More",
      features: [
        "Collect x2 World Coin",
        "Instant eSIM activation",
        "Keep your number or get a new one",
        "No contract, cancel anytime",
      ]
    }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent 
        side="bottom" 
        className={`h-[90vh] rounded-t-[20px] p-6 pb-10 ${isWorldApp ? 'bg-worldcoin-gray' : 'bg-white'}`}
        id={isWorldApp ? "minikit-sheet" : ""}
      >
        <h2 className={`text-4xl font-bold mb-4 ${isWorldApp ? 'text-worldcoin-textDark' : ''}`}>Details</h2>
        
        <div className="space-y-5">
          {featureGroups.map((group, index) => (
            <FeatureGroup
              key={index}
              icon={group.icon}
              title={group.title}
              features={group.features}
              isWorldApp={isWorldApp}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
