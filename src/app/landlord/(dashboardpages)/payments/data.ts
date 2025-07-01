export const payment = [
  {
    id: 1,
    title: "2 Bedroom Apartment in Lekki",
    status: "Paid",
    images: [
      "/images/heropic1.png",
      "/images/section2a.png",
      "/images/section2a.png",
    ],
    address: "Lekki Phase 1, Lagos",
    propertyType: "Self Contained",
    paymentType: "Monthly Payment",
    paymentDetails: [
      {
        paidBy: "Adam Smith",
        unit: "1",
        date: "Feb 20, 2025",
        amount: "350,000",
        status: "Paid",
      },
      {
        paidBy: "John Doe",
        unit: "1",
        date: "Feb 22, 2025",
        amount: "350,000",
        status: "Unpaid",
      },
    ],
    totalReceived: "350,000",
    outstanding: "0",
  },
  {
    id: 2,
    title: "2 Bedroom Apartment in Lekki",
    status: "Unpaid",
    images: [
      "/images/heropic1.png",
      "/images/section2a.png",
      "/images/section2a.png",
    ],
    address: "Lekki Phase 2, Lagos",
    propertyType: "Full Apartment",
    paymentType: "Yearly Payment",
    paymentDetails: [
      {
        paidBy: "John Doe",
        unit: "1",
        date: "Feb 22, 2025",
        amount: "350,000",
        status: "Paid",
      },
    ],
    totalReceived: "300,000",
    outstanding: "350,000",
  },
];
