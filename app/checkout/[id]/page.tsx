"use client";

import { Heart, Star } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();

  const price = 1399;
  const deliveryCharge = 50;
  const total = price + deliveryCharge;

  return (
    <div className="min-h-screen w-full bg-white px-6 py-8">
      <div className="flex justify-center">
        <h2 className="text-sm font-semibold">Book Store Visit</h2>
      </div>

      <div className="flex gap-10 mt-10 justify-center ">
        <div className="w-[30px] border border-gray-200 rounded-2xl p-4 bg-white">
          <div className=" rounded-xl bg-[#F4F6F8] flex items-center justify-center overflow-hidden">
            <button
              onClick={(e) => e.preventDefault()}
              className="absolute top-4 left-4 z-100 bg-white p-2 rounded-full shadow"
            >
              <Heart className="w-4 h-4 text-red-500" />
            </button>
            <img
              src="/dress.png"
              alt="Floral Summer Dress"
              className="h-[300px] w-full"
            />
          </div>

          <h3 className="mt-4 text-base font-medium text-gray-900">
            Floral Summer Dress
          </h3>

          <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            <span className="font-medium">4.5</span>
            <span>(0 reviews)</span>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-green-600 font-semibold text-sm">₹{price}</span>
            <span className="line-through text-gray-400 text-xs">₹1999</span>
            <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">
              30% OFF
            </span>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Select Options</p>
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm">
                Size: <span className="font-semibold">1-2 Years</span>
              </p>
              <span className="text-xs text-orange-500 cursor-pointer">
                Size Chart
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {["1-2 Years", "2-3 Years", "3-4 Years", "4-5 Years"].map(
                (size, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1 text-xs rounded-md border ${
                      index === 0
                        ? "border-orange-500 text-orange-500"
                        : "border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                )
              )}
            </div>

            <p className="text-sm mb-2">
              Color: <span className="font-semibold">Charcoal</span>
            </p>

            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-black border"></div>
              <div className="w-6 h-6 rounded-full bg-[#D6CFC4]"></div>
              <div className="w-6 h-6 rounded-full bg-[#E9A07A]"></div>
              <div className="w-6 h-6 rounded-full bg-[#6F8796]"></div>
            </div>
          </div>
        </div>

        <div className="w-[300px] border border-gray-200 rounded-2xl p-6 bg-white h-[300px] flex flex-col gap-2">
          <h3 className="text-base font-medium py-3 border-b">Summary</h3>
          <div className="flex justify-between text-sm mb-3">
            <span>Price :</span>
            <span>₹{price}</span>
          </div>
          <div className="flex justify-between text-sm mb-4">
            <span>Delivery Charge :</span>
            <span>₹{deliveryCharge}</span>
          </div>
          <div className="flex justify-between text-sm font-medium mb-6">
            <span>Total Amount :</span>
            <span>₹{total}</span>
          </div>
          <button
            onClick={() => router.push(`/payment?total=${total}`)}
            className="w-full bg-[#E55329] text-white py-2 rounded text-sm font-medium hover:opacity-90 transition"
          >
            Confirm & Pay ₹{total}
          </button>
        </div>
      </div>
    </div>
  );
}