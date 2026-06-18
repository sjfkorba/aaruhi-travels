"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Users,
  IndianRupee,
  CheckCircle2,
  Clock3,
  Flame,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

type LeadItem = {
  id: string;
  status?: string;
  createdAt?: any;
  journeyDate?: string;
  finalFare?: number | string;
  quotedAmount?: number | string;
  isHot?: boolean;
  followUpRequired?: boolean;
};

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

function isToday(date: Date | null) {
  if (!date) return false;
  const now = new Date();

  return (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  );
}

function toNumber(value: unknown) {
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const cleaned = value.replace(/[^\d.]/g, "");
    const parsed = Number(cleaned);
    return Number.isNaN(parsed) ? 0 : parsed;
  }
  return 0;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function getLeadPriorityScore(lead: LeadItem) {
  let score = 0;
  const status = normalize(lead.status || "NEW");

  if (status === "NEW") score += 50;
  if (status === "CONTACTED") score += 35;
  if (status === "QUOTED") score += 60;
  if (status === "CONFIRMED") score += 20;
  if (status === "CANCELLED") score -= 100;

  if (lead.isHot) score += 100;
  if (lead.followUpRequired) score += 30;

  if (lead?.createdAt?.seconds) {
    const diffHours =
      (Date.now() - lead.createdAt.seconds * 1000) / (1000 * 60 * 60);

    if (diffHours <= 1) score += 40;
    else if (diffHours <= 6) score += 25;
    else if (diffHours <= 24) score += 10;
  }

  return score;
}

function getCardTheme(type: string) {
  switch (type) {
    case "today":
      return {
        wrap: "from-blue-50 to-white border-blue-100",
        iconBox: "bg-blue-100 text-blue-700",
        badge: "bg-blue-100 text-blue-700",
      };
    case "confirmed":
      return {
        wrap: "from-green-50 to-white border-green-100",
        iconBox: "bg-green-100 text-green-700",
        badge: "bg-green-100 text-green-700",
      };
    case "revenue":
      return {
        wrap: "from-amber-50 to-white border-amber-100",
        iconBox: "bg-amber-100 text-amber-700",
        badge: "bg-amber-100 text-amber-700",
      };
    case "pending":
      return {
        wrap: "from-slate-50 to-white border-slate-200",
        iconBox: "bg-slate-100 text-slate-700",
        badge: "bg-slate-100 text-slate-700",
      };
    case "hot":
      return {
        wrap: "from-rose-50 to-white border-rose-100",
        iconBox: "bg-rose-100 text-rose-700",
        badge: "bg-rose-100 text-rose-700",
      };
    case "conversion":
      return {
        wrap: "from-purple-50 to-white border-purple-100",
        iconBox: "bg-purple-100 text-purple-700",
        badge: "bg-purple-100 text-purple-700",
      };
    default:
      return {
        wrap: "from-white to-white border-slate-200",
        iconBox: "bg-slate-100 text-slate-700",
        badge: "bg-slate-100 text-slate-700",
      };
  }
}

