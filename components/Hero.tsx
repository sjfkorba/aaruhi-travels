"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Clock3,
  IndianRupee,
  Star,
  Users,
  Headphones,
} from "lucide-react";

import BookingForm from "./BookingForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070"
          alt="Road background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              🚖 Trusted Taxi Service Since 2011
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
              One Way Cab Service In
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
              CHHATTISGARH
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Book reliable one way taxi services across Chhattisgarh.
              Transparent pricing, doorstep pickup, verified drivers,
              premium vehicles and instant WhatsApp booking support.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap gap-3">

              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-3 shadow-md">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span className="font-medium">
                  Safe Journey
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-3 shadow-md">
                <Clock3 className="h-5 w-5 text-blue-600" />
                <span className="font-medium">
                  24x7 Available
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-3 shadow-md">
                <IndianRupee className="h-5 w-5 text-orange-600" />
                <span className="font-medium">
                  Transparent Fare
                </span>
              </div>

            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">

              <div className="rounded-2xl bg-white p-4 shadow-lg">
                <Users className="mb-2 h-6 w-6 text-primary" />

                <h3 className="text-2xl font-bold text-primary">
                  5000+
                </h3>

                <p className="text-sm text-slate-500">
                  Happy Customers
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-lg">
                <Star className="mb-2 h-6 w-6 text-yellow-500" />

                <h3 className="text-2xl font-bold text-primary">
                  4.9★
                </h3>

                <p className="text-sm text-slate-500">
                  Google Rating
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-lg">
                <Headphones className="mb-2 h-6 w-6 text-green-600" />

                <h3 className="text-2xl font-bold text-primary">
                  24x7
                </h3>

                <p className="text-sm text-slate-500">
                  Support
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-lg">
                <ShieldCheck className="mb-2 h-6 w-6 text-blue-600" />

                <h3 className="text-2xl font-bold text-primary">
                  100%
                </h3>

                <p className="text-sm text-slate-500">
                  Safe Ride
                </p>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="tel:+919244137353"
                className="rounded-2xl bg-primary px-6 py-4 text-center font-bold text-white shadow-lg transition hover:opacity-90"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919244137353"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-green-600 px-6 py-4 text-center font-bold text-white shadow-lg transition hover:bg-green-700"
              >
                💬 WhatsApp Booking
              </a>

            </div>

          </div>

          {/* Right Side Form */}
          <div>

            <div className="mx-auto w-full max-w-2xl">
              <BookingForm />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}