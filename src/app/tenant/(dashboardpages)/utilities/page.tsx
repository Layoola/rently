'use client'
import { ElectricityForm } from "@/app/landlord/(dashboardpages)/utilities/ElectricityForm";
import { InternetForm } from "@/app/landlord/(dashboardpages)/utilities/InternetForm";
import { Card } from "@/components/ui/card";
import { Globe, Lightbulb } from "lucide-react";
import { useState } from "react";

const page = () => {
  const [electricity, setElectricity] = useState(false);
  const [internet, setInternet] = useState(false);

const handleBackToUtilities = () => {
    setElectricity(false);
    setInternet(false)
  };

  if (electricity) {
    return (
        <ElectricityForm onBack={handleBackToUtilities} />
    );
  }

  if (internet) {
    return (
        <InternetForm onBack={handleBackToUtilities} />
    );
  }



  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Utilities</h1>
      <Card className="pb-[200px]">
        <div className="flex gap-7 md:gap-12 px-6">
          <div onClick={()=>{setElectricity(true)}} className="flex flex-col gap-3 items-center justify-center">
            <div className="p-4 rounded-lg border text-red-900 font-light">
              <Lightbulb size={28} />
            </div>
            <p className="font-semibold text-black">Electricity</p>
          </div>
          <div onClick={()=>{setInternet(true)}} className="flex flex-col gap-3 items-center justify-center">
            <div className="p-4 rounded-lg border text-red-900 font-light">
              <Globe size={28} />
            </div>
            <p className="font-semibold text-black">Internet</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default page;
