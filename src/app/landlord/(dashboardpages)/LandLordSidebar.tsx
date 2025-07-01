"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Home,
  FileText,
  MessageSquare,
  CreditCard,
  Users,
  Zap,
  BarChart3,
  FolderOpen,
  Calendar,
  Settings,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navigationItems = [
  {
    name: "Dashboard",
    href: "/landlord/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "My Properties",
    href: "/landlord/properties",
    icon: Home,
  },
  {
    name: "Applications",
    href: "/landlord/applications",
    icon: FileText,
  },
  {
    name: "Messages",
    href: "/landlord/messages",
    icon: MessageSquare,
  },
  {
    name: "Payments",
    href: "/landlord/payments",
    icon: CreditCard,
  },
  {
    name: "Tenants",
    href: "/landlord/tenants",
    icon: Users,
  },
  {
    name: "Utilities",
    href: "/landlord/utilities",
    icon: Zap,
  },
  {
    name: "Analytics",
    href: "/landlord/analytics",
    icon: BarChart3,
  },
  {
    name: "Documents",
    href: "/landlord/documents",
    icon: FolderOpen,
  },
  {
    name: "Calendar",
    href: "/landlord/calendar",
    icon: Calendar,
  },
  {
    name: "Settings",
    href: "/landlord/settings",
    icon: Settings,
  },
]

interface SidebarProps {
  className?: string
}

const LandLordSidebar =  ({ className }: SidebarProps) => {
  const pathname = usePathname()

  return (
    <div className={cn("w-64 md:w-56 lg:w-64 bg-white border-r border-gray-200 flex flex-col h-full", className)}>
      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  isActive
                    ? "bg-red-800 text-white hover:bg-red-900 hover:text-white"
                    : "text-gray-700 hover:bg-gray-100",
                )}
              >
                <Icon className="mr-3 h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-4">
        <Button variant="ghost" className="w-full justify-start text-left font-normal text-red-800 hover:text-red-900 hover:bg-gray-100">
          <LogOut className="mr-3 h-4 w-4" />
          Log Out
        </Button>
      </div>
    </div>
  )
}

export default LandLordSidebar