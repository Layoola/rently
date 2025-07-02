"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileText, Search, Upload } from "lucide-react";
import React, { useState } from "react";
import { MaintenanceForm } from "./MaintenanceForm";

const documents = [
  {
    name: "Lease_Agreement_Lekki.pdf",
    type: "Lease Agreement",
    uploadDate: "Feb 10, 2024",
  },
  {
    name: "Sarah_Yusuf_Receipt.pdf",
    type: "Payment Receipt",
    uploadDate: "Feb 10, 2024",
  },
  {
    name: "Leaking_Roof.pdf",
    type: "Payment Receipt",
    uploadDate: "Feb 10, 2024",
  },
];

const page = () => {
  const [searchTerm, setSearchTerm] = useState("");
    const [maintenance, setMaintenance] = useState(false);



    const handleBackToDocument = () => {
        setMaintenance(false);
      };
    
      if (maintenance) {
        return (
            <MaintenanceForm onBack={handleBackToDocument} />
        );
      }


  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
        <Button onClick={()=>{setMaintenance(true)}} className="bg-red-800 hover:bg-red-900 rounded-full flex items-center">
            <Upload />
            <p>Upload Maintenance Receipt</p>
        </Button>
      </div>
      <Card className="p-4">
        {/* Search Bar */}
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Table */}
        <div className="">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document Name</TableHead>
                <TableHead>Property</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-gray-700">
              {documents.map((document, index) => (
                <TableRow key={index}>
                  <TableCell className="flex items-center gap-2">
                    <FileText color="blue" size={20} />
                    <p>{document.name}</p>
                </TableCell>
                  <TableCell>{document.type}</TableCell>
                  <TableCell>{document.uploadDate}</TableCell>
                  <TableCell>
                    <Button
                      variant="link"
                      className="text-red-800 hover:text-red-900 p-0 h-auto font-normal"
                    >
                      Download
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
