
import Footer from "../../components/Footer";
import Navbar from "../../components/navbar";

export const metadata = {
  title: "Booking Policy | Aaruhi Travels",
  description:
    "Read the Booking Policy of Aaruhi Travels regarding taxi reservations, fare estimates, booking confirmation, customer responsibilities and travel guidelines.",
};

export default function BookingPolicyPage() {
  return (
    <>
      <Navbar
      />

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <p className="mb-8 text-sm text-muted-foreground">
              Last Updated: January 2026
            </p>

            <div className="space-y-8 leading-8 text-muted-foreground">

              <section>
                <h2 className="mb-4 text-2xl font-bold text-primary">
                  1. Booking Overview
                </h2>

                <p>
                  Aaruhi Travels provides one-way and intercity taxi services
                  across Chhattisgarh. Customers can make bookings through our
                  website, WhatsApp, phone calls, or other official booking
                  channels. All bookings are subject to vehicle availability,
                  route accessibility, and operational feasibility.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-primary">
                  2. Booking Request Process
                </h2>

                <p>
                  To request a booking, customers may be required to provide:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Full Name</li>
                  <li>Mobile Number</li>
                  <li>Pickup Location</li>
                  <li>Drop Location</li>
                  <li>Travel Date</li>
                  <li>Preferred Pickup Time</li>
                  <li>Special Travel Requirements (if any)</li>
                </ul>

                <p className="mt-4">
                  Accurate information helps us provide faster confirmations
                  and better travel arrangements.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-primary">
                  3. Booking Confirmation
                </h2>

                <p>
                  Submission of a booking request does not automatically
                  guarantee a confirmed booking.
                </p>

                <p className="mt-4">
                  A booking is considered confirmed only when Aaruhi Travels
                  sends confirmation through WhatsApp, phone call, SMS,
                  email, or another official communication channel.
                </p>

                <p className="mt-4">
                  Customers are advised not to make travel decisions until
                  official confirmation is received.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-primary">
                  4. Fare Estimates
                </h2>

                <p>
                  Fare estimates displayed on the website or provided by our
                  team are indicative and may vary depending on:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Travel distance</li>
                  <li>Route conditions</li>
                  <li>Toll charges</li>
                  <li>Parking fees</li>
                  <li>Traffic situations</li>
                  <li>Vehicle category</li>
                  <li>Seasonal demand</li>
                  <li>Pickup timing</li>
                </ul>

                <p className="mt-4">
                  Final fare should always be confirmed before the journey
                  begins.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-primary">
                  5. Advance Payments
                </h2>

                <p>
                  Certain bookings may require advance payment to reserve a
                  vehicle. Advance payment requirements may vary depending on
                  route, vehicle type, travel date, and operational conditions.
                </p>

                <p className="mt-4">
                  Payment details will be communicated during the booking
                  confirmation process.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-primary">
                  6. Pickup Responsibilities
                </h2>

                <p>
                  Customers are expected to be available at the agreed pickup
                  location at the scheduled time.
                </p>

                <p className="mt-4">
                  Delays by customers may result in waiting charges or
                  operational adjustments depending on circumstances.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-primary">
                  7. Route & Travel Modifications
                </h2>

                <p>
                  Changes to pickup location, destination, travel schedule,
                  or route after confirmation may result in revised fares
                  and operational adjustments.
                </p>

                <p className="mt-4">
                  Such requests are subject to availability and approval.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-primary">
                  8. Vehicle Allocation
                </h2>

                <p>
                  While every effort is made to provide the requested vehicle
                  category, Aaruhi Travels reserves the right to provide an
                  equivalent or upgraded vehicle if required due to operational
                  reasons.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-primary">
                  9. Customer Conduct
                </h2>

                <p>
                  Customers are expected to maintain respectful behavior
                  throughout the journey.
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>No illegal activities.</li>
                  <li>No transportation of prohibited items.</li>
                  <li>No damage to vehicle property.</li>
                  <li>No abusive behavior toward drivers.</li>
                </ul>

                <p className="mt-4">
                  Violation of these rules may result in termination of service.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-primary">
                  10. Delays & Force Majeure
                </h2>

                <p>
                  Aaruhi Travels shall not be held responsible for delays caused
                  by weather conditions, road closures, accidents, traffic,
                  government restrictions, strikes, natural disasters, or any
                  other events beyond our reasonable control.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-primary">
                  11. Cancellation & Refunds
                </h2>

                <p>
                  Cancellation and refund requests are governed by our
                  Refund & Cancellation Policy. Customers are encouraged to
                  review that policy before making a booking.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-primary">
                  12. Service Coverage
                </h2>

                <p>
                  Aaruhi Travels primarily serves major routes across
                  Chhattisgarh including:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Korba to Bilaspur</li>
                  <li>Bilaspur to Korba</li>
                  <li>Korba to Raipur</li>
                  <li>Raipur to Korba</li>
                  <li>Korba to Raigarh</li>
                  <li>Raigarh to Korba</li>
                  <li>Korba to Dharamjaigarh</li>
                  <li>Dharamjaigarh to Korba</li>
                </ul>

                <p className="mt-4">
                  Additional routes may be available based on customer
                  requirements and vehicle availability.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-primary">
                  13. Changes To Booking Policy
                </h2>

                <p>
                  Aaruhi Travels reserves the right to modify this Booking
                  Policy at any time. Updated versions will be published on
                  this page and become effective immediately after publication.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-primary">
                  14. Contact Information
                </h2>

                <div className="rounded-2xl bg-slate-50 p-6">

                  <p>
                    <strong>Aaruhi Travels</strong>
                  </p>

                  <p>
                    Phone: +91 92441 37353
                  </p>

                  <p>
                    Email: aaruhitravelskrb@gmail.com
                  </p>

                  <p>
                    Service Area: Chhattisgarh, India
                  </p>

                </div>
              </section>

            </div>

          </div>

        </div>
      </section>
      <Footer/>
    </>
  );
}