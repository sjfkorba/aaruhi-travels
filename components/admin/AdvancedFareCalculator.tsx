"use client";

import { useState } from "react";

import {
  Car,
  Route,
  MapPin,
  Calculator,
} from "lucide-react";

export default function AdvancedFareCalculator() {
  const [tripType, setTripType] =
    useState("One Way");

  const [vehicleType, setVehicleType] =
    useState("Swift Dzire");

  const [pickup, setPickup] =
    useState("");

  const [drop, setDrop] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<any>(null);

  const getExtraKm = (
    distance: number
  ) => {
    if (distance <= 50) return 5;

    if (distance <= 100) return 6;

    if (distance <= 150) return 7;

    if (distance <= 250) return 10;

    if (distance <= 400) return 15;

    if (distance <= 600) return 20;

    return 25;
  };

  const getRate = () => {
    switch (vehicleType) {
      case "Swift Dzire":
        return 16;

      case "Ertiga":
        return 20;

      case "Innova":
        return 24;

      case "Innova Crysta":
        return 26;

      default:
        return 16;
    }
  };

  const calculateFare =
    async () => {
      if (!pickup || !drop) {
        alert(
          "Please enter route"
        );
        return;
      }

      try {
        setLoading(true);

        const response =
          await fetch(
            "/api/distance",
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body: JSON.stringify({
                origin: pickup,
                destination:
                  drop,
              }),
            }
          );

        const data =
          await response.json();

        const actualDistance =
          Number(
            data.distanceKm
          );

        const extraKm =
          getExtraKm(
            actualDistance
          );

        const billingKm =
          actualDistance +
          extraKm;

        const rate =
          getRate();

        let fare =
          billingKm * rate;

        if (
          tripType ===
          "Round Trip"
        ) {
          fare =
            billingKm *
            2 *
            (rate - 2);
        }

        setResult({
          actualDistance,
          extraKm,
          billingKm,
          rate,
          fare:
            Math.round(
              fare
            ),
        });
      } catch (error) {
        console.error(
          error
        );

        alert(
          "Unable to calculate fare"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">

      <div className="mb-5 flex items-center gap-3">

        <div className="rounded-2xl bg-primary/10 p-3">

          <Calculator className="h-6 w-6 text-primary" />

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Fare Engine
          </h2>

          <p className="text-sm text-slate-500">
            Quick Fare
            Calculation
          </p>

        </div>

      </div>

      <div className="space-y-4">

        <select
          value={tripType}
          onChange={(e) =>
            setTripType(
              e.target.value
            )
          }
          className="w-full rounded-xl border p-4"
        >
          <option>
            One Way
          </option>

          <option>
            Round Trip
          </option>

          <option>
            Airport Transfer
          </option>
        </select>

        <select
          value={
            vehicleType
          }
          onChange={(e) =>
            setVehicleType(
              e.target.value
            )
          }
          className="w-full rounded-xl border p-4"
        >
          <option>
            Swift Dzire
          </option>

          <option>
            Ertiga
          </option>

          <option>
            Innova
          </option>

          <option>
            Innova Crysta
          </option>
        </select>

        <div className="relative">

          <MapPin className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

          <input
            value={pickup}
            onChange={(e) =>
              setPickup(
                e.target.value
              )
            }
            placeholder="Pickup Location"
            className="w-full rounded-xl border py-4 pl-12 pr-4"
          />

        </div>

        <div className="relative">

          <Route className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

          <input
            value={drop}
            onChange={(e) =>
              setDrop(
                e.target.value
              )
            }
            placeholder="Drop Location"
            className="w-full rounded-xl border py-4 pl-12 pr-4"
          />

        </div>

        <button
          onClick={
            calculateFare
          }
          disabled={
            loading
          }
          className="w-full rounded-xl bg-primary py-4 font-bold text-white"
        >
          {loading
            ? "Calculating..."
            : "Calculate Fare"}
        </button>

        {result && (
          <div className="mt-4 rounded-2xl bg-slate-50 p-5">

            <div className="space-y-3">

              <div className="flex justify-between">
                <span>
                  Actual Distance
                </span>

                <strong>
                  {
                    result.actualDistance
                  }{" "}
                  KM
                </strong>
              </div>

              <div className="flex justify-between">
                <span>
                  Extra KM
                </span>

                <strong>
                  {
                    result.extraKm
                  }{" "}
                  KM
                </strong>
              </div>

              <div className="flex justify-between">
                <span>
                  Billing KM
                </span>

                <strong>
                  {
                    result.billingKm
                  }{" "}
                  KM
                </strong>
              </div>

              <div className="flex justify-between">
                <span>
                  Rate
                </span>

                <strong>
                  ₹
                  {
                    result.rate
                  }
                  /KM
                </strong>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold text-primary">

                <span>
                  Estimated Fare
                </span>

                <span>
                  ₹
                  {
                    result.fare
                  }
                </span>

              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}