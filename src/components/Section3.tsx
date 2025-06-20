import { Search, UserPlus, CheckCircle, FileText } from "lucide-react"

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Search Properties or List Yours",
    description:
      "Start by browsing available listings in your preferred location or list your property with a few easy steps. We connect you to the right services to find or offer exactly what you want.",
  },
  {
    id: 2,
    icon: UserPlus,
    title: "Create Account",
    description:
      "Create a free account as a tenant or landlord. All you need is your basic info and a valid email. This unlocks full access to profiles, applications, and listing management tools.",
  },
  {
    id: 3,
    icon: CheckCircle,
    title: "KYC, Apply or Approve",
    description:
      "Tenants complete KYC, express interest, and fill out an application. Landlords are notified to review and approve or decline based on their preferences.",
  },
  {
    id: 4,
    icon: FileText,
    title: "Inspection, Sign Contract, Pay and Move In",
    description:
      "Once approved, tenants inspect the property, make a secure payment, sign the lease, and move in with confidence.",
  },
]

const Section3 = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-6">How It Works</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Whether you're looking for your next home or listing your property as a landlord, getting started is fast
            and stress-free. Here's how our platform makes the rental process seamless from start to finish.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={step.id} className="flex flex-col items-center text-center">
                {/* Step Number and Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-red-800" />
                  </div>
                  <div className="absolute -top-5 -left-4 w-6 h-6 bg-white shadow-lg rounded-full flex items-center justify-center">
                    <span className="text-black font-medium text-xs">{step.id}</span>
                  </div>
                </div>

                <div className="max-w-2xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Section3