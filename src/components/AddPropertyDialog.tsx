"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Upload, Check } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface AddPropertyDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const formSchema = z.object({
  // Step 1: Property Information
  propertyName: z.string().min(1, "Property name is required"),
  propertyType: z.string().min(1, "Property type is required"),
  numberOfUnits: z.string().min(1, "Number of units is required"),
  location: z.string().min(1, "Location is required"),
  state: z.string().min(1, "State is required"),
  propertyDescription: z.string().min(1, "Property description is required"),

  // Step 2: Unit & Pricing Details
  rentPaymentType: z.string().min(1, "Rent payment type is required"),
  monthlyRent: z.string().min(1, "Monthly rent is required"),
  numberOfBathrooms: z.string().min(1, "Number of bathrooms is required"),
  numberOfBedrooms: z.string().min(1, "Number of bedrooms is required"),
  vacantFlats: z.string().min(1, "Number of vacant flats is required"),
  totalFlats: z.string().min(1, "Total flats is required"),
  utilities: z.array(z.string()).min(1, "Select at least one utility"),

  // Step 3: Photos & Media
  photos: z.array(z.any()).optional(),

  // Step 4: Documents
  proofOfOwnership: z.any().optional(),
  legalAgreements: z.any().optional(),
  leaseTerms: z.string().min(1, "Lease terms are required"),
})

type FormData = z.infer<typeof formSchema>

const stepTitles = ["Property Information", "Unit & Pricing Details", "Photos & Media", "Documents"]

const propertyTypes = [
  { value: "self-contained", label: "Self Contained" },
  { value: "mini-flat", label: "Mini Flat" },
  { value: "full-apartment", label: "Full Apartment" },
]

const states = [
  { value: "lagos", label: "Lagos" },
  { value: "abuja", label: "Abuja" },
  { value: "kano", label: "Kano" },
  { value: "rivers", label: "Rivers" },
]

const utilitiesOptions = [
  { value: "electricity", label: "Electricity" },
  { value: "water", label: "Water" },
  { value: "cleaning", label: "Cleaning" },
  { value: "security", label: "Security" },
]

