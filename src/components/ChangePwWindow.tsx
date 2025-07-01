"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

// Zod schema for password validation
const passwordSchema = z
  .object({
    newPassword: z
      .string()
      .min(1, "New password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type PasswordFormValues = z.infer<typeof passwordSchema>;

const ChangePwWindow = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const form = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onChange", // Enable real-time validation
  });

  const onSubmit = (values: PasswordFormValues) => {
    console.log("Password change submitted:", values);
    // Handle password change logic here
  };

  // Check if form is valid and passwords match
  const isFormValid =
    form.formState.isValid &&
    form.watch("newPassword") === form.watch("confirmPassword") &&
    form.watch("newPassword").length > 0 &&
    form.watch("confirmPassword").length > 0;

  return (
    <div className="min-h-screen fixed inset-0 bg-white flex  justify-center z-50 p-4">
      {/* Left Side - Password Change Form */}
      <div className="flex-1 flex justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-6">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-xl md:text-3xl font-semibold text-gray-900">
              Logo
            </h1>
          </div>

          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">
              Change Password
            </h2>
            <p className="text-gray-600">
              Enter your current password and set a new one to keep your account
              secure
            </p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* New Password Field */}
              <FormField<PasswordFormValues>
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      New Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter new password"
                          {...field}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                          aria-label="Toggle password visibility"
                        >
                          {showPassword ? (
                            <Eye className="h-5 w-5" />
                          ) : (
                            <EyeOff className="h-5 w-5" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-600 text-sm" />
                  </FormItem>
                )}
              />

              {/* Confirm Password Field */}
              <FormField<PasswordFormValues>
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm new password"
                          {...field}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400 hover:bg-transparent"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          aria-label="Toggle password visibility"
                        >
                          {showConfirmPassword ? (
                            <Eye className="h-5 w-5" />
                          ) : (
                            <EyeOff className="h-5 w-5" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-600 text-sm" />
                  </FormItem>
                )}
              />

              {/* Continue Button */}
              <Button
                type="submit"
                disabled={!isFormValid || form.formState.isSubmitting}
                className="w-full mt-4 bg-red-800 hover:bg-red-900 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-full font-medium"
              >
                {form.formState.isSubmitting
                  ? "Changing Password..."
                  : "Continue"}
              </Button>
            </form>
          </Form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex flex-1">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={"/images/forgotpw-bg.png"}
            width={704}
            height={693}
            alt="Forgot password screen photo"
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePwWindow;
