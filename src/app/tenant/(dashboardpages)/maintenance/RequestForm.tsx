"use client";
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
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  issue: z.string().min(1, "Enter an issue"),
  property: z.string().min(1, "Enter property"),
  dateNoticed: z.string().min(1, "Enter date noticed"),
});

type FormData = z.infer<typeof formSchema>;

interface BackProp {
  onBack: () => void;
}

export function RequestForm({ onBack }: BackProp) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      issue: "",
      property: "",
      dateNoticed: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Handle form submission here
  };

  return (
    <>
      <div onClick={onBack} className="flex items-center py-3 cursor-pointer">
        <Button variant="link" className="">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="text-sm font-semibold">Maintenance</div>
      </div>
      <div className="max-w-2xl mx-auto flex flex-col justify-start py-6 px-5 md:px-14">
        <Card>
          <CardContent>
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-center">
                Submit Maintenance Request
              </h3>
            </div>

            <Separator className=" mb-6" />

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="issue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Issue
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your issue" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="property"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Property
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter property" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dateNoticed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Date Noticed
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter date noticed" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className=" bg-red-800 hover:bg-red-900 text-white py-2 px-14 rounded-full w-full"
                >
                  Submit Request
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
