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

export type RouteCity = (typeof ROUTE_CITIES)[number];
