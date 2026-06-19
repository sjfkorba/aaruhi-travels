"use client";

import { useState } from "react";
import Script from "next/script";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "@/lib/firebase";
import { SITE_CONFIG } from "@/lib/site-config";
import LocationInput from "@/components/LocationInput";

import {
  calculateFare,
  VehicleType,
  BookingType,
} from "@/lib/fareCalculator";

import {
  Car,
  Calendar,
  Clock,
  User,
  Phone,
  Loader2,
  Shield,
  BadgeCheck,
  Zap,
} from "lucide-react";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isGoogleReady, setIsGoogleReady] = useState(false);

  const [tripType, setTripType] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [journeyTime, setJourneyTime] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [mobile, setMobile] = useState("");

  const vehicles = [
    "Swift Dzire",
    "Ertiga",
    "Innova",
    "Innova Crysta",
  ];

  const getVehicleType = (): VehicleType => {
    switch (vehicleType) {
      case "Swift Dzire":
        return "sedan";
      case "Ertiga":
        return "ertiga";
      case "Innova":
        return "innova";
      case "Innova Crysta":
        return "crysta";
      default:
        return "sedan";
    }
  };

  const getBookingType = (): BookingType => {
    switch (tripType) {
      case "One Way":
        return "oneway";
      case "Round Trip":
        return "roundtrip";
      case "Airport Transfer":
        return "airporttransfer";
      default:
        return "oneway";
    }
  };

  const handleSubmit = async () => {
    if (
      !tripType ||
      !vehicleType ||
      !pickup ||
      !drop ||
      !journeyDate ||
      !journeyTime ||
      !customerName ||
      !mobile
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const bookingId = "AT-" + Date.now().toString().slice(-6);

      const distanceResponse = await fetch("/api/distance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          origin: pickup,
          destination: drop,
        }),
      });

      const distanceData = await distanceResponse.json();
      const actualDistanceKm = distanceData.distanceKm || 0;

      let extraDistanceKm = 20;
      if (actualDistanceKm < 100) extraDistanceKm = 15;
      if (actualDistanceKm > 300) extraDistanceKm = 25;

      const billingDistanceKm = actualDistanceKm + extraDistanceKm;

      const fareResult = calculateFare({
        distance: billingDistanceKm,
        vehicleType: getVehicleType(),
        bookingType: getBookingType(),
      });

      await addDoc(collection(db, "enquires"), {
        bookingId,
        agencyName: SITE_CONFIG.agencyName,
        websiteSource: SITE_CONFIG.websiteSource,
        leadSource: SITE_CONFIG.leadSource,
        tripType,
        vehicleType,
        pickup,
        drop,
        journeyDate,
        journeyTime,
        customerName,
        mobile,
        actualDistanceKm,
        extraDistanceKm,
        billingDistanceKm,
        estimatedFare: fareResult.finalFare,
        status: "new",
        createdAt: serverTimestamp(),
      });

      const message = `
🚖 NEW BOOKING ENQUIRY

🆔 Booking ID: ${bookingId}

👤 Name: ${customerName}
📞 Mobile: ${mobile}

🛣️ Trip Type: ${tripType}
🚗 Vehicle: ${vehicleType}

📍 Pickup: ${pickup}
📍 Drop: ${drop}

📅 Journey Date: ${journeyDate}
⏰ Journey Time: ${journeyTime}

🌐 Source: ${SITE_CONFIG.agencyName}
`;

      const whatsappUrl = `https://wa.me/919244137353?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappUrl, "_blank");

      setSubmitted(true);
      setTripType("");
      setVehicleType("");
      setPickup("");
      setDrop("");
      setJourneyDate("");
      setJourneyTime("");
      setCustomerName("");
      setMobile("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl bg-white p-8 shadow-2xl">
        <div className="text-center">
          <BadgeCheck
            size={70}
            className="mx-auto text-green-600"
          />
          <h2 className="mt-4 text-3xl font-bold">
            Thank You!
          </h2>
          <p className="mt-3 text-gray-600">
            Your booking enquiry has been received.
          </p>
          <p className="mt-2 text-gray-500">
            Our team will contact you shortly with the best available quote.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Script
        id="google-maps-script"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="afterInteractive"
        onLoad={() => setIsGoogleReady(true)}
      />

      <div className="w-full overflow-visible rounded-[24px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] lg:rounded-[32px]">
        <div className="bg-primary p-6 text-white">
          <h2 className="text-center text-3xl font-bold">
            Book Your Cab
          </h2>

          <p className="mt-2 text-center text-white/80">
            In Just 30 Seconds
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="rounded-xl bg-white/10 p-2">
              <Shield
                size={18}
                className="mx-auto mb-1"
              />
              Safe Ride
            </div>

            <div className="rounded-xl bg-white/10 p-2">
              <BadgeCheck
                size={18}
                className="mx-auto mb-1"
              />
              Trusted
            </div>

            <div className="rounded-xl bg-white/10 p-2">
              <Zap
                size={18}
                className="mx-auto mb-1"
              />
              Instant Quote
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-5 lg:p-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Select Trip Type
            </label>

            <select
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-orange-500"
            >
              <option value="">Choose Trip Type</option>
              <option>One Way</option>
              <option>Round Trip</option>
              <option>Airport Transfer</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block text-sm font-semibold text-gray-700">
              Select Vehicle
            </label>

            <div className="grid grid-cols-2 gap-3">
              {vehicles.map((vehicle) => (
                <button
                  key={vehicle}
                  type="button"
                  onClick={() => setVehicleType(vehicle)}
                  className={`min-h-[88px] rounded-2xl border p-3 transition-all sm:p-4 ${
                    vehicleType === vehicle
                      ? "border-primary bg-primary text-white shadow-lg"
                      : "border-slate-200 bg-white hover:border-orange-300"
                  }`}
                >
                  <Car
                    size={24}
                    className="mx-auto mb-2"
                  />
                  <div className="text-sm font-semibold">
                    {vehicle}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Pickup Location
            </label>
            <LocationInput
              value={pickup}
              onChange={setPickup}
              placeholder="Enter Pickup Location"
              isGoogleReady={isGoogleReady}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Drop Location
            </label>
            <LocationInput
              value={drop}
              onChange={setDrop}
              placeholder="Enter Drop Location"
              isGoogleReady={isGoogleReady}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Journey Date
              </label>

              <div className="relative">
                <Calendar
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />
                <input
                  type="date"
                  value={journeyDate}
                  onChange={(e) => setJourneyDate(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 py-4 pl-11 pr-4 outline-none transition focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Time
              </label>

              <div className="relative">
                <Clock
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />
                <input
                  type="time"
                  value={journeyTime}
                  onChange={(e) => setJourneyTime(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 py-4 pl-11 pr-4 outline-none transition focus:border-orange-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Your Name
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />
              <input
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter Your Name"
                className="w-full rounded-2xl border border-slate-200 py-4 pl-11 pr-4 outline-none transition focus:border-orange-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Mobile Number
            </label>

            <div className="relative">
              <Phone
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />
              <input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter Mobile Number"
                className="w-full rounded-2xl border border-slate-200 py-4 pl-11 pr-4 outline-none transition focus:border-orange-500"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex w-full items-center justify-center rounded-2xl bg-secondary py-5 text-lg font-bold text-white shadow-lg transition hover:scale-[1.01] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2
                  size={20}
                  className="mr-2 animate-spin"
                />
                Processing...
              </>
            ) : (
              <>Get Best Quote On WhatsApp</>
            )}
          </button>

          <p className="text-center text-xs text-gray-500">
            By continuing, you agree to receive booking updates via WhatsApp and
            phone call.
          </p>
        </div>
      </div>
    </>
  );
}