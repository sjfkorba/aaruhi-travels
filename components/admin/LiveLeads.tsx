"use client";

import {
  arrayUnion,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import {
  Phone,
  MessageCircle,
  Search,
  ChevronDown,
  ChevronUp,
  Flame,
  CheckCircle2,
  XCircle,
  PhoneCall,
  BadgeIndianRupee,
  SlidersHorizontal,
  X,
  Clock3,
  CalendarDays,
} from "lucide-react";
import { db } from "@/lib/firebase";

interface LiveLeadsProps {
  onSelectLead: (lead: any) => void;
}

type Density = "compact" | "comfortable" | "expanded";
type SortOption =
  | "newest"
  | "oldest"
  | "priorityDesc"
  | "journeyDateAsc"
  | "journeyDateDesc"
  | "pickupTimeAsc"
  | "statusAsc";

const STATUS_TRANSITIONS: Record<string, string[]> = {
  NEW: ["CONTACTED", "CANCELLED"],
  CONTACTED: ["QUOTED", "CONFIRMED", "CANCELLED"],
  QUOTED: ["CONFIRMED", "CANCELLED"],
  CONFIRMED: [],
  CANCELLED: [],
};

function normalize(value?: string) {
  return (value || "").toString().trim().toUpperCase();
}

function getSafeDate(value: any): Date | null {
  if (!value) return null;

  if (typeof value?.toDate === "function") {
    const d = value.toDate();
    return Number.isNaN(d.getTime()) ? null : d;
  }

  if (typeof value?.seconds === "number") {
    const d = new Date(value.seconds * 1000);
    return Number.isNaN(d.getTime()) ? null : d;
  }

  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}

function formatIndianDate(dateString?: string) {
  if (!dateString) return "N/A";
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return "N/A";

  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatIndianTime(timeString?: string) {
  if (!timeString || !timeString.includes(":")) return "N/A";

  const [hours, minutes] = timeString.split(":");
  const date = new Date();
  date.setHours(Number(hours));
  date.setMinutes(Number(minutes));
  date.setSeconds(0);
  date.setMilliseconds(0);

  return date.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function formatCreatedAtIndian(value: any) {
  const d = getSafeDate(value);
  if (!d) return "N/A";

  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function formatRelativeCreatedAt(value: any) {
  const d = getSafeDate(value);
  if (!d) return "N/A";

  const diffMs = d.getTime() - Date.now();
  const diffSeconds = Math.round(diffMs / 1000);
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const absSeconds = Math.abs(diffSeconds);

  if (absSeconds < 60) return rtf.format(diffSeconds, "second");

  const diffMinutes = Math.round(diffSeconds / 60);
  if (Math.abs(diffMinutes) < 60) return rtf.format(diffMinutes, "minute");

  const diffHours = Math.round(diffMinutes / 60);
  if (Math.abs(diffHours) < 24) return rtf.format(diffHours, "hour");

  const diffDays = Math.round(diffHours / 24);
  if (Math.abs(diffDays) < 30) return rtf.format(diffDays, "day");

  const diffMonths = Math.round(diffDays / 30);
  if (Math.abs(diffMonths) < 12) return rtf.format(diffMonths, "month");

  const diffYears = Math.round(diffMonths / 12);
  return rtf.format(diffYears, "year");
}

function getCreatedAtValue(lead: any) {
  const d = getSafeDate(lead?.createdAt);
  return d ? d.getTime() : 0;
}

function getJourneyDateValue(lead: any) {
  const parsed = new Date(lead?.journeyDate || 0).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
}

function getJourneyTimeValue(lead: any) {
  if (!lead?.journeyTime || !lead.journeyTime.includes(":")) return 0;
  const [h, m] = lead.journeyTime.split(":").map(Number);
  return h * 60 + m;
}

function getLeadPriorityScore(lead: any) {
  let score = 0;
  const status = normalize(lead?.status || "NEW");

  if (status === "NEW") score += 50;
  if (status === "CONTACTED") score += 35;
  if (status === "QUOTED") score += 60;
  if (status === "CONFIRMED") score += 20;
  if (status === "CANCELLED") score -= 100;

  if (lead?.isHot) score += 100;
  if (lead?.followUpRequired) score += 30;

  const createdAtMs = getCreatedAtValue(lead);
  if (createdAtMs) {
    const diffHours = (Date.now() - createdAtMs) / (1000 * 60 * 60);

    if (diffHours <= 1) score += 40;
    else if (diffHours <= 6) score += 25;
    else if (diffHours <= 24) score += 10;
  }

  if ((lead?.tripType || "").toLowerCase().includes("airport")) score += 10;
  if ((lead?.vehicleType || "").toLowerCase().includes("innova")) score += 8;

  return score;
}

function getStatusClass(status?: string) {
  switch (normalize(status || "NEW")) {
    case "NEW":
      return "border-lime-300 bg-lime-100 text-lime-800 ring-1 ring-lime-200";
    case "CONTACTED":
      return "border-orange-200 bg-orange-100 text-orange-700";
    case "QUOTED":
      return "border-purple-200 bg-purple-100 text-purple-700";
    case "CONFIRMED":
      return "border-green-200 bg-green-100 text-green-700";
    case "CANCELLED":
      return "border-red-200 bg-red-100 text-red-700";
    default:
      return "border-sky-200 bg-sky-100 text-sky-700";
  }
}

function getAllowedNextStatuses(currentStatus?: string) {
  const normalized = normalize(currentStatus || "NEW");
  return STATUS_TRANSITIONS[normalized] || [];
}

function canMoveToStatus(currentStatus: string, nextStatus: string) {
  const current = normalize(currentStatus || "NEW");
  const next = normalize(nextStatus);
  return STATUS_TRANSITIONS[current]?.includes(next) ?? false;
}

function validateStatusCriteria(lead: any, nextStatus: string) {
  const normalizedNext = normalize(nextStatus);

  if (normalizedNext === "QUOTED" && !lead?.quotedAmount) {
    return "Quoted amount required before marking QUOTED.";
  }

  if (normalizedNext === "CONFIRMED" && !lead?.finalFare) {
    return "Final fare required before marking CONFIRMED.";
  }

  return null;
}

function densityCardClass(density: Density) {
  switch (density) {
    case "compact":
      return "rounded-2xl p-3";
    case "expanded":
      return "rounded-[26px] p-5";
    default:
      return "rounded-3xl p-4";
  }
}

function getClampClass(density: Density, expanded: boolean) {
  if (expanded || density === "expanded") return "line-clamp-none";
  if (density === "compact") return "line-clamp-1";
  return "line-clamp-2";
}

export default function LiveLeads({ onSelectLead }: LiveLeadsProps) {
  const [rawLeads, setRawLeads] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [tripTypeFilter, setTripTypeFilter] = useState("all");
  const [vehicleFilter, setVehicleFilter] = useState("all");
  const [agencyFilter, setAgencyFilter] = useState("all");
  const [hotOnly, setHotOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [density, setDensity] = useState<Density>("comfortable");
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>(
    {}
  );
  const [updatingLeadId, setUpdatingLeadId] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "enquires"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((docItem) => ({
        id: docItem.id,
        ...docItem.data(),
      }));

      setRawLeads(data);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsFilterOpen(false);
    }

    if (isFilterOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isFilterOpen]);

  const filterOptions = useMemo(() => {
    const statuses = Array.from(
      new Set(rawLeads.map((item) => normalize(item.status || "NEW")).filter(Boolean))
    );

    const tripTypes = Array.from(
      new Set(rawLeads.map((item) => item.tripType).filter(Boolean))
    );

    const vehicles = Array.from(
      new Set(rawLeads.map((item) => item.vehicleType).filter(Boolean))
    );

    const agencies = Array.from(
      new Set(rawLeads.map((item) => item.agencyName).filter(Boolean))
    );

    return { statuses, tripTypes, vehicles, agencies };
  }, [rawLeads]);

  const stats = useMemo(() => {
    return {
      total: rawLeads.length,
      newCount: rawLeads.filter(
        (l) => normalize(l.status || "NEW") === "NEW"
      ).length,
      contacted: rawLeads.filter(
        (l) => normalize(l.status) === "CONTACTED"
      ).length,
      quoted: rawLeads.filter((l) => normalize(l.status) === "QUOTED").length,
      confirmed: rawLeads.filter(
        (l) => normalize(l.status) === "CONFIRMED"
      ).length,
      hot: rawLeads.filter((l) => getLeadPriorityScore(l) >= 90).length,
    };
  }, [rawLeads]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (statusFilter !== "all") count++;
    if (tripTypeFilter !== "all") count++;
    if (vehicleFilter !== "all") count++;
    if (agencyFilter !== "all") count++;
    if (hotOnly) count++;
    if (sortBy !== "newest") count++;
    if (density !== "comfortable") count++;
    return count;
  }, [
    statusFilter,
    tripTypeFilter,
    vehicleFilter,
    agencyFilter,
    hotOnly,
    sortBy,
    density,
  ]);

  const leads = useMemo(() => {
    let data = [...rawLeads];

    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter((lead) =>
        [
          lead.customerName,
          lead.mobile,
          lead.bookingId,
          lead.pickup,
          lead.drop,
          lead.vehicleType,
          lead.tripType,
          lead.agencyName,
        ]
          .filter(Boolean)
          .some((field) => field.toString().toLowerCase().includes(q))
      );
    }

    if (statusFilter !== "all") {
      data = data.filter(
        (lead) => normalize(lead.status || "NEW") === normalize(statusFilter)
      );
    }

    if (tripTypeFilter !== "all") {
      data = data.filter(
        (lead) =>
          (lead.tripType || "").toLowerCase() === tripTypeFilter.toLowerCase()
      );
    }

    if (vehicleFilter !== "all") {
      data = data.filter(
        (lead) =>
          (lead.vehicleType || "").toLowerCase() === vehicleFilter.toLowerCase()
      );
    }

    if (agencyFilter !== "all") {
      data = data.filter(
        (lead) =>
          (lead.agencyName || "").toLowerCase() === agencyFilter.toLowerCase()
      );
    }

    if (hotOnly) {
      data = data.filter((lead) => getLeadPriorityScore(lead) >= 90);
    }

    data.sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return getCreatedAtValue(a) - getCreatedAtValue(b);
        case "priorityDesc":
          return getLeadPriorityScore(b) - getLeadPriorityScore(a);
        case "journeyDateAsc":
          return getJourneyDateValue(a) - getJourneyDateValue(b);
        case "journeyDateDesc":
          return getJourneyDateValue(b) - getJourneyDateValue(a);
        case "pickupTimeAsc":
          return getJourneyTimeValue(a) - getJourneyTimeValue(b);
        case "statusAsc":
          return normalize(a.status || "NEW").localeCompare(
            normalize(b.status || "NEW")
          );
        case "newest":
        default:
          return getCreatedAtValue(b) - getCreatedAtValue(a);
      }
    });

    return data;
  }, [
    rawLeads,
    search,
    statusFilter,
    tripTypeFilter,
    vehicleFilter,
    agencyFilter,
    hotOnly,
    sortBy,
  ]);

  function clearFilters() {
    setStatusFilter("all");
    setTripTypeFilter("all");
    setVehicleFilter("all");
    setAgencyFilter("all");
    setHotOnly(false);
    setSortBy("newest");
    setDensity("comfortable");
  }

  function toggleCardExpand(id: string) {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  async function updateLeadStatus(
    e: React.MouseEvent,
    lead: any,
    nextStatus: string
  ) {
    e.stopPropagation();

    const currentStatus = normalize(lead?.status || "NEW");
    const targetStatus = normalize(nextStatus);

    if (!canMoveToStatus(currentStatus, targetStatus)) {
      alert(`Invalid status change: ${currentStatus} -> ${targetStatus}`);
      return;
    }

    const criteriaError = validateStatusCriteria(lead, targetStatus);
    if (criteriaError) {
      alert(criteriaError);
      return;
    }

    try {
      setUpdatingLeadId(lead.id);

      await updateDoc(doc(db, "enquires", lead.id), {
        status: targetStatus,
        statusUpdatedAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        statusHistory: arrayUnion({
          from: currentStatus,
          to: targetStatus,
          at: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error("Status update failed:", error);
      alert("Status update failed");
    } finally {
      setUpdatingLeadId(null);
    }
  }

  return (
    <>
      <div className="rounded-[30px] border border-slate-200 bg-white shadow-xl">
        <div className="sticky top-0 z-20 rounded-t-[30px] border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="p-5 md:p-6">
            <div className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Live Enquiries
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Realtime CRM lead board with popup filters
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                  Total: {stats.total}
                </span>
                <span className="rounded-full bg-lime-100 px-3 py-1.5 text-sm font-medium text-lime-800">
                  New: {stats.newCount}
                </span>
                <span className="rounded-full bg-orange-100 px-3 py-1.5 text-sm font-medium text-orange-700">
                  Contacted: {stats.contacted}
                </span>
                <span className="rounded-full bg-purple-100 px-3 py-1.5 text-sm font-medium text-purple-700">
                  Quoted: {stats.quoted}
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1.5 text-sm font-medium text-green-700">
                  Confirmed: {stats.confirmed}
                </span>
                <span className="rounded-full bg-rose-100 px-3 py-1.5 text-sm font-medium text-rose-700">
                  Hot: {stats.hot}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search name, mobile, booking ID, route..."
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:bg-white"
                />
              </div>

              <button
                type="button"
                onClick={() => setIsFilterOpen(true)}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <SlidersHorizontal size={18} />
                Filters & Sort
                {activeFilterCount > 0 && (
                  <span className="rounded-full bg-slate-900 px-2 py-0.5 text-xs text-white">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {statusFilter !== "all" && (
                <button
                  onClick={() => setStatusFilter("all")}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  Status: {statusFilter} ×
                </button>
              )}

              {tripTypeFilter !== "all" && (
                <button
                  onClick={() => setTripTypeFilter("all")}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  Trip: {tripTypeFilter} ×
                </button>
              )}

              {vehicleFilter !== "all" && (
                <button
                  onClick={() => setVehicleFilter("all")}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  Vehicle: {vehicleFilter} ×
                </button>
              )}

              {agencyFilter !== "all" && (
                <button
                  onClick={() => setAgencyFilter("all")}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  Agency: {agencyFilter} ×
                </button>
              )}

              {hotOnly && (
                <button
                  onClick={() => setHotOnly(false)}
                  className="rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700"
                >
                  Hot only ×
                </button>
              )}

              {sortBy !== "newest" && (
                <button
                  onClick={() => setSortBy("newest")}
                  className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700"
                >
                  Sort: {sortBy} ×
                </button>
              )}

              {density !== "comfortable" && (
                <button
                  onClick={() => setDensity("comfortable")}
                  className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700"
                >
                  Density: {density} ×
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="max-h-[72vh] overflow-y-auto p-5 md:p-6">
          {leads.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
              No enquiries matched your filters
            </div>
          ) : (
            <div className="space-y-4">
              {leads.map((lead) => {
                const priority = getLeadPriorityScore(lead);
                const currentStatus = normalize(lead.status || "NEW");
                const allowedStatuses = getAllowedNextStatuses(currentStatus);
                const isExpanded = !!expandedCards[lead.id];
                const routeClamp = getClampClass(density, isExpanded);

                return (
                  <div
                    key={lead.id}
                    onClick={() => onSelectLead(lead)}
                    className={`cursor-pointer select-text border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg ${densityCardClass(
                      density
                    )}`}
                  >
                    <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="cursor-text text-lg font-bold text-slate-900">
                            {lead.customerName || "Unnamed Customer"}
                          </h3>

                          <span
                            className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${getStatusClass(
                              currentStatus
                            )}`}
                          >
                            {currentStatus}
                          </span>

                          {currentStatus === "NEW" && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-lime-50 px-2.5 py-1 text-[11px] font-medium text-lime-700">
                              <span className="h-2 w-2 animate-pulse rounded-full bg-lime-500" />
                              Fresh lead
                            </span>
                          )}

                          {priority >= 90 && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-2.5 py-1 text-[11px] font-medium text-rose-700">
                              <Flame size={12} />
                              Hot
                            </span>
                          )}
                        </div>

                        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                          <p className="cursor-text">{lead.mobile || "N/A"}</p>
                          <p className="cursor-text">
                            Booking ID: {lead.bookingId || "N/A"}
                          </p>
                          <p className="cursor-text">
                            Agency: {lead.agencyName || "Aaruhi Travels"}
                          </p>
                        </div>

                        <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
                          <div className="rounded-2xl bg-slate-50 p-3">
                            <div className="mb-1 flex items-center gap-2 text-xs text-slate-500">
                              <CalendarDays size={14} />
                              Created On
                            </div>
                            <p className="cursor-text font-semibold text-slate-900">
                              {formatCreatedAtIndian(lead.createdAt)}
                            </p>
                          </div>

                          <div className="rounded-2xl bg-slate-50 p-3">
                            <div className="mb-1 flex items-center gap-2 text-xs text-slate-500">
                              <Clock3 size={14} />
                              Generated
                            </div>
                            <p className="cursor-text font-semibold text-slate-900">
                              {formatRelativeCreatedAt(lead.createdAt)}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 rounded-2xl bg-slate-50 p-3">
                          <p
                            className={`cursor-text font-medium text-slate-800 ${routeClamp}`}
                          >
                            📍 {lead.pickup || "N/A"}
                          </p>
                          <p className="my-1 pl-2 text-slate-400">↓</p>
                          <p
                            className={`cursor-text font-medium text-slate-800 ${routeClamp}`}
                          >
                            📍 {lead.drop || "N/A"}
                          </p>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
                          <div className="rounded-2xl bg-blue-50 p-3">
                            <p className="text-xs text-slate-500">
                              Journey Date
                            </p>
                            <p className="cursor-text font-semibold text-slate-900">
                              {formatIndianDate(lead.journeyDate)}
                            </p>
                          </div>

                          <div className="rounded-2xl bg-green-50 p-3">
                            <p className="text-xs text-slate-500">
                              Pickup Time
                            </p>
                            <p className="cursor-text font-semibold text-slate-900">
                              {formatIndianTime(lead.journeyTime)}
                            </p>
                          </div>

                          <div className="rounded-2xl bg-orange-50 p-3">
                            <p className="text-xs text-slate-500">Vehicle</p>
                            <p className="cursor-text font-semibold text-slate-900">
                              {lead.vehicleType || "N/A"}
                            </p>
                          </div>

                          <div className="rounded-2xl bg-purple-50 p-3">
                            <p className="text-xs text-slate-500">Trip Type</p>
                            <p className="cursor-text font-semibold text-slate-900">
                              {lead.tripType || "N/A"}
                            </p>
                          </div>
                        </div>

                        {(isExpanded || density === "expanded") && (
                          <div className="mt-4 grid gap-3 md:grid-cols-2">
                            <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                              <p className="cursor-text">
                                <span className="font-semibold text-slate-900">
                                  Priority Score:
                                </span>{" "}
                                {priority}
                              </p>
                              <p className="mt-1 cursor-text">
                                <span className="font-semibold text-slate-900">
                                  Current Status:
                                </span>{" "}
                                {currentStatus}
                              </p>
                              <p className="mt-1 cursor-text">
                                <span className="font-semibold text-slate-900">
                                  Final Fare:
                                </span>{" "}
                                {lead.finalFare ?? "N/A"}
                              </p>
                              <p className="mt-1 cursor-text">
                                <span className="font-semibold text-slate-900">
                                  Quoted Amount:
                                </span>{" "}
                                {lead.quotedAmount ?? "N/A"}
                              </p>
                            </div>

                            <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                              <p className="cursor-text">
                                <span className="font-semibold text-slate-900">
                                  Notes:
                                </span>{" "}
                                {lead.notes || "No notes added"}
                              </p>
                              <p className="mt-2 cursor-text">
                                <span className="font-semibold text-slate-900">
                                  Last Updated:
                                </span>{" "}
                                {lead.updatedAt
                                  ? formatCreatedAtIndian(lead.updatedAt)
                                  : "N/A"}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div
                        className="select-none flex flex-row flex-wrap gap-2 xl:w-[240px] xl:flex-col"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={`tel:${lead.mobile}`}
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700"
                        >
                          <Phone size={16} />
                          Call
                        </a>

                        <a
                          href={`https://wa.me/91${lead.mobile}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-green-600 px-4 text-sm font-medium text-white hover:bg-green-700"
                        >
                          <MessageCircle size={16} />
                          WhatsApp
                        </a>

                        {allowedStatuses.length > 0 ? (
                          allowedStatuses.map((nextStatus) => (
                            <button
                              key={nextStatus}
                              type="button"
                              disabled={updatingLeadId === lead.id}
                              onClick={(e) =>
                                updateLeadStatus(e, lead, nextStatus)
                              }
                              className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                              {nextStatus === "CONTACTED" && (
                                <PhoneCall size={16} />
                              )}
                              {nextStatus === "QUOTED" && (
                                <BadgeIndianRupee size={16} />
                              )}
                              {nextStatus === "CONFIRMED" && (
                                <CheckCircle2 size={16} />
                              )}
                              {nextStatus === "CANCELLED" && (
                                <XCircle size={16} />
                              )}
                              Mark {nextStatus}
                            </button>
                          ))
                        ) : (
                          <div className="rounded-2xl bg-slate-100 px-4 py-3 text-center text-sm font-medium text-slate-500">
                            Final status locked
                          </div>
                        )}

                        <button
                          type="button"
                          onClick={() => toggleCardExpand(lead.id)}
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 text-sm font-medium text-slate-700 hover:bg-slate-50"
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp size={16} />
                              Collapse
                            </>
                          ) : (
                            <>
                              <ChevronDown size={16} />
                              Expand
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {isFilterOpen && (
        <div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Filters and sort"
        >
          <div
            className="absolute inset-0 bg-slate-900/40"
            onClick={() => setIsFilterOpen(false)}
          />

          <div className="absolute inset-x-0 bottom-0 h-[88vh] rounded-t-[28px] bg-white p-5 shadow-2xl md:inset-y-0 md:left-auto md:right-0 md:h-full md:w-[420px] md:rounded-none md:rounded-l-[28px]">
            <div className="flex items-start justify-between border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Filters & Sort
                </h3>
                <p className="text-sm text-slate-500">
                  Refine live enquiries quickly
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsFilterOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-5 space-y-5 overflow-y-auto pb-28 md:pb-8">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Sort by
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="priorityDesc">Hot Priority</option>
                  <option value="journeyDateAsc">Journey Date ↑</option>
                  <option value="journeyDateDesc">Journey Date ↓</option>
                  <option value="pickupTimeAsc">Pickup Time</option>
                  <option value="statusAsc">Status A-Z</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Status
                </label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700"
                >
                  <option value="all">All Status</option>
                  {filterOptions.statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Trip Type
                </label>
                <select
                  value={tripTypeFilter}
                  onChange={(e) => setTripTypeFilter(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700"
                >
                  <option value="all">All Trip Types</option>
                  {filterOptions.tripTypes.map((tripType) => (
                    <option key={tripType} value={tripType}>
                      {tripType}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Vehicle
                </label>
                <select
                  value={vehicleFilter}
                  onChange={(e) => setVehicleFilter(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700"
                >
                  <option value="all">All Vehicles</option>
                  {filterOptions.vehicles.map((vehicle) => (
                    <option key={vehicle} value={vehicle}>
                      {vehicle}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Agency
                </label>
                <select
                  value={agencyFilter}
                  onChange={(e) => setAgencyFilter(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700"
                >
                  <option value="all">All Agencies</option>
                  {filterOptions.agencies.map((agency) => (
                    <option key={agency} value={agency}>
                      {agency}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-slate-700">
                  Card Density
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {(["compact", "comfortable", "expanded"] as const).map(
                    (item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setDensity(item)}
                        className={`h-11 rounded-2xl text-sm font-medium capitalize ${
                          density === item
                            ? "bg-slate-900 text-white"
                            : "border border-slate-200 text-slate-700"
                        }`}
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
              </div>

              <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={hotOnly}
                  onChange={(e) => setHotOnly(e.target.checked)}
                />
                Hot leads only
              </label>
            </div>

            <div className="absolute inset-x-0 bottom-0 border-t border-slate-200 bg-white p-4 md:static md:border-0 md:p-0 md:pt-6">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="h-12 flex-1 rounded-2xl border border-slate-200 text-sm font-medium text-slate-700"
                >
                  Clear All
                </button>
                <button
                  type="button"
                  onClick={() => setIsFilterOpen(false)}
                  className="h-12 flex-1 rounded-2xl bg-slate-900 text-sm font-medium text-white"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}