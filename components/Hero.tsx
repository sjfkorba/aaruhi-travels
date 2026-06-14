"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Clock3,
  IndianRupee,
  MapPin,
  ArrowRightLeft,
  CalendarDays,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070"
          alt="Road"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-white via-white/90 to-white/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>

            <p className="mb-4 font-semibold text-secondary uppercase tracking-wider">
              One Way Cab Service In
            </p>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-none text-primary">
              CHHATTISGARH
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Instant Fare Estimate, Transparent Pricing,
              Doorstep Pickup & Safe One Way Taxi
              Service Across Chhattisgarh.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap gap-6">

              <div className="flex items-center gap-2">
                <ShieldCheck className="text-secondary" />
                <span>Safe Journey</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock3 className="text-secondary" />
                <span>24x7 Available</span>
              </div>

              <div className="flex items-center gap-2">
                <IndianRupee className="text-secondary" />
                <span>Transparent Fare</span>
              </div>

            </div>

            {/* Trust */}
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">

              <div className="rounded-xl bg-white p-4 shadow-brand">
                <h3 className="text-xl font-bold text-primary">
                  5000+
                </h3>

                <p className="text-sm text-muted-foreground">
                  Happy Customers
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-brand">
                <h3 className="text-xl font-bold text-primary">
                  4.9★
                </h3>

                <p className="text-sm text-muted-foreground">
                  Rating
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-brand">
                <h3 className="text-xl font-bold text-primary">
                  24x7
                </h3>

                <p className="text-sm text-muted-foreground">
                  Support
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-brand">
                <h3 className="text-xl font-bold text-primary">
                  100%
                </h3>

                <p className="text-sm text-muted-foreground">
                  Safe Ride
                </p>
              </div>

            </div>

          </div>

          {/* Fare Card */}
          <div>

            <div className="rounded-3xl bg-primary p-6 shadow-2xl">

              <div className="mb-6 flex items-center gap-2 text-white">
                <IndianRupee />
                <h2 className="text-2xl font-bold">
                  Instant Fare Estimate
                </h2>
              </div>

              {/* From */}
              <div className="mb-4">
                <label className="mb-2 block text-white">
                  From
                </label>

                <div className="flex items-center rounded-xl bg-white px-4 py-4">
                  <MapPin className="text-green-600" />

                  <input
                    type="text"
                    placeholder="Raipur"
                    className="ml-3 w-full outline-none"
                  />
                </div>
              </div>

              {/* To */}
              <div className="mb-4">
                <label className="mb-2 block text-white">
                  To
                </label>

                <div className="flex items-center rounded-xl bg-white px-4 py-4">
                  <MapPin className="text-orange-500" />

                  <input
                    type="text"
                    placeholder="Bilaspur"
                    className="ml-3 w-full outline-none"
                  />
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-white px-4 py-4">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={18} />

                    <span className="text-sm">
                      Journey Date
                    </span>
                  </div>
                </div>

                <div className="rounded-xl bg-white px-4 py-4">
                  <div className="flex items-center gap-2">
                    <Users size={18} />

                    <span className="text-sm">
                      1 Passenger
                    </span>
                  </div>
                </div>

              </div>

              {/* Fare */}
              <div className="mt-6 rounded-2xl bg-white p-5">

                <p className="text-sm text-muted-foreground">
                  Estimated Fare
                </p>

                <h3 className="mt-2 text-4xl font-bold text-primary">
                  ₹4,250
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Approximate Fare
                </p>

              </div>

              {/* Button */}
              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-secondary px-6 py-4 text-lg font-bold text-white shadow-orange transition hover:scale-[1.02]">

                Get Fare & Book

                <ArrowRightLeft size={18} />

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}