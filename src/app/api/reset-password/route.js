"use server";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import SendEmail from "@/actions/Nodemailer";

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/models/User";
import PasswordReset from "@/models/PasswordReset"; // Import PasswordReset model

const uri = process.env.MONGODB_URI; // Define uri variable

export async function POST(req) {
  await mongoose.connect(uri);
  const url = new URL(req.url);
  const email = url.searchParams.get("email");
  const user = await User.findOne({ email: email });

  if (!user) {
    return NextResponse.json({
      message: "User is not registered",
      status: 404,
    });
  }

  const resetToken = crypto.randomBytes(32).toString("hex"); // Generate token
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1-hour expiration
  await PasswordReset.create({ email, resetToken, expiresAt }); // Save in DB

  //send email
  const subject = "Password Reset from FieldMaven";
  const text = `Click here to reset your password: ${process.env.URL}/api/reset-password?token=${resetToken}`;

  //use nodemailer to send email
  await SendEmail({ to: email, subject, text });

  return NextResponse.json({
    message: "Password reset email sent!",
    status: 200,
    email: email,
  });
}

// get method to verify token and redirect to reset password page
export async function GET(req) {
  await mongoose.connect(uri);
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  const reset = await PasswordReset.findOne({
    resetToken: token,
    expiresAt: { $gt: Date.now() },
  });
  if (reset) {
    return NextResponse.redirect(
      `${process.env.URL}/resetPassword?token=${token}`
    );
  } else
    return NextResponse.redirect(
      `${process.env.URL}/resetPassword?token=invalidToken`
    );
}

export async function PUT(req) {
  const body = await req.json();
  const { token, password } = body;

  await mongoose.connect(uri);
  const reset = await PasswordReset.findOne({
    resetToken: token,
    expiresAt: { $gt: Date.now() },
  });
  const userEmail = await reset.email;
  const hashedPassword = await bcrypt.hash(password, 10);
  const userProfile = await User.findOneAndUpdate(
    { email: userEmail },
    { password: hashedPassword },
    { new: true }
  );
  if (!userProfile) {
    return NextResponse.json({ status: 404, message: "User not found" });
  }
  console.log(userProfile);
  return NextResponse.json({
    status: 200,
    message: "Password updated successfully",
    userProfile,
  });
}
