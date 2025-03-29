
import React from "react";
import { Globe, Phone, Video, MoreHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface PlanDetailsSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PlanDetailsSheet: React.FC<PlanDetailsSheetProps> = ({
  isOpen,
  onOpenChange,
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[90vh] rounded-t-xl p-6 pb-10">
        <h2 className="text-4xl font-bold mb-8">Details</h2>
        
        <div className="space-y-10">
          {/* Data section */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <Globe className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Data</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Unlimited 5G data that never gets slow</li>
                <li>Fast service in crowded places</li>
                <li>50GB 5G mobile hotspot</li>
                <li>On AT&T's network</li>
                <li>20GB roaming data in Mexico & Canada</li>
              </ul>
            </div>
          </div>
          
          {/* Calls section */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <Phone className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Calls</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Call the US from any country for free</li>
                <li>Call within any country for free</li>
                <li>Unlimited talk & text to Mexico & Canada</li>
              </ul>
            </div>
          </div>
          
          {/* Entertainment section */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <Video className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Entertainment</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Unlimited HD video streaming</li>
              </ul>
            </div>
          </div>
          
          {/* More section */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <MoreHorizontal className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">More</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Collect x2 World Coin</li>
                <li>Instant eSIM activation</li>
                <li>Keep your number or get a new one</li>
                <li>No contract, cancel anytime</li>
              </ul>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
