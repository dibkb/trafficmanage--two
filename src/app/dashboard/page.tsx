"use client";
import Barchart from "@/components/charts/Barchart";
import Piechart from "@/components/charts/Piechart";

export default function Dashboard() {
  return (
    <main className="">
      <div className="w-full h-[400px]">
        <h1 className="mb-4 text-center text-xl font-semibold text-neutral-700">
          E-chalan Activity
        </h1>
        <Barchart />
      </div>
      <div className="w-full h-[400px] mt-12">
        <h1 className="mb-4 text-center text-xl font-semibold text-neutral-700">
          Violation Distribution
        </h1>
        <Piechart />
      </div>
      <div className="w-full mt-12">
        <h1 className="mb-4 text-center text-xl font-semibold text-neutral-700">
          Violations
        </h1>
        <main className="ml-9 mb-9">
          <span className="bg-slate-200 px-4 py-2 rounded-md">343</span>
        </main>
      </div>
    </main>
  );
}
