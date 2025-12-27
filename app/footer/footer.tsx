import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <div className="">
      <div className="bg-[#F8EDE7] flex justify-center gap-20 h-16 text-[#6D6D6D] text-[16px] items-center">
        <div className="flex gap-2 items-center">
          <img src="/delivery.png" className="w-5 h-5"></img>
          <p>Easy Return</p>

        </div>
        <div className="flex gap-2 items-center">
          <img src="/policy dress.png"></img>
        <p>Book your product</p>

        </div>
      </div>
      <div className="bg-[#A93717] h-[300px] px-24 py-10 ">
        <div
          className=" flex justify-between  border-b border-white py-5"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          <div className="text-white w-[300px] text-[18px]">
            <span>About Wonky</span>
            <p className="mt-2 text-[16px]">
              Your one-stop destination for quality kids&apos; clothing. We
              offer a wide range of dresses, casual wear, and party wear for
              your little ones.
            </p>
          </div>
          <div className="text-white flex flex-col gap-2 text-[16px]">
            <span className="text-[18px]">Quik link</span>
            <Link href="">home</Link>
            <Link href="">Boys Collection</Link>

            <Link href="">girls Collection</Link>
            <Link href="">Track orders</Link>
          </div>
          <div className="text-white flex flex-col gap-2 text-[18px]">
            <span>Shipping policy</span>
            <span className="mt-2">return policy</span>
            <span>return policy</span>
          </div>
          <div className="text-white text-[18px] w-[250px] flex flex-col gap-2">
            <span>Follow us</span>
            <div className="flex gap-2  text-[16px]">
              <Facebook />
              <Instagram />
              <Twitter />
              <Youtube />
            </div>
            <p className="text-[16px] ">
              Stay connected for exclusive offers and updates!
            </p>
          </div>
        </div>
        <p className="mt-10 text-white text-center">
          © 2025 Wonky. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
