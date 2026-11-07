import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const origin =
      typeof body?.origin === "string" ? body.origin.trim() : "";

    const destination =
      typeof body?.destination === "string"
        ? body.destination.trim()
        : "";

    if (!origin || !destination) {
      return NextResponse.json(
        { error: "Pickup and drop locations are required." },
        { status: 400 }
      );
    }

    if (origin.length > 300 || destination.length > 300) {
      return NextResponse.json(
        { error: "Location details are too long." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      console.error("GOOGLE_MAPS_API_KEY is missing.");

      return NextResponse.json(
        { error: "Distance service is temporarily unavailable." },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://routes.googleapis.com/directions/v2:computeRoutes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "routes.distanceMeters",
        },
        body: JSON.stringify({
          origin: {
            address: origin,
          },
          destination: {
            address: destination,
          },
          travelMode: "DRIVE",
          routingPreference: "TRAFFIC_UNAWARE",
          units: "METRIC",
        }),
        signal: AbortSignal.timeout(15000),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Google Routes API Error:", {
        status: response.status,
        message: data?.error?.message,
      });

      return NextResponse.json(
        { error: "Unable to calculate route distance." },
        { status: 502 }
      );
    }

    const distanceMeters = data?.routes?.[0]?.distanceMeters;

    if (
      typeof distanceMeters !== "number" ||
      !Number.isFinite(distanceMeters) ||
      distanceMeters <= 0
    ) {
      return NextResponse.json(
        { error: "No valid driving route found for these locations." },
        { status: 404 }
      );
    }

    const distanceKm = Math.round(distanceMeters / 1000);

    if (distanceKm <= 0) {
      return NextResponse.json(
        { error: "Calculated distance is invalid." },
        { status: 422 }
      );
    }

    return NextResponse.json({
      distanceKm,
    });
  } catch (error) {
    console.error("Distance API Error:", error);

    return NextResponse.json(
      { error: "Unable to calculate distance. Please try again." },
      { status: 500 }
    );
  }
}