"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ChevronDown, Upload } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  property: z.string().min(1, "Please select a property"),
  tenant: z.string().min(1, "Please select a tenant"),
  complaint: z.string().min(1, "Enter complaint"),
  amount: z.string().min(1, "Enter amount"),
  receipt: z.string(),
});

type FormData = z.infer<typeof formSchema>;

const property = [
  { value: "yaba-duplex", label: "Yaba Duplex" },
  { value: "lekki-duplex", label: "Lekki Duplex" },
  { value: "ikeja-flat", label: "Ikeja Flat" },
];

const tenant = [
  { value: "david-ayantoye", label: "David Ayantoye" },
  { value: "sarah-yusuf", label: "Sarah Yusuf" },
];

interface CustomSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
}

interface BackProp {
  onBack: () => void;
}

function CustomSelect({
  value,
  onValueChange,
  options,
  placeholder,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between w-full px-3 py-2 text-sm border border-gray-200 rounded-md cursor-pointer hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={value ? "text-gray-900" : "text-gray-500"}>
          {value
            ? options.find((opt) => opt.value === value)?.label
            : placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-50"
              onClick={() => {
                onValueChange(option.value);
                setIsOpen(false);
              }}
            >
              <span className="text-sm">{option.label}</span>
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  value === option.value
                    ? "border-red-500 bg-red-500"
                    : "border-gray-300"
                }`}
              >
                {value === option.value && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function MaintenanceForm({ onBack }: BackProp) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      property: "",
      tenant: "",
      complaint: "",
      amount: "",
      receipt: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Handle form submission here
  };

  return (
    <div className="max-w-3xl flex flex-col justify-start py-4 md:py-6 px-5 md:px-14">
      <div className="flex gap-2 items-center  mb-6">
        <Button variant="ghost" onClick={onBack} className="">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="text-xl font-semibold">Documents</div>
      </div>

      <Card>
        <CardContent>
          <div className="mb-5">
            <h3 className="text-lg font-semibold text-center">
              Upload Maintenance Receipt
            </h3>
          </div>

          <Separator className=" mb-6" />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="property"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Property
                    </FormLabel>
                    <FormControl>
                      <CustomSelect
                        value={field.value}
                        onValueChange={field.onChange}
                        options={property}
                        placeholder="Select Property"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tenant"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Tenant
                    </FormLabel>
                    <FormControl>
                      <CustomSelect
                        value={field.value}
                        onValueChange={field.onChange}
                        options={tenant}
                        placeholder="Select Tenant"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="complaint"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Complaint
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Complaint" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Amount (₦)
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter amount" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="receipt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Upload Receipt
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="file"
                          placeholder="Upload File"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400 hover:bg-transparent"
                        >
                          <Upload />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className=" bg-red-800 w-full hover:bg-red-900 text-white py-2 rounded-full"
              >
                Upload & Share with Tenant
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
