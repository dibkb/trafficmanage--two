"use client";
import Barchart from "@/components/charts/Barchart";
import Piechart from "@/components/charts/Piechart";
import { GiDeathSkull } from "react-icons/gi";
import { AiFillWarning } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Link from "next/link";
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
        <main className="ml-9 mb-9 grid grid-cols-3 gap-3">
          <div className="bg-slate-200 px-4 py-2 rounded-md hover:bg-slate-400 group cursor-pointer">
            <span className="flex w-min rounded-full p-2 bg-slate-400">
              <GiDeathSkull
                className={
                  "h-5 w-5 text-neutral-900 group-hover:text-white group-hover:animate-pulse"
                }
              />
            </span>
            <span className="flex justify-between items-center mt-3">
              <p className="text-xs group-hover:text-white text-neutral-500">
                Total Violations
              </p>
              <p className="text-neutral-900 group-hover:text-white font-semibold text-2xl">
                4
              </p>
            </span>
          </div>
          <div className="bg-slate-200 px-4 py-2 rounded-md hover:bg-slate-400 group cursor-pointer">
            <span className="flex w-min rounded-full p-2 bg-slate-400">
              <TiTick
                className={
                  "h-5 w-5 text-neutral-900 group-hover:text-white group-hover:animate-pulse"
                }
              />
            </span>
            <span className="flex justify-between items-center mt-3">
              <p className="text-xs group-hover:text-white text-neutral-500">
                Chalans Paid
              </p>
              <p className="text-neutral-900 group-hover:text-white font-semibold text-2xl">
                0
              </p>
            </span>
          </div>
          <Link
            href={"/chalans"}
            className="bg-slate-200 px-4 py-2 rounded-md hover:bg-slate-400 group cursor-pointer"
          >
            <span className="flex w-min rounded-full p-2 bg-slate-400">
              <AiFillWarning
                className={
                  "h-5 w-5 text-neutral-900 group-hover:text-white group-hover:animate-pulse"
                }
              />
            </span>
            <span className="flex justify-between items-center mt-3">
              <p className="text-xs group-hover:text-white text-neutral-500">
                Chalans to be paid
              </p>
              <p className="text-neutral-900 group-hover:text-white font-semibold text-2xl">
                2
              </p>
            </span>
          </Link>
        </main>
      </div>
    </main>
  );
}
