
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  Phone,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const PHONE = "9244137353";
const WHATSAPP = "919244137353";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Routes", href: "/routes" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Hello Aaruhi Travels, I would like to enquire about a cab booking."
)}`;

const socialLinks = [
  { label: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/" },
  { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/" },
  { label: "YouTube", icon: FaYoutube, href: "https://www.youtube.com/" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* TOP INFORMATION BAR */}
      <div className="hidden border-b border-white/10 bg-[#080B12] text-slate-300 lg:block">
        <div className="mx-auto flex h-10 max-w-[1440px] items-center justify-between px-6 xl:px-10">

          <div className="flex items-center gap-2 text-xs font-semibold">
            <MapPin size={14} className="text-amber-400" />
            <span>Premium Taxi Service in Raipur, Chhattisgarh</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold">
            <ShieldCheck size={15} className="text-emerald-400" />
            <span>Reliable Rides · Comfortable Travel · 24/7 Support</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold">Follow Us</span>

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#79563E] transition-colors duration-200 hover:text-amber-400"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080B12]/95 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-amber-300/80 before:to-transparent">

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 xl:px-10">

          <div className="flex h-[72px] items-center justify-between sm:h-[78px] lg:h-[86px]">

            {/* BRAND LOGO */}
            <Link
              href="/"
              aria-label="Aaruhi Travels Homepage"
              className="group flex shrink-0 items-center gap-2.5 sm:gap-3"
            >
              <Image
                src="/logo.png"
                alt="Aaruhi Travels Logo"
                width={58}
                height={58}
                priority
                className="h-11 w-11 rounded-xl bg-white/95 object-contain p-0.5 shadow-[0_0_22px_rgba(251,191,36,0.16)] transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 sm:h-[54px] sm:w-[54px]"
              />

              <div>
                <h2 className="text-lg font-black leading-tight tracking-tight text-white drop-shadow-[0_0_14px_rgba(251,191,36,0.18)] sm:text-2xl">
                  Aaruhi Travels
                </h2>

                <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.17em] text-amber-400 sm:text-[10px]">
                  One Way Taxi Service
                </p>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-1 xl:flex"
            >
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-xl px-3.5 py-3 text-[13px] font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                      active
                        ? "border border-amber-300/25 bg-amber-300/10 text-amber-300 shadow-[0_0_22px_rgba(251,191,36,0.12)]"
                        : "text-slate-300 hover:bg-white/[0.07] hover:text-amber-300"
                    }`}
                  >
                    {link.label}

                    {active && (
                      <span className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.9)]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden items-center gap-3 lg:flex">

              <a
                href={`tel:+91${PHONE}`}
                className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.05] px-3.5 py-2.5 transition-all duration-300 hover:border-amber-300/40 hover:bg-white/[0.09]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-amber-400 transition group-hover:bg-orange-100">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold text-slate-400">
                    Call For Booking
                  </p>

                  <p className="text-sm font-extrabold text-white">
                    +91 {PHONE}
                  </p>
                </div>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-[48px] items-center gap-2 rounded-xl border border-amber-200/30 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 px-5 text-sm font-black text-slate-950 shadow-[0_0_24px_rgba(251,191,36,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(251,191,36,0.42)]"
              >
                Book Your Cab

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

            </div>

            {/* TABLET & MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-300/30 bg-white/[0.06] text-amber-300 shadow-[0_0_18px_rgba(251,191,36,0.12)] transition hover:border-amber-300/60 hover:bg-amber-300/10 xl:hidden"
            >
              <Menu size={23} />
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md xl:hidden"
          onClick={closeMenu}
        >

          <div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onClick={(event) => event.stopPropagation()}
            className="absolute right-0 top-0 flex h-full w-[88%] max-w-[390px] flex-col overflow-y-auto border-l border-white/10 bg-[#0B101A] text-white shadow-2xl animate-in slide-in-from-right duration-300"
          >

            {/* DRAWER HEADER */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">

              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center gap-3"
              >
                <Image
                  src="/logo.png"
                  alt="Aaruhi Travels"
                  width={48}
                  height={48}
                  className="h-11 w-11 object-contain"
                />

                <div>
                  <h3 className="text-lg font-black text-white">
                    Aaruhi Travels
                  </h3>

                  <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    One Way Taxi Service
                  </p>
                </div>
              </Link>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition hover:border-amber-300/40 hover:bg-white/10"
              >
                <X size={22} />
              </button>

            </div>

            {/* MOBILE BRAND PANEL */}
            <div className="px-5 pt-6">

              <div className="relative overflow-hidden rounded-2xl border border-amber-200/20 bg-gradient-to-br from-[#17243A] via-[#101827] to-[#241A0B] p-5 text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)]">

                <div className="absolute -right-10 -top-10 h-36 w-36 animate-pulse rounded-full border-[20px] border-amber-300/10" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[10px] font-bold">
                    <span className="h-2 w-2 rounded-full bg-green-300" />
                    AVAILABLE FOR BOOKINGS
                  </div>

                  <h2 className="mt-4 text-3xl font-black tracking-tight">
                    Your Journey,
                    <br />
                    Our Priority.
                  </h2>

                  <p className="mt-2 max-w-[230px] text-xs leading-5 text-white/85">
                    Reliable taxi service for local, airport and outstation journeys.
                  </p>

                  <div className="mt-4 flex gap-2">
                    {["Safe Ride", "Best Service", "24/7"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/20 bg-white/15 px-2.5 py-1 text-[9px] font-bold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* MOBILE NAVIGATION LINKS */}
            <nav
              aria-label="Mobile navigation links"
              className="flex-1 px-5 py-7"
            >

              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.18em] text-amber-400">
                Explore Aaruhi
              </p>

              <div className="space-y-2">

                {navLinks.map((link) => {
                  const active = isActive(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className={`group flex items-center justify-between rounded-xl border px-4 py-3.5 transition-all duration-200 ${
                        active
                          ? "border-orange-200 border border-amber-300/25 bg-amber-300/10 text-amber-300 shadow-[0_0_22px_rgba(251,191,36,0.12)]"
                          : "border-transparent bg-white/[0.04] text-slate-200 hover:border-amber-300/20 hover:bg-white/[0.08]"
                      }`}
                    >
                      <span className="text-sm font-bold">
                        {link.label}
                      </span>

                      <ChevronRight
                        size={18}
                        className={`transition-transform group-hover:translate-x-1 ${
                          active ? "text-amber-400" : "text-slate-400"
                        }`}
                      />
                    </Link>
                  );
                })}

              </div>
            </nav>

            {/* MOBILE CONTACT SECTION */}
            <div className="space-y-3 border-t border-white/10 bg-[#080B12] p-5">

              <a
                href={`tel:+91${PHONE}`}
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-amber-300/30 bg-amber-300/10 text-sm font-extrabold text-amber-300 transition hover:bg-amber-300/15"
              >
                <Phone size={17} />
                Call +91 {PHONE}
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-yellow-500 text-sm font-black text-slate-950 shadow-[0_0_22px_rgba(251,191,36,0.2)] transition hover:brightness-110"
              >
                Book Your Cab on WhatsApp
                <ArrowUpRight size={17} />
              </a>

              <p className="pt-2 text-center text-[10px] font-medium text-slate-500">
                Aaruhi Travels · Raipur, Chhattisgarh
              </p>

            </div>

          </div>
        </div>
      )}
    </>
  );
}
