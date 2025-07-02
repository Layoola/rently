import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
import { Search } from "lucide-react";


interface TenantTableProps {
  tenant: any;
  viewProfile: (tenant: any) => void;
}

const TenantTable = ({ tenant, viewProfile }: TenantTableProps) => {
  return (
    <Card>
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-between md:items-center px-4">
        <h2 className="text-lg font-semibold text-gray-900">Tenants</h2>
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
      </div>

      <div className="px-4 hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Name</TableHead>
              <TableHead className="font-semibold">Unit</TableHead>
              <TableHead className="font-semibold">Move-In-Date</TableHead>
              <TableHead className="font-semibold">Payment Status</TableHead>
              <TableHead className="font-semibold">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tenant.tenants.map((detail: any, index: number) => (
              <TableRow key={index}>
                {/* Avatar + Applicant name laptop display */}
                <TableCell className="hidden md:flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={"/placeholder.svg"} />
                    <AvatarFallback>JA</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{detail.name}</span>
                </TableCell>

                {/* Unit */}
                <TableCell className="">{detail.unit}</TableCell>
                {/* Date */}
                <TableCell className="">{detail.moveInDate}</TableCell>
                {/* Payment Status */}
                <TableCell className="">
                  <Badge
                    variant={
                      detail.paymentStatus === "Paid" ? "default" : "secondary"
                    }
                    className={
                      detail.paymentStatus === "Paid"
                        ? "bg-green-100 text-green-600 border-green-200"
                        : "bg-red-100 text-red-600 border-red-200"
                    }
                  >
                    {detail.paymentStatus}
                  </Badge>
                </TableCell>
                {/* Action */}
                <TableCell className="">
                  <Button
                    variant="link"
                    onClick={() => viewProfile(detail)}
                    key={index}
                    className="text-red-800 hover:text-red-900"
                  >
                    View Profile
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden">
        {tenant.tenants.map((detail: any, index: number) => (
          <div key={index} className="bg-white p-4">
            <div className="flex items-center justify-between">
              {/* Left side - Avatar, Name, and Status */}
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={"/placeholder.svg"} />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{detail.name}</span>
                  <Badge
                    variant={
                      detail.paymentStatus === "Paid" ? "default" : "secondary"
                    }
                    className={`text-xs w-fit ${
                      detail.paymentStatus === "Paid"
                        ? "bg-green-100 text-green-600 border-green-200"
                        : "bg-red-100 text-red-600 border-red-200"
                    }`}
                  >
                    {detail.paymentStatus}
                  </Badge>
                </div>
              </div>

              {/* Right side - Amount */}
              <div className="text-right">
                <span className="font-semibold text-base">
                  {/* ₦ {detail.amount} */}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TenantTable;
