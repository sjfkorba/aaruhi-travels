"use client";

import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { useEffect, useState } from "react";

import {
  Phone,
  MessageCircle,
  User,
  MapPin,
} from "lucide-react";

import { db } from "@/lib/firebase";

interface LiveLeadsProps {
  onSelectLead: (lead: any) => void;
}

export default function LiveLeads({
  onSelectLead,
}: LiveLeadsProps) {
  const [leads, setLeads] =
    useState<any[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "enquires"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe =
      onSnapshot(q, (snapshot) => {
        const data =
          snapshot.docs.map(
            (doc) => ({
              id: doc.id,
              ...doc.data(),
            })
          );

        setLeads(data);
      });

    return () => unsubscribe();
  }, []);

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Live Enquiries
        </h2>

        <span className="rounded-full bg-primary px-3 py-1 text-sm text-white">
          {leads.length}
        </span>

      </div>

      <div className="max-h-[700px] space-y-4 overflow-y-auto">

        {leads.length === 0 && (
          <div className="rounded-2xl border border-dashed p-10 text-center text-slate-500">
            No Enquiries Found
          </div>
        )}

        {leads.map((lead) => (
          <div
            key={lead.id}
            onClick={() =>
              onSelectLead(lead)
            }
            className="cursor-pointer rounded-2xl border p-4 transition hover:border-primary hover:bg-slate-50"
          >

            <div className="flex items-start justify-between">

              <div>

                <div className="flex items-center gap-2">

                  <User
                    size={18}
                  />

                  <h3 className="font-bold">
                    {
                      lead.customerName
                    }
                  </h3>

                </div>

                <p className="mt-1 text-sm text-slate-500">
                  {lead.mobile}
                </p>

              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                {lead.status ??
                  "NEW"}
              </span>

            </div>

            <div className="mt-4 space-y-2 text-sm">

              <div className="flex items-center gap-2">

                <MapPin
                  size={16}
                />

                <span>
                  {lead.pickup}
                </span>

              </div>

              <div className="pl-6 text-slate-500">
                ↓
              </div>

              <div className="flex items-center gap-2">

                <MapPin
                  size={16}
                />

                <span>
                  {lead.drop}
                </span>

              </div>

            </div>

            <div className="mt-4 flex items-center justify-between">

              <div className="text-sm text-slate-500">

                {lead.vehicleType}

              </div>

              <div className="flex gap-2">

                <a
                  href={`tel:${lead.mobile}`}
                  onClick={(e) =>
                    e.stopPropagation()
                  }
                  className="rounded-xl bg-blue-100 p-2 text-blue-600"
                >
                  <Phone
                    size={18}
                  />
                </a>

                <a
                  href={`https://wa.me/91${lead.mobile}`}
                  target="_blank"
                  onClick={(e) =>
                    e.stopPropagation()
                  }
                  className="rounded-xl bg-green-100 p-2 text-green-600"
                >
                  <MessageCircle
                    size={18}
                  />
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}