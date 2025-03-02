import { NextResponse } from "next/server";
import SendEmail from "@/actions/Nodemailer.js";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Send email to admin
    await SendEmail({
      to: process.env.ADMIN_EMAIL, // Change this to the admin email
      subject: "New Contact Form Submission",
      text: `You received a message from ${name} (${email}):\n\n${message}`,
    });

    // Send acknowledgment email to the user
    await SendEmail({
      to: email,
      subject: "Thank You for Contacting Us!",
      text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you soon.\n\nBest regards,\nCrop App Team`,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error handling contact form:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
