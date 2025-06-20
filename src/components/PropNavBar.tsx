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
import {  Menu, Search, SlidersHorizontal } from "lucide-react";
import { Input } from "./ui/input";
import FilterWindow from "./FilterWindow";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PropNavBar = () => {
  const router = useRouter()
    const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center md:h-16 gap-3">
          {/* Logo */}
          <Link href={'/'} className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-900">Logo</span>
          </Link>

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
                        <Button
                        size="sm"
                        onClick={() => setIsChatOpen(true)}
                        className="text-black flex items-center justify-center gap-2 bg-transparent hover:bg-gray-100 shadow-none border-1 border-gray-200 rounded-xl px-2"
                        >
                        <SlidersHorizontal className="w-5 h-5" />
                        <p>Filters</p>
                        </Button>
                    </div>
                    <FilterWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
                </div>
            </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-7">
            <Link href={'/landlord/signup'} className="text-red-800 hover:text-red-900 text-nowrap font-semibold hidden lg:inline-flex">
              Become a Landlord
            </Link>
            <Button onClick={()=>{router.push('/tenant/signup')}} className="bg-red-800 hover:bg-red-900 rounded-full hidden lg:inline-flex">
              Become a Tenant
            </Button>
          </div>

          {/* Hamberger Menu for mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Menu  className="lg:hidden" />
            </SheetTrigger>
            <SheetContent className="h-1/4 bg-white" side="top">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>
                  {/* Action Buttons */}
                  <div className="flex flex-col items-center justify-center space-y-5 mt-5 px-20">
                    <Link href={'/landlord/signup'} className="text-red-800 hover:text-red-900 font-semibold">
                      Become a Landlord
                    </Link>
                    <Button onClick={()=>{router.push('/tenant/signup')}} className="bg-red-800 hover:bg-red-900 rounded-full w-full">
                      Become a Tenant
                    </Button>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default PropNavBar