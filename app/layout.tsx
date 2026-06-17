import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aaruhitravels.com"),

  title: {
    default: "Aaruhi Travels | One Way Taxi Service in Chhattisgarh",
    template: "%s | Aaruhi Travels",
  },

  description:
    "Book affordable one way taxi services across Chhattisgarh. Korba, Bilaspur, Raipur, Raigarh, Dharamjaigarh and more. Instant booking, professional drivers and transparent fares.",

  keywords: [
    "Aaruhi Travels",
    "One Way Taxi",
    "Taxi Service Chhattisgarh",
    "Korba Taxi Service",
    "Raipur Taxi Service",
    "Bilaspur Taxi Service",
    "Raigarh Taxi Service",
    "Cab Booking Chhattisgarh",
    "Airport Transfer",
    "Outstation Taxi",
  ],

  authors: [
    {
      name: "Aaruhi Travels",
    },
  ],

  creator: "Aaruhi Travels",

  openGraph: {
    title: "Aaruhi Travels",
    description:
      "Affordable One Way Taxi Services Across Chhattisgarh",
    url: "https://aaruhitravels.com",
    siteName: "Aaruhi Travels",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">

        {/* Google Maps Places API */}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
          strategy="afterInteractive"
        />

        {children}

      </body>
    </html>
  );
}