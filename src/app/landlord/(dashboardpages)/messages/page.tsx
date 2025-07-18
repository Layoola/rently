"use client";

import { MessageInterface } from "./MessageInterface";

export interface Message {
  id: string;
  text: string;
  timestamp: string;
  isOwn: boolean;
}

export interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread?: boolean;
  messages: Message[];
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "You Good Morning",
    timestamp: "2 min",
    messages: [
      {
        id: "1",
        text: "Hello! I've scheduled your inspection for the Lekki Studio on August 20th at 10:00 AM. Please confirm if this works for you.",
        timestamp: "10:30",
        isOwn: false,
      },
      {
        id: "2",
        text: "Thanks for the update. That time works perfectly — I'll be there.",
        timestamp: "10:32",
        isOwn: true,
      },
    ],
  },
  {
    id: "2",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Can you reschedule the date",
    timestamp: "5 min",
    messages: [
      {
        id: "1",
        text: "Can you reschedule the date",
        timestamp: "10:25",
        isOwn: false,
      },
    ],
  },
  {
    id: "3",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Can you reschedule the date",
    timestamp: "10 min",
    messages: [
      {
        id: "1",
        text: "Can you reschedule the date",
        timestamp: "10:15",
        isOwn: false,
      },
    ],
  },
  {
    id: "4",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Can you reschedule the date",
    timestamp: "15 min",
    messages: [
      {
        id: "1",
        text: "Can you reschedule the date",
        timestamp: "10:10",
        isOwn: false,
      },
    ],
  },
  {
    id: "5",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Can you reschedule the date",
    timestamp: "20 min",
    messages: [
      {
        id: "1",
        text: "Can you reschedule the date",
        timestamp: "10:05",
        isOwn: false,
      },
    ],
  },
  {
    id: "6",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Can you reschedule the date",
    timestamp: "25 min",
    messages: [
      {
        id: "1",
        text: "Can you reschedule the date",
        timestamp: "10:00",
        isOwn: false,
      },
    ],
  },
  {
    id: "7",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "You Good Morning",
    timestamp: "30 min",
    messages: [
      {
        id: "1",
        text: "You Good Morning",
        timestamp: "9:55",
        isOwn: false,
      },
    ],
  },
  {
    id: "8",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "You Good Morning",
    timestamp: "35 min",
    messages: [
      {
        id: "1",
        text: "You Good Morning",
        timestamp: "9:50",
        isOwn: false,
      },
    ],
  },
  {
    id: "9",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "You Good Morning",
    timestamp: "40 min",
    messages: [
      {
        id: "1",
        text: "You Good Morning",
        timestamp: "9:45",
        isOwn: false,
      },
    ],
  },
  {
    id: "10",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "You Good Morning",
    timestamp: "45 min",
    messages: [
      {
        id: "1",
        text: "You Good Morning",
        timestamp: "9:40",
        isOwn: false,
      },
    ],
  },
];

export default function page() {
  return (
    <div className="h-full p-4 md:p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Messages</h1>
      <MessageInterface conversations={mockConversations} />
    </div>
  );
}
