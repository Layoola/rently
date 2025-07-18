import { AnalyticsDashboard } from "./AnalyticsDashboard";


export default function page() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
      </div>
      <AnalyticsDashboard />
    </div>
  )
}