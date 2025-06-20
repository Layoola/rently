'use client'

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import ChatWindow from "./ChatWindow"

export default function ChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        onClick={() => setIsChatOpen(true)}
        size="lg"
        className="cursor-pointer bg-red-800 hover:bg-red-900 rounded-full shadow-lg flex items-center gap-2 px-4 py-3"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden md:inline">Talk to Rently</span>
      </Button>
    </div>
    <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  )
}