import { MoveRight } from "lucide-react";
import React from "react";

function payment() {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <div className="flex bg-[#E5FFEC] h-20 items-center">Order Successful </div>
      <img
        src="https://media.istockphoto.com/id/691856234/vector/flat-round-check-mark-green-icon-button-tick-symbol-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=hXL5nXQ2UJlh4yzs2LyZC4GtctQG0fs-mk30GPPbhbQ="
        alt="tick"
        className="w-[200px] h-20"
      ></img>
      <p>Thankyou for shopping</p>
      <p>Your order has been successfully placed and is now being processed.</p>
      <button className="w-[250px] bg-[#E55329] text-white py-2 rounded text-sm font-medium hover:opacity-90 transition mt-10 flex gap-2 justify-center">
        orders
        <MoveRight />
      </button>
    </div>
  );
}

export default payment;
