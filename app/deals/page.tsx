"use client"
import { Heart, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

const Deal = [
  { id: 1, image: "/dress.png" },
  { id: 2, image: "/dress.png" },
  { id: 3, image: "/dress.png" },
  { id: 4, image: "/dress.png" },
  { id: 5, image: "/dress.png" },
];

function Deals() {
  return (
    <div>
      <div className="flex items-center justify-center mt-4 ">
        <div className="bg-[#F8EDE7] flex items-center p-2 w-[200px] justify-center">
          <p className="text-[#E55329]">Explore our new Arrivals</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 px-24 py-10">
        {Deal.map((item) => (
          <Link key={item.id} href={`/deals/${item.id}`}>
            <div className="rounded-2xl shadow-sm overflow-hidden w-[280px] p-2 cursor-pointer hover:shadow-md transition">
              
              <div className="relative p-2">
                <button
                  onClick={(e) => e.preventDefault()} 
                  className="absolute top-4 left-4 z-10 bg-white p-2 rounded-full shadow"
                >
                  <Heart className="w-4 h-4 text-red-500" />
                </button>

                <img
                  src={item.image}
                  alt="Floral Summer Dress"
                  className="h-[220px] w-full object-cover rounded-xl"
                />
              </div>

              <div className="px-2 pb-3">
                <h3 className="font-medium text-gray-900">
                  Floral Summer Dress
                </h3>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-400 line-through">₹1999</span>
                  <span className="text-green-600 font-semibold">₹1399</span>
                  <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                    30% OFF
                  </span>
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium">4.5</span>
                  <span>(0 reviews)</span>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Deals;
