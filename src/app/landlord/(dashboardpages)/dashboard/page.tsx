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
import { MapPin } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
];

const applications = [
  {
    id: 1,
    applicant: "James Akin",
    property: "2- Bedroom Apartment",
    status: "Pending",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    applicant: "James Akin",
    property: "2- Bedroom Apartment",
    status: "Approved",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    applicant: "James Akin",
    property: "2- Bedroom Apartment",
    status: "Pending",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

const page = () => {
  const router = useRouter()

  return (
    <div className="p-2 md:p-6 space-y-4 md:space-y-6">
      <div className="block md:hidden">
        <SearchBar />
      </div>
      {/* Header */}
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">
          Dashboard
        </h1>
      </div>

      {/* Overview Stats */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-900 px-6">Overview</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statsCards.map((stat, index) => (
            <div key={index}>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold">{stat.value}</div>
              </CardContent>
            </div>
          ))}
        </div>
      </Card>

      {/* My Properties */}
      <Card>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900 px-4">
            My Properties
          </h2>
          <Link href={'/landlord/properties'} className="text-red-800 hover:text-red-900 hover:underline hover:underline-offset-4 text-sm pr-5">
            View All
          </Link>
        </div>
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

      {/* Applications Overview */}
      <Card>
        <div className="flex justify-between items-center px-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Applications Overview
          </h2>
          <Button variant="link" className="text-red-800 hover:text-red-900">
            View All
          </Button>
        </div>
        <div className="px-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Applicant</TableHead>
                <TableHead className="font-semibold">Property</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((application) => (
                <TableRow key={application.id}>
                    {/* Avatar + Applicant name laptop display */}
                  <TableCell className="hidden md:flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={application.avatar || "/placeholder.svg"}
                      />
                      <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{application.applicant}</span>
                  </TableCell>

                {/* Avatar + Applicant name + status mobile display */}
                  <TableCell className="md:hidden flex items-center space-x-3">
                    <Avatar className="h-12 md:h-8 w-12 md:w-8">
                      <AvatarImage
                        src={application.avatar || "/placeholder.svg"}
                      />
                      <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <div className="flex md:hidden flex-col  gap-1">
                      {application.applicant}
                      <Badge
                        variant={
                          application.status === "Approved"
                            ? "default"
                            : "secondary"
                        }
                        className={
                          application.status === "Approved"
                            ? "bg-green-100 text-green-600 border-green-200"
                            : "bg-yellow-100 text-yellow-600 border-yellow-200"
                        }
                      >
                        <span className="font-medium">
                          {application.status}
                        </span>
                      </Badge>
                    </div>
                  </TableCell>

                  {/* Property */}
                  <TableCell className="">{application.property}</TableCell>
                  {/* Status */}
                  <TableCell className="">
                    <Badge
                      variant={
                        application.status === "Approved"
                          ? "default"
                          : "secondary"
                      }
                      className={
                        application.status === "Approved"
                          ? "bg-green-100 text-green-600 border-green-200"
                          : "bg-yellow-100 text-yellow-600 border-yellow-200"
                      }
                    >
                      {application.status}
                    </Badge>
                  </TableCell>
                  {/* Action */}
                  <TableCell>
                    <Button
                      variant="link"
                      className="text-red-800 hover:text-red-900 p-0"
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default page;
