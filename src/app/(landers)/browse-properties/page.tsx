import { Card, CardContent } from "@/components/ui/card";
import { CircleAlert, Heart, MapPin, Star } from "lucide-react";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import PropNavBar from "@/components/PropNavBar";
import PropMobileSearch from "@/components/PropMobileSearch";

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
];

const page = () => {
  return (
    <>
    <PropNavBar />
    <div>
      <PropMobileSearch />
    </div>
    <section className="mx-4 md:mx-7">
      <p className="text-sm md:text-base font-medium text-red-500 py-5">
        200 Homes Found in Lekki
      </p>
      <div className="flex flex-col md:flex-row pb-15 gap-6">
        <div className="rounded-sm md:w-1/2 md:order-last w-full min-h-screen bg-gray-200 flex flex-col items-center justify-center">
            <div className="font-bold text-gray-500 mb-10">
                <CircleAlert className="w-20 h-20" />
            </div>
            <p className="text-center font-medium text-xl mb-7 text-gray-500">This site can't load Google Maps Correctly</p>
            <p className="text-center font-light text-lg text-gray-500">Do you own this website? <br /> g.co/staticmaperror/signature </p>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-6">
            {/* Property Cards */}
            {properties.map((property) => (
              <Card
                key={property.id}
                className="group cursor-pointer hover:shadow-lg transition-shadow duration-300 p-0"
              >
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
                    <h3 className="font-semibold text-gray-900 text-base leading-tight">
                      {property.title}
                    </h3>

                    <p className="text-red-800 font-medium text-sm">
                      {property.price}
                    </p>

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
          </div>
          <Pagination className="pt-10 pb-14">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="/browse-properties">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">10</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
    </>
  );
};

export default page;
