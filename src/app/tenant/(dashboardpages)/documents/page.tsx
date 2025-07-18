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


  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-0 md:items-center py-4">
        <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
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
        <div className="hidden md:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Uploaded On</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-gray-700">
              {documents.map((document, index) => (
                <TableRow key={index} className="">
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

        <div className="block md:hidden">
          {documents.map((document, index) => (
            <div className="" key={index}>
              <div className="space-y-10 flex justify-between items-start gap-2">
                <div className="flex gap-2">
                    <FileText color="blue" size={20} />
                    <div className="flex flex-col">
                        <p className="text-base text-gray-800">{document.name}</p>
                        <p className="text-sm text-gray-700">{document.uploadDate}</p>
                    </div>       
                </div>
                <Button
                  variant="link"
                  className="text-red-800 hover:text-red-900 p-0 h-auto font-semibold"
                >
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default page;
