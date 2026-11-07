
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
      className="overflow-hidden bg-[#f8f8f8] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <RouteMatrix routes={routes} />
      </div>
    </section>
  );
}
