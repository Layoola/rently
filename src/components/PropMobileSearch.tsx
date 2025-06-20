"use client"
import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Search, SlidersHorizontal } from 'lucide-react'
import FilterWindow from './FilterWindow'

const PropMobileSearch = () => {
    const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="block md:hidden w-full max-w-3xl mx-auto pt-6 px-6">
        <div className="relative">
            <Input
            type="text"
            placeholder="Search City, Neighborhood, Address"
            className="w-full pl-4 pr-12 py-6 placeholder:text-sm border-2 border-gray-200 rounded-full focus:border-red-500 focus:ring-0"
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
                </Button>
            </div>
            <FilterWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div>
    </div>
  )
}

export default PropMobileSearch