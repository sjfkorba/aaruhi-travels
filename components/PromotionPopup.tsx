"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  collection,
  getDocs,
  type DocumentData,
  type QueryDocumentSnapshot,
} from "firebase/firestore";
import {
  AlertCircle,
  ArrowRight,
  BadgePercent,
  CarFront,
  CheckCircle2,
  Flame,
  MapPin,
  Tag,
  X,
} from "lucide-react";

import { db } from "@/lib/firebase";

type PopupType = "offer" | "notice";

type PopupRecord = {
  id: string;
  popupType: PopupType;
  isActive: boolean;
  offerAvailable: boolean;
  fromCity?: string;
  toCity?: string;
  offerFare?: number | string;
  strikeFare?: number | string;
  tripType?: string;
  vehicleType?: string;
  noticeTitle?: string;
  noticeMessage?: string;
  buttonText?: string;
  buttonLink?: string;
  startAt?: unknown;
  endAt?: unknown;
  priority: number;
  displayOnce: boolean;
};

function asNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function toDate(value: unknown): Date | null {
  if (!value) return null;

  if (value instanceof Date) return value;

  if (
    typeof value === "object" &&
    value !== null &&
    "toDate" in value &&
    typeof (value as { toDate?: unknown }).toDate === "function"
  ) {
    return (value as { toDate: () => Date }).toDate();
  }

  if (typeof value === "string" || typeof value === "number") {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  return null;
}

function isWithinSchedule(record: PopupRecord, now: Date) {
  const start = toDate(record.startAt);
  const end = toDate(record.endAt);

  if (start && now < start) return false;
  if (end && now > end) return false;

  return true;
}

function routeSlug(from = "", to = "") {
  const slugify = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[,]+/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  return `${slugify(from)}-to-${slugify(to)}`;
}

function normalizeRecord(
  doc: QueryDocumentSnapshot<DocumentData>,
): PopupRecord {
  const data = doc.data();

  // Existing documents without popupType are treated as route offers.
  const popupType: PopupType = data.popupType === "notice" ? "notice" : "offer";

  return {
    id: doc.id,
    popupType,
    isActive: data.isActive === true,
    offerAvailable: data.offerAvailable === true,
    fromCity: typeof data.fromCity === "string" ? data.fromCity : "",
    toCity: typeof data.toCity === "string" ? data.toCity : "",
    offerFare: data.offerFare,
    strikeFare: data.strikeFare,
    tripType: typeof data.tripType === "string" ? data.tripType : "",
    vehicleType: typeof data.vehicleType === "string" ? data.vehicleType : "",
    noticeTitle:
      typeof data.noticeTitle === "string" ? data.noticeTitle : "Important Notice",
    noticeMessage:
      typeof data.noticeMessage === "string" ? data.noticeMessage : "",
    buttonText:
      typeof data.buttonText === "string" ? data.buttonText : "",
    buttonLink: typeof data.buttonLink === "string" ? data.buttonLink : "",
    startAt: data.startAt,
    endAt: data.endAt,
    priority: asNumber(data.priority) ?? 0,
    displayOnce: data.displayOnce === true,
  };
}

function isEligible(record: PopupRecord, now: Date) {
  if (!isWithinSchedule(record, now)) return false;

  if (record.popupType === "notice") {
    return record.isActive && Boolean(record.noticeMessage?.trim());
  }

  // Existing offer documents use offerAvailable.
  return (
    record.offerAvailable &&
    Boolean(record.fromCity?.trim()) &&
    Boolean(record.toCity?.trim())
  );
}

export default function PromotionPopup() {
  const [records, setRecords] = useState<PopupRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadPromotions() {
      try {
        const snapshot = await getDocs(collection(db, "special_offers"));
        const now = new Date();

        const eligible = snapshot.docs
          .map(normalizeRecord)
          .filter((record) => isEligible(record, now))
          .sort((a, b) => b.priority - a.priority);

        if (!isMounted) return;

        setRecords(eligible);

        // Dismissals are kept only in React state.
        // A fresh page load or browser refresh starts the popup flow again.
        setDismissedIds([]);
      } catch (error) {
        console.error("Unable to load Aaruhi promotions:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadPromotions();

    return () => {
      isMounted = false;
    };
  }, []);

  const activeRecord = useMemo(() => {
    if (!records.length) return null;

    return (
      records.find((record) => !dismissedIds.includes(record.id)) ?? null
    );
  }, [records, dismissedIds]);

  useEffect(() => {
    if (!loading && activeRecord) {
      const timer = window.setTimeout(() => setIsOpen(true), 900);
      return () => window.clearTimeout(timer);
    }
    setIsOpen(false);
  }, [loading, activeRecord]);

  function closePopup() {
    if (!activeRecord) return;

    const next = [...dismissedIds, activeRecord.id];
    setDismissedIds(next);

    setIsOpen(false);
  }

  if (loading || !activeRecord || !isOpen) return null;

  const isNotice = activeRecord.popupType === "notice";
  const offerFare = asNumber(activeRecord.offerFare);
  const strikeFare = asNumber(activeRecord.strikeFare);

  const defaultOfferLink =
    `/one-way-taxi/${routeSlug(activeRecord.fromCity, activeRecord.toCity)}`;

  const actionLink =
    activeRecord.buttonLink?.trim() ||
    (isNotice ? "/#booking-form" : defaultOfferLink);

  const title = isNotice
    ? activeRecord.noticeTitle || "Important Notice"
    : "Special Route Offer";

  const message = isNotice
    ? activeRecord.noticeMessage
    : `Book your ${activeRecord.tripType || "taxi"} journey from ${
        activeRecord.fromCity
      } to ${activeRecord.toCity} with Aaruhi Travels.`;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-slate-950/80 px-3 py-4 backdrop-blur-sm sm:px-5 sm:py-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePopup();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="aruhi-popup-title"
        className={`relative my-auto w-full max-w-[430px] overflow-hidden rounded-[24px] border border-white/30 shadow-[0_24px_80px_rgba(0,0,0,0.5)] ${
          isNotice
            ? "bg-gradient-to-br from-[#5b21b6] via-[#7c3aed] to-[#db2777]"
            : "bg-gradient-to-br from-[#ffb000] via-[#ff7a00] to-[#ef4444]"
        }`}
      >
        {/* Colour accents */}
        <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-white/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#7c2d12]/20 blur-3xl" />

        <button
          type="button"
          onClick={closePopup}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white transition hover:rotate-90 hover:bg-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X size={19} />
        </button>

        <div className="relative p-4 sm:p-5">
          {/* Top label */}
          <div className="flex items-center justify-between gap-3 pr-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white shadow-sm sm:text-[11px]">
              {isNotice ? <AlertCircle size={13} /> : <Flame size={13} />}
              {isNotice ? "Customer Notice" : "Limited Time Offer"}
            </span>
            <span className="text-[9px] font-bold uppercase tracking-wider text-white/80">
              Aaruhi Travels
            </span>
          </div>

          <h2
            id="aruhi-popup-title"
            className="mt-4 text-center text-[25px] font-black leading-tight tracking-tight text-white sm:text-[29px]"
          >
            {title}
          </h2>

          {isNotice ? (
            <div className="mt-4 rounded-2xl border border-white/25 bg-white/15 p-4 text-center shadow-inner backdrop-blur-sm">
              <p className="whitespace-pre-line text-sm font-semibold leading-6 text-white sm:text-[15px] sm:leading-7">
                {message}
              </p>
            </div>
          ) : (
            <>
              {/* Route coupon strip */}
              <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-slate-950/15 px-3 py-3 text-white shadow-inner">
                <span className="min-w-0 flex-1 truncate text-center text-base font-black sm:text-lg">
                  {activeRecord.fromCity}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-orange-600 shadow">
                  <ArrowRight size={18} strokeWidth={3} />
                </span>
                <span className="min-w-0 flex-1 truncate text-center text-base font-black sm:text-lg">
                  {activeRecord.toCity}
                </span>
              </div>

              {/* Offer price ticket */}
              <div className="relative mt-3 overflow-hidden rounded-2xl border-2 border-dashed border-white/70 bg-white p-4 text-center shadow-[0_10px_25px_rgba(124,45,18,0.18)] sm:p-5">
                <div className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-[#ff8500]" />
                <div className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-[#ff8500]" />

                <div className="flex flex-wrap items-center justify-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-orange-800">
                    <CarFront size={13} />
                    {activeRecord.vehicleType || "Available Cab"}
                  </span>
                  {activeRecord.tripType && (
                    <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-violet-800">
                      {activeRecord.tripType}
                    </span>
                  )}
                </div>

                {offerFare !== null && (
                  <p className="mt-2 text-[40px] font-black leading-none tracking-tight text-slate-950 sm:text-[46px]">
                    ₹{offerFare.toLocaleString("en-IN")}
                  </p>
                )}

                <div className="mt-2 flex items-center justify-center gap-2">
                  {strikeFare !== null && strikeFare > (offerFare ?? 0) && (
                    <span className="text-sm font-bold text-slate-400 line-through">
                      ₹{strikeFare.toLocaleString("en-IN")}
                    </span>
                  )}
                  {strikeFare !== null &&
                    offerFare !== null &&
                    strikeFare > offerFare && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-black text-emerald-700">
                        <BadgePercent size={12} />
                        SAVE ₹{(strikeFare - offerFare).toLocaleString("en-IN")}
                      </span>
                    )}
                </div>

                <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
                  Special Route Fare
                </p>
              </div>

              <p className="mt-3 text-center text-xs font-semibold leading-5 text-white sm:text-sm">
                {message}
              </p>
            </>
          )}

          {/* CTA row */}
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <Link
              href={actionLink}
              onClick={closePopup}
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-orange-700 shadow-[0_7px_18px_rgba(80,30,0,0.2)] transition hover:-translate-y-0.5 hover:bg-amber-50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-600"
            >
              {activeRecord.buttonText ||
                (isNotice ? "View Notice" : "Book This Offer")}
              <ArrowRight size={17} strokeWidth={2.8} />
            </Link>

            <button
              type="button"
              onClick={closePopup}
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/50 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-white/20 sm:min-w-[125px]"
            >
              Maybe Later
            </button>
          </div>

          <p className="mt-3 flex items-center justify-center gap-1.5 text-[9px] font-bold text-white/85">
            <CheckCircle2 size={12} />
            Your Trusted Travel Partner
          </p>
        </div>
      </section>
    </div>
  );
}
