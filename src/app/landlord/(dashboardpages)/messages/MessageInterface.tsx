"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Paperclip, Maximize2, MoreVertical } from "lucide-react";
import { Conversation } from "./page";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface MessageInterfaceProps {
  conversations: Conversation[];
}

export function MessageInterface({ conversations }: MessageInterfaceProps) {
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation>(conversations[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-full bg-white gap-4 py-4">
      {/* Conversations List - Always visible on mobile, left panel on desktop */}
      <Card className="w-full md:w-80 flex flex-col rounded-sm  overflow-y-scroll">
        {/* Header */}
        <div className="px-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1">
          {filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                selectedConversation?.id === conversation.id ? "bg-gray-50" : ""
              }`}
              onClick={() => setSelectedConversation(conversation)}
            >
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage
                  src={conversation.avatar || "/placeholder.svg"}
                  alt={conversation.name}
                />
                <AvatarFallback>
                  {conversation.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-sm truncate">
                    {conversation.name}
                  </h3>
                  <span className="text-xs text-gray-500 ml-2">
                    {conversation.timestamp}
                  </span>
                </div>
                <p className="text-sm text-gray-600 truncate mt-1">
                  {conversation.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Chat Area - Hidden on mobile, right panel on desktop */}
      <Card className="hidden md:flex flex-1 flex-col rounded-sm">
        {selectedConversation && (
          <>
            {/* Chat Header */}
            <div className="px-4 pb-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage
                    src={selectedConversation.avatar || "/placeholder.svg"}
                    alt={selectedConversation.name}
                  />
                  <AvatarFallback>
                    {selectedConversation.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-sm">
                    {selectedConversation.name}
                  </h3>
                  <p className="text-xs text-gray-500">Active now</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Maximize2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 px-4 overflow-y-auto">
              <div className="space-y-4">
                {selectedConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.isOwn ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isOwn
                          ? "bg-gray-100 text-gray-900"
                          : "bg-red-800 text-white"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.isOwn ? "text-gray-500" : "text-red-100"
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="px-4 pt-4 border-t border-gray-200">
              <Textarea
                placeholder="Write a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                rows={4}
                className="pr-12 h-[100px]"
              />
              <div className="flex mt-5 justify-between items-center w-full">
                <button className="text-gray-400 hover:text-gray-600 transition-colors mr-3">
                  <Paperclip className="w-5 h-5" />
                </button>
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  disabled={!newMessage.trim()}
                  className="bg-red-800 hover:bg-red-900 text-white rounded-full px-4 py-1 ml-2"
                >
                  Send
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
