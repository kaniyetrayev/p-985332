
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

interface DataUsageProps {
  usedData: number; // in GB
  totalData: number; // in GB
  resetDate: string;
}

export const DataUsageSection: React.FC<DataUsageProps> = ({
  usedData,
  totalData,
  resetDate,
}) => {
  // Calculate percentage
  const usagePercentage = Math.min((usedData / totalData) * 100, 100);
  const dataRemaining = Math.max(totalData - usedData, 0);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold">Data Usage</h3>
        <button className="bg-worldcoin-lightGray text-black px-5 py-2 rounded-full text-sm font-medium">
          Add Data
        </button>
      </div>

      <Card className="bg-white rounded-xl shadow-sm">
        <CardContent className="p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-worldcoin-textGray">Used</span>
            <div className="flex items-center">
              <span className="font-medium">
                {usedData.toFixed(1)} GB / {totalData} GB
              </span>
            </div>
          </div>

          <Progress 
            value={usagePercentage} 
            className="h-3 mb-2" 
          />

          <div className="flex justify-between text-sm text-worldcoin-textGray mb-4">
            <span>{usagePercentage.toFixed(0)}% used</span>
            <span>{dataRemaining.toFixed(1)} GB left</span>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <span className="text-worldcoin-textGray">Resets on</span>
            <span className="font-medium">{resetDate}</span>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-worldcoin-textGray flex items-center gap-1">
                <BarChart3 className="w-4 h-4" />
                Daily average
              </span>
              <span className="font-medium text-sm">0.2 GB/day</span>
            </div>
            <div className="px-2">
              <Slider defaultValue={[20]} max={100} step={1} disabled className="cursor-default" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
