"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  const phoneNumber = "+917773041111";
  const whatsappMessage =
    "Hello Aaruhi Travels, I would like to get a fare estimate.";

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(
    "+",
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* Desktop only */}
      <div className="fixed bottom-6 right-6 z-[9999] hidden md:flex flex-col gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Booking"
          className="flex items-center gap-3 rounded-2xl bg-green-500 px-5 py-4 text-white shadow-2xl transition hover:scale-105"
        >
          <MessageCircle size={22} aria-hidden="true" />
          <span className="text-sm font-semibold">WhatsApp Booking</span>
        </a>

        <a
          href={`tel:${phoneNumber}`}
          aria-label="Call Now"
          className="flex items-center gap-3 rounded-2xl bg-primary px-5 py-4 text-white shadow-2xl transition hover:scale-105"
        >
          <Phone size={22} aria-hidden="true" />
          <span className="text-sm font-semibold">Call Now</span>
        </a>
      </div>

      {/* Mobile only */}
      <div className="fixed inset-x-0 bottom-0 z-[9999] block md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-2 gap-3 p-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">
          <a
            href={`tel:${phoneNumber}`}
            aria-label="Call Now"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white"
          >
            <Phone size={18} aria-hidden="true" />
            Call Now
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Booking"
            className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white"
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}