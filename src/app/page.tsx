import Name from "@/components/Name";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex items-center w-[600px] mx-auto justify-center min-h-[600px] flex-col gap-6">
      <h3 className="text-4xl mt-4">Traffic Management System</h3>
      <h3 className="text-2xl my-4">Group 7</h3>
      <Image
        src="https://iiitl.ac.in/wp-content/uploads/2019/10/Final_Logo_IIITL.png"
        alt="iiitl logo"
        width={150}
        height={150}
      />
      <main className="flex items-center flex-col gap-4 w-full">
        <Name name={"Dibas Borborah"} roll={"MSA23019"} />
        <Name name={"Nishant"} roll={"MSA23010"} />
        <Name name={"Nishant"} roll={"MSA23010"} />
        <Name name={"Nishant"} roll={"MSA23010"} />
        <Name name={"Nishant"} roll={"MSA23010"} />
      </main>
      <section className="flex flex-col gap-4 w-60">
        <Link
          href={"/login"}
          className="border flex justify-center px-4 py-2 rounded-md hover:bg-stone-800 hover:text-white"
        >
          Login
        </Link>
        <button className="border px-4 py-2 rounded-md hover:bg-stone-800 hover:text-white">
          Sign up
        </button>
      </section>
    </main>
  );
}
