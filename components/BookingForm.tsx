
"use client";

import { useState } from "react";
import Script from "next/script";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { SITE_CONFIG } from "@/lib/site-config";
import LocationInput from "@/components/LocationInput";

import {
  calculateFare,
  VehicleType,
  BookingType,
} from "@/lib/fareCalculator";

import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CarFront,
  Check,
  Clock3,
  Loader2,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
} from "lucide-react";

type TripType = "One Way" | "Round Trip" | "Airport Transfer";

type BookingFormProps = {
  initialPickup?: string;
  initialDrop?: string;
  initialTripType?: TripType | "";
};

const vehicles = [
  { name: "Swift Dzire", detail: "Sedan · 4+1" },
  { name: "Ertiga", detail: "SUV · 6+1" },
  { name: "Innova", detail: "MUV · 6+1" },
  { name: "Innova Crysta", detail: "Premium · 6+1" },
];

export default function BookingForm({
  initialPickup = "",
  initialDrop = "",
  initialTripType = "",
}: BookingFormProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isGoogleReady, setIsGoogleReady] = useState(false);
  const [emailFailed, setEmailFailed] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const [tripType, setTripType] = useState<TripType | "">(initialTripType);
  const [vehicleType, setVehicleType] = useState("");
  const [pickup, setPickup] = useState(initialPickup);
  const [drop, setDrop] = useState(initialDrop);
  const [journeyDate, setJourneyDate] = useState("");
  const [journeyTime, setJourneyTime] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [mobile, setMobile] = useState("");

  const [error, setError] = useState("");

  const today = (() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  })();

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

  const validateStepOne = () => {
    if (
      !tripType ||
      !pickup.trim() ||
      !drop.trim() ||
      !journeyDate ||
      !journeyTime ||
      !vehicleType
    ) {
      setError("Please complete all journey details.");
      return false;
    }

    if (journeyDate < today) {
      setError("Please select today or a future journey date.");
      return false;
    }

    setError("");
    return true;
  };

  const handleContinue = () => {
    if (!validateStepOne()) return;
    setStep(2);
  };

  const handleBack = () => {
    setError("");
    setStep(1);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!customerName.trim()) {
      setError("Please enter your name.");
      return;
    }

    const cleanMobile = mobile.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!validateStepOne()) {
      setStep(1);
      return;
    }

    try {
      setLoading(true);
      setEmailFailed(false);

      const bookingId = "AT-" + Date.now().toString().slice(-6);

      // 1. Get route distance
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

      if (!distanceResponse.ok) {
        throw new Error("Unable to calculate route distance.");
      }

      const distanceData = await distanceResponse.json();
      const actualDistanceKm = Number(distanceData.distanceKm) || 0;

      if (actualDistanceKm <= 0) {
        throw new Error(
          "Could not find the route distance. Please check pickup and drop locations."
        );
      }

      let extraDistanceKm = 20;

      if (actualDistanceKm < 100) extraDistanceKm = 15;
      if (actualDistanceKm > 300) extraDistanceKm = 25;

      const billingDistanceKm = actualDistanceKm + extraDistanceKm;

      // 2. Calculate estimated fare
      const fareResult = calculateFare({
        distance: billingDistanceKm,
        vehicleType: getVehicleType(),
        bookingType: getBookingType(),
      });

      // 3. Save lead to Firestore
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
        customerName: customerName.trim(),
        mobile: cleanMobile,
        actualDistanceKm,
        extraDistanceKm,
        billingDistanceKm,
        estimatedFare: fareResult.finalFare,
        status: "new",
        createdAt: serverTimestamp(),
      });

      // 4. Send server-side enquiry email.
      // Email failure must not undo an already saved enquiry.
      try {
        const emailResponse = await fetch("/api/send-enquiry", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "B2C",
            tripType,
            name: customerName.trim(),
            mobile: cleanMobile,
            pickup,
            drop,
            travelDate: journeyDate,
            journeyTime,
            car: vehicleType,
            note: `Booking ID: ${bookingId}. Estimated distance: ${actualDistanceKm} KM. Estimated fare: ₹${fareResult.finalFare}.`,
          }),
        });

        if (!emailResponse.ok) {
          setEmailFailed(true);
        } else {
          const emailResult = await emailResponse.json();
          if (!emailResult.success) setEmailFailed(true);
        }
      } catch (emailError) {
        console.error("Enquiry email failed:", emailError);
        setEmailFailed(true);
      }

      // 5. Prepare WhatsApp message.
      const message = `
🚖 NEW BOOKING ENQUIRY
Agency: Aaruhi Travels

🆔 Booking ID: ${bookingId}

👤 Name: ${customerName}
📞 Mobile: ${cleanMobile}

🛣️ Trip Type: ${tripType}
🚗 Vehicle: ${vehicleType}

📍 Pickup: ${pickup}
📍 Drop: ${drop}

📅 Journey Date: ${journeyDate}
⏰ Journey Time: ${journeyTime}

📏 Distance: ${actualDistanceKm} KM
💰 Estimated Fare: ₹${fareResult.finalFare}

🌐 Source: Aaruhi Travels
      `.trim();

      setWhatsappUrl(
        `https://wa.me/919244137353?text=${encodeURIComponent(message)}`
      );

      // 6. Show confirmation
      setSubmitted(true);
    } catch (submitError) {
      console.error("Booking enquiry error:", submitError);

      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // SUCCESS SCREEN
  if (submitted) {
    return (
      <div className="py-5 text-center sm:py-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
          <BadgeCheck size={38} />
        </div>

        <h3 className="mt-4 text-2xl font-black text-slate-900">
          Enquiry Received!
        </h3>

        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
          Thank you for choosing Aaruhi Travels. Our team will contact you
          shortly with your travel quotation.
        </p>

        {emailFailed && (
          <p className="mx-auto mt-3 max-w-sm rounded-xl bg-amber-50 p-3 text-xs text-amber-800">
            Your enquiry has been saved, but the email notification could not
            be sent. Our team can still access your enquiry in the admin panel.
          </p>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 text-sm font-extrabold text-white transition hover:bg-green-700"
        >
          <Phone size={17} />
          Send Details on WhatsApp
        </a>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setStep(1);
            setTripType(initialTripType);
            setVehicleType("");
            setPickup(initialPickup);
            setDrop(initialDrop);
            setJourneyDate("");
            setJourneyTime("");
            setCustomerName("");
            setMobile("");
            setWhatsappUrl("");
            setEmailFailed(false);
            setError("");
          }}
          className="mx-auto mt-4 block text-xs font-bold text-orange-700 hover:underline"
        >
          Submit another enquiry
        </button>
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

      <form onSubmit={handleSubmit} className="w-full">
        {/* STEP INDICATOR */}
        <div className="mb-5 flex items-center gap-3">
          <div className="flex flex-1 items-center gap-2">
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                step === 1
                  ? "bg-orange-600 text-white"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {step === 1 ? "1" : <Check size={15} />}
            </span>

            <div className="min-w-0">
              <p className="text-[11px] font-extrabold text-slate-900">
                Journey Details
              </p>
              <p className="text-[9px] text-slate-400">Route & cab</p>
            </div>
          </div>

          <div className="h-px flex-1 bg-slate-200" />

          <div className="flex flex-1 items-center justify-end gap-2">
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                step === 2
                  ? "bg-orange-600 text-white"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              2
            </span>

            <div className="min-w-0">
              <p className="text-[11px] font-extrabold text-slate-900">
                Your Details
              </p>
              <p className="text-[9px] text-slate-400">Contact information</p>
            </div>
          </div>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-4">
            {/* TRIP TYPE */}
            <div>
              <label className="mb-2 block text-[11px] font-extrabold text-slate-700">
                What kind of trip are you planning?
              </label>

              <div className="grid grid-cols-3 gap-2">
                {(["One Way", "Round Trip", "Airport Transfer"] as TripType[]).map(
                  (type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setTripType(type);
                        setError("");
                      }}
                      className={`min-h-10 rounded-xl border px-2 py-2 text-[10px] font-extrabold transition sm:text-xs ${
                        tripType === type
                          ? "border-orange-500 bg-orange-50 text-orange-700 ring-1 ring-orange-200"
                          : "border-slate-200 bg-white text-slate-600 hover:border-orange-300"
                      }`}
                    >
                      {type}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* PICKUP AND DROP */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="min-w-0">
                <label className="mb-1.5 flex items-center gap-1.5 text-[11px] font-extrabold text-slate-700">
                  <MapPin size={13} className="text-orange-600" />
                  Pickup Location
                </label>

                <LocationInput
                  value={pickup}
                  onChange={setPickup}
                  placeholder="Enter pickup location"
                  isGoogleReady={isGoogleReady}
                />
              </div>

              <div className="min-w-0">
                <label className="mb-1.5 flex items-center gap-1.5 text-[11px] font-extrabold text-slate-700">
                  <MapPin size={13} className="text-orange-600" />
                  Drop Location
                </label>

                <LocationInput
                  value={drop}
                  onChange={setDrop}
                  placeholder="Enter destination"
                  isGoogleReady={isGoogleReady}
                />
              </div>
            </div>

            {/* DATE AND TIME */}
            <div className="grid grid-cols-2 gap-3">
              <div className="min-w-0">
                <label className="mb-1.5 flex items-center gap-1.5 text-[11px] font-extrabold text-slate-700">
                  <CalendarDays size={13} className="text-orange-600" />
                  Journey Date
                </label>

                <input
                  type="date"
                  min={today}
                  required
                  value={journeyDate}
                  onChange={(e) => setJourneyDate(e.target.value)}
                  className="h-11 w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-800 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div className="min-w-0">
                <label className="mb-1.5 flex items-center gap-1.5 text-[11px] font-extrabold text-slate-700">
                  <Clock3 size={13} className="text-orange-600" />
                  Pickup Time
                </label>

                <input
                  type="time"
                  required
                  value={journeyTime}
                  onChange={(e) => setJourneyTime(e.target.value)}
                  className="h-11 w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-800 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                />
              </div>
            </div>

            {/* COMPACT VEHICLE SELECTION */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-[11px] font-extrabold text-slate-700">
                  Choose Your Vehicle
                </label>
                <span className="text-[10px] font-medium text-slate-400">
                  Select one
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {vehicles.map((vehicle) => {
                  const selected = vehicleType === vehicle.name;

                  return (
                    <button
                      key={vehicle.name}
                      type="button"
                      onClick={() => {
                        setVehicleType(vehicle.name);
                        setError("");
                      }}
                      className={`relative flex min-h-[68px] min-w-0 flex-col items-start justify-center rounded-xl border px-3 py-2.5 text-left transition ${
                        selected
                          ? "border-orange-500 bg-orange-50 ring-1 ring-orange-300"
                          : "border-slate-200 bg-white hover:border-orange-300 hover:bg-orange-50/40"
                      }`}
                    >
                      {selected && (
                        <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-white">
                          <Check size={10} />
                        </span>
                      )}

                      <CarFront
                        size={19}
                        className={
                          selected ? "text-orange-600" : "text-slate-400"
                        }
                      />

                      <span
                        className={`mt-1.5 text-[10px] font-extrabold leading-4 ${
                          selected ? "text-orange-800" : "text-slate-800"
                        }`}
                      >
                        {vehicle.name}
                      </span>

                      <span className="text-[9px] text-slate-400">
                        {vehicle.detail}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-4">
            {/* TRIP SUMMARY */}
            <div className="rounded-xl border border-orange-100 bg-orange-50/70 p-3">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-orange-800">
                  Your journey summary
                </p>
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-[10px] font-bold text-orange-700 hover:underline"
                >
                  Edit trip
                </button>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="min-w-0">
                  <p className="text-[9px] text-slate-500">From</p>
                  <p className="truncate text-xs font-bold text-slate-800">
                    {pickup}
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] text-slate-500">To</p>
                  <p className="truncate text-xs font-bold text-slate-800">
                    {drop}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] text-slate-500">Trip</p>
                  <p className="text-xs font-bold text-slate-800">
                    {tripType}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] text-slate-500">Vehicle</p>
                  <p className="text-xs font-bold text-slate-800">
                    {vehicleType}
                  </p>
                </div>
              </div>
            </div>

            {/* NAME */}
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-[11px] font-extrabold text-slate-700">
                <UserRound size={14} className="text-orange-600" />
                Your Full Name
              </label>

              <input
                type="text"
                autoComplete="name"
                required
                maxLength={80}
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your full name"
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* MOBILE */}
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-[11px] font-extrabold text-slate-700">
                <Phone size={14} className="text-orange-600" />
                Mobile Number
              </label>

              <div className="flex h-12 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100">
                <span className="flex items-center border-r border-slate-200 bg-slate-100 px-3 text-xs font-bold text-slate-600">
                  +91
                </span>

                <input
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  required
                  maxLength={10}
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  placeholder="10-digit mobile number"
                  className="w-full min-w-0 bg-transparent px-3 text-sm outline-none"
                />
              </div>

              <p className="mt-1.5 text-[10px] text-slate-400">
                We'll contact you on this number with your travel quote.
              </p>
            </div>

            <div className="flex items-start gap-2 rounded-xl bg-slate-50 p-3">
              <ShieldCheck size={16} className="mt-0.5 shrink-0 text-green-600" />
              <p className="text-[10px] leading-5 text-slate-500">
                Your contact details are used only to coordinate your taxi
                enquiry and booking.
              </p>
            </div>
          </div>
        )}

        {/* ERROR */}
        {error && (
          <div
            role="alert"
            className="mt-4 rounded-xl border border-red-100 bg-red-50 px-3 py-2.5 text-xs font-semibold text-red-700"
          >
            {error}
          </div>
        )}

        {/* ACTIONS */}
        <div className="mt-5 flex gap-2">
          {step === 2 && (
            <button
              type="button"
              onClick={handleBack}
              disabled={loading}
              className="inline-flex h-12 shrink-0 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
            >
              <ArrowLeft size={15} />
              Back
            </button>
          )}

          {step === 1 ? (
            <button
              type="button"
              onClick={handleContinue}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 text-sm font-extrabold text-white shadow-lg shadow-orange-200/60 transition hover:-translate-y-0.5 hover:bg-orange-700"
            >
              Continue to Passenger Details
              <ArrowRight size={17} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 text-sm font-extrabold text-white shadow-lg shadow-orange-200/60 transition hover:-translate-y-0.5 hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Submitting Enquiry...
                </>
              ) : (
                <>
                  Submit Enquiry
                  <ArrowRight size={17} />
                </>
              )}
            </button>
          )}
        </div>

        <p className="mt-3 text-center text-[10px] leading-5 text-slate-400">
          No advance payment required to submit an enquiry.
        </p>
      </form>
    </>
  );
}
