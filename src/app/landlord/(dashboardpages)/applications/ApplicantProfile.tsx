"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, Mail, ArrowLeft } from "lucide-react";
import type { Applicant } from "./page";
import { Card } from "@/components/ui/card";

interface ApplicantProfileProps {
  applicant: Applicant;
  onBack: () => void;
}

export function ApplicantProfile({ applicant, onBack }: ApplicantProfileProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            Pending
          </Badge>
        );
      case "Approved":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Approved
          </Badge>
        );
      case "Declined":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            Declined
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleApprove = () => {
    console.log("Approve tenant:", applicant.name);
    // Handle approve logic here
  };

  const handleMessage = () => {
    console.log("Message tenant:", applicant.name);
    // Handle message logic here
  };

  const handleDecline = () => {
    console.log("Decline tenant:", applicant.name);
    // Handle decline logic here
  };

  return (
    <div className="p-6">
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={onBack} className="mr-4 p-2">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-xl font-bold text-gray-900">Applicant's Profile</h1>
      </div>

      {/* Profile Content */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Column - Profile Photo and Basic Info */}
          <Card className="md:h-1/2 p-6 flex items-center justify-center flex-col">
            <div className="text-center">
              <Avatar className="h-20 w-20 mx-auto">
                <AvatarImage
                  src={applicant.avatar || "/placeholder.svg"}
                  alt={applicant.name}
                />
                <AvatarFallback className="text-2xl">
                  {applicant.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h2 className="font-semibold text-xl">{applicant.name}</h2>
              <div className="">{getStatusBadge(applicant.status)}</div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>{applicant.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>{applicant.email}</span>
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
                    Gbasada Apartment — Flat 1
                  </p>
                </div>

                <div>
                  <span className="text-gray-600 text-sm">Occupation</span>
                  <p className="font-medium text-base">
                    {applicant.occupation}
                  </p>
                </div>

                <div>
                  <span className="text-gray-600 text-sm">Marital Status</span>
                  <p className="font-medium text-base">
                    {applicant.maritalStatus}
                  </p>
                </div>

                <div>
                  <span className="text-gray-600 text-sm">Nationality</span>
                  <p className="font-medium text-base">
                    {applicant.nationality}
                  </p>
                </div>

                <div>
                  <span className="text-gray-600 text-sm">
                    Preferred Move-in Date
                  </span>
                  <p className="font-medium text-base">
                    {applicant.preferredMoveInDate}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-gray-600 text-sm">Status</span>
                  <p className="font-medium text-base">Pending Review</p>
                </div>

                <div>
                  <span className="text-gray-600 text-sm">Company</span>
                  <p className="font-medium text-base">{applicant.company}</p>
                </div>

                <div>
                  <span className="text-gray-600 text-sm">State of Origin</span>
                  <p className="font-medium text-base">
                    {applicant.stateOfOrigin}
                  </p>
                </div>

                <div>
                  <span className="text-gray-600 text-sm">Government ID</span>
                  <p className="font-medium text-base">
                    {applicant.governmentId}
                  </p>
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex justify-start space-x-3 mt-5">
              <Button
                onClick={handleApprove}
                className="rounded-full bg-red-800 hover:bg-red-900 text-white"
              >
                Approve Tenant
              </Button>
              <Button
                variant="outline"
                className="rounded-full"
                onClick={handleMessage}
              >
                Message Tenant
              </Button>
              <Button
                variant="outline"
                className="rounded-full"
                onClick={handleDecline}
              >
                Decline Tenant
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
