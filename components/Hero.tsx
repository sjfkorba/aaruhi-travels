
"use client";

import Image from "next/image";
import {
  Star,
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock3,
  CarFront,
  BadgeCheck,
  ArrowRight,
  Plane,
  Users,
  MapPin,
} from "lucide-react";

import BookingForm from "./BookingForm";

const serviceAreas = [
  "Raipur",
  "Naya Raipur",
  "Durg",
  "Bhilai",
  "Bilaspur",
  "Korba",
];

const trustPoints = [
  "Multiple Vehicle Options",
  "Easy Booking Process",
  "24x7 Booking Support",
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-[#171717] lg:min-h-[720px]">

      {/* =====================================
          FULL BACKGROUND IMAGE
      ====================================== */}

      <div className="absolute inset-0 z-0">
        <Image
          src="/main-image.png"
          alt="Aaruhi Travels taxi travel background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* DARK IMAGE OVERLAY */}

      <div className="absolute inset-0 z-[1] bg-black/65" />

      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/75 via-black/45 to-black/25" />

      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      {/* =====================================
          MAIN CONTENT
      ====================================== */}

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">

          {/* =================================
              LEFT CONTENT
          ================================== */}

          <div className="hero-content max-w-xl text-white">

            {/* TOP RATED BADGE */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-[#ffc928] px-3.5 py-2 text-[#171717] shadow-lg">

              <Star
                size={15}
                className="fill-current"
              />

              <span className="text-[11px] font-extrabold tracking-wide sm:text-xs">
                TOP RATED TAXI SERVICES
              </span>

            </div>

            {/* MAIN HEADING */}

            <h1 className="text-[42px] font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[60px] xl:text-[66px]">

              <span className="block text-white">
                Aaruhi Travels
              </span>

              <span className="mt-1 block text-[#ffc928]">
                Taxi Booking
              </span>

              <span className="block text-white">
                Made Easy.
              </span>

            </h1>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-[540px] text-sm leading-7 text-gray-200 sm:text-base sm:leading-8">
              Book one-way, round-trip, airport and outstation
              taxis with Aaruhi Travels. Choose your preferred
              vehicle, share your journey details and let our
              team help you plan your ride.
            </p>

            {/* TRUST BADGES */}

            <div className="mt-6 flex flex-wrap gap-2.5">

              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-[#ffc928]" />

                  <span className="text-[10px] font-semibold text-white sm:text-xs">
                    {point}
                  </span>
                </div>
              ))}

            </div>

            {/* CTA BUTTONS */}

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href="tel:+919244137353"
                className="group flex min-h-[54px] items-center gap-3 rounded-xl bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <Phone size={18} />
                </span>

                <span>
                  <span className="block text-xs font-extrabold sm:text-sm">
                    BOOK VIA CALL
                  </span>

                  <span className="mt-0.5 block text-[10px] text-blue-100">
                    Speak with our team
                  </span>
                </span>

              </a>

              <a
                href="https://wa.me/919244137353"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[54px] items-center gap-3 rounded-xl bg-green-600 px-5 py-3 text-white shadow-lg shadow-green-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
              >

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle size={18} />
                </span>

                <span>
                  <span className="block text-xs font-extrabold sm:text-sm">
                    BOOK VIA WHATSAPP
                  </span>

                  <span className="mt-0.5 block text-[10px] text-green-100">
                    Chat with us instantly
                  </span>
                </span>

              </a>

            </div>

            {/* SERVICE AREAS */}

            <div className="mt-9 border-t border-white/20 pt-6">

              <div className="mb-3 flex items-center gap-2">
                <MapPin
                  size={16}
                  className="text-[#ffc928]"
                />

                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Our Service Locations
                </span>
              </div>

              <div className="flex flex-wrap gap-2">

                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-xs font-medium text-gray-100 transition-all hover:border-[#ffc928] hover:text-[#ffc928]"
                  >
                    {area}
                  </span>
                ))}

              </div>

            </div>

          </div>

          {/* =================================
              RIGHT BOOKING CARD
          ================================== */}

          <div
            id="hero-booking"
            className="booking-card mx-auto w-full max-w-[550px] lg:ml-auto"
          >

            <div className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.35)]">

              {/* CARD HEADER */}

              <div className="px-5 pb-5 pt-6 text-center sm:px-8">

                <span className="inline-flex items-center rounded-full bg-[#fff5d6] px-3 py-1 text-[10px] font-extrabold tracking-wider text-[#9a6500]">
                  INSTANT BOOKING
                </span>

                <h2 className="mt-2 text-2xl font-black tracking-tight text-gray-900 sm:text-[28px]">
                  Book Your Taxi
                </h2>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Safe. Reliable. Convenient rides in a few clicks.
                </p>

              </div>

              {/* EXISTING BOOKING FORM */}

              <div className="px-4 pb-6 sm:px-7 sm:pb-7">

                <BookingForm />

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================
          BOTTOM SERVICE BAR
      ====================================== */}

      <div className="relative z-10 border-t border-white/10 bg-[#171717]/95 backdrop-blur-md">

        <div className="mx-auto grid max-w-[1440px] grid-cols-2 sm:grid-cols-4">

          {[
            {
              title: "Local Taxi",
              subtitle: "City rides",
              icon: CarFront,
            },
            {
              title: "Outstation",
              subtitle: "Intercity journeys",
              icon: MapPin,
            },
            {
              title: "Airport Transfers",
              subtitle: "Pickup & drop",
              icon: Plane,
            },
            {
              title: "Group Travel",
              subtitle: "Family & group rides",
              icon: Users,
            },
          ].map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`flex items-center justify-center gap-3 px-3 py-5 transition-colors hover:bg-white/5 ${
                  index !== 3
                    ? "sm:border-r sm:border-white/10"
                    : ""
                } ${
                  index < 2
                    ? "border-b border-white/10 sm:border-b-0"
                    : ""
                }`}
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ffc928]/15 text-[#ffc928]">
                  <Icon size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white sm:text-sm">
                    {service.title}
                  </p>

                  <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">
                    {service.subtitle}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* =====================================
          ANIMATIONS
      ====================================== */}

      <style jsx>{`
        .hero-content {
          animation: heroReveal 0.9s ease-out both;
        }

        .booking-card {
          animation: bookingReveal 0.9s ease-out both;
          animation-delay: 0.15s;
        }

        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bookingReveal {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-content,
          .booking-card {
            animation: none;
          }
        }
      `}</style>

    </section>
  );
}
