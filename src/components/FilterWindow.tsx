"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Toggle } from "@/components/ui/toggle"
import { Separator } from "./ui/separator"

interface FilterPopoverProps {
  isOpen: boolean
  onClose: () => void
}

const FilterWindow = ({ isOpen, onClose }: FilterPopoverProps) => {
  const [propertyTypes, setPropertyTypes] = useState({
    selfContained: false,
    miniFlat: false,
    fullApartment: false,
  })

  const [priceRange, setPriceRange] = useState([70000, 1000000])
  const [minPrice, setMinPrice] = useState("70,000")
  const [maxPrice, setMaxPrice] = useState("1,000,000")

  // Sample data for the histogram
  const histogramData = [8, 12, 18, 25, 32, 38, 45, 52, 48, 42, 38, 35, 30, 25, 20, 15, 12, 8, 6, 4]

  const handlePropertyTypeToggle = (type: keyof typeof propertyTypes) => {
    setPropertyTypes((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  const handlePriceRangeChange = (values: number[]) => {
    setPriceRange(values)
    setMinPrice(values[0].toLocaleString())
    setMaxPrice(values[1].toLocaleString())
  }

  const handleMinPriceChange = (value: string) => {
    setMinPrice(value)
    const numValue = Number.parseInt(value.replace(/,/g, ""))
    if (!isNaN(numValue)) {
      setPriceRange([numValue, priceRange[1]])
    }
  }

  const handleMaxPriceChange = (value: string) => {
    setMaxPrice(value)
    const numValue = Number.parseInt(value.replace(/,/g, ""))
    if (!isNaN(numValue)) {
      setPriceRange([priceRange[0], numValue])
    }
  }

  const clearAll = () => {
    setPropertyTypes({
      selfContained: false,
      miniFlat: false,
      fullApartment: false,
    })
    setPriceRange([70000, 1000000])
    setMinPrice("70,000")
    setMaxPrice("1,000,000")
  }

  const getSelectedCount = () => {
    return Object.values(propertyTypes).filter(Boolean).length
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-sm md:max-w-xl mx-auto shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="py-3 px-6 relative">
          <h2 className="py-2 text-lg text-center font-semibold text-gray-900">Filters</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600 absolute top-3 right-3">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <Separator className="mb-4" />

        <div className="px-6 pb-6 space-y-8">
          {/* Property Type Section */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-4">Property Type</h3>
            
            <div className="flex flex-nowrap gap-2 border border-gray-200 p-2 rounded-full">
              <Toggle
                pressed={propertyTypes.selfContained}
                onPressedChange={() => handlePropertyTypeToggle("selfContained")}
                className="rounded-full px-4 py-2 text-sm data-[state=on]:bg-gray-200 data-[state=on]:text-gray-700 bg-transparent text-gray-700 hover:bg-gray-200"
              >
                Self-Contained
              </Toggle>
              <Toggle
                pressed={propertyTypes.miniFlat}
                onPressedChange={() => handlePropertyTypeToggle("miniFlat")}
                className="rounded-full px-4 py-2 text-sm data-[state=on]:bg-gray-200 data-[state=on]:text-gray-700 bg-transparent text-gray-700 hover:bg-gray-200"
              >
                Mini Flat
              </Toggle>
              <Toggle
                pressed={propertyTypes.fullApartment}
                onPressedChange={() => handlePropertyTypeToggle("fullApartment")}
                className="rounded-full px-4 py-2 text-sm data-[state=on]:bg-gray-200 data-[state=on]:text-gray-700 bg-transparent text-gray-700 hover:bg-gray-200"
              >
                Full Apartment
              </Toggle>
            </div>
          </div>

          {/* Price Range Section */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-6">Price Range</h3>

            {/* Histogram */}
            <div className="relative mb-6">
              <div className="flex items-end justify-between h-20 px-5">
                {histogramData.map((height, index) => (
                  <div
                    key={index}
                    className="bg-red-400 rounded-t-sm flex-1 mx-px"
                    style={{ height: `${(height / Math.max(...histogramData)) * 100}%` }}
                  />
                ))}
              </div>

              {/* Price Range Slider */}
              <div className="px-0">
                <Slider
                  value={priceRange}
                  onValueChange={handlePriceRangeChange}
                  max={2000000}
                  min={50000}
                  step={10000}
                  className="w-full"
                />
              </div>
            </div>

            {/* Price Inputs */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="min-price" className="text-sm text-gray-600 mb-2 block">
                  Minimum
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₦</span>
                  <Input
                    id="min-price"
                    value={minPrice}
                    onChange={(e) => handleMinPriceChange(e.target.value)}
                    className="pl-8 rounded-full border-gray-200"
                    placeholder="0"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="max-price" className="text-sm text-gray-600 mb-2 block text-right">
                  Maximum
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₦</span>
                  <Input
                    id="max-price"
                    value={maxPrice}
                    onChange={(e) => handleMaxPriceChange(e.target.value)}
                    className="pl-8 rounded-full border-gray-200"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6 pt-4 border-t border-gray-100">
          <Button
            variant="ghost"
            onClick={clearAll}
            className="text-red-800 hover:text-red-900 hover:bg-red-50 font-medium"
          >
            Clear All
          </Button>
          <Button
            onClick={onClose}
            className="bg-red-800 hover:bg-red-900 text-white rounded-full px-6 py-2 font-medium"
          >
            Show 50+ homes
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FilterWindow
