import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { origin, destination } = await req.json();

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    const response = await fetch(
      "https://routes.googleapis.com/directions/v2:computeRoutes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey!,
          "X-Goog-FieldMask":
            "routes.distanceMeters",
        },
        body: JSON.stringify({
          origin: {
            address: origin,
          },
          destination: {
            address: destination,
          },
          travelMode: "DRIVE",
        }),
      }
    );

    const data = await response.json();

    const distanceMeters =
      data?.routes?.[0]?.distanceMeters || 0;

    const distanceKm =
      Math.round(distanceMeters / 1000);

    return NextResponse.json({
      distanceKm,
    });
  } catch {
    return NextResponse.json(
      { error: "Distance error" },
      { status: 500 }
    );
  }
}