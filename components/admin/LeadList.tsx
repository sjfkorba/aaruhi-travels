"use client";

import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { useEffect, useState } from "react";

import { db } from "@/lib/firebase";

type Lead = {
  id: string;
  customerName?: string;
  mobile?: string;
  pickup?: string;
  drop?: string;
  vehicleType?: string;
  tripType?: string;
  status?: string;
};

export default function LeadList() {
  const [leads, setLeads] =
    useState<Lead[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "enquires"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe =
      onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...doc.data(),
          })
        ) as Lead[];

        setLeads(data);
      });

    return () => unsubscribe();
  }, []);

  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Live Enquiries
        </h2>

        <span className="rounded-full bg-primary px-3 py-1 text-sm text-white">
          {leads.length}
        </span>

      </div>

      <div className="space-y-4">

        {leads.length === 0 && (
          <div className="rounded-2xl border border-dashed p-8 text-center text-slate-500">
            No enquiries found
          </div>
        )}

        {leads.map((lead) => (
          <div
            key={lead.id}
            className="rounded-2xl border p-4 transition hover:bg-slate-50"
          >
            <div className="flex items-start justify-between">

              <div>
                <h3 className="font-bold">
                  {lead.customerName ??
                    "Unknown Customer"}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {lead.mobile}
                </p>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                {lead.status ?? "new"}
              </span>

            </div>

            <div className="mt-3 text-sm">

              <p>
                <strong>Trip:</strong>{" "}
                {lead.tripType ??
                  "N/A"}
              </p>

              <p>
                <strong>Vehicle:</strong>{" "}
                {lead.vehicleType ??
                  "N/A"}
              </p>

              <p>
                <strong>Route:</strong>{" "}
                {lead.pickup ??
                  "N/A"}{" "}
                →{" "}
                {lead.drop ??
                  "N/A"}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}