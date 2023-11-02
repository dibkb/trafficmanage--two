"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  return (
    <section className="container mx-auto">
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* <nav className="py-4 flex items-center gap-4">
        <Image
          src="https://iiitl.ac.in/wp-content/uploads/2019/10/Final_Logo_IIITL.png"
          alt="iiitl logo"
          width={60}
          height={60}
        />
        <p className="text-sm uppercase">Traffic Management System</p>
        {session?.user?.name}
      </nav> */}
      \
      {session?.user && (
        <div className="flex justify-end items-center gap-3">
          {session?.user?.image && (
            <span className="p-[2px] bg-gradient-to-r from-[#5AC4D7] to-[#F1DE73] rounded-full cursor-pointer hover:bg-gradient-to-r hover:from-[#5AC4D7] hover:to-[#F3AFF2] hidden lg:block">
              <Image
                src={session?.user?.image}
                className="rounded-full"
                alt="profile image"
                width={36}
                height={36}
              />
            </span>
          )}
          {session?.user?.name && (
            <p className="text-xs">{session.user.name}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
