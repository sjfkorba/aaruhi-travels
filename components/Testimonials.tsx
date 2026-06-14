"use client";

import {
  Star,
  Quote,
  BadgeCheck,
} from "lucide-react";

const testimonials = [
  {
    name: "Rahul Verma",
    location: "Raipur",
    rating: 5,
    review:
      "Excellent cab service. Driver was punctual and fare was exactly what was quoted. Highly recommended.",
  },
  {
    name: "Priya Sharma",
    location: "Bilaspur",
    rating: 5,
    review:
      "Booked Raipur to Bilaspur cab through WhatsApp. Very smooth experience and professional support.",
  },
  {
    name: "Amit Sahu",
    location: "Jagdalpur",
    rating: 5,
    review:
      "Clean vehicle, experienced driver and transparent pricing. Definitely booking again.",
  },
  {
    name: "Neha Patel",
    location: "Raigarh",
    rating: 5,
    review:
      "24x7 support is amazing. They confirmed my booking instantly and journey was comfortable.",
  },
  {
    name: "Sandeep Gupta",
    location: "Durg",
    rating: 5,
    review:
      "Best one-way taxi service in Chhattisgarh. No hidden charges and quick response.",
  },
  {
    name: "Anjali Mishra",
    location: "Ambikapur",
    rating: 5,
    review:
      "Affordable fare and professional drivers. Booking process was very simple.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}
        <div className="text-center">

          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Customer Reviews
          </span>

          <h2 className="mt-5 text-3xl font-bold text-primary md:text-5xl">
            Loved By Travelers Across Chhattisgarh
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Thousands of customers trust Aaruhi Travels
            for safe, affordable and reliable one-way cab
            services.
          </p>

        </div>

        {/* Rating Banner */}
        <div className="mt-12 rounded-3xl border bg-white p-8 shadow-sm">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <div>
              <h3 className="text-5xl font-bold text-primary">
                4.9
              </h3>

              <div className="mt-2 flex items-center gap-1 text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="mt-2 text-muted-foreground">
                Based on 5,000+ Customer Reviews
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-green-50 px-6 py-4">

              <BadgeCheck
                size={28}
                className="text-green-600"
              />

              <div>
                <h4 className="font-semibold text-green-700">
                  Verified Reviews
                </h4>

                <p className="text-sm text-green-600">
                  Real feedback from genuine customers
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((review, index) => (
            <div
              key={index}
              className="group rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <Quote
                className="mb-4 text-secondary"
                size={32}
              />

              <div className="mb-4 flex text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="leading-relaxed text-muted-foreground">
                "{review.review}"
              </p>

              <div className="mt-6 border-t pt-4">

                <h4 className="font-semibold text-primary">
                  {review.name}
                </h4>

                <p className="text-sm text-muted-foreground">
                  {review.location}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">

          <div className="inline-flex flex-col items-center rounded-3xl gradient-primary px-10 py-8 text-white">

            <h3 className="text-3xl font-bold">
              Ready To Book Your Ride?
            </h3>

            <p className="mt-3 max-w-xl text-white/80">
              Get instant fare estimate and confirm your
              booking within minutes.
            </p>

            <a
              href="https://wa.me/917773041111"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 rounded-2xl bg-secondary px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Book On WhatsApp
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}