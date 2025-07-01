"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import type { Applicant } from "./page"
import { Card } from "@/components/ui/card"

interface ApplicationsTableProps {
  applications: Applicant[]
  onViewApplicant: (applicant: Applicant) => void
}

export function ApplicationTable({ applications, onViewApplicant }: ApplicationsTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredApplications = applications.filter(
    (app) =>
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.property.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentApplications = filteredApplications.slice(startIndex, endIndex)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
      case "Approved":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Approved</Badge>
      case "Declined":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Declined</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <Card className="p-6">
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
              <TableHead>Applicant</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-gray-700">
            {currentApplications.map((application) => (
              <TableRow key={application.id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={application.avatar || "/placeholder.svg"} alt={application.name} />
                      <AvatarFallback>
                        {application.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{application.name}</span>
                  </div>
                </TableCell>
                <TableCell>{application.property}</TableCell>
                <TableCell>{getStatusBadge(application.status)}</TableCell>
                <TableCell>
                  <Button
                    variant="link"
                    className="text-red-800 hover:text-red-900 p-0 h-auto font-normal"
                    onClick={() => onViewApplicant(application)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="flex items-center space-x-2"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Per page</span>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
            {itemsPerPage}
          </Button>
        </div>

        <Button
          variant="outline"
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="flex items-center space-x-2"
        >
          <span>Next</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}
