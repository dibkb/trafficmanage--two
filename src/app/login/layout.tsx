"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  console.log(session);
  return (
    <section className="container mx-auto">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="py-4 flex items-center gap-4">
        <Image
          src="https://iiitl.ac.in/wp-content/uploads/2019/10/Final_Logo_IIITL.png"
          alt="iiitl logo"
          width={60}
          height={60}
        />
        <p className="text-sm uppercase">Traffic Management System</p>
      </nav>
      {children}
    </section>
  );
}
