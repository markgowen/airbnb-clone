import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div className="text-2xl text-rose-500">Hello Airbnb</div>;
}
