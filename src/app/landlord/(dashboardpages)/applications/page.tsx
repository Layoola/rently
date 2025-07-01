"use client"

import { useState } from "react"
import { ApplicationTable } from "./ApplicationTable"
import { ApplicantProfile } from "./ApplicantProfile"


export interface Applicant {
  id: string
  name: string
  avatar: string
  property: string
  status: "Pending" | "Approved" | "Declined"
  phone: string
  email: string
  occupation: string
  company: string
  maritalStatus: string
  stateOfOrigin: string
  nationality: string
  governmentId: string
  preferredMoveInDate: string
}

const mockApplications: Applicant[] = [
  {
    id: "1",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    property: "2- Bedroom Apartment",
    status: "Pending",
    phone: "+234 194 456 789",
    email: "jamesakin@gmail.com",
    occupation: "Digital Marketer",
    company: "Freelancer",
    maritalStatus: "Single",
    stateOfOrigin: "Oyo State",
    nationality: "Nigerian",
    governmentId: "NIN",
    preferredMoveInDate: "Jan 10, 2024",
  },
  {
    id: "2",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    property: "2- Bedroom Apartment",
    status: "Approved",
    phone: "+234 194 456 789",
    email: "jamesakin@gmail.com",
    occupation: "Digital Marketer",
    company: "Freelancer",
    maritalStatus: "Single",
    stateOfOrigin: "Oyo State",
    nationality: "Nigerian",
    governmentId: "NIN",
    preferredMoveInDate: "Jan 10, 2024",
  },
  {
    id: "3",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    property: "2- Bedroom Apartment",
    status: "Pending",
    phone: "+234 194 456 789",
    email: "jamesakin@gmail.com",
    occupation: "Digital Marketer",
    company: "Freelancer",
    maritalStatus: "Single",
    stateOfOrigin: "Oyo State",
    nationality: "Nigerian",
    governmentId: "NIN",
    preferredMoveInDate: "Jan 10, 2024",
  },
  {
    id: "4",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    property: "2- Bedroom Apartment",
    status: "Pending",
    phone: "+234 194 456 789",
    email: "jamesakin@gmail.com",
    occupation: "Digital Marketer",
    company: "Freelancer",
    maritalStatus: "Single",
    stateOfOrigin: "Oyo State",
    nationality: "Nigerian",
    governmentId: "NIN",
    preferredMoveInDate: "Jan 10, 2024",
  },
  {
    id: "5",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    property: "2- Bedroom Apartment",
    status: "Pending",
    phone: "+234 194 456 789",
    email: "jamesakin@gmail.com",
    occupation: "Digital Marketer",
    company: "Freelancer",
    maritalStatus: "Single",
    stateOfOrigin: "Oyo State",
    nationality: "Nigerian",
    governmentId: "NIN",
    preferredMoveInDate: "Jan 10, 2024",
  },
  {
    id: "6",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    property: "2- Bedroom Apartment",
    status: "Pending",
    phone: "+234 194 456 789",
    email: "jamesakin@gmail.com",
    occupation: "Digital Marketer",
    company: "Freelancer",
    maritalStatus: "Single",
    stateOfOrigin: "Oyo State",
    nationality: "Nigerian",
    governmentId: "NIN",
    preferredMoveInDate: "Jan 10, 2024",
  },
  {
    id: "7",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    property: "2- Bedroom Apartment",
    status: "Pending",
    phone: "+234 194 456 789",
    email: "jamesakin@gmail.com",
    occupation: "Digital Marketer",
    company: "Freelancer",
    maritalStatus: "Single",
    stateOfOrigin: "Oyo State",
    nationality: "Nigerian",
    governmentId: "NIN",
    preferredMoveInDate: "Jan 10, 2024",
  },
  {
    id: "8",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    property: "2- Bedroom Apartment",
    status: "Pending",
    phone: "+234 194 456 789",
    email: "jamesakin@gmail.com",
    occupation: "Digital Marketer",
    company: "Freelancer",
    maritalStatus: "Single",
    stateOfOrigin: "Oyo State",
    nationality: "Nigerian",
    governmentId: "NIN",
    preferredMoveInDate: "Jan 10, 2024",
  },
  {
    id: "9",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    property: "2- Bedroom Apartment",
    status: "Pending",
    phone: "+234 194 456 789",
    email: "jamesakin@gmail.com",
    occupation: "Digital Marketer",
    company: "Freelancer",
    maritalStatus: "Single",
    stateOfOrigin: "Oyo State",
    nationality: "Nigerian",
    governmentId: "NIN",
    preferredMoveInDate: "Jan 10, 2024",
  },
  {
    id: "10",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    property: "2- Bedroom Apartment",
    status: "Pending",
    phone: "+234 194 456 789",
    email: "jamesakin@gmail.com",
    occupation: "Digital Marketer",
    company: "Freelancer",
    maritalStatus: "Single",
    stateOfOrigin: "Oyo State",
    nationality: "Nigerian",
    governmentId: "NIN",
    preferredMoveInDate: "Jan 10, 2024",
  },
  {
    id: "11",
    name: "James Akin",
    avatar: "/placeholder.svg?height=40&width=40",
    property: "2- Bedroom Apartment",
    status: "Pending",
    phone: "+234 194 456 789",
    email: "jamesakin@gmail.com",
    occupation: "Digital Marketer",
    company: "Freelancer",
    maritalStatus: "Single",
    stateOfOrigin: "Oyo State",
    nationality: "Nigerian",
    governmentId: "NIN",
    preferredMoveInDate: "Jan 10, 2024",
  },
]

export default function ApplicationsPage() {
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null)

  const handleViewApplicant = (applicant: Applicant) => {
    setSelectedApplicant(applicant)
  }

  const handleBackToApplications = () => {
    setSelectedApplicant(null)
  }

  if (selectedApplicant) {
    return <ApplicantProfile applicant={selectedApplicant} onBack={handleBackToApplications} />
  }

  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Applications</h1>
        <ApplicationTable applications={mockApplications} onViewApplicant={handleViewApplicant} />
    </div>
  )
}