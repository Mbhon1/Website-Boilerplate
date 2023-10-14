import Image from "next/image";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav/Nav";
import PageTrans from "@/components/PageTrans";
import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
    <p className="mb-32 font-extrabold text-4xl">Welcome</p>
      <Link href="/welcome">
        <p className="font-extrabold text-2xl text-center animate-bounce">Click Me</p>
      </Link>
    </main>
  );
}
