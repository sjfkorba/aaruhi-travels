"use client";

import {
  Users,
  CheckCircle,
  IndianRupee,
  TrendingUp,
} from "lucide-react";

export default function StatsCards() {
  const cards = [
    {
      title: "Today's Leads",
      value: "18",
      icon: Users,
    },
    {
      title: "Confirmed",
      value: "5",
      icon: CheckCircle,
    },
    {
      title: "Revenue",
      value: "₹18,450",
      icon: IndianRupee,
    },
    {
      title: "Profit",
      value: "₹4,200",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl bg-white p-5 shadow-md"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
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