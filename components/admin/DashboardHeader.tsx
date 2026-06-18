"use client";

import { logoutAdmin } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function DashboardHeader() {
  const router = useRouter();

  const handleLogout =
    async () => {
      await logoutAdmin();

      router.replace(
        "/admin/login"
      );
    };

  return (
    <header className="sticky top-0 z-50 border-b bg-white">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        <div>

          <h1 className="text-2xl font-bold text-primary">
            Aaruhi CRM
          </h1>

          <p className="text-sm text-slate-500">
            Travel Business Dashboard
          </p>

        </div>

        <button
          onClick={handleLogout}
          className="rounded-xl bg-red-600 px-4 py-2 text-white"
        >
          Logout
        </button>

      </div>

    </header>
  );
}