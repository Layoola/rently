"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CalendarDays, MoreHorizontal, TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";

// Mock data for charts
const priceComparisonData = [
  { name: "Lekki Studio Flat", current: 500000, previous: 700000 },
  { name: "Yaba Duplex", current: 200000, previous: 210000 },
  { name: "Ikeja Mini Flat", current: 700000, previous: 590000 },
  { name: "Surulere Room", current: 400000, previous: 50000 },
];

const rentGrowthData = [
  { year: "0", value: 300000 },
  { year: "2022", value: 150000 },
  { year: "2023", value: 780000 },
  { year: "2024", value: 700000 },
  { year: "2025", value: 790000 },
];

const marketTrendsData = [
  { name: "Jan", rent: 30, demand: 25 },
  { name: "Feb", rent: 45, demand: 35 },
  { name: "Mar", rent: 35, demand: 40 },
  { name: "Apr", rent: 55, demand: 30 },
  { name: "May", rent: 40, demand: 45 },
  { name: "Jun", rent: 60, demand: 50 },
];

const dailyUsageData = [
  { name: "Mon", value: 45 },
  { name: "Tue", value: 35 },
  { name: "Wed", value: 25 },
  { name: "Thu", value: 40 },
  { name: "Fri", value: 50 },
  { name: "Sat", value: 30 },
  { name: "Sun", value: 35 },
];

const demandAnalysisData = [
  { name: "Studio", current: 45, previous: 35 },
  { name: "1BR", current: 25, previous: 40 },
  { name: "2BR", current: 35, previous: 30 },
  { name: "3BR", current: 50, previous: 45 },
  { name: "4BR", current: 30, previous: 35 },
];

const periodicReportsData = [
  { name: "Q1", residential: 45, commercial: 35, mixed: 25 },
  { name: "Q2", residential: 35, commercial: 40, mixed: 30 },
  { name: "Q3", residential: 50, commercial: 30, mixed: 35 },
  { name: "Q4", residential: 40, commercial: 45, mixed: 40 },
];

const reviewsData = [
  {
    tenant: "Sarah Yusuf",
    property: "Lekki Studio",
    rating: 5,
    comment: "Very peaceful environment",
    date: "Jan 12, 2024",
  },
  {
    tenant: "Sarah Yusuf",
    property: "Lekki Studio",
    rating: 5,
    comment: "Great place off the street",
    date: "Jan 12, 2024",
  },
  {
    tenant: "Sarah Yusuf",
    property: "Lekki Studio",
    rating: 5,
    comment: "Enjoyed experience living here",
    date: "Jan 12, 2024",
  },
];

export function AnalyticsDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Price Comparison */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <CardTitle className="text-base font-semibold">
              Price Comparison
            </CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            <Select defaultValue="2025">
              <SelectTrigger className="w-32 h-8">
                <CalendarDays className="text-gray-800" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-10 mb-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
              <span>Your Rent</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-800 rounded-full"></div>
              <span>Market Average</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200} className="p-0">
            <BarChart data={priceComparisonData}>
              {/* <CartesianGrid strokeDasharray="5 4" /> */}
              <XAxis dataKey="name" className="text-xs" />
              <YAxis className="text-xs" />
              {/* <Tooltip /> */}
              <Bar dataKey="current" fill="#ef4444" />
              <Bar dataKey="previous" fill="#1f2937" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Rent Growth Trend */}
      <Card>
        <CardHeader className="flex flex-col justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <CardTitle className="text-base font-semibold">
              Rent Growth Trend
            </CardTitle>
          </div>
          <div className="flex justify-between w-full pt-4">
            <Select defaultValue="2021 - 2025">
              <SelectTrigger className="w-auto h-8">
                <CalendarDays className="text-gray-800" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2021 - 2025">2021 - 2025</SelectItem>
                <SelectItem value="2016 - 2020">2016 - 2020</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex space-x-10 mb-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-950 rounded-full"></div>
                <span>Lekki</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-800 rounded-full"></div>
                <span>Yaba</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <span>Ikeja</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={rentGrowthData}>
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="year" className="text-xs" />
              <YAxis className="text-xs" />
              {/* <Tooltip /> */}
              <Area
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                fill="url(#colorGradient)"
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Reviews & Feedback */}
      <Card className="col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <CardTitle className="text-base font-semibold">
              Reviews & Feedback
            </CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            <Select defaultValue="all-time">
              <SelectTrigger className="w-32 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-time">All Time</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">Tenant</TableHead>
                <TableHead className="text-xs">Property</TableHead>
                <TableHead className="text-xs">Rating</TableHead>
                <TableHead className="text-xs">Comment</TableHead>
                <TableHead className="text-xs">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reviewsData.map((review, index) => (
                <TableRow key={index}>
                  <TableCell className="text-xs">{review.tenant}</TableCell>
                  <TableCell className="text-xs">{review.property}</TableCell>
                  <TableCell className="text-xs">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-xs max-w-32 truncate">
                    {review.comment}
                  </TableCell>
                  <TableCell className="text-xs">{review.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Market Trends */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <CardTitle className="text-base font-semibold">
              Market Trends
            </CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            <Select defaultValue="6-months">
              <SelectTrigger className="w-32 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6-months">6 Months</SelectItem>
                <SelectItem value="1-year">1 Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span>Rent</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span>Demand</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={marketTrendsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="rent"
                stroke="#3b82f6"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="demand"
                stroke="#10b981"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Daily Usage Report */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <CardTitle className="text-base font-semibold">
              Daily Usage Report
            </CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-sm">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span>12% increase</span>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={dailyUsageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Demand Analysis */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <CardTitle className="text-base font-semibold">
              Demand Analysis
            </CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            <Select defaultValue="property-type">
              <SelectTrigger className="w-32 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="property-type">Property Type</SelectItem>
                <SelectItem value="location">Location</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span>Current</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-800 rounded"></div>
              <span>Previous</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={demandAnalysisData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="current" fill="#ef4444" />
              <Bar dataKey="previous" fill="#1f2937" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Periodic Reports */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <CardTitle className="text-base font-semibold">
              Periodic Reports
            </CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            <Select defaultValue="quarterly">
              <SelectTrigger className="w-32 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span>Residential</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span>Commercial</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-500 rounded"></div>
              <span>Mixed Use</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={periodicReportsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="residential" fill="#ef4444" />
              <Bar dataKey="commercial" fill="#3b82f6" />
              <Bar dataKey="mixed" fill="#6b7280" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
