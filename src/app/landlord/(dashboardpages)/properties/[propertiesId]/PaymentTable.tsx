import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import TableSearch from "./TableSearch";

const applications = [
  {
    id: 1,
    applicant: "James Akin",
    date: "Feb 01, 2024",
    amount: "₦150,000",
    status: "Paid",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    applicant: "James Akin",
    date: "Feb 01, 2024",
    amount: "₦150,000",
    status: "Unpaid",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    applicant: "James Akin",
    date: "Feb 01, 2024",
    amount: "₦150,000",
    status: "Unpaid",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

const PaymentTable = ({ type }: any) => {
  return (
    <Card>
      <div className="flex flex-col md:flex-row md:gap-10 justify-between items-center px-4">
        <h2 className="text-lg font-semibold text-gray-900">Payments</h2>
        <TableSearch />
      </div>
      {type === "Vacant" ? (
        <div className="text-lg text-center py-10">
          No tenants currently occupy this property
        </div>
      ) : (
        <div className="px-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Paid By</TableHead>
                <TableHead className="font-semibold">Unit</TableHead>
                <TableHead className="font-semibold">Date</TableHead>
                <TableHead className="font-semibold">Amount</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
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
                    <div className="flex md:hidden flex-col gap-1">
                      {application.applicant}
                      <Badge
                        variant={
                          application.status === "Paid"
                            ? "default"
                            : "secondary"
                        }
                        className={
                          application.status === "Paid"
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

                  {/* Unit */}
                  <TableCell className="">{application.id}</TableCell>
                  {/* Date */}
                  <TableCell className="">{application.date}</TableCell>
                  {/* Amount */}
                  <TableCell className="">{application.amount}</TableCell>
                  {/* Payment Status */}
                  <TableCell className="">
                    <Badge
                      variant={
                        application.status === "Paid" ? "default" : "secondary"
                      }
                      className={
                        application.status === "Paid"
                          ? "bg-green-100 text-green-600 border-green-200"
                          : "bg-red-100 text-red-600 border-red-200"
                      }
                    >
                      {application.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </Card>
  );
};

export default PaymentTable;
