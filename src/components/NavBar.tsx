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
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "Available Apartments", href: "#available-apartments" },
  { name: "How It Works", href: "#how-it-works" },
];

export default function Navbar() {
  const router = useRouter();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={"/"} className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-900">Logo</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href={"/browse-properties"}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-semibold transition-colors"
              >
                Browse Properties
              </Link>
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-semibold transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-7">
            <Link
              href={"/landlord/signup"}
              className="text-red-800 hover:text-red-900 font-semibold hidden lg:inline-flex"
            >
              Become a Landlord
            </Link>
            <Button
              onClick={() => {
                router.push("/tenant/signup");
              }}
              className="bg-red-800 hover:bg-red-900 rounded-full hidden lg:inline-flex"
            >
              Become a Tenant
            </Button>
          </div>

          {/* Hamberger Menu for mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="lg:hidden" />
            </SheetTrigger>
            <SheetContent className="h-1/2 bg-white" side="top">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>
                  {/* Navigation Links */}
                  <div className="block">
                    <div className="flex flex-col items-center justify-center space-y-5">
                      <Link
                        href={"/browse-properties"}
                        className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-semibold transition-colors"
                      >
                        Browse Properties
                      </Link>
                      {navLinks.map((link) => (
                        <button
                          key={link.name}
                          onClick={() => scrollToSection(link.href)}
                          className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-semibold transition-colors"
                        >
                          {link.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col items-center justify-center space-y-5 mt-5 px-20">
                    <Link
                      href={"/landlord/signup"}
                      className="text-red-800 hover:text-red-900 font-semibold"
                    >
                      Become a Landlord
                    </Link>
                    <Button
                      onClick={() => {
                        router.push("/tenant/signup");
                      }}
                      className="bg-red-800 hover:bg-red-900 rounded-full w-full"
                    >
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
  );
}
