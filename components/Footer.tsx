"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">

          {/* Company Info */}
          <div>

            <div className="flex items-center gap-3">

              <Image
                src="/logo.png"
                alt="Aaruhi Travels"
                width={60}
                height={60}
              />

              <div>
                <h3 className="text-2xl font-bold">
                  Aaruhi Travels
                </h3>

                <p className="text-sm text-white/70">
                  One Way Cab Service
                </p>
              </div>

            </div>

            <p className="mt-5 text-sm leading-7 text-white/80">
              Trusted taxi and cab rental service in Chhattisgarh.
              Specializing in affordable one-way taxi services with
              premium comfort, experienced drivers, transparent fares
              and 24×7 customer support since 2011.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-secondary"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-secondary"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-secondary"
              >
                <FaYoutube />
              </a>

              <a
                href="https://wa.me/919244137353"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-600 p-3 transition hover:scale-105"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-5 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-secondary"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-secondary"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/routes"
                  className="text-white/80 hover:text-secondary"
                >
                  Routes
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-white/80 hover:text-secondary"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-secondary"
                >
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>

          {/* Legal & Policies */}
          <div>

            <h3 className="mb-5 text-xl font-bold">
              Legal & Policies
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/80 hover:text-secondary"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-white/80 hover:text-secondary"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/refund-policy"
                  className="text-white/80 hover:text-secondary"
                >
                  Refund Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/booking-policy"
                  className="text-white/80 hover:text-secondary"
                >
                  Booking Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/security-policy"
                  className="text-white/80 hover:text-secondary"
                >
                  Security Policy
                </Link>
              </li>

            </ul>

          </div>

          {/* Popular Routes */}
          <div>

            <h3 className="mb-5 text-xl font-bold">
              Popular Routes
            </h3>

            <ul className="space-y-3 text-white/80">

              <li>Korba → Bilaspur</li>

              <li>Bilaspur → Korba</li>

              <li>Korba → Raipur</li>

              <li>Raipur → Korba</li>

              <li>Korba → Raigarh</li>

              <li>Raigarh → Korba</li>

              <li>Korba → Dharamjaigarh</li>

              <li>Dharamjaigarh → Korba</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-5 text-xl font-bold">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <MapPin className="mt-1" size={18} />

                <p className="text-white/80">
                  Korba, Chhattisgarh, India
                </p>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-1" size={18} />

                <a
                  href="tel:9244137353"
                  className="text-white/80"
                >
                  +91 92441 37353
                </a>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1" size={18} />

                <a
                  href="mailto:aaruhitravelskrb@gmail.com"
                  className="text-white/80 break-all"
                >
                  aaruhitravelskrb@gmail.com
                </a>
              </div>

            </div>

            {/* CTA */}
            <a
              href="https://wa.me/919244137353"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-xl bg-secondary px-5 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Book On WhatsApp
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-4 py-6">

          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-white/70 lg:flex-row">

            <p>
              © {new Date().getFullYear()} Aaruhi Travels.
              All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-5">

              <Link href="/privacy-policy">
                Privacy Policy
              </Link>

              <Link href="/terms-and-conditions">
                Terms
              </Link>

              <Link href="/refund-policy">
                Refund Policy
              </Link>

              <Link href="/booking-policy">
                Booking Policy
              </Link>

              <Link href="/security-policy">
                Security Policy
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}