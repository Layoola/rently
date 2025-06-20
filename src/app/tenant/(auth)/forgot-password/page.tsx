"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"
import VerifyEmailWindow from "@/components/VerifyEmailWindow"

// Zod schema for form validation
const formSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
})

type FormValues = z.infer<typeof formSchema>

const page = () => {
  const [verify, setVerify] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = (values: FormValues) => {
    console.log("Form submitted:", values)
    // Handle form submission here
    setVerify(true)
  }


  return (
    <>
    <div className="min-h-screen container mx-auto w-full flex lg:py-10">
      {/* Left Side - Form */}
      <div className="flex-1 flex justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-6">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Logo</h1>
          </div>

          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Forgot Password</h2>
            <p className="text-gray-600">We'll send you a 4-digit code to your email to verify your identity and help you reset your password.</p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600 text-sm" />
                  </FormItem>
                )}
              />

              {/* Sign In Button */}
              <Button
                type="submit"
                className="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-full font-medium"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Loading..." : "Continue"}
              </Button>
            </form>
          </Form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex flex-1">
          <div className="w-full h-full flex items-center justify-center">
              <Image src={'/images/forgotpw-bg.png'} width={704} height={693} alt="Forgot password screen photo" />
          </div>
      </div>
    </div>
    {verify && (<VerifyEmailWindow /> )}
    </>
  )
}

export default page