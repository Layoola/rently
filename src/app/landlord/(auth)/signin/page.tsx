"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import ChatWidget from "@/components/ChatWidget";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// Zod schema for form validation
const formSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  rememberMe: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

const page = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log("Form submitted:", values);
    // Handle form submission here
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign in clicked");
    // Handle Google OAuth here
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-6">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900">Logo</h1>
          </div>

          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">
              Ready to Earn from Your Property?
            </h2>
            <p className="text-gray-600">Sign in to Continue</p>
          </div>

          {/* Google Sign In Button */}
          <Button
            variant="outline"
            className="w-full py-3 border-gray-300 hover:bg-gray-50"
            onClick={handleGoogleSignIn}
            type="button"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          {/* OR Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">OR</span>
            </div>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-950">
                      Email
                    </FormLabel>
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

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-950">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
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

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-sm text-gray-600 cursor-pointer">
                        Remember Me
                      </FormLabel>
                    </FormItem>
                  )}
                />
                <Link
                  href={"/landlord/forgot-password"}
                  className="text-sm text-red-800 hover:text-red-900 p-0 h-auto"
                >
                  Forgot Password
                </Link>
              </div>

              {/* Sign In Button */}
              <Button
                type="submit"
                className="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-full font-medium"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </Form>

          {/* Sign Up Link */}
          <div className="text-center">
            <span className="text-gray-600">{"Don't have an account? "}</span>
            <Link
              href={"/landlord/signup"}
              className="text-red-800 hover:text-red-900 text-sm p-0 h-auto font-medium"
            >
              Sign Up
            </Link>
          </div>

          {/* Terms & Privacy */}
          <div className="text-center text-sm text-gray-500 space-x-1">
            <span>By signing in, you agree to our</span>
            <Button
              variant="link"
              className="text-sm text-gray-500 hover:text-gray-700 p-0 h-auto underline"
            >
              Terms & Conditions
            </Button>
            <span>,</span>
            <Button
              variant="link"
              className="text-sm text-gray-500 hover:text-gray-700 p-0 h-auto underline"
            >
              Privacy Policy
            </Button>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:flex flex-1">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={"/images/signin-bg.png"}
            width={704}
            height={812}
            alt="Signin screen photo"
          />
        </div>
        {/* Talk to Rently Button */}
        <ChatWidget />
      </div>
    </div>
  );
};

export default page;
