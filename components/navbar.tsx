"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  Phone,
  MapPin,
  Shield,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Routes", href: "/routes" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>One Way Cab Service in Chhattisgarh</span>
            </div>

            <div className="flex items-center gap-2">
              <Shield size={14} />
              <span>Safe Journey • Best Fare • On Time Pickup</span>
            </div>

            <div className="flex items-center gap-3">
              <span>Follow Us</span>

              <a href="#">
                <FaFacebookF className="transition hover:text-secondary" />
              </a>

              <a href="#">
                <FaInstagram className="transition hover:text-secondary" />
              </a>

              <a href="#">
                <FaYoutube className="transition hover:text-secondary" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
       <Link
  href="/"
  className="flex items-center gap-3"
>
  <Image
    src="/logo.png"
    alt="Aaruhi Travels"
    width={55}
    height={55}
    priority
  />

  <div className="block">
    <h2 className="text-lg font-extrabold leading-none text-primary sm:text-2xl">
      Aaruhi Travels
    </h2>

    <p className="text-[10px] font-medium uppercase tracking-wider text-secondary sm:text-xs">
      One Way Taxi Service
    </p>
  </div>
</Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`rounded-full px-4 py-2 font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-secondary text-white shadow-md"
                        : "text-gray-700 hover:text-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:9244137353"
                className="flex items-center gap-2 rounded-xl border px-4 py-3 transition hover:bg-slate-50"
              >
                <Phone size={18} />

                <div>
                  <p className="text-xs text-gray-500">
                    Call Now
                  </p>

                  <p className="font-semibold">
                    +91 92441 37353
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/919244137353"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Book on WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50">

          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-linear-to-b from-white to-slate-50 p-6 shadow-2xl">

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">

              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Aaruhi Travels"
                  width={50}
                  height={50}
                />

                <div>
                  <h3 className="font-bold text-primary">
                    Aaruhi Travels
                  </h3>

                  <p className="text-xs text-secondary">
                    One Way Cab Service
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>

            </div>

            {/* Branding Section */}
            <div className="mb-8 rounded-3xl bg-linear-to-br from-primary via-primary to-secondary p-6 text-center text-white shadow-xl">

              <h2 className="text-5xl font-extrabold tracking-wide">
                Aaruhi
              </h2>

              <h3 className="mt-1 text-xl font-bold tracking-[0.35em] text-white/90">
                TRAVELS
              </h3>

              <div className="mx-auto my-4 h-1 w-20 rounded-full bg-white/40" />

              <p className="text-sm leading-6 text-white/90">
                Premium One Way Taxi Service
                Across Chhattisgarh
              </p>

              <div className="mt-5 flex justify-center gap-2">

                <span className="rounded-full bg-white/20 px-3 py-1 text-xs">
                  Safe Ride
                </span>

                <span className="rounded-full bg-white/20 px-3 py-1 text-xs">
                  Best Fare
                </span>

                <span className="rounded-full bg-white/20 px-3 py-1 text-xs">
                  24×7
                </span>

              </div>

            </div>

            {/* Mobile Menu */}
            <div className="space-y-3">

              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-xl px-4 py-3 font-medium transition ${
                      isActive
                        ? "bg-secondary text-white shadow-md"
                        : "border bg-white hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

            </div>

            {/* CTA Buttons */}
            <div className="mt-8 space-y-3">

              <a
                href="tel:9244137353"
                className="block rounded-xl border bg-white p-4 text-center font-semibold"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919244137353"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-primary p-4 text-center font-semibold text-white"
              >
                Book on WhatsApp
              </a>

            </div>

          </div>
        </div>
      )}
    </>
  );
}