function StatCard({
  title,
  value,
  hint,
  badge,
  icon: Icon,
  theme,
  loading,
}: {
  title: string;
  value: string;
  hint: string;
  badge: string;
  icon: any;
  theme: ReturnType<typeof getCardTheme>;
  loading: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border bg-gradient-to-br p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${theme.wrap}`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-900/0 via-slate-900/10 to-slate-900/0" />

      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-slate-500">{title}</p>

          {loading ? (
            <div className="mt-3 h-10 w-28 animate-pulse rounded-xl bg-slate-200" />
          ) : (
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              {value}
            </h2>
          )}

          {loading ? (
            <div className="mt-3 h-5 w-32 animate-pulse rounded-lg bg-slate-200" />
          ) : (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${theme.badge}`}
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
                {badge}
              </span>
              <span className="text-xs text-slate-500">{hint}</span>
            </div>
          )}
        </div>

        <div
          className={`rounded-2xl p-3 shadow-inner transition-transform duration-300 group-hover:scale-105 ${theme.iconBox}`}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default function DashboardCards() {
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [loading, setLoading] = useState(true);

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
        console.error("Dashboard leads fetch error:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const metrics = useMemo(() => {
    const todayLeads = leads.filter((lead) => isToday(getCreatedAtDate(lead)));

    const confirmedLeads = leads.filter(
      (lead) => normalize(lead.status) === "CONFIRMED"
    );

    const pendingLeads = leads.filter((lead) => {
      const status = normalize(lead.status || "NEW");
      return status === "NEW" || status === "CONTACTED" || status === "QUOTED";
    });

    const hotLeads = leads.filter(
      (lead) => getLeadPriorityScore(lead) >= 90
    );

    const totalRevenue = confirmedLeads.reduce((sum, lead) => {
      return sum + toNumber(lead.finalFare || lead.quotedAmount || 0);
    }, 0);

    const todayConfirmed = todayLeads.filter(
      (lead) => normalize(lead.status) === "CONFIRMED"
    ).length;

    const todayRevenue = todayLeads
      .filter((lead) => normalize(lead.status) === "CONFIRMED")
      .reduce((sum, lead) => sum + toNumber(lead.finalFare || lead.quotedAmount || 0), 0);

    const conversionRate =
      leads.length > 0 ? (confirmedLeads.length / leads.length) * 100 : 0;

    return {
      totalLeads: leads.length,
      todayLeads: todayLeads.length,
      confirmed: confirmedLeads.length,
      pending: pendingLeads.length,
      hot: hotLeads.length,
      revenue: totalRevenue,
      todayConfirmed,
      todayRevenue,
      conversionRate,
    };
  }, [leads]);

  const cards = [
    {
      key: "today",
      title: "Today's Leads",
      value: String(metrics.todayLeads),
      hint: `${metrics.totalLeads} total enquiries`,
      badge: `${metrics.todayConfirmed} confirmed today`,
      icon: Users,
      theme: getCardTheme("today"),
    },
    {
      key: "confirmed",
      title: "Confirmed",
      value: String(metrics.confirmed),
      hint: "All converted bookings",
      badge: `${metrics.conversionRate.toFixed(1)}% conversion`,
      icon: CheckCircle2,
      theme: getCardTheme("confirmed"),
    },
    {
      key: "revenue",
      title: "Revenue",
      value: formatCurrency(metrics.revenue),
      hint: `${formatCurrency(metrics.todayRevenue)} today`,
      badge: "Confirmed fare total",
      icon: IndianRupee,
      theme: getCardTheme("revenue"),
    },
    {
      key: "pending",
      title: "Pending",
      value: String(metrics.pending),
      hint: "Need follow-up",
      badge: "New + Contacted + Quoted",
      icon: Clock3,
      theme: getCardTheme("pending"),
    },
    {
      key: "hot",
      title: "Hot Leads",
      value: String(metrics.hot),
      hint: "Priority attention needed",
      badge: "Fast response recommended",
      icon: Flame,
      theme: getCardTheme("hot"),
    },
    {
      key: "conversion",
      title: "Conversion Rate",
      value: `${metrics.conversionRate.toFixed(1)}%`,
      hint: "Confirmed vs total leads",
      badge: `${metrics.confirmed}/${metrics.totalLeads || 0} won`,
      icon: TrendingUp,
      theme: getCardTheme("conversion"),
    },
  ];

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            CRM Overview
          </h2>
          <p className="text-sm text-slate-500">
            Realtime business metrics from your live enquiries
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm">
          Auto-refreshing from Firestore
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
        {cards.map((card) => (
          <StatCard
            key={card.key}
            title={card.title}
            value={card.value}
            hint={card.hint}
            badge={card.badge}
            icon={card.icon}
            theme={card.theme}
            loading={loading}
          />
        ))}
      </div>
    </section>
  );
}