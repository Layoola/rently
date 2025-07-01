"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Search, SlidersHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const YEARS = ["2025", "2026", "2027"] as const;

const PaymentTable = ({ payment }: any) => {
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  return (
    <Card>
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-between md:items-center px-4">
        <h2 className="text-lg font-semibold text-gray-900">Payments</h2>
        {/* <TableSearch /> */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search Tenant's name, amount"
              className="w-full pr-4 pl-10 py-3 md:py-4 placeholder:text-sm border-2 border-gray-200 rounded-md focus:border-red-500 focus:ring-0"
            />
            <Search className="absolute left-4 top-1/2 w-4 h-4 transform -translate-y-1/2 text-gray-900" />
          </div>
        </div>

        <div className="flex gap-4 justify-center mx-2">
          {/* buttons */}
          {payment.paymentType.toLowerCase().includes("month") ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex basis-1/2 items-center justify-center gap-2"
                >
                  <SlidersHorizontal color="black" className="h-4 w-4" />
                  <span>{"Filter by Month"}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select Month</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={selectedMonth}
                  onValueChange={setSelectedMonth}
                >
                  {MONTHS.map((month) => (
                    <DropdownMenuRadioItem key={month} value={month}>
                      {month}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex basis-1/2 items-center justify-center gap-2"
                >
                  <SlidersHorizontal color="black" className="h-4 w-4" />
                  <span>Filter by Year</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select Year</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={selectedYear}
                  onValueChange={setSelectedYear}
                >
                  {YEARS.map((year) => (
                    <DropdownMenuRadioItem key={year} value={year}>
                      {year}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

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
              <TableHead className="font-semibold">Paid By</TableHead>
              <TableHead className="font-semibold">Unit</TableHead>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Amount</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payment.paymentDetails.map((detail: any, index: number) => (
              <TableRow key={index}>
                {/* Avatar + Applicant name laptop display */}
                <TableCell className="hidden md:flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={"/placeholder.svg"} />
                    <AvatarFallback>JA</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{detail.paidBy}</span>
                </TableCell>

                {/* Unit */}
                <TableCell className="">{detail.unit}</TableCell>
                {/* Date */}
                <TableCell className="">{detail.date}</TableCell>
                {/* Amount */}
                <TableCell className="">₦ {detail.amount}</TableCell>
                {/* Payment Status */}
                <TableCell className="">
                  <Badge
                    variant={detail.status === "Paid" ? "default" : "secondary"}
                    className={
                      detail.status === "Paid"
                        ? "bg-green-100 text-green-600 border-green-200"
                        : "bg-red-100 text-red-600 border-red-200"
                    }
                  >
                    {detail.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-3">
          <Separator />

          <div className="mt-2">
            <p className="text-sm text-red-800">
              Total received: ₦ {payment.totalReceived}
            </p>
            <p className="text-sm text-red-800">
              Outstanding: ₦ {payment.outstanding}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden">
        {payment.paymentDetails.map((detail: any, index: number) => (
          <div key={index} className="bg-white p-4">
            <div className="flex items-center justify-between">
              {/* Left side - Avatar, Name, and Status */}
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={"/placeholder.svg"} />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{detail.paidBy}</span>
                  <Badge
                    variant={detail.status === "Paid" ? "default" : "secondary"}
                    className={`text-xs w-fit ${
                      detail.status === "Paid"
                        ? "bg-green-100 text-green-600 border-green-200"
                        : "bg-red-100 text-red-600 border-red-200"
                    }`}
                  >
                    {detail.status}
                  </Badge>
                </div>
              </div>

              {/* Right side - Amount */}
              <div className="text-right">
                <span className="font-semibold text-base">
                  ₦ {detail.amount}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 px-4">
          <Separator />

          <div className="mt-2">
            <p className="text-sm text-red-800">
              Total received: ₦ {payment.totalReceived}
            </p>
            <p className="text-sm text-red-800">
              Outstanding: ₦ {payment.outstanding}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PaymentTable;
