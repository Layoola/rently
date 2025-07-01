"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { MapPin, SlidersHorizontal } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import FilterWindow from "@/components/FilterWindow";
import { useState } from "react";
import Link from "next/link";
import { AddPropertyDialog } from "@/components/AddPropertyDialog";


const statsCards = [
  {
    title: "Listed Properties",
    value: "4 Properties",
    label: "Listed Properties",
  },
  {
    title: "Active Tenants",
    value: "10 Tenants",
    label: "Active Tenants",
  },
  {
    title: "New Applications",
    value: "3 Pending",
    label: "New Applications",
  },
  {
    title: "Total Income",
    value: "₦ 350,000",
    label: "Total Income",
  },
];

const properties = [
  {
    id: 1,
    title: "2-Bedroom Apartment in...",
    location: "Lekki Phase 1, Lagos",
    status: "Self Contained",
    type: "Rented",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "2-Bedroom Apartment in...",
    location: "Lekki Phase 1, Lagos",
    status: "Self Contained",
    type: "Vacant",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "3-Bedroom Apartment in...",
    location: "Lekki Phase 1, Lagos",
    status: "Self Contained",
    type: "Vacant",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "2-Bedroom Apartment in...",
    location: "Lekki Phase 1, Lagos",
    status: "Self Contained",
    type: "Vacant",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "2-Bedroom Apartment in...",
    location: "Lekki Phase 1, Lagos",
    status: "Self Contained",
    type: "Rented",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "2-Bedroom Apartment in...",
    location: "Lekki Phase 1, Lagos",
    status: "Self Contained",
    type: "Vacant",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    title: "3-Bedroom Apartment in...",
    location: "Lekki Phase 1, Lagos",
    status: "Self Contained",
    type: "Vacant",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    title: "2-Bedroom Apartment in...",
    location: "Lekki Phase 1, Lagos",
    status: "Self Contained",
    type: "Vacant",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 9,
    title: "3-Bedroom Apartment in...",
    location: "Lekki Phase 1, Lagos",
    status: "Self Contained",
    type: "Vacant",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 10,
    title: "2-Bedroom Apartment in...",
    location: "Lekki Phase 1, Lagos",
    status: "Self Contained",
    type: "Vacant",
    image: "/placeholder.svg?height=200&width=300",
  },
];

const page = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="p-2 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">
          My Properties
        </h1>

        <div className="flex items-center gap-5 md:justify-center">
          <Button
            size="sm"
            onClick={() => setIsDialogOpen(true)}
            className=" bg-red-800 hover:bg-red-900 rounded-full px-2"
          >
            + Add Property
          </Button>
          <AddPropertyDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
          <Button
            size="sm"
            onClick={() => setIsChatOpen(true)}
            className="text-black flex items-center justify-center gap-2 bg-transparent hover:bg-gray-100 shadow-none border-1 border-gray-200 rounded-xl px-2"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <p>Filters</p>
          </Button>
        </div>
        <FilterWindow
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
        />
      </div>

      {/* My Properties */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {properties.map((property) => (
            <Link href={`/landlord/properties/${property.id}`} key={property.id} className="overflow-hidden hover:shadow-sm p-2 rounded-md">
              <div className="aspect-video relative">
                <Image
                  src={"/images/heropic1.png"}
                  alt={property.title}
                  fill
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="py-4">
                <h3 className="font-semibold truncate text-sm mb-1">
                  {property.title}
                </h3>
                <div className="flex gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <p className="text-xs text-gray-600 mb-2">
                    {property.location}
                  </p>
                </div>
                <p className="text-xs text-red-800 mb-2">{property.status}</p>
                <Badge
                  variant="default"
                  className={`text-xs ${
                    property.type === "Rented"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {property.type}
                </Badge>
              </div>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default page;
