"use client";
// import { StripeButton } from "@/components/stripe/payments";
import { signOut, useSession } from "next-auth/react";
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
    if (status === "unauthenticated") router.push("login");
  }, [status, router]);

  return (
    <section className="">
      <main className="relative border border-transparent">
        <nav className="fixed right-[80px] my-3 bg-white z-50 mb-12">
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
        </nav>
        <div className="mt-20">{children}</div>
      </main>
    </section>
  );
}
