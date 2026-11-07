
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const AGENCY_NAME = "Aaruhi Travels";
const ADMIN_EMAIL = "khaturides@gmail.com";
const CONTACT_NUMBER = "9244137353";

type EnquiryData = {
  type?: string;
  agencyName?: string;
  tripType?: string;
  name?: string;
  mobile?: string;
  pickup?: string;
  drop?: string;
  travelDate?: string;
  journeyTime?: string;
  car?: string;
  note?: string;
  company?: string;
  serviceType?: string;
  city?: string;
};

function clean(value: unknown, maxLength = 500): string {
  return typeof value === "string"
    ? value.trim().slice(0, maxLength)
    : "";
}

function safe(value: unknown): string {
  return String(value ?? "-").replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

function createTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    throw new Error("EMAIL_USER or EMAIL_PASS is missing.");
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
  });
}

function emailLayout(content: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body style="
        margin:0;
        padding:25px 10px;
        background:#fff7ed;
        font-family:Arial,Helvetica,sans-serif;
      ">

        <div style="
          max-width:650px;
          margin:auto;
          background:#ffffff;
          border:1px solid #fed7aa;
          border-radius:14px;
          overflow:hidden;
        ">

          <div style="
            background:#f97316;
            padding:25px;
            color:#ffffff;
          ">
            <h1 style="
              margin:0;
              font-size:25px;
              letter-spacing:1px;
            ">
              Aaruhi Travels
            </h1>

            <p style="
              margin:7px 0 0;
              font-size:12px;
              letter-spacing:1.5px;
            ">
              TAXI &amp; TRAVEL SERVICES
            </p>
          </div>

          <div style="padding:25px;">
            ${content}
          </div>

          <div style="
            padding:18px;
            text-align:center;
            background:#fff7ed;
            border-top:1px solid #fed7aa;
          ">
            <strong style="color:#ea580c;">
              ${AGENCY_NAME}
            </strong>

            <p style="
              margin:6px 0;
              color:#64748b;
              font-size:12px;
            ">
              ${CONTACT_NUMBER}
            </p>

            <p style="
              margin:0;
              color:#94a3b8;
              font-size:11px;
            ">
              Website Enquiry Notification
            </p>
          </div>

        </div>
      </body>
    </html>
  `;
}

function detailsTable(rows: [string, unknown][]): string {
  return `
    <table style="
      width:100%;
      border-collapse:collapse;
    ">
      <tbody>
        ${rows.map(([label, value], index) => `
          <tr bgcolor="${index % 2 === 0 ? "#fff7ed" : "#ffffff"}">

            <td style="
              padding:12px;
              border-bottom:1px solid #ffedd5;
              color:#64748b;
              font-size:13px;
              width:38%;
              vertical-align:top;
            ">
              ${safe(label)}
            </td>

            <td style="
              padding:12px;
              border-bottom:1px solid #ffedd5;
              color:#172033;
              font-size:13px;
              font-weight:bold;
              word-break:break-word;
            ">
              ${safe(value || "-")}
            </td>

          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function actionButtons(mobile: string): string {
  return `
    <div style="text-align:center;margin-top:25px;">

      <a
        href="tel:+91${mobile}"
        style="
          display:inline-block;
          background:#f97316;
          color:#ffffff;
          padding:13px 22px;
          border-radius:8px;
          text-decoration:none;
          font-weight:bold;
          margin:4px;
        "
      >
        CALL CUSTOMER
      </a>

      <a
        href="https://wa.me/91${mobile}"
        style="
          display:inline-block;
          background:#15803d;
          color:#ffffff;
          padding:13px 22px;
          border-radius:8px;
          text-decoration:none;
          font-weight:bold;
          margin:4px;
        "
      >
        WHATSAPP
      </a>

    </div>
  `;
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as EnquiryData;

    // =========================================
    // EXTRACT ENQUIRY DETAILS
    // =========================================

    const type = clean(data.type, 30);
    const name = clean(data.name, 100);
    const mobile = clean(data.mobile, 30);

    const tripType = clean(data.tripType, 50);
    const pickup = clean(data.pickup, 300);
    const drop = clean(data.drop, 300);

    const travelDate = clean(data.travelDate, 50);
    const journeyTime = clean(data.journeyTime, 50);

    const car = clean(data.car, 100);
    const note = clean(data.note, 2000);

    const company = clean(data.company, 150);
    const serviceType = clean(data.serviceType, 150);
    const city = clean(data.city, 100);

    // =========================================
    // CUSTOMER VALIDATION
    // =========================================

    if (!name || !mobile) {
      return NextResponse.json(
        {
          success: false,
          error: "Name and mobile number are required.",
        },
        { status: 400 }
      );
    }

    const cleanMobile = mobile.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid 10-digit mobile number.",
        },
        { status: 400 }
      );
    }

    // =========================================
    // EMAIL CONFIGURATION
    // =========================================

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      throw new Error("SMTP credentials are missing.");
    }

    let subject = "";
    let html = "";
    let text = "";

    // =========================================
    // B2B CORPORATE ENQUIRY
    // =========================================

    if (type === "Corporate") {
      if (!company || !city || !serviceType) {
        return NextResponse.json(
          {
            success: false,
            error: "Company, city and service type are required.",
          },
          { status: 400 }
        );
      }

      const rows: [string, unknown][] = [
        ["Agency Name", AGENCY_NAME],
        ["Enquiry Type", "Corporate B2B"],
        ["Company Name", company],
        ["Contact Person", name],
        ["Mobile Number", cleanMobile],
        ["City / Location", city],
        ["Service Required", serviceType],
        ["Additional Details", note || "N/A"],
      ];

      subject = `NEW B2B ENQUIRY | ${AGENCY_NAME} | ${company}`;

      html = emailLayout(`
        <div style="
          padding:18px;
          background:#fff7ed;
          border-left:4px solid #f97316;
          border-radius:8px;
          margin-bottom:22px;
        ">
          <h2 style="margin:0;color:#c2410c;">
            NEW CORPORATE B2B ENQUIRY
          </h2>

          <p style="
            margin:7px 0 0;
            color:#9a3412;
            font-size:13px;
          ">
            A new corporate enquiry has been received by Aaruhi Travels.
          </p>
        </div>

        <h3 style="color:#172033;">
          Corporate Enquiry Details
        </h3>

        ${detailsTable(rows)}

        ${actionButtons(cleanMobile)}
      `);

      text = rows
        .map(([label, value]) => `${label}: ${value ?? "-"}`)
        .join("\n");
    }

    // =========================================
    // B2C TAXI ENQUIRY
    // =========================================

    else {
      if (!pickup || !drop) {
        return NextResponse.json(
          {
            success: false,
            error: "Pickup and drop locations are required.",
          },
          { status: 400 }
        );
      }

      const rows: [string, unknown][] = [
        ["Agency Name", AGENCY_NAME],
        ["Enquiry Type", "B2C Taxi"],
        ["Customer Name", name],
        ["Mobile Number", cleanMobile],
        ["Trip Type", tripType || "Taxi"],
        ["Pickup Location", pickup],
        ["Drop Location", drop],
        ["Travel Date", travelDate || "Flexible"],
        ["Pickup Time", journeyTime || "Not specified"],
        ["Vehicle Preference", car || "Any"],
        ["Additional Details", note || "N/A"],
      ];

      subject = `NEW TAXI ENQUIRY | ${AGENCY_NAME} | ${pickup} to ${drop}`;

      html = emailLayout(`
        <div style="
          padding:18px;
          background:#fff7ed;
          border-left:4px solid #f97316;
          border-radius:8px;
          margin-bottom:22px;
        ">
          <h2 style="margin:0;color:#c2410c;">
            NEW ${safe(tripType || "TAXI").toUpperCase()} ENQUIRY
          </h2>

          <p style="
            margin:7px 0 0;
            color:#9a3412;
            font-size:13px;
          ">
            A new customer enquiry has been received from Aaruhi Travels website.
          </p>
        </div>

        <h3 style="color:#172033;">
          Customer &amp; Journey Details
        </h3>

        ${detailsTable(rows)}

        ${actionButtons(cleanMobile)}
      `);

      text = rows
        .map(([label, value]) => `${label}: ${value ?? "-"}`)
        .join("\n");
    }

    // =========================================
    // SEND ADMIN EMAIL
    // =========================================

    const transporter = createTransporter();

    const result = await transporter.sendMail({
      from: `"${AGENCY_NAME} Website Enquiries" <${emailUser}>`,
      to: ADMIN_EMAIL,
      subject: subject.replace(/[\r\n]/g, " ").slice(0, 200),
      text,
      html,
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry email sent successfully.",
      agencyName: AGENCY_NAME,
      messageId: result.messageId,
    });

  } catch (error) {
    console.error("Aaruhi Travels Email API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to send enquiry email. Please try again.",
      },
      { status: 500 }
    );
  }
}
