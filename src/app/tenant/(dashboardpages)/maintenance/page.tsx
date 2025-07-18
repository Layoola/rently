"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { RequestForm } from "./RequestForm";

const mockApplications = [
  {
    id: "1",
    date: "Jan 10, 2024",
    issue: "Leaking Tap",
    propertyName: "Yaba Studio Flat",
    status: "Pending",
    resolved: false,
  },
  {
    id: "2",
    date: "Jan 10, 2024",
    issue: "Leaking Tap",
    propertyName: "Yaba Studio Flat",
    status: "Resolved",
    resolved: true,
  },
  {
    id: "3",
    date: "Jan 10, 2024",
    issue: "Leaking Tap",
    propertyName: "Yaba Studio Flat",
    status: "Pending",
    resolved: false,
  },
];

const page = () => {
  const [request, setRequest] = useState(false);

  const handleBackToMaintenance = () => {
    setRequest(false);
  };

  if (request) {
    return <RequestForm onBack={handleBackToMaintenance} />;
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            Pending
          </Badge>
        );
      case "Resolved":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Resolved
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="p-2 md:p-6">
      <div className="flex justify-between py-2">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Maintenance</h1>

        <Button onClick={()=>{setRequest(true)}} className="bg-red-800 hover:bg-red-900 text-white rounded-full">
          Submit New Request
        </Button>
      </div>

      <Card className="p-6">
        {/* Table */}
        <div className="">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Issue</TableHead>
                <TableHead>Property Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-gray-700">
              {mockApplications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell>{application.date}</TableCell>
                  <TableCell>{application.issue}</TableCell>
                  <TableCell>{application.propertyName}</TableCell>
                  <TableCell>{getStatusBadge(application.status)}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      className="hover:bg-transparent text-red-800 hover:text-red-900 p-0 h-auto font-normal"
                    >
                      {!application.resolved && "Mark as resolved"}
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
