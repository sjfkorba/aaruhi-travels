"use client";

import {
  IndianRupee,
  Car,
  UserCheck,
  Clock3,
  Headphones,
  MapPinned,
} from "lucide-react";

const features = [
  {
    icon: IndianRupee,
    title: "Transparent Fares",
    description: "No hidden charges. What you see is what you pay.",
    bg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Car,
    title: "Clean & Sanitized Cars",
    description: "Well maintained, comfortable and hygienic vehicles.",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: UserCheck,
    title: "Experienced Drivers",
    description: "Verified and professional drivers for safe travel.",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Clock3,
    title: "On Time Guarantee",
    description: "Punctual pickup and reliable drop service.",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Headphones,
    title: "24×7 Support",
    description: "Dedicated customer support anytime you need.",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: MapPinned,
    title: "Doorstep Pickup",
    description: "Pickup directly from your location without hassle.",
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}
        <div className="text-center">

          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl font-bold text-primary md:text-5xl">
            Why Choose Aaruhi Travels?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Experience safe, affordable and reliable one-way cab
            services across Chhattisgarh with complete transparency
            and professional support.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg}`}
                >
                  <Icon
                    size={30}
                    className={item.iconColor}
                  />
                </div>

                <h3 className="text-xl font-bold text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 rounded-3xl gradient-primary p-8 text-white">

          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">

            <div>
              <h3 className="text-4xl font-bold">
                5000+
              </h3>

              <p className="mt-2 text-sm opacity-90">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">
                4.9★
              </h3>

              <p className="mt-2 text-sm opacity-90">
                Average Rating
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">
                24×7
              </h3>

              <p className="mt-2 text-sm opacity-90">
                Customer Support
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">
                100%
              </h3>

              <p className="mt-2 text-sm opacity-90">
                Transparent Pricing
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}