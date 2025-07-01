"use client";
import { Badge } from "@/components/ui/badge";
import { MapPin, Pen, PencilLine } from "lucide-react";
import Image from "next/image";
import TenantTable from "./TenantTable";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PaymentTable from "./PaymentTable";
import MaintenanceTable from "./MaintenanceTable";
import { useParams } from "next/navigation";


const links = [
  { name: "Overview", href: "#overview" },
  { name: "Tenants", href: "#tenants" },
  { name: "Payments", href: "#payments" },
  { name: "Maintenance", href: "#maintenance" },
];

const page = () => {
  const [activeId, setActiveId] = useState("#overview");
  const { propertiesId } = useParams()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

const property = {
  id: propertiesId,
  title: "2-Bedroom Apartment in Lekki",
  location: "Lekki Phase 1, Lagos",
  status: "Self Contained",
  type: "Rented",
  image: "/placeholder.svg?height=200&width=300",
  price: "₦ 300,000",
};

const statsCards = [
  {
    title: property.title,
    label: "Property Name",
  },
  {
    title: property.type,
    label: "Type",
  },
  {
    title: property.location,
    label: "Address",
  },
  {
    title: "Jan 20, 2024",
    label: "Date Listed",
  },
  {
    title: "3",
    label: "Total Units",
  },
  {
    title: "3",
    label: "Units Rested",
  },
  {
    title: property.status,
    label: "Status",
  },
];


  return (
    <section className="p-2 md:p-6 space-y-4">
      <section className="bg-white z-50 space-y-2">
        <div className="flex gap-2">
          <h3 className="text-lg md:text-xl font-semibold">{property.title}</h3>
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
        <div className="flex gap-1">
          <MapPin className="w-3.5 h-3.5" />
          <p className="text-xs text-gray-600 mb-2">{property.location}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-video relative">
            <Image
              src={"/images/heropic1.png"}
              alt={property.title}
              fill
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="aspect-video grid grid-cols-2 md:grid-cols-none md:grid-rows-2 gap-4">
            <div className=" relative">
              <Image
                src={"/images/heropic1.png"}
                alt={property.title}
                fill
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className=" relative">
              <Image
                src={"/images/heropic1.png"}
                alt={property.title}
                fill
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="z-50 sticky top-0 -mt-4 bg-white">
        <div className="flex gap-4 py-4 border-b border-gray-300 sticky top-0 px-3">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setActiveId(link.href);
                scrollToSection(link.href);
              }}
              className={`text-gray-850 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors ${
                activeId === link.href && "border-b-2 border-red-500"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </section>

      <section id="overview" className="px-1">
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 px-6">Overview</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {statsCards.map((stat, index) => (
              <div key={index}>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-gray-500">
                    {stat.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-black">{stat.title}</div>
                </CardContent>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 items-center">
            {property.type === "Vacant" && (
              <>
                <div>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-gray-500">
                      Rent Price
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-nowrap text-red-700">
                      {property.price}/year
                    </div>
                  </CardContent>
                </div>
                <div className="cursor-pointer px-5">
                <div className="inline-flex items-center justify-center gap-1 rounded-full text-xs bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 py-1 px-3">
                  <PencilLine className="w-4 h-4" />
                  <span className="text-nowrap">Edit Details</span>
                </div>
                </div>
              </>
            )}
          </div>
        </Card>
      </section>

      <section id="tenants">
        <TenantTable type={property.type} />
      </section>

      <section id="payments">
        <PaymentTable type={property.type} />
      </section>

      <section id="maintenance">
        <MaintenanceTable type={property.type} />
      </section>
    </section>
  );
};

export default page;
