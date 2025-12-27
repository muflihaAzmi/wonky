import React from "react";
import Image from "next/image";
import ProductCard from "./items";

function Hero() {
  return (
    <div>
      <div className="bg-white w-full px-24 min-h-screen">
        <Image
          src="/hero.svg"
          alt="hero"
          height={526}
          width={0}
          className="pt-2 w-full"
        />
      </div>
      <div className="items-center flex flex-col gap-4">
        <div className="bg-[#F8EDE7] flex items-center p-2 w-[200px]">
          <p className="text-[#E55329]">Explore our new Arraivals</p>
        </div>
        <ProductCard />
      </div>

      <div className="w-full h-full mt-2">
        {" "}
        <Image
          src="/Frame.svg"
          alt="hero"
          width={0}
          height={562}
          className="w-full"
        ></Image>
      </div>
  
    </div>
  );
}

export default Hero;
