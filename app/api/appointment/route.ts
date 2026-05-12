import { NextRequest, NextResponse } from "next/server"

const RECIPIENT_EMAIL = "apexmedcarellc@gmail.com"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    const {
      firstName,
      lastName,
      email,
      phone,
      service,
      location,
      preferredDate,
      preferredTime,
      insurance,
      referralSource,
      notes,
    } = formData

    // Format the email content
    const emailSubject = `New Appointment Request - ${firstName} ${lastName}`
    const emailBody = `
NEW APPOINTMENT REQUEST
========================

PATIENT INFORMATION
-------------------
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Insurance: ${insurance || "Not provided"}

APPOINTMENT DETAILS
-------------------
Service: ${service}
Location: ${location}
Preferred Date: ${preferredDate}
Preferred Time: ${preferredTime}

ADDITIONAL INFORMATION
----------------------
Referral Source: ${referralSource || "Not specified"}
Notes: ${notes || "None"}

---
This appointment request was submitted via the Apex Medical Care website.
Please contact the patient within 24 hours to confirm their appointment.
    `.trim()

    // Create mailto link data for client-side fallback
    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

    // In production, you would integrate with an email service like:
    // - Resend (recommended for Vercel)
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP
    
    // For now, we'll return success and the mailto link as a fallback
    // The frontend will handle opening the email client if needed
    
    return NextResponse.json({
      success: true,
      message: "Appointment request received",
      mailtoLink,
      data: {
        recipient: RECIPIENT_EMAIL,
        subject: emailSubject,
        body: emailBody,
      }
    })
  } catch (error) {
    console.error("Error processing appointment request:", error)
    return NextResponse.json(
      { success: false, error: "Failed to process appointment request" },
      { status: 500 }
    )
  }
}
