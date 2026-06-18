"use client";

import { logoutAdmin } from "@/lib/auth";
import { useRouter } from "next/navigation";
import {
  LogOut,
  ShieldCheck,
  CalendarDays,
  BellDot,
  Menu,
} from "lucide-react";
import { useState } from "react";

export default function DashboardHeader() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logoutAdmin();
      router.replace("/admin/login");
    } catch (error) {
      console.error("Logout failed:", error);
      setLoading(false);
    }
  };

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-3 py-3 sm:px-4 lg:px-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3 sm:items-center">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <h1 className="truncate text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    KRT GROUP CRM
                  </h1>
                  <p className="text-xs text-slate-500 sm:text-sm">
                    Travel Business Dashboard
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Live
              </div>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50"
              >
                <BellDot className="h-5 w-5" />
              </button>

              <button
                onClick={handleLogout}
                disabled={loading}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-red-600 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <LogOut className="h-4 w-4" />
                {loading ? "Logging out..." : "Logout"}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
                <CalendarDays className="h-4 w-4" />
                {today}
              </div>

              <div className="inline-flex items-center gap-2 rounded-2xl bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Admin Panel
              </div>

              <div className="inline-flex items-center gap-2 rounded-2xl bg-amber-50 px-3 py-2 text-xs font-medium text-amber-700">
                Priority Lead Monitoring
              </div>
            </div>

            <div className="flex items-center gap-2 sm:hidden">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50"
              >
                <BellDot className="h-5 w-5" />
              </button>

              <button
                onClick={handleLogout}
                disabled={loading}
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-2xl bg-red-600 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <LogOut className="h-4 w-4" />
                {loading ? "Logging out..." : "Logout"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}