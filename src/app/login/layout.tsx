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
  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated") router.push("dashboard");
  }, [router, status]);
  return (
    <section className="container mx-auto">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="py-4 flex items-center gap-4">
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/2/20/Indian_Institute_of_Information_Technology%2C_Lucknow_Logo.png"
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
