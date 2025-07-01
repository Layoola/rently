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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  provider: z.string().min(1, "Please select a provider"),
  electricityType: z.string().min(1, "Please select electricity type"),
  meterNumber: z.string().min(1, "Enter meter/account number"),
  amount: z.string().min(1, "Enter amount"),
});

type FormData = z.infer<typeof formSchema>;

const providers = [
  { value: "ibadan-electricity", label: "Ibadan Electricity" },
  { value: "jos-electricity", label: "Jos Electricity" },
  { value: "ikeja-electric", label: "Ikeja Electric" },
];

const electricityTypes = [
  { value: "prepaid", label: "Prepaid" },
  { value: "postpaid", label: "Postpaid" },
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

export function ElectricityForm({ onBack }: BackProp) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      provider: "",
      electricityType: "",
      meterNumber: "",
      amount: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Handle form submission here
  };

  return (
    <div className="max-w-3xl flex flex-col justify-start py-6 px-5 md:px-14">
      <div className="flex gap-2 items-center  mb-6">
        <Button variant="link" onClick={onBack} className="">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="text-xl font-semibold">Utilities</div>
      </div>

      <Card>
        <CardContent>
          <div className="mb-3">
            <h3 className="text-lg font-semibold text-center">Electricity</h3>
          </div>

          <Separator className=" mb-6" />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="provider"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Provider
                    </FormLabel>
                    <FormControl>
                      <CustomSelect
                        value={field.value}
                        onValueChange={field.onChange}
                        options={providers}
                        placeholder="Select Provider"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="electricityType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Type of Electricity
                    </FormLabel>
                    <FormControl>
                      <CustomSelect
                        value={field.value}
                        onValueChange={field.onChange}
                        options={electricityTypes}
                        placeholder="Select type"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="meterNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Enter Meter / Account Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter meter / account number"
                        {...field}
                      />
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

              <div className="w-full justify-end flex ">
                <Button
                  type="submit"
                  className=" bg-red-800 hover:bg-red-900 text-white py-2 px-14 rounded-full"
                >
                  Pay
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
