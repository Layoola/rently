"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Phone,
  Mail,
  ArrowLeft,
  Dot,
  Search,
  Download,
  FileText,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

interface TenantProps {
  tenant: any;
  onBack: () => void;
}

export function TenantProfilePage({ tenant, onBack }: TenantProps) {
  return (
    <div className="p-4 md:p-6">
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={onBack} className="mr-4 p-2">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-xl font-bold text-gray-900">Tenant's Profile</h1>
      </div>

      {/* Profile Content */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Column - Profile Photo and Basic Info */}
          <Card className="md:h-1/2 p-6 flex items-center flex-col">
            <div className="text-center">
              <Avatar className="h-20 w-20 mx-auto">
                <AvatarImage
                  src={tenant.avatar || "/placeholder.svg"}
                  alt={tenant.name}
                />
                <AvatarFallback className="text-xl">
                  {tenant.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex items-center justify-center mt-2">
                <h2 className="font-semibold text-sm">{tenant.name}</h2>
                <Dot className="text-gray-500" />

                <p
                  className={
                    tenant.activeStatus === "Online"
                      ? "text-sm px-2 rounded-md bg-green-100 text-green-600 border-green-200"
                      : "text-sm px-2 rounded-md bg-red-100 text-red-600 border-red-200"
                  }
                >
                  {tenant.activeStatus}
                </p>
              </div>
            </div>

            <div className="-mt-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>{tenant.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>{tenant.email}</span>
              </div>
            </div>
          </Card>

          {/* Right Column - Profile Overview */}
          <Card className="md:col-span-2 p-6">
            <h3 className="font-semibold text-xl -mb-2">Profile Overview</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <span className="text-gray-600 text-sm">
                    Property Applied
                  </span>
                  <p className="font-medium text-base">
                    {tenant.propertyAssigned}
                  </p>
                </div>

                <div>
                  <span className="text-gray-600 text-sm">Occupation</span>
                  <p className="font-medium text-base">{tenant.occupation}</p>
                </div>

                <div>
                  <span className="text-gray-600 text-sm">Marital Status</span>
                  <p className="font-medium text-base">
                    {tenant.maritalStatus}
                  </p>
                </div>

                <div>
                  <span className="text-gray-600 text-sm">Nationality</span>
                  <p className="font-medium text-base">{tenant.nationality}</p>
                </div>

                <div>
                  <span className="text-gray-600 text-sm">Move-in Date</span>
                  <p className="font-medium text-base">{tenant.moveInDate}</p>
                </div>

                <div>
                  <span className="text-gray-600 text-sm">Emergency Name</span>
                  <p className="font-medium text-base">
                    {tenant.emergencyName}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-gray-600 text-sm">Status</span>
                  <p className="font-medium text-base">{tenant.activeStatus}</p>
                </div>

                <div>
                  <span className="text-gray-600 text-sm">Company</span>
                  <p className="font-medium text-base">{tenant.company}</p>
                </div>

                <div>
                  <span className="text-gray-600 text-sm">State of Origin</span>
                  <p className="font-medium text-base">
                    {tenant.stateOfOrigin}
                  </p>
                </div>

                <div>
                  <span className="text-gray-600 text-sm">Government ID</span>
                  <p className="font-medium text-base">{tenant.governmentID}</p>
                </div>

                <div>
                  <span className="text-gray-600 text-sm">Lease Duration</span>
                  <p className="font-medium text-base">
                    {tenant.leaseDuration}
                  </p>
                </div>

                <div>
                  <span className="text-gray-600 text-sm">
                    Emergency Contact
                  </span>
                  <p className="font-medium text-base">
                    {tenant.emergencyContact}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex gap-3 w-full items-end pt-4 pb-7 col-span-full justify-end">
            <Button className="bg-red-800 hover:bg-red-900 rounded-full">
              Send Remainder
            </Button>
            <Button className="bg-red-800 hover:bg-red-900 rounded-full">
              Evict Tenant
            </Button>
            <Button variant="outline" className="rounded-full">
              Message
            </Button>
          </div>
        </div>
      </div>

      <Card className="my-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-7 justify-between md:items-center px-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">Payment</h2>
            <Button
              size="sm"
              variant="ghost"
              className="flex md:hidden items-center justify-center gap-2"
            >
              <Download color="red" className="h-4 w-4" />
            </Button>
          </div>
          {/* <TableSearch /> */}
          <div className="w-full max-w-5xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search Tenant's name"
                className="w-full pr-4 pl-10 py-3 md:py-4 placeholder:text-sm border-2 border-gray-200 rounded-md focus:border-red-500 focus:ring-0"
              />
              <Search className="absolute left-4 top-1/2 w-4 h-4 transform -translate-y-1/2 text-gray-900" />
            </div>
          </div>
          <div className="hidden md:flex gap-4 justify-center mx-2">
            <Button
              size="sm"
              variant="outline"
              className="flex basis-1/2 items-center justify-center gap-2"
            >
              <Download color="red" className="h-4 w-4" />
              <span>Download Invoice</span>
            </Button>
          </div>
        </div>

        <div className="px-4 hidden md:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Year</TableHead>
                <TableHead className="font-semibold">Amount</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Date Paid</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tenant.payments.map((detail: any, index: number) => (
                <TableRow key={index}>
                  {/* Year */}
                  <TableCell className="">{detail.year}</TableCell>
                  {/* Amount */}
                  <TableCell className="">{detail.amount}</TableCell>
                  {/* Status */}
                  <TableCell className="">
                    <Badge
                      variant={
                        detail.status === "Paid" ? "default" : "secondary"
                      }
                      className={
                        detail.status === "Paid"
                          ? "bg-green-100 text-green-600 border-green-200"
                          : "bg-red-100 text-red-600 border-red-200"
                      }
                    >
                      {detail.status}
                    </Badge>
                  </TableCell>
                  {/* Date Paid */}
                  <TableCell className="">{detail.datePaid}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="block md:hidden px-4">
          {tenant.payments.map((detail: any, index: number) => (
            <div className="" key={index}>
              <div className="space-y-5 flex justify-between items-start gap-2">
                <div className="flex gap-2">
                  <div className="flex flex-col gap-1">
                    <p className="text-base text-gray-800">{detail.year}</p>
                    <Badge
                      variant={
                        detail.status === "Paid" ? "default" : "secondary"
                      }
                      className={
                        detail.status === "Paid"
                          ? "bg-green-100 text-green-600 border-green-200"
                          : "bg-red-100 text-red-600 border-red-200"
                      }
                    >
                      {detail.status}
                    </Badge>
                  </div>
                </div>
                <div className="text-base">{detail.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="my-6">
        <div className="flex flex-col gap-2 justify-between px-4">
          <h2 className="text-lg font-semibold text-gray-900">Documents</h2>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <FileText color="blue" />
              <p>Lease Agreement</p>
            </div>

            <Button variant="link" className="text-red-800 hover:text-red-900">
              Download
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
