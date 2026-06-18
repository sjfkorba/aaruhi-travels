"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Users,
  CheckCircle,
  IndianRupee,
  TrendingUp,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

type LeadItem = {
  id: string;
  status?: string;
  createdAt?: any;
  finalFare?: number | string;
  quotedAmount?: number | string;
  profit?: number | string;
};

type RangePreset = "today" | "7d" | "30d" | "month" | "custom";

function normalize(value?: string) {
  return (value || "").toString().trim().toUpperCase();
}

function getCreatedAtDate(lead: LeadItem) {
  if (lead?.createdAt?.seconds) {
    return new Date(lead.createdAt.seconds * 1000);
  }

  const parsed = new Date(lead?.createdAt || "");
  if (!Number.isNaN(parsed.getTime())) return parsed;
  return null;
}

function toNumber(value: unknown) {
  if (typeof value === "number") return value;

  if (typeof value === "string") {
    const cleaned = value.replace(/[^\d.-]/g, "");
    const parsed = Number(cleaned);
    return Number.isNaN(parsed) ? 0 : parsed;
  }

  return 0;
}

function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatInputDate(date: Date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDisplayDate(date: Date) {
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getRangeFromPreset(preset: RangePreset) {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  if (preset === "today") {
    return { start: todayStart, end: todayEnd };
  }

  if (preset === "7d") {
    const start = new Date(todayStart);
    start.setDate(start.getDate() - 6);
    return { start, end: todayEnd };
  }

  if (preset === "30d") {
    const start = new Date(todayStart);
    start.setDate(start.getDate() - 29);
    return { start, end: todayEnd };
  }

  if (preset === "month") {
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    return { start, end };
  }

  return { start: todayStart, end: todayEnd };
}

function getCardStyles(type: string) {
  switch (type) {
    case "leads":
      return {
        card: "border-blue-100 bg-gradient-to-br from-blue-50 via-white to-white",
        iconWrap: "bg-blue-100 text-blue-700",
        badge: "bg-blue-100 text-blue-700",
      };
    case "confirmed":
      return {
        card: "border-green-100 bg-gradient-to-br from-green-50 via-white to-white",
        iconWrap: "bg-green-100 text-green-700",
        badge: "bg-green-100 text-green-700",
      };
    case "revenue":
      return {
        card: "border-amber-100 bg-gradient-to-br from-amber-50 via-white to-white",
        iconWrap: "bg-amber-100 text-amber-700",
        badge: "bg-amber-100 text-amber-700",
      };
    case "profit":
      return {
        card: "border-purple-100 bg-gradient-to-br from-purple-50 via-white to-white",
        iconWrap: "bg-purple-100 text-purple-700",
        badge: "bg-purple-100 text-purple-700",
      };
    default:
      return {
        card: "border-slate-200 bg-white",
        iconWrap: "bg-slate-100 text-slate-700",
        badge: "bg-slate-100 text-slate-700",
      };
  }
}

function StatCard({
  title,
  value,
  subtitle,
  badge,
  icon: Icon,
  styles,
  loading,
}: {
  title: string;
  value: string;
  subtitle: string;
  badge: string;
  icon: any;
  styles: ReturnType<typeof getCardStyles>;
  loading: boolean;
}) {
  return (
    <div
      className={`group rounded-[26px] border p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5 ${styles.card}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-slate-500">{title}</p>

          {loading ? (
            <div className="mt-3 h-9 w-24 animate-pulse rounded-xl bg-slate-200" />
          ) : (
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {value}
            </h2>
          )}

          {loading ? (
            <div className="mt-3 h-5 w-32 animate-pulse rounded-lg bg-slate-200" />
          ) : (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold sm:text-xs ${styles.badge}`}
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
                {badge}
              </span>
              <span className="text-xs text-slate-500">{subtitle}</span>
            </div>
          )}
        </div>

        <div
          className={`rounded-2xl p-3 shadow-inner transition-transform duration-300 group-hover:scale-105 ${styles.iconWrap}`}
        >
          <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
        </div>
      </div>
    </div>
  );
}

