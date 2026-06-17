"use client";

import Image from "next/image";
import { ShieldCheck, Clock3, IndianRupee } from "lucide-react";
import BookingForm from "./BookingForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070"
          alt="Road background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] items-center px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <div className="order-1 lg:order-2">
            <div className="mx-auto w-full max-w-xl lg:max-w-none">
              <BookingForm />
            </div>
          </div>

          <div className="order-2 lg:order-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary sm:text-base">
              One Way Cab Service In
            </p>

            <h1 className="text-4xl font-extrabold leading-none text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
              CHHATTISGARH
            </h1>

            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Instant Fare Estimate, Transparent Pricing, Doorstep Pickup and
              Safe One Way Taxi Service Across Chhattisgarh.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 lg:gap-6">
              <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
                <ShieldCheck className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium sm:text-base">Safe Journey</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
                <Clock3 className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium sm:text-base">24x7 Available</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
                <IndianRupee className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium sm:text-base">Transparent Fare</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
              <div className="rounded-xl bg-white/95 p-4 shadow-brand backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primary">5000+</h3>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>

              <div className="rounded-xl bg-white/95 p-4 shadow-brand backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primary">4.9★</h3>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>

              <div className="rounded-xl bg-white/95 p-4 shadow-brand backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primary">24x7</h3>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>

              <div className="rounded-xl bg-white/95 p-4 shadow-brand backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primary">100%</h3>
                <p className="text-sm text-muted-foreground">Safe Ride</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}