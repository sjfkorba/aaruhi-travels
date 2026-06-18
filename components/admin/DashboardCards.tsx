"use client";

import { Users, IndianRupee, CheckCircle, Clock } from "lucide-react";

export default function DashboardCards() {
  const cards = [
    {
      title: "Today's Leads",
      value: "0",
      icon: Users,
    },
    {
      title: "Confirmed",
      value: "0",
      icon: CheckCircle,
    },
    {
      title: "Revenue",
      value: "₹0",
      icon: IndianRupee,
    },
    {
      title: "Pending",
      value: "0",
      icon: Clock,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl bg-white p-6 shadow-md transition hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {card.value}
                </h2>
              </div>

              <div className="rounded-2xl bg-primary/10 p-3">
                <Icon className="h-7 w-7 text-primary" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}