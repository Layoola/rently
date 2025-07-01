"use client";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import PaymentSinglePage from "./PaymentSinglePage";
import { payment } from "./data";

export interface Applicant {
  id: number;
  name: string;
  unit: string;
  date: string;
  amount: string;
  status: string;
  title: string;
  location: string;
  type: string;
  image: string;
}

const page = () => {
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const handleViewApplicant = (applicant: any) => {
    setSelectedApplicant(applicant);
  };

  const handleBackToPayment = () => {
    setSelectedApplicant(null);
  };

  if (selectedApplicant) {
    return (
      <PaymentSinglePage
        payment={selectedApplicant}
        onBack={handleBackToPayment}
      />
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Payments</h1>
      <Card>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900 px-4">Payments</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {payment.map((property) => (
            <div
              onClick={() => handleViewApplicant(property)}
              key={property.id}
              className="overflow-hidden hover:shadow-sm p-2 rounded-md"
            >
              <div className="aspect-video relative">
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  fill
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="py-4">
                <h3 className="font-semibold truncate max-w-5/6 text-sm mb-1">
                  {property.title}
                </h3>
                <div className="flex gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <p className="text-xs text-gray-600 mb-2">
                    {property.address}
                  </p>
                </div>
                <p className="text-xs text-red-800 mb-2">
                  {property.propertyType}
                </p>
                <Badge
                  variant="default"
                  className={`text-xs bg-red-100 text-red-800/75`}
                >
                  {property.paymentType}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default page;
