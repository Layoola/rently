"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bell, Heart, Menu, Search } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    name: "My Rental",
    href: "/tenant/my-rentals",
  },
  {
    name: "Messages",
    href: "/tenant/messages",
  },
  {
    name: "Maintenance",
    href: "/tenant/maintenance",
  },
  {
    name: "Calendar",
    href: "/tenant/calendar",
  },
  {
    name: "Documents",
    href: "/tenant/documents",
  },
  {
    name: "Utilities",
    href: "/tenant/utilities",
  },
  {
    name: "Settings",
    href: "/tenant/settings",
  },
];

const TenantNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="w-full bg-[#F9F9F9] sticky top-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center md:h-14 gap-3">
          <div className="flex gap-2 md:gap-0 items-center justify-center">
            {/* Hamberger Menu for mobile */}
            <div className="lg:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Menu className="h-6 w-6 text-gray-500" />
                </SheetTrigger>
                <SheetContent side="left" className="px-0 pt-5 w-64">
          {/* Navigation */}
          <nav className="flex flex-col px-4 py-6 space-y-1 ">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-left",
                      isActive
                        ? "text-red-800 hover:text-red-900 font-semibold"
                        : "text-gray-500 font-normal"
                    )}
                  >
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </nav>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo */}
            <Link href={"/"} className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900">Logo</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 lg:flex px-4 py-6 space-y-1 hidden w-full max-w-3xl mx-auto">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-left",
                      isActive
                        ? "text-red-800 hover:text-red-900 font-semibold"
                        : "text-gray-500 font-normal"
                    )}
                  >
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </nav>
          {/* </div> */}

          <div className="flex items-center space-x-4">
            <div className="relative bg-white rounded-full p-2">
              <Search className="h-5 w-5 text-gray-400" />
            </div>

            <div className="relative bg-white rounded-full p-2">
              <Bell className="h-5 w-5 text-gray-400" />
              <span className="absolute bg-red-200 text-red-400 -top-0 -right-0 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs">
                4
              </span>
            </div>

            <div className="relative bg-white rounded-full p-2">
              <Heart className="h-5 w-5 text-gray-400" />
              <span className="absolute bg-red-200 text-red-400 -top-0 -right-0 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs">
                4
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantNav;
