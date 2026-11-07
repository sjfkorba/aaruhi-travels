export type TaxiService = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroDescription: string;
  tripType: "One Way" | "Round Trip" | "Airport Transfer" | "";
  keywords: string[];
};

export const TAXI_SERVICES: TaxiService[] = [
  {
    slug: "one-way-taxi",
    title: "One Way Taxi Service",
    shortTitle: "One Way Taxi",
    description: "Book a one-way cab for intercity travel with a convenient pickup and drop.",
    heroDescription: "Plan a comfortable one-way journey without booking a return cab. Share your pickup, destination and travel details with Aaruhi Travels to enquire about available vehicles.",
    tripType: "One Way",
    keywords: ["one way taxi in Raipur", "one way cab in Chhattisgarh", "intercity one way taxi"],
  },
  {
    slug: "round-trip-taxi",
    title: "Round Trip Taxi Booking",
    shortTitle: "Round Trip Booking",
    description: "Plan a return journey with a cab for your complete trip and ride back.",
    heroDescription: "Book a cab for your onward and return journey. Share your travel plan, dates and preferred vehicle to enquire about a round-trip taxi with Aaruhi Travels.",
    tripType: "Round Trip",
    keywords: ["round trip taxi in Raipur", "return cab service", "round trip cab in Chhattisgarh"],
  },
  {
    slug: "local-taxi",
    title: "Local Taxi Service",
    shortTitle: "Local Taxi Services",
    description: "Hire a cab for local travel, meetings, shopping and city transfers.",
    heroDescription: "Need a cab for local travel, appointments, shopping or family visits? Send your journey requirements to Aaruhi Travels and enquire about a suitable vehicle.",
    tripType: "",
    keywords: ["local taxi service in Raipur", "city cab booking", "local cab in Chhattisgarh"],
  },
  {
    slug: "outstation-taxi",
    title: "Outstation Taxi Service",
    shortTitle: "Outstation Booking",
    description: "Travel between cities across Chhattisgarh and nearby states.",
    heroDescription: "Travel between cities with a cab suited to your outstation journey. Share your route, travel date and vehicle preference to enquire with Aaruhi Travels.",
    tripType: "",
    keywords: ["outstation taxi from Raipur", "intercity cab service", "outstation cab in Chhattisgarh"],
  },
  {
    slug: "airport-transfer",
    title: "Airport Pickup and Drop Taxi",
    shortTitle: "Airport Pickup & Drop",
    description: "Arrange airport transfers with a pre-booked cab for pickup and drop-off.",
    heroDescription: "Arrange a convenient airport pickup or drop with a pre-booked cab. Share your flight schedule, pickup point and destination to enquire about availability.",
    tripType: "Airport Transfer",
    keywords: ["Raipur airport taxi", "airport cab pickup and drop", "Swami Vivekananda Airport taxi"],
  },
  {
    slug: "railway-station-transfer",
    title: "Railway Station Taxi Transfer",
    shortTitle: "Railway Station Transfer",
    description: "Book a pickup or drop to railway stations for convenient train connections.",
    heroDescription: "Arrange a cab for your railway station pickup or drop. Share your train schedule, pickup point and destination with Aaruhi Travels.",
    tripType: "",
    keywords: ["Raipur railway station taxi", "railway station cab", "train station pickup taxi"],
  },
  {
    slug: "corporate-taxi",
    title: "Corporate Taxi Service",
    shortTitle: "Corporate Taxi Service",
    description: "Arrange business travel and employee transportation with sedan and SUV options.",
    heroDescription: "Organise business travel, employee movement and guest transportation with sedan and SUV cab options. Contact Aaruhi Travels with your corporate travel requirements.",
    tripType: "",
    keywords: ["corporate taxi service in Raipur", "business cab booking", "corporate car rental Chhattisgarh"],
  },
  {
    slug: "event-taxi",
    title: "Event Taxi Booking",
    shortTitle: "Event Taxi Booking",
    description: "Coordinate cab requirements for weddings, conferences and group events.",
    heroDescription: "Planning transportation for a wedding, family function, conference or event? Share your dates, locations and vehicle requirements to enquire about coordinated cab arrangements.",
    tripType: "",
    keywords: ["event taxi booking in Raipur", "wedding cab service", "event transportation Chhattisgarh"],
  },
];

export function getTaxiService(slug: string) {
  return TAXI_SERVICES.find((service) => service.slug === slug);
}
