"use client";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import TenantSinglePage from "./TenantSinglePage";
import { tenantDetails } from "./data";


const page = () => {
  const [selectedTenant, setSelectedTenant] = useState(null);

  const handleViewApplicant = (tenant: any) => {
    setSelectedTenant(tenant);
  };

  const handleBackToTenant = () => {
    setSelectedTenant(null);
  };

  if (selectedTenant) {
    return (
      <TenantSinglePage
        tenant={selectedTenant}
        onBack={handleBackToTenant}
      />
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Tenants</h1>
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {tenantDetails.map((tenant) => (
            <div
              onClick={() => handleViewApplicant(tenant)}
              key={tenant.id}
              className="overflow-hidden hover:shadow-sm p-2 rounded-md"
            >
              <div className="aspect-video relative">
                <Image
                  src={tenant.images[0]}
                  alt={tenant.title}
                  fill
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="py-4">
                <h3 className="font-semibold truncate max-w-5/6 text-sm mb-1">
                  {tenant.title}
                </h3>
                <div className="flex gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <p className="text-xs text-gray-600 mb-2">
                    {tenant.address}
                  </p>
                </div>
                <p className="text-xs text-red-800 mb-2">
                  {tenant.propertyType}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default page;
