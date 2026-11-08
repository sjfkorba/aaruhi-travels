
import { getAllOneWayRoutes, type RouteInfo } from "@/lib/route-data";
import RouteMatrix from "./RouteMatrix";

export default async function PopularRoutes() {
  let routes: RouteInfo[] = [];

  try {
    routes = await getAllOneWayRoutes();
  } catch (error) {
    console.error("Aaruhi route matrix loading error:", error);
  }

  return (
    <section
      id="popular-routes"
      className="relative isolate overflow-hidden bg-[#090d18] py-14 sm:py-16 lg:py-20"
      style={{
        backgroundImage: "url('/main image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-[#080d18]/85" />

      {/* Orange and golden ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-orange-950/35 via-transparent to-amber-950/25" />

      {/* Background image texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(rgba(255,255,255,0.10)_0.7px,transparent_0.7px)] [background-size:24px_24px] opacity-20" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <RouteMatrix routes={routes} />
      </div>
    </section>
  );
}
