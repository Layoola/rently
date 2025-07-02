'use client'
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
import TenantTable from './TenantTable';
import { TenantProfilePage } from './TenantProfilePage';


interface TenantProps {
  tenant: any;
  onBack: () => void;
}

const TenantSinglePage = ({ tenant, onBack }: TenantProps) => {

  const [selectedTenant, setSelectedTenant] = useState(null);

  const handleViewApplicant = (tenant: any) => {
    setSelectedTenant(tenant);
  };

  const handleBackToTenant = () => {
    setSelectedTenant(null);
  };

  if (selectedTenant) {
    return (
      <TenantProfilePage tenant={selectedTenant} onBack={handleBackToTenant} />
    );
  }



  return (
    <div className="p-6 space-y-6">
      {/* Header with back button */}
      <div className="flex">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center">
            <div className="flex gap-2 items-center">
              <Button variant="ghost" onClick={onBack} className="">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <h1 className="text-xl font-bold text-gray-900">
                {tenant.title}
              </h1>
            </div>
          </div>
          <div className="flex gap-1">
            <MapPin className="w-4 h-4" />
            <p className="text-sm text-gray-900">{tenant.address}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="aspect-video relative">
          <Image
            src={tenant.images[0]}
            alt={tenant.title}
            fill
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="aspect-video grid grid-cols-2 md:grid-cols-none md:grid-rows-2 gap-4">
          <div className=" relative">
            <Image
              src={tenant.images[0]}
              alt={tenant.title}
              fill
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className=" relative">
            <Image
              src={tenant.images[0]}
              alt={tenant.title}
              fill
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <TenantTable viewProfile={handleViewApplicant} tenant={tenant} />
    </div>
  )
}

export default TenantSinglePage