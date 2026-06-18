"use client";

import {
  X,
  Phone,
  MessageCircle,
  Car,
  User,
} from "lucide-react";

interface LeadDrawerProps {
  lead: any;
  onClose: () => void;
}

export default function LeadDrawer({
  lead,
  onClose,
}: LeadDrawerProps) {
  if (!lead) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40">

      <div className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-white shadow-2xl">

        <div className="sticky top-0 flex items-center justify-between border-b bg-white p-5">

          <h2 className="text-xl font-bold">
            Lead Details
          </h2>

          <button
            onClick={onClose}
          >
            <X />
          </button>

        </div>

        <div className="p-5">

          <div className="rounded-2xl bg-slate-50 p-4">

            <div className="flex items-center gap-2">

              <User />

              <span className="font-bold">
                {
                  lead.customerName
                }
              </span>

            </div>

            <p className="mt-2">
              {lead.mobile}
            </p>

          </div>

          <div className="mt-4 rounded-2xl border p-4">

            <h3 className="font-bold">
              Route
            </h3>

            <p className="mt-3">
              📍 {lead.pickup}
            </p>

            <p>
              📍 {lead.drop}
            </p>

          </div>

          <div className="mt-4 rounded-2xl border p-4">

            <h3 className="font-bold">
              Trip Details
            </h3>

            <p className="mt-3">
              Vehicle:
              {" "}
              {
                lead.vehicleType
              }
            </p>

            <p>
              Trip Type:
              {" "}
              {lead.tripType}
            </p>

          </div>

          <div className="mt-4 rounded-2xl border p-4">

            <h3 className="font-bold">
              Booking Mode
            </h3>

            <select className="mt-3 w-full rounded-xl border p-3">

              <option>
                Self Vehicle
              </option>

              <option>
                Vendor Vehicle
              </option>

              <option>
                Commission Only
              </option>

            </select>

          </div>

          <div className="mt-4 rounded-2xl border p-4">

            <h3 className="font-bold">
              Lead Status
            </h3>

            <select className="mt-3 w-full rounded-xl border p-3">

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

          <div className="mt-6 grid grid-cols-2 gap-3">

            <a
              href={`tel:${lead.mobile}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white"
            >
              <Phone
                size={18}
              />
              Call
            </a>

            <a
              href={`https://wa.me/91${lead.mobile}`}
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-semibold text-white"
            >
              <MessageCircle
                size={18}
              />
              WhatsApp
            </a>

          </div>

          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-bold text-white">

            <Car />

            Calculate Fare

          </button>

        </div>

      </div>

    </div>
  );
}