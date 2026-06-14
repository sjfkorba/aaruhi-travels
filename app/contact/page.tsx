
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";
import Hero from "../../components/Hero";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Contact Aaruhi Travels | Taxi Booking in Chhattisgarh",
  description:
    "Contact Aaruhi Travels for one way taxi booking across Chhattisgarh. Call, WhatsApp or email us for instant fare estimates and cab booking.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar/>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* Phone */}
            <div className="group rounded-3xl bg-linear-to-br from-blue-500 to-blue-700 p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/40">
              <Phone className="mb-5 animate-pulse" size={42} />

              <h3 className="text-2xl font-bold">
                Call Us
              </h3>

              <p className="mt-3 text-white/80">
                Speak directly with our booking team.
              </p>

              <a
                href="tel:9244137353"
                className="mt-6 inline-block rounded-xl bg-white px-5 py-3 font-semibold text-blue-700"
              >
                9244137353
              </a>
            </div>

            {/* WhatsApp */}
            <div className="group rounded-3xl bg-linear-to-br from-green-500 to-emerald-700 p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-green-500/40">

              <FaWhatsapp
                className="mb-5 animate-bounce"
                size={42}
              />

              <h3 className="text-2xl font-bold">
                WhatsApp Booking
              </h3>

              <p className="mt-3 text-white/80">
                Get instant fare estimate and taxi booking.
              </p>

              <a
                href="https://wa.me/919244137353"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-xl bg-white px-5 py-3 font-semibold text-green-700"
              >
                Chat Now
              </a>

            </div>

            {/* Email */}
            <div className="group rounded-3xl bg-linear-to-br from-purple-500 to-violet-700 p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-purple-500/40">

              <Mail
                className="mb-5 transition duration-500 group-hover:rotate-12"
                size={42}
              />

              <h3 className="text-2xl font-bold">
                Email Support
              </h3>

              <p className="mt-3 text-white/80">
                Send your travel requirements anytime.
              </p>

              <a
                href="mailto:aaruhitravelskrb@gmail.com"
                className="mt-6 inline-block rounded-xl bg-white px-5 py-3 font-semibold text-purple-700"
              >
                Send Email
              </a>

            </div>

            {/* Location */}
            <div className="group rounded-3xl bg-linear-to-br from-orange-500 to-red-500 p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-orange-500/40">

              <MapPin
                className="mb-5 animate-bounce"
                size={42}
              />

              <h3 className="text-2xl font-bold">
                Service Area
              </h3>

              <p className="mt-3 text-white/80">
                Korba, Bilaspur, Raipur, Raigarh &
                Entire Chhattisgarh
              </p>

            </div>

            {/* Timing */}
            <div className="group rounded-3xl bg-linear-to-br from-cyan-500 to-sky-700 p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40">

              <Clock3
                className="mb-5 animate-pulse"
                size={42}
              />

              <h3 className="text-2xl font-bold">
                Working Hours
              </h3>

              <p className="mt-3 text-white/80">
                Available 24×7 for Taxi Booking
              </p>

              <div className="mt-6 rounded-xl bg-white/20 px-5 py-3">
                Always Open
              </div>

            </div>

            {/* Trust */}
            <div className="group rounded-3xl bg-linear-to-br from-pink-500 to-rose-700 p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-pink-500/40">

              <ShieldCheck
                className="mb-5 animate-pulse"
                size={42}
              />

              <h3 className="text-2xl font-bold">
                Trusted Since 2011
              </h3>

              <p className="mt-3 text-white/80">
                15+ Years Experience in Taxi &
                Travel Industry
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4">

          <div className="rounded-3xl border bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-center text-3xl font-bold text-primary">
              Quick Enquiry Form
            </h2>

            <div className="grid gap-5">

              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border p-4"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="rounded-xl border p-4"
              />

              <input
                type="text"
                placeholder="Pickup Location"
                className="rounded-xl border p-4"
              />

              <input
                type="text"
                placeholder="Drop Location"
                className="rounded-xl border p-4"
              />

              <textarea
                rows={5}
                placeholder="Travel Details"
                className="rounded-xl border p-4"
              />

              <button className="rounded-xl bg-primary py-4 font-semibold text-white">
                Submit Enquiry
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* Major Routes */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">

          <h2 className="mb-10 text-center text-4xl font-bold text-primary">
            Popular Taxi Routes
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Korba → Bilaspur",
              "Bilaspur → Korba",
              "Korba → Raipur",
              "Raipur → Korba",
              "Korba → Raigarh",
              "Raigarh → Korba",
              "Korba → Dharamjaigarh",
              "Dharamjaigarh → Korba",
            ].map((route) => (
              <div
                key={route}
                className="rounded-2xl bg-white p-5 text-center shadow-sm"
              >
                {route}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">

          <div className="rounded-3xl bg-primary p-10 text-center text-white">

            <MessageCircle
              size={60}
              className="mx-auto mb-5"
            />

            <h2 className="text-4xl font-bold">
              Need Instant Taxi Booking?
            </h2>

            <p className="mt-4 text-white/80">
              Contact us now for affordable one-way taxi
              services anywhere in Chhattisgarh.
            </p>

            <a
              href="https://wa.me/919244137353"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-primary"
            >
              Book on WhatsApp
            </a>

          </div>

        </div>
      </section>
      <Footer/>
    </>
  );
}