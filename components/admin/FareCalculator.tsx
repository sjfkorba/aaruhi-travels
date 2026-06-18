"use client";

import { useState } from "react";

export default function FareCalculator() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const [distance, setDistance] = useState(0);
  const [extraKm, setExtraKm] = useState(0);
  const [billingKm, setBillingKm] = useState(0);
  const [fare, setFare] = useState(0);

  const calculateFare = async () => {
    try {
      const response = await fetch(
        "/api/distance",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            origin: pickup,
            destination: drop,
          }),
        }
      );

      const data =
        await response.json();

      const actualDistance =
        Number(data.distanceKm || 0);

      let extra = 7;

      if (actualDistance > 150)
        extra = 10;

      if (actualDistance > 250)
        extra = 15;

      if (actualDistance > 400)
        extra = 20;

      if (actualDistance > 600)
        extra = 25;

      const billKm =
        actualDistance + extra;

      const estimatedFare =
        billKm * 16;

      setDistance(actualDistance);
      setExtraKm(extra);
      setBillingKm(billKm);
      setFare(estimatedFare);
    } catch (error) {
      console.error(error);
      alert("Unable to calculate fare");
    }
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">

      <h2 className="mb-5 text-2xl font-bold">
        Fare Calculator
      </h2>

      <div className="space-y-4">

        <input
          type="text"
          placeholder="Pickup Location"
          value={pickup}
          onChange={(e) =>
            setPickup(e.target.value)
          }
          className="w-full rounded-xl border p-4"
        />

        <input
          type="text"
          placeholder="Drop Location"
          value={drop}
          onChange={(e) =>
            setDrop(e.target.value)
          }
          className="w-full rounded-xl border p-4"
        />

        <button
          onClick={calculateFare}
          className="w-full rounded-xl bg-primary py-4 font-semibold text-white"
        >
          Calculate Fare
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