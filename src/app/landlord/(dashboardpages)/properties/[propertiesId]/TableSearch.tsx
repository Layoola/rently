import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function TableSearch() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search City, Neighborhood, Address"
          className="w-full pr-4 pl-10 py-6 md:py-6 placeholder:text-sm border-2 border-gray-200 rounded-full focus:border-red-500 focus:ring-0"
        />
        <Search className="absolute left-4 top-1/2 w-5 h-5 transform -translate-y-1/2 text-gray-900" />
      </div>
    </div>
  )
}