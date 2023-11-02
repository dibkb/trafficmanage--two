"use client";
import Barchart from "@/components/charts/Barchart";
import Piechart from "@/components/charts/Piechart";

export default function Dashboard() {
  return (
    <main className="">
      <div className="w-full h-96">
        <Barchart />
      </div>
      <div className="w-full h-96 border">
        <Piechart />
      </div>
    </main>
  );
}
