
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ArrowRight,
  Clock3,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Aaruhi Travels", href: "/about" },
  { label: "Our Taxi Services", href: "/#taxi-services" },
  { label: "Premium Fleet", href: "/#premium-fleet" },
  { label: "Popular Routes", href: "/routes" },
  { label: "Travel Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "One Way Taxi", href: "/services/one-way-taxi" },
  { label: "Round Trip Taxi", href: "/services/round-trip-taxi" },
  { label: "Local Taxi", href: "/services/local-taxi" },
  { label: "Outstation Taxi", href: "/services/outstation-taxi" },
  { label: "Airport Transfer", href: "/services/airport-transfer" },
  {
    label: "Railway Station Transfer",
    href: "/services/railway-station-transfer",
  },
  { label: "Corporate Taxi", href: "/services/corporate-taxi" },
  { label: "Event Taxi", href: "/services/event-taxi" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Booking Policy", href: "/booking-policy" },
  { label: "Security Policy", href: "/security-policy" },
];

const popularRoutes = [
  { label: "Korba to Bilaspur", href: "/one-way-taxi/korba-to-bilaspur" },
  { label: "Bilaspur to Korba", href: "/one-way-taxi/bilaspur-to-korba" },
  { label: "Korba to Raipur", href: "/one-way-taxi/korba-to-raipur" },
  { label: "Raipur to Korba", href: "/one-way-taxi/raipur-to-korba" },
  { label: "Korba to Raigarh", href: "/one-way-taxi/korba-to-raigarh" },
  { label: "Raigarh to Korba", href: "/one-way-taxi/raigarh-to-korba" },
  {
    label: "Korba to Ambikapur",
    href: "/one-way-taxi/korba-to-ambikapur",
  },
  {
    label: "Raipur to Jagdalpur",
    href: "/one-way-taxi/raipur-to-jagdalpur",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/search/top?q=aaruhi%20travels",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/",
  },
  {
    label: "YouTube",
    icon: FaYoutube,
    href: "https://www.youtube.com/results?search_query=aaruhi+travels",
  },
];

const whatsappLink =
  "https://wa.me/919244137353?text=Hello%20Aaruhi%20Travels%2C%20I%20want%20to%20enquire%20about%20a%20taxi.";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111827] text-white">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-amber-500/10 blur-[100px]" />

      {/* Main Footer */}
      <div className="relative mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

        {/* Footer CTA */}
        <div className="mb-12 flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.05] p-6 sm:p-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-400">
              Your Journey, Our Responsibility
            </span>

            <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">
              Planning Your Next Journey?
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
              Get in touch with Aaruhi Travels for your next local,
              outstation or airport taxi requirement.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#12bd65] px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-green-900/20 transition hover:-translate-y-1 hover:bg-[#079d50]"
          >
            <FaWhatsapp size={19} />
            Enquire on WhatsApp
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">

          {/* Company Information */}
          <div className="lg:col-span-1">

            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Aaruhi Travels Logo"
                width={58}
                height={58}
                className="h-14 w-14 rounded-lg bg-white object-contain p-1"
              />

              <div>
                <h3 className="text-xl font-black tracking-tight sm:text-2xl">
                  Aaruhi Travels
                </h3>
                <p className="mt-0.5 text-xs font-semibold text-orange-400">
                  Your Trusted Travel Partner
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-300">
              Aaruhi Travels provides taxi and cab rental services for
              local, one-way, round-trip, airport and outstation journeys.
              Travel comfortably with suitable vehicle options and
              convenient booking support.
            </p>

            {/* Social Links */}
            <div className="mt-6">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Follow Us
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-white transition hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-500"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Aaruhi Travels"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white transition hover:-translate-y-1 hover:bg-green-500"
                >
                  <FaWhatsapp size={19} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-base font-black sm:text-lg">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-orange-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500/70 transition group-hover:bg-orange-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Taxi Services */}
          <div>
            <h3 className="mb-5 text-base font-black sm:text-lg">
              Our Taxi Services
            </h3>

            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-orange-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500/70 transition group-hover:bg-orange-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h3 className="mb-5 text-base font-black sm:text-lg">
              Popular Taxi Routes
            </h3>

            <ul className="space-y-3">
              {popularRoutes.map((route) => (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-orange-400"
                  >
                    <MapPin
                      size={14}
                      className="shrink-0 text-orange-400"
                    />
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-5 text-base font-black sm:text-lg">
              Contact Us
            </h3>

            <div className="space-y-5">

              <a
                href="https://www.google.com/maps/search/?api=1&query=Korba%2C+Chhattisgarh%2C+India"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-orange-400">
                  <MapPin size={18} />
                </span>

                <span className="text-sm font-medium leading-6 text-slate-300 transition group-hover:text-orange-400">
                  Korba, Chhattisgarh, India
                  <span className="block text-xs text-slate-500">
                    View on Google Maps
                  </span>
                </span>
              </a>

              <a
                href="tel:+919244137353"
                className="group flex items-start gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-orange-400">
                  <Phone size={18} />
                </span>

                <span className="text-sm font-bold text-slate-300 transition group-hover:text-orange-400">
                  +91 92441 37353
                  <span className="mt-1 block text-xs font-medium text-slate-500">
                    Call for Booking Enquiry
                  </span>
                </span>
              </a>

              <a
                href="mailto:aaruhitravelskrb@gmail.com"
                className="group flex items-start gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-orange-400">
                  <Mail size={18} />
                </span>

                <span className="break-all text-sm font-medium leading-6 text-slate-300 transition group-hover:text-orange-400">
                  aaruhitravelskrb@gmail.com
                </span>
              </a>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-orange-400">
                  <Clock3 size={18} />
                </span>

                <span className="text-sm font-medium leading-6 text-slate-300">
                  Booking Enquiries
                  <span className="block text-xs text-slate-500">
                    Contact us for availability
                  </span>
                </span>
              </div>

            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-sm font-extrabold text-white shadow-lg shadow-orange-950/20 transition hover:-translate-y-1 hover:from-orange-400 hover:to-orange-500"
            >
              <FaWhatsapp size={18} />
              Book Your Taxi
              <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-[1400px] px-5 py-6 sm:px-8 lg:px-10">

          <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">

            <p className="text-center text-xs font-medium leading-6 text-slate-400 sm:text-sm lg:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="font-bold text-white">
                Aaruhi Travels
              </span>
              . All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-semibold text-slate-400 transition hover:text-orange-400 sm:text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}
