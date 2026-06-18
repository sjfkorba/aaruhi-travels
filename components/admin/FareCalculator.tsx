"use client";

import { useState } from "react";
import LocationInput from "../LocationInput";
import { VehicleType, BookingType, calculateFare } from "@/lib/fareCalculator";
import { VEHICLES } from "@/lib/fareCalculator";

export default function FareCalculator() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehicleType, setVehicleType] = useState<VehicleType>("sedan");
  const [bookingType, setBookingType] = useState<BookingType>("oneway");
  
  const [distance, setDistance] = useState(0);
  const [extraKm, setExtraKm] = useState(0);
  const [billingKm, setBillingKm] = useState(0);
  const [fare, setFare] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const calculateFareWithGoogle = async () => {
    if (!pickup.trim() || !drop.trim()) {
      alert("Please enter both pickup and drop locations");
      return;
    }

    setIsLoading(true);

    try {
      // Tumhare existing API use karo
      const response = await fetch("/api/distance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          origin: pickup,
          destination: drop,
        }),
      });

      const data = await response.json();
      
      if (!data.distanceKm || data.distanceKm === 0) {
        alert("Unable to calculate distance. Please check locations.");
        setIsLoading(false);
        return;
      }

      const actualDistance = Number(data.distanceKm || 0);

      // Naya Extra KM Logic (tumhare bataye hisaab se)
      let extra = 5;
      if (actualDistance <= 50) extra = 5;
      else if (actualDistance <= 100) extra = 6;
      else if (actualDistance <= 150) extra = 7;
      else if (actualDistance <= 250) extra = 10;
      else if (actualDistance <= 400) extra = 15;
      else if (actualDistance <= 600) extra = 20;
      else extra = 25;

      const billKm = actualDistance + extra;
      
      // Updated fare calculator use karo (lib/fareCalculator.ts se)
      const fareResult = calculateFare({
        distance: actualDistance,
        vehicleType: vehicleType,
        bookingType: bookingType,
      });

      setDistance(actualDistance);
      setExtraKm(extra);
      setBillingKm(billKm);
      setFare(fareResult.finalFare);
    } catch (error) {
      console.error(error);
      alert("Unable to calculate fare");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">
      <h2 className="mb-5 text-2xl font-bold">Fare Calculator</h2>

      <div className="space-y-4">
        <LocationInput
          value={pickup}
          onChange={setPickup}
          placeholder="Pickup Location"
        />

        <LocationInput
          value={drop}
          onChange={setDrop}
          placeholder="Drop Location"
        />

        {/* Vehicle Selector */}
        <div>
          <label className="mb-2 block font-semibold">Vehicle Type</label>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value as VehicleType)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none"
          >
            {Object.entries(VEHICLES).map(([key, vehicle]) => (
              <option key={key} value={key}>
                {vehicle.label}
              </option>
            ))}
          </select>
        </div>

        {/* Booking Type Selector */}
        <div>
          <label className="mb-2 block font-semibold">Ride Type</label>
          <select
            value={bookingType}
            onChange={(e) => setBookingType(e.target.value as BookingType)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none"
          >
            <option value="oneway">One Way</option>
            <option value="roundtrip">Round Trip</option>
            <option value="local">Local (8Hr / 80Km)</option>
            <option value="airporttransfer">Airport Transfer</option>
          </select>
        </div>

        <button
          onClick={calculateFareWithGoogle}
          disabled={isLoading}
          className="w-full rounded-xl bg-primary py-4 font-semibold text-white disabled:bg-gray-400"
        >
          {isLoading ? "Calculating..." : "Calculate Fare"}
        </button>

        {distance > 0 && (
          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Actual Distance</span>
                <span>{distance} KM</span>
              </div>

              <div className="flex justify-between">
                <span>Extra KM</span>
                <span>{extraKm} KM</span>
              </div>

              <div className="flex justify-between">
                <span>Billing KM</span>
                <span>{billingKm} KM</span>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold text-primary">
                <span>Estimated Fare</span>
                <span>₹{fare}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}