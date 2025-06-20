import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SearchBar() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search City, Neighborhood, Address"
          className="w-full pl-4 pr-12 py-6 md:py-7 placeholder:text-base border-2 border-gray-200 rounded-full focus:border-red-500 focus:ring-0"
        />
        <Button
          size="sm"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 hover:bg-gray-800 rounded-xl px-2"
        >
          <Search className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}