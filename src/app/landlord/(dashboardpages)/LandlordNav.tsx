"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bell, Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";
import LandLordSidebar from "./LandLordSidebar";

const LandlordNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center md:h-14 gap-3">
          <div className="flex gap-3 md:gap-0 items-center justify-center">
            {/* Hamberger Menu for mobile */}
            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Menu className="h-6 w-6 text-gray-500" />
                </SheetTrigger>
                <SheetContent side="left" className="px-0 pt-5 w-64">
                  <LandLordSidebar />
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo */}
            <Link href={"/"} className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900">Logo</span>
            </Link>
          </div>

          {/* Search bar */}
          <div className="hidden md:block w-full max-w-3xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search City, Neighborhood, Address"
                className="w-full pl-4 pr-12 py-6 placeholder:text-sm md:placeholder:text-base border-2 border-gray-200 rounded-full focus:border-red-500 focus:ring-0"
              />
              <div className="flex items-center gap-2 justify-center absolute right-4 top-1/2 transform -translate-y-1/2">
                <Button
                  size="sm"
                  className=" bg-gray-900 hover:bg-gray-800 rounded-xl px-2"
                >
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative bg-transparent">
              <Bell className="h-6 w-6 text-gray-400" />
              <span className="absolute bg-red-200 text-red-400 -top-1.5 -right-1.5 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs">
                3
              </span>
            </div>

            <Button size="icon" className="rounded-full">
              AD
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandlordNav;
