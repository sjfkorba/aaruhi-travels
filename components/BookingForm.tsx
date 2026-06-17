"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";


export default function BookingForm() {
  const [loading, setLoading] = useState(false);

  const [tripType, setTripType] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [journeyTime, setJourneyTime] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [mobile, setMobile] = useState("");

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
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const bookingId =
        "AT-" +
        Date.now().toString().slice(-6);

      await addDoc(collection(db, "enquires"), {
        bookingId,
        tripType,
        vehicleType,
        pickup,
        drop,
        journeyDate,
        journeyTime,
        customerName,
        mobile,
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

🌐 Source: Aaruhi Travels Website
`;

      const whatsappUrl =
        `https://wa.me/919244137353?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");

      setTripType("");
      setVehicleType("");
      setPickup("");
      setDrop("");
      setJourneyDate("");
      setJourneyTime("");
      setCustomerName("");
      setMobile("");

      alert("Booking enquiry submitted successfully.");

    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-primary p-6 shadow-2xl">

      <h2 className="text-center text-3xl font-bold text-white">
        Book Your Cab
      </h2>

      <p className="mb-6 mt-2 text-center text-white/80">
        Book Your Cab In Just A Few Seconds
      </p>

      <div className="space-y-4">

        <select
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
          className="w-full rounded-xl p-4"
        >
          <option value="">Select Trip Type</option>
          <option value="One Way">One Way</option>
          <option value="Round Trip">Round Trip</option>
          <option value="Outstation">Outstation</option>
          <option value="Airport Transfer">Airport Transfer</option>
        </select>

        <select
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          className="w-full rounded-xl p-4"
        >
          <option value="">Select Vehicle</option>
          <option value="Swift Dzire">Swift Dzire</option>
          <option value="Ertiga">Ertiga</option>
          <option value="Innova">Innova</option>
          <option value="Innova Crysta">Innova Crysta</option>
        </select>

        <input
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          placeholder="Pickup Location"
          className="w-full rounded-xl p-4"
        />

        <input
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
          placeholder="Drop Location"
          className="w-full rounded-xl p-4"
        />

        <input
          type="date"
          value={journeyDate}
          onChange={(e) => setJourneyDate(e.target.value)}
          className="w-full rounded-xl p-4"
        />

        <input
          type="time"
          value={journeyTime}
          onChange={(e) => setJourneyTime(e.target.value)}
          className="w-full rounded-xl p-4"
        />

        <input
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Your Name"
          className="w-full rounded-xl p-4"
        />

        <input
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile Number"
          className="w-full rounded-xl p-4"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full rounded-xl bg-secondary py-4 text-lg font-bold text-white transition hover:opacity-90 disabled:opacity-50"
        >
          {loading
            ? "Submitting..."
            : "Get Your Best Estimated Fare"}
        </button>

      </div>

    </div>
  );
}