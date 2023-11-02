"use client";
import Barchart from "@/components/charts/Barchart";
import { signOut } from "next-auth/react";
import Image from "next/image";
export default function Dashboard() {
  return (
    <main className="">
      <div className="w-full h-96">
        <Barchart />
      </div>
    </main>
  );
}