export default function StatsCards() {
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [rangePreset, setRangePreset] = useState<RangePreset>("today");

  const initialRange = getRangeFromPreset("today");
  const [fromDate, setFromDate] = useState(formatInputDate(initialRange.start));
  const [toDate, setToDate] = useState(
    formatInputDate(new Date(initialRange.end.getTime() - 1))
  );

  useEffect(() => {
    const q = query(collection(db, "enquires"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map((docItem) => ({
          id: docItem.id,
          ...docItem.data(),
        })) as LeadItem[];

        setLeads(data);
        setLoading(false);
      },
      (error) => {
        console.error("StatsCards Firestore error:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (rangePreset === "custom") return;

    const range = getRangeFromPreset(rangePreset);
    setFromDate(formatInputDate(range.start));
    setToDate(formatInputDate(new Date(range.end.getTime() - 1)));
  }, [rangePreset]);

  const rangeStart = useMemo(() => {
    if (!fromDate) return null;
    return new Date(`${fromDate}T00:00:00`);
  }, [fromDate]);

  const rangeEndExclusive = useMemo(() => {
    if (!toDate) return null;
    const end = new Date(`${toDate}T00:00:00`);
    end.setDate(end.getDate() + 1);
    return end;
  }, [toDate]);

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const createdAt = getCreatedAtDate(lead);
      if (!createdAt || !rangeStart || !rangeEndExclusive) return false;

      return createdAt >= rangeStart && createdAt < rangeEndExclusive;
    });
  }, [leads, rangeStart, rangeEndExclusive]);

  const stats = useMemo(() => {
    const confirmedLeads = filteredLeads.filter(
      (lead) => normalize(lead.status) === "CONFIRMED"
    );

    const totalRevenue = confirmedLeads.reduce((sum, lead) => {
      return sum + toNumber(lead.finalFare || lead.quotedAmount || 0);
    }, 0);

    const totalProfit = confirmedLeads.reduce((sum, lead) => {
      if (lead.profit !== undefined && lead.profit !== null && lead.profit !== "") {
        return sum + toNumber(lead.profit);
      }

      const fare = toNumber(lead.finalFare || lead.quotedAmount || 0);
      return sum + fare * 0.22;
    }, 0);

    return {
      totalLeads: filteredLeads.length,
      confirmed: confirmedLeads.length,
      revenue: totalRevenue,
      profit: totalProfit,
    };
  }, [filteredLeads]);

  const selectedRangeLabel = useMemo(() => {
    if (!rangeStart || !rangeEndExclusive) return "Invalid range";
    const visibleEnd = new Date(rangeEndExclusive.getTime() - 1);

    return `${formatDisplayDate(rangeStart)} - ${formatDisplayDate(visibleEnd)}`;
  }, [rangeStart, rangeEndExclusive]);

  const cards = [
    {
      key: "leads",
      title: "Selected Leads",
      value: String(stats.totalLeads),
      subtitle: "Within selected report range",
      badge: "Live report filter",
      icon: Users,
      styles: getCardStyles("leads"),
    },
    {
      key: "confirmed",
      title: "Confirmed",
      value: String(stats.confirmed),
      subtitle: "Converted bookings",
      badge:
        stats.totalLeads > 0
          ? `${((stats.confirmed / stats.totalLeads) * 100).toFixed(1)}% conversion`
          : "0% conversion",
      icon: CheckCircle,
      styles: getCardStyles("confirmed"),
    },
    {
      key: "revenue",
      title: "Revenue",
      value: formatINR(stats.revenue),
      subtitle: "Indian currency format",
      badge: "Confirmed fare total",
      icon: IndianRupee,
      styles: getCardStyles("revenue"),
    },
    {
      key: "profit",
      title: "Profit",
      value: formatINR(stats.profit),
      subtitle: "Actual or estimated margin",
      badge: "Range-wise profit",
      icon: TrendingUp,
      styles: getCardStyles("profit"),
    },
  ];

  return (
    <section className="space-y-4">
      <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Business Stats
            </h2>
            <p className="text-sm text-slate-500">
              Live CRM summary with date range reporting
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700">
            <CalendarDays className="h-4 w-4" />
            {selectedRangeLabel}
          </div>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              <button
                onClick={() => setRangePreset("today")}
                className={`rounded-2xl px-3 py-2 text-sm font-medium ${
                  rangePreset === "today"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                Today
              </button>

              <button
                onClick={() => setRangePreset("7d")}
                className={`rounded-2xl px-3 py-2 text-sm font-medium ${
                  rangePreset === "7d"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                7 Days
              </button>

              <button
                onClick={() => setRangePreset("30d")}
                className={`rounded-2xl px-3 py-2 text-sm font-medium ${
                  rangePreset === "30d"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                30 Days
              </button>

              <button
                onClick={() => setRangePreset("month")}
                className={`rounded-2xl px-3 py-2 text-sm font-medium ${
                  rangePreset === "month"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                This Month
              </button>

              <button
                onClick={() => setRangePreset("custom")}
                className={`rounded-2xl px-3 py-2 text-sm font-medium ${
                  rangePreset === "custom"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                Custom
              </button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-500">
                From Date
              </label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => {
                  setRangePreset("custom");
                  setFromDate(e.target.value);
                }}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none focus:border-slate-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-slate-500">
                To Date
              </label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => {
                  setRangePreset("custom");
                  setToDate(e.target.value);
                }}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none focus:border-slate-400 focus:bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <StatCard
            key={card.key}
            title={card.title}
            value={card.value}
            subtitle={card.subtitle}
            badge={card.badge}
            icon={card.icon}
            styles={card.styles}
            loading={loading}
          />
        ))}
      </div>
    </section>
  );
}