"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { RotateCw } from "lucide-react"
import Image from "next/image"
import ChangePwWindow from "./ChangePwWindow"
import { usePathname } from "next/navigation"

const VerifyEmailWindow = () => {
  const pathname = usePathname()

  const [otp, setOtp] = useState("")
  const [countdown, setCountdown] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const [changePw, setChangePw] = useState(false)

  // Countdown timer effect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [countdown])

  // Format countdown to MM:SS
  const formatCountdown = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const handleContinue = () => {
    if (otp.length === 4) {
      console.log("OTP submitted:", otp)
      // Handle OTP verification here
      if(!pathname.endsWith("/forgot-password")){
        setChangePw(false)
      }else {
        setChangePw(true)
      }
    }
  }

  const handleResend = () => {
    if (canResend) {
      console.log("Resending OTP...")
      setCountdown(60)
      setCanResend(false)
      setOtp("")
      // Handle resend logic here
    }
  }

  return (
    <>
    <div className="min-h-screen fixed inset-0 bg-white flex  justify-center z-50 p-4">
      {/* Left Side - Verification Form */}
      <div className="flex-1 flex justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-6">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-xl md:text-3xl font-semibold text-gray-900">Logo</h1>
          </div>

          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">Verify Your Email</h2>
            <p className="text-gray-600">Please enter the 4-digit code sent to your email address</p>
          </div>

          {/* Countdown Timer */}
          <div className="text-center">
            <p className="text-sm font-medium">Resend code in <span className="text-red-800">{formatCountdown(countdown)}</span></p>
          </div>

          {/* OTP Input */}
          <div className="flex justify-center">
            <InputOTP maxLength={4} value={otp} onChange={(value) => setOtp(value)}>
              <InputOTPGroup className="space-x-4">
                <InputOTPSlot
                  index={0}
                  className="w-12 h-12 text-lg border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
                <InputOTPSlot
                  index={1}
                  className="w-12 h-12 text-lg border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
                <InputOTPSlot
                  index={2}
                  className="w-12 h-12 text-lg border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
                <InputOTPSlot
                  index={3}
                  className="w-12 h-12 text-lg border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
              </InputOTPGroup>
            </InputOTP>
          </div>

          {/* Continue Button */}
          <Button
            onClick={handleContinue}
            disabled={otp.length !== 4}
            className="w-full bg-red-800 hover:bg-red-900 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-full font-medium"
          >
            Continue
          </Button>

          {/* Resend Button */}
          <div className="text-center justify-center w-full flex items-center">
            <Button
              variant="link"
              onClick={handleResend}
              disabled={!canResend}
              className={`text-red-800 hover:text-red-900 p-0 h-auto font-medium flex items-center justify-center gap-2 ${
                !canResend ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <RotateCw className="w-4 h-4" />
              Resend
            </Button>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex flex-1">
          <div className="w-full h-full flex items-center justify-center">
              <Image src={'/images/forgotpw-bg.png'} width={704} height={693} alt="Forgot password screen photo" />
          </div>
      </div>
    </div>
    {changePw && (<ChangePwWindow />)}
    </>
  )
}


export default VerifyEmailWindow

