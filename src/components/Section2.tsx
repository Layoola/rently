import Image from "next/image"
import { Heart, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const properties = [
  {
    id: 1,
    title: "2-Bedroom Apartment in Lekki Phase 1",
    price: "₦550,000",
    location: "Lekki Phase 1, Lagos",
    rating: 4.8,
    image: "/images/section2a.png",
    isFavorite: false,
  },
  {
    id: 2,
    title: "2-Bedroom Apartment in Lekki Phase 1",
    price: "₦550,000",
    location: "Lekki Phase 1, Lagos",
    rating: 4.8,
    image: "/images/section2a.png",
    isFavorite: false,
  },
  {
    id: 3,
    title: "2-Bedroom Apartment in Lekki Phase 1",
    price: "₦550,000",
    location: "Lekki Phase 1, Lagos",
    rating: 4.8,
    image: "/images/section2a.png",
    isFavorite: false,
  },
  {
    id: 4,
    title: "2-Bedroom Apartment in Lekki Phase 1",
    price: "₦550,000",
    location: "Lekki Phase 1, Lagos",
    rating: 4.8,
    image: "/images/section2a.png",
    isFavorite: false,
  },
  {
    id: 5,
    title: "2-Bedroom Apartment in Lekki Phase 1",
    price: "₦550,000",
    location: "Lekki Phase 1, Lagos",
    rating: 4.8,
    image: "/images/section2a.png",
    isFavorite: false,
  },
]

const Section2 = () => {
  return (
    <section className="md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mt-4 mb-7">Available Apartments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Property Cards */}
          {properties.map((property) => (
            <Card key={property.id} className="group cursor-pointer hover:shadow-lg transition-shadow duration-300 p-0">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={property.image}
                    alt={property.title}
                    width={351}
                    height={294}
                    className="w-full object-cover rounded-t-lg"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-gray-900 text-base leading-tight">{property.title}</h3>

                  <p className="text-red-800 font-medium text-sm">{property.price}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>

                    <div className="flex items-center text-sm">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-medium">{property.rating}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* View More Card */}
          <Card className="group cursor-pointer hover:shadow-lg transition-shadow duration-300 flex items-center justify-center min-h-[280px]">
            <CardContent className="p-6 text-center">
              <Link href={'/browse-properties'} className="bg-red-800 hover:bg-red-900 text-white px-6 py-2 rounded-full">+ View More</Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Section2