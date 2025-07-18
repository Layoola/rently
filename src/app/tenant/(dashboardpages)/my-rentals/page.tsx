"use client";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { rentals } from "./data";
import { Button } from "@/components/ui/button";

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

  // if (selectedApplicant) {
  //   return (
  //     <PaymentSinglePage
  //       payment={selectedApplicant}
  //       onBack={handleBackToPayment}
  //     />
  //   );
  // }

  if (rentals.length === 0) {
    return (
      <div className="p-2 md:p-6">
        <div className="flex flex-col ">
          <h1 className="text-2xl font-bold text-gray-900 mb-3 text-nowrap">
            My Rental
          </h1>
          <div className="">
            <div className="w-full h-screen flex flex-col gap-4 items-center justify-center rounded-xl mx-auto border border-gray-200">
              <p className="max-w-xs text-center">
                Start your journey by browsing available homes in your preferred
                location.
              </p>
              <div className="w-20 h-20">
                <Image src={'/images/norent.png'} alt="norent image" width={1000} height={1000} className="w-20 h-20 object-cover" />
              </div>
              <Button className="bg-red-800 hover:bg-red-900 text-white rounded-full">
                Browse Available Properties
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-2 md:p-6">
      <div className="flex justify-between py-2">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Rental</h1>

        <Button className="bg-red-800 hover:bg-red-900 text-white rounded-full">
          Browse Available Properties
        </Button>
      </div>
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 pb-4">
          {rentals.map((property) => (
            <div
              onClick={() => handleViewApplicant(property)}
              key={property.id}
              className="overflow-hidden hover:shadow-sm p-2 rounded-md space-y-3"
            >
              <div className="aspect-video relative">
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  fill
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold truncate max-w-5/6 text-sm mb-1">
                  {property.title}
                </h3>

                <div className="flex gap-3 items-center">
                  <p className="text-sm text-red-800">₦ {property.amount}</p>
                  <Badge
                    variant="default"
                    className={`text-xs bg-red-100 text-red-800/75`}
                  >
                    {property.paymentType}
                  </Badge>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="flex gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <p className="text-xs text-gray-600">{property.address}</p>
                  </div>

                  <div className="flex gap-1">
                    <Star className="w-3.5 h-3.5 text-black" />
                    <p className="text-xs text-gray-600">{property.rating}</p>
                  </div>
                </div>
              </div>

              <p className="font-normal text-sm">
                Landlord: {property.landlord}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default page;
