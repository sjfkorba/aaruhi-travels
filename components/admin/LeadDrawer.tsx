"use client";

import { useEffect, useMemo, useState } from "react";

import {
  X,
  Phone,
  MessageCircle,
  User,
  Car,
  IndianRupee,
  Building2,
} from "lucide-react";

import { updateLead } from "@/lib/leadActions";

interface LeadDrawerProps {
  lead: any;
  onClose: () => void;
}

function formatIndianDate(
  dateString?: string
) {
  if (!dateString) return "N/A";

  return new Date(
    dateString
  ).toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );
}

function formatIndianTime(
  timeString?: string
) {
  if (!timeString)
    return "N/A";

  const [hours, minutes] =
    timeString.split(":");

  const date = new Date();

  date.setHours(
    Number(hours)
  );

  date.setMinutes(
    Number(minutes)
  );

  return date.toLocaleTimeString(
    "en-IN",
    {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }
  );
}

export default function LeadDrawer({
  lead,
  onClose,
}: LeadDrawerProps) {
  const [status, setStatus] =
    useState("NEW");

  const [bookingMode, setBookingMode] =
    useState("SELF");

  const [vendorName, setVendorName] =
    useState("");

  const [vendorFare, setVendorFare] =
    useState("");

  const [customerFare, setCustomerFare] =
    useState("");

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {
    if (!lead) return;

    setStatus(
      lead.status ?? "NEW"
    );

    setBookingMode(
      lead.bookingMode ??
        "SELF"
    );

    setVendorName(
      lead.vendorName ?? ""
    );

    setVendorFare(
      lead.vendorFare
        ? String(
            lead.vendorFare
          )
        : ""
    );

    setCustomerFare(
      lead.estimatedFare
        ? String(
            lead.estimatedFare
          )
        : ""
    );
  }, [lead]);

  const profit = useMemo(() => {
    const customer =
      Number(customerFare || 0);

    const vendor =
      Number(vendorFare || 0);

    return customer - vendor;
  }, [
    customerFare,
    vendorFare,
  ]);

  if (!lead) return null;

  const saveChanges =
    async () => {
      try {
        setSaving(true);

        await updateLead(
          lead.id,
          {
            status,
            bookingMode,
            vendorName,
            vendorFare:
              Number(
                vendorFare || 0
              ),
            estimatedFare:
              Number(
                customerFare ||
                  0
              ),
            profit,
          }
        );

        alert(
          "Lead updated successfully"
        );
      } catch (error) {
        console.error(
          error
        );

        alert(
          "Unable to update lead"
        );
      } finally {
        setSaving(false);
      }
    };

  return (
    <div className="fixed inset-0 z-50 bg-black/40">

      <div className="absolute right-0 top-0 h-full w-full max-w-lg overflow-y-auto bg-white shadow-2xl">

        {/* Header */}

        <div className="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-5">

          <div>

            <h2 className="text-xl font-bold">
              Lead Details
            </h2>

            <p className="text-sm text-slate-500">
              CRM Management
            </p>

          </div>

          <button
            onClick={onClose}
          >
            <X />
          </button>

        </div>

        <div className="space-y-4 p-5">

          {/* Customer */}

          <div className="rounded-2xl bg-slate-50 p-4">

            <div className="flex items-center gap-2">

              <User />

              <span className="font-bold">
                {
                  lead.customerName
                }
              </span>

            </div>

            <p className="mt-2 text-slate-600">
              {lead.mobile}
            </p>

          </div>

          {/* Route */}

          <div className="rounded-2xl border p-4">

            <h3 className="font-bold">
              Route Details
            </h3>

            <p className="mt-3">
              📍 {lead.pickup}
            </p>

            <p>
              📍 {lead.drop}
            </p>

          </div>

          {/* Trip */}

        <div className="rounded-2xl border p-4">

  <h3 className="mb-4 font-bold">
    Journey Details
  </h3>

  <div className="grid grid-cols-2 gap-3">

    <div className="rounded-xl bg-slate-50 p-3">
      <p className="text-xs text-slate-500">
        Trip Type
      </p>

      <p className="font-semibold">
        {lead.tripType ?? "N/A"}
      </p>
    </div>

    <div className="rounded-xl bg-slate-50 p-3">
      <p className="text-xs text-slate-500">
        Vehicle
      </p>

      <p className="font-semibold">
        {lead.vehicleType ?? "N/A"}
      </p>
    </div>

    <div className="rounded-xl bg-slate-50 p-3">
      <p className="text-xs text-slate-500">
        Journey Date
      </p>

      <p className="font-semibold">
        {formatIndianDate(
          lead.journeyDate
        )}
      </p>
    </div>

    <div className="rounded-xl bg-slate-50 p-3">
      <p className="text-xs text-slate-500">
        Pickup Time
      </p>

      <p className="font-semibold">
        {formatIndianTime(
          lead.journeyTime
        )}
      </p>
    </div>

  </div>

</div>

          {/* Status */}

          <div className="rounded-2xl border p-4">

            <h3 className="font-bold">
              Lead Status
            </h3>

            <select
              value={status}
              onChange={(e) =>
                setStatus(
                  e.target.value
                )
              }
              className="mt-3 w-full rounded-xl border p-3"
            >
              <option>
                NEW
              </option>

              <option>
                CONTACTED
              </option>

              <option>
                QUOTED
              </option>

              <option>
                CONFIRMED
              </option>

              <option>
                CANCELLED
              </option>
            </select>

          </div>

          {/* Booking Mode */}

          <div className="rounded-2xl border p-4">

            <h3 className="font-bold">
              Booking Mode
            </h3>

            <select
              value={
                bookingMode
              }
              onChange={(e) =>
                setBookingMode(
                  e.target.value
                )
              }
              className="mt-3 w-full rounded-xl border p-3"
            >
              <option value="SELF">
                Self Vehicle
              </option>

              <option value="VENDOR">
                Vendor Vehicle
              </option>

              <option value="COMMISSION">
                Commission Only
              </option>
            </select>

          </div>

          {/* Vendor */}

          <div className="rounded-2xl border p-4">

            <div className="mb-3 flex items-center gap-2">

              <Building2 />

              <h3 className="font-bold">
                Vendor Details
              </h3>

            </div>

            <input
              value={
                vendorName
              }
              onChange={(e) =>
                setVendorName(
                  e.target.value
                )
              }
              placeholder="Vendor Name"
              className="mb-3 w-full rounded-xl border p-3"
            />

            <input
              value={
                vendorFare
              }
              onChange={(e) =>
                setVendorFare(
                  e.target.value
                )
              }
              placeholder="Vendor Fare"
              type="number"
              className="w-full rounded-xl border p-3"
            />

          </div>

          {/* Fare */}

          <div className="rounded-2xl border p-4">

            <div className="mb-3 flex items-center gap-2">

              <IndianRupee />

              <h3 className="font-bold">
                Fare & Profit
              </h3>

            </div>

            <input
              value={
                customerFare
              }
              onChange={(e) =>
                setCustomerFare(
                  e.target.value
                )
              }
              placeholder="Customer Fare"
              type="number"
              className="w-full rounded-xl border p-3"
            />

            <div className="mt-4 rounded-xl bg-green-50 p-4">

              <p className="text-sm text-slate-500">
                Estimated Profit
              </p>

              <h2 className="text-2xl font-bold text-green-700">
                ₹{profit}
              </h2>

            </div>

          </div>

          {/* Actions */}

          <div className="grid grid-cols-2 gap-3">

            <a
              href={`tel:${lead.mobile}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white"
            >
              <Phone size={18} />
              Call
            </a>

            <a
              href={`https://wa.me/91${lead.mobile}`}
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-semibold text-white"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

          </div>

          <button
            onClick={
              saveChanges
            }
            disabled={saving}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-bold text-white"
          >
            <Car />

            {saving
              ? "Saving..."
              : "Save Lead"}
          </button>

        </div>

      </div>

    </div>
  );
}