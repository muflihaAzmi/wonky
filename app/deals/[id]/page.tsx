"use client";

import { Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface DealDetailsProps {
  productId: number;
}

const allProducts = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: 1399,
    image: "/dress.png",
  },
  {
    id: 2,
    name: "Baby Hoodie Dress",
    price: 1399,
    image: "/dress.png",
  },
  {
    id: 3,
    name: "Party Wear Dress",
    price: 1399,
    image: "/dress.png",
  },
  {
    id: 4,
    name: "Casual Kids Dress",
    price: 1399,
    image: "/dress.png",
  },
];

export default function DealDetails({ productId }: DealDetailsProps) {
  const sizes = ["1-2 Years", "1-3 Years", "2-3 Years", "3-4 Years"];
  const router = useRouter();

  const colors = [
    { name: "Charcoal", value: "#2F2F2F" },
    { name: "Beige", value: "#D6CFC4" },
    { name: "Peach", value: "#E9A07A" },
    { name: "Blue Grey", value: "#6F8796" },
  ];

  const [selectedSize, setSelectedSize] = useState("1-2 Years");
  const [selectedColor, setSelectedColor] = useState("Charcoal");

  const relatedItems = allProducts.filter(
    (product) => product.id !== productId
  );

  return (
    <div className="w-full min-h-screen px-24 py-8 bg-white">
      <div className="flex gap-20">
        <img
          src="/dress.png"
          alt="Floral Summer Dress"
          className="w-[580px] h-[600px] object-cover "
        />

        <div className="flex flex-col gap-5 flex-1">
          <h1 className="text-2xl font-semibold text-gray-900">
            Floral Summer Dress
          </h1>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="font-medium">4.5</span>
            <span>(0 reviews)</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-semibold text-green-600">₹1399</span>
            <span className="text-gray-400 line-through">₹1999</span>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              30% OFF
            </span>
          </div>

          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm">
                Size:{" "}
                <span className="font-semibold text-gray-900">
                  {selectedSize}
                </span>
              </p>

              <Link
                href="#"
                className="text-red-500 text-sm flex items-center gap-1"
              >
                <img src="/tape-measure.png" className="w-4 h-4" />
                Size Chart
              </Link>
            </div>

            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 text-sm rounded-md border transition
                    ${
                      selectedSize === size
                        ? "border-orange-500 text-orange-500"
                        : "border-gray-300 hover:border-gray-500"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm mb-2">
              Color:{" "}
              <span className="font-semibold text-gray-900">
                {selectedColor}
              </span>
            </p>

            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-9 h-9 rounded-full border-2 transition
                    ${
                      selectedColor === color.name
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                  style={{ backgroundColor: color.value }}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => router.push(`/checkout/${productId}`)}
            className="mt-6 bg-[#E55329] text-white px-6 py-3 rounded-md"
          >
            Buy Now
          </button>

          <p className="text-sm text-gray-500 mt-2">
            Return within 7 days if unused.{" "}
            <Link href="#" className="underline">
              View return policy
            </Link>
          </p>
        </div>
      </div>

      <div className="py-10">
        <div className="flex justify-center">
           <div className="bg-[#F8EDE7] flex items-center p-2 w-[200px] ">
          <p className="text-[#E55329]">Explore our new Arrivals</p>
        </div>
        </div>
       

        <div className="grid grid-cols-4 gap-6 mt-10">
          {relatedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => router.push(`/checkout/${productId}`)}
              className="border rounded-lg p-4 cursor-pointer hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[220px] object-cover rounded"
              />

              <h3 className="mt-3 text-sm font-medium">{item.name}</h3>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-green-600 font-semibold">
                  ₹{item.price}
                </span>
                <span className="text-xs bg-red-500 text-white px-2 rounded-full">
                  30% OFF
                </span>
              </div>

              <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                4.5 (0 reviews)
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
