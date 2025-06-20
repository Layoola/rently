"use client";

import type React from "react";

import { useState } from "react";
import { X, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hi, I'm Renty, your virtual rental assistant. How can I help?",
    sender: "bot",
    timestamp: new Date(),
  },
  {
    id: 2,
    text: "Hi Renty! I'm looking for a 2-bedroom apartment in Lekki within my budget. Can you help me find something?",
    sender: "user",
    timestamp: new Date(),
  },
];

const ChatWindow = ({ isOpen, onClose }: ChatWidgetProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputValue,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputValue("");

      // Simulate bot response after a delay
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: "I'd be happy to help you find a 2-bedroom apartment in Lekki! Let me search for available options within your budget. What's your preferred budget range?",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-200 rounded-2xl w-full max-w-md h-[500px] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-red-800 hover:text-red-900 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 px-4 pb-4 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.sender === "user"
                    ? "bg-red-800 text-white rounded-br-sm"
                    : "bg-white text-gray-900 rounded-bl-sm"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4">
          <div className="bg-white rounded-xl flex flex-col items-center px-2 py-2 shadow-sm">
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              rows={3}
              placeholder="Write a message?"
              className="flex-1 border-none bg-transparent focus:ring-0 focus:outline-none text-sm w-full mb-4 max-h-[200px]"
            />
            <div className="flex justify-between items-center w-full">
            <button className="text-gray-400 hover:text-gray-600 transition-colors mr-3">
              <Paperclip className="w-5 h-5" />
            </button>
            <Button
              onClick={handleSendMessage}
              size="sm"
              className="bg-red-800 hover:bg-red-900 text-white rounded-full px-4 py-1 ml-2"
            >
              Send
            </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
