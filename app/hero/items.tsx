import { Heart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  { id: 1, image: "/dress.png" },
  { id: 2, image: "/dress.png" },
  { id: 3, image: "/dress.png" },
  { id: 4, image: "/dress.png" },
  { id: 5, image: "/dress.png" },
];

export default function ProductCarousel() {
  return (
    <Carousel className="w-full max-w-6xl">
      <CarouselContent className="-ml-4">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="pl-4 md:basis-1/2 lg:basis-1/4"
          >
            <Card className="rounded-2xl shadow-sm overflow-hidden">
              
              <div className="relative bg-[#f6f0e6] p-4">
                <button className="absolute top-4 left-4 z-10 bg-white p-2 rounded-full shadow">
                  <Heart className="w-4 h-4 text-red-500" />
                </button>

                <img
                  src={product.image}
                  alt="Floral Summer Dress"
                  className="h-[220px] w-full object-contain"
                />
              </div>

              <CardContent className="p-4 space-y-2">
                <h3 className="font-medium text-gray-900">
                  Floral Summer Dress
                </h3>

                <div className="flex items-center gap-2">
                  <span className="text-gray-400 line-through">₹1999</span>
                  <span className="text-green-600 font-semibold">₹1399</span>
                  <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                    30% OFF
                  </span>
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium">4.5</span>
                  <span>(0 reviews)</span>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
