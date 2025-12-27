import Image from "next/image";
import Hero from "./hero/page";
import { Delius } from "next/font/google";
import Deals from "./deals/page";

const delius = Delius({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-delius",
});

export default function Home() {
  return (
    <div className={`${delius.className}`}>
      <Hero/>
     <Deals/>
    
    </div>
  );
}
