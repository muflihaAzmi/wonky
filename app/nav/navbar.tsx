import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Public_Sans } from 'next/font/google';
import { Search } from "lucide-react";


const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['300','400','500','600','700'],
});


function Navbar() {
  return (
    <div className={` flex flex-col ${publicSans.className} gap-2 px-24 bg-[#F8EDE7]`}>
      <div className="flex justify-between items-center border-b  border-[#CCB6EC78] py-[12px]">
        <p className="text-[#370B74] text-[14px] leading-5 font-normal">
          Welcome to Wonky online eCommerce store
        </p>
        <div className="flex gap-3 items-center">
          <span className="text-[#370B74] text-[14px] leading-5 font-normal">
            Follow us:
          </span>
          <Link href="">
            <Image
              src="/Facebook.svg"
              alt="facebook"
              width={16}
              height={16}
            ></Image>
          </Link>
          <Link href="">
            {" "}
            <Image
              src="/Instagram.svg"
              alt="insta"
              width={16}
              height={16}
            ></Image>
          </Link>

          <Link href="">
            {" "}
            <Image
              src="/Youtube.svg"
              alt="youtube"
              width={16}
              height={16}
            ></Image>
          </Link>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Image src="/wonky.svg" alt="wonky" width={99} height={52}></Image>
        <div className="bg-white w-[395px] h-[40px] items-center flex rounded px-2 gap-2 text-gray-500">
                <Search />

          <input type="text" placeholder="Search Here" className=""></input>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