export function AddPropertyDialog({ open, onOpenChange }: AddPropertyDialogProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyName: "",
      propertyType: "",
      numberOfUnits: "",
      location: "",
      state: "",
      propertyDescription: "",
      rentPaymentType: "",
      monthlyRent: "",
      numberOfBathrooms: "",
      numberOfBedrooms: "",
      vacantFlats: "",
      totalFlats: "",
      utilities: [],
      photos: [],
      leaseTerms: "",
    },
  })

  const handleNext = async () => {
    let fieldsToValidate: (keyof FormData)[] = []

    switch (currentStep) {
      case 1:
        fieldsToValidate = ["propertyName", "propertyType", "numberOfUnits", "location", "state", "propertyDescription"]
        break
      case 2:
        fieldsToValidate = [
          "rentPaymentType",
          "monthlyRent",
          "numberOfBathrooms",
          "numberOfBedrooms",
          "vacantFlats",
          "totalFlats",
          "utilities",
        ]
        break
      case 3:
        // Photos are optional, so we can proceed
        break
      case 4:
        fieldsToValidate = ["leaseTerms"]
        break
    }

    const isValid = await form.trigger(fieldsToValidate)
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data)
    onOpenChange(false)
    setCurrentStep(1)
    form.reset()
  }

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step <= currentStep ? "bg-red-500 text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            {step}
          </div>
          {step < 4 && <div className={`w-16 h-0.5 mx-2 ${step < currentStep ? "bg-red-500" : "bg-gray-200"}`} />}
        </div>
      ))}
    </div>
  )

  const CustomSelect = ({
    value,
    onValueChange,
    options,
    placeholder,
  }: {
    value: string
    onValueChange: (value: string) => void
    options: { value: string; label: string }[]
    placeholder: string
  }) => (
    <div className="space-y-2">
      {options.map((option) => (
        <div
          key={option.value}
          className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors ${
            value === option.value ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-gray-300"
          }`}
          onClick={() => onValueChange(option.value)}
        >
          <span className="text-sm font-medium">{option.label}</span>
          <div
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
              value === option.value ? "border-red-500 bg-red-500" : "border-gray-300"
            }`}
          >
            {value === option.value && <div className="w-2 h-2 bg-white rounded-full" />}
          </div>
        </div>
      ))}
    </div>
  )

  const UtilitiesSelector = ({
    value,
    onChange,
  }: {
    value: string[]
    onChange: (value: string[]) => void
  }) => (
    <div className="grid grid-cols-2 gap-3">
      {utilitiesOptions.map((utility) => {
        const isSelected = value.includes(utility.value)
        return (
          <div
            key={utility.value}
            className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors ${
              isSelected ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => {
              if (isSelected) {
                onChange(value.filter((v) => v !== utility.value))
              } else {
                onChange([...value, utility.value])
              }
            }}
          >
            <span className="text-sm font-medium">{utility.label}</span>
            <div
              className={`w-4 h-4 rounded border flex items-center justify-center ${
                isSelected ? "border-red-500 bg-red-500" : "border-gray-300"
              }`}
            >
              {isSelected && <Check className="w-3 h-3 text-white" />}
            </div>
          </div>
        )
      })}
    </div>
  )

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{stepTitles[0]}</h3>
      </div>

      <div className="space-y-4">
        <FormField
          control={form.control}
          name="propertyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter property name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="propertyType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Type</FormLabel>
              <FormControl>
                <CustomSelect
                  value={field.value}
                  onValueChange={field.onChange}
                  options={propertyTypes}
                  placeholder="Select property type"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="numberOfUnits"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Units</FormLabel>
              <FormControl>
                <Input placeholder="Enter number of units" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location (Address)</FormLabel>
              <FormControl>
                <Input placeholder="Enter location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state.value} value={state.value}>
                        {state.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="propertyDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter property description" rows={4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{stepTitles[1]}</h3>
      </div>

      <div className="space-y-4">
        <FormField
          control={form.control}
          name="rentPaymentType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How Do You Want Rent to Be Paid?</FormLabel>
              <FormControl>
                <RadioGroup value={field.value} onValueChange={field.onChange} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly">Monthly</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yearly" id="yearly" />
                    <Label htmlFor="yearly">Yearly</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="monthlyRent"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Monthly Rent (₦)</FormLabel>
              <FormControl>
                <Input placeholder="Enter monthly rent" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="numberOfBathrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Bathrooms</FormLabel>
              <FormControl>
                <Input placeholder="Enter number of bathrooms" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="numberOfBedrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Bedrooms</FormLabel>
              <FormControl>
                <Input placeholder="Enter number of bedrooms" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="vacantFlats"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How many flats are still vacant?</FormLabel>
              <FormControl>
                <Input placeholder="Enter number of vacant flats" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="totalFlats"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Flats</FormLabel>
              <FormControl>
                <Input placeholder="Enter number of flats in this property" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="utilities"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Utilities & Features</FormLabel>
              <FormControl>
                <UtilitiesSelector value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{stepTitles[2]}</h3>
      </div>

      <div className="space-y-4">
        <div className="text-center">
          <Button variant="outline" className="mb-4 bg-transparent">
            <Camera className="w-4 h-4 mr-2" />
            Take Live Photo
          </Button>
          <p className="text-sm text-gray-600">Use your camera to take a live photo of the property</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Card className="aspect-square">
            <CardContent className="flex items-center justify-center h-full p-0">
              <img
                src="/placeholder.svg?height=150&width=150"
                alt="Property"
                className="w-full h-full object-cover rounded"
              />
            </CardContent>
          </Card>
          <Card className="aspect-square border-dashed border-2 border-gray-300 hover:border-gray-400 cursor-pointer">
            <CardContent className="flex items-center justify-center h-full">
              <div className="text-center">
                <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">Upload Photo</p>
              </div>
            </CardContent>
          </Card>
          <Card className="aspect-square border-dashed border-2 border-gray-300 hover:border-gray-400 cursor-pointer">
            <CardContent className="flex items-center justify-center h-full">
              <div className="text-center">
                <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">Upload Photo</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{stepTitles[3]}</h3>
      </div>

      <div className="space-y-4">
        <div>
          <Label>Proof of Ownership</Label>
          <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 cursor-pointer">
            <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-600">Upload proof of ownership</p>
          </div>
        </div>

        <div>
          <Label>Legal Agreements</Label>
          <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 cursor-pointer">
            <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-600">Upload legal agreements</p>
          </div>
        </div>

        <FormField
          control={form.control}
          name="leaseTerms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lease Terms & Conditions</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter rules and regulations for tenants" rows={6} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1()
      case 2:
        return renderStep2()
      case 3:
        return renderStep3()
      case 4:
        return renderStep4()
      default:
        return renderStep1()
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl md:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">Add Property</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="py-4">
            {renderStepIndicator()}
            {renderCurrentStep()}

            <div className="flex justify-between pt-6 border-t mt-6">
              <Button type="button" variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
                Previously
              </Button>

              {currentStep === totalSteps ? (
                <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white">
                  Publish Property
                </Button>
              ) : (
                <Button type="button" onClick={handleNext} className="bg-red-500 hover:bg-red-600 text-white">
                  Continue
                </Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}