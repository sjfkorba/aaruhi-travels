
export const ROUTE_CITIES = [
  { name: "Korba", state: "Chhattisgarh" },
  { name: "Raipur", state: "Chhattisgarh" },
  { name: "Bilaspur", state: "Chhattisgarh" },
  { name: "Durg", state: "Chhattisgarh" },
  { name: "Jharsuguda", state: "Odisha" },
  { name: "Ambikapur", state: "Chhattisgarh" },
  { name: "Raigarh", state: "Chhattisgarh" },
  { name: "Jagdalpur", state: "Chhattisgarh" },
] as const;

export type RouteInfo = {
  from: string;
  to: string;
  fromState: string;
  toState: string;
  slug: string;
  distanceKm: number;
  durationText: string;
};

type MatrixElement = {
  originIndex: number;
  destinationIndex: number;
  distanceMeters?: number;
  duration?: string;
  condition?: string;
  status?: {
    code?: number;
    message?: string;
  };
};

function slugify(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

export function createRouteSlug(from: string, to: string) {
  return `${slugify(from)}-to-${slugify(to)}`;
}

function formatDuration(duration: string): string {
  const seconds = Number.parseFloat(duration.replace("s", ""));

  if (!Number.isFinite(seconds) || seconds <= 0) {
    return "Time unavailable";
  }

  const totalMinutes = Math.round(seconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${totalMinutes} min`;
  }

  if (minutes === 0) {
    return `${hours} hr`;
  }

  return `${hours} hr ${minutes} min`;
}

export async function getAllOneWayRoutes(): Promise<RouteInfo[]> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    throw new Error("GOOGLE_MAPS_API_KEY is missing.");
  }

  const cities = [...ROUTE_CITIES];

  const waypoints = cities.map((city) => ({
    waypoint: {
      address: `${city.name}, ${city.state}, India`,
    },
  }));

  const response = await fetch(
    "https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "originIndex,destinationIndex,distanceMeters,duration,condition,status",
      },
      body: JSON.stringify({
        origins: waypoints,
        destinations: waypoints,
        travelMode: "DRIVE",
        routingPreference: "TRAFFIC_UNAWARE",
        languageCode: "en-IN",
        units: "METRIC",
      }),
      next: {
        revalidate: 86400,
      },
    }
  );

  if (!response.ok) {
    const error = await response.text();

    console.error("Google Route Matrix Error:", error);

    throw new Error("Google route calculation failed.");
  }

  const matrix = (await response.json()) as MatrixElement[];

  const routes: RouteInfo[] = [];

  for (const item of matrix) {
    const from = cities[item.originIndex];
    const to = cities[item.destinationIndex];

    if (!from || !to) continue;

    // Same-city routes are not needed.
    if (item.originIndex === item.destinationIndex) continue;

    if (
  item.condition !== "ROUTE_EXISTS" ||
  typeof item.distanceMeters !== "number" ||
  !item.duration
) {
  continue;
}

    routes.push({
      from: from.name,
      to: to.name,
      fromState: from.state,
      toState: to.state,
      slug: createRouteSlug(from.name, to.name),
      distanceKm: Math.round(item.distanceMeters / 1000),
      durationText: formatDuration(item.duration),
    });
  }

  return routes;
}

export async function getOneWayRoute(
  slug: string
): Promise<RouteInfo | null> {
  const routes = await getAllOneWayRoutes();

  return routes.find((route) => route.slug === slug) ?? null;
}
