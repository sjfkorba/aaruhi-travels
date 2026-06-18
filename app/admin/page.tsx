"use client";

import { useState } from "react";


import AdvancedFareCalculator from "@/components/admin/AdvancedFareCalculator";
import LiveLeads from "@/components/admin/LiveLeads";
import LeadDrawer from "@/components/admin/LeadDrawer";
import StatsCards from "@/components/admin/StatsCards";
import DashboardHeader from "@/components/admin/DashboardHeader";

export default function AdminDashboard() {
  const [selectedLead, setSelectedLead] =
    useState<any>(null);

  return (
    <div className="min-h-screen bg-slate-100">

      <DashboardHeader />

      <div className="mx-auto max-w-7xl p-4 md:p-6">

        <StatsCards />

        <div className="mt-6 grid gap-6 lg:grid-cols-[420px_1fr]">

          <AdvancedFareCalculator />

          <LiveLeads
            onSelectLead={
              setSelectedLead
            }
          />

        </div>

      </div>

      <LeadDrawer
        lead={selectedLead}
        onClose={() =>
          setSelectedLead(null)
        }
      />

    </div>
  );
}