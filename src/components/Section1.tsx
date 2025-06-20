import Image from "next/image";
import { Star } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Section1() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-7">
          <SearchBar />
        </div>

        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-center">
          {/* Left Side - Text and House Image */}
          <div className="space-y-8">
            <div className="pb-4">
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Your Next Home or Next Tenant, Just{" "}
                <span className="text-red-800 relative">
                  One Click{" "}
                  <Image
                    src="/images/vector.png"
                    alt="vector graphics"
                    className="absolute inset-x-0 -bottom-6"
                    width={140}
                    height={23}
                  />
                </span>{" "}
                Away.
              </h1>
            </div>

            <div className="relative rounded-lg">
              <Image
                src="/images/heropic1.png"
                alt="house image"
                width={500}
                height={300}
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </div>
          </div>

          {/* Right Side - Testimonial */}
          <div className="">
            <div className="p-4 md:p-6">
              <div className="space-y-3">
                <div>
                  <p className="inline-block bg-gray-100 rounded-2xl py-2 px-4 text-sm font-medium text-black uppercase tracking-wide">
                    TOP TESTIMONIAL
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  I found a clean, affordable 2-bedroom apartment in Surulere
                  within a few days. The process was transparent, and I didn't
                  have to deal with extra agent fees. This platform made house
                  hunting stress-free.
                </p>

                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-900">
                    4.8
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/heropic2.png"
                alt="house image"
                width={400}
                height={250}
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
