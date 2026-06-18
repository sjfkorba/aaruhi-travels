"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { observeAuth } from "@/lib/auth";

import type { User } from "firebase/auth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const unsubscribe =
      observeAuth(
        (user: User | null) => {
          const isLoginPage =
            pathname ===
            "/admin/login";

          if (
            !user &&
            !isLoginPage
          ) {
            router.replace(
              "/admin/login"
            );
          }

          if (
            user &&
            isLoginPage
          ) {
            router.replace(
              "/admin"
            );
          }

          setLoading(false);
        }
      );

    return () =>
      unsubscribe();
  }, [router, pathname]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">

        <div className="text-center">

          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />

          <p className="mt-4">
            Loading...
          </p>

        </div>

      </div>
    );
  }

  return <>{children}</>;
}